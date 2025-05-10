export default function CategorizedMovieList({ size }: { size: 'sm' | 'lg' }) {
	const isOriginal = size === 'lg';

	return (
		<div className="w-90 pl-4 flex flex-col gap-4">
			<h3 className="headline2-bold">Continue Watching for Emenalo</h3>
			<div className="relative w-full h-fit overflow-x-scroll no-scrollbar">
				<div className="flex gap-2 w-fit pr-4">
					{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, i) => (
						<div
							className={
								isOriginal ? 'w-45 h-60 rounded-[0.125rem] bg-gray-200' : 'w-30 h-40 rounded-[0.0625rem] bg-gray-200'
							}
							key={i}
						></div>
					))}
				</div>
			</div>
		</div>
	);
}
