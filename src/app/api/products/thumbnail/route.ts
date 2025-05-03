import { tmdb } from '@app/api/_clients';
import { ok, err, mapToProduct } from '@app/api/_utils';
import type { RawTMDB } from '@models/raw-tmdb';

export async function GET() {
  try {
    const [movieRes, tvRes] = await Promise.all([
      tmdb.get('/movie/popular', { params: { pages: 1 } }),
      tmdb.get('/tv/popular', { params: { pages: 1 } }),
    ]);

    console.log(movieRes);

    const movieRaw = movieRes.data.results.map((item: RawTMDB) => ({ ...item, media_type: 'movie' }));
    const tvRaw = tvRes.data.results.map((item: RawTMDB) => ({ ...item, media_type: 'tv' }));

    const filtered = [...movieRaw, ...tvRaw];

    const randomIndex = Math.floor(Math.random() * filtered.length);

    const product = mapToProduct(filtered[randomIndex]);

    return ok({ product, index: randomIndex });
  } catch (e) {
    console.error(e);
    return err();
  }
}
