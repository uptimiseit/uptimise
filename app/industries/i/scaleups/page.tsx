'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, Layers, Zap, 
  ShieldCheck, Share2, BarChart3, 
  Settings, ArrowUpRight, Cpu, 
  Users, Activity, Globe 
} from 'lucide-react';
import Link from 'next/link';

// --- Sub-Components ---

const ScaleupCard = ({ icon: Icon, title, desc, isLight }: any) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className={`p-10 rounded-[3rem] border transition-all duration-500 ${
      isLight 
        ? "bg-white border-slate-200 hover:shadow-2xl hover:border-orange-500/50" 
        : "bg-slate-900/50 border-slate-800 hover:border-orange-500/50"
    }`}
  >
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all ${
       isLight ? "bg-orange-600 text-white shadow-lg shadow-orange-200" : "bg-orange-500/10 text-orange-400"
    }`}>
      <Icon size={28} />
    </div>
    <h3 className={`text-2xl font-black uppercase tracking-tighter mb-4 ${isLight ? "text-slate-950" : "text-white"}`}>
      {title}
    </h3>
    <p className={`${isLight ? "text-slate-600" : "text-slate-400"} text-sm leading-relaxed font-medium`}>
      {desc}
    </p>
  </motion.div>
);

export default function ScaleupPage() {
  return (
    <div className="min-h-screen font-sans selection:bg-orange-100 overflow-hidden">
      
      {/* 1. HERO: SYSTEM DARK (The Expansion) */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 bg-slate-950 text-white overflow-hidden">
        {/* Animated Background Pulse */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f9731608_0%,transparent_70%)] animate-pulse" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8">
            <TrendingUp size={14} className="text-orange-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-400 font-mono">Phase::Hyper_Growth_Active</span>
          </div>
          <h1 className="text-6xl md:text-[9rem] font-black tracking-tighter uppercase leading-[0.8] mb-8">
            Scale Without <br />
            <span className="text-orange-500 italic">Limits.</span>
          </h1>
          <p className="max-w-3xl mx-auto text-slate-400 text-lg md:text-xl font-medium leading-relaxed">
            We help venture-backed scaleups solve "Good Problems." From technical debt liquidation to high-concurrency architecture, we engineer for the next 100k users.
          </p>
        </motion.div>
      </section>

      {/* 2. SCALE INDICATORS: PRISTINE LIGHT */}
      <section className="bg-white py-16 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: "Infrastructure Load", val: "99.99%", icon: Activity },
            { label: "Growth Velocity", val: "200%", icon: TrendingUp },
            { label: "Global Reach", val: "50+ Regions", icon: Globe },
            { label: "Total Sessions", val: "100M+", icon: Users }
          ].map((stat, i) => (
            <div key={i} className="space-y-1">
              <stat.icon size={20} className="mx-auto text-orange-600 mb-3" />
              <p className="text-4xl font-black text-slate-950 tracking-tighter">{stat.val}</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CORE CHALLENGES: PRISTINE LIGHT (Bento Grid) */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-white">
        <div className="mb-20 text-center lg:text-left">
            <h2 className="text-5xl md:text-7xl font-black text-slate-950 uppercase tracking-tighter leading-none">
                Engineering for <br /><span className="text-orange-600 italic">Traction.</span>
            </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-slate-950 rounded-[4rem] p-12 relative overflow-hidden group shadow-2xl">
             <Layers className="absolute right-[-20px] bottom-[-20px] w-80 h-80 text-orange-600/5 rotate-12" />
             <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6 leading-none">Technical Debt <br />Liquidation.</h2>
                <p className="text-slate-400 max-w-md leading-relaxed font-medium text-lg">
                   Stop patching, start scaling. We refactor MVP-era codebases into enterprise-grade systems while your team keeps shipping features.
                </p>
                <div className="mt-10 flex gap-4">
                    <div className="px-6 py-3 bg-orange-600 rounded-full text-[10px] font-black text-white uppercase tracking-widest shadow-lg shadow-orange-600/20">Refactor_Ops</div>
                    <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-[10px] font-black text-white uppercase tracking-widest">Legacy_Bridge</div>
                </div>
             </div>
          </div>
          <ScaleupCard isLight icon={Share2} title="High Concurrency" desc="Redesigning API gateways and database schemas to handle sudden spikes in global traffic." />
          <ScaleupCard isLight icon={Cpu} title="AI Integration" desc="Injecting custom LLM pipelines and autonomous agents into existing product ecosystems." />
          <ScaleupCard isLight icon={Settings} title="DevOps Overhaul" desc="Transitioning from manual deployments to zero-touch Kubernetes-driven automation." />
          <ScaleupCard isLight icon={BarChart3} title="Data Pipelines" desc="Building high-speed ETL and analytics engines to turn hyper-growth data into insights." />
        </div>
      </section>

      {/* 4. THE GROWTH STACK: INDUSTRIAL DARK */}
      <section className="py-32 bg-slate-950 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-sm font-mono text-orange-500 uppercase tracking-[0.5em] mb-4">// System_Hardening</h2>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">Global <br /> <span className="text-orange-600 italic">Resilience.</span></h2>
            <p className="text-slate-400 text-lg leading-relaxed font-medium">
              We fortify your product against success. Our scaleup-specific stack is chosen for its ability to handle billions of requests without architectural fatigue.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {['ElasticSearch', 'Redis', 'Kubernetes', 'Kinesis', 'Rust', 'Go-Lang', 'Postgres XL', 'Terraform', 'Next.js'].map((tech) => (
              <div key={tech} className="p-6 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center hover:bg-orange-600/10 transition-colors">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. METHODOLOGY: PRISTINE LIGHT (The Scale Protocol) */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-slate-950">
                The Scale <br /> <span className="text-orange-600 italic">Protocol.</span>
              </h2>
              <p className="text-slate-600 text-lg font-medium leading-relaxed">
                Scaleups move fast. We provide an elite engineering squad that integrates with your team to provide immediate momentum and long-term stability.
              </p>
            </div>
            <div className="lg:col-span-7 space-y-8">
              {[
                { title: "Technical Audit", text: "Identifying bottlenecks in the current architecture and mapping out a 12-month scaling roadmap." },
                { title: "Team Augmentation", text: "Deploying senior engineers who specialize in hyper-growth environments within 48 hours." },
                { title: "Zero-Downtime Refactor", text: "Upgrading core components and infrastructure while your current users stay live and active." },
                { title: "Stability Management", text: "Ongoing SRE and monitoring to ensure your system remains bulletproof during viral growth." }
              ].map((item, i) => (
                <div key={i} className="group p-10 bg-white border border-slate-100 rounded-[3rem] hover:shadow-2xl transition-all">
                  <div className="flex items-center gap-6 mb-4">
                    <span className="text-4xl font-black text-orange-600 opacity-20">0{i + 1}</span>
                    <h4 className="text-2xl font-black uppercase text-slate-950 tracking-tighter">{item.title}</h4>
                  </div>
                  <p className="text-slate-500 leading-relaxed font-medium text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. MARQUEE: ORANGE THEME */}
      <section className="py-16 bg-orange-600 text-white overflow-hidden whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 items-center"
        >
          {Array(8).fill("GROWTH WITHOUT ARCHITECTURAL FATIGUE").map((text, i) => (
            <span key={i} className="text-4xl md:text-6xl font-black tracking-tighter uppercase">{text}</span>
          ))}
        </motion.div>
      </section>

      {/* 7. CTA: INDUSTRIAL DARK (The Horizon) */}
      <section className="py-32 px-6 bg-white text-center">
        <div className="max-w-6xl mx-auto bg-slate-950 p-16 md:p-32 rounded-[5rem] relative overflow-hidden shadow-4xl group">
          <div className="absolute top-0 right-0 p-16 opacity-5">
            <TrendingUp size={300} className="text-orange-500 group-hover:scale-110 transition-transform duration-1000" />
          </div>
          <div className="relative z-10 text-white">
            <h2 className="text-5xl md:text-[8rem] font-black uppercase tracking-tighter mb-12 leading-none">
                Own The <br /> <span className="text-orange-500 italic">Momentum.</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/contact" className="px-14 py-7 bg-orange-600 text-white font-black uppercase tracking-widest text-xs rounded-full hover:scale-105 transition-transform shadow-2xl shadow-orange-900/40 flex items-center gap-3">
                    Consult Our Growth Leads <ArrowUpRight size={18} />
                </Link>
                <button className="px-14 py-7 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-xs rounded-full hover:bg-white hover:text-slate-950 transition-all">
                    Request Scaling Audit
                </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}