'use client';

import { useEffect, useState } from 'react';
import type { Product } from '@models/product';
import { useProductStore } from '@store/product';
import Image from 'next/image';
import Link from 'next/link';

interface ProductListProps {
  title: string;
  path: string;
  option?: string;
}

export default function ProductList({ title, path, option }: ProductListProps) {
  const { setProduct } = useProductStore();
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    fetch(path)
      .then((res) => res.json())
      .then((products: Product[]) => {
        products.forEach(setProduct);
        setItems(products);
      })
      .catch(console.error);
  }, [path, setProduct]);

  const isPreview = option === 'previews';
  const isNetflixOriginal = option === 'netflix-originals';

  const heightClass = isPreview ? 'h-[102px]' : isNetflixOriginal ? 'h-[251px]' : 'h-[161px]';
  const widthClass = isPreview ? 'w-[102px]' : isNetflixOriginal ? 'w-[154.04px]' : 'w-[103px]';
  const gapClass = isNetflixOriginal ? 'gap-[6.44px]' : 'gap-[7px]';
  const paddingClass = isNetflixOriginal ? 'pb-10' : '';
  const roundedClass = isPreview ? 'rounded-full' : 'rounded-xs';

  const sizes = isPreview ? '102px' : isNetflixOriginal ? '154.04px' : '103px';

  return (
    <section className={`ml-3 flex flex-col gap-[14px] ${paddingClass}`}>
      <span className="text-headline-02 text-grayscale-02-white ml-1">{title}</span>
      <div className={`hide-scrollbar flex ${gapClass} overflow-x-auto pr-3`}>
        {items.map((item, index) => {
          return (
            item.name &&
            item.image && (
              <Link
                key={`${item.type}-${item.id}`}
                href={`/${item.type}/${item.id}`}
                className={`relative ${heightClass} ${widthClass} flex-shrink-0 transition-transform duration-200 hover:scale-105`}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes={sizes}
                  className={`${roundedClass} object-cover`}
                  priority={index === 0} // LCP
                />
              </Link>
            )
          );
        })}
      </div>
    </section>
  );
}
