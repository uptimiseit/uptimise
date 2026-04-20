'use client';

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

// --- Animation Variants ---
// const fadeInUp: Variants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     transition: { duration: 0.8, ease: "easeOut" } 
//   }
// };

// const : Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2
//     }
//   }
// };

// const bentoItem: Variants = {
//   hidden: { opacity: 0, scale: 0.95 },
//   visible: { 
//     opacity: 1, 
//     scale: 1, 
//     transition: { duration: 0.6, ease: "easeOut" } 
//   }
// };

export default function WhyUptimisePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 pb-20 overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative pt-40 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.8, 0.6] 
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-50/80 blur-[100px] rounded-full -z-10"
        />
        
        <motion.div
          initial="hidden"
          animate="visible"
          // variants={}
          className="space-y-6"
        >
          <motion.h3  className="text-indigo-600 font-bold tracking-widest uppercase text-xs font-mono">
            // Why_Uptimise_IT
          </motion.h3>
          <motion.h1  className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight">
            A Modern Engineering Partner for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
              Digital Product Innovation
            </span>
          </motion.h1>
          <motion.p  className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Organizations today need technology partners that can design, build, and scale digital platforms efficiently. We combine AI-native workflows and elite product teams.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. Core Philosophy Bento Grid */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          // variants={}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Bento Item 1: AI-Native */}
          <motion.div 
            // variants={bentoItem}
            whileHover={{ y: -5 }}
            className="lg:col-span-2 bg-white p-8 md:p-10 rounded-3xl border border-slate-200 hover:border-indigo-300 hover:shadow-2xl hover:shadow-indigo-50/50 transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 group-hover:rotate-12 transition-transform duration-300">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">AI-Native Engineering Approach</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              We integrate AI-assisted workflows to accelerate documentation, scaffolding, and infrastructure automation.
            </p>
            <p className="text-slate-600 leading-relaxed font-bold border-l-4 border-indigo-600 pl-4">
              Experienced engineers remain responsible for system architecture and performance optimization.
            </p>
          </motion.div>

          {/* Bento Item 2: Architecture First */}
          <motion.div 
            // variants={bentoItem}
            className="bg-[#0B0F19] text-white p-8 md:p-10 rounded-3xl border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Architecture-First</h3>
            <ul className="space-y-2 text-slate-400 text-sm font-mono">
              <li className="flex items-center"><span className="text-indigo-500 mr-2">✦</span> [Sys_Architecture_Plan]</li>
              <li className="flex items-center"><span className="text-indigo-500 mr-2">✦</span> [Stack_Evaluation]</li>
              <li className="flex items-center"><span className="text-indigo-500 mr-2">✦</span> [DB_Structure_Design]</li>
              <li className="flex items-center"><span className="text-indigo-500 mr-2">✦</span> [Infra_Strategy]</li>
            </ul>
          </motion.div>

          {/* Bento Item 3: End-to-End */}
          <motion.div 
            // variants={bentoItem}
            className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 hover:border-indigo-300 shadow-sm transition-all"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Unified Ecosystem</h3>
            <div className="space-y-3">
              {["Product Design", "Software Development", "DevOps & Cloud", "Digital Growth"].map((item, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ x: 5 }}
                  className="flex items-center text-slate-700 font-medium bg-slate-50 px-4 py-3 rounded-xl border border-slate-100"
                >
                  <div className="w-2 h-2 rounded-full bg-indigo-500 mr-3" />
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bento Item 4: Transparent Process */}
          <motion.div 
            // variants={bentoItem}
            className="lg:col-span-2 bg-indigo-600 text-white p-8 md:p-10 rounded-3xl border border-indigo-500 relative overflow-hidden group"
          >
            <motion.div 
              animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" 
            />
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Transparent Process</h3>
                <p className="text-indigo-100 leading-relaxed text-sm">
                  Clear communication and structured phases ensure alignment with business goals at every stage of the lifecycle.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {["Structured Phases", "Clear Milestones", "Regular Updates", "Collaborative Flow"].map((item, i) => (
                  <div key={i} className="flex items-center text-white text-xs font-bold uppercase tracking-widest">
                    <div className="w-6 h-6 rounded bg-white/20 flex items-center justify-center mr-3 font-mono">0{i + 1}</div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 3. Tech Stack & Infrastructure */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-200 mt-12 space-y-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Modern Technology Stack</h2>
          <p className="text-lg text-slate-600">We build using battle-tested frameworks and cloud-native topologies.</p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          // variants={}
          className="flex flex-wrap justify-center gap-4"
        >
          {["Next.js", "React", "Node.js", "Python", "Kotlin", "Flutter", "AWS", "Docker", "Kubernetes"].map((tech, i) => (
             <motion.span 
               key={i} 
               
               whileHover={{ scale: 1.05, backgroundColor: "#f5f3ff", borderColor: "#6366f1", color: "#4f46e5" }}
               className="px-6 py-3 bg-white border border-slate-200 shadow-sm rounded-xl text-slate-800 font-bold text-lg transition-all cursor-default"
             >
               {tech}
             </motion.span>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-slate-100">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-slate-900 italic">Scalable Infrastructure</h3>
            <p className="text-slate-600 leading-relaxed">
              Our DevOps teams design cloud-native systems that support containerized environments and automated CI/CD pipelines.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-slate-900 italic">Long-Term Growth</h3>
            <p className="text-slate-600 leading-relaxed">
              We maintain the technology foundation so you can focus 100% on innovation and market expansion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. Partnering Section */}
      <section className="py-24 px-6 bg-slate-900 text-white text-center rounded-[3rem] mx-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-10"
        >
          <h2 className="text-3xl md:text-4xl font-black tracking-tight uppercase">Partnering with Visionaries</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Startups", "SaaS", "FinTech", "AI Products", "Enterprise"].map((client, i) => (
               <motion.span 
                key={i} 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-slate-300 font-bold text-xs tracking-widest uppercase"
               >
                 {client}
               </motion.span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-32 px-6 text-center max-w-4xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">
            Build the future <br /> with <span className="text-indigo-600">Uptimise IT</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-indigo-600 text-white font-black uppercase tracking-widest text-xs rounded-2xl shadow-xl shadow-indigo-100"
            >
              Start Your Project
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white border-2 border-slate-200 text-slate-900 font-black uppercase tracking-widest text-xs rounded-2xl"
            >
              Book Strategy Call
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}