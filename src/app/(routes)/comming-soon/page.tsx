import dynamic from 'next/dynamic';

const LazyComponent = dynamic(() => import('@components/not-implemented'), { ssr: false });

export default function CommingSoon() {
  return <LazyComponent />;
}
