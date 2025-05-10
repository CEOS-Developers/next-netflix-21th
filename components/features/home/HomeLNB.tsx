import { NetflixHomeLogo } from '@/icons/GNB';

const HomeLNB = () => {
	return (
		<div className="fixed top-0 left-1/2 -translate-x-1/2 w-screen max-w-[512px] h-24 flex items-center gap-5 px-4 bg-transparent z-50">
			<NetflixHomeLogo />
			<ul className="w-full flex justify-between">
				<li>TV Shows</li>
				<li>Movies</li>
				<li>My List</li>
			</ul>
		</div>
	);
};

export default HomeLNB;
