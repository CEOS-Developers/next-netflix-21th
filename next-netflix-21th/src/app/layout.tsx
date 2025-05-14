import type { Metadata } from "next";

import BottomNavBar from "@/components/layout/BottomNavBar";

import "./globals.css";

export const metadata: Metadata = {
  title: "Netflix",
  description: "CEOS 21th NETFLIX Clone Coding",
  robots: "index, follow",
  authors: [{ name: "Sujin" }, { name: "Chaeyoung" }],
  icons: {
    icon: "/icons/favicon.svg",
  },
  openGraph: {
    title: "Netflix Clone",
    description: "CEOS 21th NETFLIX Clone Coding by SuyoungSwim",
    url: "https://next-netflix-21th-suyoungswim.vercel.app",
    siteName: "Netflix Clone",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex justify-center bg-black text-white">
        <div className="relative h-screen w-[375px]">
          {children}
          <BottomNavBar />
        </div>
      </body>
    </html>
  );
}
