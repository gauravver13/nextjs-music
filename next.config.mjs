/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      // Remote images only (from Unsplash)
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          pathname: '/**',
        },
      ],
    },
  };
  
export default nextConfig;
