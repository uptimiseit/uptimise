// components/100X/GrowthRoadmapTrack.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BarChart, Check, Target, Layers } from 'lucide-react';

export const GrowthRoadmapTrack = () => {
  const points = [
    { num: "01", icon: <Target size={18} />, title: "Schema Strategy Topology", desc: "We map system database fields and verify entity tracking paths before writing any core schema variables." },
    { num: "02", icon: <Layers size={18} />, title: "API Engine Compilation", desc: "Building asynchronous event brokers and validation endpoints to ensure secure write pathways." },
    { num: "03", icon: <BarChart size={18} />, title: "Production Scale Integration", desc: "Connecting full-stack interfaces to localized server nodes protected by telemetry dashboards." }
  ];

  return (
    <section className="bg-slate-400 py-32 px-6 overflow-hidden border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Header Block Alignment */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <span className="text-[10px] font-mono font-black text-blue-600 tracking-widest uppercase">// REPEATABLE_FLOW</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-950 uppercase tracking-tighter leading-none">
              The Architecture <br /> Delivery Lifeline
            </h2>
          </div>
          <p className="text-sm text-slate-500 font-medium max-w-sm leading-relaxed">
            A precise engineering protocol designed to map requirements directly into type-safe source structures without documentation lag.
          </p>
        </div>

        {/* Milestone Flex Cards Loop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {points.map((pt, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, type: "spring", stiffness: 100 }}
              className="p-10 rounded-[3rem] bg-white border border-slate-200/60 flex flex-col justify-between min-h-[320px] relative group hover:border-blue-500/30 transition-all duration-500"
            >
              <div>
                {/* Card Head Layout */}
                <div className="flex items-center justify-between border-b border-slate-50 pb-6 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-800 flex items-center justify-center border border-slate-100 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors duration-500">
                    {pt.icon}
                  </div>
                  <span className="font-mono text-xs font-black text-slate-300 group-hover:text-blue-500/40 transition-colors">
                    // RUN_NODE_{pt.num}
                  </span>
                </div>

                {/* Content Elements */}
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-slate-950 uppercase tracking-tight">
                    {pt.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              </div>

              {/* Status Verification Tag */}
              <div className="mt-8 flex items-center gap-2 text-[9px] font-mono font-black text-slate-400 uppercase tracking-widest">
                <div className="w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200 text-slate-500 group-hover:bg-emerald-50 group-hover:border-emerald-200 group-hover:text-emerald-500 transition-colors">
                  <Check size={10} />
                </div>
                <span>Verified Protocol</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};