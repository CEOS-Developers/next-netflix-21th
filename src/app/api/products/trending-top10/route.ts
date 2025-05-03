import { tmdb } from '@app/api/_clients';
import { ok, err, mapToProductList } from '@app/api/_utils';

export async function GET() {
  try {
    const { data } = await tmdb.get('/trending/all/day', { params: { pages: 1 } });

    const filtered = data.results
      .filter((item: any) => item.media_type === 'movie' || item.media_type === 'tv')
      .slice(0, 10);

    const products = mapToProductList(filtered);

    return ok(products);
  } catch (e) {
    console.error(e);
    return err();
  }
}
