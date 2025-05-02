import Image from 'next/image';
import type { Product } from '@models/product';

interface ProductListProps {
  title: string;
  items: Product[];
}

export default function ProductList({ title, items }: ProductListProps) {
  return (
    <section className="ml-3 flex flex-col gap-[14px]">
      <span className="text-headline-02 text-grayscale-02-white ml-1">{title}</span>
      <div className="hide-scrollbar flex gap-[7px] overflow-x-auto">
        {items.map((item) => {
          return (
            item.name &&
            item.image && (
              <div key={item.id} className="flex-shrink-0">
                <Image src={item.image} alt={item.name} width={103} height={161} className="rounded-xs" />
              </div>
            )
          );
        })}
      </div>
    </section>
  );
}
