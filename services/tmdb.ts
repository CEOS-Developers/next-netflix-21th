import { fetcher } from '@/lib/fetcher';
import { MovieDetail, SearchResult, TMDBResponse, TVDetail } from '@/types/movie.types';

export const getTrendingMovies = async (page: number = 1) => {
	try {
		const data = await fetcher(`/trending/movie/day?page=${page}`, {
			language: 'en-US',
		});

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

export async function getDetail(endpoint: string): Promise<MovieDetail | TVDetail | null> {
	try {
		const detailData = await fetcher(endpoint);
		return detailData;
	} catch (error) {
		console.error('Error fetching detail data:', error);
		return null;
	}
}

// 검색 API 호출 함수
export const searchMovies = async (query: string): Promise<SearchResult | null> => {
	try {
		const data = await fetcher(`/search/multi?query=${query}`);
		return data;
	} catch (error) {
		console.error(error);
		return null;
	}
};
