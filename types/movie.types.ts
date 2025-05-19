export interface TMDBResponse {
	page: number;
	results: MediaInfos;
}

export interface Movie {
	adult: boolean;
	backdrop_path: string;
	first_air_date: string;
	id: number;
	media_type: string;
	title: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	vote_average: number;
	vote_count: number;
}

export interface TV {
	backdrop_path: string;
	first_air_date: string;
	genre_ids: number[];
	id: number;
	media_type: string;
	name: string;
	origin_country: string[];
	original_language: string;
	original_name: string;
	overview: string;
	popularity: number;
	poster_path: string;
	vote_average: number;
	vote_count: number;
}

export type MediaInfos = (Movie | TV)[];

export interface MovieDetail {
	title: string;
	overview: string;
	poster_path: string;
}

export interface TVDetail {
	name: string;
	overview: string;
	poster_path: string;
}

export interface SearchResult extends TMDBResponse {
	total_pages: number;
	total_results: number;
}
