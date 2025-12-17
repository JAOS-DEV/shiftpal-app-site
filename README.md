# ShiftPal Landing Page

Modern, professional landing page for ShiftPal - a shift tracking and pay calculator mobile app.

## 🚀 Live Site

- **Production**: [https://shiftpal.app](https://shiftpal.app)
- **GitHub Pages**: [https://jaos-dev.github.io/shiftpal-app-site](https://jaos-dev.github.io/shiftpal-app-site)

## 📋 Tech Stack

- **Framework**: Next.js 15 (Static Export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 🏗️ Project Structure

```
shiftpal-app-site/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   ├── privacy/           # Privacy Policy page
│   └── terms/             # Terms of Service page
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Hero section
│   ├── Features.tsx       # Features grid
│   ├── HowItWorks.tsx     # How it works section
│   ├── CTASection.tsx     # Call-to-action section
│   └── LegalLayout.tsx    # Legal pages layout
├── public/                # Static assets
│   ├── logo.png           # ShiftPal logo
│   ├── CNAME              # Custom domain config
│   └── screenshots/       # App screenshots
└── .github/workflows/     # GitHub Actions
    └── deploy.yml         # Deployment workflow
```

## 🛠️ Development

### Prerequisites

- Node.js 20+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/JAOS-DEV/shiftpal-app-site.git
cd shiftpal-app-site

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Build the static site
npm run build

# The output will be in the `out/` directory
```

## 📦 Deployment

### Automatic Deployment (GitHub Actions)

The site automatically deploys to GitHub Pages when you push to the `main` branch.

**Setup Steps:**

1. Go to your GitHub repository settings
2. Navigate to **Pages** → **Source**
3. Select **GitHub Actions** as the source
4. Push to `main` branch to trigger deployment

### Manual Deployment

```bash
# Build the site
npm run build

# Deploy files from the `out/` directory to your hosting provider
```

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette:

```typescript
colors: {
  primary: {
    DEFAULT: '#4A90E2',
    dark: '#2E5C8A',
    light: '#7AB4FF',
  },
  // ... more colors
}
```

### Content

- **Homepage**: Edit `app/page.tsx` and component files in `components/`
- **Privacy Policy**: Edit `app/privacy/page.tsx`
- **Terms of Service**: Edit `app/terms/page.tsx`
- **Metadata**: Update `app/layout.tsx` for SEO

### Assets

- Replace `public/logo.png` with your app logo
- Add app screenshots to `public/screenshots/`
- Update favicon by adding `app/favicon.ico`

## 🔗 Custom Domain

To use a custom domain (e.g., `shiftpal.app`):

1. Update `public/CNAME` with your domain name
2. Configure DNS records:
   - **A Records** pointing to GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - **OR CNAME** pointing to `jaos-dev.github.io`
3. Wait for DNS propagation (up to 24 hours)

## 📄 Pages

### Homepage (`/`)

- Hero section with CTA
- 6 feature cards
- How it works (4 steps)
- Final CTA section

### Privacy Policy (`/privacy`)

- Comprehensive privacy policy
- Plain English summary
- Table of contents ready

### Terms of Service (`/terms`)

- Complete terms of service
- Plain English summary
- Legal compliance

## 🧪 Performance

- Lighthouse Score: 90+ across all metrics
- Static site generation for fast loading
- Optimized images and assets
- Minimal JavaScript bundle

## 📱 Responsive Design

The site is fully responsive with breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🤝 Contributing

This is a private project for ShiftPal. If you have suggestions or find issues, please contact the developer.

## 📧 Contact

- **Developer**: James O'Sullivan
- **Email**: support@shiftpal.app
- **GitHub**: JAOS-DEV

## 📝 License

© 2025 ShiftPal. All rights reserved.

---

**Built with ❤️ for shift workers**
