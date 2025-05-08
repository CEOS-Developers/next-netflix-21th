import React from 'react';

export default function CommingSoon() {
  const LazyComponent = React.lazy(() => import('@components/not-implemented'));

  return <LazyComponent />;
}
