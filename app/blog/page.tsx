"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  LayoutGrid,
  List as ListIcon,
  ArrowRight,
  Clock,
  Calendar,
  TrendingUp,
  ChevronRight,
  ChevronLeft,
  Mail,
  BookOpen,
} from "lucide-react";

// --- MOCK DATA ---
const CATEGORIES = [
  "All Articles",
  "AI & Automation",
  "Software Development",
  "Product Design",
  "DevOps & Cloud",
  "Digital Growth",
  "Startup Strategy",
];

const MOCK_POSTS = [
  {
    id: 1,
    title: "The Future of AI-Native Software Development",
    excerpt:
      "How AI-assisted engineering workflows are transforming how modern digital products are built, tested, and deployed at venture speed.",
    category: "AI & Automation",
    date: "Oct 24, 2026",
    readTime: "8 min read",
    featured: true,
    popular: true,
    imageGradient: "from-indigo-500 to-purple-600",
  },
  {
    id: 2,
    title: "Building Scalable SaaS Platforms with Modern Architecture",
    excerpt:
      "A comprehensive guide to designing high-retention SaaS systems using event-driven microservices and cloud-native infrastructure.",
    category: "Software Development",
    date: "Oct 18, 2026",
    readTime: "12 min read",
    featured: false,
    popular: true,
    imageGradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "How DevOps Pipelines Improve Product Scalability",
    excerpt:
      "Eliminate deployment bottlenecks and achieve 99.99% uptime by automating your CI/CD pipelines and infrastructure as code.",
    category: "DevOps & Cloud",
    date: "Oct 12, 2026",
    readTime: "6 min read",
    featured: false,
    popular: true,
    imageGradient: "from-sky-500 to-indigo-500",
  },
  {
    id: 4,
    title: "Designing UX for Complex Digital Platforms",
    excerpt:
      "Why standard web design fails for enterprise software, and how to use cognitive load reduction to build intuitive B2B interfaces.",
    category: "Product Design",
    date: "Oct 05, 2026",
    readTime: "9 min read",
    featured: false,
    popular: false,
    imageGradient: "from-fuchsia-500 to-rose-500",
  },
  {
    id: 5,
    title: "Next.js vs Traditional Web Frameworks for E-commerce",
    excerpt:
      "Analyzing the performance, SEO, and conversion rate benefits of migrating legacy monoliths to headless Next.js architectures.",
    category: "Software Development",
    date: "Sep 28, 2026",
    readTime: "7 min read",
    featured: false,
    popular: false,
    imageGradient: "from-emerald-500 to-teal-500",
  },
  {
    id: 6,
    title: "The AI Software Factory Engine Explained",
    excerpt:
      "A deep dive into how we utilize autonomous AI agents to scaffold, write, and test boilerplate code 40% faster than traditional agencies.",
    category: "AI & Automation",
    date: "Sep 22, 2026",
    readTime: "15 min read",
    featured: false,
    popular: true,
    imageGradient: "from-violet-600 to-indigo-600",
  },
  {
    id: 7,
    title: "Startup MVP Development Strategy: What to Cut",
    excerpt:
      "Founders waste months building features users don't want. Here is the exact framework to isolate your core value prop and launch in 6 weeks.",
    category: "Startup Strategy",
    date: "Sep 15, 2026",
    readTime: "5 min read",
    featured: false,
    popular: false,
    imageGradient: "from-orange-500 to-amber-500",
  },
];

export default function BlogCollectionPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const [searchQuery, setSearchQuery] = useState("");

  // Filtering Logic
  const filteredPosts = MOCK_POSTS.filter((post) => {
    const matchesCategory =
      activeCategory === "All Articles" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch && !post.featured;
  });

  const featuredPost = MOCK_POSTS.find((post) => post.featured);
  const popularPosts = MOCK_POSTS.filter((post) => post.popular).slice(0, 4);

  return (
    <div className="min-h-screen bg-[#FDFDFF] text-slate-900 font-sans pb-24">
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-bold tracking-wide uppercase mb-4">
          <BookOpen size={16} /> Uptimise IT Insights
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto">
          Engineering Knowledge & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
            Technology Trends
          </span>
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Written by engineers, designers, and technology specialists. We share
          actionable insights on AI-native engineering, cloud infrastructure,
          and product strategy to help you build better digital platforms.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        {/* 2. SEARCH & FILTER CONTROLS */}
        <div className="sticky top-[80px] z-30 bg-[#FDFDFF]/90 backdrop-blur-md py-4 border-b border-slate-200 mb-10 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Search Bar */}
          <div className="relative w-full md:w-96 group">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors"
              size={18}
            />
            <input
              type="text"
              placeholder="Search articles, topics, tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-full pl-12 pr-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
            />
          </div>

          {/* Layout Toggles */}
          <div className="hidden md:flex items-center gap-2 bg-slate-100 p-1 rounded-lg border border-slate-200">
            <button
              aria-label="Uptimiseit"
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-md transition-all ${viewMode === "grid" ? "bg-white shadow-sm text-indigo-600" : "text-slate-500 hover:text-slate-900"}`}
              title="Grid View"
            >
              <LayoutGrid size={18} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              aria-label="Uptimiseit"
              className={`p-2 rounded-md transition-all ${viewMode === "list" ? "bg-white shadow-sm text-indigo-600" : "text-slate-500 hover:text-slate-900"}`}
              title="List View"
            >
              <ListIcon size={18} />
            </button>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          {CATEGORIES.map((category) => (
            <button
              aria-label="Uptimiseit"
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                activeCategory === category
                  ? "bg-slate-900 text-white shadow-md"
                  : "bg-white border border-slate-200 text-slate-600 hover:border-indigo-300 hover:text-indigo-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 3. FEATURED ARTICLE (Only show if "All Articles" and no search query) */}
        {activeCategory === "All Articles" &&
          searchQuery === "" &&
          featuredPost && (
            <Link
              href={"/blog/blog-detail"}
              className="mb-16 group cursor-pointer"
            >
              <div className="mb-16 group cursor-pointer">
                <div className="text-xs font-black tracking-widest text-indigo-600 uppercase mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></div>{" "}
                  Featured Article
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white border border-slate-200 rounded-3xl p-4 lg:p-8 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all">
                  <div
                    className={`w-full h-64 lg:h-96 rounded-2xl bg-gradient-to-br ${featuredPost.imageGradient} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
                  </div>
                  <div className="space-y-6 lg:px-6">
                    <span className="px-3 py-1 bg-indigo-50 text-indigo-700 font-bold text-xs rounded-full border border-indigo-100">
                      {featuredPost.category}
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors leading-tight">
                      {featuredPost.title}
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-4 text-sm font-medium text-slate-500">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} /> {featuredPost.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} /> {featuredPost.readTime}
                        </span>
                      </div>
                      <span className="text-indigo-600 font-bold flex items-center gap-1 group-hover:translate-x-2 transition-transform">
                        Read Article <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )}

        {/* 4. MAIN CONTENT LAYOUT (Grid + Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Post Feed */}
          <div className="lg:col-span-8">
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 gap-8"
                  : "flex flex-col gap-8"
              }
            >
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <Link href={"/blog/blog-detail"} key={post.id}>
                    <div
                      key={post.id}
                      className={`bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-indigo-200 transition-all group cursor-pointer ${viewMode === "list" ? "md:flex items-center" : "flex flex-col"}`}
                    >
                      {/* Card Image */}
                      <div
                        className={`${viewMode === "list" ? "w-full md:w-1/3 h-48 md:h-full" : "w-full h-48"} bg-gradient-to-br ${post.imageGradient} relative`}
                      >
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
                      </div>

                      {/* Card Content */}
                      <div
                        className={`p-6 flex flex-col ${viewMode === "list" ? "md:w-2/3 md:justify-center" : "flex-1"}`}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md border border-indigo-100">
                            {post.category}
                          </span>
                          <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                            <Clock size={12} /> {post.readTime}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors leading-snug">
                          {post.title}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                          {post.excerpt}
                        </p>
                        <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
                          <span className="text-xs font-medium text-slate-500">
                            {post.date}
                          </span>
                          <span className="text-indigo-600 font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                            Read More <ArrowRight size={14} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="col-span-full py-12 text-center border-2 border-dashed border-slate-200 rounded-2xl">
                  <p className="text-slate-500 font-medium">
                    No articles found matching your criteria.
                  </p>

                  <button
                    aria-label="Uptimiseit"
                    onClick={() => {
                      setSearchQuery("");
                      setActiveCategory("All Articles");
                    }}
                    className="mt-4 text-indigo-600 font-bold hover:underline"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>

            {/* Pagination */}
            {filteredPosts.length > 0 && (
              <div className="flex items-center justify-center gap-2 mt-16 pt-8 border-t border-slate-200">
                <button
                  aria-label="Uptimiseit"
                  className="p-2 text-slate-400 hover:text-indigo-600 transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  aria-label="Uptimiseit"
                  className="w-10 h-10 rounded-lg bg-indigo-600 text-white font-bold shadow-md"
                >
                  1
                </button>
                <button
                  aria-label="Uptimiseit"
                  className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-slate-600 font-bold hover:border-indigo-300 transition-colors"
                >
                  2
                </button>
                <button
                  aria-label="Uptimiseit"
                  className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-slate-600 font-bold hover:border-indigo-300 transition-colors"
                >
                  3
                </button>
                <span className="text-slate-400 font-bold">...</span>
                <button
                  aria-label="Uptimiseit"
                  className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-slate-600 font-bold hover:border-indigo-300 transition-colors"
                >
                  8
                </button>
                <button
                  aria-label="Uptimiseit"
                  className="p-2 text-slate-400 hover:text-indigo-600 transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-4 space-y-10">
            {/* Most Read Section */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-lg font-extrabold text-slate-900 mb-6 flex items-center gap-2">
                <TrendingUp className="text-rose-500" /> Most Read Articles
              </h3>
              <div className="space-y-6">
                {popularPosts.map((post, idx) => (
                  <div
                    key={post.id}
                    className="flex gap-4 group cursor-pointer"
                  >
                    <span className="text-3xl font-black text-slate-200 group-hover:text-indigo-100 transition-colors">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm group-hover:text-indigo-600 transition-colors leading-snug mb-1">
                        {post.title}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium">
                        {post.category} • {post.readTime}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="bg-slate-900 rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 blur-3xl rounded-full"></div>
              <Mail className="text-indigo-400 w-8 h-8 mb-4 relative z-10" />
              <h3 className="text-xl font-extrabold text-white mb-2 relative z-10">
                Stay Updated
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 relative z-10">
                Subscribe to receive new articles about technology, product
                development, and digital innovation.
              </p>
              <form className="relative z-10 space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-500"
                  required
                />
                <button
                  type="submit"
                      aria-label="Uptimiseit"
                  className="w-full bg-indigo-600 text-white font-bold rounded-xl py-3 hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/20"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-center text-[10px] text-slate-500 mt-4 relative z-10">
                No spam. Unsubscribe anytime.
              </p>
            </div>

            {/* Sidebar Categories (Desktop Only) */}
            <div className="hidden lg:block bg-slate-50 border border-slate-200 rounded-3xl p-8">
              <h3 className="text-lg font-extrabold text-slate-900 mb-4">
                Topics
              </h3>
              <ul className="space-y-3">
                {CATEGORIES.filter((c) => c !== "All Articles").map((cat) => (
                  <li key={cat}>
                    <button
                        aria-label="Uptimiseit"
                      onClick={() => setActiveCategory(cat)}
                      className={`text-sm font-bold w-full text-left flex justify-between items-center transition-colors pb-3 border-b border-slate-200 last:border-0 last:pb-0 ${activeCategory === cat ? "text-indigo-600" : "text-slate-600 hover:text-indigo-600"}`}
                    >
                      {cat}{" "}
                      <ChevronRight
                        size={14}
                        className={
                          activeCategory === cat ? "opacity-100" : "opacity-0"
                        }
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
