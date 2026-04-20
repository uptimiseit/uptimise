'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MoveRight, Cpu, Zap, Activity, Target } from 'lucide-react';
import Link from 'next/link';

const PhilosophySectionWhite = () => {
  // Animation Variants
  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  //   },
  // };

  // const fadeInUp = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: { duration: 0.6, ease: "easeInOut" as const },
  //   },
  // };

  // const cardVariants = {
  //   hidden: { opacity: 0, scale: 0.9 },
  //   visible: {
  //     opacity: 1,
  //     scale: 1,
  //     transition: { duration: 0.5, ease: "easeOut" as const },
  //   },
  // };

  return (
    <section className="relative text-slate-900 py-24 px-6 overflow-hidden bg-linear-to-br from-white to-pink-50 flex items-center justify-center">
      
      {/* --- MODERN BLOCK BACKGROUND DESIGN --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02]" />
        
        {/* Engineering Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Decorative Floating "Data Blocks" with Motion */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [12, 15, 12] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-32 h-32 bg-blue-50/50 border border-blue-100 rounded-xl" 
        />
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [-6, -10, -6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 right-20 w-24 h-24 bg-slate-50 border border-slate-100 rounded-lg" 
        />
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,white_80%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          // variants={fadeInUp}
          className="justify-between flex flex-col md:flex-row items-start md:items-center mb-16 space-y-4"
        >
          <span className="text-blue-600 font-mono tracking-widest text-sm uppercase font-bold">
            # Engineering Philosophy
          </span>
          <h2 className="text-3xl md:text-5xl text-left md:text-right font-bold tracking-tight text-slate-900 leading-[0.9]">
            The 100× Engineer <br />
            <span className="text-slate-300">Philosophy.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Column */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            // variants={containerVariants}
            className="space-y-8 font-body text-lg text-slate-600 leading-relaxed"
          >
            <motion.p 
            // variants={fadeInUp}
             className="text-slate-950 text-2xl font-semibold leading-snug">
              The Future of Software Development Is <span className="text-blue-600">AI-Augmented Engineering.</span>
            </motion.p>
            
            <motion.p 
            // variants={fadeInUp}
            >
              For decades, building digital products required large engineering teams working 
              through long development cycles. Projects often moved slowly due to 
              complex coordination, manual workflows, and fragmented processes.
            </motion.p>

            <motion.div 
            // variants={fadeInUp}
             className="h-px bg-slate-100 w-full" />

            <motion.p 
            // variants={fadeInUp}
            >
              Today, a new model is emerging. Advances in artificial intelligence, 
              automation systems, and modern engineering tools are enabling a new class 
              of developers — engineers who can build and ship products 
              significantly faster than traditional teams.
            </motion.p>

            <motion.div 
            // variants={fadeInUp}
            >
              <Link href={"/Explore100x"}>
                <button className="flex items-center gap-4 text-slate-900 group cursor-pointer pt-4 hover:text-blue-600 transition-all duration-300">
                  <span className="font-bold text-xl uppercase tracking-tighter">
                    Explore the 100× Workflow
                  </span>
                  <div className="p-2 rounded-full border border-slate-200 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <MoveRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </div>
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Bento Grid Visual Column */}
          <div className="relative">
            {/* Glow background */}
            <motion.div 
              animate={{ opacity: [0.05, 0.1, 0.05], scale: [1, 1.2, 1] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute -inset-20 bg-blue-400/10 blur-[100px] rounded-full" 
            />
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              // variants={containerVariants}
              className="relative z-10 border border-slate-100 rounded-3xl bg-white/40 backdrop-blur-md p-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)]"
            >
              <div className="grid grid-cols-2 gap-6">
                
                {/* Feature Cards */}
                <motion.div 
                  // variants={cardVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="p-6 bg-white border border-slate-100 rounded-2xl space-y-3 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <Cpu className="text-blue-600 size-5" />
                  </div>
                  <h4 className="text-slate-900 font-bold">AI-Augmented</h4>
                  <p className="text-xs text-slate-500 font-medium">Multiply productivity through orchestrated agents.</p>
                </motion.div>

                <motion.div 
                  // variants={cardVariants}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-white border border-slate-100 rounded-2xl space-y-3 mt-10 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
                    <Zap className="text-purple-600 size-5" />
                  </div>
                  <h4 className="text-slate-900 font-bold">Rapid Velocity</h4>
                  <p className="text-xs text-slate-500 font-medium">Zero friction from idea to production-ready code.</p>
                </motion.div>

                <motion.div 
                  // variants={cardVariants}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-white border border-slate-200 rounded-2xl space-y-3 -mt-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                    <Activity className="text-emerald-600 size-5" />
                  </div>
                  <h4 className="text-slate-900 font-bold">Elite Density</h4>
                  <p className="text-xs text-slate-500 font-medium">Small teams outperforming large agencies.</p>
                </motion.div>

                <motion.div 
                  // variants={cardVariants}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-white border border-slate-100 rounded-2xl space-y-3 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center">
                    <Target className="text-orange-600 size-5" />
                  </div>
                  <h4 className="text-slate-900 font-bold">Product-First</h4>
                  <p className="text-xs text-slate-500 font-medium font-body">
                    Building digital ecosystems, not just software.
                  </p>
                </motion.div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PhilosophySectionWhite;