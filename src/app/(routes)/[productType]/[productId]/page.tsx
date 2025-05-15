import type { Product } from '@models/product';

import ClientDetail from './_components/client-detail';

type ProductDetailProps = Promise<{
  productType: Product['type'];
  productId: Product['id'];
}>;

export default async function ProductDetail({ params }: { params: ProductDetailProps }) {
  const { productType, productId } = await params;

  return <ClientDetail productType={productType} productId={productId} />;
}
