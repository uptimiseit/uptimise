// app/services/growth-engineering/capabilities.tsx
"use client";

import React from "react";
import { 
  Search, Blocks, Target, LineChart, BarChart3, Zap, MousePointer, ChevronRight, Sparkles 
} from "lucide-react";

// 1. Define Data and Visual Mappings for strict contract alignment
interface CapabilityItem {
  title: string;
  desc: string;
  code: string;
  iconKey: "search" | "blocks" | "target" | "lineChart" | "barChart" | "zap" | "mousePointer";
}

interface CapabilitiesPayload {
  systemBadge: string;
  mainHeading: string;
  gradientHeading: string;
  items: CapabilityItem[];
}

const iconRegistry = {
  search: Search,
  blocks: Blocks,
  target: Target,
  lineChart: LineChart,
  barChart: BarChart3,
  zap: Zap,
  mousePointer: MousePointer,
};


export default function ServicesCapabilitiesMatrix({ payload }: { payload: CapabilitiesPayload }) {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto relative isolation-isolate">
      {/* 🌌 Animated Circuit Dot Grid Background (Scoped to Section) */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-70 -z-10 mask-image-[radial-gradient(ellipse_at_center,transparent_40%,black)]" />
      
      {/* Floating Neon Accent Object behind cards */}
      <div className="absolute top-[40%] left-[45%] w-[400px] h-[400px] rounded-full bg-[#10B981]/5 blur-[120px] pointer-events-none -z-10 animate-pulse duration-[6000ms]" />

      {/* Premium Asymmetric Header Block */}
      <div className="mb-24 text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-800 text-white rounded-full text-[9px] font-black tracking-widest uppercase mx-auto">
          <Sparkles size={10} className="text-[#34D399] animate-spin duration-[4000ms]" />
          {payload.systemBadge}
        </div>
        <h2 className="text-3xl md:text-6xl font-black tracking-tighter uppercase text-slate-950 leading-none">
          {payload.mainHeading} <br />
          <span className="inline-block text-transparent bg-clip-text pb-1 italic font-serif tracking-normal lowercase bg-gradient-to-r from-[#10B981] to-[#34D399]">
            {payload.gradientHeading}
          </span>
        </h2>
        <div className="w-12 h-1 bg-slate-900 mx-auto rounded-full" />
      </div>

      {/* Highly Interactive Component Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {payload.items.map((item, i) => {
          // Dynamic fallback protection for component instantiation
          const IconComponent = iconRegistry[item.iconKey] || Blocks;
          
          return (
            <div 
              key={item.code} 
              className="p-6 rounded-[2.5rem] bg-white border border-orange-200 shadow-2xl shadow-slate-100/40 flex flex-col justify-between hover:border-[#10B981]/50 hover:-translate-y-2 hover:shadow-[#10B981]/5 hover:bg-gradient-to-b hover:from-white hover:to-slate-50/50 transition-all duration-500 ease-out group min-h-[260px] relative overflow-hidden"
            >
              {/* Subtle Hover Gradient Flare Layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#A7F3D0]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Top Structural Information Bar */}
                <div className="flex justify-between items-center mb-6 border-b border-teal-200 pb-4">
                  <div className="text-[9px] font-mono font-black text-slate-400 group-hover:text-slate-900 transition-colors uppercase tracking-widest">
                    // SYSTEM_NODE_0{i + 1}
                  </div>
                  
                  {/* Dynamic Interactive Icon Wrapper Frame */}
                  <div className="w-8 h-8 bg-slate-50 border border-orange-200 rounded-xl flex items-center justify-center text-orange-500 group-hover:bg-slate-950 group-hover:text-[#34D399] group-hover:rotate-6 transition-all duration-500 shadow-inner">
                    <IconComponent size={14} className="transition-transform group-hover:scale-110 duration-300" />
                  </div>
                </div>

                {/* Core Card Context */}
                <h3 className="text-sm font-black text-slate-950 uppercase tracking-tight mb-2 group-hover:text-slate-900 transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-500 font-medium uppercase tracking-wide leading-relaxed group-hover:text-slate-600 transition-colors">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Custom Parameter Badges Footer Block */}
              <div className="pt-4 border-t border-slate-100/80 flex items-center justify-between relative z-10">
                <span className="text-[9px] font-mono bg-slate-50 border border-slate-200/60 px-2.5 py-0.5 rounded text-slate-400 font-bold uppercase tracking-wide group-hover:bg-white group-hover:border-[#10B981]/30 group-hover:text-[#10B981] transition-all duration-300">
                  {item.code}
                </span>
                
                {/* Context Arrow Action Selector */}
                <div className="flex items-center gap-1 text-[9px] font-mono font-black uppercase text-slate-300 group-hover:text-slate-900 transition-all duration-300 tracking-wider">
                  <span className="opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-[40px] transition-all duration-500 overflow-hidden block">RUN_</span>
                  <ChevronRight size={14} className="text-slate-300 group-hover:text-slate-950 group-hover:translate-x-0.5 transition-all duration-300" />
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}