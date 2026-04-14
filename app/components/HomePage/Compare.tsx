'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Check, X, Zap, Users2, Clock, BarChart3, Workflow } from 'lucide-react';

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

const CompareSection = () => {
  const comparisonData = [
    {
      feature: "Team Structure",
      icon: <Users2 size={18} />,
      traditional: "Large, bloated teams",
      uptimise: "Small, elite AI-hybrid squads",
      status: "Efficiency"
    },
    {
      feature: "Workflow Type",
      icon: <Zap size={18} />,
      traditional: "Manual & human-dependent",
      uptimise: "AI-orchestrated automation",
      status: "Velocity"
    },
    {
      feature: "Delivery Speed",
      icon: <Clock size={18} />,
      traditional: "Slow, sequential cycles",
      uptimise: "Accelerated parallel delivery",
      status: "Speed"
    },
    {
      feature: "Operational Cost",
      icon: <BarChart3 size={18} />,
      traditional: "High overhead & sunk costs",
      uptimise: "Optimized production costs",
      status: "ROI"
    },
    {
      feature: "Development Model",
      icon: <Workflow size={18} />,
      traditional: "Sequential waterfall process",
      uptimise: "Parallel AI-assisted engineering",
      status: "Agility"
    }
  ];

  return (
    <section className="relative bg-white py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-12 space-y-4 flex items-center flex-col lg:flex-row justify-between text-center lg:text-left"
        >
          <span className="text-blue-600 font-mono tracking-widest text-sm uppercase font-bold">
            # The Competitive Edge
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-header tracking-tighter text-slate-950 leading-[0.9]">
            Why We Are <br />
            <span className="text-slate-300 italic">Different.</span>
          </h2>
        </motion.div>

        {/* Comparison Table Container */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="border border-slate-100 rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden bg-white shadow-2xl shadow-slate-100"
        >
          
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-slate-950 p-6 text-white items-center">
            <div className="col-span-4 text-[10px] font-black uppercase tracking-widest opacity-50 font-mono">Core Metric</div>
            <div className="col-span-4 text-[10px] font-black uppercase tracking-widest opacity-50 font-mono">Traditional Model</div>
            <div className="col-span-4 text-[10px] font-black uppercase tracking-widest text-blue-400 font-mono flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
               Uptimise Factory
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-slate-50">
            {comparisonData.map((item, i) => (
              <motion.div 
                key={i} 
                variants={rowVariants}
                className="grid grid-cols-12 p-5 lg:p-8 items-center group hover:bg-blue-50/30 transition-colors duration-300 cursor-default"
              >
                
                {/* Metric Label */}
                <div className="col-span-12 lg:col-span-4 flex items-center gap-5 mb-4 lg:mb-0">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="p-3 rounded-xl bg-slate-100 text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm"
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <p className="font-bold text-slate-950 text-xl tracking-tight">{item.feature}</p>
                    <p className="text-[10px] font-mono text-slate-300 font-bold uppercase tracking-widest group-hover:text-blue-400 transition-colors">{item.status}</p>
                  </div>
                </div>

                {/* Traditional Agency Column */}
                <div className="col-span-6 lg:col-span-4 flex items-center gap-3 pr-4 lg:pr-8">
                  <div className="shrink-0 p-1.5 rounded-full bg-red-50 text-red-400">
                    <X size={14} strokeWidth={3} />
                  </div>
                  <p className="text-slate-400 font-body italic text-sm lg:text-base">{item.traditional}</p>
                </div>

                {/* Uptimise Column */}
                <div className="col-span-6 lg:col-span-4 flex items-center gap-3">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5 + (i * 0.1), type: "spring" }}
                    className="shrink-0 p-1.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100"
                  >
                    <Check size={14} strokeWidth={4} />
                  </motion.div>
                  <p className="text-slate-900 font-black font-header text-base lg:text-xl tracking-tight">
                    {item.uptimise}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>

        </motion.div>

        {/* Bottom Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 flex justify-center"
        >
           <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-slate-500 font-body text-sm italic shadow-sm">
              <Zap size={18} className="text-blue-600 animate-bounce" />
              <span>This model delivers up to <span className="text-slate-950 font-bold not-italic">100x higher ROI</span> compared to traditional agency cycles.</span>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompareSection;