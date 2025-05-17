"use client";
import dynamic from "next/dynamic";

const LandingLogo = dynamic(() => import("@/components/landing/LandingLogo"), {
  ssr: false,
});

const LandingPage = () => {
  return (
    <div className="h-full w-full bg-black">
      <LandingLogo />
    </div>
  );
};
export default LandingPage;
