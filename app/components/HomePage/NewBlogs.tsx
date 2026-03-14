'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  ArrowRight, 
  Clock, 
  Cpu, 
  Layers, 
  Rocket, 
  Cloud, 
  LineChart 
} from 'lucide-react';

const categories = [
  {
    title: "AI Engineering",
    desc: "Automation workflows and Generative AI apps.",
    icon: <Cpu size={20} />,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    title: "Software Architecture",
    desc: "Scalable backend systems and modern patterns.",
    icon: <Layers size={20} />,
    color: "text-purple-600",
    bg: "bg-purple-50"
  },
  {
    title: "Product Development",
    desc: "SaaS platforms and startup MVP insights.",
    icon: <Rocket size={20} />,
    color: "text-emerald-600",
    bg: "bg-emerald-50"
  }
];

const featuredPosts = [
  {
    category: "Technology Trends",
    title: "The Shift to AI-Native Development: Why 2026 is the Year of the Agent.",
    time: "12 min read",
    tag: "Trending"
  },
  {
    category: "Cloud & DevOps",
    title: "Zero-Touch CI/CD: How We Automate Deployment for Global Scale.",
    time: "8 min read",
    tag: "Engineering"
  }
];

const NewBlogs = () => {
  return (
    <section className="relative bg-white py-10 px-6 overflow-hidden">
      {/* Background Decor: Subtle Technical Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-10 gap-8">
          <div className="max-w-2xl space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200">
              <BookOpen className="text-blue-600" size={14} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 font-mono">
                Knowledge_Hub::Archive
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black font-header tracking-tighter text-slate-950 leading-[0.85]">
              Insights & <br />
              <span className="text-blue-600 italic font-medium">Engineering.</span>
            </h2>
            <p className="text-base italic text-slate-500 font-body leading-relaxed max-w-xl">
              Knowledge sharing is essential to building strong ecosystems. We publish deep-dives for founders and tech leaders.
            </p>
          </div>
          
          <button className="group flex items-center gap-3 px-8 py-4 bg-slate-950 text-white rounded-full font-bold transition-all hover:bg-blue-600 shadow-xl shadow-slate-200">
            View All Insights <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Category Sidebar */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-[10px] font-black font-mono text-slate-400 uppercase tracking-widest mb-6 px-4">
              # Browse by Domain
            </h4>
            {categories.map((cat, i) => (
              <div 
                key={i} 
                className="group p-6 rounded-[2rem] bg-slate-50 border border-transparent hover:border-blue-500/20 hover:bg-white hover:shadow-xl transition-all duration-500 cursor-pointer"
              >
                <div className="flex items-start gap-5">
                  <div className={`p-3 rounded-xl ${cat.bg} ${cat.color} group-hover:bg-blue-600 group-hover:text-white transition-all`}>
                    {cat.icon}
                  </div>
                  <div className="space-y-1">
                    <h5 className="font-bold text-slate-950 group-hover:text-blue-600 transition-colors">{cat.title}</h5>
                    <p className="text-xs text-slate-400 font-body leading-relaxed">{cat.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Featured Articles Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredPosts.map((post, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="relative p-10 rounded-[3rem] bg-white border border-slate-100 flex flex-col justify-between group overflow-hidden hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500"
              >
                {/* Visual Decoration */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-all" />

                <div className="space-y-6 relative z-10">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black font-mono text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                      {post.tag}
                    </span>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-slate-300">
                      <Clock size={12} /> {post.time}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">{post.category}</p>
                    <h3 className="text-lg font-black font-header text-slate-950 leading-tight group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-2 text-[10px] font-black font-mono text-slate-400 group-hover:text-blue-600 transition-colors uppercase tracking-widest">
                  Read Full Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}

            {/* Newsletter Mini-Card */}
            <div className="md:col-span-2 p-8 rounded-[2.5rem] bg-slate-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
               <div className="absolute inset-0 bg-blue-600/10 blur-3xl" />
               <div className="relative z-10">
                 <h4 className="text-xl font-bold font-header tracking-tight">Stay synchronized with our latest engineering breakthroughs.</h4>
                 <p className="text-xs text-slate-400 font-body">Join 2,000+ founders and tech leads.</p>
               </div>
               <div className="relative z-10 flex w-full md:w-auto gap-2">
                 <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-blue-500 w-full"
                 />
                 <button className="bg-blue-600 px-6 py-3 rounded-full font-bold text-sm hover:bg-blue-500 transition-all shrink-0">
                   Join
                 </button>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewBlogs;