import { tmdb } from '@api/client';
import type { Product } from '@models/product';

export const getTrendingTodayTop10Products = async (): Promise<Product[]> => {
  const { data } = await tmdb.get('/trending/all/day');

  const filtered = data.results
    .filter((item: any) => item.media_type === 'movie' || item.media_type === 'tv')
    .slice(0, 10)
    .map(
      (item: any): Product => ({
        id: item.id,
        type: item.media_type,
        name: item.title || item.name || null,
        image: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : null,
      }),
    );

  return filtered;
};
