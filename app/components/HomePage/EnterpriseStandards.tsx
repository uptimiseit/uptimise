'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, CheckCircle2, Zap, 
  Maximize, SearchCode, Lock, 
  ArrowRight, Activity, Globe, Scale
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
    <section className="relative bg-white py-10 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-end items-center mb-10 gap-8">
          <div className="max-w-2xl space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200">
              <ShieldCheck className="text-blue-600" size={14} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 font-mono">
                Quality_Protocol::Certified
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-950 leading-[0.85]">
              Enterprise <br />
              <span className="text-blue-600 italic">Standards.</span>
            </h2>
          </div>
          <p className="text-xl text-slate-500 max-w-sm lg:text-right pb-4 leading-relaxed">
            Our Quality Assurance isn't a phase—it's a fundamental constant of our AI-Native Factory.
          </p>
        </div>

        {/* Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* 1. Featured "Total Quality" Card */}
          <div className="lg:col-span-1 lg:row-span-2 p-10 rounded-[3rem] bg-[#020617] text-white flex flex-col justify-between group relative overflow-hidden border border-white/5">
            <div className="absolute top-0 right-0 p-12 opacity-10">
               <ShieldCheck size={180} />
            </div>
            
            <div className="space-y-8 relative z-10">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Activity size={32} />
              </div>
              <h3 className="text-4xl font-black leading-tight tracking-tight">
                Zero <br /> Compromise <br /> Engineering.
              </h3>
            </div>

            <div className="space-y-6 relative z-10">
              <p className="text-slate-400 text-sm leading-relaxed">
                We implement a "Security-First" and "Performance-Always" philosophy across every project module.
              </p>
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="space-y-1">
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Uptime Score</p>
                    <p className="text-xl font-black text-blue-400">99.99%</p>
                </div>
                <div className="space-y-1 text-right">
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Fail-Safe</p>
                    <p className="text-xl font-black text-emerald-400">ACTIVE</p>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Global Network Card */}
          <div className="p-10 rounded-[3rem] bg-blue-50/50 border border-blue-100 flex flex-col justify-between group relative overflow-hidden">
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] font-mono">Global_Latency_Report</span>
                </div>
                <h4 className="text-2xl font-black text-slate-950 mb-2">Deployed Globally.</h4>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">Automatic edge distribution across 32+ data centers.</p>
                <div className="space-y-3">
                    {['US_EAST_1', 'EU_WEST_2', 'AP_SOUTH_1'].map((region) => (
                        <div key={region} className="flex items-center justify-between text-[10px] font-mono font-bold text-slate-400 bg-white/50 p-2 rounded-lg border border-white">
                            <span>{region}</span>
                            <span className="text-emerald-500 uppercase">Optimized</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute -bottom-6 -right-6 text-blue-100 opacity-50">
                <Globe size={120} />
            </div>
          </div>

          {/* 3. NEW CARD: IP Protection & Compliance */}
          <div className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 flex flex-col justify-between group relative overflow-hidden transition-all hover:bg-white hover:shadow-2xl hover:shadow-slate-100">
             <div className="relative z-10">
                <div className="p-3 bg-white rounded-xl text-blue-600 w-fit mb-6 shadow-sm">
                   <Scale size={24} />
                </div>
                <h4 className="text-2xl font-black text-slate-950 mb-2 tracking-tight">IP & Compliance.</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Total code ownership and legal framework adherence.</p>
             </div>
             <div className="mt-8 space-y-2 relative z-10">
                <div className="flex items-center justify-between text-[9px] font-black font-mono text-slate-400 tracking-widest uppercase py-2 border-b border-slate-200/50">
                   <span>GDPR / SOC2</span>
                   <span className="text-blue-600 flex items-center gap-1"><CheckCircle2 size={10}/> Compliant</span>
                </div>
                <div className="flex items-center justify-between text-[9px] font-black font-mono text-slate-400 tracking-widest uppercase py-2 border-b border-slate-200/50">
                   <span>IP Protection</span>
                   <span className="text-blue-600 flex items-center gap-1"><CheckCircle2 size={10}/> 100% Secure</span>
                </div>
             </div>
          </div>

          {/* Standard Metric Cards (Remaining 5) */}
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
                <h4 className="text-xl font-black text-slate-950 tracking-tight">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed">
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