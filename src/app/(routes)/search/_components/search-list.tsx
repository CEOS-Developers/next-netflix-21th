import type { Product } from '@models/product';
import PlayIcon from '@public/icons/search/play-circle.svg';
import Link from 'next/link';

interface SearchListProps {
  data: Product[];
}

export default function SearchList({ data }: SearchListProps) {
  return (
    <div>
      {data.map((product: Product, index: number) => (
        <li
          key={`${product.id}-${index}`}
          className="bg-background-02 mb-1 flex w-full items-center justify-between rounded-sm transition-transform duration-200 hover:scale-102"
        >
          <div className="flex items-center">
            <img
              src={product.image ?? '/default-img.png'}
              alt={product.name ?? 'no name'}
              className="h-[76px] w-[146px]"
            />
            <div className="text-body-02 ml-6 w-[200px] overflow-hidden">{product.name}</div>
          </div>
          <div className="mr-3 ml-1">
            <Link key={`${product.type}-${product.id}`} href={`/${product.type}/${product.id}`}>
              <PlayIcon className="hover:text-background-03-hr transition-color duration-200" />
            </Link>
          </div>
        </li>
      ))}
    </div>
  );
}
