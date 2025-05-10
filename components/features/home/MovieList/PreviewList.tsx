import Image from 'next/image';

import { getMoviesApi } from '@/services/tmdb';

export default async function PreviewList() {
	const response = await getMoviesApi('/movie/now_playing');
	const previews = response?.results || [];

	return (
		<div className="pl-4 flex flex-col gap-4 mt-2.5">
			<h3 className="headline1">Previews</h3>
			<div className="relative w-full h-fit overflow-x-scroll no-scrollbar flex gap-2 pr-4">
				{previews.map((preview, i) => (
					<Image
						unoptimized
						src={'https://image.tmdb.org/t/p/w500' + preview.poster_path}
						alt={`${preview.title} poster`}
						width={100}
						height={100}
						className="bg-gray-200 object-cover w-25 h-25 aspect-square rounded-full"
						key={i}
					/>
				))}
			</div>
		</div>
	);
}
