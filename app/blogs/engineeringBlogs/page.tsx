'use client';

import React, { useState } from 'react';
import { 
  Terminal, Clock, ArrowRight, Search, 
  Code2, Cpu, Zap, Share2, Filter 
} from 'lucide-react';
import { motion } from 'framer-motion';

const EngineeringPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ["All", "AI Engineering", "Architecture", "DevOps", "Next.js", "Security"];

  return (
    <main className="min-h-screen bg-white pt-32 pb-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* --- SECTION 1: Page Header --- */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-2 text-blue-600 font-mono text-[10px] font-black uppercase tracking-widest">
              <Terminal size={14} /> // Terminal_Archive::v1.0
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-950 leading-[0.85]">
              Engineering <br /><span className="text-blue-600 italic">Archive.</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-xl">
              Deep-dives into modern code, agentic orchestration, and scalable system topologies.
            </p>
          </div>

          {/* Dynamic Search Component */}
          <div className="w-full lg:w-80 group">
            <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={18} />
                <input 
                    type="text" 
                    placeholder="Search documentation..."
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 text-sm font-bold focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                />
            </div>
          </div>
        </div>

        {/* --- SECTION 2: Category Filter Bar --- */}
        <div className="flex items-center gap-4 overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex items-center gap-2 pr-6 border-r border-slate-100 mr-2 shrink-0">
                <Filter size={14} className="text-slate-400" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 font-mono">Filter_By:</span>
            </div>
            {categories.map((cat) => (
                <button 
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-6 py-2 rounded-full text-[11px] font-black uppercase tracking-widest transition-all shrink-0 ${
                        activeCategory === cat 
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' 
                        : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>

        {/* --- SECTION 3: Featured Post (Kept from your original) --- */}
        <motion.div 
            whileHover={{ y: -8 }}
            className="group relative p-12 rounded-[3.5rem] bg-slate-950 text-white overflow-hidden cursor-pointer shadow-2xl shadow-blue-900/10"
        >
           <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform duration-700">
              <Terminal size={200} />
           </div>
           <div className="relative z-10 space-y-6 max-w-2xl">
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 rounded-full bg-blue-600 text-[10px] font-black tracking-widest uppercase">Latest_Commit</span>
                <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-widest">March 2026</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.0]">Architecting Autonomous Agent Clusters with Next.js 15</h2>
              <p className="text-slate-400 text-lg font-medium leading-relaxed">How we reduced latency by 40% using edge-side agentic reasoning and distributed state management.</p>
              <button className="flex items-center gap-3 text-sm font-bold text-blue-400 group-hover:text-white transition-all">
                Read Documentation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
           </div>
        </motion.div>

        {/* --- SECTION 4: Knowledge Matrix (Popular Topics) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
                { label: "AI Agents", count: 12, icon: <Cpu /> },
                { label: "DevOps", count: 8, icon: <Zap /> },
                { label: "Cloud Arch", count: 15, icon: <Code2 /> },
                { label: "Security", count: 6, icon: <Share2 /> }
            ].map((topic, i) => (
                <div key={i} className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-xl transition-all cursor-pointer">
                    <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-white rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                            {topic.icon}
                        </div>
                        <span className="text-xs font-black font-mono text-slate-300">{topic.count} Posts</span>
                    </div>
                    <h4 className="text-xl font-black text-slate-950 tracking-tight">{topic.label}</h4>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2 group-hover:text-blue-600 transition-colors">Explore Category</p>
                </div>
            ))}
        </div>

        {/* --- SECTION 5: Articles Grid --- */}
        <div className="space-y-12">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] font-mono">// All_Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {/* Place your map() function here for the main grid */}
            </div>
            
            {/* Pagination / Load More */}
            <div className="flex justify-center pt-12">
                <button className="px-12 py-5 bg-white border border-slate-200 text-slate-950 rounded-full font-black text-xs uppercase tracking-widest hover:bg-slate-50 transition-all active:scale-95">
                    Load More Entries
                </button>
            </div>
        </div>

        {/* --- SECTION 6: The Newsletter Factory --- */}
        <div className="bg-blue-600 rounded-[4rem] p-12 md:p-24 text-white text-center space-y-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff10_1px,transparent_1px)] [background-size:24px_24px]" />
            <div className="relative z-10 space-y-4">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-200 font-mono italic">// Stay_Synchronized</span>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
                    Receive technical <br /> breakthroughs weekly.
                </h2>
            </div>
            <div className="relative z-10 flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
                <input 
                    type="email" 
                    placeholder="architect@company.com" 
                    className="flex-1 bg-white/10 border border-white/20 rounded-full px-8 py-4 text-sm font-bold placeholder:text-blue-200 focus:outline-none focus:bg-white/20 transition-all"
                />
                <button className="px-10 py-4 bg-white text-blue-600 rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl shadow-blue-900/20">
                    Join Dispatch
                </button>
            </div>
            <p className="relative z-10 text-[10px] font-bold text-blue-200/60 uppercase tracking-widest font-mono">
                No fluff. Just engineering. Unsubscribe anytime.
            </p>
        </div>

      </div>
    </main>
  );
};

export default EngineeringPage;