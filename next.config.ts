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
        ignoreBuildErrors: true,
    }
};

export default nextConfig;
