import { useCallback, useEffect, useState } from "react";

import { Media } from "@/types/tmdb";

import { fetchPopular, fetchSearch } from "./useSearchFetcher";

export const useSearch = () => {
  const [items, setItems] = useState<Media[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  const fetchItems = useCallback(
    async (pageNum: number) => {
      setIsLoading(true);
      try {
        const newItems = isSearching
          ? await fetchSearch(query, pageNum)
          : await fetchPopular(pageNum);

        setItems(prev => {
          const existingIds = new Set(prev.map(item => item.id));
          return [...prev, ...newItems.filter(i => !existingIds.has(i.id))];
        });

        setHasMore(newItems.length > 0);
      } catch (e) {
        console.error("데이터 로딩 실패", e);
      } finally {
        setIsLoading(false);
      }
    },
    [isSearching, query],
  );

  const handleSearch = useCallback((input: string) => {
    const trimmed = input.trim().replace(/\s+/g, " ");
    setQuery(trimmed);
    setPage(1);
    setItems([]);

    setIsSearching(Boolean(trimmed));
  }, []);

  const fetchNext = useCallback(() => {
    const next = page + 1;
    setPage(next);
    fetchItems(next);
  }, [page, fetchItems]);

  useEffect(() => {
    fetchItems(1).finally(() => setIsInitialLoading(false));
  }, [fetchItems]);

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
