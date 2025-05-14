'use client';

import type { Product } from '@models/product';
import PlayIcon from '@public/icons/home/play.svg';
import { useSuspenseQuery } from '@tanstack/react-query';
import Image from 'next/image';

interface ClientDetailProps {
  productType: Product['type'];
  productId: Product['id'];
}

export default function ClientDetail({ productType, productId }: ClientDetailProps) {
  const path = `/api/${productType}/${productId}`;
  const { data: item } = useSuspenseQuery<Product>({
    queryKey: ['tmdb', `${process.env.NEXT_PUBLIC_BASE_URL}${path}`],
    queryFn: async () => (await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${path}`)).json(),
  });

  return (
    <section className="hide-scrollbar h-full overflow-x-hidden overflow-y-auto pb-[85px]">
      <div className="relative left-[-24.52px] h-[415px] w-[424.05px]">
        {item.image && item.name && (
          <Image src={item.image} alt={item.name} fill sizes="424.05px" className="object-cover" priority />
        )}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0)_87.26%,#000_100%)]" />
      </div>
      <div className="bg-background-03 mt-[13px] mb-8 ml-9 flex h-[45px] w-[303px] items-center justify-between rounded-[5.63px] pt-2 pr-[111px] pb-[7px] pl-[120px]">
        <PlayIcon className="text-grayscale-00-black h-[21.6px] w-[18px]" />
        <span className="text-subhead-01 text-grayscale-00-black">Play</span>
      </div>
      <div className="mx-8 flex flex-col gap-6">
        <span className="text-headline-01 text-grayscale-02-white">{item.name}</span>
        <span className="text-body-04 text-grayscale-02-white-tp wrap-break-word break-all">{item.description}</span>
      </div>
    </section>
  );
}
