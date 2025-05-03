import { tmdb } from '@api/client';
import type { Product } from '@models/product';
import { mapToProductList } from './mapToProduct.utils';

export const getKoreanTVShows = async (): Promise<Product[]> => {
  const { data } = await tmdb.get('/discover/tv', {
    params: {
      with_original_language: 'ko',
      region: 'KR',
      pages: 1,
    },
  });

  const products = mapToProductList(data.results, 'tv');

  return products;
};

export const getNetflixOriginalTVShows = async (): Promise<Product[]> => {
  const { data } = await tmdb.get('/discover/tv', {
    params: {
      with_networks: 213,
      pages: 1,
    },
  });

  const products = mapToProductList(data.results, 'tv');

  return products;
};

export const getMysteryTVShows = async (): Promise<Product[]> => {
  const { data } = await tmdb.get('/discover/tv', {
    params: {
      with_genres: '9648',
      pages: 1,
    },
  });

  const products = mapToProductList(data.results, 'tv');

  return products;
};
