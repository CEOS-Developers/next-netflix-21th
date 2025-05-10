import { getMoviesApi } from '@/services/tmdb';

import { categoryEndpointMap } from '@/constants/categoryEndpointMap';

import CategorizedMovieList from './CategorizedMovieList';
import PreviewList from './PreviewList';

export default async function MovieList() {
	const responses = await Promise.all(categoryEndpointMap.map((item) => getMoviesApi(item.endpoint)));

	return (
		<div className="flex flex-col gap-5 pb-21">
			<PreviewList />
			{responses.map((response, i) => (
				<CategorizedMovieList key={i} category={categoryEndpointMap[i].category} movies={response?.results ?? null} />
			))}
		</div>
	);
}
