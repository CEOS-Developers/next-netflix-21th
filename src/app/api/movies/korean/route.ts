import type { NextResponse } from 'next/server';
import { tmdb } from '@app/api/_clients';
import { ok, err, mapToProductList } from '@app/api/_utils';

export async function GET(): Promise<NextResponse> {
  try {
    const { data } = await tmdb.get('/discover/movie', {
      params: {
        with_original_language: 'ko',
        region: 'KR',
        page: 1,
      },
    });

    const products = mapToProductList(data.results, 'movie');

    return ok(products);
  } catch (e) {
    console.error(e);
    return err();
  }
}
