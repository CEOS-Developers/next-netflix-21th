'use client';

import Lottie from 'lottie-react';

import LogoAnimation from '@/app/assets/lottie/LogoAnimation.json';

export default function Landing() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Lottie animationData={LogoAnimation} loop={false} />
    </div>
  );
}
