'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap,  } from 'lucide-react';

 export const PhilosophyHero = () => {
  return (
    <section className="relative bg-slate-950 py-32 px-6 overflow-hidden">
      {/* Background: The 100x Grid */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: `radial-gradient(#3b82f6 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />
      
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8"
        >
          <Zap size={14} className="text-blue-400" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 font-mono">
            Engineering Manifesto // 2026
          </span>
        </motion.div>

        <h1 className="text-6xl md:text-9xl font-black font-header tracking-tighter text-white leading-[0.85] mb-12">
          The <span className="text-blue-500">100×</span> <br /> 
          Engineer.
        </h1>

        <p className="text-xl md:text-2xl text-slate-400 font-body max-w-3xl mx-auto leading-relaxed">
          The future of software development isn't about larger teams. <br />
          It's about **AI-Augmented Engineering.**
        </p>

        {/* Stats Multiplier Bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-12">
           {[
             { label: "Velocity", value: "100×" },
             { label: "Team Size", value: "Elite" },
             { label: "Manual Debt", value: "Zero" },
             { label: "Focus", value: "Product" }
           ].map((stat, i) => (
             <div key={i} className="text-center">
               <div className="text-4xl font-black text-white font-header mb-1">{stat.value}</div>
               <div className="text-[10px] font-mono font-bold text-blue-500 uppercase tracking-widest">{stat.label}</div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};  