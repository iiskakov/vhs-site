/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.yandexcloud.kz',
      },
    ],
  },
  experimental: {
    ppr: true,
    reactCompiler: true
  },
};


export default nextConfig;
