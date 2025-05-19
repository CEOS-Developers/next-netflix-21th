'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { useEffect, useState } from 'react';

import clsx from 'clsx';

import useDisableScroll from '@/utils/useDisableScroll';

export default function Splash() {
	const [isLogoFadingOut, setIsLogoFadingOut] = useState(false);
	const [isSplashVisible, setIsSplashVisible] = useState(true);

	const router = useRouter();

	useEffect(() => {
		const fadeOutTimer = setTimeout(() => {
			setIsLogoFadingOut(true);
		}, 900);

		const hideSplashTimer = setTimeout(() => {
			setIsSplashVisible(false);
			router.push('/home');
		}, 1500);

		return () => {
			clearTimeout(fadeOutTimer);
			clearTimeout(hideSplashTimer);
		};
	}, [router]);

	useDisableScroll(isSplashVisible);

	return (
		isSplashVisible && (
			<div className="fixed top-0 left-0 w-full h-full z-50 bg-black flex justify-center items-center">
				<Image
					className={clsx(
						'starting:opacity-70 transition-opacity duration-500',
						isLogoFadingOut ? 'opacity-0' : 'opacity-100',
					)}
					src={'/svgs/splash-logo.svg'}
					alt="넷플릭스 로고"
					width={208}
					height={56}
					priority
				/>
			</div>
		)
	);
}
