const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')?.[1] ?? '';
const isGitHubActions = Boolean(process.env.GITHUB_ACTIONS);
const basePath = isGitHubActions && repositoryName ? `/${repositoryName}` : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;

