# Deployment Guide - BMI Calculator Next.js

This guide will help you deploy the BMI Calculator Next.js application to Vercel.

## 🚀 Quick Deploy to Vercel

### Option 1: Deploy from GitHub (Recommended)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial Next.js BMI calculator"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Select your repository
   - Click "Deploy"

3. **Configure Environment Variables**:
   - Go to Project Settings → Environment Variables
   - Add the following variables:
     ```
     NEXT_PUBLIC_GA_MEASUREMENT_ID=your_google_analytics_id
     NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-8004585225313485
     ```

### Option 2: Deploy with Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Follow the prompts**:
   - Set up and deploy? `Y`
   - Which scope? Select your account
   - Link to existing project? `N`
   - Project name: `bmi-calc-nextjs`
   - Directory: `./`
   - Override settings? `N`

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Google AdSense
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-8004585225313485

# Vercel Analytics
VERCEL_ANALYTICS=1
```

### AdSense Configuration

1. **Update Ad Slot IDs**:
   - Replace placeholder slot IDs in components
   - Update `src/components/ads/ad-banner.tsx`
   - Update `src/components/ads/ad-sidebar.tsx`

2. **Configure Ad Units**:
   - Go to Google AdSense dashboard
   - Create ad units for:
     - Top banner (responsive)
     - Sidebar (300x250)
     - Bottom banner (responsive)

### Domain Configuration

1. **Custom Domain**:
   - Go to Vercel Project Settings
   - Add your domain: `bmicalc.fit`
   - Configure DNS records as instructed

2. **SSL Certificate**:
   - Automatically provided by Vercel
   - Force HTTPS redirect enabled

## 📊 Monitoring & Analytics

### Vercel Analytics
- Automatically enabled with `VERCEL_ANALYTICS=1`
- View in Vercel dashboard under "Analytics"

### Google Analytics
- Set up in Google Analytics dashboard
- Add measurement ID to environment variables
- View in Google Analytics dashboard

### Performance Monitoring
- Core Web Vitals tracked automatically
- View in Vercel dashboard under "Speed Insights"

## 🔧 Build Configuration

### Next.js Config
The `next.config.ts` file includes:
- Security headers
- Image optimization
- Sitemap and robots.txt rewrites
- Package optimization

### Build Process
```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start
```

## 🚨 Troubleshooting

### Common Issues

1. **Build Failures**:
   - Check TypeScript errors: `npm run type-check`
   - Check ESLint errors: `npm run lint`
   - Ensure all dependencies are installed

2. **AdSense Not Loading**:
   - Verify client ID is correct
   - Check ad slot IDs
   - Ensure domain is approved in AdSense

3. **SEO Issues**:
   - Verify metadata in each page
   - Check sitemap.xml accessibility
   - Test with Google Search Console

### Debug Commands

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Build test
npm run build

# Start production server locally
npm start
```

## 📈 Performance Optimization

### Core Web Vitals
- **LCP**: Optimized images and lazy loading
- **FID**: Minimal JavaScript, efficient event handlers
- **CLS**: Proper image dimensions, stable layouts

### Bundle Analysis
```bash
# Analyze bundle size
npm run build
# Check .next/analyze/ for bundle analysis
```

## 🔄 Continuous Deployment

### GitHub Integration
- Automatic deployments on push to main
- Preview deployments for pull requests
- Branch protection rules recommended

### Deployment Hooks
- Webhook URL provided by Vercel
- Use for external integrations
- Monitor deployment status

## 📝 Post-Deployment Checklist

- [ ] Verify site loads correctly
- [ ] Test BMI calculator functionality
- [ ] Check all pages are accessible
- [ ] Verify AdSense ads are loading
- [ ] Test mobile responsiveness
- [ ] Check SEO metadata
- [ ] Verify sitemap.xml
- [ ] Test robots.txt
- [ ] Check Google Analytics tracking
- [ ] Verify Vercel Analytics

## 🆘 Support

If you encounter issues:

1. Check Vercel deployment logs
2. Review browser console for errors
3. Test locally with `npm run dev`
4. Check environment variables
5. Verify all dependencies are installed

For additional help, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)

---

Your BMI Calculator is now ready for production! 🎉
