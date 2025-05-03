import type { Product } from '@models/product';
import { sectionItems } from './_constants/section-items';
import HomeHeader from './_components/home-header';
import ThumbNail from './_components/thumbnail';
import ProductList from './_components/product-list';

export default async function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const allSections = await Promise.all(
    sectionItems.map(async ({ title, apiPath, option }) => {
      const res = await fetch(`${baseUrl}${apiPath}`, { next: { revalidate: 3600 } });

      if (!res.ok) {
        console.error(`Failed to fetch ${apiPath}: ${res.statusText}`);
        return { title, items: [], option };
      }

      const items: Product[] = await res.json();
      return { title, items, option };
    }),
  );

  return (
    <>
      <HomeHeader />
      <div className="hide-scrollbar h-full overflow-y-auto pb-[85px]">
        <ThumbNail />
        <div className="flex flex-col gap-[22px]">
          {allSections.map(({ title, items, option }) => (
            <ProductList key={title} title={title} items={items} option={option} />
          ))}
        </div>
      </div>
    </>
  );
}
