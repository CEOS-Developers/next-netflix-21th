import { sectionItems } from './_constants/section-items';
import HomeHeader from './_components/home-header';
import ProductList from './_components/product-list';

export default async function Home() {
  const allSections = await Promise.all(
    sectionItems.map(async ({ title, fetchFn }) => {
      const items = await fetchFn();
      return { title, items };
    }),
  );

  return (
    <>
      <HomeHeader />
      <div className="hide-scrollbar h-full overflow-y-auto pb-[85px]">
        <div className="h-[516px] w-full" />
        <div className="flex flex-col gap-[22px]">
          {allSections.map(({ title, items }) => (
            <ProductList key={title} title={title} items={items} />
          ))}
        </div>
      </div>
    </>
  );
}
