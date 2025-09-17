import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AdSenseProvider } from "@/components/providers/adsense-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Free BMI Calculator 2024 - Calculate Body Mass Index Online | BMI Calc",
  description: "Calculate your BMI instantly with our free, easy-to-use BMI calculator. Get detailed health information and BMI categories. #1 BMI calculator online.",
  keywords: "BMI calculator, body mass index, weight calculator, health calculator, BMI chart, obesity calculator, weight loss calculator, BMI calc, free BMI calculator, online BMI calculator, BMI calculator 2024",
  authors: [{ name: "BMI Calc Team" }],
  creator: "BMI Calc",
  publisher: "BMI Calc",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://bmicalc.fit/",
    title: "Free BMI Calculator 2024 - Calculate Body Mass Index Online | BMI Calc",
    description: "Calculate your BMI instantly with our free, easy-to-use BMI calculator. Get detailed health information and BMI categories. #1 BMI calculator online.",
    siteName: "BMI Calc",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@bmicalc",
    creator: "@bmicalc",
    title: "Free BMI Calculator 2024 - Calculate Body Mass Index Online | BMI Calc",
    description: "Calculate your BMI instantly with our free, easy-to-use BMI calculator. Get detailed health information and BMI categories. #1 BMI calculator online.",
  },
  verification: {
    google: "YOUR_VERIFICATION_CODE",
  },
  alternates: {
    canonical: "https://bmicalc.fit/",
  },
  other: {
    "theme-color": "#667eea",
    "msapplication-TileColor": "#667eea",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-64YKRCPLT3"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-64YKRCPLT3');
            `,
          }}
        />
        
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8004585225313485"
          crossOrigin="anonymous"
        />
        
        {/* Vercel Speed Insights */}
        <script
          type="module"
          dangerouslySetInnerHTML={{
            __html: `
              try {
                import('https://unpkg.com/@vercel/speed-insights@1.2.0/dist/index.js').then(({ init }) => {
                  init();
                  console.log('Vercel Speed Insights initialized successfully');
                }).catch(error => {
                  console.error('Speed Insights import failed:', error);
                });
              } catch (error) {
                console.error('Speed Insights module error:', error);
              }
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <AdSenseProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </AdSenseProvider>
      </body>
    </html>
  );
}