'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, CheckCircle2, Zap, 
  Maximize, SearchCode, Lock, 
  ArrowRight, Activity
} from 'lucide-react';

const standards = [
  {
    title: "AI-Assisted Code Reviews",
    desc: "Every line of code is audited by dual-layer AI agents and senior human architects.",
    icon: <SearchCode size={24} />,
    metric: "100% Coverage"
  },
  {
    title: "Automated Testing",
    desc: "Continuous regression and unit testing pipelines ensure zero-regression deployments.",
    icon: <CheckCircle2 size={24} />,
    metric: "Zero_Debt"
  },
  {
    title: "Enterprise Security",
    desc: "OWASP-aligned security practices integrated into the automated CI/CD lifecycle.",
    icon: <Lock size={24} />,
    metric: "Hardened"
  },
  {
    title: "Scalable Architecture",
    desc: "Microservices and serverless topologies designed for millions of concurrent users.",
    icon: <Maximize size={24} />,
    metric: "Elastic"
  },
  {
    title: "Performance Optimization",
    desc: "Automated profiling and latency reduction for sub-second response times.",
    icon: <Zap size={24} />,
    metric: "<200ms TTFB"
  }
];

const EnterpriseStandards = () => {
  return (
    <section className="relative bg-white py-32 px-6 overflow-hidden">
      {/* Background Decor: The "Validation" Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200">
              <ShieldCheck className="text-blue-600" size={14} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 font-mono">
                Quality_Protocol::Certified
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black font-header tracking-tighter text-slate-950 leading-[0.85]">
              Enterprise <br />
              <span className="text-blue-600 italic">Standards.</span>
            </h2>
          </div>
          <p className="text-xl text-slate-500 font-body max-w-sm lg:text-right pb-4">
            Our Quality Assurance isn't a phase—it's a fundamental constant of our AI-Native Factory.
          </p>
        </div>

        {/* Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* Featured "Total Quality" Card */}
          <div className="lg:col-span-1 lg:row-span-2 p-10 rounded-[3rem] bg-slate-950 text-white flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10">
               <ShieldCheck size={180} />
            </div>
            
            <div className="space-y-8 relative z-10">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Activity size={32} />
              </div>
              <h3 className="text-4xl font-black font-header leading-tight">
                Zero <br /> Compromise <br /> Engineering.
              </h3>
            </div>

            <div className="space-y-4 relative z-10">
              <p className="text-slate-400 font-body text-sm leading-relaxed">
                We implement a "Security-First" and "Performance-Always" philosophy across every project module.
              </p>
              <div className="flex items-center gap-4 text-blue-400 font-mono text-[10px] font-bold tracking-[0.2em]">
                <span>UPTIME: 99.99%</span>
                <span>FAIL_SAFE: ACTIVE</span>
              </div>
            </div>
          </div>

          {/* Standard Metric Cards */}
          {standards.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 rounded-[2.5rem] bg-white border border-slate-100 flex flex-col justify-between group hover:border-blue-500/20 hover:shadow-2xl hover:shadow-blue-100/30 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="p-3 bg-slate-50 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <span className="text-[10px] font-mono font-black text-slate-300 border border-slate-100 px-2 py-1 rounded">
                  {item.metric}
                </span>
              </div>

              <div className="space-y-3">
                <h4 className="text-2xl font-black font-header text-slate-950 tracking-tight">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-500 font-body leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-50 flex justify-end">
                <ArrowRight size={16} className="text-slate-200 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default EnterpriseStandards;