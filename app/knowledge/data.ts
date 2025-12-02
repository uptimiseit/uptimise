// types.ts (or inside your component file)
export type Article = {
  id: string;
  category: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  imageUrl: string; // Placeholder for your images
};

// Mock Data Structure
export const CATEGORY_DATA: Record<string, Article[]> = {
  General: [
    {
      id: '1',
      category: 'General',
      title: 'How to Choose the Best Design Agency in India',
      description: 'Finding the right design agency in India can transform your brand. This step-by-step guide covers what to look for...',
      date: 'November 27, 2025',
      readTime: '11 min read',
      imageUrl: '/gen.jpg',
    },
    {
      id: '2',
      category: 'General',
      title: 'Digital Marketing vs Branding: Key Differences',
      description: 'Understanding the core differences between marketing strategies...',
      date: 'November 26, 2025',
      readTime: '< 1 min read',
      imageUrl: '/gen.jpg',
    }
  ],
  "Design Psychology": [
    {
      id: '3',
      category: 'Design Psychology',
      title: 'The Psychology of Color in UI Design',
      description: 'How different colors affect user decision making...',
      date: 'November 20, 2025',
      readTime: '5 min read',
      imageUrl: '/design.jpg',
    },
        {
      id: '4',
      category: 'General',
      title: 'Digital Marketing vs Branding: Key Differences',
      description: 'Understanding the core differences between marketing strategies...',
      date: 'November 26, 2025',
      readTime: '< 1 min read',
      imageUrl: '/gen.jpg',
    },
        {
      id: '5',
      category: 'General',
      title: 'Digital Marketing vs Branding: Key Differences',
      description: 'Understanding the core differences between marketing strategies...',
      date: 'November 26, 2025',
      readTime: '< 1 min read',
      imageUrl: '/gen.jpg',
    }
  ],
    "Technology": [
    {
      id: '6',
      category: 'Technology',
      title: 'AI Web development',
      description: 'How different colors affect user decision making...',
      date: 'November 20, 2025',
      readTime: '5 min read',
      imageUrl: '/techno.jpg',
    },
        {
      id: '7',
      category: 'General',
      title: 'Digital Marketing vs Branding: Key Differences',
      description: 'Understanding the core differences between marketing strategies...',
      date: 'November 26, 2025',
      readTime: '< 1 min read',
      imageUrl: '/techno.jpg',
    },
        {
      id: '8',
      category: 'General',
      title: 'Digital Marketing vs Branding: Key Differences',
      description: 'Understanding the core differences between marketing strategies...',
      date: 'November 26, 2025',
      readTime: '< 1 min read',
      imageUrl: '/techno.jpg',
    }
  ],
   Neuromarketing: [
    {
      id: '1',
      category: 'General',
      title: 'How to Choose the Best Design Agency in India',
      description: 'Finding the right design agency in India can transform your brand. This step-by-step guide covers what to look for...',
      date: 'November 27, 2025',
      readTime: '11 min read',
      imageUrl: '/gen.jpg',
    },
    {
      id: '2',
      category: 'General',
      title: 'Digital Marketing vs Branding: Key Differences',
      description: 'Understanding the core differences between marketing strategies...',
      date: 'November 26, 2025',
      readTime: '< 1 min read',
      imageUrl: '/gen.jpg',
    }
  ],
   Resources:[
    {
      id: '1',
      category: 'General',
      title: 'How to Choose the Best Design Agency in India',
      description: 'Finding the right design agency in India can transform your brand. This step-by-step guide covers what to look for...',
      date: 'November 27, 2025',
      readTime: '11 min read',
      imageUrl: '/gen.jpg',
    },
    {
      id: '2',
      category: 'General',
      title: 'Digital Marketing vs Branding: Key Differences',
      description: 'Understanding the core differences between marketing strategies...',
      date: 'November 26, 2025',
      readTime: '< 1 min read',
      imageUrl: '/gen.jpg',
    }
  ],
   "Case Studies": [
    {
      id: '1',
      category: 'General',
      title: 'How to Choose the Best Design Agency in India',
      description: 'Finding the right design agency in India can transform your brand. This step-by-step guide covers what to look for...',
      date: 'November 27, 2025',
      readTime: '11 min read',
      imageUrl: '/gen.jpg',
    },
    {
      id: '2',
      category: 'General',
      title: 'Digital Marketing vs Branding: Key Differences',
      description: 'Understanding the core differences between marketing strategies...',
      date: 'November 26, 2025',
      readTime: '< 1 min read',
      imageUrl: '/gen.jpg',
    }
  ],
  // Add other categories here...
};