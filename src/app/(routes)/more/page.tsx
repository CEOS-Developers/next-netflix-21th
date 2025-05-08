import React from 'react';

export default function More() {
  const LazyComponent = React.lazy(() => import('@components/not-implemented'));

  return <LazyComponent />;
}
