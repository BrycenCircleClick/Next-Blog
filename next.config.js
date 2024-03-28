const withBuilderDevTools = require("@builder.io/dev-tools/next")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["ahuraai.com"], // Add your external image domains here
  },
  // Add other custom Next.js configurations here
};

module.exports = withBuilderDevTools(nextConfig);
