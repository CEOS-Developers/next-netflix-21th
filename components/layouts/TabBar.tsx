import Link from 'next/link';

import { TAB_BAR_OPTIONS } from '../../constants/GNB';

const TabBar = () => {
	return (
		<div className="fixed bottom-0 left-1/2 -translate-x-1/2 z-1 bg-black-sub w-screen max-w-[512px]">
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
	);
};

export default TabBar;
