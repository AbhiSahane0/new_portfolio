import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbo: {
    enabled: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
