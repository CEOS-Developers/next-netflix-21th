import type { NextRequest } from 'next/server';
import { tmdb } from '@app/api/_clients';
import { ok, err, mapToProduct } from '@app/api/_utils';

export async function GET(_: NextRequest, context: { params: { productType: 'movie' | 'tv'; productId: string } }) {
  const { productType, productId } = context.params;

  try {
    const { data } = await tmdb.get(`/${productType}/${productId}`);

    const product = mapToProduct(data, productType);

    return ok(product);
  } catch (e) {
    console.error(e);
    return err();
  }
}
