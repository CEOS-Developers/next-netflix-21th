import Image from 'next/image';

import { getTrendingMovies } from '@/services/tmdb';

import PlayButton from '@/components/common/PlayButton';
import BannerOption from '@/components/features/home/Banner/BannerOption';
import Top10Chip from '@/components/features/home/Banner/Top10Chip';
import HomeLNB from '@/components/features/home/HomeLNB';
import MovieList from '@/components/features/home/MovieList';
import Splash from '@/components/layouts/Splash';

export default async function Home() {
	const data = await getTrendingMovies(); // 서버에서 fetch
	const top10Movies = data.results.slice(0, 10);

	return (
		<div>
			<HomeLNB />
			<section>
				<div className="w-full h-fit relative">
					{top10Movies.length > 0 && (
						<div className="w-full aspect-5/7 relative">
							{/* <div className="poster-backdrop absolute top-0 left-0 z-0"></div> */}
							<Image
								src={`https://image.tmdb.org/t/p/original${top10Movies[0]?.poster_path}`}
								alt={top10Movies[0]?.title}
								fill
								priority
							/>
						</div>
					)}
					<Top10Chip />
				</div>
				<section className="w-full h-fit py-4 px-10 flex justify-between items-center">
					<BannerOption option="plus" />
					<PlayButton />
					<BannerOption option="info" />
				</section>
				<MovieList />
			</section>
		</div>
	);
}
