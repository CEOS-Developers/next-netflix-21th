import { Top10Icon } from '../icons/Banner';

const Top10Chip = () => {
	return (
		<section className="w-full h-fit flex justify-center items-center">
			<div className="w-fit h-fit flex gap-2 text-white body2-medium">
				<Top10Icon /> #2 in USA Today
			</div>
		</section>
	);
};

export default Top10Chip;
