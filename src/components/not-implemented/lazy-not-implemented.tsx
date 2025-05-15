'use client';

import dynamic from 'next/dynamic';

const NotImplemented = dynamic(() => import('./not-implemented'), { ssr: false });

export default function LazyNotImplemented() {
  return <NotImplemented />;
}
