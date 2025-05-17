"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

import { useRef, useState } from "react";

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
    <div className="relative flex h-screen w-full items-center justify-center bg-black">
      {!started && (
        <div
          className="absolute inset-0 z-10 flex cursor-pointer items-center justify-center"
          onClick={handleStart}
        >
          <Logo
            width={300}
            className="transform cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>
      )}
      <Lottie
        loop={false}
        animationData={LandingLottie}
        play={started}
        speed={1.25}
        className="h-full w-full"
        onComplete={handleAnimationComplete}
      />
      <audio src="/sounds/NetflixIntroSound.mp3" ref={audioRef} />
    </div>
  );
};

export default Landing;
