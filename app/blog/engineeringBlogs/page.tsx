// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { 
//   Search, LayoutGrid, List as ListIcon, 
//   ArrowRight, Clock, Calendar, TrendingUp, 
//   ChevronRight, ChevronLeft, Mail, Terminal
// } from "lucide-react";

// // --- MOCK DATA FOR ENGINEERING ---
// const CATEGORIES = [
//   "All Engineering", "System Architecture", "AI & ML Ops", 
//   "Cloud Infrastructure", "DevSecOps", "Performance", "Web3 / Blockchain"
// ];

// const MOCK_POSTS = [
//   {
//     id: 1,
//     title: "Migrating from REST to GraphQL: A 10x Performance Blueprint",
//     excerpt: "How we reduced database round-trips and cut payload sizes by 80% for a global e-commerce client using Apollo Server and DataLoaders.",
//     category: "Performance",
//     date: "Nov 02, 2026",
//     readTime: "12 min read",
//     featured: true,
//     popular: true,
//     imageGradient: "from-cyan-600 to-blue-700"
//   },
//   {
//     id: 2,
//     title: "Implementing Zero-Trust Architecture in Multi-Tenant SaaS",
//     excerpt: "A deep dive into Row-Level Security (RLS) in PostgreSQL and how to ensure perfect tenant isolation in B2B applications.",
//     category: "DevSecOps",
//     date: "Oct 28, 2026",
//     readTime: "15 min read",
//     featured: false,
//     popular: true,
//     imageGradient: "from-slate-700 to-slate-900"
//   },
//   {
//     id: 3,
//     title: "Orchestrating Autonomous AI Agents with LangChain",
//     excerpt: "Building fault-tolerant, multi-agent systems that can self-correct when LLMs return hallucinated or invalid JSON schemas.",
//     category: "AI & ML Ops",
//     date: "Oct 15, 2026",
//     readTime: "10 min read",
//     featured: false,
//     popular: true,
//     imageGradient: "from-indigo-600 to-violet-800"
//   },
//   {
//     id: 4,
//     title: "The Strangler Fig Pattern: Modernizing Legacy Monoliths",
//     excerpt: "How to safely decouple 15-year-old Java backends into agile Node.js microservices with zero downtime using an API Gateway.",
//     category: "System Architecture",
//     date: "Oct 01, 2026",
//     readTime: "14 min read",
//     featured: false,
//     popular: false,
//     imageGradient: "from-emerald-600 to-teal-800"
//   },
//   {
//     id: 5,
//     title: "Why We Switched from Terraform to Pulumi for IaC",
//     excerpt: "The advantages of using actual programming languages (TypeScript) over HCL for managing complex AWS and Kubernetes deployments.",
//     category: "Cloud Infrastructure",
//     date: "Sep 18, 2026",
//     readTime: "8 min read",
//     featured: false,
//     popular: false,
//     imageGradient: "from-orange-500 to-amber-600"
//   },
//   {
//     id: 6,
//     title: "Optimizing Next.js App Router for Edge Environments",
//     excerpt: "A technical breakdown of shifting heavy computations to Vercel Edge functions and leveraging stale-while-revalidate (SWR) caching.",
//     category: "Performance",
//     date: "Sep 10, 2026",
//     readTime: "9 min read",
//     featured: false,
//     popular: true,
//     imageGradient: "from-sky-500 to-blue-600"
//   },
//   {
//     id: 7,
//     title: "Gas Optimization Techniques for Solidity Smart Contracts",
//     excerpt: "How packing variables, using unchecked blocks, and understanding Ethereum storage slots can save millions in deployment costs.",
//     category: "Web3 / Blockchain",
//     date: "Aug 22, 2026",
//     readTime: "11 min read",
//     featured: false,
//     popular: false,
//     imageGradient: "from-rose-600 to-red-800"
//   }
// ];

// export default function EngineeringBlogPage() {
//   const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
//   const [activeCategory, setActiveCategory] = useState("All Engineering");
//   const [searchQuery, setSearchQuery] = useState("");

