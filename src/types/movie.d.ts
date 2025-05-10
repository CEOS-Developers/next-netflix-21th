export interface Movie {
  id: number;
  title: string;
  backdrop_path?: string | null;
  adult?: boolean;
  original_language?: string;
  original_title?: string;
  genre_ids?: number[];
  popularity?: number;
  vote_count?: number;
  vote_average?: number;
  video?: boolean;
  poster_path?: string | null;
  overview?: string;
  release_date?: string;
}
