// import { tmdbAPI } from '@/lib/axios';
import { fetcher } from '@/lib/fetcher';

export const getTrendingMovies = async () => {
	try {
		const data = await fetcher('/trending/movie/day', {
			language: 'en-US',
		});

		return data;
	} catch (error) {
		console.error(error);
	}
};
