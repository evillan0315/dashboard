/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["next-auth"], // Add other packages as needed
  reactStrictMode: true, // Optional: Enables React's strict mode
  //swcMinify: true, // Optional: Uses SWC for minification
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
  },
};

export default nextConfig;
