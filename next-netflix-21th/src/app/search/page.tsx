"use client";

import { useCallback, useMemo, useRef, useState } from "react";

import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { useSearch } from "@/hooks/useSearch";

import SearchBar from "@/components/search/SearchBar";
import SearchCardItem from "@/components/search/SearchCardItem";
import SearchSkeletonCard from "@/components/skeleton/SearchSkeletonCard";

const Search = () => {
  const [input, setInput] = useState("");
  const {
    items,
    isLoading,
    isSearching,
    hasMore,
    isInitialLoading,
    setPage,
    handleSearch,
    fetchNext,
  } = useSearch();

  const loaderRef = useRef<HTMLDivElement | null>(null);

  const handleIntersect = useCallback(() => {
    if (hasMore && !isLoading) {
      setPage(prev => prev + 1);
      fetchNext();
    }
  }, [hasMore, isLoading, fetchNext]);

  useInfiniteScroll(
    loaderRef as React.RefObject<HTMLElement>,
    handleIntersect,
    undefined,
    300,
  );

  const renderedItems = useMemo(
    () =>
      items.map((item, index) => (
        <SearchCardItem
          key={item.id}
          title={
            "title" in item
              ? item.title?.trim() || "NO TITLE"
              : item.name?.trim() || "NO TITLE"
          }
          imageUrl={item.poster_path}
          priority={index < 10}
        />
      )),
    [items],
  );

  return (
    <div className="flex h-screen w-full flex-col pt-[44px]">
      <SearchBar
        value={input}
        onChange={setInput}
        onSearch={handleSearch}
        onClear={() => {
          setInput("");
          handleSearch("");
        }}
      />
      <span className="text-headline2 flex h-[62px] items-center pt-[21px] pb-[17px] pl-[10px] text-white">
        Top Searches
      </span>

      <div className="scrollbar-hide flex flex-col gap-[3px] overflow-y-auto pb-14">
        {isInitialLoading ? (
          // 초기 로딩 시 스켈레톤 10개 렌더링
          <>
            {Array.from({ length: 10 }).map((_, i) => (
              <SearchSkeletonCard key={`skeleton-${i}`} />
            ))}
          </>
        ) : items.length === 0 && isSearching && !isLoading ? (
          // 검색 결과가 없을 때
          <div className="text-caption1 py-10 text-center text-white">
            찾으시는 콘텐츠가 없어요.
          </div>
        ) : (
          // 검색 결과 또는 인기 영화 리스트 렌더링
          renderedItems
        )}
        <div ref={loaderRef} className="h-6" />
      </div>
    </div>
  );
};

export default Search;
