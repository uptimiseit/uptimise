// components/CapabilitiesSection.tsx
'use client';

import React, { useState, useRef, MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Terminal } from 'lucide-react';

interface BuildCapabilityCard {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

interface CapabilitiesSectionProps {
  data: {
    smallHeading: string;
    heading: string;
    description: string;
    items: BuildCapabilityCard[];
  };
}

export default function CapabilitiesSection({ data }: CapabilitiesSectionProps) {
  if (!data || !data.items || data.items.length === 0) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  return (
    <section className="relative w-full py-32 px-4 md:px-8 bg-slate-900 overflow-hidden isolation-isolate text-white">
      
      {/* Animated Micro-Dot Matrix Backdrop */}
      <div className="absolute inset-0 pointer-events-none -z-20 opacity-[0.25]">
        <div 
          className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px]" 
          style={{ 
            maskImage: 'radial-gradient(circle at center, white 30%, transparent 90%)', 
            WebkitMaskImage: 'radial-gradient(circle at center, white 30%, transparent 90%)' 
          }}
        />
      </div>

      {/* Cyber Glow Overlays */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-600/5 blur-[130px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* LEFT COLUMN: STICKY BRAND PANEL */}
        <div className="w-full lg:col-span-4 lg:sticky lg:top-36 space-y-6">
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            <span className="text-[10px] font-black tracking-widest uppercase text-cyan-400 font-mono">
              {data.smallHeading || "PRODUCTION_CAPABILITIES"}
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.12]">
            {data.heading || "What Platform We Build"}
          </h2>
          
          <p className="text-sm md:text-base text-slate-400 leading-relaxed font-medium">
            {data.description || "We transform complex engineering matrices into scalable digital infrastructure products."}
          </p>

          <div className="hidden lg:flex items-center gap-3 pt-6 border-t border-slate-800 text-xs font-mono tracking-widest text-slate-500 uppercase font-black">
            <Terminal size={14} className="text-cyan-500 animate-pulse" /> System_Factory: Active
          </div>
        </div>

        {/* RIGHT COLUMN: REACTIVE CARDS MATRIX */}
        <div className="w-full lg:col-span-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {data.items.map((item, index) => (
              <SpotlightCard key={`cap-card-${index}`} item={item} index={index} />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

function SpotlightCard({ item, index }: { item: BuildCapabilityCard; index: number }) {
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
      variants={{
        hidden: { opacity: 0, y: 35 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }
      }}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group relative w-full overflow-hidden rounded-[2.5rem] border border-slate-600 hover:border-cyan-500/30 bg-slate-800 backdrop-blur-md p-6 flex flex-col justify-between min-h-[260px] transition-all duration-300"
    >
      <div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, rgba(34,211,238,0.08), transparent 80%)`
        }}
      />

      <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="w-11 h-11 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-xs font-mono font-black text-slate-500 group-hover:text-cyan-400 group-hover:border-cyan-500/20 transition-all duration-300">
            0{index + 1}
          </div>
          <div className="w-8 h-8 rounded-full bg-slate-900/60 border border-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300">
            <ArrowUpRight size={14} className="text-cyan-400" />
          </div>
        </div>

        <div className="space-y-1">
          <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors duration-300">
            {item.title}
          </h3>
          <p className="text-xs md:text-sm leading-relaxed text-slate-400 font-medium">
            {item.description}
          </p>
        </div>
      </div>

      {item.tags && item.tags.length > 0 && (
        <div className="pt-5 mt-4 border-t border-slate-900 flex flex-wrap gap-2">
          {item.tags.map((tag, idx) => (
            <span 
              key={`tech-tag-${idx}`}
              className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg bg-slate-900/60 border border-slate-800/80 text-slate-400 group-hover:border-cyan-500/10 group-hover:text-cyan-300 transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}