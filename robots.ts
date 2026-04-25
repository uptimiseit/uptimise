import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Disallow API routes, test pages, and utility folders from being indexed by Google
      disallow: ['/api/', '/hero/', '/landing-home-page/', '/LandingPage/'],
    },
    // Replace this with your actual production domain
    sitemap: 'https://uptimiseit.com/sitemap.xml',
  };
}