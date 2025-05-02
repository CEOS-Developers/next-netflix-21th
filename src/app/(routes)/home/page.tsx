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
    <div className="hide-scrollbar h-full overflow-y-auto pb-[85px]">
      <HomeHeader />
      <div className="h-[516px] w-full" />
      {allSections.map(({ title, items }) => (
        <ProductList key={title} title={title} items={items} />
      ))}
    </div>
  );
}
