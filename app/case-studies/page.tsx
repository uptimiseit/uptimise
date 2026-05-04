'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Loader2, Plus, 
  ExternalLink, Maximize2, Layers
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
    <main className="min-h-screen bg-white dark:bg-[#080808] transition-colors duration-500">
      
      {/* --- 1. MINIMALIST HERO --- */}
      <section className="pt-48 pb-20 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-blue-600" />
            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-600 font-mono">Archive.v1</span>
          </div>
          
          <h1 className="text-7xl md:text-[10rem] font-black tracking-[ -0.05em] leading-[0.8] text-slate-900 dark:text-white uppercase">
            Work.
          </h1>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pt-10">
            <p className="text-xl text-slate-500 dark:text-slate-400 max-w-xl font-medium leading-tight">
              We build AI-native software and scalable digital infrastructure that redefines industry standards.
            </p>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border border-slate-200 dark:border-white/10 px-4 py-2 rounded-full">
               Total_Deployments: {projects.length}
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- 2. THE IMMERSIVE GRID --- */}
      <section className="px-6 pb-40">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="h-96 flex flex-col items-center justify-center gap-4">
              <Loader2 className="animate-spin text-blue-600" size={32} />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 font-mono">Connecting_Nodes...</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
              {projects.map((project, i) => (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex flex-col"
                >
                  <Link href={project.url} target="_blank" className="space-y-8">
                    {/* The Frame: Clean, Unaffected Image */}
                    <div className="relative aspect-[16/10] w-full bg-slate-100 dark:bg-slate-900 overflow-hidden rounded-sm">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      
                      {/* Hover Overlay - Sophisticated & Functional */}
                      <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-all duration-500 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white dark:bg-blue-600 text-slate-950 dark:text-white flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 shadow-2xl">
                          <Maximize2 size={24} />
                        </div>
                      </div>

                      <div className="absolute top-6 right-6">
                        <span className="px-3 py-1 bg-white/90 dark:bg-black/90 backdrop-blur-md text-[9px] font-black uppercase tracking-widest text-slate-950 dark:text-white rounded-full shadow-sm">
                          {project.tag}
                        </span>
                      </div>
                    </div>

                    {/* Meta Section */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tighter uppercase group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <div className="pt-2">
                           <ArrowRight className="text-slate-300 dark:text-slate-700 group-hover:text-blue-600 dark:group-hover:text-blue-500 group-hover:translate-x-2 transition-all duration-500" size={24} />
                        </div>
                      </div>

                      <p className="text-slate-500 dark:text-slate-400 text-base font-medium leading-relaxed max-w-md line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-3 pt-4">
                        {project.technology.split(',').map((t, idx) => (
                          <span key={idx} className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest flex items-center gap-2">
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

      {/* --- 3. THE "ARCHITECTURE" CTA --- */}
      <section className="bg-slate-50 dark:bg-[#0c0c0c] py-40 px-6 border-t border-slate-100 dark:border-white/5">
         <div className="max-w-7xl mx-auto text-center space-y-12">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-slate-950 dark:text-white uppercase leading-none">
              Have a vision? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Let&apos;s Architect.</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               <Link href="/contact" className="px-12 py-6 bg-slate-950 dark:bg-white text-white dark:text-black rounded-full font-black uppercase tracking-[0.2em] text-xs hover:scale-105 transition-all shadow-2xl">
                 Initialize Project
               </Link>
               <Link href="/services" className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors flex items-center gap-2">
                 Our Capabilities <ArrowRight size={14} />
               </Link>
            </div>
         </div>
      </section>

      {/* --- 4. BOTTOM BAR --- */}
      <footer className="py-10 border-t border-slate-100 dark:border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">
           <span>&copy; 2026 Uptimise IT</span>
           <span className="hidden md:block italic">Quality_Is_Our_Infrastructure</span>
           <span>Jaipur // India</span>
        </div>
      </footer>
    </main>
  );
};

export default CaseStudiesPage;