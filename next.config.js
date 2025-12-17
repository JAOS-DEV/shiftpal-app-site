/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required for static export
  },
  // No basePath needed when using custom domain (shiftpal.app)
  // The CNAME file tells GitHub Pages to serve from root
  trailingSlash: true,
  // Ensure assets are referenced correctly
  assetPrefix: undefined,
};

module.exports = nextConfig;
