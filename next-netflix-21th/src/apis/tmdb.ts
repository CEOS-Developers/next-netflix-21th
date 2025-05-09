import { axiosInstance } from "./axios";
//HeroSlider
export const getTrendingAllDay = () =>
  axiosInstance.get("/trending/all/day", {
    params: { language: "ko-KR" },
  });

//장르별 영화
export const getMoviesByGenre = (genreIds: string) =>
  axiosInstance.get("/discover/movie", {
    params: {
      with_genres: genreIds,
      sort_by: "popularity.desc",
      language: "ko-KR",
    },
  });

//넷플릭스 오리지널
export const getTVByNetwork = (networkId: number) =>
  axiosInstance.get("/discover/tv", {
    params: {
      with_networks: networkId,
      language: "ko-KR",
    },
  });

export const getMoviesByCompany = (companyId: number) =>
  axiosInstance.get("/discover/movie", {
    params: {
      with_companies: companyId,
      language: "ko-KR",
    },
  });

//Preview
export const getMoviePopular = () => {
  return axiosInstance.get("/movie/popular", {
    params: { language: "ko-KR" },
  });
};

//Korea Movie
export const getKoreaMovie = () => {
  return axiosInstance.get("/discover/movie", {
    params: { with_original_language: "ko", language: "ko-KR" },
  });
};
