interface BaseMedia {
  id: number;
  poster_path: string | null;
  backdrop_path?: string | null;
  overview?: string;
  vote_average?: number;
  popularity?: number;
  media_type?: "movie" | "tv";
}

export interface Movie extends BaseMedia {
  title: string;
  release_date?: string;
  original_title?: string;
  overview?:  string;
}

export interface TV extends BaseMedia {
  name: string;
  first_air_date?: string;
  original_name?: string;
  overview?: string;
}

export type GenreMovie = Movie
export type TrendingItem = Movie | TV;

export interface TMDBListResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}