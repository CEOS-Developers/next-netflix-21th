import { getTrendingTodayTop10Products } from '@api/tmdb/all-products';

export const sectionItems = [{ title: 'Top 10 in Worldwide Today', fetchFn: getTrendingTodayTop10Products }];
