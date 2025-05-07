import { axiosInstance } from "./axios";

export const getTrendingAllDay = () => 
  axiosInstance.get("/trending/all/day", {
    params: { language: "ko-KR" },
  });

export const getMoviesByGenre = (genreIds: string) =>
  axiosInstance.get("/discover/movie", {
    params: {
      with_genres: genreIds,
      sort_by: "popularity.desc",
      language: "ko-KR",
    },
  });
  