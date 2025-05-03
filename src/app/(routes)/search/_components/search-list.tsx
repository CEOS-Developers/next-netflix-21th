'use client'; 

import useGetSearchMovies from '../_query/infinite-query';

export default function SearchList() {
    // infiniteQuery
	const {
        data,
        isLoading,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
      } = useGetSearchMovies();
      
    return (<div>
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
      <div>isLoading...</div>
    </div>);
}