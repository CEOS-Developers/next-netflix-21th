import { tmdb } from '@api/client';
import type { Product } from '@models/product';
import { mapToProduct } from './mapToProduct.util';

export const getKoreanMovies = async (): Promise<Product[]> => {
  const { data } = await tmdb.get('/discover/movie', {
    params: {
      with_original_language: 'ko',
      region: 'KR',
      pages: 1,
    },
  });

  const products = mapToProduct(data.results);

  return products;
};
