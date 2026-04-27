'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  Code2, Smartphone, Layers, Bot, Terminal, 
  Cpu, Zap, CheckCircle2, ArrowRight, ShieldCheck,
  Globe, Activity, Server, Search, Box, Rocket, 
  ChevronDown, Lock, Code, Database, Gauge
} from 'lucide-react';

// --- Animation Variants ---
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

// const hoverCard: Variants = {
//   hover: { 
//     y: -10, 
//     transition: { type: "spring", stiffness: 400, damping: 10 } 
//   }
// };

// Data for "What We Build"
const buildItems = [
  { title: "Web Applications", items: ["SaaS Platforms", "Enterprise Apps", "Marketplaces"], icon: <Globe size={20} /> },
  { title: "Mobile Apps", items: ["Kotlin (Android)", "Swift (iOS)", "Flutter"], icon: <Smartphone size={20} /> },
  { title: "SaaS Platforms", items: ["Multi-tenant Arch", "Billing Systems", "Analytics"], icon: <Layers size={20} /> },
  { title: "AI-Powered Apps", items: ["AI Assistants", "Automation Tools", "SaaS AI"], icon: <Bot size={20} /> }
];

// Data for "Common Problems"
const problems = [
  { id: "01", title: "Slow Development Cycles", desc: "Traditional workflows are fragmented. We use AI-assisted engineering to move from concept to functional product 3x faster without sacrificing quality." },
  { id: "02", title: "Scaling Bottlenecks", desc: "Products built quickly often break later. We design cloud-native, auto-scaling architectures that handle growth smoothly from Day 1." },
  { id: "03", title: "Technical Debt & Poor Arch", desc: "Inefficient code leads to expensive redesigns. Our 'Architecture-First' approach ensures modular, clean, and maintainable systems." },
  { id: "04", title: "Complex Integrations", desc: "Connecting AI, payment gateways, and third-party APIs can be messy. We design seamless, secure, and high-performance integration layers." }
];

