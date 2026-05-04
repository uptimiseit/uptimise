'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Loader2, Plus, 
  Maximize2, Cpu, Globe, 
  ShieldCheck, Zap, Code2, 
  Binary, Command
} from 'lucide-react';
import Link from 'next/link';

interface CaseStudy {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  tag: string;
  technology: string;
  url: string;
}

const CaseStudiesPage = () => {
  const [projects, setProjects] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("https://admin.uptimiseit.com/api/case-studies");
        const json = await res.json();
        if (json.success) setProjects(json.data);
      } catch (err) {
        console.error("Fetch failed", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <main className="min-h-screen bg-white dark:bg-[#080808] transition-colors duration-500 selection:bg-blue-500 selection:text-white">
      
      {/* --- 1. MINIMALIST HERO --- */}
      <section className="pt-48 pb-20 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-blue-600" />
            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-600 font-mono">Portfolio.v1</span>
          </div>
          
          <h1 className="text-7xl md:text-[11rem] font-black tracking-[-0.06em] leading-[0.75] text-slate-900 dark:text-white uppercase">
            Work.
          </h1>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pt-12">
            <p className="text-2xl text-slate-500 dark:text-slate-400 max-w-2xl font-medium leading-tight tracking-tight">
              We specialize in engineering <span className="text-slate-900 dark:text-white">AI-native ecosystems</span> and digital infrastructure that defines the next generation of industry standards.
            </p>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] border border-slate-200 dark:border-white/10 px-6 py-3 rounded-full bg-slate-50/50 dark:bg-white/5 backdrop-blur-sm">
               Live_Deployments: {projects.length}
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- 2. THE IMMERSIVE GRID --- */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="h-96 flex flex-col items-center justify-center gap-4">
              <Loader2 className="animate-spin text-blue-600" size={32} />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 font-mono">Mapping_System_Nodes...</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32">
              {projects.map((project, i) => (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex flex-col"
                >
                  <Link href={project.url} target="_blank" className="space-y-10">
                    <div className="relative aspect-[16/10] w-full bg-slate-100 dark:bg-[#111] overflow-hidden rounded-xl shadow-sm">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/10 transition-all duration-500 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/90 dark:bg-blue-600/90 backdrop-blur-md text-slate-950 dark:text-white flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 shadow-2xl">
                          <Maximize2 size={22} />
                        </div>
                      </div>
                      <div className="absolute top-6 left-6">
                        <span className="px-4 py-1.5 bg-white/90 dark:bg-black/90 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-slate-950 dark:text-white rounded-lg shadow-sm border border-black/5 dark:border-white/5">
                          {project.tag}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-5 px-2">
                      <div className="flex justify-between items-end">
                        <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter uppercase group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <ArrowRight className="text-slate-300 dark:text-slate-700 group-hover:text-blue-600 dark:group-hover:text-blue-500 group-hover:translate-x-3 transition-all duration-500" size={32} />
                      </div>

                      <p className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-md line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-4 pt-4">
                        {project.technology.split(',').map((t, idx) => (
                          <span key={idx} className="text-[10px] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-widest flex items-center gap-2">
                            <Plus size={10} className="text-blue-600" /> {t.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* --- 3. SCALE METRICS: THE IMPACT --- */}
      <section className="py-32 px-6 bg-slate-50 dark:bg-[#0c0c0c] border-y border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
           {[
             { label: "Architecture Uptime", val: "99.98%", icon: <ShieldCheck /> },
             { label: "Engineering Velocity", val: "3.5x", icon: <Zap /> },
             { label: "Data Integrity", val: "100%", icon: <Command /> },
             { label: "Global Nodes", val: "12+", icon: <Globe /> },
           ].map((metric, i) => (
             <div key={i} className="space-y-4">
                <div className="text-blue-600">{metric.icon}</div>
                <h4 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter">{metric.val}</h4>
                <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest">{metric.label}</p>
             </div>
           ))}
        </div>
      </section>

      {/* --- 4. METHODOLOGY: HOW WE ARCHITECT --- */}
      <section className="py-40 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div className="space-y-10">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white uppercase leading-none">
                Our Build <br /><span className="text-blue-600 italic">Methodology.</span>
              </h2>
              <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                We don't just write code; we architect scalable assets. Our process is rooted in high-fidelity design and AI-native engineering principles.
              </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "AI-First Strategy", desc: "Every module is built to leverage machine intelligence.", icon: <Cpu size={20}/> },
                { title: "Clean Architecture", desc: "Maintainable, testable, and robust codebases.", icon: <Code2 size={20}/> },
                { title: "DevOps Excellence", desc: "Automated pipelines for zero-downtime deployment.", icon: <Binary size={20}/> },
                { title: "Global Scaling", desc: "Edge-ready infrastructure for worldwide reach.", icon: <Globe size={20}/> },
              ].map((item, i) => (
                <div key={i} className="p-8 border border-slate-100 dark:border-white/5 rounded-2xl bg-slate-50/50 dark:bg-white/5 backdrop-blur-sm">
                   <div className="text-blue-600 mb-4">{item.icon}</div>
                   <h5 className="text-sm font-black uppercase tracking-widest text-slate-900 dark:text-white mb-2">{item.title}</h5>
                   <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- 5. THE "ARCHITECTURE" CTA --- */}
      <section className="bg-slate-950 dark:bg-white py-40 px-6 relative overflow-hidden">
         <div className="absolute inset-0 bg-blue-600/10 opacity-20 pointer-events-none" />
         <div className="max-w-7xl mx-auto text-center space-y-12 relative z-10">
            <h2 className="text-6xl md:text-[9rem] font-black tracking-tighter text-white dark:text-slate-950 uppercase leading-[0.8]">
              Have a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 dark:from-blue-600 dark:to-indigo-600">Vision?</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-10">
               <Link href="/contact" className="px-16 py-8 bg-blue-600 dark:bg-slate-950 text-white rounded-full font-black uppercase tracking-[0.2em] text-sm hover:scale-110 transition-all duration-500 shadow-[0_0_50px_-10px_rgba(37,99,235,0.5)]">
                 Initialize Project
               </Link>
            </div>
         </div>
      </section>

      {/* --- 6. BOTTOM BAR --- */}
      <footer className="py-12 px-6 bg-white dark:bg-[#080808]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">
           <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>&copy; 2026 Uptimise IT // All Systems Operational</span>
           </div>
           <div className="hidden md:flex gap-12">
              <span className="italic">Jaipur // India</span>
              <span className="italic">Noida // India</span>
           </div>
           <Link href="/privacy" className="hover:text-blue-600 transition-colors">Privacy_Policy</Link>
        </div>
      </footer>
    </main>
  );
};

export default CaseStudiesPage;