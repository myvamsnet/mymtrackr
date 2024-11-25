/** @type {import('next').NextConfig} */
// @ts-nocheck
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
};

const withPWA = withPWAInit({
  dest: "public",
  register: true,
  cacheOnFrontendNav: true,
  reloadOnOnline: true,
  aggressiveFrontEndNavCaching: true,
  disable: process.env.NODE_ENV === "development",
  workboxOptions: {
    disableDevLogs: true,
  },
  sw: "service-worker.js",
});

export default withPWA(nextConfig);
