'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  Code2, Bot, Smartphone, ShoppingCart, 
  Settings, ArrowRight, Layers, Cpu, 
  Globe, CheckCircle2, Terminal, ExternalLink,
  Plus, Minus, Database, Cloud
} from 'lucide-react';

// --- Animation Variants ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const projects = [
  {
    id: "saas-platform",
    category: "SaaS & Cloud",
    title: "Multi-Tenant SaaS Engine",
    problem: "A startup needed a scalable platform to support multiple organizations with secure data separation and rapid feature expansion.",
    solution: "Designed a multi-tenant architecture with isolated database schemas, modular frontend components, and automated AWS deployment pipelines.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Docker", "AWS"],
    impact: "Stable performance across 50+ organizations with 3x faster rollout.",
    icon: <Layers className="text-blue-600" />,
    status: "LIVE_DEPLOYMENT"
  },
  {
    id: "ai-automation",
    category: "AI & Intelligence",
    title: "Workflow Intelligence Hub",
    problem: "Inefficient manual workflows stalling decision-making for a mid-sized enterprise.",
    solution: "Developed an AI-agent cluster that analyzes data streams and triggers automated business logic via LLM-orchestration.",
    tech: ["Python", "OpenAI API", "Node.js", "LangChain", "GCP"],
    impact: "60% reduction in processing time and 99% accuracy.",
    icon: <Bot className="text-purple-600" />,
    status: "SYSTEM_OPTIMIZED"
  },
  {
    id: "mobile-platform",
    category: "Mobile Systems",
    title: "FinTech Mobile Interface",
    problem: "Requirement for a high-security mobile entry point with real-time data sync.",
    solution: "Architected a native-first mobile system using Swift and Kotlin, supported by a Go microservices backend.",
    tech: ["Kotlin", "Swift", "Go", "Redis", "Cloud Infra"],
    impact: "Zero-latency updates and 4.9/5 star rating.",
    icon: <Smartphone className="text-emerald-600" />,
    status: "SCALING_ACTIVE"
  },
  {
    id: "marketplace",
    category: "E-commerce",
    title: "Global Vendor Marketplace",
    problem: "Complex vendor management and payment routing bottlenecks.",
    solution: "Built a distributed marketplace with automated payment splits and real-time sync engine.",
    tech: ["Next.js", "MongoDB", "Stripe", "ElasticSearch"],
    impact: "Supporting 5k+ vendors with sub-second search.",
    icon: <ShoppingCart className="text-orange-600" />,
    status: "MARKET_READY"
  }
];

const CaseStudiesPage = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#FDFDFF] font-sans pt-32 pb-20 overflow-hidden">
      
      {/* --- 1. HERO: The Proof Section --- */}
      <section className="px-6 mb-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-7xl mx-auto relative z-10 text-center space-y-8"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
            <Terminal size={12} className="text-blue-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white font-mono">Proof_Of_Execution_v1.0</span>
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-black text-slate-950 tracking-tighter leading-[0.85]">
            Engineering <br />
            <span className="text-blue-600 italic">Benchmarks.</span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Real technology solutions built by Uptimise IT. From startup MVPs to mission-critical enterprise systems.
          </motion.p>
        </motion.div>
      </section>

      {/* --- 2. THE GALLERY: Project Matrix --- */}
      <section className="px-6 mb-32">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto grid grid-cols-1 gap-6"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              layout
              variants={fadeInUp}
              className={`group relative rounded-[3rem] border transition-all duration-500 overflow-hidden ${
                expandedId === project.id ? 'bg-white border-blue-600 shadow-2xl scale-[1.02]' : 'bg-white border-slate-100 hover:border-slate-300'
              }`}
            >
              <div 
                className="p-10 flex flex-col lg:flex-row justify-between items-center gap-8 cursor-pointer"
                onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
              >
                <div className="flex items-center gap-8 w-full lg:w-auto">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-20 h-20 rounded-3xl flex items-center justify-center transition-all duration-500 ${
                    expandedId === project.id ? 'bg-blue-600 text-white' : 'bg-slate-50 text-slate-400'
                  }`}>
                    {project.icon}
                  </motion.div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 font-mono mb-1 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black text-slate-950 tracking-tighter uppercase">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-6 w-full lg:w-auto justify-between lg:justify-end">
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                        {project.tech.slice(0, 3).map((t, i) => (
                           <motion.div 
                             key={i} 
                             whileHover={{ y: -5 }}
                             className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[8px] font-black font-mono text-slate-400 uppercase"
                           >
                             {t[0]}
                           </motion.div>
                        ))}
                      </div>
                      <span className="text-[10px] font-bold text-slate-300 uppercase font-mono">+{project.tech.length - 3} Stack</span>
                    </div>
                    <motion.div 
                      animate={{ rotate: expandedId === project.id ? 180 : 0 }}
                      className="p-3 rounded-full bg-slate-50 group-hover:bg-blue-600 group-hover:text-white transition-all"
                    >
                       {expandedId === project.id ? <Minus size={20} /> : <Plus size={20} />}
                    </motion.div>
                </div>
              </div>

              <AnimatePresence>
                {expandedId === project.id && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden border-t border-slate-50"
                  >
                    <div className="p-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
                      <div className="lg:col-span-7 space-y-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                           <div className="space-y-3">
                              <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-400 font-mono italic">// The_Challenge</h5>
                              <p className="text-sm text-slate-600 leading-relaxed font-medium">{project.problem}</p>
                           </div>
                           <div className="space-y-3">
                              <h5 className="text-[10px] font-black uppercase tracking-widest text-blue-600 font-mono italic">// Our_Solution</h5>
                              <p className="text-sm text-slate-600 leading-relaxed font-medium">{project.solution}</p>
                           </div>
                        </div>
                        
                        <motion.div 
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          className="p-8 rounded-3xl bg-blue-50 border border-blue-100 flex items-center justify-between group/impact"
                        >
                           <div className="space-y-1">
                              <p className="text-[10px] font-black uppercase tracking-widest text-blue-600 font-mono">Measured_Impact</p>
                              <p className="text-xl font-black text-slate-950 italic">{project.impact}</p>
                           </div>
                           <CheckCircle2 className="text-blue-600" />
                        </motion.div>
                      </div>

                      <div className="lg:col-span-5 space-y-8 bg-slate-50 rounded-3xl p-8 border border-slate-100">
                         <div className="space-y-4">
                            <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Technical_Stack</h5>
                            <div className="flex flex-wrap gap-2">
                               {project.tech.map((t, i) => (
                                  <motion.span 
                                    key={i} 
                                    whileHover={{ scale: 1.05, backgroundColor: "#eff6ff" }}
                                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-[10px] font-bold font-mono text-slate-600"
                                  >
                                    {t}
                                  </motion.span>
                               ))}
                            </div>
                         </div>
                         <div className="pt-6 border-t border-slate-200 flex justify-between items-center">
                            <div>
                               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Instance_Status</p>
                               <p className="text-xs font-bold text-emerald-500 flex items-center gap-1.5 mt-1">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                  {project.status}
                                </p>
                            </div>
                            <button className="flex items-center gap-2 text-xs font-black text-blue-600 hover:gap-3 transition-all uppercase tracking-widest">
                               Explore Architecture <ArrowRight size={14} />
                            </button>
                         </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- 3. APPROACH --- */}
      <section className="py-24 px-6 bg-slate-950 text-white relative overflow-hidden">
          <motion.div 
            animate={{ 
              rotate: 360,
              opacity: [0.03, 0.05, 0.03]
            }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 p-24 pointer-events-none"
          >
            <Settings size={400} />
          </motion.div>
          <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8 text-center lg:text-left"
            >
               <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase">
                 Our Engineering <br /><span className="text-blue-500 italic">Philosophy.</span>
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {["Clean & Maintainable Code", "Automated Pipelines", "Scalable Topology", "AI-Native Sprints"].map((text, i) => (
                    <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="text-blue-400" size={18} />
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-300">{text}</span>
                    </div>
                  ))}
               </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="p-12 rounded-[4rem] bg-white/5 border border-white/10 backdrop-blur-xl"
            >
               <h4 className="text-xl font-black mb-8 uppercase tracking-widest text-blue-400 italic">// Sector_Reach</h4>
               <div className="flex flex-wrap gap-4">
                  {["Startups", "FinTech", "HealthTech", "E-commerce", "AI SaaS", "Enterprise"].map((ind, i) => (
                    <motion.span 
                      key={i} 
                      whileHover={{ scale: 1.1, backgroundColor: "#2563eb" }}
                      className="px-5 py-2.5 bg-white/10 rounded-xl text-[11px] font-black uppercase tracking-widest transition-colors cursor-default"
                    >
                      {ind}
                    </motion.span>
                  ))}
               </div>
            </motion.div>
          </div>
      </section>

      {/* --- 4. FINAL CTA --- */}
      <section className="lg:py-32 py-10 px-6">
         <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto bg-blue-600 rounded-[4rem] p-12 md:p-24 text-center text-white space-y-10 relative overflow-hidden"
         >
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none relative z-10">
                Build Your Success <br /> Story with <span className="italic">Uptimise IT.</span>
            </h2>
            <motion.div whileHover={{ scale: 1.05 }} className="relative z-10">
              <button className="px-12 py-6 bg-slate-950 text-white rounded-full font-black uppercase tracking-[0.2em] text-sm shadow-xl">
                 Start Your Project
              </button>
            </motion.div>
         </motion.div>
      </section>
    </main>
  );
};

export default CaseStudiesPage;