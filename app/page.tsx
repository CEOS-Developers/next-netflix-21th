import Link from 'next/link';

import { TAB_BAR_OPTIONS } from './constants/GNB';
import { NetflixHomeLogo } from './icons/GNB';

export default function Home() {
	return (
		<div>
			<div className="fixed top-0 left-0 w-screen flex items-center gap-5 py-6 px-4 bg-black">
				<NetflixHomeLogo />
				<ul className="w-full flex justify-between">
					<li>TV Shows</li>
					<li>Movies</li>
					<li>My List</li>
				</ul>
			</div>
			<div className="fixed bottom-0 left-0 bg-black-sub w-screen">
				<ul className="flex items-center justify-between h-fit py-3 px-6 text-gray-200 caption">
					{TAB_BAR_OPTIONS.map(({ label, icon: Icon, route }) => (
						<li key={label}>
							<Link href={route} className="w-9 h-fit flex flex-col items-center gap-0.5">
								<Icon /> {label}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
