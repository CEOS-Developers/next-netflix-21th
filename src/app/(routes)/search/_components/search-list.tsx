'use client'; 

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import useGetSearchMoviesDefault from '../_query/infinite-query-default';
import useGetSearchMovies from '../_query/infinite-query-search';

export default function SearchList() {
  const [keyword, setKeyword] = useState('');
  const isSearching = keyword.trim() !== '';

    // infiniteQuery
	  const {
        data,
        isLoading,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
      } = useGetSearchMoviesDefault();

    // intersectionObservation
    const {ref, inView} = useInView();

    useEffect(() => {
      console.log(inView)
      if (inView && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
    }}, [inView])

    return (
      <div>
      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='search movies...'
        className='border p-2 mb-4 w-full'
      />
      <div className='overflow-y-auto border border-gray-300 p-4'>
        {data?.pages.map((page, pageIndex) => (
          <ul key={pageIndex}>
            {page.map((movie: any) => (
              <li key={movie.id}>
                <img src={movie.image} alt={movie.name}/>
                {movie.name} ({movie.type})
              </li>
            ))}
          </ul>
        ))}
        <div ref={ref}>isLoading...</div>
      </div>
      </div>);
}