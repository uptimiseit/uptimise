'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, ArrowRight, Sparkles, 
  Binary, Workflow, Rocket, 
  TrendingUp, Timer
} from 'lucide-react';

const articles = [
  {
    category: "AI Engineering",
    title: "Orchestrating Agentic Workflows for Enterprise Scale",
    time: "8 min read",
    icon: <Sparkles size={18} />,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    category: "Software Architecture",
    title: "From Monolith to Micro-Intelligence: The 2026 Shift",
    time: "12 min read",
    icon: <Binary size={18} />,
    color: "text-purple-600",
    bg: "bg-purple-50"
  },
  {
    category: "Startup Building",
    title: "The AI-Native MVP: Building for Velocity without Debt",
    time: "6 min read",
    icon: <Rocket size={18} />,
    color: "text-emerald-600",
    bg: "bg-emerald-50"
  },
  {
    category: "Automation",
    title: "Zero-Touch DevOps: Automating the Deployment Lifecycle",
    time: "10 min read",
    icon: <Workflow size={18} />,
    color: "text-orange-600",
    bg: "bg-orange-50"
  },
  {
    category: "Technology Trends",
    title: "Predictive Engineering: How AI Anticipates System Failures",
    time: "7 min read",
    icon: <TrendingUp size={18} />,
    color: "text-pink-600",
    bg: "bg-pink-50"
  }
];

const KnowledgeHub = () => {
  return (
    <section className="relative bg-white py-32 px-6 overflow-hidden">
      {/* Background Decor: The Digital Blueprint Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950 border border-slate-800">
              <BookOpen className="text-blue-400" size={14} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white font-mono">
                Knowledge_Base::v1.0
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black font-header tracking-tighter text-slate-950 leading-[0.85]">
              Intelligence <br />
              <span className="text-blue-600 italic">Unpacked.</span>
            </h2>
          </div>
          <button className="group flex items-center gap-3 px-8 py-4 bg-white border border-slate-200 rounded-full font-bold text-slate-950 hover:bg-slate-50 transition-all">
            Browse All Articles
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* Main Featured Article */}
          <motion.div
            whileHover={{ y: -5 }}
            className="lg:col-span-2 p-10 rounded-[3rem] bg-slate-950 text-white flex flex-col justify-between group cursor-pointer relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-12 opacity-10">
               <Sparkles size={200} />
            </div>
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 rounded-full bg-blue-600 text-[10px] font-black tracking-widest uppercase">
                  Featured_Insight
                </span>
                <span className="flex items-center gap-2 text-[10px] font-mono text-slate-400">
                  <Timer size={12} /> 15 MIN READ
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl font-black font-header tracking-tight leading-[0.9] group-hover:text-blue-400 transition-colors">
                The Future of AI-Native <br /> Software Factories.
              </h3>
            </div>

            <div className="mt-12 flex justify-between items-center relative z-10">
              <p className="text-slate-400 font-body text-sm max-w-sm">
                Deep dive into how we’ve optimized the product lifecycle using autonomous agent orchestration.
              </p>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-slate-950 transition-all">
                <ArrowRight />
              </div>
            </div>
          </motion.div>

          {/* Standard Article Cards */}
          {articles.map((post, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 flex flex-col justify-between group hover:bg-white hover:shadow-2xl hover:shadow-slate-100 transition-all duration-500"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div className={`p-3 rounded-xl ${post.bg} ${post.color}`}>
                    {post.icon}
                  </div>
                  <span className="text-[10px] font-mono font-black text-slate-300 uppercase tracking-widest">
                    {post.time}
                  </span>
                </div>
                
                <div className="space-y-3">
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${post.color}`}>
                    {post.category}
                  </span>
                  <h4 className="text-2xl font-black font-header text-slate-950 tracking-tight leading-tight">
                    {post.title}
                  </h4>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
                <div className="text-slate-300 group-hover:text-blue-600 transition-colors">
                  <ArrowRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default KnowledgeHub;