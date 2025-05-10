import { fetcher } from '@/lib/fetcher';

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

export async function getMoviesApi(endpoint: string): Promise<TMDBResponse | null> {
	try {
		const movieData = await fetcher(endpoint);
		return movieData;
	} catch (error) {
		console.error('Error fetching movie data:', error);
		return null;
	}
}
