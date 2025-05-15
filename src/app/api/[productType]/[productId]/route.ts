import { tmdb } from '@app/api/_clients';
import { err, mapToProduct, ok } from '@app/api/_utils';
import type { Product } from '@models/product';
import type { NextRequest, NextResponse } from 'next/server';

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ productType: Product['type']; productId: Product['id'] }> },
): Promise<NextResponse> {
  try {
    const { productType, productId } = await params;

    const { data } = await tmdb.get(`/${productType}/${productId}`);

    const product = mapToProduct(data, productType);

    return ok(product);
  } catch (e) {
    console.error(e);
    return err();
  }
}
