'use client';

import Image from 'next/image';

import { useEffect, useState } from 'react';

interface TrendingMovie {
	adult: boolean;
	backdrop_path: string;
	id: number;
	title: string;
	original_language: string;
	original_title: string;
	overview: string;
	poster_path: string;
	media_type: string;
	genre_ids: number[];
	popularity: number;
	release_date: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

type Props = {
	top10Movies: TrendingMovie[];
};

export default function TrendingBanner({ top10Movies }: Props) {
	const [movies, setMovies] = useState<TrendingMovie[]>([]);

	useEffect(() => {
		setMovies(top10Movies);
	}, [top10Movies]);

	return (
		<div className="pt-24">
			{movies.length > 0 && (
				<Image
					src={`https://image.tmdb.org/t/p/w375${movies[0].poster_path}`}
					alt={movies[0].title}
					width={375}
					height={500}
				/>
			)}
		</div>
	);
}
