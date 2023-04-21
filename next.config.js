/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
        formats: ['image/avif', 'image/webp'],
        domains: [ 'imgix.cosmicjs.com', 'i.imgur.com'],
    },
}

module.exports = nextConfig
