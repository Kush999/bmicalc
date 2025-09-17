// Script to verify environment variables are loaded correctly
console.log('Environment Variables Check:');
console.log('NEXT_PUBLIC_GA_MEASUREMENT_ID:', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID);
console.log('NEXT_PUBLIC_ADSENSE_CLIENT:', process.env.NEXT_PUBLIC_ADSENSE_CLIENT);
console.log('VERCEL_ANALYTICS:', process.env.VERCEL_ANALYTICS);

if (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID === 'G-64YKRCPLT3') {
  console.log('✅ Google Analytics ID is correctly set!');
} else {
  console.log('❌ Google Analytics ID is not set correctly');
}

if (process.env.NEXT_PUBLIC_ADSENSE_CLIENT === 'ca-pub-8004585225313485') {
  console.log('✅ AdSense Client ID is correctly set!');
} else {
  console.log('❌ AdSense Client ID is not set correctly');
}
