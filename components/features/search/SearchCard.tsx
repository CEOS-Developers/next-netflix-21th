import Image from 'next/image';
import Link from 'next/link';

import { SearchPlayIcon } from '@/icons/Search';
import { Movie } from '@/types/movie.types';

const SearchCard = ({ result, priority }: { result: Movie; priority?: boolean }) => {
	return (
		<Link href={`${result.media_type}/${result.id}`} className="w-full h-19 bg-gray-300 flex items-center">
			<div className="w-37 h-full shrink-0">
				<Image
					width={148}
					height={76}
					src={`https://image.tmdb.org/t/p/original${result.poster_path}`}
					alt={result.title}
					className="w-full h-full object-cover"
					priority={priority}
				/>
			</div>
			<section className="flex-grow w-full h-full px-4 flex items-center justify-between gap-2 text-white body2">
				<span className="flex-grow w-full">{result.title}</span>
				<SearchPlayIcon />
			</section>
		</Link>
	);
};

export default SearchCard;
