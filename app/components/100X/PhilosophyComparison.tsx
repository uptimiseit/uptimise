'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const cardSlideUp: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { type: "spring", stiffness: 100, damping: 15 } 
  }
};

const pulseBullet: Variants = {
  animate: {
    scale: [1, 1.3, 1],
    opacity: [0.5, 1, 0.5],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
  }
};

const PhilosophyComparison = () => {
  return (
    <section className="bg-white py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          
          {/* LEFT: STRUGGLE SIDE */}
          <div className="space-y-8">
            <motion.h2 variants={fadeInLeft} className="text-5xl font-black font-header tracking-tight text-slate-950 uppercase leading-none">
              Why Traditional <br /> 
              <span className="text-slate-300">Models Struggle.</span>
            </motion.h2>
            
            <motion.p variants={fadeInLeft} className="text-lg text-slate-500 leading-relaxed font-medium">
              Large teams introduce **Coordination Overhead**. When you have separate layers for QA, DevOps, and Backend, the &quot;Tax of Communication&quot; slows development to a crawl.
            </motion.p>
            
            <motion.div variants={containerVariants} className="space-y-4">
              {['Fragmented Workflows', 'Sequential Coordination', 'High Operational Complexity'].map((item, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeInLeft}
                  className="flex items-center gap-3 text-slate-400 line-through font-mono text-xs uppercase font-black tracking-widest"
                >
                  <div className="w-4 h-[1px] bg-slate-300" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: THE SOLUTION CARD */}
          <motion.div 
            variants={cardSlideUp}
            whileHover={{ y: -10 }}
            className="p-12 rounded-[3.5rem] bg-blue-600 text-white shadow-2xl shadow-blue-200 relative overflow-hidden group"
          >
            {/* Background Decorative Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full -mr-20 -mt-20 group-hover:bg-white/20 transition-all duration-700" />
            
            <h3 className="text-4xl font-black mb-10 relative z-10 uppercase tracking-tighter">
              The 100× <br /> Multiplier
            </h3>
            
            <div className="space-y-8 relative z-10">
              {[
                { title: "Product-Focused", desc: "Engineers focus on solving problems, not writing boilerplate." },
                { title: "AI-Augmented", desc: "Agents handle documentation, scaffolding, and deployment." },
                { title: "Small Elite Squads", desc: "Radically reduced overhead and faster iteration cycles." }
              ].map((point, i) => (
                <motion.div 
                  key={i} 
                  className="flex gap-6"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                >
                  <div className="h-8 w-8 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0 border border-white/10">
                    <motion.div 
                      variants={pulseBullet}
                      animate="animate"
                      className="h-2 w-2 rounded-full bg-white shadow-[0_0_8px_#fff]" 
                    />
                  </div>
                  <div>
                    <h4 className="font-black text-xl uppercase tracking-tight mb-1">{point.title}</h4>
                    <p className="text-blue-100 text-sm font-medium leading-relaxed">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Accent */}
            <div className="mt-12 pt-8 border-t border-white/10 flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
               <span className="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-blue-200">System_Optimized</span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophyComparison;