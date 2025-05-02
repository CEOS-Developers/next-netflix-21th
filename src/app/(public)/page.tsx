'use client';

import { useRouter } from 'next/navigation';
import Lottie from 'lottie-react';

import LogoAnimation from '@/app/assets/lottie/LogoAnimation.json';

export default function Landing() {
  const router = useRouter();

  const handleComplete = () => {
    router.push('/home');
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Lottie animationData={LogoAnimation} loop={false} onComplete={handleComplete} />
    </div>
  );
}
