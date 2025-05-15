import { tmdb } from '@app/api/_clients';
import { err, mapToProductList, ok } from '@app/api/_utils';
import type { RawTMDB } from '@models/raw-tmdb';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('q');
    const page = parseInt(searchParams.get('page') || '1', 10);

    // Initial product list, 40 items (= 2 pages)
    if (!query) {
      const [movieRes, tvRes] = await Promise.all([
        tmdb.get('/movie/popular', { params: { page } }),
        tmdb.get('/tv/popular', { params: { page } }),
      ]);

      const movieRaw = movieRes.data.results.map((item: RawTMDB) => ({ ...item, media_type: 'movie' }));
      const tvRaw = tvRes.data.results.map((item: RawTMDB) => ({ ...item, media_type: 'tv' }));

      const filtered = [...movieRaw, ...tvRaw].sort((a, b) => b.popularity - a.popularity);

      const products = mapToProductList(filtered);

      return ok(products);
    }

    // NGT 20 items (< 1 page)
    const { data } = await tmdb.get('/search/multi', {
      params: {
        query,
        page,
      },
    });

    const filtered = data.results.filter((item: RawTMDB) => item.media_type === 'movie' || item.media_type === 'tv');

    const products = mapToProductList(filtered);

    return ok(products);
  } catch (e) {
    console.error(e);
    return err();
  }
}
