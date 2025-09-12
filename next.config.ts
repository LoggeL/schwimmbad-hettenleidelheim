import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  // Ensure deployment works under subpath like /Schwimmbad-hettenleidelheim
  basePath: '/schwimmbad-hettenleidelheim',
  assetPrefix: '/schwimmbad-hettenleidelheim/',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
