const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.kamcoindia.com", "www.worldometers.info",'via.placeholder.com','miro.medium.com'],
  },
  webpack: (config) => {
    // You can make any custom modifications here
    return config;
  },
};

module.exports = withContentlayer(nextConfig);
