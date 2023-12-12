/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate-plugin");

const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
};

module.exports = nextTranslate(nextConfig);
