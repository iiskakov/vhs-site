/** @type {import('next').NextConfig} */
import { withPayload } from '@payloadcms/next/withPayload'

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



export default withPayload(nextConfig);
