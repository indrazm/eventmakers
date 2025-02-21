/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-02aec9ae0a024fc7881544598dd0e5e9.r2.dev",
        pathname: "/devscale-batch8/**",
      },
    ],
  },
};

export default nextConfig;
