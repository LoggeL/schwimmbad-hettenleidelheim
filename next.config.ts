import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  // Ensure deployment works under subpath like /Schwimmbad-hettenleidelheim
  basePath: '/schwimmbad-hettenleidelheim',
  assetPrefix: '/schwimmbad-hettenleidelheim/',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: '/schwimmbad-hettenleidelheim',
  },
}

export default nextConfig
