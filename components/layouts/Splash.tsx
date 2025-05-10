'use client';

import Image from 'next/image';

import { useEffect, useState } from 'react';

import clsx from 'clsx';

import useDisableScroll from '@/utils/useDisableScroll';

export default function Splash() {
	const [isLogoFadingOut, setIsLogoFadingOut] = useState(false);
	const [isSplashVisible, setIsSplashVisible] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLogoFadingOut(true);
		}, 900);
		setTimeout(() => {
			setIsSplashVisible(false);
		}, 1500);
	}, []);

	useDisableScroll(isSplashVisible);

	return isSplashVisible ? (
		<>
			<div className="absolute top-0 left-0 w-full h-full z-50 bg-black flex justify-center items-center">
				<Image
					className={clsx(
						'starting:opacity-70 transition-opacity duration-500',
						isLogoFadingOut ? 'opacity-0' : 'opacity-100',
					)}
					src={'/svgs/splash-logo.svg'}
					alt="넷플릭스 로고"
					width={208}
					height={56}
				/>
			</div>
		</>
	) : null;
}
