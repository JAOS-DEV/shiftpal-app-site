# ShiftPal Landing Page - Product Development Requirements

**Last Updated:** December 17, 2025  
**Target Deployment:** GitHub Pages (`shiftpal-app-site` repo)

---

## 1. Overview

Create a modern, professional landing page for ShiftPal - a shift tracking and pay calculator mobile app. The site will serve as:

- Marketing/product showcase
- Legal document hosting (Terms of Service, Privacy Policy)
- App Store link hub
- Support contact point

---

## 2. Tech Stack

**Framework:** Next.js 14+ (Static Export)

- Reasoning: SEO-friendly, easy deployment to GitHub Pages, great DX
- Export as static site: `next export` → `out/` directory

**Language:** TypeScript (strict mode)

**Styling:** Tailwind CSS 3+

- Modern utility-first approach
- Responsive design built-in
- Easy theming and dark mode support

**Deployment:** GitHub Pages

- Repo: `shiftpal-app-site`
- Custom domain ready (optional): `shiftpal.app` or `jaos-dev.github.io/shiftpal-app-site`

---

## 3. Site Structure

```
/                    → Landing page (home)
/privacy             → Privacy Policy
/terms               → Terms of Service
```

### 3.1 Navigation

**Header (All Pages):**

- ShiftPal logo (left) - use provided SP logo
- Navigation links: Home | Privacy | Terms
- "Download" CTA button (right) - links to App Store (iOS only for now)
- Responsive: Hamburger menu on mobile

**Footer (All Pages):**

- © 2025 ShiftPal
- Links: Privacy | Terms | Support Email
- Social links (optional): GitHub, Twitter (if applicable)
- "Built with ❤️ for shift workers"

---

## 4. Page Requirements

### 4.1 Landing Page (`/`)

**Hero Section:**

- Large, bold headline: "Track Your Shifts, Calculate Your Pay"
- Subheadline: "The simple, powerful shift tracker for hourly workers. Track hours, breaks, and earnings in one beautiful app."
- App Store badge (download button)
- Hero image: Large iPhone mockup showing the app (placeholder for now, or use logo)
- Background: Gradient (blue theme matching logo)

**Features Section:**

- Grid layout (3 columns desktop, 1 column mobile)
- Feature 1: **Easy Shift Tracking**
  - Icon: Clock/Timer
  - Description: "Log shifts with timer mode or manual entry. Track breaks automatically."
- Feature 2: **Smart Pay Calculator**
  - Icon: Calculator/Currency
  - Description: "Set custom rates for regular, weekend, and night shifts. Automatic tax calculations."
- Feature 3: **Detailed History**
  - Icon: Calendar/List
  - Description: "View all your shifts by day, week, or month. Export your data anytime."
- Feature 4: **Secure & Private**
  - Icon: Lock/Shield
  - Description: "Your data is yours. Encrypted storage with Firebase. No ads, no tracking."
- Feature 5: **Beautiful Design**
  - Icon: Sparkles/Theme
  - Description: "Clean interface with light and dark mode. Designed for real shift workers."
- Feature 6: **Cross-Device Sync**
  - Icon: Cloud/Sync
  - Description: "Access your shifts on any device. Automatic cloud backup."

**How It Works Section:**

1. "Create your account in seconds"
2. "Set up your pay rates and rules"
3. "Track shifts with one tap"
4. "See your earnings instantly"

**App Preview Section:**

- 2-3 screenshots of the app (placeholder images or actual screenshots)
- Captions highlighting key features

**CTA Section:**

- "Ready to simplify your shift tracking?"
- App Store download button
- Small text: "Currently available on iOS. Android coming soon."

**Tech Stack Badge (Footer area):**

- "Built with React Native • Firebase • TypeScript"

### 4.2 Privacy Policy (`/privacy`)

**Source:** Use content from `docs/privacy.md`

**Layout:**

- Clean, readable typography
- Table of contents (sticky sidebar on desktop)
- Sections with clear headings
- "Plain English Summary" box at top (highlighted)
- Last updated date prominent

**Content Updates Needed:**
Replace placeholders:

- `[DATE]` → "December 17, 2025"
- `[YOUR_EMAIL]` → "support@shiftpal.app"
- `[YOUR_WEBSITE]` → "https://shiftpal.app"
- `[YOUR_NAME/COMPANY_NAME]` → "James O'Sullivan" or "ShiftPal"
- `[YOUR_LOCATION]` → Your actual location (e.g., "United Kingdom")
- `[YOUR_MAILING_ADDRESS]` → Your mailing address or "Available upon request"

### 4.3 Terms of Service (`/terms`)

**Source:** Use content from `docs/terms.md`

**Layout:**

- Same clean layout as Privacy page
- Table of contents
- "Plain English Summary" at top
- Clear section numbering

**Content Updates Needed:**
Same placeholders as Privacy Policy (see above)

