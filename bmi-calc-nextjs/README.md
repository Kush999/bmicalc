# BMI Calculator - Next.js Edition

A modern, responsive BMI calculator built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui components.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS
- **Beautiful UI**: shadcn/ui components for consistent design
- **Responsive Design**: Works perfectly on all devices
- **SEO Optimized**: Built-in SEO with metadata API
- **AdSense Ready**: Integrated Google AdSense support
- **PWA Support**: Progressive Web App capabilities
- **Performance**: Optimized for Core Web Vitals
- **Accessibility**: WCAG compliant components

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Kush999/bmicalc.git
cd bmicalc/bmi-calc-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── about-bmi/         # About BMI page
│   ├── bmi-categories/    # BMI Categories page
│   ├── faq/              # FAQ page
│   ├── privacy-policy/   # Privacy Policy page
│   └── page.tsx          # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── layout/           # Layout components
│   ├── bmi-calculator/   # BMI calculator components
│   ├── ads/              # AdSense components
│   └── providers/        # Context providers
└── lib/                  # Utility functions
```

## 🎨 Components

### BMI Calculator
- Real-time validation
- Multiple unit support (metric/imperial)
- Instant results with health insights
- Error handling and user feedback

### Layout Components
- Responsive header with navigation
- Footer with links and information
- Mobile-friendly navigation menu

### AdSense Integration
- Banner ads
- Sidebar ads
- Error handling for ad failures

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_id
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-your-client-id
```

### AdSense Setup
1. Replace placeholder ad slot IDs in components
2. Update client ID in AdSense components
3. Configure ad units in Google AdSense dashboard

## 📱 PWA Features

- Service worker for offline functionality
- App manifest for installation
- Responsive design for all devices
- Fast loading and performance

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push

### Manual Deployment
```bash
npm run build
npm start
```

## 📊 SEO Features

- Dynamic metadata generation
- Structured data (JSON-LD)
- XML sitemap
- Robots.txt
- Open Graph tags
- Twitter Cards

## 🧪 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

### Code Quality
- ESLint for code linting
- Prettier for code formatting
- TypeScript for type safety
- Tailwind CSS for consistent styling

## 📄 Pages

- **Home** (`/`) - BMI calculator with ads
- **About BMI** (`/about-bmi`) - Educational content
- **BMI Categories** (`/bmi-categories`) - Category explanations
- **FAQ** (`/faq`) - Frequently asked questions
- **Privacy Policy** (`/privacy-policy`) - Privacy information
- **Terms of Service** (`/terms-of-service`) - Terms and conditions

## 🔒 Privacy & Security

- No personal data collection
- Local BMI calculations
- HTTPS encryption
- Security headers
- GDPR compliance ready

## 📈 Performance

- Core Web Vitals optimized
- Image optimization
- Code splitting
- Lazy loading
- Vercel Speed Insights

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📝 License

MIT License - see LICENSE file for details

## 🆘 Support

For support, email support@bmicalc.fit or create an issue on GitHub.

---

Built with ❤️ using Next.js and shadcn/ui