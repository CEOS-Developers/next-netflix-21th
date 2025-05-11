import Link from 'next/link';

import PlayIcon from '@public/icons/search/play-circle.svg';

interface Movie {
  id: number;
  name: string;
  image: string;
  type: string;
}

interface SearchListProps {
  data: Movie[];
}

export default function SearchList({ data }: SearchListProps) {
  return (
    <div>
      {data.map((movie: Movie, index: number) => (
        <li
          key={movie.id + index}
          className="bg-background-02 mb-1 flex w-full items-center justify-between rounded-sm transition-transform duration-200 hover:scale-102"
        >
          <div className="flex items-center">
            <img src={movie.image} alt={movie.name} className="h-[76px] w-[146px]" />
            <div className="text-body-02 ml-6 w-[200px] overflow-hidden">{movie.name}</div>
          </div>
          <div className="mr-3 ml-1">
            <Link key={`${movie.type}-${movie.id}`} href={`/${movie.type}/${movie.id}`}>
              <PlayIcon className="hover:text-background-03-hr transition-color duration-200" />
            </Link>
          </div>
        </li>
      ))}
    </div>
  );
}
