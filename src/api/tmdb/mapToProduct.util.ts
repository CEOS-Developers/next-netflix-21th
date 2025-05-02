import type { Product } from '@models/product';

export function mapToProduct(items: any[]): Product[] {
  return items.map((item) => ({
    id: item.id,
    type: item.media_type,
    name: item.title || item.name || null,
    image: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : null,
  }));
}
