import HomeHeader from './_components/home-header';
import ProductList from './_components/product-list';
import Thumbnail from './_components/thumbnail';
import { sectionItems } from './_constants/section-items';

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className="hide-scrollbar h-full overflow-y-auto pb-[85px]">
        <Thumbnail path={`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/thumbnail`} />
        <div className="flex flex-col gap-[22px]">
          {sectionItems.map(({ title, apiPath, option }) => (
            <ProductList
              key={title}
              title={title}
              path={`${process.env.NEXT_PUBLIC_BASE_URL}${apiPath}`}
              option={option}
            />
          ))}
        </div>
      </div>
    </>
  );
}
