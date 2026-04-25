import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://uptimiseit.com'; // Change to your actual domain

  // 1. Core Top-Level Pages
  const corePages = [
    '',
    '/about',
    '/contact',
    '/work',
    '/mission',
    '/vision',
    '/why-uptimiseit',
    '/clients',
    '/partners',
    '/career',
    '/booking',
    '/case-studies',
    '/knowledge',
    '/process',
    '/privacy',
    '/cookies'
  ];

  // 2. Industry Pages
  const industries = [
    'ai-startup', 'blockchain', 'ecommerce', 'edtech', 
    'enterprise', 'fintech', 'healthcare', 'saas'
  ];

  // 3. Solution Pages
  const solutions = [
    'ai-business-automation', 'ai-factory', 'ai-native', 'ai-products',
    'cloud-infrastructure', 'digital-growth', 'digital-platforms',
    'enterprise-modernization', 'mvp-development', 'product-design',
    'product-scaling', 'saas-development', 'workflow-automation'
  ];

  // 4. Service Pages (Subpages only, since main /services redirects to /solutions)
  const services = ['design', 'marketing', 'server', 'technology'];

  // 5. Static Blog & Insight Pages
  const insights = ['/blog', '/blog/engineeringBlogs', '/insights/guides', '/insights/trends'];

  // --- Map the arrays into the format Next.js expects ---

  const coreRoutes = corePages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8, // Home page gets top priority
  }));

  const industryRoutes = industries.map((industry) => ({
    url: `${baseUrl}/industries/${industry}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const solutionRoutes = solutions.map((solution) => ({
    url: `${baseUrl}/solutions/${solution}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9, // Solutions are high value for B2B
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const insightRoutes = insights.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  /* * 6. DYNAMIC BLOG POSTS (From app/blog/[slug])
   * To get your individual blog posts in the sitemap, you will need to fetch 
   * your slugs from your database or CMS here. 
   * * Example:
   * const posts = await fetch('YOUR_API/posts').then((res) => res.json());
   * const dynamicBlogRoutes = posts.map((post) => ({
   * url: `${baseUrl}/blog/${post.slug}`,
   * lastModified: new Date(post.updatedAt),
   * changeFrequency: 'monthly' as const,
   * priority: 0.6,
   * }));
   */

  return [
    ...coreRoutes,
    ...industryRoutes,
    ...solutionRoutes,
    ...serviceRoutes,
    ...insightRoutes,
    // ...dynamicBlogRoutes // Uncomment when your database fetch is ready
  ];
}