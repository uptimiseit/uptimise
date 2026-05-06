"use client";

import { motion } from "framer-motion";
import { HeroVisuals } from "./HeroVisuals";
// import { HeroVisuals } from "./HeroVisuals";

export default function HeroSection({ data, slug }: { data: any; slug: string }) {
  // Use custom colors from data, or fallback to your brand blue
  const themeColor = data.themeColor || "#2563eb"; 
  const secondaryColor = data.secondaryColor || "#60a5fa";

  return (
    <section className="relative pt-32 pb-20 px-6 lg:px-12 max-w-[1440px] mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* --- LEFT CONTENT --- */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 relative z-10"
        >
          {data.badge && (
            <span 
              style={{ color: themeColor, borderColor: `${themeColor}33`, backgroundColor: `${themeColor}10` }}
              className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border"
            >
              {data.badge}
            </span>
          )}

          <h1 
            className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-slate-900 leading-[0.85]"
            style={{ fontFamily: data.fontFamily || 'inherit' }}
          >
            {data.heading} <br />
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{ color: themeColor }}
              className="italic"
            >
              {data.accent}
            </motion.span>
          </h1>

          <p className="text-lg text-slate-500 font-medium max-w-xl leading-relaxed">
            {data.description}
          </p>

          <div className="flex gap-4 pt-4">
            <button 
              style={{ backgroundColor: themeColor }}
              className="px-8 py-4 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest hover:scale-105 transition-transform shadow-2xl shadow-blue-200"
            >
              Initialize_Project
            </button>
          </div>
        </motion.div>

        {/* --- RIGHT ANIMATION SECTION --- */}
        <div className="relative h-[400px] md:h-[600px] flex items-center justify-center">
           {/* We pass the slug to determine WHICH animation to show */}
           <HeroVisuals slug={slug} color={themeColor} secondary={secondaryColor} />
        </div>

      </div>
    </section>
  );
}