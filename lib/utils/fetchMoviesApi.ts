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

export async function fetchMoviesApi(endpoint: string): Promise<TMDBResponse | null> {
	const res = await fetch(process.env.NEXT_PUBLIC_TMDB_V3_BASE_URL + endpoint, {
		headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_V3_API_KEY}` },
	});

	if (!res.ok) {
		console.error(`${endpoint} API 호출 실패: `, await res.json());
		return null;
	}

	const data = await res.json();
	return data;
}
