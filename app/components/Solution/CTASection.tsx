"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiOutlineArrowRight, HiOutlineCommandLine } from "react-icons/hi2";

export default function CTASection({ data }: { data: any }) {
  return (
    <section className="relative py-40 px-6 bg-white overflow-hidden border-t border-slate-50">
      
      {/* --- BACKGROUND ORCHESTRATION --- */}
      {/* Subtle Technical Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      
      {/* Dynamic Aura Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        
        {/* Top Status Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <div className="flex items-center gap-2 px-4 py-1.5 bg-slate-50 border border-slate-100 rounded-full">
            <HiOutlineCommandLine className="text-blue-600 animate-pulse" size={14} />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
              System_Ready_For_Deployment
            </span>
          </div>
        </motion.div>

        {/* Cinematic Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-6xl md:text-[10rem] font-black uppercase tracking-tighter text-slate-900 leading-[0.8] mb-10">
            {data.heading} <br />
            <span className="text-blue-600 italic font-serif lowercase tracking-normal">
              {data.accent}
            </span>
          </h2>
        </motion.div>

        {/* Professional Description */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-2xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed mb-16"
        >
          {data.description || "// Initiate the architecture sequence. Our engineering squad is ready to scale your vision into a market-dominant reality."}
        </motion.p>

        {/* High-Contrast Action Terminal */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center gap-8"
        >
          <Link 
            href="/contact" 
            className="group relative px-16 py-8 bg-slate-950 text-white rounded-[2rem] font-black uppercase text-xs tracking-[0.4em] overflow-hidden transition-all hover:bg-blue-600 hover:scale-105 active:scale-95 shadow-2xl shadow-blue-200"
          >
            {/* Animated Inner Shine */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            
            <span className="relative z-10 flex items-center gap-4">
              Initialize_Project_Sequence <HiOutlineArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </span>
          </Link>

          {/* Secondary Trust String */}
          <div className="flex items-center gap-8 text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">
            <span>Average_Response: &lt; 4hrs</span>
            <div className="w-1 h-1 bg-slate-200 rounded-full" />
            <span>Slots_Available: 02</span>
          </div>
        </motion.div>

      </div>

      {/* Decorative Side Strings */}
      <div className="absolute bottom-10 left-10 hidden lg:block">
        <span className="text-[10px] font-mono text-slate-200 uppercase vertical-text tracking-[1em] opacity-50">
          ARCHITECTURE_STABILITY_PROTOCOL
        </span>
      </div>
    </section>
  );
}