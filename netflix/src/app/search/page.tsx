"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, useRef, useCallback } from "react";
import SearchInput from "@/components/search/SearchInput";
import MovieCard from "@/components/search/MovieCard";
import { useSearchMovies, usePopularMovies } from "@/hooks/useTMDB";
import { Movie } from "@/types/tmdb";
import { Suspense } from "react";
const SearchContent = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const [page, setPage] = useState(1);
  const [allMovies, setAllMovies] = useState<Movie[]>([]);
  const [firstLoad, setFirstLoad] = useState(false);

  const observerRef = useRef<IntersectionObserver | null>(null);

  const lastMovieRef = useCallback((node: HTMLDivElement) => {
    if (observerRef.current) observerRef.current.disconnect();
    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    });
    if (node) observerRef.current.observe(node);
  }, []);

  const { data: searchResults, isLoading: isSearchLoading } = useSearchMovies(
    debouncedQuery,
    page,
  );
  const { data: popularMovies, isLoading: isPopularLoading } =
    usePopularMovies(page);

  useEffect(() => {
    if (!firstLoad) {
      setFirstLoad(true); // 첫 번째 로드 여부 확인
      return;
    }
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
      setPage(1);
      setAllMovies([]); // 입력 쿼리 바뀔때마다 영화 목록 초기화
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    const newMovies = query ? searchResults?.results : popularMovies?.results;
    if (newMovies) {
      if (page === 1) {
        setAllMovies(newMovies);
      } else {
        setAllMovies((prev) => [...prev, ...newMovies]);
      }
    }
  }, [searchResults?.results, popularMovies?.results, page, query]);

  const isLoading = isSearchLoading || isPopularLoading;

  const hasMore = query
    ? (searchResults?.page ?? 0) < (searchResults?.total_pages ?? 0)
    : (popularMovies?.page ?? 0) < (popularMovies?.total_pages ?? 0);

  return (
    <div className="flex h-screen w-full flex-col bg-black pt-11">
      <SearchInput />
      <section className="mb-12 flex min-h-10 flex-col pt-5">
        <p className="h1 ml-2 text-white">
          {query ? "Search Results" : "Top Searches"}
        </p>
        <article className="no-scrollbar mt-5 flex h-fit w-full flex-1 flex-col space-y-[0.19rem] overflow-y-auto">
          {isLoading && page === 1 ? (
            <div className="text-white">Loading...</div>
          ) : allMovies.length > 0 ? (
            allMovies.map((movie, index) => (
              <div
                key={`${movie.id}-${index}`}
                ref={
                  index === allMovies.length - 1 && hasMore
                    ? lastMovieRef
                    : undefined
                }
              >
                <MovieCard movie={movie} />
              </div>
            ))
          ) : (
            <div className="text-white">No results found</div>
          )}
          {isLoading && page > 1 && (
            <div className="text-white">Loading more...</div>
          )}
        </article>
      </section>
    </div>
  );
};

const Search = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchContent />
    </Suspense>
  );
};

export default Search;
