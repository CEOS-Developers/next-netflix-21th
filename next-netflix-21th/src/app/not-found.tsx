"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import bgImage from "@/public/images/404_bg.jpg";
import Header from "@/components/layout/Header";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="relative w-full h-screen text-white overflow-hidden">
      {/* 배경 이미지 */}
      <Header />
      <Image
        src={bgImage}
        alt="404 background"
        fill
        style={{ objectFit: "cover" }}
        quality={100}
        priority
      />

      {/* 컨텐츠 */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/20">
        <h1
          className="text-3xl font-semibold mb-[6.58px]"
          style={{ textShadow: "0 1px 2px rgba(0, 0, 0, 0.57)" }}
        >
          Lost your way?
        </h1>
        <p
          className="text-xs mb-[12.375px] text-white"
          style={{ textShadow: "0 1px 2px rgba(0, 0, 0, 0.57)" }}
        >
          Sorry, we can't find that page. <br />
          You'll find lots to explore on the <br />
          home page.
        </p>
        <button
          onClick={() => router.push("/home")}
          className="bg-white text-black text-[9px] font-medium px-[13.5px] py-[4.5px] rounded hover:bg-gray-200 transition"
        >
          Netflix Home
        </button>
        <p className="flex mt-50 text-sm text-white font-extralight gap-3">
          <span className="text-red-500">|</span>
          Error Code <span className="font-medium text-white">NSES-404</span>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
