import { NextResponse } from 'next/server';

export async function GET() {
  const robots = `User-agent: *
Allow: /
Allow: /about-bmi
Allow: /bmi-categories
Allow: /health-tips
Allow: /medical-disclaimer
Allow: /privacy-policy
Allow: /terms-of-service
Allow: /faq
Allow: /blog

Sitemap: https://bmicalc.fit/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1`;

  return new NextResponse(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
