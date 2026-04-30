'use client';

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { 
  Cloud, Lock, Zap, Users, CreditCard, BarChart, Layers, Bot, 
  Terminal, ShieldCheck, Cpu, ArrowRight, LayoutDashboard, Webhook, 
  Globe, Activity
} from "lucide-react";

// // --- Animation Variants ---
// const fadeInUp: Variants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     transition: { duration: 0.8, ease: "easeOut" } 
//   }
// };

// const staggerContainer: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15
//     }
//   }
// };

// const hoverScale: Variants = {
//   hover: { 
//     scale: 1.03, 
//     y: -5,
//     transition: { type: "spring", stiffness: 400, damping: 10 } 
//   }
// };

export default function SaasDevelopmentPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-50 blur-[100px] rounded-full -z-10"
        ></motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          
          className="space-y-6"
        >
          <motion.h3  className="text-indigo-600 font-bold tracking-widest uppercase text-xs">
            // SaaS Platform Development
          </motion.h3>
          <motion.h1  className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight">
            Engineering Scalable <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
              Recurring Revenue Engines
            </span>
          </motion.h1>
          <motion.p  className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            We design, build, and scale secure multi-tenant SaaS platforms. We combine AI-native engineering and cloud-native architecture to turn your vision into high-growth software.
          </motion.p>
          
          <motion.div  className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl shadow-md transition-all text-lg block">
                Start Your SaaS Project
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-semibold rounded-xl transition-all text-lg block">
                Consult an Architect
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. CHALLENGES */}
      <section className="py-24 px-6 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-indigo-600 font-bold tracking-widest uppercase text-sm font-mono">01. The Complexities</h3>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">The Challenges of SaaS</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              SaaS applications require complex infrastructure to manage multiple organizations safely. A poorly architected SaaS will suffer from data leaks and crippling technical debt.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {[
              { title: "Data Isolation", desc: "Strict tenant separation.", icon: <ShieldCheck className="text-red-500" /> },
              { title: "Global Latency", desc: "Fast loads worldwide.", icon: <Globe className="text-red-500" /> },
              { title: "Elastic Scaling", desc: "No-crash traffic spikes.", icon: <Zap className="text-red-500" /> },
              { title: "Complex Billing", desc: "Tiered usage & churn.", icon: <CreditCard className="text-red-500" /> },
            ].map((challenge, idx) => (
              <motion.div 
                key={idx} 
                // 
                whileHover="hover"
                // variants={hoverScale}
                className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col gap-3 shadow-sm"
              >
                {challenge.icon}
                <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest">{challenge.title}</h4>
                <p className="text-sm text-slate-500 font-medium">{challenge.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. ARCHITECTURE SOLUTIONS */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 uppercase">SaaS Engineering Solutions</h2>
          <p className="text-lg text-slate-600 leading-relaxed font-medium italic">// Engineering systems, not just code.</p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { title: "Multi-Tenant Core", desc: "Logical and physical separation models tailored to your compliance needs.", icon: <Layers /> },
            { title: "Microservices", desc: "Decoupled backend services allowing components to scale independently.", icon: <Terminal /> },
            { title: "Zero-Trust Security", desc: "Enterprise-grade RBAC, JWT auth, and encrypted data at rest.", icon: <Lock /> }
          ].map((arch, idx) => (
            <motion.div 
              key={idx} 
              
              whileHover="hover"
              // variants={hoverScale}
              className="p-10 bg-white border border-slate-200 rounded-[2.5rem] shadow-sm group cursor-default"
            >
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform">
                {arch.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{arch.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">{arch.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. FEATURES GRID */}
      <section className="py-24 px-6 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center max-w-2xl mx-auto space-y-4"
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 uppercase tracking-tighter">Core Features</h2>
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {[
              { title: "Subscription Billing", icon: <CreditCard size={18} /> },
              { title: "Tenant Management", icon: <Users size={18} /> },
              { title: "Admin Dashboards", icon: <LayoutDashboard size={18} /> },
              { title: "API & Webhooks", icon: <Webhook size={18} /> },
              { title: "Usage Analytics", icon: <BarChart size={18} /> },
              { title: "RBAC Access", icon: <ShieldCheck size={18} /> },
              { title: "Auto-Onboarding", icon: <Zap size={18} /> },
              { title: "Cloud Storage", icon: <Cloud size={18} /> },
            ].map((feat, idx) => (
              <motion.div 
                key={idx} 
                
                whileHover={{ x: 5, color: "#4f46e5" }}
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 font-bold text-xs uppercase tracking-widest text-slate-600 transition-colors"
              >
                <span className="text-indigo-500">{feat.icon}</span>
                {feat.title}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. AI FACTORY (The High-End Section) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-indigo-900 to-[#020617] rounded-[3.5rem] p-8 md:p-16 text-white flex flex-col lg:flex-row items-center gap-16 border border-indigo-500/30 relative overflow-hidden shadow-2xl shadow-indigo-900/40"
        >
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-20 p-32 opacity-10 pointer-events-none"
          >
            <Bot size={500} />
          </motion.div>
          
          <div className="flex-1 space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-[10px] font-black uppercase tracking-widest font-mono">
              <Zap size={14} className="fill-indigo-400" /> System_Protocol::AI_Factory
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">
              Launch 40% Faster.
            </h2>
            <p className="text-lg text-indigo-100/80 leading-relaxed max-w-xl font-medium">
              Uptimise IT utilizes agentic workflows to automate boilerplate, infrastructure, and tests. We focus 100% on your unique logic and complex architecture.
            </p>
            <ul className="space-y-4 pt-4">
              {["Infra Scaffolding", "Automated TDD", "Component Generation"].map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + (i * 0.2) }}
                  className="flex items-center font-bold text-xs uppercase tracking-[0.2em] text-indigo-300"
                >
                  <ShieldCheck className="w-4 h-4 mr-3 text-indigo-400" />{item}
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block w-px h-64 bg-white/10" />
          <div className="flex-1 relative z-10 flex flex-col items-center justify-center">
             <Activity className="text-indigo-400 w-16 h-16 animate-pulse mb-4" />
             <div className="text-4xl font-black font-mono">85%_EFFICIENCY</div>
             <div className="text-[10px] font-mono text-indigo-300 tracking-widest mt-2 uppercase">Core_Logic_Sync_Active</div>
          </div>
        </motion.div>
      </section>

      {/* 7. PROCESS */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 uppercase tracking-tighter leading-none">SaaS Engineering Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Discovery", desc: "Multi-tenant planning." },
              { step: "02", title: "Blueprint", desc: "System architecture." },
              { step: "03", title: "Build", desc: "Sprint-based build." },
              { step: "04", title: "QA Audit", desc: "Load & Security checks." },
              { step: "05", title: "Scale", desc: "CI/CD Deployment." }
            ].map((process, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm relative overflow-hidden group"
              >
                <div className="text-4xl font-black text-slate-100 absolute -top-1 -right-1 group-hover:text-indigo-50 transition-colors font-mono">{process.step}</div>
                <div className="relative z-10">
                  <h4 className="text-lg font-bold text-slate-900 mb-2 mt-4 leading-tight">{process.title}</h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">{process.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA SECTION */}
      <section className="px-6 text-center max-w-4xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter uppercase leading-none">
            Ready to <span className="text-indigo-600 italic">Build?</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
            Let Uptimise IT engineer the platform while you focus on acquiring customers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/booking" className="px-12 py-6 bg-indigo-600 text-white font-black uppercase tracking-widest text-xs rounded-full shadow-xl shadow-indigo-100 block">
                Start Project
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="px-12 py-6 bg-white border-2 border-slate-200 text-slate-800 font-black uppercase tracking-widest text-xs rounded-full block">
                Book Strategy Call
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}