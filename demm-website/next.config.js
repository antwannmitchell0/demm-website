/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Compress responses and serve modern JS to browsers that support it.
  compress: true,
}

module.exports = nextConfig
