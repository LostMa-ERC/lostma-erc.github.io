import type { NextConfig } from "next";

const debug = process.env.NODE_ENV !== 'production';

const nextConfig: NextConfig = {
    turbopack: {
    root: process.cwd(),
  },
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true
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
