import PlayButton from '@/components/common/PlayButton';
import BannerOption from '@/components/features/home/Banner/BannerOption';
import HomeLNB from '@/components/features/home/HomeLNB';
import MovieList from '@/components/features/home/MovieList';
import Top10Banner from '@/components/features/home/Banner/Top10Banner';

export default async function Home() {
	return (
		<div>
			<HomeLNB />
			<section>
				<Top10Banner />
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
