// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;



/** @type {import('next').NextConfig} */
const nextConfig = {
    // Add this image configuration object
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
        pathname: "/**", // Allows all paths from Unsplash
      },
         {
        protocol: "https",
        hostname: "plus.unsplash.com",
        port: "",
        pathname: "/**", // Allows all paths from Unsplash
      },
      {
        protocol: "https",
        hostname: "www.freepik.com",
        port: "",
        pathname: "/**", // Allows all paths from Unsplash
      },
      ],
    },
}

module.exports = nextConfig