//   // Filtering Logic
//   const filteredPosts = MOCK_POSTS.filter(post => {
//     const matchesCategory = activeCategory === "All Engineering" || post.category === activeCategory;
//     const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
//                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
//     return matchesCategory && matchesSearch && !post.featured;
//   });

//   const featuredPost = MOCK_POSTS.find(post => post.featured);
//   const popularPosts = MOCK_POSTS.filter(post => post.popular).slice(0, 4);

//   return (
//     <div className="min-h-screen bg-[#FDFDFF] text-slate-900 font-sans pb-5">
      
//       {/* 1. HERO SECTION */}
//       <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto text-center space-y-6">
//         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-sm font-bold tracking-wide uppercase mb-4">
//           <Terminal size={16} /> Uptimise Engineering Log
//         </div>
//         <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto">
//           Deep Technical Dives & <br />
//           <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 to-blue-600">Architecture Blueprints</span>
//         </h1>
//         <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
//           Written by our Senior Architects. Explore real-world case studies on system design, database optimization, cloud orchestration, and AI-native workflows.
//         </p>
//       </section>

//       <div className="max-w-7xl mx-auto px-6">
        
//         {/* 2. SEARCH & FILTER CONTROLS */}
//         <div className="sticky top-[80px] z-30 bg-[#FDFDFF]/90 backdrop-blur-md py-4 border-b border-slate-200 mb-10 flex flex-col md:flex-row justify-between items-center gap-4">
          
//           {/* Search Bar */}
//           <div className="relative w-full md:w-96 group">
//             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-cyan-600 transition-colors" size={18} />
//             <input 
//               type="text" 
//               placeholder="Search engineering logs..." 
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full bg-white border border-slate-200 rounded-full pl-12 pr-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all shadow-sm"
//             />
//           </div>

//           {/* Layout Toggles */}
//           <div className="hidden md:flex items-center gap-2 bg-slate-100 p-1 rounded-lg border border-slate-200">
//             <button 
//               onClick={() => setViewMode("grid")}
//               className={`p-2 rounded-md transition-all ${viewMode === "grid" ? "bg-white shadow-sm text-cyan-700" : "text-slate-500 hover:text-slate-900"}`}
//               title="Grid View"
//             >
//               <LayoutGrid size={18} />
//             </button>
//             <button 
//               onClick={() => setViewMode("list")}
//               className={`p-2 rounded-md transition-all ${viewMode === "list" ? "bg-white shadow-sm text-cyan-700" : "text-slate-500 hover:text-slate-900"}`}
//               title="List View"
//             >
//               <ListIcon size={18} />
//             </button>
//           </div>
//         </div>

//         {/* Category Pills */}
//         <div className="flex flex-wrap gap-2 mb-12">
//           {CATEGORIES.map(category => (
//             <button
//               key={category}
//               onClick={() => setActiveCategory(category)}
//               className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
//                 activeCategory === category 
//                 ? "bg-slate-900 text-white shadow-md" 
//                 : "bg-white border border-slate-200 text-slate-600 hover:border-cyan-400 hover:text-cyan-700"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* 3. FEATURED ARTICLE (Only show if "All Engineering" and no search query) */}
//         {activeCategory === "All Engineering" && searchQuery === "" && featuredPost && (
//           <Link href={'/engineering/blog-detail'} className="mb-16 group cursor-pointer block">
//             <div className="text-xs font-black tracking-widest text-cyan-700 uppercase mb-4 flex items-center gap-2">
//               <div className="w-2 h-2 rounded-full bg-cyan-600 animate-pulse"></div> Featured Architecture
//             </div>
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white border border-slate-200 rounded-3xl p-4 lg:p-8 shadow-sm hover:shadow-xl hover:border-cyan-300 transition-all">
//               <div className={`w-full h-64 lg:h-96 rounded-2xl bg-gradient-to-br ${featuredPost.imageGradient} relative overflow-hidden`}>
//                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
//                 <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm text-cyan-400 px-3 py-1 rounded text-xs font-mono">system_design.md</div>
//               </div>
//               <div className="space-y-6 lg:px-6">
//                 <span className="px-3 py-1 bg-cyan-50 text-cyan-800 font-bold text-xs rounded-full border border-cyan-200">
//                   {featuredPost.category}
//                 </span>
//                 <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 group-hover:text-cyan-700 transition-colors leading-tight">
//                   {featuredPost.title}
//                 </h2>
//                 <p className="text-lg text-slate-600 leading-relaxed">
//                   {featuredPost.excerpt}
//                 </p>
//                 <div className="flex items-center justify-between pt-4 border-t border-slate-100">
//                   <div className="flex items-center gap-4 text-sm font-medium text-slate-500">
//                     <span className="flex items-center gap-1"><Calendar size={14}/> {featuredPost.date}</span>
//                     <span className="flex items-center gap-1"><Clock size={14}/> {featuredPost.readTime}</span>
//                   </div>
//                   <span className="text-cyan-700 font-bold flex items-center gap-1 group-hover:translate-x-2 transition-transform">
//                     Read Engineering Log <ArrowRight size={16} />
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </Link>
//         )}

