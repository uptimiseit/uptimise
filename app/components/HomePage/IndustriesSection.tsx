'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, Landmark, GraduationCap, 
  HeartPulse, ShoppingBag, BrainCircuit, 
  Database, Boxes, ArrowUpRight 
} from 'lucide-react';

const industries = [
  {
    name: "AI Companies",
    icon: <BrainCircuit size={24} />,
    desc: "Powering the next generation of LLM-native products.",
    status: "Priority_Sector",
    featured: true
  },
  {
    name: "FinTech",
    icon: <Landmark size={24} />,
    desc: "Engineering secure, scalable financial ecosystems.",
    status: "Secure_Ops"
  },
  {
    name: "Healthcare",
    icon: <HeartPulse size={24} />,
    desc: "Compliant digital health & diagnostic platforms.",
    status: "High_Reliability"
  },
  {
    name: "Technology Startups",
    icon: <Globe size={24} />,
    desc: "From MVP to Series A with 10x engineering speed.",
    status: "Rapid_Growth"
  },
  {
    name: "E-commerce",
    icon: <ShoppingBag size={24} />,
    desc: "High-conversion architecture for global brands.",
    status: "Market_Ready"
  },
  {
    name: "EdTech",
    icon: <GraduationCap size={24} />,
    desc: "Adaptive learning platforms powered by automation.",
    status: "Engagement"
  },
  {
    name: "Blockchain",
    icon: <Database size={24} />,
    desc: "Smart contracts and decentralized Web3 infra.",
    status: "Immutable"
  },
  {
    name: "Enterprise",
    icon: <Boxes size={24} />,
    desc: "Legacy-to-Modern digital transformations.",
    status: "Scaled_Ops"
  }
];

const IndustriesSection = () => {
  return (
    <section className="relative bg-white py-32 px-6 overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-700 font-mono italic">
                # Market Penetration
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black font-header tracking-tighter text-slate-950 leading-[0.85]">
              Industries <br />
              <span className="text-slate-300">We Empower.</span>
            </h2>
          </div>
          <p className="text-xl text-slate-500 font-body max-w-sm lg:text-right pb-4">
            Deploying AI-native engineering excellence across high-stakes global markets.
          </p>
        </div>

        {/* The Industry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className={`p-10 rounded-[3rem] border transition-all duration-500 group relative flex flex-col justify-between h-[320px] overflow-hidden ${
                item.featured 
                ? 'bg-slate-950 border-slate-800 text-white lg:col-span-2' 
                : 'bg-slate-50 border-slate-100 hover:bg-white hover:border-blue-500/20 hover:shadow-2xl hover:shadow-blue-100/30'
              }`}
            >
              {/* Background Accent for Hover */}
              {!item.featured && (
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-all duration-500" />
              )}

              <div className="space-y-6 relative z-10">
                <div className="flex justify-between items-start">
                  <div className={`p-4 rounded-2xl ${item.featured ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 shadow-sm transition-colors group-hover:bg-blue-600 group-hover:text-white'}`}>
                    {item.icon}
                  </div>
                  <div className={`px-3 py-1 rounded-full border text-[9px] font-mono font-black tracking-widest ${
                    item.featured ? 'bg-white/10 border-white/20 text-blue-400' : 'bg-white border-slate-100 text-slate-400'
                  }`}>
                    {item.status}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className={`text-3xl font-black font-header tracking-tight ${item.featured ? 'text-white' : 'text-slate-950'}`}>
                    {item.name}
                  </h3>
                  <p className={`text-sm font-body leading-relaxed max-w-[200px] ${item.featured ? 'text-slate-400' : 'text-slate-500'}`}>
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="relative z-10 flex justify-end">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  item.featured ? 'bg-white/5 text-white hover:bg-white hover:text-slate-950' : 'bg-white text-slate-300 group-hover:bg-blue-600 group-hover:text-white'
                }`}>
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default IndustriesSection;