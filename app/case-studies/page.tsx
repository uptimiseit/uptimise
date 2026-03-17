'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, Bot, Smartphone, ShoppingCart, 
  Settings, ArrowRight, Layers, Cpu, 
  Globe, CheckCircle2, Terminal, 
  Plus, Minus, Database, Cloud, BarChart3,
  Briefcase, Zap, Search
} from 'lucide-react';

const featuredProjects = [
  {
    id: "saas",
    title: "SaaS Product Platform",
    category: "SaaS / Web Platform",
    desc: "A scalable multi-tenant SaaS platform designed to support multiple organizations and advanced analytics.",
    features: ["Multi-tenant architecture", "Role-based access", "Subscription & Billing", "Analytics dashboards"],
    tech: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    icon: <Layers size={32} />
  },
  {
    id: "ai-auto",
    title: "AI Automation Platform",
    category: "AI / Automation",
    desc: "An intelligent system designed to automate repetitive workflows using AI-driven decision logic.",
    features: ["Workflow automation", "Data analysis pipelines", "Process execution", "System integrations"],
    tech: ["Python", "LLM Integration", "Node.js", "Cloud Infra"],
    icon: <Zap size={32} />
  },
  {
    id: "mobile",
    title: "Mobile App Platform",
    category: "Mobile Application",
    desc: "High-performance mobile system integrated with scalable APIs and real-time communication.",
    features: ["Secure authentication", "Real-time notifications", "Backend API Sync", "Mobile-first design"],
    tech: ["Kotlin", "Swift", "Node.js", "PostgreSQL"],
    icon: <Smartphone size={32} />
  },
  {
    id: "market",
    title: "Digital Marketplace",
    category: "Marketplace / E-commerce",
    desc: "Scalable marketplace enabling vendors to manage products and process global orders.",
    features: ["Vendor management", "Catalog management", "Payment integration", "Order tracking"],
    tech: ["Next.js", "Node.js", "MongoDB", "AWS"],
    icon: <ShoppingCart size={32} />
  },
  {
    id: "enterprise",
    title: "Enterprise Workflow",
    category: "Enterprise Software",
    desc: "Internal platform designed to streamline operational workflows and team collaboration.",
    features: ["Workflow automation", "Reporting dashboards", "Internal data management", "Process tracking"],
    tech: ["Java", "React", "PostgreSQL", "Cloud Infra"],
    icon: <Briefcase size={32} />
  },
  {
    id: "ai-data",
    title: "AI Data Analytics",
    category: "AI / Data Platform",
    desc: "Data-driven platform designed to process large datasets and generate intelligent insights.",
    features: ["Data ingestion pipelines", "Analytics dashboards", "AI-powered analysis", "Scalable storage"],
    tech: ["Python", "AI Models", "Cloud Infra", "Data Processing"],
    icon: <BarChart3 size={32} />
  }
];

const CaseStudiesPage = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#FDFDFF] font-sans pt-32 pb-20 overflow-hidden">
      
      {/* --- 1. HERO --- */}
      <section className="px-6 mb-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
            <Terminal size={12} className="text-blue-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white font-mono">Proof_Of_Execution_v1.0</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-slate-950 tracking-tighter leading-[0.85]">
            Engineering <br />
            <span className="text-blue-600 italic">Benchmarks.</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            From startup MVPs to mission-critical enterprise systems. 
            Digital platforms designed for high-stakes global markets.
          </p>
        </div>
      </section>

      {/* --- 2. FEATURED PROJECTS GRID --- */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-950">Featured Projects</h2>
            <div className="h-px flex-1 bg-slate-100" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500"
              >
                {/* Top: Abstract Illustration */}
                <div className="h-48 bg-slate-50 relative overflow-hidden flex items-center justify-center border-b border-slate-50">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:20px_20px]" />
                  <div className="relative z-10 text-blue-600 group-hover:scale-110 transition-transform duration-500 opacity-20 group-hover:opacity-100">
                    {project.icon}
                  </div>
                  <div className="absolute bottom-4 left-6">
                    <span className="text-[10px] font-black font-mono text-slate-300 uppercase tracking-widest">{project.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-black text-slate-950 mb-3 group-hover:text-blue-600 transition-colors uppercase tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6 font-medium">
                    {project.desc}
                  </p>

                  <div className="space-y-2 mb-8 flex-1">
                    {project.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[10px] font-bold text-slate-400">
                        <CheckCircle2 size={12} className="text-blue-500" /> {feat}
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-slate-50 flex justify-between items-center">
                    <div className="flex gap-2">
                       {project.tech.slice(0, 2).map((t, idx) => (
                         <span key={idx} className="text-[9px] font-black font-mono bg-slate-50 text-slate-400 px-2 py-1 rounded uppercase">
                           {t}
                         </span>
                       ))}
                    </div>
                    <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-600 group-hover:gap-3 transition-all">
                      Case Study <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. ENGINEERING PHILOSOPHY --- */}
      <section className="py-24 px-6 bg-slate-950 text-white relative overflow-hidden">
         <div className="absolute top-0 right-0 p-24 opacity-5 pointer-events-none">
            <Settings size={400} />
         </div>
         <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
               <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase">
                 Engineering <br /><span className="text-blue-500 italic">Philosophy.</span>
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {["Scalable Architecture", "Clean Maintainable Code", "Automated Pipelines", "AI-Native Sprints"].map((text, i) => (
                    <div key={i} className="flex items-center gap-3">
                       <CheckCircle2 className="text-blue-400" size={18} />
                       <span className="text-xs font-bold uppercase tracking-widest text-slate-300">{text}</span>
                    </div>
                  ))}
               </div>
            </div>
            
            <div className="p-12 rounded-[4rem] bg-white/5 border border-white/10 backdrop-blur-xl">
               <h4 className="text-xl font-black mb-8 uppercase tracking-widest text-blue-400 italic">// Sector_Reach</h4>
               <div className="flex flex-wrap gap-4">
                  {["FinTech", "HealthTech", "E-commerce", "AI SaaS", "Enterprise", "Startups"].map((ind, i) => (
                    <span key={i} className="px-5 py-2.5 bg-white/10 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-blue-600 transition-colors cursor-default">
                      {ind}
                    </span>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* --- 4. FINAL CTA --- */}
      <section className="py-32 px-6">
         <div className="max-w-7xl mx-auto bg-blue-600 rounded-[4rem] p-12 md:p-24 text-center text-white space-y-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff10_1px,transparent_1px)] [background-size:24px_24px]" />
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none relative z-10">
               Build Your Success <br /> Story with <span className="italic">Uptimise IT.</span>
            </h2>
            <div className="flex justify-center gap-4 relative z-10">
              <button className="px-12 py-6 bg-slate-950 text-white rounded-full font-black uppercase tracking-[0.2em] text-sm hover:scale-105 transition-all shadow-xl shadow-slate-200">
                 Start Your Project
              </button>
            </div>
         </div>
      </section>
    </main>
  );
};

export default CaseStudiesPage;