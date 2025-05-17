import { PlayIcon } from '@/icons/Play';

const PlayButton = () => {
	return (
		<button
			className="w-full h-fit py-2 px-4 flex items-center justify-center gap-2
			bg-gray-100 text-black headline2-medium rounded-sm"
		>
			<PlayIcon />
			Play
		</button>
	);
};

export default PlayButton;
