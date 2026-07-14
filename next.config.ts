import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  devIndicators: false,
  reactCompiler: true,
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
