const nextConfig = {
  devIndicators: {
    buildActivity: false,
    appIsrStatus: false,
  },
  experimental: {
    devtools: false,
  },
  env: {
    NEXT_PUBLIC_VERCEL_ENV: 'production',
  },
};

export default nextConfig;
