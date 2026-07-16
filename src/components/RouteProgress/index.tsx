'use client';

import NextTopLoader from 'nextjs-toploader';

const ROUTE_PROGRESS_COLOR = '#f97316';

export default function RouteProgress() {
  return (
    <NextTopLoader
      color={ROUTE_PROGRESS_COLOR}
      height={3}
      showSpinner={false}
    />
  );
}
