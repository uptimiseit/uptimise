// components/growth-cta.tsx
"use client";

import React, { useState } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";

// 1. Define the interface contract matching the database jsonb schema structure
interface EndCtaPayload {
  titlePrimary: string;
  titleAccent: string;
  subheading: string;
  primaryCtaText: string;
  secondaryCtaText: string;
}

interface ServicesCtaProps {
  payload?: EndCtaPayload;
}

export default function ServicesCta({ payload }: { payload?: EndCtaPayload }) {
  const [isHovered, setIsHovered] = useState(false);

  // 2. Safely apply fallback values to support unhydrated admin previews
  const titlePrimary = payload?.titlePrimary || "Ready to Build a";
  const titleAccent = payload?.titleAccent || "Scalable Growth Engine?";
  const subheading = payload?.subheading || "From SEO and analytics to AI-powered optimization and conversion engineering, we help businesses create predictable and measurable growth systems.";
  const primaryCtaText = payload?.primaryCtaText || "Book Growth Consultation";
  const secondaryCtaText = payload?.secondaryCtaText || "Talk to Growth Engineers";

  return (
    <section className="bg-white text-slate-900 py-32 px-6 text-center relative isolation-isolate border-t border-slate-100 overflow-hidden">
      
      {/* 🌌 Dynamic Responsive Optimization Aura Background */}
      <div 
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#10B981]/10 via-[#34D399]/5 to-transparent blur-[120px] rounded-full pointer-events-none -z-10 transition-all duration-700 ease-out ${
          isHovered ? "scale-110 opacity-100" : "scale-100 opacity-80"
        }`} 
      />

      <div className="relative space-y-8 max-w-4xl mx-auto">
        
        {/* Hardware Status Trigger Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-950 border border-slate-900 text-[#34D399] rounded-xl text-[10px] font-mono font-black uppercase tracking-widest shadow-xl">
          <Sparkles size={10} className="animate-spin duration-[5000ms]" />
          // CONVERSION_HOOK_ENGAGED
        </div>

        {/* Scaled Premium Headline Block */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-950 uppercase tracking-tighter leading-[0.95] max-w-3xl mx-auto">
          {titlePrimary} <br />
          <span className="inline-block text-transparent bg-clip-text pb-1 italic font-serif tracking-normal lowercase bg-gradient-to-r from-[#10B981] via-[#34D399] to-[#A7F3D0]">
            {titleAccent}
          </span>
        </h2>
        
        {/* Strict Bold Matrix Subtext Layout */}
        <p className="text-[11px] md:text-xs text-slate-500 font-bold uppercase tracking-widest max-w-xl mx-auto leading-relaxed opacity-90 font-sans">
          {subheading}
        </p>
        
        {/* Conversion CTA Core Cluster Panel */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 max-w-md mx-auto sm:max-w-none relative z-10">
          <button 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="px-8 py-5 bg-slate-950 hover:bg-slate-900 text-white font-black text-[11px] uppercase tracking-widest rounded-3xl shadow-2xl shadow-slate-950/20 transition-all duration-300 flex items-center justify-center gap-3 group border border-slate-950"
          >
            {primaryCtaText}
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#34D399]" />
          </button>
          
          <button className="px-8 py-5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-black text-[11px] uppercase tracking-widest rounded-3xl transition-all duration-300 shadow-sm shadow-slate-100">
            {secondaryCtaText}
          </button>
        </div>

      </div>
    </section>
  );
}