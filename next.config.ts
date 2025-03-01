/** @type {import('next').NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Disable ESLint during builds to prevent errors from stopping the build
  eslint: {
    // Production builds will still succeed even if there are ESLint errors
    ignoreDuringBuilds: true,
  },
};

export default config;
