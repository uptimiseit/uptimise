/** @type {import('next').NextConfig} */
const nextConfig = {

  reactStrictMode: true,
  
  // 🚀 NEW: Security best practice - hide the tech stack
  poweredByHeader: false,
  
  // 🚀 NEW: SEO best practice - avoid duplicate content penalties
  trailingSlash: false,


  // 1. IMAGE OPTIMIZATION DOMAINS (Your existing config)
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**", 
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        port: "",
        pathname: "/**", 
      },
      {
        protocol: "https",
        hostname: "www.freepik.com",
        port: "",
        pathname: "/**", 
      },
    ],
  },

  // 2. SECURITY HEADERS & CACHING (New SEO Additions)
  async headers() {
    return [
      {
        // Apply these security headers to all routes
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ],
      },
      {
        // Tell browsers to aggressively cache optimized images
        source: '/_next/image(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // NEW: Aggressive caching for static assets in your /public folder (fonts, custom icons, etc.)
        source: '/(.*).(js|css|png|jpg|jpeg|svg|webp|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // 3. 301 REDIRECTS (New SEO Additions)
async redirects() {
    return [
      // NOTE: If you decide to use app/services/page.tsx instead of solutions, remove this first block
      { source: '/services', destination: '/solutions', permanent: true },
      { source: '/home', destination: '/', permanent: true },
      
      // Protect SEO by redirecting your development/test folders to the main homepage
      { source: '/hero', destination: '/', permanent: true },
      { source: '/landing-home-page', destination: '/', permanent: true },
      { source: '/LandingPage', destination: '/', permanent: true },
    ];
  },

  // async rewrites() {
  //   return [
  //     {
  //       // Example: If you build a custom API route for blog fetching
  //       source: '/blog/:slug',
  //       destination: '/api/blog?slug=:slug',
  //     },
  //   ];
  // },


};





// Use ES Module export for .mjs files
export default nextConfig;