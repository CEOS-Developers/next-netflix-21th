import { InfoIcon, PlusIcon } from '../../../../icons/Banner';

const BannerOption = ({ option }: { option: 'plus' | 'info' }) => {
	return (
		<a className="w-14 flex flex-col items-center gap-1 text-center body2">
			{option === 'plus' ? (
				<>
					<PlusIcon />
					My List
				</>
			) : (
				<>
					<InfoIcon />
					Info
				</>
			)}
		</a>
	);
};

export default BannerOption;
