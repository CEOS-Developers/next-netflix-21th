"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import SearchInput from "@/components/search/SearchInput";
import MovieCard from "@/components/search/MovieCard";
import { useSearchMovies, usePopularMovies } from "@/hooks/useTMDB";
import { Movie } from "@/types/tmdb";
import { Suspense } from "react";
import MovieCardSkeleton from "@/components/search/MovieCardSkeleton";

const ITEMS_PER_PAGE = 10;

const SearchContent = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [page, setPage] = useState(1);
  const [allMovies, setAllMovies] = useState<Movie[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const {
    data: searchResults,
    isLoading: isSearchLoading,
    error: searchError,
  } = useSearchMovies(query, page);
  const {
    data: popularMovies,
    isLoading: isPopularLoading,
    error: popularError,
  } = usePopularMovies(page);

  const lastMovieRef = useCallback((node: HTMLDivElement) => {
    if (observerRef.current) observerRef.current.disconnect();
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 0.5 },
    );
    if (node) observerRef.current.observe(node);
  }, []);

  useEffect(() => {
    setPage(1);
    setAllMovies([]);
  }, [query]);

  useEffect(() => {
    const newMovies = query ? searchResults?.results : popularMovies?.results;
    if (newMovies) {
      setAllMovies((prev) =>
        page === 1 ? newMovies : [...prev, ...newMovies],
      );
    }
  }, [searchResults?.results, popularMovies?.results, page, query]);

  const isLoading = query ? isSearchLoading : isPopularLoading;
  const error = query ? searchError : popularError;

  const hasMore = useMemo(() => {
    if (query) {
      return (searchResults?.page ?? 0) < (searchResults?.total_pages ?? 0);
    }
    return (popularMovies?.page ?? 0) < (popularMovies?.total_pages ?? 0);
  }, [query, searchResults, popularMovies]);

  const renderContent = () => {
    if (error) {
      return (
        <div className="flex h-full items-center justify-center text-white">
          Error loading movies. Please try again later.
        </div>
      );
    }

    if (isLoading && page === 1) {
      return Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
        <MovieCardSkeleton key={index} />
      ));
    }

    if (allMovies.length === 0) {
      return (
        <div className="flex h-full items-center justify-center text-white">
          No results found
        </div>
      );
    }

    return allMovies.map((movie, index) => (
      <div
        key={`${movie.id}-${index}`}
        ref={
          index === allMovies.length - 1 && hasMore ? lastMovieRef : undefined
        }
      >
        <MovieCard movie={movie} />
      </div>
    ));
  };

  return (
    <div className="flex h-screen w-full flex-col bg-black pt-11">
      <SearchInput />
      <section className="mb-12 flex min-h-10 flex-col pt-5">
        <h1 className="h1 ml-2 text-white">
          {query ? "Search Results" : "Top Searches"}
        </h1>
        <article className="no-scrollbar mt-5 flex h-fit w-full flex-1 flex-col space-y-[0.19rem] overflow-y-auto">
          {renderContent()}
          {isLoading &&
            page > 1 &&
            Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
              <div key={index} className="animate-skeleton h-19 w-full" />
            ))}
        </article>
      </section>
    </div>
  );
};

const Search = () => {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen items-center justify-center text-white">
          Loading...
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  );
};

export default Search;
