import type { NextRequest } from 'next/server';
import { tmdb } from '@app/api/_clients';
import { ok, err, mapToProduct } from '@app/api/_utils';
import type { Product } from '@models/product';

export async function GET(
  _: NextRequest,
  { params }: { params: { productType: Product['type']; productId: Product['id'] } },
) {
  const { productType, productId } = params;

  try {
    const { data } = await tmdb.get(`/${productType}/${productId}`);

    const product = mapToProduct(data, productType);

    return ok(product);
  } catch (e) {
    console.error(e);
    return err();
  }
}
