// components/ApproachSection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface ApproachItem {
  title: string;
  description: string;
}

interface ApproachSectionProps {
  data: {
    smallHeading: string;
    heading: string;
    description: string;
    features: string[];
    approaches: ApproachItem[];
  };
}

const CARD_THEMES = [
  { bg: 'bg-orange-50/70 border-orange-100', text: 'text-orange-600', num: 'text-orange-400' },
  { bg: 'bg-blue-50/70 border-blue-100', text: 'text-blue-600', num: 'text-blue-400' },
  { bg: 'bg-slate-950 text-white border-transparent', text: 'text-white', num: 'text-slate-500' },
  { bg: 'bg-pink-50/70 border-pink-100', text: 'text-pink-600', num: 'text-pink-400' },
  { bg: 'bg-emerald-50/70 border-emerald-100', text: 'text-emerald-600', num: 'text-emerald-400' },
];

export default function ApproachSection({ data }: ApproachSectionProps) {
  if (!data) return null;

  const approachItems = data.approaches || [];
  if (approachItems.length === 0) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } 
    }
  };

  return (
    <section className="relative w-full py-20 md:py-28 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden bg-white">
      
      {/* Light Ambient Backdrop */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-slate-100/40 blur-[100px] rounded-full -z-10 pointer-events-none" />

      {/* FIXED: Shifted parent layout layer from single multi-column container to clear grid rows */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* ==========================================
            LEFT COLUMN: MARKETING PARAMETERS & COPY
           ========================================== */}
        <div className="w-full lg:col-span-5 space-y-6">
     {/* Elevated Engineering-Grade Context Badge */}
<div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-linear-to-r from-orange-500/5 to-amber-500/5 border border-orange-500/10 backdrop-blur-xs shadow-xs">
  {/* Live Status Core Glow Indicator */}
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
  </span>
  
  {/* Monospace System Typography Token */}
  <span className="text-[10px] font-black tracking-widest uppercase text-orange-600 font-mono">
    {data.smallHeading || "OUR_APPROACH"}
  </span>
</div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.15]">
            {data.heading || "The Lean, AI-Native MVP Methodology"}
          </h2>
          
          <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">
            {data.description || "Provide an optional descriptive overview introducing your custom systems."}
          </p>

          {/* Checklist Layout Vector Stack */}
          {data.features && data.features.length > 0 && (
            <div className="pt-6 space-y-4 border-t border-slate-100">
              {data.features.map((feature, idx) => (
                <div key={`feature-row-${idx}`} className="flex items-start gap-3 group">
                  <CheckCircle2 size={18} className="text-orange-500 shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base font-bold text-slate-700">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ==========================================
            RIGHT COLUMN: STAGGERED BENTO CARD GRID
           ========================================== */}
        <div className="w-full lg:col-span-7 pt-4 lg:pt-0">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start"
          >
            {approachItems.map((item, index) => {
              const theme = CARD_THEMES[index % CARD_THEMES.length];
              const isEven = index % 2 === 1;

              return (
                <motion.div
                  key={`approach-card-grid-${index}`}
                  variants={itemVariants}
                  whileHover={{ y: isEven ? 26 : -6, scale: 1.01, transition: { duration: 0.2 } }}
                  // FIXED: Reset layout constraints by substituting responsive padding classes
                  className={`w-full rounded-[2rem] border p-6 md:p-8 min-h-[160px] flex flex-col justify-between shadow-xs transition-all duration-300 ${theme.bg} ${
                    isEven ? 'sm:translate-y-8' : ''
                  }`}
                >
                  <div className="space-y-4">
                    <div className={`text-sm md:text-base font-mono font-black ${theme.num}`}>
                      0{index + 1}.
                    </div>

                    <div className="space-y-1.5">
                      <h3 className={`text-lg md:text-xl font-black tracking-tight ${theme.text}`}>
                        {item.title}
                      </h3>
                      <p className={`text-xs md:text-sm font-medium leading-relaxed ${
                        theme.text === 'text-white' ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}