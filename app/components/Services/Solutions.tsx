// app/services/growth-engineering/solutions.tsx
"use client";

import React, { useState } from "react";
import { Blocks, ArrowUpRight } from "lucide-react";

// 1. Define Types for your Backend Data Contracts
interface SolutionStack {
  type: string;
  items: string[];
}

interface SolutionsPayload {
  systemBadge: string;
  mainHeading: string;
  stacks: SolutionStack[];
}

// 2. This structure can be directly fed from your database layer or CMS
const initialSolutionsData: SolutionsPayload = {
  systemBadge: "// DELIVERED_SYSTEMS",
  mainHeading: "Growth Solutions For Modern Businesses",
  stacks: [
    { type: "SaaS Growth Systems", items: ["Subscription Traction Loops", "Churn Mitigation Webhooks", "Expansion Invoicing Rules", "Usage Metering Sync"] },
    { type: "AI Product Growth", items: ["Model Onboarding Pipelines", "Adoption Optimization", "Token Conversion Metrics", "Prompt Funnel Tuning"] },
    { type: "Startup Growth", items: ["Rapid Validation Maps", "Minimum Viable Traction", "Growth Target Sprints", "Early Verification Nodes"] },
    { type: "E-Commerce Growth", items: ["Flash Checkout Tuning", "Atomic Cart Triggers", "Abandoned Basket Flows", "Revenue Margin Boosters"] },
    { type: "Enterprise Lead Gen", items: ["B2B Acquisition Shards", "Data enrichment pipelines", "Account Access Tokens", "Type-Safe Contact Hooks"] },
    { type: "Content-Led Growth", items: ["Programmatic Content Hubs", "Organic Authority Building", "Structured SEO Layers", "Automated Asset Injection"] },
    { type: "SEO Growth Infrastructure", items: ["Server-Side Rendering Sync", "Crawl Budget Optimization", "Page Speed Performance", "Indexation Automation"] },
    { type: "Conversion Optimization", items: ["Multivariant Layout Testing", "Visual Friction Removals", "Intent-Triggered CTAs", "Traffic to Customer Sync"] },
  ]
};

export default function ServicesSolutions({ payload = initialSolutionsData }: { payload?: SolutionsPayload }) {
  // Active index listener tracking hover states for smooth visual micro-actions
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-28 px-6 max-w-7xl mx-auto border-t border-slate-100 relative">
      {/* Structural Decorative Aura behind the grid */}
      <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] rounded-full bg-[#34D399]/5 blur-[100px] pointer-events-none" />

      {/* Top Header Row Panel */}
      <div className="max-w-3xl mb-16 space-y-2">
        <span className="text-xs font-mono font-black text-indigo-600 tracking-widest uppercase block">
          {payload.systemBadge}
        </span>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase text-slate-950">
          {payload.mainHeading}
        </h2>
      </div>

      {/* Dynamic Mapping Layout Grid Architecture */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {payload.stacks.map((stack, i) => {
          const isHovered = hoveredIndex === i;

          return (
            <div 
              key={stack.type} 
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`p-6 bg-slate-50 border rounded-[2rem] transition-all duration-500 ease-out flex flex-col justify-between min-h-[220px] relative overflow-hidden group ${
                isHovered 
                  ? "border-[#10B981]/40 bg-white shadow-2xl shadow-slate-200/50 -translate-y-1.5" 
                  : "border-slate-200/60"
              }`}
            >
              {/* Subtle Ambient Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#A7F3D0]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Header Row Node Block */}
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-200/60">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg bg-white border flex items-center justify-center transition-all duration-500 shadow-sm ${
                      isHovered ? "text-[#10B981] border-[#10B981]/20 scale-105" : "text-blue-600 border-slate-100"
                    }`}>
                      <Blocks size={14} className="transition-transform group-hover:rotate-6 duration-300" />
                    </div>
                    <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-950">
                      {stack.type}
                    </h3>
                  </div>
                  
                  {/* Subtle Action Arrow Endpoint indicator */}
                  <ArrowUpRight 
                    size={12} 
                    className={`transition-all duration-500 ${
                      isHovered ? "text-[#10B981] opacity-100 scale-110" : "text-slate-300 opacity-0"
                    }`} 
                  />
                </div>

                {/* Micro List Parameters Rendering Array */}
                <ul className="space-y-2.5 flex-grow relative z-10">
                  {stack.items.map((item, idx) => (
                    <li 
                      key={idx} 
                      className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2.5 transition-colors duration-300 group-hover:text-slate-700"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                        isHovered ? "bg-[#10B981] scale-110 shadow-sm shadow-[#10B981]" : "bg-[#34D399]"
                      }`} /> 
                      <span className="truncate">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sub-Terminal Index Tag */}
              <div className="pt-4 mt-5 border-t border-slate-100/80 flex items-center justify-between font-mono text-[8px] tracking-widest font-bold text-slate-300 group-hover:text-slate-400 transition-colors">
                <span>INDEX_REG_0{i + 1}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#10B981]">READY</span>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}