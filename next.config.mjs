/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export', // or 'standalone' if you are building for production
  webpack(config, { isServer }) {
    if (!isServer) {
      // Enable CSS Minification for production build
      config.optimization.minimize = true;
    }
    return config;
  },
};

export default nextConfig;
