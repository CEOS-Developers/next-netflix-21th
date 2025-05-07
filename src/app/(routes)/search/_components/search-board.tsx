'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import useGetSearchMoviesDefault from '../_query/infinite-query-default';
// import useGetSearchMovies from '../_query/infinite-query-search';

import SearchList from './search-list';
import SearchListSkeleton from './search-list-skeleton';
import SearchIcon from '@public/icons/search/search.svg';
import DeleteIcon from '@public/icons/search/delete.svg';

export default function SearchBoard() {
  const [keyword, setKeyword] = useState('');
  // const isSearching = keyword.trim() !== '';

  // infiniteQuery
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useGetSearchMoviesDefault();

  // intersectionObservation
  const { ref, inView } = useInView();

  useEffect(() => {
    console.log(inView);
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <div>
      <div className="bg-background-02 mt-11 flex h-13 w-full items-center">
        <div className="ml-4">
          <SearchIcon />
        </div>
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="search for a show, movie, genre, e.t.c."
          className="m-4 w-full"
        />
        <div className="mr-4">
          <DeleteIcon />
        </div>
      </div>
      <div className="text-headline-01 ml-2 pt-4 pb-4">Top Searches</div>
      {/* 따로 컴포넌트로 빼든 하자 불러온 데이터 인자로 받아서 이거 함수 그대로 쓰면 대니까는*/}
      {isLoading ? (
        <SearchListSkeleton />
      ) : (
        <div className="hide-scrollbar h-[631px] overflow-y-auto">
          <SearchList data={data} />
          <div ref={ref}>{isFetchingNextPage ? 'Loading more...' : ''}</div>
        </div>
      )}
    </div>
  );
}
