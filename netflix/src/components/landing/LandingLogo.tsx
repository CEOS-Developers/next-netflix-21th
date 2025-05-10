"use client";

import Lottie from "react-lottie-player";
import NetflixLogoAnimation from "@/constants/NetflixLogoAnimation.json";
import { useRouter } from "next/navigation";

const LandingLogo = () => {
  const router = useRouter();

  return (
    <Lottie
      animationData={NetflixLogoAnimation}
      play
      loop={false}
      className="h-full w-full object-cover"
      onComplete={() => router.push("/browse")}
    />
  );
};

export default LandingLogo;
