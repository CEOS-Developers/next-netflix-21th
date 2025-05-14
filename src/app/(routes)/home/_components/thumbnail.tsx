'use client';

import type { Product } from '@models/product';
import InformationIcon from '@public/icons/home/infomation.svg';
import PlayIcon from '@public/icons/home/play.svg';
import PlusIcon from '@public/icons/home/plus.svg';
import { useSuspenseQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';

interface ThumbnailProps {
  path: string;
}

interface ThumbnailData {
  product: Product;
  index: number;
}

export default function Thumbnail({ path }: ThumbnailProps) {
  const { data } = useSuspenseQuery<ThumbnailData>({
    queryKey: ['tmdb', path],
    queryFn: async () => (await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${path}`)).json(),
  });

  const { product: item, index } = data;

  return (
    <section className="overflow-x-hidden">
      <div className="relative left-[-24.52px] h-[415px] w-[424.05px]">
        <Link key={`thumbnail-${item.type}-${item.id}`} href={`/${item.type}/${item.id}`}>
          {item.image && item.name && (
            <div className="relative h-full w-full">
              <Image src={item.image} alt={item.name} fill sizes="424.05px" className="object-cover" priority />
            </div>
          )}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0)_87.26%,#000_100%)]" />
        </Link>
        <div className="absolute bottom-0 flex w-full items-center justify-center gap-[5px]">
          <div className="border-grayscale-02-white flex h-[15px] w-[15px] flex-col items-center -space-y-1 border-1 border-solid">
            <span className="text-caption-04 text-grayscale-02-white">TOP</span>
            <span className="text-caption-03 text-grayscale-02-white">10</span>
          </div>
          <span className="text-subhead-02 text-grayscale-02-white">#{index + 1} in Worldwide Today</span>
        </div>
      </div>
      <div className="mt-[13px] mr-[62px] mb-[43px] ml-[54px] flex justify-between">
        <div className="flex flex-col items-center gap-[1px]">
          <PlusIcon className="text-grayscale-02-white h-6 w-6" />
          <span className="text-body-03 text-grayscale-02-white">My List</span>
        </div>
        <div className="bg-background-03 hover:bg-background-03-hr flex h-[45px] w-[110.63px] cursor-pointer items-center justify-between rounded-[5.63px] pt-2 pr-[19.63px] pb-[7px] pl-[19px]">
          <PlayIcon className="text-grayscale-00-black h-[21.6px] w-[18px]" />
          <span className="text-subhead-01 text-grayscale-00-black">Play</span>
        </div>
        <Link
          key={`info-${item.type}-${item.id}`}
          href={`/${item.type}/${item.id}`}
          className="flex flex-col items-center"
        >
          <InformationIcon className="text-grayscale-02-white h-6 w-6" />
          <span className="text-body-03 text-grayscale-02-white">Info</span>
        </Link>
      </div>
    </section>
  );
}
