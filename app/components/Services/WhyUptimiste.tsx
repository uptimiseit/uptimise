// app/services/growth-engineering/why-choose.tsx
"use client";

import React, { useState } from "react";
import { CheckCircle2, Globe, ArrowUpRight, Sparkles } from "lucide-react";

// 1. Define Types for your Backend Data Contracts
interface DifferentiationMetric {
  title: string;
  desc: string;
}

interface IndustryItem {
  name: string;
  desc: string; // Dynamic subtext added to align with premium bento standards
}

interface WhyChoosePayload {
  leftBadge: string;
  leftHeading: string;
  rightBadge: string;
  rightHeading: string;
  metrics: DifferentiationMetric[];
  industries: IndustryItem[];
}

// 2. This structure can be directly fed from your database layer or CMS
const initialWhyChooseData: WhyChoosePayload = {
  leftBadge: "// DIFFERENTIATION_METRICS",
  leftHeading: "Why Choose Uptimise IT For Growth",
  rightBadge: "// INTEGRATION_DOMAINS",
  rightHeading: "Growth Systems Across Industries",
  metrics: [
    { title: "Engineering + Marketing Duo", desc: "Unlike traditional agencies, we understand both technology and growth, bridging the gap completely." },
    { title: "AI-Driven Optimization", desc: "Modern growth systems powered by AI to automate context and maximize pipeline output thresholds." },
    { title: "Data-First Decisions", desc: "Every strategy backed by measurable data streams, avoiding programmatic validation guesswork errors." },
    { title: "Conversion Focus", desc: "Growth tied directly to business outcomes and bottom-line transaction success variables." },
    { title: "Technical Expertise", desc: "SEO and performance optimization at an engineering level inside structural server environments." },
    { title: "Long-Term Growth Systems", desc: "Built for sustainability, not short-term spikes, protecting tracking metrics securely over scaling years." },
  ],
  industries: [
    { name: "SaaS", desc: "Subscription-based scale engines" },
    { name: "AI Products", desc: "Cognitive model acquisition" },
    { name: "Healthcare", desc: "Secure & compliant health-tech" },
    { name: "EdTech", desc: "High-load virtual classrooms" },
    { name: "FinTech", desc: "High-availability ledger systems" },
    { name: "E-Commerce", desc: "High-conversion checkout loops" },
    { name: "Logistics", desc: "Supply chain event systems" },
    { name: "Enterprise Platforms", desc: "Mission-critical corporate apps" },
  ]
};

export default function ServiceWhyChoose({ payload = initialWhyChooseData }: { payload?: WhyChoosePayload }) {
  // Local state loops to handle highly interactive hover adjustments
  const [hoveredWhyIndex, setHoveredWhyIndex] = useState<number | null>(null);
  const [hoveredIndustryIndex, setHoveredIndustryIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto relative isolation-isolate">
      {/* Structural layout decorations */}
      <div className="absolute top-[10%] left-[-5%] w-[350px] h-[350px] rounded-full bg-[#10B981]/5 blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] right-[-5%] w-[350px] h-[350px] rounded-full bg-[#34D399]/5 blur-[100px] pointer-events-none -z-10 animate-pulse" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10">
        
        {/* ==========================================
            ⬜ LEFT COLUMN: WHY CHOOSE OUR TEAM
            ========================================== */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-mono font-black text-blue-600 tracking-widest uppercase block">
              {payload.leftBadge}
            </span>
            <h3 className="text-2xl md:text-4xl font-black tracking-tight uppercase text-slate-950">
              {payload.leftHeading}
            </h3>
            <div className="w-12 h-1 bg-[#10B981] rounded-full" />
          </div>

          {/* Dynamic Map: Why Cards */}
          <div className="grid grid-cols-1 gap-4">
            {payload.metrics.map((why, i) => {
              const isHovered = hoveredWhyIndex === i;

              return (
                <div 
                  key={why.title} 
                  onMouseEnter={() => setHoveredWhyIndex(i)}
                  onMouseLeave={() => setHoveredWhyIndex(null)}
                  className={`p-6 bg-white border rounded-2xl flex gap-5 transition-all duration-500 ease-out group relative overflow-hidden cursor-default ${
                    isHovered 
                      ? "border-[#10B981]/40 shadow-2xl shadow-slate-200/50 -translate-y-1" 
                      : "border-slate-100 shadow-sm shadow-slate-100/50"
                  }`}
                >
                  {/* Subtle inner hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#A7F3D0]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="shrink-0 relative z-10">
                    <div className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all duration-500 shadow-inner ${
                      isHovered ? "bg-[#10B981]/5 border-[#10B981]/20 text-[#10B981] scale-105" : "bg-slate-50 border-slate-100 text-[#10B981]"
                    }`}>
                      <CheckCircle2 size={16} className="transition-transform group-hover:scale-110" />
                    </div>
                  </div>

                  <div className="space-y-1 relative z-10">
                    <h4 className={`text-xs font-black uppercase tracking-widest transition-colors duration-300 ${
                      isHovered ? "text-[#10B981]" : "text-slate-950"
                    }`}>
                      {why.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 font-medium uppercase tracking-wide leading-relaxed group-hover:text-slate-600 transition-colors duration-300">
                      {why.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ==========================================
            🟩 RIGHT COLUMN: GROWTH SYSTEMS INDUSTRIES (STICKY)
            ========================================== */}
        <div className="lg:col-span-6 space-y-8 lg:sticky lg:top-24 h-fit">
          <div className="space-y-3">
            <span className="text-xs font-mono font-black text-orange-600 tracking-widest uppercase block">
              {payload.rightBadge}
            </span>
            <h3 className="text-2xl md:text-4xl font-black tracking-tight uppercase text-slate-950">
              {payload.rightHeading}
            </h3>
            <div className="w-12 h-1 bg-[#34D399] rounded-full" />
          </div>

          {/* Dynamic Map: Industry Chips */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {payload.industries.map((ind, i) => {
              const isHovered = hoveredIndustryIndex === i;

              return (
                <div 
                  key={ind.name} 
                  onMouseEnter={() => setHoveredIndustryIndex(i)}
                  onMouseLeave={() => setHoveredIndustryIndex(null)}
                  className={`p-4 bg-white border rounded-2xl flex items-center gap-4 transition-all duration-500 ease-out cursor-default relative overflow-hidden ${
                    isHovered 
                      ? "border-[#10B981]/40 bg-gradient-to-b from-white to-slate-50/50 shadow-2xl shadow-slate-200/50 -translate-y-1" 
                      : "border-slate-100 shadow-sm shadow-slate-100/30"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-xl border flex items-center justify-center transition-all duration-500 shadow-sm ${
                    isHovered ? "text-[#10B981] bg-[#10B981]/5 border-[#10B981]/20 scale-105" : "text-[#10B981] bg-slate-50 border-slate-100"
                  }`}>
                    <Globe size={14} className="transition-transform group-hover:rotate-6" />
                  </div>
                  <div className="space-y-0.5">
                    <div className={`text-[11px] font-black uppercase transition-colors duration-300 ${
                      isHovered ? "text-[#10B981]" : "text-slate-950"
                    }`}>
                      {ind.name}
                    </div>
                    <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">
                      {ind.desc}
                    </div>
                  </div>
                  {/* Subtle corner arrow on card hover */}
                  <ArrowUpRight 
                    size={12} 
                    className={`absolute right-4 bottom-4 transition-all duration-500 ${
                      isHovered ? "text-[#10B981] opacity-100 scale-110" : "text-slate-300 opacity-0"
                    }`} 
                  />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}