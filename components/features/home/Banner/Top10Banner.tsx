'use client';

import Image from 'next/image';

import { useEffect, useState } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { getTrendingMovies } from '@/services/tmdb';

import Top10Chip from './Top10Chip';
import Link from 'next/link';

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

export default function Top10Banner() {
	const [top10Movies, setTop10Movies] = useState<TrendingMovie[]>([]);
	const [swiperIndex, setSwiperIndex] = useState<number>(1);

	useEffect(() => {
		const fetchTrendingMovies = async () => {
			try {
				const data = await getTrendingMovies(); // 서버에서 fetch
				const top10Movies = data.results.slice(0, 10);
				setTop10Movies(top10Movies);
			} catch (error) {
				console.error('Error fetching trending movies:', error);
			}
		};
		fetchTrendingMovies();
	}, []);

	return (
		<ul className="w-full aspect-[5/7] relative">
			{top10Movies.length > 0 && (
				<Swiper
					autoplay={{ delay: 6000 }}
					slidesPerView={1}
					loop={true}
					modules={[Autoplay]}
					onSwiper={(swiper) => {
						setSwiperIndex(swiper.realIndex + 1); // 초기 인덱스 설정
					}}
					onSlideChange={(swiper) => setSwiperIndex(swiper.realIndex + 1)}
					className="w-full h-full before:absolute
						before:left-0 before:top-0 before:right-0 before:bottom-0
						before:z-10 before:bg-linear-(--movie-bg-gradient) before:pointer-events-none"
				>
					{top10Movies.map((movie, index) => (
						<SwiperSlide key={movie.id} className="w-full h-full">
							<li className="w-full h-full">
								<Link href={`/movie/${movie.id}`} className="relative w-full h-full block">
									<Image
										src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
										alt={movie.title}
										fill
										sizes="(max-width: 512px) 100vw"
										priority={index === 0}
									/>
								</Link>
							</li>
						</SwiperSlide>
					))}
					<Top10Chip swiperIndex={swiperIndex} />
				</Swiper>
			)}
		</ul>
	);
}
