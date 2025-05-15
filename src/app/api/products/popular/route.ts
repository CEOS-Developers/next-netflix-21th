import { tmdb } from '@app/api/_clients';
import { err, mapToProductList, ok } from '@app/api/_utils';
import type { RawTMDB } from '@models/raw-tmdb';
import type { NextResponse } from 'next/server';

export async function GET(): Promise<NextResponse> {
  try {
    const [movieRes, tvRes] = await Promise.all([
      tmdb.get('/movie/popular', { params: { page: 1 } }),
      tmdb.get('/tv/popular', { params: { page: 1 } }),
    ]);

    const movieRaw = movieRes.data.results.map((item: RawTMDB) => ({ ...item, media_type: 'movie' }));
    const tvRaw = tvRes.data.results.map((item: RawTMDB) => ({ ...item, media_type: 'tv' }));

    const filtered = [...movieRaw, ...tvRaw].sort((a, b) => b.popularity - a.popularity).slice(0, 20);

    const products = mapToProductList(filtered);

    return ok(products);
  } catch (e) {
    console.error(e);
    return err();
  }
}
