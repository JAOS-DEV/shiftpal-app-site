/**
 * Get the base path for static assets
 * In production (GitHub Pages), this adds the repo name
 * In development, returns empty string
 */
export function getBasePath(): string {
  return process.env.NODE_ENV === "production" ? "/shiftpal-app-site" : "";
}

/**
 * Get a public asset path with the correct base path
 * @param path - The path relative to the public directory (e.g., "/logo.png")
 */
export function getAssetPath(path: string): string {
  const basePath = getBasePath();
  // Ensure path starts with /
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}
