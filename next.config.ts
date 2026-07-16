import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    // Portfolio ships fast; lint runs separately via `npm run lint`.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
