/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // Match any image URL on the domain
        hostname: 'res.cloudinary.com',
        protocol: 'https',
        // Match any path that starts with /image/upload/
      },
    ],
  },
};

export default nextConfig;
