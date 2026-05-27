// components/CTASection.tsx
'use client';

import React, { useState, useRef, MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Zap, Activity } from 'lucide-react';
import Link from 'next/link';

interface CTASectionProps {
  data: {
    heading: string;
    accentText?: string;
    description: string;
    buttonText: string;
    buttonHref: string;
    glowColor: string; // e.g., "#4caf50" or "#10b981"
  };
}

export default function CTASection({ data }: CTASectionProps) {
  if (!data) return null;

  const primaryGlow = data.glowColor || '#557c55';
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    setCoords({ x: e.clientX - left, y: e.clientY - top });
  };

  return (
    <section className="relative w-full py-32 px-4 md:px-8 bg-white overflow-hidden text-slate-900">
      
      {/* Visual Accent Layer Mesh Background */}
      <div className="absolute inset-0 opacity-[0.012] pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      <div 
        className="absolute top-1/2 right-0 w-[550px] h-[550px] blur-[140px] rounded-full -z-10 pointer-events-none opacity-20 transition-all duration-700" 
        style={{ backgroundColor: primaryGlow }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* ==========================================
            LEFT COLUMN: TYPOGRAPHY COPY & ACCENT CTAS
           ========================================== */}
        <div className="w-full lg:col-span-6 space-y-8 text-left">
          
          {/* Micro Pill Badge Indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200/80 shadow-2xs">
            <Zap size={12} style={{ color: primaryGlow }} className="animate-pulse" />
            <span className="text-[10px] font-mono font-black tracking-widest text-slate-400 uppercase">
              Velocity_Optimization
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
            {data.heading}{' '}
            {data.accentText && (
              <span 
                className="block lg:inline transition-colors duration-500 bg-clip-text text-transparent bg-gradient-to-r"
                style={{ 
                  backgroundImage: `linear-gradient(to right, ${primaryGlow}, #2e7d32)`,
                  color: primaryGlow // Fallback
                }}
              >
                {data.accentText}
              </span>
            )}
          </h2>

          <p className="text-sm md:text-base text-slate-500 leading-relaxed font-semibold max-w-xl">
            {data.description || "We utilize proprietary AI agent workflows to automate boilerplate code and infrastructure, cutting time-to-market nearly in half."}
          </p>

          {/* Core Custom Action Pill Trigger */}
          <div className="pt-4">
            <Link href={data.buttonHref || '#'} className="inline-flex items-center group">
              <div 
                className="h-14 px-8 rounded-l-full flex items-center justify-center text-sm font-black text-white transition-all duration-300 group-hover:brightness-95 shadow-lg shadow-slate-200"
                style={{ backgroundColor: primaryGlow }}
              >
                {data.buttonText || "Get a Consultation"}
              </div>
              <div className="h-14 w-14 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center -ml-1 relative z-20 group-hover:scale-105 group-hover:border-slate-300 transition-all duration-300">
                <ArrowUpRight size={18} style={{ color: primaryGlow }} className="transition-transform duration-300 group-hover:rotate-45" />
              </div>
            </Link>
          </div>
        </div>

        {/* ==========================================
            RIGHT COLUMN: PREVIEW WORKSPACE INTERFACE
           ========================================== */}
        <div className="w-full lg:col-span-6">
          <div 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            className="group relative w-full rounded-[2.5rem] border border-slate-200/80 bg-slate-50/50 p-8 md:p-10 overflow-hidden shadow-xs min-h-[340px] flex flex-col justify-between transition-all duration-500 hover:shadow-xl hover:bg-white"
          >
            {/* Soft Interactive Background Spotlight Effect */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, ${primaryGlow}08, transparent 80%)`
              }}
            />

            {/* Embedded Interactive Code Terminal / Data Metrics Panel */}
            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between border-b border-slate-200/60 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                </div>
                <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Activity size={12} className="text-emerald-500 animate-pulse" /> environment_ready
                </div>
              </div>

              {/* Fake Code / Operations Log Track */}
              <div className="font-mono text-xs text-slate-400 space-y-2 text-left">
                <p className="text-slate-600 font-bold">// Orchestrated Agents Deployment Track</p>
                <p><span className="text-slate-400">⚡ initializing</span> pipeline_sync.sh ... <span className="text-emerald-600 font-bold">DONE</span></p>
                <p><span className="text-slate-400">⚡ compiling</span> system architecture schema ... <span className="text-emerald-600 font-bold">100%</span></p>
                <p className="text-slate-800 font-bold">🚀 velocity multiplier target attained: <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-600 font-black">40% FASTER</span></p>
              </div>
            </div>

            {/* Dynamic Footnote Validation Row */}
            <div className="pt-6 border-t border-slate-200/60 flex items-center justify-between text-[10px] font-mono tracking-widest text-slate-400 uppercase font-black relative z-10">
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-emerald-500" /> SLA_Verified
              </div>
              <span>Build_Ref: #0040_AI</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}