"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import Header from "@/components/layout/Header";

import bgImage from "@/public/images/404_bg.jpg";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="relative h-screen w-full overflow-hidden text-white">
      {/* 배경 이미지 */}
      <Header />
      <Image
        src={bgImage}
        alt="404 background"
        fill
        sizes="w-full"
        style={{ objectFit: "cover" }}
        quality={100}
        priority
      />

      {/* 컨텐츠 */}
      <div className="bg-overlay-100 absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <h1
          className="text-headline1 mb-[6.58px]"
          style={{
            textShadow: `0 1px 2px var(--color-overlay-200)`,
          }}
        >
          Lost your way?
        </h1>
        <p
          className="text-body4 mb-[12.375px] text-white"
          style={{
            textShadow: `0 1px 2px var(--color-overlay-200)`,
          }}
        >
          Sorry, we can&apos;t find that page. <br />
          You&apos;ll find lots to explore on the <br />
          home page.
        </p>
        <button
          onClick={() => router.push("/home")}
          className="text-caption1 cursor-pointer rounded bg-white px-[13.5px] py-[4.5px] text-black transition hover:bg-gray-100"
        >
          Netflix Home
        </button>
        <p className="text-caption2 mt-50 flex gap-3 text-white">
          <span className="text-red-500">|</span>
          Error Code <span className="text-caption1 text-white">NSES-404</span>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
