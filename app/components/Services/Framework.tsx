// app/services/growth-engineering/framework.tsx
"use client";

import React, { useState } from "react";

// 1. Define Types for your Backend Data Contracts
interface LifecycleStep {
  step: string;
  title: string;
  desc: string;
}

interface LifecyclePayload {
  trackTag: string;
  mainHeading: string;
  subheading: string;
  steps: LifecycleStep[];
}

// 2. This structure can be directly fed from your database layer or CMS
const initialLifecycleData: LifecyclePayload = {
  trackTag: "// VELOCITY_SCALING_TRACK",
  mainHeading: "How We Scale Digital Products",
  subheading: "We engineer revenue expansion loops by passing your customer metrics through a highly optimized six-stage growth lifecycle.",
  steps: [
    { step: "Step 1", title: "Research & Audit", desc: "Traffic analysis, technical review, competitor assessment blueprints mapping." },
    { step: "Step 2", title: "Growth Strategy", desc: "Define acquisition, activation, retention, and conversion plans securely." },
    { step: "Step 3", title: "Infrastructure Setup", desc: "Analytics, SEO, automation, and tracking systems infrastructure setup directly inside codebase." },
    { step: "Step 4", title: "Optimization", desc: "Improve user experience, conversion, and performance optimization boundaries." },
    { step: "Step 5", title: "Scaling", desc: "Expand successful channels and campaigns with maximum infrastructure stability." },
    { step: "Step 6", title: "Continuous Improvement", desc: "Ongoing testing and optimization iterations tracking across deployment paths." },
  ]
};

export default function ServicesFramework({ data = initialLifecycleData }: { data?: LifecyclePayload }) {
  // Active index state listener for live color changes
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section className="bg-slate-950 text-white py-28 px-6 border-t border-slate-900 relative overflow-hidden">
      {/* Structural Backdrop Soft Mesh Cloud */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[#10B981]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
        
        {/* Asymmetric Roadmap Left Meta Header Block */}
        <div className="lg:col-span-4 space-y-4 text-left lg:sticky lg:top-24 h-fit">
          <span className="text-[10px] font-mono font-black text-[#34D399] tracking-widest uppercase block">
            {data.trackTag}
          </span>
          <h3 className="text-2xl md:text-5xl font-black tracking-tight uppercase leading-none">
            {data.mainHeading}
          </h3>
          <p className="text-xs text-slate-400 uppercase tracking-wider font-medium leading-relaxed max-w-sm opacity-80">
            {data.subheading}
          </p>
        </div>

        {/* Dynamic Mapping Layout Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {data.steps.map((proc, i) => {
            const isHovered = hoveredStep === i;
            
            return (
              <div 
                key={proc.step} 
                onMouseEnter={() => setHoveredStep(i)}
                onMouseLeave={() => setHoveredStep(null)}
                className={`p-6 border transition-all duration-500 flex flex-col justify-between min-h-[160px] backdrop-blur-sm group rounded-[2rem] ${
                  isHovered 
                    ? "bg-slate-900/80 border-[#10B981]/40 shadow-xl shadow-[#10B981]/5 -translate-y-1" 
                    : "bg-slate-900/40 border-slate-800/60"
                }`}
              >
                {/* Upper Status Line Pane */}
                <div className="flex justify-between items-center pb-3 border-b border-slate-800/60 mb-3">
                  <span className={`text-[9px] font-mono font-black transition-colors duration-300 uppercase tracking-wider ${
                    isHovered ? "text-cyan-400" : "text-blue-400"
                  }`}>
                    // {proc.step}
                  </span>
                  <span className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                    isHovered ? "bg-[#10B981] scale-125 shadow-md shadow-[#10B981]" : "bg-slate-800"
                  }`} />
                </div>

                {/* Content Pane */}
                <div className="space-y-1">
                  <h4 className="text-xs font-black uppercase tracking-widest text-white leading-tight transition-colors duration-300 group-hover:text-white">
                    {proc.title}
                  </h4>
                  <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wide leading-normal group-hover:text-slate-400 transition-colors duration-300">
                    {proc.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}