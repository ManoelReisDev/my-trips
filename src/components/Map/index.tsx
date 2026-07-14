'use client';

import dynamic from 'next/dynamic';
import type { MapProps } from './types';

const Map = dynamic<MapProps>(() => import('./client-map'), {
  ssr: false,
});

export type { MapProps, Place } from './types';
export default Map;
