'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import useGetSearchMoviesDefault from '../_query/infinite-query-default';
// import useGetSearchMovies from '../_query/infinite-query-search';

import SearchList from './search-list';

export default function SearchBoard() {
  const [keyword, setKeyword] = useState('');
  // const isSearching = keyword.trim() !== '';

  // infiniteQuery
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetSearchMoviesDefault();

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
      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="search movies..."
        className="mb-4 w-full border p-2"
      />
      {/* 따로 컴포넌트로 빼든 하자 불러온 데이터 인자로 받아서 이거 함수 그대로 쓰면 대니까는*/}
      <div className="overflow-y-auto border border-gray-300 p-4">
        <SearchList data={data} />

        <div ref={ref}>isLoading...</div>
      </div>
    </div>
  );
}
