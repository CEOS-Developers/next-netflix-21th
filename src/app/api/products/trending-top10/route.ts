import { tmdb } from '@app/api/_clients';
import { ok, err, mapToProductList } from '@app/api/_utils';
import type { RawTMDB } from '@models/raw-tmdb';

export async function GET() {
  try {
    const { data } = await tmdb.get('/trending/all/day', { params: { pages: 1 } });

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
