import BannerOption from './components/BannerOption';
import HomeLNB from './components/HomeLNB';
import PlayButton from './components/PlayButton';
import Top10Chip from './components/Top10Chip';

export default function Home() {
	return (
		<div>
			<HomeLNB />
			<div className="pt-24">
				<Top10Chip />
				<section className="w-full h-fit py-4 px-10 flex justify-between items-center">
					<BannerOption option="plus" />
					<PlayButton />
					<BannerOption option="info" />
				</section>
			</div>
		</div>
	);
}
