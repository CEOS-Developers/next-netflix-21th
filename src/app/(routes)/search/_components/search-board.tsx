'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import SearchList from './search-list';
import SearchListSkeleton from './search-list-skeleton';
import SearchIcon from '@public/icons/search/search.svg';
import DeleteIcon from '@public/icons/search/delete.svg';

interface Movie {
  id: number;
  name: string;
  image: string;
  type: string;
  // 여기에 필요한 필드 추가 (예: poster_path 등)
}

export default function SearchBoard() {
  // 무한 스크롤 상태 관리
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  // loading
  const [isLoading, setIsLoading] = useState(false);

  const [keyword, setKeyword] = useState('');
  const trimmedKeyword = keyword.trim();

  // intersectionObservation
  const { ref, inView } = useInView();

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      const url =
        trimmedKeyword.length > 0 ? `/api/search?q=${trimmedKeyword}&page=${page}` : `/api/search?page=${page}`;
      const res = await fetch(url);
      const data: Movie[] = await res.json(); // 배열 반환
      console.log(data);

      if (data.length === 0) {
        setHasMore(false);
      } else {
        setMovies((prev) => [...prev, ...data]);
      }
      setIsLoading(false);
    };

    fetchMovies();
  }, [page, keyword]);

  useEffect(() => {
    setMovies([]);
    setPage(1);
    setHasMore(true);

    const fetchInitial = async () => {
      setIsLoading(true);
      const url = trimmedKeyword.length > 0 ? `/api/search?q=${trimmedKeyword}&page=1` : `/api/search?page=1`;
      const res = await fetch(url);
      const data: Movie[] = await res.json();
      setMovies(data);
      setIsLoading(false);
    };

    fetchInitial();
  }, [keyword]);

  useEffect(() => {
    if (inView && hasMore) {
      setPage((prev) => prev + 1);
    }
  }, [inView, hasMore]);

  const onDeleteButtonCliked = () => {
    setKeyword('');
  };

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
          className="m-4 w-full placeholder-[color:var(--color-background-03)]"
        />
        <div className="mr-4" onClick={onDeleteButtonCliked}>
          <DeleteIcon />
        </div>
      </div>
      <div className="text-headline-01 ml-2 pt-4 pb-4">Top Searches</div>
      {isLoading && page === 1 ? (
        <SearchListSkeleton />
      ) : (
        <div className="hide-scrollbar h-[631px] overflow-y-auto">
          <SearchList data={movies} />
          <div ref={ref}>
            {isLoading && page > 1 && <SearchListSkeleton />} {/* 추가 로딩용 */}
          </div>
        </div>
      )}
    </div>
  );
}
