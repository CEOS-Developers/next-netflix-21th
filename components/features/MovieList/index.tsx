import CategorizedMovieList from './CategorizedMovieList';

export default function MovieList() {
	return (
		<div className="flex flex-col gap-5">
			{(['sm', 'sm', 'sm', 'lg', 'sm', 'sm', 'sm'] as ('sm' | 'lg')[]).map((movie, i) => (
				<CategorizedMovieList key={i} size={movie} />
			))}
		</div>
	);
}