---

## 5. Design Guidelines

### 5.1 Color Palette

**Primary Brand Color:** Blue (from SP logo)

- Primary: `#4A90E2` (logo blue)
- Primary Dark: `#2E5C8A`
- Primary Light: `#7AB4FF`

**Neutrals:**

- Background (Light): `#FFFFFF`
- Background (Dark): `#0F1419`
- Surface (Light): `#F7F9FC`
- Surface (Dark): `#1A1F27`
- Text (Light): `#1A1F27`
- Text (Dark): `#F7F9FC`
- Text Secondary: `#6B7280`

**Accent:**

- Success: `#10B981` (green)
- Warning: `#F59E0B` (amber)
- Error: `#EF4444` (red)

### 5.2 Typography

**Font Stack:**

- Sans: `Inter, system-ui, -apple-system, sans-serif`
- Mono: `'SF Mono', 'Monaco', 'Courier New', monospace` (for code if needed)

**Sizes:**

- Hero Headline: `text-5xl` to `text-6xl` (mobile to desktop)
- Section Headline: `text-3xl` to `text-4xl`
- Body: `text-base` to `text-lg`
- Small: `text-sm`

**Weights:**

- Bold: `font-bold` (700) - Headlines
- Semibold: `font-semibold` (600) - Subheadings
- Normal: `font-normal` (400) - Body

### 5.3 Components

**Buttons:**

- Primary: Blue background, white text, rounded-lg, shadow
- Secondary: Transparent with blue border, blue text
- Size: Large CTAs (px-8 py-4), Regular (px-6 py-3)
- Hover: Slight scale and shadow increase

**Cards:**

- Rounded corners: `rounded-xl` or `rounded-2xl`
- Shadow: `shadow-lg` for elevation
- Padding: `p-6` to `p-8`
- Background: Surface color

**Icons:**

- Use: Lucide React icons (clean, modern, consistent)
- Size: 24-32px for feature cards, 20px for navigation

### 5.4 Responsive Design

**Breakpoints (Tailwind defaults):**

- Mobile: `< 640px`
- Tablet: `640px - 1024px`
- Desktop: `> 1024px`

**Key Responsive Behaviors:**

- Hero: Stack on mobile, side-by-side on desktop
- Features: 1 column mobile, 2 columns tablet, 3 columns desktop
- Navigation: Hamburger menu on mobile
- Max width: `max-w-7xl` for content containers

---

## 6. Assets

### 6.1 Logo

- **File:** SP logo provided (blue icon with "Sp" text)
- **Usage:**
  - Header: 40-48px height
  - Hero: Larger version or app icon showcase
  - Favicon: Generate from logo

### 6.2 App Screenshots (To Add Later)

- iPhone mockups showing:
  - Shift tracker screen
  - Pay calculator
  - History/calendar view
  - Settings screen
- Optional: Use placeholder images initially

### 6.3 Icons

- Use Lucide React or Heroicons
- Keep consistent style throughout

---

## 7. SEO & Meta

**Homepage Meta:**

```html
<title>ShiftPal - Track Shifts, Calculate Pay | Shift Tracker App</title>
<meta
  name="description"
  content="Simple shift tracking and pay calculator for hourly workers. Track hours, breaks, and earnings. Available on iOS."
/>
<meta property="og:title" content="ShiftPal - Shift Tracker & Pay Calculator" />
<meta
  property="og:description"
  content="Track your shifts and calculate pay with ShiftPal"
/>
<meta property="og:image" content="[URL to logo or app preview]" />
```

**Privacy/Terms Meta:**

- Include proper meta tags
- Add `noindex` if you don't want them indexed (optional)

---

## 8. Key Links

**App Store Link:**

- Currently: "Coming Soon" or placeholder
- Once live: Actual App Store URL
- Format: `https://apps.apple.com/app/shiftpal/[APP_ID]`

**Support Email:**

- `support@shiftpal.app`
- Opens default mail client

**Optional Future Links:**

- GitHub (if open source)
- Twitter/X
- Contact form (future enhancement)

---

## 9. Content Tone & Voice

**Brand Personality:**

- Professional but friendly
- Helpful and empowering
- Clear and honest (especially in legal docs)
- Focused on user benefits

**Writing Style:**

- Short sentences
- Active voice
- Avoid jargon
- Speak directly to shift workers ("your shifts", "your pay")

**Example Good Headlines:**

- ✅ "Track Your Shifts, Calculate Your Pay"
- ✅ "Made for Shift Workers"
- ❌ "Revolutionary Workforce Management Solution" (too corporate)

---

## 10. Technical Requirements

### 10.1 Performance

- Lighthouse score: 90+ across all metrics
- Image optimization: Use Next.js Image component
- Lazy loading for below-fold content
- Minimal JavaScript bundle

### 10.2 Accessibility

