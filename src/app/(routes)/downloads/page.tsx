import React from 'react';

export default function Downloads() {
  const LazyComponent = React.lazy(() => import('@components/not-implemented'));

  return <LazyComponent />;
}
