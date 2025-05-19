import Image from 'next/image';
import Link from 'next/link';

import { SearchPlayIcon } from '@/icons/Search';
import { Movie, TV } from '@/types/movie.types';

const SearchCard = ({ result, priority }: { result: Movie | TV; priority?: boolean }) => {
	const isMovie = result.media_type === 'movie';
	const title = isMovie ? (result as Movie).title : (result as TV).name;

	return (
		<Link href={`${result.media_type}/${result.id}`} className="w-full h-19 bg-gray-300 flex items-center">
			<div className="w-37 h-full shrink-0 flex items-center justify-center">
				{result.poster_path ? (
					<Image
						width={148}
						height={76}
						src={`https://image.tmdb.org/t/p/original${result.poster_path}`}
						alt={title}
						className="w-full h-full object-cover"
						priority={priority}
					/>
				) : (
					<span className="body3">No Image!</span>
				)}
			</div>
			<section className="flex-grow w-full h-full px-4 flex items-center justify-between gap-2 text-white body2 overflow-hidden">
				<span className="whitespace-nowrap overflow-hidden text-ellipsis">{title}</span>
				<SearchPlayIcon className="shrink-0" />
			</section>
		</Link>
	);
};

export default SearchCard;
