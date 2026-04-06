'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, Layers, Cpu, ShieldCheck, 
  Rocket, TrendingUp, ArrowRight 
} from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Product Discovery",
    desc: "Defining product strategy and business goals.",
    icon: <Search size={20} />,
    color: "bg-blue-600"
  },
  {
    number: "02",
    title: "Architecture Planning",
    desc: "Designing scalable system topologies and schemas.",
    icon: <Layers size={20} />,
    color: "bg-purple-600"
  },
  {
    number: "03",
    title: "AI-Assisted Development",
    desc: "Accelerated coding through orchestrated AI agents.",
    icon: <Cpu size={20} />,
    color: "bg-emerald-600"
  },
  {
    number: "04",
    title: "Automated Testing & QA",
    desc: "Reliability ensured through automated pipelines.",
    icon: <ShieldCheck size={20} />,
    color: "bg-orange-600"
  },
  {
    number: "05",
    title: "Deployment & DevOps",
    desc: "CI/CD enabled stable global deployments.",
    icon: <Rocket size={20} />,
    color: "bg-pink-600"
  },
  {
    number: "06",
    title: "Growth & Optimization",
    desc: "Analytics-driven scaling and product marketing.",
    icon: <TrendingUp size={20} />,
    color: "bg-cyan-600"
  }
];

const DevelopmentProcess = () => {
  return (
    <section className="bg-gradient-to-br from-white to-purple-50 py-10 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header - Left Aligned for Compactness */}
        <div className="mb-10 space-y-4 flex items-center flex-col lg:flex-row justify-between">
        
          <h2 className="text-3xl md:text-5xl font-black font-header tracking-tighter text-slate-950">
            Engineering Lifecycle.
          </h2>
            <span className="text-blue-600 font-mono text-xs font-bold tracking-[0.3em] uppercase">
            # The Factory Protocol
          </span>
        </div>


        {/* The Stepper Content */}
        <div className="relative">
          {/* Central Vertical Line (Visual Anchor) */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-100 hidden md:block" />

          <div className="space-y-4">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative flex items-start gap-8 group"
              >
                {/* The Dot / Number Indicator */}
                <div className="relative z-10 flex-shrink-0 mt-1">
                  <div className={`w-12 h-12 rounded-2xl ${step.color} text-white flex items-center justify-center shadow-lg shadow-blue-100 group-hover:scale-110 transition-transform duration-500`}>
                    {step.icon}
                  </div>
                </div>

                {/* The Compact Card */}
                <div className="flex-grow pb-4">
                  <div className="p-5 rounded-[2rem] bg-slate-50 border border-slate-100 group-hover:bg-white group-hover:shadow-2xl group-hover:shadow-slate-100 transition-all duration-500 group-hover:border-blue-500/20">
                    <div className="flex justify-between items-start mb-1">
                       <h3 className="text-2xl font-black font-header text-slate-950 tracking-tight">
                        {step.title}
                      </h3>
                      <span className="text-xs font-mono font-bold text-slate-300">STEP_{step.number}</span>
                    </div>
                    <p className="text-slate-500 font-body text-sm max-w-2xl">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default DevelopmentProcess;