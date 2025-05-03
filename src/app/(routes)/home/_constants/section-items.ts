import { getNewReleaseProducts, getPopularProducts, getTrendingTodayTop10Products } from '@api/tmdb/all-products';
import { getKoreanMovies } from '@api/tmdb/movies';
import { getKoreanTVShows, getNetflixOriginalTVShows, getMysteryTVShows } from '@api/tmdb/tv-shows';

export const sectionItems = [
  { title: 'Previews', fetchFn: getPopularProducts, option: 'previews' },
  { title: 'Top 10 in Worldwide Today', fetchFn: getTrendingTodayTop10Products },
  { title: 'Korean Movies', fetchFn: getKoreanMovies },
  { title: 'Netflix Originals', fetchFn: getNetflixOriginalTVShows, option: 'netflix-originals' },
  { title: 'New Releases', fetchFn: getNewReleaseProducts },
  { title: 'TV Mysteries', fetchFn: getMysteryTVShows },
  { title: 'KR TV Shows', fetchFn: getKoreanTVShows },
];
