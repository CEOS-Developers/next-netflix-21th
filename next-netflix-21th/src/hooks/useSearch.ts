import { useCallback, useEffect, useState } from "react";

import { getMoviePopular, searchMulti } from "@/apis/tmdb";

import { Movie, TMDBListResponse, TrendingItem } from "@/types/tmdb";

export const useSearch = () => {
  const [items, setItems] = useState<TrendingItem[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  // 인기 영화 가져오기
  const fetchPopularMovies = useCallback(async (pageNum: number) => {
    setIsLoading(true);
    try {
      const res = await getMoviePopular(pageNum);
      const { results, total_pages }: TMDBListResponse<Movie> = res.data;

      setItems(prev => {
        const existingIds = new Set(prev.map(item => item.id));
        const filtered = results.filter(item => !existingIds.has(item.id));
        return [...prev, ...filtered];
      });

      setHasMore(pageNum < total_pages);
    } catch (err) {
      console.error("인기 영화 로딩 실패", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // 검색 결과 가져오기 (/search/multi 사용, person 제외)
  const fetchSearchResults = useCallback(
    async (searchQuery: string, pageNum: number) => {
      setIsLoading(true);
      try {
        const res = await searchMulti(searchQuery, pageNum);
        const {
          results,
          total_pages,
          page,
        }: TMDBListResponse<TrendingItem | { media_type: "person" }> = res.data;

        const filtered = results.filter(
          item => item.media_type === "movie" || item.media_type === "tv",
        ) as TrendingItem[];

        setItems(prev => [...prev, ...filtered]);
        setHasMore(page < total_pages);
      } catch (err) {
        console.error("검색 실패", err);
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  const handleSearch = useCallback(
    (input: string) => {
      const trimmed = input.trim().replace(/\s+/g, " ");
      setQuery(trimmed);
      setPage(1);
      setItems([]);

      if (!trimmed) {
        setIsSearching(false);
        return fetchPopularMovies(1);
      } else {
        setIsSearching(true);
        return fetchSearchResults(trimmed, 1);
      }
    },
    [fetchPopularMovies, fetchSearchResults],
  );

  const fetchNext = useCallback(() => {
    const nextPage = page + 1;
    if (isSearching) {
      fetchSearchResults(query, nextPage);
    } else {
      fetchPopularMovies(nextPage);
    }
    setPage(nextPage);
  }, [page, query, isSearching, fetchPopularMovies, fetchSearchResults]);

  useEffect(() => {
    handleSearch("").finally(() => setIsInitialLoading(false));
  }, [handleSearch]);

  return {
    items,
    isLoading,
    hasMore,
    page,
    setPage,
    isSearching,
    query,
    handleSearch,
    isInitialLoading,
    fetchNext,
  };
};
