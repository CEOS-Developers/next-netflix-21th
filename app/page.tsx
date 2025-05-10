import Image from 'next/image';

import MovieList from '@/components/features/home/MovieList';
import Splash from '@/components/features/home/Splash';

import { getTrendingMovies } from './api/tmdb';
import BannerOption from './components/BannerOption';
import HomeLNB from './components/HomeLNB';
import PlayButton from './components/PlayButton';
import Top10Chip from './components/Top10Chip';

export default async function Home() {
	const data = await getTrendingMovies(); // 서버에서 fetch
	const top10Movies = data.results.slice(0, 10);

	return (
		<div>
			<HomeLNB />
			<Splash />
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
