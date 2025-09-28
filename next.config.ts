import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [393, 1280, 1920],
    imageSizes: [313, 644],
    qualities: [75, 85, 90],
  },
};

export default nextConfig;
