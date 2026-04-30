/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/tebanvisual',
  assetPrefix: '/tebanvisual/',
  trailingSlash: true,
  images: {
    loader: 'custom',
    loaderFile: './lib/image-loader.js',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
