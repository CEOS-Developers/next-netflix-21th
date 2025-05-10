import { fetcher } from '@/app/lib/fetcher';
// import { tmdbAPI } from '../lib/axios';

export const getTrendingMovies = async () => {
	try {
		const data = await fetcher('/trending/movie/day', {
			language: 'en-US',
		});

		// const response = await tmdbAPI.get('/trending/movie/day', {
		// 	params: {
		// 		language: 'en-US',
		// 	},
		// });

		// console.log('Trending Movies:', data);
		return data;
	} catch (error) {
		console.error(error);
	}
};