const DevelopmentServices = () => {
  const [expandedProblem, setExpandedProblem] = useState<string | null>("01");

  return (
    <main className="min-h-screen bg-white font-sans pt-32 pb-20 overflow-hidden">
      
      {/* --- 1. HERO --- */}
      <section className="px-6 mb-32 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            // 
            className="lg:col-span-7 text-center lg:text-left space-y-8"
          >
            <motion.div  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
              <Code2 size={14} className="text-blue-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-700 font-mono">Module::Software_Engineering</span>
            </motion.div>
            <motion.h1  className="text-6xl md:text-8xl font-black text-slate-950 tracking-tighter leading-[0.85]">
              Scalable <br />
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-blue-600 italic"
              >
                Digital Assets.
              </motion.span>
            </motion.h1>
            <motion.p  className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
              Uptimise IT builds reliable, high-performance platforms by combining AI-native workflows with enterprise-grade engineering discipline.
            </motion.p>
            <motion.div  className="flex flex-col lg:flex-row gap-4">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-10 py-5 bg-slate-950 text-white rounded-full font-black uppercase tracking-widest text-xs shadow-xl">
                Start Your Project
              </motion.button>
              <motion.button whileHover={{ backgroundColor: "#f8fafc" }} className="px-10 py-5 bg-white border border-slate-200 text-slate-950 rounded-full font-black uppercase tracking-widest text-xs transition-all">
                Book Strategy Call
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:col-span-5 relative"
          >
             <div className="absolute inset-0 bg-blue-600/10 blur-[100px] rounded-full" />
             <div className="relative bg-slate-50 border border-slate-100 rounded-[3rem] p-10 space-y-6 shadow-2xl">
                <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                   <span className="text-[10px] font-black font-mono text-slate-400 uppercase tracking-widest">Engineering_Sync::Active</span>
                   <Activity size={16} className="text-emerald-500 animate-pulse" />
                </div>
                <div className="space-y-6">
                   <div className="space-y-2">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Build_Velocity</p>
                      <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} animate={{ width: '85%' }} transition={{ duration: 2, delay: 1 }} className="h-full bg-blue-600" />
                      </div>
                   </div>
                   <motion.div 
                    initial="hidden"
                    animate="visible"
                    
                    className="space-y-2"
                   >
                     {["Architecture_Validation", "AI_Scaffolding", "Security_Audit"].map((text, i) => (
                       <motion.p key={i}  className="text-[10px] font-mono text-slate-500 leading-relaxed italic">
                         # {text}::Complete
                       </motion.p>
                     ))}
                   </motion.div>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* --- 2. PROBLEMS --- */}
      <section className="py-24 px-6 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl space-y-4"
          >
             <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-950 uppercase leading-none">Problems We <br /><span className="text-blue-600">Solve.</span></h2>
             <p className="text-slate-500 font-medium italic">// Identifying engineering bottlenecks before they stall your growth.</p>
          </motion.div>
          
          <motion.div 
            
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-4"
          >
            {problems.map((p) => (
              <motion.div 
                key={p.id} 
                
                layout
                onClick={() => setExpandedProblem(expandedProblem === p.id ? null : p.id)}
                className={`p-8 rounded-[2.5rem] border transition-all cursor-pointer ${
                  expandedProblem === p.id ? 'bg-white border-blue-600 shadow-xl' : 'bg-white/50 border-slate-100 hover:border-slate-300'
                }`}
              >
                <div className="flex justify-between items-center">
                  <h4 className="text-xl font-black text-slate-950 uppercase tracking-tight flex items-center gap-4">
                    <span className="text-blue-600 font-mono text-sm">{p.id}</span> {p.title}
                  </h4>
                  <motion.div animate={{ rotate: expandedProblem === p.id ? 180 : 0 }}>
                    <ChevronDown size={20} className="text-slate-400" />
                  </motion.div>
                </div>
                <AnimatePresence>
                  {expandedProblem === p.id && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: 'auto', opacity: 1 }} 
                      exit={{ height: 0, opacity: 0 }} 
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-6 text-slate-500 text-sm leading-relaxed font-medium pl-9 border-l-2 border-blue-50 ml-3">
                        {p.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- 3. WHAT WE BUILD --- */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">Core Build Ecosystem.</h2>
          </motion.div>
          
          <motion.div 
            
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {buildItems.map((card, i) => (
              <motion.div 
                key={i} 
                // 
                whileHover="hover"
                // variants={hoverCard}
                className="bg-white p-10 rounded-[3rem] border border-slate-100 hover:border-blue-600/30 transition-all group"
              >
                <motion.div 
                  whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
                  className="p-4 bg-slate-50 rounded-2xl w-fit text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all"
                >
                  {card.icon}
                </motion.div>
                <h4 className="text-xl font-black text-slate-950 mb-6 uppercase tracking-tight">{card.title}</h4>
                <ul className="space-y-3">
                  {card.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[11px] font-bold text-slate-400 group-hover:text-slate-950 transition-colors">
                      <CheckCircle2 size={12} className="text-blue-600" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- 4. STANDARDS --- */}
      <section className="py-32 px-6 bg-slate-950 text-white relative overflow-hidden">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 p-24 opacity-5 pointer-events-none text-blue-500"
        >
          <ShieldCheck size={400} />
        </motion.div>
        
        <div className="max-w-7xl mx-auto relative z-10 space-y-20">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-white/10 pb-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 font-mono italic">// Quality_Assurance</h4>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">Engineering <br /> Standards.</h2>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-slate-400 max-w-sm font-medium leading-relaxed"
            >
              AI accelerates us, but engineering discipline defines us. We follow SOC2-ready standards across every codebase.
            </motion.p>
          </div>

          <motion.div 
            
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            {[
              { icon: <Box />, title: "Architecture-First", desc: "Validated system topology designed for service boundaries and scale." },
              { icon: <Code />, title: "Modular Clean Code", desc: "Strictly modular patterns to minimize technical debt and maximize maintainability." },
              { icon: <Lock />, title: "Security Protocols", desc: "Zero-trust API designs and secure data encryption integrated into the core." },
              { icon: <Gauge />, title: "Automated Testing", desc: "Unit and regression tests automated within our CI/CD factory pipelines." },
              { icon: <Database />, title: "Scalable Data", desc: "Distributed data architectures to handle millions of concurrent operations." },
              { icon: <Rocket />, title: "Automated DevOps", desc: "Zero-downtime deployments via containerized cloud infrastructure." }
            ].map((std, i) => (
              <motion.div key={i}  className="space-y-4 group cursor-default">
                <motion.div 
                  whileHover={{ scale: 1.2, color: "#3b82f6" }}
                  className="text-blue-500 transition-colors"
                >
                  {std.icon}
                </motion.div>
                <h5 className="text-xl font-black tracking-tight uppercase group-hover:text-blue-400 transition-colors">{std.title}</h5>
                <p className="text-slate-400 text-sm leading-relaxed">{std.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- 5. TECH STACK --- */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
             <h3 className="text-4xl font-black tracking-tight text-slate-950 uppercase italic">The Stack Room.</h3>
          </motion.div>
          <motion.div 
            
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center"
          >
             {[
               { cat: "Frontend", tools: ["Next.js", "React", "Astro"] },
               { cat: "Backend", tools: ["Node.js", "Java", "Python"] },
               { cat: "Cloud", tools: ["AWS", "GCP", "Docker"] },
               { cat: "AI Engine", tools: ["LLMs", "Agents", "LangChain"] }
             ].map((group, i) => (
               <motion.div key={i}  className="space-y-6">
                  <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 font-mono">{group.cat}</h5>
                  <div className="space-y-2">
                     {group.tools.map((t, idx) => (
                       <motion.p 
                        key={idx} 
                        whileHover={{ scale: 1.1, color: "#2563eb", opacity: 1 }}
                        className="text-2xl font-black tracking-tighter text-slate-900 opacity-40 transition-all cursor-default"
                       >
                         {t}
                       </motion.p>
                     ))}
                  </div>
               </motion.div>
             ))}
          </motion.div>
        </div>
      </section>

      {/* --- 6. CTA --- */}
      <section className="px-6">
         <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto bg-blue-600 rounded-[4rem] p-12 md:p-24 text-center text-white space-y-10 relative overflow-hidden"
         >
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff20_1px,transparent_1px)] [background-size:24px_24px]" 
            />
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none relative z-10 uppercase">
                Build Your Next <br /> Product with <span className="italic">Uptimise IT.</span>
            </h2>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative z-10">
              <button     aria-label="Uptimiseit" className="px-12 py-6 bg-white text-blue-600 rounded-full font-black uppercase tracking-[0.2em] text-sm shadow-xl">
                 Start Your Project
              </button>
            </motion.div>
         </motion.div>
      </section>
    </main>
  );
};

export default DevelopmentServices;