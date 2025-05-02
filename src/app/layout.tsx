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
      <body className="min-h-screen flex items-center justify-center">
        <div className="mobile-frame relative bg-grayscale-00-black">{children}</div>
      </body>
    </html>
  );
}
