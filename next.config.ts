import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "apptriangle.com",
        pathname: "/wp-content/**",
      },
    ],
  },
};

export default nextConfig;
