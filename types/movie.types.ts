export interface TMDBResponse {
	page: number;
	results: Movie[];
}

export interface Movie {
	adult: boolean;
	backdrop_path: string;
	first_air_date: string;
	id: number;
	media_type: 'movie' | 'tv';
	title: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	vote_average: number;
	vote_count: number;
}
