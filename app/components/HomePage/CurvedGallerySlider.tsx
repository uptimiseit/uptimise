
"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Loader2 } from 'lucide-react';

interface ActiveAsset {
  src: string;
  alt: string;
}

export default function CurvedGallerySlider() {
  const [activeAssets, setActiveAssets] = useState<ActiveAsset[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // --- 🛰️ SYNC PIPELINE WITH USER-FACING API ROUTE MATRIX ---
  useEffect(() => {
    const fetchGalleryAssets = async () => {
      try {
        setIsLoading(true);
        // Hits the dedicated public read-optimized endpoint on your admin workspace
        const response = await fetch('https://admin.uptimiseit.com/api/gallery-front');
        const data = await response.json();
        
        if (data.success && Array.isArray(data.data)) {
          setActiveAssets(data.data);
        }
      } catch (err) {
        console.error("Failed downloading asset cluster pipeline:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGalleryAssets();
  }, []);

  // --- SAFE LOADING FALLBACK FOR INTERACTIVE RENDERING ---
  if (isLoading) {
    return (
      <section className="relative bg-[#0A0D14] py-32 px-6 flex flex-col items-center justify-center min-h-[600px]">
        <div className="flex flex-col items-center justify-center space-y-3 font-mono text-xs font-bold text-slate-500 uppercase tracking-widest">
          <Loader2 size={24} className="animate-spin text-[#4F8CFF]" />
          <span>Syncing workspace graphics database maps...</span>
        </div>
      </section>
    );
  }

  // Safely avoid rendering layout artifacts if the dataset returns blank
  if (activeAssets.length === 0) return null;

  // Clone array fields to sustain a smooth, infinite marquee workflow calculation layer
  const duplicatedItems = [...activeAssets, ...activeAssets, ...activeAssets];

  return (
    <section className="relative bg-[#0A0D14] py-24 px-6 overflow-hidden flex flex-col items-center justify-between min-h-[750px]">
      
      {/* 🌌 High-Tech Deep Blue Gradient Meshes */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#4F8CFF]/10 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-[#7BDFF2]/5 to-transparent blur-[120px] pointer-events-none" />
      
      {/* Background Decor: Fine-grain grid structure */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-60 pointer-events-none" /> 

      {/* --- Part 1: Central Core Content Block --- */}
      <div className="max-w-4xl mx-auto text-center space-y-6 relative z-20 mb-16">
        {/* Tech Badge Pill */}
        <motion.span 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#4F8CFF]/10 text-[#7BDFF2] border border-[#4F8CFF]/20"
        >
          <Sparkles className="w-3.5 h-3.5" /> Our Workspace Matrix
        </motion.span>

        {/* Heading Typography Stack */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
            Inside Our Studio, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F8CFF] via-[#7BDFF2] to-[#B4F1FF]">
              Where Ideas Take Shape
            </span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base font-light max-w-lg mx-auto leading-relaxed">
            Explore the spaces, ecosystems, and collaborative environments driving our engineering breakthroughs.
          </p>
        </motion.div>

        {/* Dynamic CTA Funnel Element */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="pt-2">
          <button className="px-6 py-3 bg-gradient-to-r from-[#4F8CFF] to-[#7BDFF2] text-[#0A0D14] text-xs font-bold uppercase tracking-wider rounded-full shadow-lg shadow-[#4F8CFF]/10 hover:opacity-90 transition-all flex items-center justify-center gap-2 mx-auto group">
            See Life At The Company
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* --- Part 2: 3D Curved Concave Perspective Slider Track --- */}
      <div 
        className="relative w-full overflow-hidden z-10 pt-10"
        style={{
          perspective: '1200px', 
          WebkitPerspective: '1200px',
        }}
      >
        <div 
          className="w-full flex justify-center"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateX(6deg) rotateY(0deg)', 
          }}
        >
          <motion.div 
            className="flex gap-4 md:gap-6 flex-nowrap pointer-events-auto cursor-grab active:cursor-grabbing px-4"
            // 🚀 PERF FIX: Translating using strict percentages loop metrics so short arrays loop cleanly!
            animate={{ x: ["0%", "-33.3333%"] }} 
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: Math.max(activeAssets.length * 4.5, 20), // Scales rotational speed based on array length
                ease: "linear",
              },
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {duplicatedItems.map((item, i) => {
              const positionIndex = i % activeAssets.length;
              
              // 🚀 MATH FIX: Auto-balances calculation parameters based on active row counts matrix
              const rotateYVal = (positionIndex - (activeAssets.length / 2)) * (38 / activeAssets.length); 
              const translateZVal = Math.abs(positionIndex - (activeAssets.length / 2)) * -14; 

              return (
                <motion.div
                  key={i}
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: `rotateY(${rotateYVal}deg) translateZ(${translateZVal}px)`,
                  }}
                  whileHover={{ 
                    scale: 1.04, 
                    z: 30,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className="w-[180px] sm:w-[220px] md:w-[260px] aspect-[4/5] rounded-[2rem] overflow-hidden border border-slate-800/60 bg-slate-900/40 backdrop-blur-md shadow-2xl flex-shrink-0 relative group"
                >
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out scale-102 group-hover:scale-108 brightness-90 group-hover:brightness-100 contrast-[1.02]"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Shadow Frame Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14]/80 via-transparent to-[#0A0D14]/10 opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Interactive Dynamic Lighting Reflection Lines */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent duration-500" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade Masking Layer */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0A0D14] to-transparent z-20 pointer-events-none" />

    </section>
  );
}