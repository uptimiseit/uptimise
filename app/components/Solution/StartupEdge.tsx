"use client";

import { motion } from "framer-motion";
import { HiOutlineRocketLaunch, HiOutlineCpuChip } from "react-icons/hi2";

export default function StartupEdge({ data }: { data: any }) {
  return (
    <section className="py-32 px-6 max-w-[1440px] mx-auto overflow-hidden">
      {/* Main Branded Container */}
      <div className="relative bg-[#020617] rounded-[4rem] p-12 md:p-24 overflow-hidden group">
        
        {/* --- DECORATIVE BACKGROUND --- */}
        {/* Animated Gradient Glow */}
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none group-hover:bg-blue-500/30 transition-all duration-700" />
        
        {/* Technical Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

        <div className="relative z-10 flex flex-col lg:flex-row gap-20 items-center">
          
          {/* --- LEFT: EDITORIAL CONTENT --- */}
          <div className="flex-1 space-y-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                <HiOutlineRocketLaunch size={20} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-400 font-mono">
                The_Startup_Advantage
              </span>
            </motion.div>

            <h2 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] text-white">
              {data.heading?.split(' ').map((word: string, i: number) => (
                <span key={i} className={i === 2 ? "text-blue-600 italic font-serif lowercase" : ""}>
                  {word}{" "}
                </span>
              )) || "The Startup Edge"}
            </h2>

            <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
              {data.description || "We don't just build code; we engineer market dominance through AI-native velocity and co-founder level dedication."}
            </p>

            {/* Technical Signature */}
            <div className="flex items-center gap-4 pt-6 border-t border-white/5 w-fit">
               <div className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">
                 // Performance_Metrics: Optimized <br/>
                 // Velocity_Factor: 2.4x_Baseline
               </div>
            </div>
          </div>

          {/* --- RIGHT: FEATURE GRID --- */}
          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.features.map((feature: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-8 bg-white/[0.03] backdrop-blur-xl rounded-3xl border border-white/10 hover:border-blue-500/50 hover:bg-white/[0.06] transition-all duration-500 flex flex-col justify-between min-h-[180px]"
              >
                <div className="space-y-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-500 border border-blue-500/20">
                    <HiOutlineCpuChip size={16} />
                  </div>
                  <h4 className="font-black uppercase text-sm tracking-tight text-white leading-tight">
                    {feature.title}
                  </h4>
                </div>
                
                <div className="space-y-3">
                  <div className="h-[1px] w-8 bg-blue-600" />
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold leading-relaxed group-hover:text-blue-300 transition-colors">
                    {feature.desc || "// System_Integration_Verified"}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Floating Background Text */}
        <div className="absolute -bottom-10 left-10 text-[12rem] font-black text-white/[0.02] select-none pointer-events-none uppercase tracking-tighter">
          UPTIMISE
        </div>
      </div>
    </section>
  );
}