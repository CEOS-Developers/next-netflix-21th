import type { Metadata } from 'next';

import localFont from 'next/font/local';

import '@/styles/globals.css';

import TabBar from '../components/layouts/TabBar';

const netflixSans = localFont({
	src: [
		{
			path: '../public/fonts/NetflixSans-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../public/fonts/NetflixSans-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../public/fonts/NetflixSans-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
	],
	variable: '--font-netflix-sans',
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Netflix',
	description: 'Netflix Clone',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${netflixSans.variable} antialiased`}>
				{children}
				<TabBar />
			</body>
		</html>
	);
}