//         {/* 4. MAIN CONTENT LAYOUT (Grid + Sidebar) */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
//           {/* Left Column: Post Feed */}
//           <div className="lg:col-span-8">
//             <div className={
//               viewMode === "grid" 
//                 ? "grid grid-cols-1 md:grid-cols-2 gap-8" 
//                 : "flex flex-col gap-8"
//             }>
//               {filteredPosts.length > 0 ? filteredPosts.map(post => (
//                 <Link href={"/engineering/blog-detail"} key={post.id}>
//                   <div className={`bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-cyan-300 transition-all group cursor-pointer ${viewMode === "list" ? "md:flex items-center" : "flex flex-col"}`}>
                    
//                     {/* Card Image */}
//                     <div className={`${viewMode === "list" ? "w-full md:w-1/3 h-48 md:h-full" : "w-full h-48"} bg-gradient-to-br ${post.imageGradient} relative`}>
//                       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
//                     </div>
                    
//                     {/* Card Content */}
//                     <div className={`p-6 flex flex-col ${viewMode === "list" ? "md:w-2/3 md:justify-center" : "flex-1"}`}>
//                       <div className="flex items-center justify-between mb-4">
//                         <span className="text-xs font-bold text-cyan-800 bg-cyan-50 px-2 py-1 rounded-md border border-cyan-100">{post.category}</span>
//                         <span className="text-xs text-slate-400 font-medium flex items-center gap-1"><Clock size={12}/> {post.readTime}</span>
//                       </div>
//                       <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-700 transition-colors leading-snug">
//                         {post.title}
//                       </h3>
//                       <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
//                         {post.excerpt}
//                       </p>
//                       <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
//                         <span className="text-xs font-medium text-slate-500">{post.date}</span>
//                         <span className="text-cyan-700 font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
//                           Read Post <ArrowRight size={14} />
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </Link>
//               )) : (
//                 <div className="col-span-full py-12 text-center border-2 border-dashed border-slate-200 rounded-2xl">
//                   <p className="text-slate-500 font-medium">No engineering logs found matching your criteria.</p>
//                   <button onClick={() => {setSearchQuery(""); setActiveCategory("All Engineering");}} className="mt-4 text-cyan-700 font-bold hover:underline">Clear Filters</button>
//                 </div>
//               )}
//             </div>

//             {/* Pagination */}
//             {filteredPosts.length > 0 && (
//               <div className="flex items-center justify-center gap-2 mt-16 pt-8 border-t border-slate-200">
//                 <button className="p-2 text-slate-400 hover:text-cyan-700 transition-colors"><ChevronLeft size={20}/></button>
//                 <button className="w-10 h-10 rounded-lg bg-cyan-700 text-white font-bold shadow-md">1</button>
//                 <button className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-slate-600 font-bold hover:border-cyan-400 transition-colors">2</button>
//                 <button className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-slate-600 font-bold hover:border-cyan-400 transition-colors">3</button>
//                 <span className="text-slate-400 font-bold">...</span>
//                 <button className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-slate-600 font-bold hover:border-cyan-400 transition-colors">8</button>
//                 <button className="p-2 text-slate-400 hover:text-cyan-700 transition-colors"><ChevronRight size={20}/></button>
//               </div>
//             )}
//           </div>

//           {/* Right Column: Sidebar */}
//           <div className="lg:col-span-4 space-y-10">
            
//             {/* Most Read Section */}
//             <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
//               <h3 className="text-lg font-extrabold text-slate-900 mb-6 flex items-center gap-2">
//                 <TrendingUp className="text-blue-600" /> Most Read Logs
//               </h3>
//               <div className="space-y-6">
//                 {popularPosts.map((post, idx) => (
//                   <div key={post.id} className="flex gap-4 group cursor-pointer">
//                     <span className="text-3xl font-black text-slate-200 group-hover:text-cyan-100 transition-colors font-mono">0{idx + 1}</span>
//                     <div>
//                       <h4 className="font-bold text-slate-800 text-sm group-hover:text-cyan-700 transition-colors leading-snug mb-1">
//                         {post.title}
//                       </h4>
//                       <p className="text-xs text-slate-500 font-medium">{post.category} • {post.readTime}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Newsletter Section */}
//             <div className="bg-slate-900 rounded-3xl p-8 shadow-xl relative overflow-hidden">
//               <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 blur-3xl rounded-full"></div>
//               <Terminal className="text-cyan-400 w-8 h-8 mb-4 relative z-10" />
//               <h3 className="text-xl font-extrabold text-white mb-2 relative z-10">Join the Core Node</h3>
//               <p className="text-slate-400 text-sm leading-relaxed mb-6 relative z-10">
//                 Subscribe to receive deep technical breakdowns and architectural patterns directly from our senior engineering team.
//               </p>
//               <form className="relative z-10 space-y-3">
//                 <input 
//                   type="email" 
//                   placeholder="Enter your email" 
//                   className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-500 font-mono"
//                   required
//                 />
//                 <button type="submit" className="w-full bg-cyan-600 text-slate-900 font-bold rounded-xl py-3 hover:bg-cyan-500 transition-colors shadow-lg shadow-cyan-600/20">
//                   Subscribe
//                 </button>
//               </form>
//               <p className="text-center text-[10px] text-slate-500 mt-4 relative z-10">Zero spam. Unsubscribe anytime.</p>
//             </div>

//             {/* Sidebar Categories (Desktop Only) */}
//             <div className="hidden lg:block bg-slate-50 border border-slate-200 rounded-3xl p-8">
//               <h3 className="text-lg font-extrabold text-slate-900 mb-4">Architecture Tags</h3>
//               <ul className="space-y-3">
//                 {CATEGORIES.filter(c => c !== "All Engineering").map(cat => (
//                   <li key={cat}>
//                     <button 
//                       onClick={() => setActiveCategory(cat)}
//                       className={`text-sm font-bold w-full text-left flex justify-between items-center transition-colors pb-3 border-b border-slate-200 last:border-0 last:pb-0 ${activeCategory === cat ? "text-cyan-700" : "text-slate-600 hover:text-cyan-700"}`}
//                     >
//                       {cat} <ChevronRight size={14} className={activeCategory === cat ? "opacity-100" : "opacity-0"} />
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  Search, LayoutGrid, List as ListIcon, 
  ArrowRight, Clock, Calendar, TrendingUp, 
  ChevronRight, ChevronLeft, Terminal
} from "lucide-react";

// --- Animation Variants ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// --- MOCK DATA ---
const CATEGORIES = [
  "All Engineering", "System Architecture", "AI & ML Ops", 
  "Cloud Infrastructure", "DevSecOps", "Performance", "Web3 / Blockchain"
];

