"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection({ data, slug }: { data: any; slug: string }) {
  // Use theme color from database, fallback to your brand blue
  const themeColor = data.themeColor || "#2563eb"; 

  return (
    <section className="relative pt-32 pb-20 px-6 lg:px-12 max-w-[1440px] mx-auto overflow-hidden bg-white">
      {/* Container forced to center */}
      <div className="flex flex-col items-center text-center justify-center max-w-5xl mx-auto">
        
        {/* --- BADGE --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {data.badge && (
            <span 
              style={{ 
                color: themeColor, 
                borderColor: `${themeColor}33`, 
                backgroundColor: `${themeColor}08` // Very light tint of theme color
              }}
              className="px-6 py-2 rounded-full text-[11px] font-black uppercase tracking-[0.2em] border inline-flex items-center gap-2 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: themeColor }} />
              {data.badge}
            </span>
          )}
        </motion.div>

        {/* --- HEADING --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <h1 
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-900 leading-[0.85] mb-7"
            style={{ fontFamily: data.fontFamily || 'inherit' }}
          >
            {data.heading} <br />
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{ color: themeColor }}
              className={slug === 'mvp-development' ? "italic" : ""} // Only italic for MVP page
            >
              {data.accent}
            </motion.span>
          </h1>

          {/* --- DESCRIPTION --- */}
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl leading-relaxed mx-auto">
            {data.description}
          </p>

          {/* --- ACTION BUTTONS --- */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-10">
            <button 
              style={{ 
                backgroundColor: themeColor,
                boxShadow: `0 20px 40px -10px ${themeColor}44` 
              }}
              className="w-full sm:w-auto px-10 py-5 text-white rounded-2xl font-black uppercase text-[11px] tracking-widest hover:scale-105 transition-all active:scale-95"
            >
              Initialize_Project
            </button>
            
            <Link 
              href="/contact"
              className="w-full sm:w-auto px-10 py-5 bg-white border border-slate-200 text-slate-900 rounded-2xl font-black uppercase text-[11px] tracking-widest hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
            >
              Consult_Architect ↗
            </Link>
          </div>
        </motion.div>
      </div>

      {/* --- BACKGROUND DECORATION --- */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] blur-[120px] opacity-[0.07] pointer-events-none -z-10"
        style={{ backgroundColor: themeColor }}
      />
    </section>
  );
}