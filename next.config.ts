import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    qualities: [70, 75],
  },
  async redirects() {
    return [
      {
        source: "/services/insaats-uygulama",
        destination: "/services/insaat-uygulama",
        permanent: true,
      },
    ];
  },

  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
