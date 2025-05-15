import { Suspense } from 'react';
import { createQueryClient, QueryProvider } from '@services/query';
import { dehydrate } from '@tanstack/react-query';

import HomeHeader from './_components/home-header';
import ProductList from './_components/product-list';
import Thumbnail from './_components/thumbnail';
import { sectionItems } from './_constants/section-items';

export default async function Home() {
  const queryClient = createQueryClient();

  await Promise.all(
    sectionItems.map(({ apiPath }) =>
      queryClient.prefetchQuery({
        queryKey: ['tmdb', apiPath],
        queryFn: async () =>
          (await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${apiPath}`, { cache: 'no-store' })).json(),
      }),
    ),
  );

  const thumbnailPath = '/api/products/thumbnail';
  await queryClient.prefetchQuery({
    queryKey: ['tmdb', thumbnailPath],
    queryFn: async () =>
      (await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${thumbnailPath}`, { cache: 'no-store' })).json(),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <QueryProvider dehydratedState={dehydratedState}>
      <HomeHeader />
      <div className="hide-scrollbar h-full overflow-y-auto pb-[85px]">
        <Suspense fallback={<p>Loading Thumbnail...</p>}>
          <Thumbnail path={thumbnailPath} />
        </Suspense>
        <div className="flex flex-col gap-[22px]">
          {sectionItems.map(({ title, apiPath, option }) => (
            <Suspense key={title} fallback={<p>Loading {title}...</p>}>
              <ProductList title={title} path={apiPath} option={option} />
            </Suspense>
          ))}
        </div>
      </div>
    </QueryProvider>
  );
}
