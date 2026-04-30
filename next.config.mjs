/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/tebanvisual',
  assetPrefix: '/tebanvisual/',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
