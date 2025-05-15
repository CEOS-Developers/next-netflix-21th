import { tmdb } from '@app/api/_clients';
import { err, mapToProductList, ok } from '@app/api/_utils';
import type { NextResponse } from 'next/server';

export async function GET(): Promise<NextResponse> {
  try {
    const { data } = await tmdb.get('/discover/tv', {
      params: {
        with_networks: 213,
        page: 1,
      },
    });

    const products = mapToProductList(data.results, 'tv');

    return ok(products);
  } catch (e) {
    console.error(e);
    return err();
  }
}
