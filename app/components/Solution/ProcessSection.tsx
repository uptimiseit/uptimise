// app/components/Solution/ProcessSection.tsx
'use client';

import React, { useState, useRef, MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { Layers, Activity, Cpu, Sparkles, Box } from 'lucide-react';

interface ProcessStep {
  title: string;
  desc: string;
  badgeLabel: string;
}

interface ProcessSectionProps {
  data: {
    smallHeading: string;
    heading: string;
    description: string;
    themeAccentColor?: string; // Optional fallback
    steps: ProcessStep[];
  };
}

// 🎨 Vibrant Neo-Cyber Color Matrix Presets assigned based on index sequence
const MULTI_THEMES = [
  {
    border: 'hover:border-blue-500/40',
    glow: 'from-blue-600/20 via-blue-500/5 to-transparent',
    text: 'text-blue-400',
    badge: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
    icon: <Activity size={16} className="text-blue-400" />,
    span: 'md:col-span-1 lg:col-span-1'
  },
  {
    border: 'hover:border-emerald-500/40',
    glow: 'from-emerald-600/20 via-emerald-500/5 to-transparent',
    text: 'text-emerald-400',
    badge: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
    icon: <Cpu size={16} className="text-emerald-400" />,
    span: 'md:col-span-2 lg:col-span-2' // Span variations to break grid monotony
  },
  {
    border: 'hover:border-purple-500/40',
    glow: 'from-purple-600/20 via-purple-500/5 to-transparent',
    text: 'text-purple-400',
    badge: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
    icon: <Sparkles size={16} className="text-purple-400" />,
    span: 'md:col-span-2 lg:col-span-2'
  },
  {
    border: 'hover:border-pink-500/40',
    glow: 'from-pink-600/20 via-pink-500/5 to-transparent',
    text: 'text-pink-400',
    badge: 'bg-pink-500/10 border-pink-500/20 text-pink-400',
    icon: <Box size={16} className="text-pink-400" />,
    span: 'md:col-span-1 lg:col-span-1'
  }
];

export default function ProcessSection({ data }: ProcessSectionProps) {
  if (!data || !data.steps || data.steps.length === 0) return null;

  const stepsList = data.steps;

  return (
    <section className="relative w-full py-32 px-4 md:px-8 bg-slate-900 overflow-hidden isolation-isolate text-white">
      
      {/* Structural Digital Grid Canvas Backing */}
      <div className="absolute inset-0 pointer-events-none -z-20 opacity-[0.25]">
        <div 
          className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px]" 
          style={{ 
            maskImage: 'radial-gradient(circle at center, white 50%, transparent 95%)', 
            WebkitMaskImage: 'radial-gradient(circle at center, white 50%, transparent 95%)' 
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* ==========================================
            ASYSMMETRIC COMPACT HEADERS HEADER ROW
           ========================================== */}
        <div className="max-w-3xl space-y-4 text-left">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 shadow-md">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500" />
            </span>
            <span className="text-[10px] font-mono font-black tracking-widest uppercase text-slate-400">
              {data.smallHeading || "WORKFLOW_TIMELINE"}
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-[1.12]">
            {data.heading || "Our Step-by-Step Delivery Track"}
          </h2>
          
          {data.description && (
            <p className="text-sm md:text-base text-slate-400 max-w-xl font-medium leading-relaxed">
              {data.description}
            </p>
          )}
        </div>

        {/* ==========================================
            VIBRANT NEON GLOW BENTO Hub MESH GRID
           ========================================== */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {stepsList.map((step, index) => {
            const currentTheme = MULTI_THEMES[index % MULTI_THEMES.length];
            return (
              <BentoSpotlightCard 
                key={`bento-process-node-${index}`} 
                step={step} 
                index={index} 
                theme={currentTheme} 
              />
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

// ==========================================
// CHILD COMPONENT: HIGH-CONTRAST NEON CARD
// ==========================================
function BentoSpotlightCard({ step, index, theme }: { step: ProcessStep; index: number; theme: typeof MULTI_THEMES[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    setCoords({ x: e.clientX - left, y: e.clientY - top });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      variants={{
        hidden: { opacity: 0, y: 25 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`w-full overflow-hidden rounded-[2.5rem] border border-slate-900 bg-slate-800 backdrop-blur-md p-8 min-h-[280px] flex flex-col justify-between shadow-2xl transition-all duration-300 ${theme.border} ${theme.span} group`}
    >
      
      {/* Fixed Ambient Backing Soft Glow Aura (Top Right corner placement) */}
      <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${theme.glow} blur-2xl rounded-full pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* Dynamic Cursor Spotlight Radial Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(280px circle at ${coords.x}px ${coords.y}px, rgba(255,255,255,0.02), transparent 80%)`
        }}
      />

      <div className="space-y-6 relative z-10">
        
        {/* Card Metadata Top Deck */}
        <div className="flex items-center justify-between">
          <span className={`text-[10px] font-mono font-black uppercase tracking-wider px-2.5 py-1 rounded-lg border ${theme.badge}`}>
            {step.badgeLabel || `Phase 0${index + 1}`}
          </span>
          
          <div className="text-xl font-mono font-black text-slate-800 tracking-tighter">
            //0{index + 1}
          </div>
        </div>

        {/* Copy Text Blocks */}
        <div className="space-y-2 text-left">
          <h3 className={`text-xl font-black tracking-tight text-white transition-colors duration-300 group-hover:${theme.text}`}>
            {step.title}
          </h3>
          <p className="text-xs md:text-sm font-medium leading-relaxed text-slate-200 group-hover:text-slate-300 transition-colors">
            {step.desc}
          </p>
        </div>

      </div>

      {/* Dynamic Footer Identity Strip */}
      <div className="pt-6 mt-4 border-t border-slate-900/60 flex items-center justify-between text-[9px] font-mono tracking-widest text-slate-500 font-black uppercase relative z-10">
        <div className="flex items-center gap-1.5">
          {theme.icon} <span className="group-hover:text-slate-400 transition-colors">Orchestration_Active</span>
        </div>
        
        <span className={`opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 font-bold ${theme.text}`}>
          EXECUTE →
        </span>
      </div>

    </motion.div>
  );
}