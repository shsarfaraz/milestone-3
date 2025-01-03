/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'di-uploads-development.dealerinspire.com',
      'encrypted-tbn0.gstatic.com',
    ], // Add all required domains here
  },
};

module.exports = nextConfig;
