
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MoveRight, Cpu, Zap, Activity, Target } from 'lucide-react';
import Link from 'next/link';

const PhilosophySectionDark = () => {
  return (
    <section className="relative text-white py-24 px-6 overflow-hidden bg-gradient-to-br from-slate-950 to-slate-900 flex items-center justify-center">
      
      {/* --- MODERN BLOCK BACKGROUND DESIGN --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* OPTIMIZATION: Eliminated the third-party grainy-gradient fetch entirely. 
          Replaced with an inline base64 inline svg data noise layer to save an HTTP round-trip request.
        */}
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />
        
        {/* Engineering Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff15_1px,transparent_1px)] [background-size:24px_24px]" /> 
        
        {/* Decorative Floating Data Blocks */}
        <motion.div 
          animate={{ y: [0, -15, 0], rotate: [12, 14, 12] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-32 h-32 bg-blue-900/10 border border-blue-800/30 rounded-xl backdrop-blur-sm" 
        />
        
        <motion.div 
          animate={{ y: [0, 15, 0], rotate: [-6, -8, -6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 right-20 w-24 h-24 bg-slate-800/20 border border-slate-700/30 rounded-lg backdrop-blur-sm" 
        />
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_80%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="justify-between flex flex-col md:flex-row items-start md:items-center mb-16 space-y-4">
          <span className="text-blue-400 font-mono tracking-widest text-sm uppercase font-bold">
            # Engineering Philosophy
          </span>
          <h2 className="text-3xl md:text-5xl text-left md:text-right font-bold tracking-tight text-white leading-[0.9]">
            The 100× Engineer <br />
            <span className="text-slate-500">Philosophy.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Column */}
          <div className="space-y-8 font-body text-lg text-slate-400 leading-relaxed">
            <p className="text-white text-2xl font-semibold leading-snug">
              The Future of Software Development Is <span className="text-blue-400">AI-Augmented Engineering.</span>
            </p>
            
            <p>
              For decades, building digital products required large engineering teams working 
              through long development cycles. Projects often moved slowly due to 
              complex coordination, manual workflows, and fragmented processes.
            </p>

            <div className="h-px bg-slate-800 w-full" />

            <p>
              Today, a new model is emerging. Advances in artificial intelligence, 
              automation systems, and modern engineering tools are enabling a new class 
              of developers — engineers who can build and ship products 
              significantly faster than traditional teams.
            </p>

            <div>
              <Link href="/Explore100x">
             <button aria-label="Explore the 100x Workflow" className="flex items-center gap-4 text-white pt-4 pb-4 px-2 min-h-[48px] w-full sm:w-auto">
                  <span className="font-bold text-xl uppercase tracking-tighter">
                    Explore the 100× Workflow
                  </span>
                  <div className="p-2 rounded-full border border-slate-700 group-hover:border-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                    <MoveRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </div>
                </button>
              </Link>
            </div>
          </div>

          {/* Bento Grid Visual Column */}
          <div className="relative">
            <motion.div 
              animate={{ opacity: [0.03, 0.07, 0.03], scale: [1, 1.1, 1] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute -inset-20 bg-blue-600/10 blur-[100px] rounded-full" 
            />
            
            <div className="relative z-10 rounded-3xl backdrop-blur-xl p-2 shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
              <div className="grid grid-cols-2 gap-2">
                
                {/* Feature Cards */}
                <motion.div 
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="p-6 bg-slate-900 border h-60 border-slate-800 rounded-2xl space-y-3 shadow-lg hover:border-slate-700 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <Cpu className="text-blue-400 size-5" />
                  </div>
                  <h3 className="text-white font-bold text-lg">AI-Augmented</h3>
                  <p className="text-xs text-slate-400 font-medium">Multiply productivity through orchestrated agents.</p>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -5 }}
                  className="p-6 bg-slate-900 border h-60 border-slate-800 rounded-2xl space-y-3 shadow-lg hover:border-slate-700 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                    <Zap className="text-purple-400 size-5" />
                  </div>
                  <h3 className="text-white font-bold text-lg">Rapid Velocity</h3>
                  <p className="text-xs text-slate-400 font-medium">Zero friction from idea to production-ready code.</p>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -5 }}
                  className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-3 h-60 shadow-lg hover:border-slate-700 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <Activity className="text-emerald-400 size-5" />
                  </div>
                  <h3 className="text-white font-bold text-lg">Elite Density</h3>
                  <p className="text-xs text-slate-400 font-medium">Small teams outperforming large agencies.</p>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -5 }}
                  className="p-6 bg-slate-900 border h-60 border-slate-800 rounded-2xl space-y-3 shadow-lg hover:border-slate-700 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                    <Target className="text-orange-400 size-5" />
                  </div>
                  <h3 className="text-white font-bold text-lg">Product-First</h3>
                  <p className="text-xs text-slate-400 font-medium font-body">
                    Building digital ecosystems, not just software.
                  </p>
                </motion.div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PhilosophySectionDark;