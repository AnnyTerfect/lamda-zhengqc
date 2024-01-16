const { resolve } = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  webpack(config) {
    config.resolve.modules.push(resolve("./"));
    return config;
  },
  basePath: "/zhengqc",
  assetPrefix: "/zhengqc/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
