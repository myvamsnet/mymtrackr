/** @type {import('next').NextConfig} */
import withPWAInit from "@ducanh2912/next-pwa";
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // Match any image URL on the domain
        hostname: "res.cloudinary.com",
        protocol: "https",
        // Match any path that starts with /image/upload/
      },
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production", // Remove console logs only in production
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.cache = false;
    }
    return config;
  },
};

const withPWA = withPWAInit({
  dest: "public",
  cacheOnFrontendNav: true,
  reloadOnOnline: true,
  aggressiveFrontEndNavCaching: true,
  disable: process.env.NODE_ENV === "development",
  swcMinify: true,
  workboxOptions: {
    disableDevLogs: true,
  },
});

export default withPWA(nextConfig);
