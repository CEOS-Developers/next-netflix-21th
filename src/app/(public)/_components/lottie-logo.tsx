'use client';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import LogoAnimation from '@public/animations/netflix-logo.json';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function LottieLogo() {
  const router = useRouter();

  const handleComplete = () => {
    router.push('/home');
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Lottie animationData={LogoAnimation} loop={false} onComplete={handleComplete} />
    </div>
  );
}
