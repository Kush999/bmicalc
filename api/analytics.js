// Vercel Analytics API endpoint
export default function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Handle analytics data
  if (req.method === 'POST') {
    const { event, data } = req.body;
    
    // Log analytics event (in production, you'd send this to your analytics service)
    console.log('Analytics Event:', {
      event,
      data,
      timestamp: new Date().toISOString(),
      userAgent: req.headers['user-agent'],
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
    });

    // Track BMI calculations
    if (event === 'bmi_calculation') {
      console.log('BMI Calculation:', {
        bmi: data.bmi,
        category: data.category,
        weight: data.weight,
        height: data.height,
        timestamp: new Date().toISOString()
      });
    }

    // Track page views
    if (event === 'page_view') {
      console.log('Page View:', {
        page: data.page,
        referrer: data.referrer,
        timestamp: new Date().toISOString()
      });
    }

    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
