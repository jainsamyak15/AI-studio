/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // domains: ['together-ai-generated-images.s3.amazonaws.com','api.together.ai'],
    unoptimized: true,
  },
}

module.exports = nextConfig