// components/100X/AsymmetricBentoMatrix.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Zap, Code2, HelpCircle } from 'lucide-react';

export const AsymmetricBentoMatrix = () => {
  return (
    <section className="bg-white py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Micro Layout Header */}
        <div className="text-left max-w-2xl space-y-4">
          <span className="text-[10px] font-mono font-black text-blue-600 tracking-[0.2em] uppercase">// SYSTEM_PERFORMANCE</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-950 uppercase tracking-tight leading-none">
            Engineered For Pure Velocity.
          </h2>
        </div>

        {/* 4-Part Bento System Grid Matrix Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[240px]">
          
          {/* Card 1: 100x Capability Node (Double Column Height) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-7 md:row-span-2 rounded-[3rem] bg-slate-50 border border-slate-100 p-10 flex flex-col justify-between group transition-all duration-500 hover:shadow-2xl hover:shadow-blue-200/30"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center">
              <Zap size={20} />
            </div>
            <div className="space-y-4">
              <span className="text-[9px] font-mono font-black tracking-widest text-blue-600 uppercase">// EDGE_MIDDLEWARE_ACCELERATION</span>
              <h3 className="text-3xl font-black text-slate-950 uppercase tracking-tight">
                Next-Gen Edge Server Rendering
              </h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-lg">
                We design application routes strictly to bypass server connection bottlenecks. Run dynamic microservice tasks inside localized edge environments to achieve instant content distribution with minimal data weights.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Safe Boundaries (Single Height Square Block) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-5 rounded-[2.5rem] bg-slate-950 p-8 flex flex-col justify-between group border border-white/5 transition-all duration-500"
          >
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-lg bg-white/5 text-blue-400 flex items-center justify-center">
                <Code2 size={18} />
              </div>
              <span className="text-[8px] font-mono font-black text-slate-500 tracking-wider uppercase">// TYPE_SAFE</span>
            </div>
            <div>
              <h4 className="text-lg font-black text-white uppercase tracking-tight mb-1">End-to-End Safety</h4>
              <p className="text-xs text-slate-400 leading-normal">Database schemas connect straight to runtime frontend forms, removing compilation drift.</p>
            </div>
          </motion.div>

          {/* Card 3: Decoupled Modules (Single Height Square Block) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-5 rounded-[2.5rem] bg-blue-50 border border-blue-100/40 p-8 flex flex-col justify-between group transition-all duration-500"
          >
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                <Layers size={18} />
              </div>
              <span className="text-[8px] font-mono font-black text-blue-600 tracking-wider uppercase">// MONOREPO</span>
            </div>
            <div>
              <h4 className="text-lg font-black text-slate-950 uppercase tracking-tight mb-1">Modular Core Libraries</h4>
              <p className="text-xs text-slate-500 leading-normal">Highly isolated UI component structures accelerate feature assembly times by up to 300%.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};