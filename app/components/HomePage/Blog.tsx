'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, Calendar } from 'lucide-react';

// --- DATA ---
const blogPosts = [
  {
    id: 1,
    category: "Design",
    title: "The Future of UI: Why Neomorphism is Coming Back",
    excerpt: "Exploring the cyclical nature of design trends and how depth is returning to modern interfaces.",
    date: "Oct 12, 2025",
    readTime: "5 min read",
    image: "https://plus.unsplash.com/premium_photo-1661382011487-cd3d6b1d9dff?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "#"
  },
  {
    id: 2,
    category: "Technology",
    title: "Scaling Next.js Applications for Enterprise",
    excerpt: "Best practices for server-side rendering, caching strategies, and managing state in large apps.",
    date: "Oct 08, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    slug: "#"
  },
  {
    id: 3,
    category: "Marketing",
    title: "Neuromarketing: The Science Behind User Decisions",
    excerpt: "How cognitive bias and behavioral psychology influence the way users interact with your product.",
    date: "Sep 28, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    slug: "#"
  }
];

// --- COMPONENT ---
const BlogCard = ({ post, index }: { post: typeof blogPosts[0], index: number }) => {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group cursor-pointer flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-2xl mb-6 aspect-4/3">
        <img 
          src={post.image} 
          alt={post.title} 
          className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
        
        {/* Floating Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-black rounded-full border border-white/20">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col grow">
        {/* Meta Info */}
        <div className="flex items-center gap-4 text-xs font-medium text-gray-400 mb-3">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Read More Link (Pushed to bottom) */}
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between group/link">
          <span className="text-sm font-semibold text-gray-900">Read Article</span>
          <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover/link:bg-black group-hover/link:text-white transition-all duration-300">
            <ArrowUpRight size={16} />
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default function BlogSection() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-2 block"
            >
              Our Blog
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight"
            >
              Latest insights & <br /> industry trends.
            </motion.h2>
          </div>
          
          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="hidden md:flex px-6 py-3 rounded-full border border-gray-200 text-sm font-semibold hover:bg-black hover:text-white transition-colors items-center gap-2"
          >
            View All Articles <ArrowUpRight size={16} />
          </motion.button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* Mobile Button */}
        <div className="mt-12 md:hidden">
            <button className="w-full py-4 rounded-xl border border-gray-200 text-sm font-bold hover:bg-black hover:text-white transition-colors">
                View All Articles
            </button>
        </div>

      </div>
    </section>
  );
}