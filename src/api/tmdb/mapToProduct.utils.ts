import type { Product } from '@models/product';

export function mapToProduct(item: any, type?: Product['type']): Product {
  return {
    id: item.id,
    type: item.media_type ?? type ?? null, // undefined
    name: item.title || item.name || null,
    image: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : null,
    description: item.overview || null,
  };
}

export function mapToProductList(items: any[], type?: Product['type']): Product[] {
  return items.map((item) => ({
    id: item.id,
    type: item.media_type ?? type ?? null, // undefined,
    name: item.title || item.name || null,
    image: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : null,
    description: item.overview || null,
  }));
}
