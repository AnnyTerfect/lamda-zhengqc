/** @type {import('next').NextConfig} */
const { resolve } = require("path");

const nextConfig = {
  output: "export",
  webpack(config) {
    config.resolve.modules.push(resolve("./"));
    return config;
  },
  basePath: "/zhengqc",
  assetPrefix: "/zhengqc",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
