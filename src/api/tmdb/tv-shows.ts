import { tmdb } from '@api/client';
import type { Product } from '@models/product';
import { mapToProduct } from './mapToProduct.util';

export const getKoreanTVShows = async (): Promise<Product[]> => {
  const { data } = await tmdb.get('/discover/tv', {
    params: {
      with_original_language: 'ko',
      region: 'KR',
      pages: 1,
    },
  });

  const products = mapToProduct(data.results);

  return products;
};

export const getNetflixOriginalTVShows = async (): Promise<Product[]> => {
  const { data } = await tmdb.get('/discover/tv', {
    params: {
      with_networks: 213,
      pages: 1,
    },
  });

  const products = mapToProduct(data.results);

  return products;
};

export const getMysteryTVShows = async (): Promise<Product[]> => {
  const { data } = await tmdb.get('/discover/tv', {
    params: {
      with_genres: '9648',
      pages: 1,
    },
  });

  const products = mapToProduct(data.results);

  return products;
};
