import { InfiniteData } from '@tanstack/react-query';
import Link from 'next/link';

import PlayIcon from '@public/icons/search/play-circle.svg';

interface Movie {
  id: number;
  name: string;
  image: string;
  type: string;
  // 여기에 필요한 필드 추가 (예: poster_path 등)
}

interface SearchListProps {
  data: InfiniteData<Movie[]> | undefined;
}

export default function SearchList({ data }: SearchListProps) {
  return (
    <div>
      {data?.pages.map((page, pageIndex) => (
        <ul key={pageIndex}>
          {page.map((movie: Movie) => (
            <li
              key={movie.id}
              className="bg-background-02 mb-1 flex w-full items-center justify-between rounded-sm transition-transform duration-200 hover:scale-102"
            >
              <img src={movie.image} alt={movie.name} className="h-[76px] w-[100px]" />
              <div className="ml-6 overflow-hidden">{movie.name}</div>
              <div className="mr-3">
                <Link key={`${movie.type}-${movie.id}`} href={`/${movie.type}/${movie.id}`}>
                  <PlayIcon />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
