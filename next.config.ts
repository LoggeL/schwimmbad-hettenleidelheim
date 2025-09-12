import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  // Ensure deployment works under subpath like /Schwimmbad-hettenleidelheim
  basePath: '/Schwimmbad-hettenleidelheim',
  assetPrefix: '/Schwimmbad-hettenleidelheim/',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: '/Schwimmbad-hettenleidelheim',
  },
}

export default nextConfig
