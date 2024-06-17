import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    ppr: true,
    reactCompiler: true
  },
};


export default withNextVideo(nextConfig);
