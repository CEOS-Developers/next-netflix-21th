import { tmdb } from '@app/api/_clients';
import { ok, err, mapToProductList } from '@app/api/_utils';

export async function GET() {
  try {
    const { data } = await tmdb.get('/discover/tv', {
      params: {
        with_original_language: 'ko',
        region: 'KR',
        pages: 1,
      },
    });

    const products = mapToProductList(data.results, 'tv');

    return ok(products);
  } catch (e) {
    console.error(e);
    return err();
  }
}
