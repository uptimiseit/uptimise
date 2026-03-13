'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Zap, ShieldCheck, Cpu } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="relative bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* The Main Action Card */}
        <div className="relative rounded-[4rem] bg-slate-950 overflow-hidden p-12 md:p-24 text-center group">
          
          {/* Background Philosophy Watermark (The "System" Layer) */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none flex items-center justify-center">
            <span className="text-[20vw] font-black font-header tracking-tighter leading-none">
              SYSTEM
            </span>
          </div>

          {/* Interactive Orbs */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full group-hover:bg-blue-600/30 transition-all duration-700" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full group-hover:bg-purple-600/20 transition-all duration-700" />

          {/* Content Stack */}
          <div className="relative z-10 max-w-4xl mx-auto space-y-10">
            
            {/* The "Vision" Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <Zap size={14} className="text-blue-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-100 font-mono">
                Now Entering Execution Phase
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-black font-header tracking-tighter text-white leading-[0.85]">
              Build Your Next <br />
              <span className="text-blue-500 italic">Digital Product</span> <br />
              With Uptimise IT.
            </h2>

            <p className="text-xl text-slate-400 font-body max-w-2xl mx-auto leading-relaxed">
              Stop settling for traditional agency cycles. Deploy your vision through 
              an AI-native ecosystem engineered for speed, scale, and precision.
            </p>

            {/* The "Execution" Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="h-16 px-12 bg-blue-600 text-white rounded-full font-black text-xl flex items-center gap-4 shadow-2xl shadow-blue-500/40 hover:bg-blue-500 transition-all"
              >
                <Calendar size={24} />
                Schedule a Strategy Call
                <ArrowRight size={24} />
              </motion.button>
            </div>

            {/* Credibility Footer */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-white/5">
              <div className="flex items-center justify-center gap-3 text-slate-500 font-mono text-[10px] font-bold tracking-widest uppercase">
                <ShieldCheck size={16} className="text-blue-500" />
                IP Ownership Guaranteed
              </div>
              <div className="flex items-center justify-center gap-3 text-slate-500 font-mono text-[10px] font-bold tracking-widest uppercase">
                <Cpu size={16} className="text-blue-500" />
                AI-Native Framework
              </div>
              <div className="flex items-center justify-center gap-3 text-slate-500 font-mono text-[10px] font-bold tracking-widest uppercase">
                <ArrowRight size={16} className="text-blue-500" />
                Zero-Debt Delivery
              </div>
            </div>
          </div>
        </div>

        {/* Global Footer Meta (Optional Office Location) */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center px-12 opacity-40">
           <p className="text-[10px] font-black font-mono tracking-widest uppercase text-slate-900">
             © 2026 Uptimise IT // Headquarters: Jaipur, India
           </p>
           <div className="flex gap-8 mt-4 md:mt-0">
              <span className="text-[10px] font-black font-mono tracking-widest uppercase cursor-pointer hover:text-blue-600">Twitter_X</span>
              <span className="text-[10px] font-black font-mono tracking-widest uppercase cursor-pointer hover:text-blue-600">LinkedIn</span>
              <span className="text-[10px] font-black font-mono tracking-widest uppercase cursor-pointer hover:text-blue-600">GitHub</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;