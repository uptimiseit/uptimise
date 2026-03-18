// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     // Add this image configuration object
//     images: {
//       remotePatterns: [
//         {
//           protocol: 'https',
//           hostname: 'placehold.co',
//           port: '',
//           pathname: '/**',
//         },
//         {
//         protocol: "https",
//         hostname: "images.unsplash.com",
//         port: "",
//         pathname: "/**", // Allows all paths from Unsplash
//       },
//          {
//         protocol: "https",
//         hostname: "plus.unsplash.com",
//         port: "",
//         pathname: "/**", // Allows all paths from Unsplash
//       },
//       {
//         protocol: "https",
//         hostname: "www.freepik.com",
//         port: "",
//         pathname: "/**", // Allows all paths from Unsplash
//       },
//       ],
//     },
// }

// module.exports = nextConfig


/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. IMAGE OPTIMIZATION DOMAINS (Your existing config)
  images: {
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
    ];
  },

  // 3. 301 REDIRECTS (New SEO Additions)
  async redirects() {
    return [
      {
        source: '/services', 
        destination: '/solutions', 
        permanent: true, 
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      }
    ];
  },
};

// Use ES Module export for .mjs files
export default nextConfig;