// components/growth-outcomes.tsx
"use client";

import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

interface OutcomeCard {
  title: string;
  metric: string;
  label: string;
}

interface OutcomesPayload {
  terminalBadge: string;
  headingMain: string;
  cards: OutcomeCard[];
}

const fallbackOutcomes: OutcomeCard[] = [
  { title: "Organic Ingress", metric: "+320% Traffic", label: "Organic Traffic Growth" },
  { title: "Lead Generation Velocity", metric: "+180% Leads", label: "Lead Generation Growth" },
  { title: "Acquisition Cost Lowering", metric: "-42% CAC", label: "Customer Acquisition Cost" },
  { title: "Funnel Conversion Boost", metric: "+68% Conversion", label: "Conversion Rate Improvement" },
];

// 🟢 FIX: Accept 'payload' matching the format passed by your [slug]/page.tsx
export default function ServiceOutcomes({ payload }: { payload?: OutcomesPayload }) {
  // Local state to manage the position of the dynamic gradient cloud on hover
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Safe fallback values if payload data hasn't finished hydrating from database loops
  const badge = payload?.terminalBadge || "// QUANTIFIED_REVENUE_EXPANSION";
  const heading = payload?.headingMain || "Measurable Growth Outcomes";
  const activeCards = payload?.cards || fallbackOutcomes;

  return (
    <section className="bg-slate-950 text-white py-28 px-6 border-t border-slate-900 isolation-isolate relative overflow-hidden">
      {/* 🌌 Dynamic Ambient Blur Glow (Follows the user's mouse position) */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full blur-[130px] opacity-[0.04] bg-[#10B981] pointer-events-none -z-10 transition-all duration-700 ease-out"
        style={{
          left: hoveredIndex !== null ? `${15 + (hoveredIndex * 20)}%` : "50%",
          top: "30%",
          transform: "translateX(-50%)"
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 space-y-2">
          <span className="text-[10px] font-mono font-black text-[#34D399] tracking-widest uppercase block">
            {badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase text-white">
            {heading}
          </h2>
        </div>

        {/* Outcomes Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {activeCards.map((cs, i) => {
            const isHovered = hoveredIndex === i;

            return (
              <div 
                key={i} 
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`p-6 bg-gradient-to-br from-slate-900 to-slate-950 border rounded-[2rem] flex flex-col justify-between transition-all duration-500 ease-out relative overflow-hidden min-h-[240px] group ${
                  isHovered ? "border-[#34D399]/40 shadow-2xl shadow-[#10B981]/5 -translate-y-1.5" : "border-slate-800"
                }`}
              >
                {/* Micro Light Reflection Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* System Logging Marker */}
                <div className={`absolute top-4 right-6 text-[8px] font-mono font-bold uppercase transition-colors duration-300 ${
                  isHovered ? "text-[#34D399]" : "text-slate-600"
                }`}>
                  // SUCCESS_LOG_0{i + 1}
                </div>
                
                {/* Content Block */}
                <div>
                  <h3 className="text-xs font-black text-slate-400 mb-6 uppercase tracking-widest">
                    {cs.title}
                  </h3>
                  <div className={`text-2xl font-black tracking-tighter uppercase mb-1 font-mono transition-colors duration-300 ${
                    isHovered ? "text-[#34D399]" : "text-white"
                  }`}>
                    {cs.metric}
                  </div>
                  <div className="text-[9px] font-black text-slate-400 tracking-widest uppercase leading-tight">
                    {cs.label}
                  </div>
                </div>

                {/* Interactive Action Footer */}
                <div className="mt-8 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-[#10B981] group-hover:text-[#34D399] transition-colors cursor-pointer">
                  <span>Access Funnel Analytics</span>
                  <ChevronRight size={14} className={`transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}