const MOCK_POSTS = [
  {
    id: 1,
    title: "Migrating from REST to GraphQL: A 10x Performance Blueprint",
    excerpt: "How we reduced database round-trips and cut payload sizes by 80% for a global e-commerce client.",
    category: "Performance",
    date: "Nov 02, 2026",
    readTime: "12 min read",
    featured: true,
    popular: true,
    imageGradient: "from-cyan-600 to-blue-700"
  },
  {
    id: 2,
    title: "Implementing Zero-Trust Architecture in SaaS",
    excerpt: "A deep dive into Row-Level Security (RLS) in PostgreSQL and tenant isolation.",
    category: "DevSecOps",
    date: "Oct 28, 2026",
    readTime: "15 min read",
    featured: false,
    popular: true,
    imageGradient: "from-slate-700 to-slate-900"
  },
  {
    id: 3,
    title: "Orchestrating AI Agents with LangChain",
    excerpt: "Building fault-tolerant, multi-agent systems that can self-correct JSON schemas.",
    category: "AI & ML Ops",
    date: "Oct 15, 2026",
    readTime: "10 min read",
    featured: false,
    popular: true,
    imageGradient: "from-indigo-600 to-violet-800"
  },
  {
    id: 4,
    title: "The Strangler Fig Pattern",
    excerpt: "How to safely decouple 15-year-old Java backends into agile Node.js microservices.",
    category: "System Architecture",
    date: "Oct 01, 2026",
    readTime: "14 min read",
    featured: false,
    popular: false,
    imageGradient: "from-emerald-600 to-teal-800"
  }
];

