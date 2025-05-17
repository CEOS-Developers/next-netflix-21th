export interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    backdrop_path: string;
    release_date: string;
    vote_average: number;
  }
  
  export interface MovieResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
  }
  
  export interface MovieDetails extends Movie {
    genres: { id: number; name: string }[];
    runtime: number;
    status: string;
    tagline: string;
    videos: {
      results: {
        key: string;
        type: string;
        site: string;
      }[];
    };
  }
  
  export interface TMDBQueryParams {
    page?: number;
    language?: string;
    query?: string;
  }
  
  export interface TvDetails extends Movie {
    original_name: string;
    name: string;
    first_air_date: string;
    genres: { id: number; name: string }[];
    status: string;
    tagline: string;
    videos: {
      results: {
        key: string;
        type: string;
        site: string;
      }[];
    };
  }