import { sectionItems } from './_constants/section-items';
import { getThumbnailProduct } from '@api/tmdb/all-products';
import HomeHeader from './_components/home-header';
import ThumbNail from './_components/thumbnail';
import ProductList from './_components/product-list';

export default async function Home() {
  const { product: thumbnailItem, index: thumbnailIndex } = await getThumbnailProduct();

  const allSections = await Promise.all(
    sectionItems.map(async ({ title, fetchFn, option }) => {
      const items = await fetchFn();
      return { title, items, option };
    }),
  );

  return (
    <>
      <HomeHeader />
      <div className="hide-scrollbar h-full overflow-y-auto pb-[85px]">
        <ThumbNail item={thumbnailItem} index={thumbnailIndex} />
        <div className="flex flex-col gap-[22px]">
          {allSections.map(({ title, items, option }) => (
            <ProductList key={title} title={title} items={items} option={option} />
          ))}
        </div>
      </div>
    </>
  );
}
