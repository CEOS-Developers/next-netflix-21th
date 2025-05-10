import Image from 'next/image';

import clsx from 'clsx';

import { Movie } from '@/types/movie.types';

export default function CategorizedMovieList({ category, movies }: { category: string; movies: Movie[] | null }) {
	const isOriginal = category === 'Netflix Originals';

	if (!movies) return null;

	return (
		<div className="pl-4 flex flex-col gap-4">
			<h3 className="headline2">{category}</h3>
			<div className="relative w-full h-fit overflow-x-scroll no-scrollbar flex gap-2 pr-4">
				{movies.map((movie, i) => (
					<Image
						unoptimized
						src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
						alt={`${movie.title} poster`}
						width={isOriginal ? 180 : 120}
						height={isOriginal ? 240 : 160}
						className={clsx('bg-gray-200 object-cover', isOriginal ? 'rounded-[0.125rem]' : 'rounded-[0.0625rem]')}
						key={i}
					/>
				))}
			</div>
		</div>
	);
}
