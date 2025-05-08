import type { Product } from '@models/product';

export function mapToProductList<
  T extends {
    id: Product['id'];
    media_type?: Product['type'];
    title?: Product['name'];
    name?: Product['name'];
    poster_path?: Product['image'];
    overview?: Product['description'];
  },
>(items: T[], type?: Product['type']): Product[] {
  return items.map((item) => ({
    id: item.id,
    type: item.media_type || type || null,
    name: item.title || item.name || null,
    image: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : null,
    description: item.overview || null,
  }));
}
