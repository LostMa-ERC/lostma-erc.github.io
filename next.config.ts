import type { NextConfig } from "next";

const debug = process.env.NODE_ENV !== 'production';

const nextConfig: NextConfig = {
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
