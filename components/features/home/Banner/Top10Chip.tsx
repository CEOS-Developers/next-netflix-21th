import { Top10Icon } from '@/icons/Banner';

const Top10Chip = ({ swiperIndex }: { swiperIndex: number }) => {
	return (
		<section className="absolute bottom-6 left-0 z-10 w-full h-fit flex justify-center items-center">
			<div className="w-fit h-fit py-2 px-4 flex gap-2 text-white body2-medium">
				<Top10Icon /> #{swiperIndex} in USA Today
			</div>
		</section>
	);
};

export default Top10Chip;
