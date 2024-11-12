const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.kamcoindia.com", "www.worldometers.info"],
  },
};

module.exports = withContentlayer(nextConfig);
