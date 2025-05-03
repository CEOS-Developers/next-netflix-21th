import { tmdb } from '@api/client';
import type { Product } from '@models/product';
import { mapToProduct, mapToProductList } from './mapToProduct.utils';

// detail
export const getDetailProduct = async (type: Product['type'], id: Product['id']): Promise<Product> => {
  const { data } = await tmdb.get(`/${type}/${id}`);

  const product = mapToProduct(data);

  return product;
};

// home
export const getNewReleaseProducts = async (): Promise<Product[]> => {
  const [movieRes, tvRes] = await Promise.all([
    tmdb.get('/discover/movie', {
      params: {
        sort_by: 'release_date.desc',
        pages: 1,
      },
    }),
    tmdb.get('/discover/tv', {
      params: {
        sort_by: 'first_air_date.desc',
        pages: 1,
      },
    }),
  ]);

  const filtered = [...movieRes.data.results, ...tvRes.data.results]
    .sort((a, b) => {
      const dateA = new Date(a.release_date || a.first_air_date || '').getTime();
      const dateB = new Date(b.release_date || b.first_air_date || '').getTime();
      return dateB - dateA;
    })
    .slice(0, 20);

  const products = mapToProductList(filtered);

  return products;
};

export const getPopularProducts = async (): Promise<Product[]> => {
  const [movieRes, tvRes] = await Promise.all([
    tmdb.get('/movie/popular', { params: { pages: 1 } }),
    tmdb.get('/tv/popular', { params: { pages: 1 } }),
  ]);

  const filtered = [...movieRes.data.results, ...tvRes.data.results]
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 20);

  const products = mapToProductList(filtered);

  return products;
};

export const getThumbnailProduct = async (): Promise<{ product: Product; index: number }> => {
  const products = await getTrendingTodayTop10Products();
  const randomIndex = Math.floor(Math.random() * products.length);

  return { product: products[randomIndex], index: randomIndex };
};

export const getTrendingTodayTop10Products = async (): Promise<Product[]> => {
  const { data } = await tmdb.get('/trending/all/day', { params: { pages: 1 } });

  const filtered = data.results
    .filter((item: any) => item.media_type === 'movie' || item.media_type === 'tv')
    .slice(0, 10);

  const products = mapToProductList(filtered);

  return products;
};
