# Deployment Guide for BMI Calc

## 🚀 Vercel Deployment (Recommended)

### Prerequisites
- Vercel account (free at [vercel.com](https://vercel.com))
- GitHub repository with your code
- Domain name (optional, Vercel provides free subdomain)

### Step 1: Prepare Your Repository

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "feat: add Vercel Speed Insights integration"
   git push origin main
   ```

2. **Verify all files are included:**
   - `index.html` - Main calculator page
   - `vercel.json` - Vercel configuration
   - `package.json` - Dependencies
   - `api/analytics.js` - Analytics endpoint
   - All other HTML, CSS, JS files

### Step 2: Deploy to Vercel

1. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Project:**
   - **Framework Preset:** Other
   - **Root Directory:** `./` (default)
   - **Build Command:** Leave empty (static site)
   - **Output Directory:** Leave empty (static site)

3. **Environment Variables (Optional):**
   ```
   VERCEL_SPEED_INSIGHTS=1
   GOOGLE_ANALYTICS_ID=your-ga-id
   GOOGLE_SEARCH_CONSOLE_CODE=your-verification-code
   ```

4. **Deploy:**
   - Click "Deploy"
   - Wait for deployment to complete
   - Get your live URL (e.g., `https://bmi-calc.vercel.app`)

### Step 3: Configure Custom Domain (Optional)

1. **Add Domain:**
   - Go to Project Settings → Domains
   - Add your domain: `bmicalc.fit`
   - Follow DNS configuration instructions

2. **Update DNS:**
   - Add CNAME record: `www` → `cname.vercel-dns.com`
   - Add A record: `@` → `76.76.19.61`

### Step 4: Verify Speed Insights

1. **Check Speed Insights:**
   - Visit your deployed site
   - Open browser dev tools
   - Check Network tab for Speed Insights requests
   - Verify in Vercel dashboard under "Speed Insights"

2. **Test Performance:**
   - Use Google PageSpeed Insights
   - Check Core Web Vitals
   - Monitor in Vercel dashboard

## 📊 Performance Monitoring

### Vercel Speed Insights Features

1. **Real User Monitoring (RUM):**
   - Tracks actual user performance
   - Measures Core Web Vitals
   - Identifies performance bottlenecks

2. **Core Web Vitals Tracking:**
   - **LCP (Largest Contentful Paint):** < 2.5s
   - **FID (First Input Delay):** < 100ms
   - **CLS (Cumulative Layout Shift):** < 0.1

3. **Performance Metrics:**
   - Page load times
   - Time to interactive
   - First contentful paint
   - Resource loading times

### Analytics Dashboard

1. **Access Analytics:**
   - Go to Vercel dashboard
   - Select your project
   - Click "Speed Insights" tab

2. **Key Metrics to Monitor:**
   - Page views and unique visitors
   - Average page load time
   - Core Web Vitals scores
   - Geographic performance data
   - Device and browser breakdown

## 🔧 Configuration Files

### vercel.json
```json
{
  "version": 2,
  "name": "bmi-calc",
  "builds": [
    {
      "src": "**/*",
      "use": "@vercel/static"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    }
  ],
  "env": {
    "VERCEL_SPEED_INSIGHTS": "1"
  }
}
```

### package.json Scripts
```json
{
  "scripts": {
    "dev": "npx serve . -l 3000",
    "build": "echo 'No build process needed'",
    "deploy": "vercel --prod"
  }
}
```

## 🚀 Alternative Deployment Options

### 1. Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir .
```

### 2. GitHub Pages
```bash
# Enable GitHub Pages in repository settings
# Select source: Deploy from a branch
# Select branch: main
# Select folder: / (root)
```

### 3. Cloudflare Pages
```bash
# Connect GitHub repository
# Build command: (leave empty)
# Build output directory: /
```

## 📈 Performance Optimization

### Pre-deployment Checklist

- [ ] Minify CSS and JavaScript
- [ ] Optimize images (WebP format)
- [ ] Enable Gzip compression
- [ ] Set proper cache headers
- [ ] Remove unused code
- [ ] Test on multiple devices

### Post-deployment Monitoring

- [ ] Check Core Web Vitals
- [ ] Monitor page load times
- [ ] Track user engagement
- [ ] Analyze performance data
- [ ] Optimize based on insights

## 🔍 Troubleshooting

### Common Issues

1. **Speed Insights Not Working:**
   - Check if script is loaded
   - Verify Vercel project configuration
   - Check browser console for errors

2. **Slow Performance:**
   - Optimize images
   - Minify CSS/JS
   - Enable caching
   - Use CDN

3. **Analytics Not Tracking:**
   - Check API endpoint
   - Verify CORS settings
   - Check network requests

### Debug Commands

```bash
# Check Vercel deployment status
vercel ls

# View deployment logs
vercel logs

# Test locally with Vercel
vercel dev
```

## 📊 Expected Performance

### Target Metrics
- **Page Load Time:** < 2 seconds
- **LCP:** < 2.5 seconds
- **FID:** < 100ms
- **CLS:** < 0.1
- **SEO Score:** 95+

### Monitoring Tools
- Vercel Speed Insights
- Google PageSpeed Insights
- GTmetrix
- WebPageTest
- Chrome DevTools

## 🎯 Success Metrics

### Key Performance Indicators
- **Traffic Growth:** Month-over-month increase
- **Page Speed:** Consistent < 2s load time
- **User Engagement:** Time on site, bounce rate
- **SEO Rankings:** Position for target keywords
- **Revenue:** AdSense earnings growth

---

**Your BMI calculator is now ready for high-performance deployment! 🚀**
