const BASE_URL = "https://api.themoviedb.org/3";

/**
 * (개인화 섹션 제외)
 * Continue Watching for {},
 * My List,
 * Watch It Again,
 *
 * Popular on Netflix,
 * Trending Now,
 * Top 10 in Korea Today,
 * Korea Movies,
 * Korea TV
 * Netflix Originals,
 * New Releases,
 * TV Thrillers & Mysteries,
 * US TV Shows
 */

export const API_URLS = {
  popularOnNetflix: `${BASE_URL}/discover/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&with_networks=213&language=ko-KR`,
  trendingNow: `${BASE_URL}/trending/movie/week?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=ko-KR`,
  top10InKoreaToday: `${BASE_URL}/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&region=KR&language=ko-KR`,
  koreaMovies: `${BASE_URL}/discover/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&with_origin_country=KR&language=ko-KR`,
  koreaTV: `${BASE_URL}/discover/tv?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&with_origin_country=KR&language=ko-KR`,
  netflixOriginals: `${BASE_URL}/discover/tv?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&with_networks=213&language=ko-KR`,
  newReleases: `${BASE_URL}/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=ko-KR`,
  TVThrillersAndMysteries: `${BASE_URL}/discover/tv?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&with_genres=9648&language=ko-KR`,
  USTVShows: `${BASE_URL}/discover/tv?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&with_origin_country=US&language=ko-KR`,
};
