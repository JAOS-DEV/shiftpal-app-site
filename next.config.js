/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required for static export
  },
  // Only use basePath in production (GitHub Pages)
  // In development, basePath is empty so site works at localhost:3000
  basePath: process.env.NODE_ENV === "production" ? "/shiftpal-app-site" : "",
  trailingSlash: true,
};

module.exports = nextConfig;