export default function EngineeringBlogPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [activeCategory, setActiveCategory] = useState("All Engineering");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = MOCK_POSTS.filter(post => {
    const matchesCategory = activeCategory === "All Engineering" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch && !post.featured;
  });

  const featuredPost = MOCK_POSTS.find(post => post.featured);
  const popularPosts = MOCK_POSTS.filter(post => post.popular).slice(0, 4);

  return (
    <div className="min-h-screen bg-[#FDFDFF] text-slate-900 font-sans pb-20 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="pt-40 pb-16 px-6 max-w-7xl mx-auto text-center space-y-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold tracking-widest uppercase mb-4"
        >
          <Terminal size={14} /> Uptimise Engineering Log
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 max-w-4xl mx-auto leading-[0.9]"
        >
          Technical <span className="text-blue-600 italic">Logs.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-500 max-w-2xl mx-auto font-medium"
        >
          Deep technical dives into system architecture, AI orchestration, and cloud infrastructure written by our senior engineering squad.
        </motion.p>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* 2. SEARCH & FILTER CONTROLS */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="sticky top-[80px] z-30 bg-white/80 backdrop-blur-md py-4 border-b border-slate-100 mb-10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search logs..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3 text-sm font-bold focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
            />
          </div>

          <div className="hidden md:flex items-center gap-2 bg-slate-100 p-1 rounded-xl">
            {(["grid", "list"] as const).map((mode) => (
              <button 
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`p-2 rounded-lg transition-all ${viewMode === mode ? "bg-white shadow-sm text-blue-600" : "text-slate-400 hover:text-slate-600"}`}
              >
                {mode === "grid" ? <LayoutGrid size={18} /> : <ListIcon size={18} />}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Category Pills */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-2 mb-12"
        >
          {CATEGORIES.map(category => (
            <motion.button
              key={category}
              variants={fadeInUp}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-widest transition-all ${
                activeCategory === category 
                ? "bg-slate-900 text-white shadow-lg" 
                : "bg-white border border-slate-200 text-slate-500 hover:border-blue-400"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* 3. FEATURED ARTICLE */}
        {activeCategory === "All Engineering" && searchQuery === "" && featuredPost && (
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href={'/engineering/blog-detail'} className="mb-16 group block">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white border border-slate-100 rounded-[3rem] p-6 lg:p-10 shadow-sm hover:shadow-2xl hover:border-blue-200 transition-all duration-500">
                <div className={`w-full h-64 lg:h-96 rounded-[2rem] bg-gradient-to-br ${featuredPost.imageGradient} relative overflow-hidden`}>
                   <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" 
                   />
                </div>
                <div className="space-y-6 lg:px-6">
                  <span className="text-[10px] font-black tracking-[0.2em] text-blue-600 uppercase">Featured_Report</span>
                  <h2 className="text-3xl lg:text-5xl font-black text-slate-900 group-hover:text-blue-600 transition-colors tracking-tighter leading-none">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg text-slate-500 font-medium leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                    <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase font-mono">
                      <span className="flex items-center gap-1"><Calendar size={12}/> {featuredPost.date}</span>
                      <span className="flex items-center gap-1"><Clock size={12}/> {featuredPost.readTime}</span>
                    </div>
                    <span className="text-blue-600 font-black text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                      Open Log <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* 4. MAIN CONTENT LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Post Feed */}
          <div className="lg:col-span-8">
            <motion.div 
              layout
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-8" : "flex flex-col gap-8"}
            >
              <AnimatePresence mode="popLayout">
                {filteredPosts.map(post => (
                  <motion.div
                    key={post.id}
                    layout
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, scale: 0.9 }}
                  >
                    <Link href={"/engineering/blog-detail"}>
                      <motion.div 
                        whileHover={{ y: -8 }}
                        className={`bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all group ${viewMode === "list" ? "md:flex items-center" : ""}`}
                      >
                        <div className={`${viewMode === "list" ? "w-full md:w-1/3 h-56 md:h-full" : "w-full h-48"} bg-gradient-to-br ${post.imageGradient} relative`} />
                        <div className="p-8 flex flex-col flex-1">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-1 rounded">{post.category}</span>
                            <span className="text-[10px] font-bold text-slate-400 uppercase font-mono">{post.readTime}</span>
                          </div>
                          <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight tracking-tight">
                            {post.title}
                          </h3>
                          <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6 line-clamp-2">
                            {post.excerpt}
                          </p>
                          <div className="mt-auto pt-4 border-t border-slate-50 flex justify-between items-center">
                            <span className="text-[10px] font-bold text-slate-300 uppercase">{post.date}</span>
                            <ArrowRight size={16} className="text-blue-600 group-hover:translate-x-2 transition-transform" />
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Right Column: Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-4 space-y-10"
          >
            <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm">
              <h3 className="text-xs font-black text-slate-900 mb-6 flex items-center gap-2 uppercase tracking-[0.2em]">
                <TrendingUp size={14} className="text-blue-600" /> Hot_Nodes
              </h3>
              <div className="space-y-6">
                {popularPosts.map((post, idx) => (
                  <motion.div whileHover={{ x: 5 }} key={post.id} className="flex gap-4 group cursor-pointer">
                    <span className="text-2xl font-black text-slate-100 group-hover:text-blue-100 transition-colors font-mono">0{idx + 1}</span>
                    <div>
                      <h4 className="font-bold text-slate-800 text-xs group-hover:text-blue-600 transition-colors leading-tight mb-1">
                        {post.title}
                      </h4>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{post.category}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden text-white">
              <motion.div 
                animate={{ opacity: [0.1, 0.2, 0.1] }} 
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-500 blur-[80px] rounded-full" 
              />
              <Terminal className="text-blue-400 w-8 h-8 mb-4 relative z-10" />
              <h3 className="text-xl font-black mb-2 relative z-10 uppercase tracking-tighter">Join the Core Node</h3>
              <p className="text-slate-400 text-sm font-medium leading-relaxed mb-6 relative z-10">
                Deep technical breakdowns and architectural patterns directly to your inbox.
              </p>
              <form className="relative z-10 space-y-3">
                <input 
                  type="email" 
                  placeholder="admin@network.com" 
                  className="w-full bg-slate-800 border-none rounded-xl px-4 py-3 text-xs text-white placeholder:text-slate-600 font-mono focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-600 text-white font-black uppercase tracking-widest text-[10px] rounded-xl py-4 shadow-lg shadow-blue-900/40"
                >
                  Subscribe_Sync
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}