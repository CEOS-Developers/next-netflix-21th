import { fetcher } from '@/lib/fetcher';
import { TMDBResponse } from '@/types/movie.types';

export const getTrendingMovies = async () => {
	try {
		const data = await fetcher('/trending/movie/day', {
			language: 'en-US',
		});

		console.log(data);

		return data;
	} catch (error) {
		console.error(error);
	}
};

// 홈 화면 배너 하단 영화 큐레이션
export async function getMoviesApi(endpoint: string): Promise<TMDBResponse | null> {
	try {
		const movieData = await fetcher(endpoint);
		return movieData;
	} catch (error) {
		console.error('Error fetching movie data:', error);
		return null;
	}
}
