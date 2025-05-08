import type { NextRequest, NextResponse } from 'next/server';
import { tmdb } from '@app/api/_clients';
import { ok, err, mapToProduct } from '@app/api/_utils';
import type { Product } from '@models/product';

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ productType: Product['type']; productId: Product['id'] }> },
): Promise<NextResponse> {
  const { productType, productId } = await params;

  try {
    const { data } = await tmdb.get(`/${productType}/${productId}`);

    const product = mapToProduct(data, productType);

    return ok(product);
  } catch (e) {
    console.error(e);
    return err();
  }
}
