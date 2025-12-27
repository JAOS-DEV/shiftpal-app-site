# Image Path Fix for GitHub Pages

## Problem
Screenshots and logo images were not displaying on the deployed GitHub Pages site at https://jaos-dev.github.io/shiftpal-app-site/

## Root Cause
The site is deployed to a subdirectory (`/shiftpal-app-site/`), but while the logo used manual base path handling, the Next.js `Image` components for screenshots were using relative paths without considering the base path. In static exports with `images: { unoptimized: true }`, Next.js doesn't automatically apply the `basePath` to image sources.

## Solution Implemented

### 1. Created Path Utility (`lib/paths.ts`)
Created a reusable utility to handle base paths consistently:

```typescript
export function getBasePath(): string {
  return process.env.NODE_ENV === "production" ? "/shiftpal-app-site" : "";
}

export function getAssetPath(path: string): string {
  const basePath = getBasePath();
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}
```

### 2. Updated Components

**Files Modified:**
- `components/PhoneMockup.tsx` - Added `getAssetPath()` for screenshot paths
- `components/AppPreview.tsx` - Added `getAssetPath()` for screenshot paths
- `components/Header.tsx` - Replaced manual base path with `getAssetPath()`
- `components/Footer.tsx` - Replaced manual base path with `getAssetPath()`

### 3. Before vs After

**Before (Header/Footer):**
```tsx
src={`${process.env.NODE_ENV === "production" ? "/shiftpal-app-site" : ""}/logo.png`}
```

**After (All Components):**
```tsx
import { getAssetPath } from "@/lib/paths";
src={getAssetPath("/logo.png")}
```

**Before (PhoneMockup/AppPreview):**
```tsx
src="/screenshots/tracker-manual.png"
```

**After:**
```tsx
import { getAssetPath } from "@/lib/paths";
src={getAssetPath("/screenshots/tracker-manual.png")}
```

## Benefits
1. ✅ Consistent path handling across all components
2. ✅ Single source of truth for base path configuration
3. ✅ Easier to maintain and update
4. ✅ Works in both development (localhost) and production (GitHub Pages)
5. ✅ Type-safe with TypeScript
6. ✅ No linting errors

## Testing
After deployment, the images should now display correctly at:
- Logo in Header: ✅ `/shiftpal-app-site/logo.png`
- Logo in Footer: ✅ `/shiftpal-app-site/logo.png`
- Hero screenshot: ✅ `/shiftpal-app-site/screenshots/tracker-manual.png`
- AppPreview screenshots: ✅ All 3 screenshots with correct paths

## Next Steps
1. Close any running dev servers or build processes
2. Delete `.next` folder manually if needed (permission issues)
3. Run `npm run build` to create production build
4. Commit and push changes to GitHub
5. Wait for GitHub Actions to redeploy
6. Verify images display at https://jaos-dev.github.io/shiftpal-app-site/

## Files Changed
- ✅ `lib/paths.ts` (new file)
- ✅ `components/PhoneMockup.tsx`
- ✅ `components/AppPreview.tsx`
- ✅ `components/Header.tsx`
- ✅ `components/Footer.tsx`

## Deployment Command
```bash
# Commit changes
git add .
git commit -m "Fix image paths for GitHub Pages deployment"
git push origin main
```

GitHub Actions will automatically rebuild and deploy the site.

