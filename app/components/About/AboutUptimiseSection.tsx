'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Zap, 
  ShieldCheck, 
  ChevronRight, 
  Binary, 
  Workflow 
} from 'lucide-react';
import Link from 'next/link';

export default function AboutUptimiseSection() {
  return (
    <section className="relative bg-slate-950 py-24 px-6 overflow-hidden">
      {/* Background Engineering Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3b82f605_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Branding & Mission */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 font-mono">
                  Agency_Manifesto_2026
                </span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.85] uppercase">
                Engineering <br />
                <span className="text-blue-500 italic">Continuum.</span>
              </h2>
              
              <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-md">
                Uptimise IT is an AI-native software engineering factory. We bridge the gap between complex technical potential and production-ready software by merging elite human engineering with autonomous AI workflows.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/contact" className="group flex items-center gap-2 text-white font-mono text-[10px] font-black uppercase tracking-[0.3em] border-b border-blue-500 pb-2 transition-all hover:text-blue-400">
                  Initialize Partnership 
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Side: The Pillars (Bento Grid) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Pillar 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-sm space-y-4"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                <Zap size={24} />
              </div>
              <h4 className="text-xl font-black text-white uppercase tracking-tight">AI-Augmented Velocity</h4>
              <p className="text-slate-400 text-xs leading-relaxed font-medium">
                We leverage proprietary AI agents to accelerate development speed by up to 10x without compromising architectural integrity.
              </p>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-sm space-y-4"
            >
              <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center text-blue-400 border border-slate-700">
                <Workflow size={24} />
              </div>
              <h4 className="text-xl font-black text-white uppercase tracking-tight">Architectural Rigor</h4>
              <p className="text-slate-400 text-xs leading-relaxed font-medium">
                Every project follows a "Software Factory" model, ensuring that systems are scalable, modular, and built on enterprise-grade scaffolding.
              </p>
            </motion.div>

            {/* Pillar 3 (Wide Card) */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 p-8 bg-linear-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] relative overflow-hidden group"
            >
              <Binary className="absolute -right-5 -bottom-5 w-48 h-48 text-white/10 -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="space-y-2">
                  <h4 className="text-2xl font-black text-white uppercase tracking-tighter">The Neural Edge.</h4>
                  <p className="text-blue-100 text-xs max-w-sm font-medium">
                    Our AI agents (PM, Coding, QA, and DevOps) work in a recursive loop to ensure 99.9% edge-case detection and zero-touch deployments.
                  </p>
                </div>
                <div className="shrink-0 flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-blue-600 bg-slate-900 flex items-center justify-center">
                       <Cpu size={16} className="text-blue-400" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}