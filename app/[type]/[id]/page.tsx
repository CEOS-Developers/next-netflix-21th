import PlayButton from '@/components/common/PlayButton';
import { getDetail } from '@/services/tmdb';
import { MovieDetail, TVDetail } from '@/types/movie.types';
import Image from 'next/image';

function isMovieDetail(data: MovieDetail | TVDetail): data is MovieDetail {
	return 'title' in data;
}

export default async function Page({ params }: { params: Promise<{ type: 'tv' | 'movie'; id: string }> }) {
	const { type, id } = await params;

	const response = await getDetail(`/${type}/${id}`);
	if (!response) return null;

	const title = isMovieDetail(response) ? response.title : response.name;

	return (
		<div>
			<div
				className="relative w-full aspect-5/7
					before:content-[''] before:absolute before:left-0 before:top-0 before:right-0 before:bottom-0
					before:z-10 before:bg-linear-(--movie-bg-gradient)"
			>
				<Image
					className="object-cover"
					src={`https://image.tmdb.org/t/p/w500${response.poster_path}`}
					alt={`${title} 포스터`}
					fill
				/>
			</div>
			<div className="px-6 pt-4 pb-40">
				<PlayButton />
				<h3 className="text-white header1 mt-6 mb-4">{title}</h3>
				<div className="text-white body3">{response.overview}</div>
			</div>
		</div>
	);
}
