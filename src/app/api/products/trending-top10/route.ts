import { tmdb } from '@app/api/_clients';
import { err, mapToProductList, ok } from '@app/api/_utils';
import type { RawTMDB } from '@models/raw-tmdb';
import type { NextResponse } from 'next/server';

export async function GET(): Promise<NextResponse> {
  try {
    const { data } = await tmdb.get('/trending/all/day', { params: { page: 1 } });

    const filtered = data.results
      .filter((item: RawTMDB) => item.media_type === 'movie' || item.media_type === 'tv')
      .slice(0, 10);

    const products = mapToProductList(filtered);

    return ok(products);
  } catch (e) {
    console.error(e);
    return err();
  }
}
