'use client';

import { useEffect, useState, useTransition } from 'react';
import { useInView } from 'react-intersection-observer';

import SearchInput from './search-input';
import SearchList from './search-list';
import SearchListSkeleton from './search-list-skeleton';

interface Movie {
  id: number;
  name: string;
  image: string;
  type: string;
}

export default function SearchBoard() {
  // 무한 스크롤 상태 관리
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // loading
  const [isLoading, setIsLoading] = useState(false);
  // searching
  const [keyword, setKeyword] = useState('');
  const trimmedKeyword = keyword.trim();

  // concurrent rendering
  const [isPending, startTransition] = useTransition();

  // intersectionObservation
  const { ref, inView } = useInView();

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      const url =
        trimmedKeyword.length > 0 ? `/api/search?q=${trimmedKeyword}&page=${page}` : `/api/search?page=${page}`;
      const res = await fetch(url);
      const data: Movie[] = await res.json();

      if (data.length === 0) {
        setHasMore(false);
      } else {
        setMovies((prev) => (page === 1 ? data : [...prev, ...data]));
      }
      setIsLoading(false);
    };

    fetchMovies();
  }, [page, keyword]);

  useEffect(() => {
    if (trimmedKeyword === '') {
      setPage(1);
      setHasMore(true);
    }
  }, [trimmedKeyword]);

  useEffect(() => {
    console.log(inView);
    if (inView && hasMore && !isLoading) {
      setPage((prev) => prev + 1);
    }
  }, [inView, hasMore]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch(keyword);
    }
  };

  const handleSearch = (searchText = '') => {
    startTransition(() => {
      setKeyword(searchText);
      setPage(1);
      setHasMore(true);
    });
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
      {(isPending || isLoading) && page === 1 ? (
        <SearchListSkeleton />
      ) : (
        <div className="hide-scrollbar h-[631px] overflow-y-auto">
          <SearchList data={movies} />
          <div ref={ref}>
            {hasMore && <SearchListSkeleton />} {/* 추가 로딩용 */}
          </div>
        </div>
      )}
    </div>
  );
}
