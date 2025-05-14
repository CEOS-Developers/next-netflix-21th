import { QueryProvider } from '@services/query';
import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Next Netflix',
  description: 'Netflix clone coding using next.js - team promesa.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center">
        <QueryProvider>
          <div className="mobile-frame bg-grayscale-00-black relative">{children}</div>
        </QueryProvider>
      </body>
    </html>
  );
}
