import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Netflix",
  description: "CEOS 21th NETFLIX Clone Coding",
  robots: "index, follow",
  authors: [{ name: "Sujin" }, { name: "Chaeyoung" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Netflix Clone",
    description: "CEOS 21th NETFLIX Clone Coding by SuyoungSwim",
    // url: '배포 주소 추가',
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
      <body>
        <div className="w-[375px] h-screen mx-auto bg-black ">{children}</div>
      </body>
    </html>
  );
}
