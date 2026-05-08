"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle2,
  Zap,
  Maximize,
  SearchCode,
  Lock,
  ArrowRight,
  Activity,
  Globe,
  Scale,
} from "lucide-react";

const standards = [
  {
    title: "AI-Assisted Code Reviews",
    desc: "Every line of code is audited by dual-layer AI agents and senior human architects.",
    icon: <SearchCode size={24} />,
    metric: "100% Coverage",
  },
  {
    title: "Automated Testing",
    desc: "Continuous regression and unit testing pipelines ensure zero-regression deployments.",
    icon: <CheckCircle2 size={24} />,
    metric: "Zero_Debt",
  },
  {
    title: "Enterprise Security",
    desc: "OWASP-aligned security practices integrated into the automated CI/CD lifecycle.",
    icon: <Lock size={24} />,
    metric: "Hardened",
  },
  {
    title: "Scalable Architecture",
    desc: "Microservices and serverless topologies designed for millions of concurrent users.",
    icon: <Maximize size={24} />,
    metric: "Elastic",
  },
  {
    title: "Performance Optimization",
    desc: "Automated profiling and latency reduction for sub-second response times.",
    icon: <Zap size={24} />,
    metric: "<200ms TTFB",
  },
];

const EnterpriseStandards = () => {
  return (
    <section className="relative bg-white py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between lg:items-end items-center mb-16 gap-8"
        >
          <div className="max-w-2xl space-y-6 lg:text-left text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200">
              <ShieldCheck className="text-blue-600 animate-pulse" size={14} />
              {/* Increased to 11px and slate-600 for contrast compliance */}
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-600 font-mono">
                Quality_Protocol::Certified
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-950 leading-[0.85] uppercase">
              Enterprise <br />
              <span className="text-blue-600 italic">Standards.</span>
            </h2>
          </div>
          <p className="text-lg text-slate-600 max-w-sm lg:text-right font-medium leading-relaxed">
            Our Quality Assurance isn't a phase—it's a fundamental constant of
            our AI-Native Factory.
          </p>
        </motion.div>

        {/* Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 1. Featured "Total Quality" Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="lg:col-span-1 lg:row-span-2 p-10 rounded-[3rem] bg-[#020617] text-white flex flex-col justify-between group relative overflow-hidden border border-white/5 shadow-2xl"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute top-[-10%] right-[-10%] p-12 opacity-5 pointer-events-none"
            >
              <ShieldCheck size={300} />
            </motion.div>

            <div className="space-y-8 relative z-10">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/40"
              >
                <Activity size={32} className="animate-pulse" />
              </motion.div>
              {/* h3 creates a proper document map under h2 */}
              <h3 className="text-4xl font-black leading-tight tracking-tight uppercase">
                Zero <br /> Compromise <br /> Engineering.
              </h3>
            </div>

            <div className="space-y-6 relative z-10">
              <p className="text-slate-400 text-sm leading-relaxed font-medium">
                We implement a "Security-First" and "Performance-Always"
                philosophy across every project module.
              </p>
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="space-y-1">
                  {/* Changed slate-500 to slate-600 for better contrast */}
                  <p className="text-[11px] font-mono text-slate-600 font-bold uppercase tracking-widest">
                    Uptime Score
                  </p>
                  <p className="text-xl font-black text-blue-600 font-mono">
                    99.99%
                  </p>
                </div>
                <div className="space-y-1 text-right">
                  <p className="text-[11px] font-mono text-slate-500 uppercase tracking-widest">
                    Fail-Safe
                  </p>
                  <div className="flex items-center gap-2 justify-end">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <p className="text-xl font-black text-emerald-400 font-mono">
                      ACTIVE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. Global Network Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="p-10 rounded-[3rem] bg-blue-50/50 border border-blue-100 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-[11px] font-black text-blue-600 uppercase tracking-[0.2em] font-mono">
                  Global_Latency_Report
                </span>
              </div>
              <h3 className="text-2xl font-black text-slate-950 mb-2 uppercase tracking-tighter">
                Deployed Globally.
              </h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed mb-6">
                Automatic edge distribution across 32+ data centers.
              </p>
              <div className="space-y-2">
                {["US_EAST_1", "EU_WEST_2", "AP_SOUTH_1"].map((region, idx) => (
                  <div
                    key={region}
                    className="flex items-center justify-between text-[11px] font-mono font-bold text-slate-600 bg-white/80 p-2 rounded-lg border border-white shadow-sm"
                  >
                    <span>{region}</span>
                    <span className="text-emerald-600 uppercase">
                      Optimized
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 text-blue-200/50 pointer-events-none">
              <Globe size={120} />
            </div>
          </motion.div>

          {/* 3. IP Protection & Compliance */}
          <motion.div
            whileHover={{ y: -5 }}
            className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 flex flex-col justify-between group relative overflow-hidden transition-all hover:bg-white hover:shadow-2xl"
          >
            <div className="relative z-10">
              <div className="p-3 bg-white rounded-xl text-blue-600 w-fit mb-6 shadow-sm border border-slate-100">
                <Scale size={24} />
              </div>
              <h3 className="text-2xl font-black text-slate-950 mb-2 tracking-tighter uppercase">
                IP & Compliance.
              </h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Total code ownership and legal framework adherence.
              </p>
            </div>
            <div className="mt-8 space-y-2 relative z-10">
              {/* Fixed font size and contrast for sub-labels */}
              <div className="flex items-center justify-between text-[11px] font-black font-mono text-slate-600 tracking-widest uppercase py-3 border-b border-slate-200/50">
                <span>GDPR / SOC2</span>
                <span className="text-blue-700 flex items-center gap-1">
                  <CheckCircle2 size={12} strokeWidth={3} /> Compliant
                </span>
              </div>
              <div className="flex items-center justify-between text-[11px] font-black font-mono text-slate-600 tracking-widest uppercase py-3">
                <span>IP Protection</span>
                <span className="text-blue-700 flex items-center gap-1">
                  <CheckCircle2 size={12} strokeWidth={3} /> 100% Secure
                </span>
              </div>
            </div>
          </motion.div>

          {/* Mapping through remaining standards */}
          {standards.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="p-8 rounded-[2.5rem] bg-white border border-slate-100 flex flex-col justify-between group hover:border-blue-500/20 hover:shadow-2xl transition-all duration-500 cursor-default"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="p-4 bg-slate-50 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  {item.icon}
                </div>
                <span className="text-[11px] font-mono font-black text-slate-700 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-lg uppercase tracking-wider group-hover:text-blue-600 transition-colors">
                  {item.metric}
                </span>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-black text-slate-950 tracking-tighter uppercase leading-none">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-50 flex justify-end">
                <ArrowRight
                  size={20}
                  className="text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseStandards;
