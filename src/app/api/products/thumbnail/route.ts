import { tmdb } from '@app/api/_clients';
import { err, mapToProduct, ok } from '@app/api/_utils';
import type { RawTMDB } from '@models/raw-tmdb';
import type { NextResponse } from 'next/server';

export async function GET(): Promise<NextResponse> {
  try {
    const { data } = await tmdb.get('/trending/all/day', { params: { page: 1 } });

    const filtered = data.results
      .filter((item: RawTMDB) => item.media_type === 'movie' || item.media_type === 'tv')
      .slice(0, 10);

    const randomIndex = Math.floor(Math.random() * filtered.length);

    const product = mapToProduct(filtered[randomIndex]);

    return ok({ product, index: randomIndex });
  } catch (e) {
    console.error(e);
    return err();
  }
}
