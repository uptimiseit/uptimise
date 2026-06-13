


// import type { NextConfig } from 'next';
// import bundleAnalyzer from '@next/bundle-analyzer';

// // 1. Define base configuration rules
// const nextConfig: NextConfig = {
//   reactStrictMode: true,
//   poweredByHeader: false,
//   trailingSlash: false,
//   experimental: {
//     optimizePackageImports: ['lucide-react', 'framer-motion'],
//   },

//   // IMAGE OPTIMIZATION DOMAINS
// images: {
//   formats: ['image/avif', 'image/webp'],
//   remotePatterns: [
//     { protocol: 'https', hostname: 'placehold.co', port: '', pathname: '/**' },
//     { protocol: 'https', hostname: 'images.unsplash.com', port: '', pathname: '/**' },
//     { protocol: 'https', hostname: 'plus.unsplash.com', port: '', pathname: '/**' },
//     { protocol: 'https', hostname: 'www.freepik.com', port: '', pathname: '/**' },
//     { protocol: 'https', hostname: 'www.svgrepo.com', port: '', pathname: '/**' },
//     { protocol: 'https', hostname: 'd4czp4e8di12g.cloudfront.net', port: '', pathname: '/**' },
//   ],
// },

//   // SECURITY HEADERS, CACHING & CORS ALLOCATIONS
//   async headers() {
//     return [
//       {
//         // Target all API path locations or standard content pages
//         source: '/api/:path*', 
//         headers: [
//           // 🚀 ALLOW INCOMING FETCH STREAMS FROM YOUR SISTER FRONTEND DOMAINS
//           { key: 'Access-Control-Allow-Origin', value: 'https://uptimiseit.com' }, 
//           { key: 'Access-Control-Allow-Methods', value: 'GET, POST, PUT, DELETE, OPTIONS' },
//           { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' },
//         ],
//       },
//       {
//         source: '/(.*)',
//         headers: [
//           { key: 'X-DNS-Prefetch-Control', value: 'on' },
//           { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
//           { key: 'X-XSS-Protection', value: '1; mode=block' },
//           { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
//           { key: 'X-Content-Type-Options', value: 'nosniff' },
//           { key: 'Referrer-Policy', value: 'origin-when-cross-origin' }
//         ],
//       },
//       {
//         source: '/_next/image(.*)',
//         headers: [
//           { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
//         ],
//       },
//       {
//         source: '/(.*).(js|css|png|jpg|jpeg|svg|webp|woff2)',
//         headers: [
//           { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
//         ],
//       },
//     ];
//   },

//   // 301 REDIRECTS
//   async redirects() {
//     return [
//       { source: '/services', destination: '/solutions', permanent: true },
//       { source: '/home', destination: '/', permanent: true },
//       { source: '/hero', destination: '/', permanent: true },
//       { source: '/landing-home-page', destination: '/', permanent: true },
//       { source: '/LandingPage', destination: '/', permanent: true },
//     ];
//   },
// };

// // 2. Initialize bundle analyzer using clean ESM standard patterns
// const withBundleAnalyzer = bundleAnalyzer({
//   enabled: process.env.ANALYZE === 'true',
// });

// // 3. Export safely using native TypeScript defaults
// export default withBundleAnalyzer(nextConfig);


import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: false,
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "placehold.co", port: "", pathname: "/**" },
      { protocol: "https", hostname: "images.unsplash.com", port: "", pathname: "/**" },
      { protocol: "https", hostname: "plus.unsplash.com", port: "", pathname: "/**" },
      { protocol: "https", hostname: "www.freepik.com", port: "", pathname: "/**" },
      { protocol: "https", hostname: "www.svgrepo.com", port: "", pathname: "/**" },
      
      { protocol: "https", hostname: "d4czp4e8di12g.cloudfront.net", port: "", pathname: "/**" },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "origin-when-cross-origin" },
        ],
      },
    ];
  },
};

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer(nextConfig);