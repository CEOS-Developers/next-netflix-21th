import { categoryEndpointMap } from '@/lib/constants/categoryEndpointMap';
import { fetchMoviesApi } from '@/lib/utils/fetchMoviesApi';

import CategorizedMovieList from './CategorizedMovieList';

export default async function MovieList() {
	const responses = await Promise.all(categoryEndpointMap.map((item) => fetchMoviesApi(item.endpoint)));

	return (
		<div className="flex flex-col gap-5 pb-21">
			{responses.map((response, i) => (
				<CategorizedMovieList key={i} category={categoryEndpointMap[i].category} movies={response?.results ?? null} />
			))}
		</div>
	);
}
