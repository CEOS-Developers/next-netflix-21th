'use client';

import { useEffect, useState } from 'react';
import { useInfiniteQuery, type QueryFunctionContext } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';

import type { Product } from '@models/product';
import SearchInput from './search-input';
import SearchList from './search-list';
import SearchListSkeleton from './search-list-skeleton';

export default function SearchBoard() {
  // keyword
  const [keyword, setKeyword] = useState('');
  const trimmedKeyword = keyword.trim();

  // 무한스크롤 감지용 intersectionObservation
  const { ref, inView } = useInView();

  // default page == 1, queryKey를 받아와서 query로 사용
  const fetchMovies = async ({ pageParam = 1, queryKey }: QueryFunctionContext<readonly unknown[]>) => {
    const keyword = queryKey[0];
    const url = `/api/search?q=${keyword}&page=${pageParam}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to fetch');
    const data: Product[] = await res.json();
    return data;
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isPending } = useInfiniteQuery<
    Product[],
    Error
  >({
    queryKey: [trimmedKeyword],
    queryFn: fetchMovies,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
  });

  const movies = data?.pages.flat() ?? [];

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch(keyword);
    }
  };

  const handleSearch = (searchText = '') => {
    setKeyword(searchText);
  };

  return (
    <div>
      <SearchInput
        keyword={keyword}
        handleSearch={handleSearch}
        setKeyword={setKeyword}
        handleKeyDown={handleKeyDown}
      />
      <div className="text-headline-01 ml-2 pt-4 pb-4">Top Searches</div>
      {isPending || isLoading ? (
        <SearchListSkeleton />
      ) : (
        <div className="hide-scrollbar h-[631px] overflow-y-auto">
          <SearchList data={movies} />
          <div ref={ref}>{hasNextPage && <SearchListSkeleton />}</div>
        </div>
      )}
    </div>
  );
}
