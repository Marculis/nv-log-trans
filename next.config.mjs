/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  experimental: {
    forceSwcTransforms: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
