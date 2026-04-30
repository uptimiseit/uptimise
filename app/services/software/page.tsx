'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Cpu, Globe, Layers, 
  Settings, Zap, ShieldCheck, 
  Terminal, Database, Rocket,
  ChevronRight, ArrowUpRight, BarChart3
} from 'lucide-react';
import Link from 'next/link';

// --- Sub-Components ---

const EngineeringCard = ({ icon: Icon, title, desc, isLight }: any) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className={`p-10 rounded-[3rem] border transition-all duration-500 ${
      isLight 
        ? "bg-white border-slate-200 hover:shadow-2xl hover:border-blue-400" 
        : "bg-slate-900/50 border-slate-800 hover:border-blue-500/50"
    }`}
  >
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all ${
       isLight ? "bg-slate-950 text-white shadow-lg" : "bg-blue-500/10 text-blue-400"
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

export default function SoftwareEngineeringPage() {
  return (
    <div className="min-h-screen font-sans selection:bg-blue-500/30">
      
      {/* 1. HERO: INDUSTRIAL DARK (The Factory Floor) */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 bg-slate-950 text-white overflow-hidden">
        {/* Background Grid & Noise */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3b82f605_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
            <Settings size={14} className="text-blue-400 animate-spin-slow" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 font-mono">Core::Engineering_Suite_2026</span>
          </div>
          <h1 className="text-6xl md:text-[9rem] font-black tracking-tighter uppercase leading-[0.8] mb-8">
            Engineering <br />
            <span className="text-blue-500 italic">Excellence.</span>
          </h1>
          <p className="max-w-3xl mx-auto text-slate-400 text-lg md:text-xl font-medium leading-relaxed">
            We build enterprise-grade software using a "Software Factory" model—combining AI-native velocity with rigid architectural standards.
          </p>
        </motion.div>

        {/* Floating Metadata */}
        <div className="absolute bottom-10 left-10 hidden lg:block opacity-20 font-mono text-[10px] space-y-1">
          <p>STABLE_BUILD_V4.2</p>
          <p>LATENCY: 14MS</p>
          <p>UPTIME: 99.99%</p>
        </div>
      </section>

      {/* 2. SCALE BANNER: PRISTINE LIGHT */}
      <section className="bg-white py-16 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: "Total Deployments", val: "250+", icon: Rocket },
            { label: "Lines of Clean Code", val: "4.2M", icon: Code2 },
            { label: "System Uptime", val: "99.99%", icon: ShieldCheck },
            { label: "Dev Velocity", val: "10x", icon: Zap }
          ].map((stat, i) => (
            <div key={i} className="space-y-2">
              <stat.icon size={20} className="mx-auto text-blue-600 mb-2" />
              <p className="text-4xl font-black text-slate-950 tracking-tighter">{stat.val}</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CORE SERVICES: PRISTINE LIGHT (Bento Grid) */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-white">
        <div className="mb-20 text-center lg:text-left space-y-4">
            <h2 className="text-5xl md:text-7xl font-black text-slate-950 uppercase tracking-tighter leading-none">
                Full-Stack <br /><span className="text-blue-600 italic">Dominance.</span>
            </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-slate-950 rounded-[4rem] p-12 relative overflow-hidden group shadow-2xl">
             <Layers className="absolute right-[-20px] bottom-[-20px] w-80 h-80 text-blue-600/5 rotate-12" />
             <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6 leading-none">Custom SaaS <br />Engine.</h2>
                <p className="text-slate-400 max-w-md leading-relaxed font-medium text-lg">
                   Scalable multi-tenant architectures designed for high-growth startups and global enterprises. Built with Next.js, Go, and Rust.
                </p>
                <div className="mt-10 flex gap-4">
                    <div className="px-6 py-3 bg-blue-600 rounded-full text-[10px] font-black text-white uppercase tracking-widest shadow-lg shadow-blue-600/20">Scalable_Core</div>
                    <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-[10px] font-black text-white uppercase tracking-widest">Cloud_Native</div>
                </div>
             </div>
          </div>
          <EngineeringCard isLight icon={Database} title="System Migration" desc="Seamlessly moving legacy infrastructure to modern, AI-integrated cloud environments." />
          <EngineeringCard isLight icon={Globe} title="Web Ecosystems" desc="High-performance web applications optimized for SEO, speed, and massive traffic." />
          <EngineeringCard isLight icon={Cpu} title="API Design" desc="Robust, documented, and secure API gateways for cross-platform integration." />
          <EngineeringCard isLight icon={BarChart3} title="Data Platforms" desc="Complex data visualization and processing engines for real-time decision making." />
        </div>
      </section>

      {/* 4. THE TECH STACK: INDUSTRIAL DARK */}
      <section className="py-32 bg-slate-950 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-sm font-mono text-blue-500 uppercase tracking-[0.5em] mb-4">// Technical_Standard</h2>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">Modern <br /> <span className="text-blue-500 italic">Primitives.</span></h2>
            <p className="text-slate-400 text-lg leading-relaxed font-medium">
              We leverage the most stable and performant technologies to ensure your product remains competitive for the next decade.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {['Next.js', 'TypeScript', 'PostgreSQL', 'Docker', 'Kubernetes', 'Go-Lang', 'AWS Bedrock', 'Prisma', 'GraphQL'].map((tech) => (
              <div key={tech} className="p-6 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center hover:bg-blue-600/10 transition-colors">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. METHODOLOGY: PRISTINE LIGHT (The Lifecycle) */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-slate-950">
                The Build <br /> <span className="text-blue-600 italic">Protocol.</span>
              </h2>
              <p className="text-slate-600 text-lg font-medium leading-relaxed">
                Our methodology is rooted in the "Software Factory" model—a structured approach that guarantees predictable delivery and elite quality.
              </p>
            </div>
            <div className="lg:col-span-7 space-y-12">
              {[
                { title: "Architectural Audit", text: "We begin by mapping out the entire system topology to ensure modularity and future-proofing." },
                { title: "Rapid Sprints", text: "Two-week agile cycles with continuous integration, allowing for real-time adjustments." },
                { title: "Automated Hardening", text: "Every deployment passes through AI-QA and security swarms to detect edge-case failures." },
                { title: "Production Deployment", text: "Zero-downtime launches with instant rollback capabilities for maximum reliability." }
              ].map((item, i) => (
                <div key={i} className="group cursor-default p-8 bg-white border border-slate-100 rounded-[2.5rem] hover:shadow-xl transition-all">
                  <div className="flex items-center gap-6 mb-4">
                    <span className="text-4xl font-black text-blue-600 opacity-20 group-hover:opacity-100 transition-opacity">0{i + 1}</span>
                    <h4 className="text-2xl font-black uppercase text-slate-950 tracking-tighter">{item.title}</h4>
                  </div>
                  <p className="text-slate-500 leading-relaxed font-medium text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. MARQUEE: BLUE THEME */}
      <section className="py-16 bg-blue-600 text-white overflow-hidden whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 items-center"
        >
          {Array(8).fill("CODE THAT SCALES BEYOND LIMITS").map((text, i) => (
            <span key={i} className="text-4xl md:text-6xl font-black tracking-tighter uppercase">{text}</span>
          ))}
        </motion.div>
      </section>

      {/* 7. CTA: INDUSTRIAL DARK (The Launchpad) */}
      <section className="py-32 px-6 bg-white text-center">
        <div className="max-w-6xl mx-auto bg-slate-950 p-16 md:p-32 rounded-[5rem] relative overflow-hidden shadow-4xl group">
          <div className="absolute top-0 right-0 p-16 opacity-5">
            <Settings size={300} className="text-blue-500 group-hover:rotate-90 transition-transform duration-1000" />
          </div>
          <div className="relative z-10 text-white">
            <h2 className="text-5xl md:text-9xl font-black uppercase tracking-tighter mb-12 leading-none">
                Build <br /> The <span className="text-blue-500 italic text-8xl md:text-[11rem]">Future.</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/contact" className="px-14 py-7 bg-blue-600 text-white font-black uppercase tracking-widest text-xs rounded-full hover:scale-105 transition-transform shadow-2xl shadow-blue-500/50 flex items-center gap-3">
                    Start Your Project <ArrowUpRight size={18} />
                </Link>
                <button className="px-14 py-7 bg-white/5 text-white font-black uppercase tracking-widest text-xs rounded-full hover:bg-white/10 transition-colors backdrop-blur-md border border-white/10">
                    Book Strategy Call
                </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}