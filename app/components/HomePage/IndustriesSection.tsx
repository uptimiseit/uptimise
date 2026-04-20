'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  Globe, Landmark, GraduationCap, 
  HeartPulse, ShoppingBag, BrainCircuit, 
  Database, Boxes, ArrowUpRight, Sparkles 
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
  },
  {
    name: "Global Scale-Ups",
    icon: <Sparkles size={24} />,
    desc: "Architecting high-availability systems for the next wave of global unicorns.",
    status: "Unicorn_Ready",
    featured: true
  }
];

// --- Animation Variants ---
// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//       delayChildren: 0.2,
//     },
//   },
// };

// const cardVariants: Variants = {
//   hidden: { opacity: 0, y: 30, scale: 0.95 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     scale: 1,
//     transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
//   },
// };

// const iconAnimation: Variants = {
//   initial: { y: 0 },
//   animate: {
//     y: [0, -5, 0],
//     transition: {
//       duration: 3,
//       repeat: Infinity,
//       ease: "easeInOut"
//     }
//   }
// };

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
            <h2 className="text-4xl md:text-6xl font-black font-header tracking-tighter text-slate-950 leading-[0.85] uppercase">
              Industries <br />
              <span className="text-slate-300 italic">We Empower.</span>
            </h2>
          </div>
          <p className="text-sm text-slate-500 font-body max-w-[280px] lg:text-right leading-relaxed">
            Deploying AI-native engineering excellence across high-stakes global markets.
          </p>
        </motion.div>

        {/* The Industry Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          // variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {industries.map((item, i) => (
            <motion.div
              key={i}
              // variants={cardVariants}
              whileHover={{ 
                y: -12,
                transition: { duration: 0.3 }
              }}
              className={`p-10 rounded-[3rem] border transition-all duration-500 group relative flex flex-col justify-between h-[340px] overflow-hidden cursor-default ${
                item.featured 
                ? 'bg-[#020617] border-slate-800 text-white lg:col-span-2 shadow-2xl' 
                : 'bg-slate-50 border-slate-100 hover:bg-white hover:border-blue-500/20 hover:shadow-2xl hover:shadow-blue-200/20'
              }`}
            >
              {/* Background Accent for Hover */}
              {!item.featured && (
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-all duration-500" />
              )}

              <div className="space-y-6 relative z-10">
                <div className="flex justify-between items-start">
                  <motion.div 
                    // variants={iconAnimation}
                    initial="initial"
                    animate="animate"
                    className={`p-4 rounded-2xl ${item.featured ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'bg-white text-blue-600 shadow-sm transition-colors group-hover:bg-blue-600 group-hover:text-white'}`}
                  >
                    {item.icon}
                  </motion.div>
                  <div className={`px-3 py-1 rounded-full border text-[9px] font-mono font-black tracking-widest uppercase ${
                    item.featured ? 'bg-white/10 border-white/20 text-blue-400' : 'bg-white border-slate-100 text-slate-400'
                  }`}>
                    {item.status}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className={`text-3xl font-black font-header tracking-tighter uppercase leading-none ${item.featured ? 'text-white' : 'text-slate-950'}`}>
                    {item.name}
                  </h3>
                  <p className={`text-sm font-body font-medium leading-relaxed max-w-[260px] ${item.featured ? 'text-slate-400' : 'text-slate-500'}`}>
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="relative z-10 flex justify-end">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 45 }}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all border ${
                  item.featured ? 'bg-white/5 border-white/10 text-white hover:bg-white hover:text-slate-950' : 'bg-white border-slate-100 text-slate-300 group-hover:bg-blue-600 group-hover:text-white shadow-sm'
                }`}>
                  <ArrowUpRight size={22} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default IndustriesSection;