# ShiftPal Landing Page - Deployment Guide

## Quick Start Deployment to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

1. **Push to GitHub**:

   ```bash
   git add .
   git commit -m "Initial ShiftPal landing page"
   git push origin main
   ```

2. **Enable GitHub Pages**:

   - Go to your repository on GitHub: `https://github.com/JAOS-DEV/shiftpal-app-site`
   - Click **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The site will automatically build and deploy!

3. **Access Your Site**:
   - GitHub Pages URL: `https://jaos-dev.github.io/shiftpal-app-site`
   - Custom domain (if configured): `https://shiftpal.app`

### Option 2: Manual Deployment

1. **Build the site**:

   ```bash
   npm run build
   ```

2. **Deploy `out/` directory**:
   - The `out/` directory contains your static site
   - Upload to any static hosting provider (Netlify, Vercel, etc.)

## Custom Domain Setup (shiftpal.app)

### Step 1: DNS Configuration

Configure your DNS provider with these records:

**Option A: Using A Records (Recommended)**

```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153

Type: CNAME
Name: www
Value: jaos-dev.github.io
```

**Option B: Using CNAME (Alternative)**

```
Type: CNAME
Name: @
Value: jaos-dev.github.io
```

### Step 2: GitHub Configuration

1. Go to **Settings** → **Pages** in your GitHub repository
2. Under **Custom domain**, enter: `shiftpal.app`
3. Check **Enforce HTTPS** (after DNS propagates)
4. Wait 24-48 hours for DNS propagation

### Step 3: Verify

- Visit `https://shiftpal.app` to confirm
- Check SSL certificate is active
- Test `www.shiftpal.app` redirect

## Updating Content

### Homepage Content

Edit these files:

- `app/page.tsx` - Main page structure
- `components/Hero.tsx` - Hero section
- `components/Features.tsx` - Features list
- `components/HowItWorks.tsx` - How it works steps
- `components/CTASection.tsx` - Call-to-action

### Legal Pages

- `app/privacy/page.tsx` - Privacy Policy
- `app/terms/page.tsx` - Terms of Service

### Assets

- Logo: `public/logo.png`
- Screenshots: Add to `public/screenshots/`

### After Making Changes

```bash
# Test locally
npm run dev

# Build and verify
npm run build

# Commit and push (triggers auto-deploy)
git add .
git commit -m "Update content"
git push origin main
```

## Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next out node_modules
npm install
npm run build
```

### Custom Domain Not Working

1. Verify DNS records are correct
2. Wait 24-48 hours for propagation
3. Check `public/CNAME` contains correct domain
4. Ensure HTTPS is enabled in GitHub Pages settings

### Images Not Loading

- Ensure images are in `public/` directory
- Use relative paths: `/logo.png` not `./logo.png`
- Check `next.config.js` has `images: { unoptimized: true }`

### 404 Errors

- Ensure `.nojekyll` file exists in `out/` directory
- Check GitHub Actions deployment logs
- Verify all pages are in the `out/` directory after build

## Monitoring

### Check Deployment Status

1. Go to **Actions** tab in GitHub
2. View latest workflow run
3. Check for errors in build/deploy logs

### Performance Testing

Run Lighthouse audit:

```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Run audit
lighthouse https://shiftpal.app --view
```

Target scores: 90+ in all categories

## Maintenance

### Regular Updates

- Update dependencies monthly:

  ```bash
  npm update
  npm audit fix
  ```

- Test after updates:
  ```bash
  npm run build
  npm run dev
  ```

### Content Updates

1. Edit content files
2. Test locally: `npm run dev`
3. Commit and push to trigger deployment

### Security

- Keep dependencies updated
- Monitor GitHub security alerts
- Regularly review Privacy Policy and Terms

## Support

For deployment issues or questions:

- **Email**: support@shiftpal.app
- **GitHub Issues**: Create an issue in the repository
- **Developer**: James O'Sullivan (JAOS-DEV)

---

**Last Updated**: December 17, 2025
