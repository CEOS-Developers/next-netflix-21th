"use client";

import { useEffect, useRef, useState } from "react";

import { axiosInstance } from "@/apis/axios";

import SearchBar from "@/components/search/SearchBar";
import SearchCardItem from "@/components/search/SearchCardItem";
import SearchSkeletonCard from "@/components/skeleton/SearchSkeletonCard";

interface SearchItem {
  id: number;
  title?: string;
  name?: string;
  poster_path: string | null;
}

const PER_PAGE = 20;

const Search = () => {
  const [items, setItems] = useState<SearchItem[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const loaderRef = useRef<HTMLDivElement | null>(null);

  const fetchPopularMovies = async (pageNum: number) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.get("/movie/popular", {
        params: { language: "ko-KR", page: pageNum },
      });
      const newItems: SearchItem[] = res.data.results;

      // 중복 제거 (id 기준)
      setItems(prev => {
        const existingIds = new Set(prev.map(item => item.id));
        const filtered = newItems.filter(item => !existingIds.has(item.id));
        return [...prev, ...filtered];
      });

      setHasMore(pageNum < res.data.total_pages);
    } catch (err) {
      console.error("영화 로딩 실패", err);
    } finally {
      setIsLoading(false);
    }
  };

  // 최초 로딩
  useEffect(() => {
    fetchPopularMovies(1);
  }, []);

  // 무한 스크롤 감지
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          setPage(prev => prev + 1);
        }
      },
      { threshold: 1 },
    );

    const target = loaderRef.current;
    if (target) observer.observe(target);
    return () => {
      if (target) observer.unobserve(target);
    };
  }, [hasMore, isLoading]);

  // 페이지 바뀔 때 데이터 불러오기
  useEffect(() => {
    if (page !== 1) fetchPopularMovies(page);
  }, [page]);

  return (
    <div className="flex h-screen w-full flex-col pt-[44px]">
      <SearchBar onSearch={() => {}} />
      <span className="text-headline2 flex h-[62px] items-center pt-[21px] pb-[17px] pl-[10px] text-white">
        Top Searches
      </span>

      <div className="scrollbar-hide flex flex-col gap-[3px] overflow-y-auto pb-14">
        {items.map((item, index) => (
          <SearchCardItem
            key={item.id}
            title={item.title ?? item.name ?? "제목 없음"}
            imageUrl={item.poster_path}
            priority={index === 10}
          />
        ))}

        {isLoading &&
          Array.from({ length: PER_PAGE }).map((_, i) => (
            <SearchSkeletonCard key={`skeleton-${page}-${i}`} />
          ))}

        <div ref={loaderRef} className="h-6" />
      </div>
    </div>
  );
};

export default Search;
