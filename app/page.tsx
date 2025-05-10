import BannerOption from './components/BannerOption';
import HomeLNB from './components/HomeLNB';
import PlayButton from './components/PlayButton';

export default function Home() {
	return (
		<div>
			<HomeLNB />
			<div className="pt-24">
				<section className="w-full h-fit py-4 px-10 flex justify-between items-center">
					<BannerOption option="plus" />
					<PlayButton />
					<BannerOption option="info" />
				</section>
			</div>
		</div>
	);
}
