'use client';

import { usePathname } from 'next/navigation';

import TabBar from '@/components/layouts/TabBar';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	const isSplash = pathname === '/';

	return (
		<>
			{children}
			{!isSplash && <TabBar />}
		</>
	);
}