- WCAG 2.1 AA compliance
- Semantic HTML
- Proper heading hierarchy
- Alt text for all images
- Keyboard navigation support
- Color contrast ratios: 4.5:1 minimum

### 10.3 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- No IE11 support required
- Mobile browsers (iOS Safari 14+, Chrome Mobile)

### 10.4 Analytics (Optional)

- Google Analytics 4 (optional, privacy-respecting)
- Simple page view tracking
- Download button click tracking

---

## 11. GitHub Pages Deployment

### 11.1 Build Configuration

**next.config.js:**

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: process.env.NODE_ENV === "production" ? "" : "",
  // If using repo URL: basePath: '/shiftpal-app-site'
};
module.exports = nextConfig;
```

**package.json scripts:**

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "export": "next build && next export",
    "deploy": "npm run build && touch out/.nojekyll && echo 'shiftpal.app' > out/CNAME"
  }
}
```

### 11.2 GitHub Pages Setup

1. Build site: `npm run build`
2. Output directory: `out/`
3. Push `out/` to `gh-pages` branch OR configure Pages to use `main` branch `/docs` folder
4. Enable GitHub Pages in repo settings
5. Optional: Configure custom domain

### 11.3 Custom Domain (Optional)

- Add `CNAME` file with domain: `shiftpal.app`
- Configure DNS:
  - A records pointing to GitHub Pages IPs
  - Or CNAME pointing to `jaos-dev.github.io`

---

## 12. File Structure

```
shiftpal-app-site/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage
│   │   ├── privacy/
│   │   │   └── page.tsx        # Privacy Policy page
│   │   └── terms/
│   │       └── page.tsx        # Terms of Service page
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── AppPreview.tsx
│   │   └── LegalLayout.tsx     # Shared layout for Privacy/Terms
│   ├── styles/
│   │   └── globals.css         # Tailwind imports
│   └── lib/
│       └── content.ts          # Static content/copy
├── public/
│   ├── logo.svg                # SP logo
│   ├── app-icon.png
│   ├── screenshots/
│   └── favicon.ico
├── docs/
│   ├── privacy-content.md      # Raw privacy policy
│   └── terms-content.md        # Raw terms content
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 13. Implementation Checklist

**Phase 1: Setup**

- [ ] Initialize Next.js project with TypeScript
- [ ] Install Tailwind CSS
- [ ] Configure static export
- [ ] Set up basic routing (/, /privacy, /terms)

**Phase 2: Components**

- [ ] Create Header component with navigation
- [ ] Create Footer component
- [ ] Create Hero section
- [ ] Create Features section
- [ ] Create CTA sections

**Phase 3: Content**

- [ ] Add homepage content
- [ ] Convert privacy.md to React component
- [ ] Convert terms.md to React component
- [ ] Update all placeholders (email, dates, etc.)

**Phase 4: Styling**

- [ ] Implement color palette
- [ ] Add typography styles
- [ ] Ensure mobile responsiveness
- [ ] Add dark mode support (optional)
- [ ] Polish animations and interactions

**Phase 5: Assets**

- [ ] Add SP logo to header
- [ ] Add favicon
- [ ] Add placeholder app screenshots
- [ ] Optimize all images

**Phase 6: Deployment**

- [ ] Test local build
- [ ] Configure GitHub Pages
- [ ] Deploy to GitHub Pages
- [ ] Test live site
- [ ] Configure custom domain (if applicable)

**Phase 7: Polish**

- [ ] Add SEO meta tags
- [ ] Test accessibility
- [ ] Run Lighthouse audit
- [ ] Cross-browser testing
- [ ] Mobile device testing

---

## 14. Future Enhancements (Post-MVP)

- [ ] Add actual app screenshots
- [ ] Add demo video
- [ ] Add FAQ section
- [ ] Add testimonials (once you have users)
- [ ] Add email signup for launch notifications
- [ ] Add blog section
- [ ] Add changelog/release notes
- [ ] Add Android download link (when available)
- [ ] Add "Share Your Feedback" form
- [ ] Add multi-language support

---

## 15. Success Criteria

**Must Have:**

- ✅ Clean, modern design matching brand
- ✅ Mobile-responsive
- ✅ All content visible and readable
- ✅ Privacy and Terms accessible
- ✅ App Store link works (when available)
- ✅ Fast load times (< 3s)

**Should Have:**

- ✅ Dark mode support
- ✅ Smooth animations
- ✅ Good SEO
- ✅ Accessible (WCAG AA)

**Nice to Have:**

- ✅ Interactive elements
- ✅ App preview animations
- ✅ Scroll effects

---

## 16. Contact & Support

**Developer:** James O'Sullivan  
**Email:** support@shiftpal.app  
**GitHub:** JAOS-DEV

---

**End of PDR**

_This document should provide everything needed to build the ShiftPal landing page. Copy this to the `shiftpal-app-site` repo and use it as the source of truth for development._
