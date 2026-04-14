'use client';

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { 
  ServerCrash, ShieldAlert, Clock, Coins, 
  Workflow, ArrowRight, Server, Cloud, 
  Lock, CheckCircle2, Database, Layout, 
  RefreshCcw, Cpu, ShieldCheck, ArrowUpRight,
  Users
} from "lucide-react";

// --- Animation Variants ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

const hoverScale: Variants = {
  hover: { 
    scale: 1.02, 
    transition: { type: "spring", stiffness: 400, damping: 10 } 
  }
};

export default function EnterpriseModernizationPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-100 pb-20 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8 overflow-hidden">
        {/* Corporate Ambient Glow */}
        <motion.div 
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-cyan-50 blur-[120px] rounded-full -z-10"
        />
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-sm font-bold tracking-wide uppercase mb-4">
            <RefreshCcw size={16} className="text-cyan-600 animate-spin-slow" /> Enterprise Transformation
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight">
            Modernize Your <br className="hidden md:block" />
            <motion.span 
              animate={{ color: ["#0891b2", "#2563eb", "#0891b2"] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600"
            >
              Legacy Systems
            </motion.span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Transform outdated, fragile software into scalable, cloud-native enterprise platforms. Uptimise IT executes secure, zero-downtime migrations to future-proof your business operations.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl shadow-lg shadow-slate-900/20 hover:bg-slate-800 transition-all text-lg block">
                Start Your Modernization
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg flex items-center justify-center gap-2 block">
                Consult a Solutions Architect <ArrowUpRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. PROBLEMS WITH LEGACY SOFTWARE */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 uppercase">The Cost of Doing Nothing</h2>
            <p className="text-lg text-slate-600 font-medium">Legacy systems are active liabilities that drain budgets and stifle innovation.</p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { title: "Security Risk", desc: "Unsupported frameworks create massive data breach risks.", icon: <ShieldAlert className="text-red-500" /> },
              { title: "Maintenance", desc: "Paying premium rates just to keep outdated lights on.", icon: <Coins className="text-red-500" /> },
              { title: "Instability", desc: "Monolithic architectures that crash under modern load.", icon: <ServerCrash className="text-red-500" /> },
              { title: "Slow Velocity", desc: "Tightly coupled code makes feature updates terrifying.", icon: <Clock className="text-red-500" /> }
            ].map((problem, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                whileHover="hover"
                // variants={hoverScale}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-red-200 transition-all duration-300"
              >
                <div className="mb-6 bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center">{problem.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 uppercase tracking-tight">{problem.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed font-medium">{problem.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. MODERNIZATION STRATEGY */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-cyan-600 font-bold tracking-widest uppercase text-sm font-mono">// Strategic_Execution</h3>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">Risk-Mitigated System Re-Architecture</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              We utilize the <strong>Strangler Fig Pattern</strong>—incrementally replacing legacy functionality with modern microservices until the old system can be safely decommissioned.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Zero-downtime phased migrations",
                "API-first microservices orchestration",
                "Automated legacy data mapping",
                "Parallel run testing for absolute integrity"
              ].map((item, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-center text-slate-800 font-semibold">
                  <CheckCircle2 className="text-cyan-500 w-6 h-6 mr-3 shrink-0" /> {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-900 p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden border border-slate-800"
          >
             <div className="absolute top-0 right-0 p-8 opacity-5"><Workflow size={200} className="text-white" /></div>
             <h3 className="text-2xl font-bold text-white mb-8 relative z-10 flex items-center gap-2"><Cpu className="text-cyan-400" /> System_Orchestration</h3>
             <div className="space-y-4 relative z-10">
               {[
                 { icon: <Cloud />, t: "Re-Platforming", d: "Lift & Reshape migration." },
                 { icon: <Cpu />, t: "Re-Architecting", d: "Microservices standard.", active: true },
                 { icon: <Layout />, t: "UI/UX Vitality", d: "Modern React frontends." }
               ].map((path, i) => (
                 <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    className={`p-5 rounded-2xl border flex gap-4 transition-colors ${path.active ? 'bg-slate-800 border-cyan-500/50 border-l-4' : 'bg-slate-800/50 border-slate-700'}`}
                 >
                    <div className="text-cyan-400 shrink-0 mt-1">{path.icon}</div>
                    <div><h4 className="text-white font-bold uppercase text-xs tracking-widest">{path.t}</h4><p className="text-slate-400 text-xs mt-1">{path.d}</p></div>
                 </motion.div>
               ))}
             </div>
          </motion.div>
        </div>
      </section>

      {/* 4. SYSTEMS WE MODERNIZE */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 uppercase tracking-tighter">Modernization Ecosystem</h2>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Custom ERP Systems", desc: "Centralizing fragmented databases and migrating slow, on-premise tools to cloud-native stacks." },
              { title: "Financial & Core Banking", desc: "Upgrading legacy ledgers to real-time, event-driven systems with bank-grade security." },
              { title: "Supply Chain & Logistics", desc: "Modernizing inventory routing, tracking APIs, and vendor portals for global scale." },
              { title: "Internal Workflow Portals", desc: "Replacing clunky desktop applications with fast, web-based dashboards." }
            ].map((sys, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                    <Database size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{sys.title}</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed pl-16 font-medium">{sys.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. TECHNOLOGY STACK */}
      <section className="py-24 px-6 bg-[#0B0F19] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto relative z-10 space-y-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-white uppercase tracking-tighter">The Modernization Stack</h2>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { category: "Target Backend", items: ["Node.js", "Python", "Go", "GraphQL"] },
              { category: "Target Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind"] },
              { category: "Cloud & DevOps", items: ["Docker & K8s", "AWS / Azure", "Terraform", "CI/CD"] },
              { category: "Data Migration", items: ["PostgreSQL", "MongoDB", "Redis", "Kafka"] },
            ].map((stack, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-[#111827] border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-colors">
                <h4 className="text-cyan-400 font-bold mb-6 tracking-widest uppercase text-xs font-mono">{stack.category}</h4>
                <ul className="space-y-3">
                  {stack.items.map((item, i) => (
                    <li key={i} className="flex items-center text-slate-400 text-sm font-bold">
                      <div className="w-1 h-1 rounded-full bg-cyan-500 mr-3"></div> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 9. SECURITY & COMPLIANCE */}
      <section className="py-24 px-6 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold tracking-widest uppercase font-mono">
              <ShieldCheck size={14} className="text-cyan-400" /> Enterprise_Security
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none">Security is Not <br /><span className="text-cyan-400 italic">Optional.</span></h2>
            <p className="text-lg text-slate-400 leading-relaxed font-medium">
              Legacy systems are prime targets. Our process injects Zero-Trust security protocols directly into your new architecture.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
               {["AES-256 Encryption", "RBAC Auth Models", "SOC2/GDPR Ready", "Auto-Vuln Scanning"].map((sec, idx) => (
                 <motion.div key={idx} whileHover={{ x: 5 }} className="flex items-center gap-3">
                   <Lock className="text-cyan-400 shrink-0 w-4 h-4" />
                   <span className="text-xs font-black uppercase tracking-tighter text-slate-200">{sec}</span>
                 </motion.div>
               ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600/20 to-blue-600/20 blur-3xl rounded-full"></div>
             <div className="bg-slate-800 border border-slate-700 p-8 rounded-[2.5rem] relative z-10 shadow-2xl backdrop-blur-sm">
               <h3 className="text-lg font-bold text-white mb-6 border-b border-slate-700 pb-4 uppercase tracking-widest font-mono text-xs">Frameworks_Supported</h3>
               <ul className="space-y-4">
                 {[
                   {l: "Data Privacy", v: "GDPR_CORE"},
                   {l: "Healthcare", v: "HIPAA_V2"},
                   {l: "Financial", v: "PCI-DSS_V4"},
                   {l: "Cloud Safety", v: "SOC2_TYPE_II"}
                 ].map((item, idx) => (
                   <li key={idx} className="flex justify-between items-center"><span className="text-slate-400 text-sm font-medium">{item.l}</span><span className="px-3 py-1 bg-slate-900 rounded text-[10px] font-bold text-cyan-400 font-mono">{item.v}</span></li>
                 ))}
               </ul>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 10. CTA SECTION */}
      <section className="py-32 px-6 text-center max-w-4xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter uppercase leading-none">
            Modernize <br /><span className="text-cyan-600 italic">Now.</span>
          </h2>
          <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto font-medium mt-10">
            Stop paying the tax on technical debt. Partner with Uptimise IT to architect a secure, modern digital foundation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-10">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-12 py-6 bg-slate-900 text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl shadow-2xl">
              Discuss Modernization
            </motion.button>
          </div>
        </motion.div>
      </section>

    </div>
  );
}