import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/*",
      },
      {
        protocol: "https",
        hostname: "www.starpage.com",
        pathname: "/*",
      },
      {
        protocol: "https",
        hostname: "www.google.com",
        pathname: "/*",
      },
    ],
  },
};

export default nextConfig;
