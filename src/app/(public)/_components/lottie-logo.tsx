'use client';

import LogoAnimation from '@public/animations/netflix-logo.json';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function LottieLogo() {
  const router = useRouter();

  const handleComplete = () => {
    router.push('/home');
  };

  return (
    <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2">
      <Lottie animationData={LogoAnimation} loop={false} onComplete={handleComplete} />
    </div>
  );
}
