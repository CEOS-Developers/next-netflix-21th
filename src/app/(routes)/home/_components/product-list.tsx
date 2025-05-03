import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@models/product';

interface ProductListProps {
  title: string;
  items: Product[];
  option?: string;
}

export default function ProductList({ title, items, option }: ProductListProps) {
  const isPreview = option === 'previews';
  const isNetflixOriginal = option === 'netflix-originals';

  const heightClass = isPreview ? 'h-[102px]' : isNetflixOriginal ? 'h-[251px]' : 'h-[161px]';
  const widthClass = isPreview ? 'w-[102px]' : isNetflixOriginal ? 'w-[154.04px]' : 'w-[103px]';
  const gapClass = isNetflixOriginal ? 'gap-[6.44px]' : 'gap-[7px]';
  const paddingClass = isNetflixOriginal ? 'pb-10' : '';
  const roundedClass = isPreview ? 'rounded-full' : 'rounded-xs';

  return (
    <section className={`ml-3 flex flex-col gap-[14px] ${paddingClass}`}>
      <span className="text-headline-02 text-grayscale-02-white ml-1">{title}</span>
      <div className={`hide-scrollbar flex ${gapClass} overflow-x-auto pr-3`}>
        {items.map((item) => {
          return (
            item.name &&
            item.image && (
              <Link
                key={`${item.type}-${item.id}`}
                href={`/${item.type}/${item.id}`}
                className={`relative ${heightClass} ${widthClass} flex-shrink-0 transition-transform duration-200 hover:scale-105`}
              >
                <Image src={item.image} alt={item.name} fill className={`${roundedClass} object-cover`} />
              </Link>
            )
          );
        })}
      </div>
    </section>
  );
}
