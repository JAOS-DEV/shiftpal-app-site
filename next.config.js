/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required for static export
  },
  // basePath is needed for GitHub Pages URL (jaos-dev.github.io/shiftpal-app-site)
  // Remove CNAME file if using GitHub Pages URL, or configure custom domain DNS if using custom domain
  basePath: "/shiftpal-app-site",
  trailingSlash: true,
};

module.exports = nextConfig;
