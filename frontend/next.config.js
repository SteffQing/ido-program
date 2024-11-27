/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
};

module.exports = nextConfig;
