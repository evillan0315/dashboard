/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { isServer }) {
    // Add CSS and PostCSS handling for ES module compatibility
    if (!isServer) {
      config.resolve.extensions.push(".css", ".scss");
    }
    return config;
  },
  transpilePackages: ["next-auth"], // Add other packages as needed
  reactStrictMode: true, // Optional: Enables React's strict mode
  //swcMinify: true, // Optional: Uses SWC for minification
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
  },
  images: {
    domains: [
      "images.unsplash.com",
      "res.cloudinary.com",
      "media.licdn.com",
      "assets.aceternity.com",
    ],
  },
};

export default nextConfig;
