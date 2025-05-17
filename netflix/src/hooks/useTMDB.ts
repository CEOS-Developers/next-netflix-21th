import { useQuery } from "@tanstack/react-query";
import { MovieResponse, MovieDetails, TMDBQueryParams, TvDetails } from "@/types/tmdb";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_TMDB_API_BASE_URL;

const fetchTMDB = async <T>(
  endpoint: string,
  params: Record<string, string | number> = {},
): Promise<T> => {
  const queryParams = new URLSearchParams({
    api_key: API_KEY || "",
    language: "en-US",
    include_adult: "false",
    ...params,
  });

  const response = await fetch(`${BASE_URL}${endpoint}?${queryParams}`);
  if (!response.ok) {
    throw new Error("Failed to fetch data from TMDB");
  }
  return response.json();
};

export const usePopularMovies = (page: number = 1) => {
  return useQuery<MovieResponse>({
    queryKey: ["popularMovies", page],
    queryFn: () => fetchTMDB("/movie/popular", { page }),
  });
};

export const useTopRatedMovies = () => {
  return useQuery<MovieResponse>({
    queryKey: ["topRatedMovies"],
    queryFn: () => fetchTMDB("/movie/top_rated"),
  });
};

export const useTopRatedTvSeries = () => {
  return useQuery<MovieResponse>({
    queryKey: ["topRatedTvSeries"],
    queryFn: () => fetchTMDB("/tv/top_rated"),
  });
};

export const useUpcomingMovies = (params: TMDBQueryParams = {}) => {
  return useQuery<MovieResponse>({
    queryKey: ["upcomingMovies", params],
    queryFn: () =>
      fetchTMDB("/movie/upcoming", params as Record<string, string | number>),
  });
};

export const useMovieDetails = (movieId: number) => {
  return useQuery<MovieDetails>({
    queryKey: ["movieDetails", movieId],
    queryFn: () =>
      fetchTMDB(`/movie/${movieId}`, { append_to_response: "videos" }),
    enabled: !!movieId,
  });
};

export const useTvDetails = (tvId: number) => {
  return useQuery<TvDetails>({
    queryKey: ["tvDetails", tvId],
    queryFn: () =>
      fetchTMDB(`/tv/${tvId}`, { append_to_response: "videos" }),
    enabled: !!tvId,
  });
};

export const useSearchMovies = (
  query: string,
  page: number = 1,
) => {
  return useQuery<MovieResponse>({
    queryKey: ["searchMovies", query, page],
    queryFn: () => fetchTMDB("/search/movie", { query, page}),
    enabled: !!query,
  });
};
