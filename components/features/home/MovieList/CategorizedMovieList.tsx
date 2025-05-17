import Image from 'next/image';
import Link from 'next/link';

import clsx from 'clsx';

import { Movie } from '@/types/movie.types';

export default function CategorizedMovieList({
	category,
	movies,
	type,
}: {
	category: string;
	movies: Movie[] | null;
	type: string;
}) {
	const isOriginal = category === 'Netflix Originals';

	if (!movies) return null;

	return (
		<div className="pl-4 flex flex-col gap-4">
			<h3 className="headline2">{category}</h3>
			<div className="relative w-full h-fit overflow-x-scroll no-scrollbar flex gap-2 pr-4">
				{movies.map((movie, i) => (
					<Link
						className={clsx('relative shrink-0 ', isOriginal ? 'w-45 h-60' : 'w-30 h-40')}
						href={`/${type}/${movie.id}`}
						key={i}
					>
						<Image
							unoptimized
							fill
							src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
							alt={`${movie.title} poster`}
							className={clsx('bg-gray-200 object-cover', isOriginal ? 'rounded-[0.125rem]' : 'rounded-[0.0625rem]')}
							priority={i < 3 ? true : false}
						/>
					</Link>
				))}
			</div>
		</div>
	);
}
