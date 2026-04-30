'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, Landmark, GraduationCap, 
  HeartPulse, ShoppingBag, BrainCircuit, 
  Database, Boxes, ArrowUpRight, Sparkles 
} from 'lucide-react';
import Link from 'next/link';

const industries = [
  {
    name: "AI Companies",
    icon: <BrainCircuit size={24} />,
    desc: "Powering the next generation of LLM-native products.",
    status: "Priority_Sector",
    featured: true,
    link: "/industries/ai-companies"
  },
  {
    name: "FinTech",
    icon: <Landmark size={24} />,
    desc: "Engineering secure, scalable financial ecosystems.",
    status: "Secure_Ops",
    link: "/industries/fintech"
  },
  {
    name: "Healthcare",
    icon: <HeartPulse size={24} />,
    desc: "Compliant digital health & diagnostic platforms.",
    status: "High_Reliability",
    link: "/industries/healthcare"
  },
  {
    name: "Technology Startups",
    icon: <Globe size={24} />,
    desc: "From MVP to Series A with 10x engineering speed.",
    status: "Rapid_Growth",
    link: "/industries/ai-startups"
  },
  {
    name: "E-commerce",
    icon: <ShoppingBag size={24} />,
    desc: "High-conversion architecture for global brands.",
    status: "Market_Ready",
    link: "/industries/ecommerce"
  },
  {
    name: "EdTech",
    icon: <GraduationCap size={24} />,
    desc: "Adaptive learning platforms powered by automation.",
    status: "Engagement",
    link: "/industries/edtech"
  },
  {
    name: "Blockchain",
    icon: <Database size={24} />,
    desc: "Smart contracts and decentralized Web3 infra.",
    status: "Immutable",
    link: "/industries/blockchain"
  },
  {
    name: "Enterprise",
    icon: <Boxes size={24} />,
    desc: "Legacy-to-Modern digital transformations.",
    status: "Scaled_Ops",
    link: "/industries/enterprise"
  },
  {
    name: "Global Scale-Ups",
    icon: <Sparkles size={24} />,
    desc: "Architecting high-availability systems for the next wave of global unicorns.",
    status: "Unicorn_Ready",
    featured: true,
    link: "/industries/scaleups"
  }
];

const IndustriesSection = () => {
  return (
    <section className="relative bg-white py-24 px-6 overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between lg:items-end items-center mb-16 gap-8"
        >
          <div className="max-w-2xl space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 shadow-sm">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-700 font-mono italic">
                # Market Penetration
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-950 leading-[0.85] uppercase">
              Industries <br />
              <span className="text-slate-300 italic">We Empower.</span>
            </h2>
          </div>
          <p className="text-sm text-slate-500 max-w-[280px] lg:text-right leading-relaxed">
            Deploying AI-native engineering excellence across high-stakes global markets.
          </p>
        </motion.div>

        {/* The Industry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item, i) => (
            <Link 
              href={item.link} 
              key={i} 
              className={`block group outline-none ${item.featured ? 'lg:col-span-2' : ''}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -12 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`p-10 rounded-[3rem] border transition-all duration-500 relative flex flex-col justify-between h-[400px] overflow-hidden cursor-pointer ${
                  item.featured 
                  ? 'bg-[#020617] border-slate-800 text-white shadow-2xl' 
                  : 'bg-slate-50 border-slate-100 hover:bg-white hover:border-blue-500/20 hover:shadow-2xl hover:shadow-blue-200/20'
                }`}
              >
                {/* Background Accent for Hover */}
                {!item.featured && (
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-all duration-500" />
                )}

                <div className="space-y-6 relative z-10 pointer-events-none">
                  <div className="flex justify-between items-start">
                    <div className={`p-4 rounded-2xl transition-colors duration-300 ${item.featured ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'bg-white text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white'}`}>
                      {item.icon}
                    </div>
                    <div className={`px-3 py-1 rounded-full border text-[9px] font-mono font-black tracking-widest uppercase ${
                      item.featured ? 'bg-white/10 border-white/20 text-blue-400' : 'bg-white border-slate-100 text-slate-400'
                    }`}>
                      {item.status}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className={`text-3xl font-black tracking-tighter uppercase leading-none ${item.featured ? 'text-white' : 'text-slate-950'}`}>
                      {item.name}
                    </h3>
                    <p className={`text-sm font-medium leading-relaxed max-w-[260px] ${item.featured ? 'text-slate-400' : 'text-slate-500'}`}>
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 flex justify-end pointer-events-none">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border ${
                    item.featured 
                    ? 'bg-white/5 border-white/10 text-white group-hover:bg-white group-hover:text-slate-950' 
                    : 'bg-white border-slate-100 text-slate-300 group-hover:bg-blue-600 group-hover:text-white shadow-sm'
                  }`}>
                    <ArrowUpRight size={22} className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;