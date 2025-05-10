import { PlayIcon } from '@/icons/Play';

const PlayButton = () => {
	return (
		<button className="w-fit h-fit py-2 px-4 bg-gray-100 text-black headline2-medium rounded-sm flex items-center justify-center gap-2">
			<PlayIcon />
			Play
		</button>
	);
};

export default PlayButton;
