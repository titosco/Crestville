/** @type {import('next').NextConfig} */
const nextConfig = {};

// export default nextConfig;

export default {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/about',
          permanent: true, // Set to true if this is a permanent redirect
        },
      ];
    },
  };
