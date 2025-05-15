import type { Product } from '@models/product';
import type { RawTMDB } from '@models/raw-tmdb';

export function mapToProduct<T extends RawTMDB>(item: T, type?: Product['type']): Product {
  return {
    id: item.id,
    type: item.media_type || type || null,
    name: item.title || item.name || null,
    image: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : null,
    description: item.overview || null,
  };
}
