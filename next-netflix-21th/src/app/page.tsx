"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Logo from "@/public/icons/header/logo.svg";
import LandingLottie from "@/public/lotties/LandingLottie.json";

// react-lottie-player를 동적으로 불러오기 (SSR 비활성화)
const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });


const Landing = () => {
  const router = useRouter();
  const [started, setStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleStart = () => {
    setStarted(true);
    audioRef.current?.play();
  };

  const handleAnimationComplete = () => {
    router.push("/home");
  };

  return (
    <div className="flex justify-center items-center w-full h-screen bg-black relative">
      {!started && (
        <div
          className="absolute inset-0 flex justify-center items-center z-10 cursor-pointer"
          onClick={handleStart}
        >
          <Logo
            width={300}
            className="cursor-pointer transform hover:scale-110 transition-transform duration-300 ease-in-out"
          />
        </div>
      )}
      <Lottie
        loop={false}
        animationData={LandingLottie}
        play={started}
        speed={1.25}
        className="w-full h-full"
        onComplete={handleAnimationComplete}
      />
      <audio src="/sounds/NetflixIntroSound.mp3" ref={audioRef} />
    </div>
  );
};

export default Landing;
