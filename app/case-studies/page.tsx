'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Settings, CheckCircle2, Terminal, Loader2, 
  Image as ImageIcon, Cpu, ExternalLink, 
  LayoutGrid, Activity, ShieldCheck
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
  status: string;
  isFeatured: boolean;
}

const CaseStudiesPage = () => {
  const [projects, setProjects] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("https://admin.uptimiseit.com/api/case-studies");
        const json = await res.json();
        if (json.success) {
          setProjects(json.data);
        }
      } catch (err) {
        console.error("Failed to load case studies", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <main className="min-h-screen bg-[#020617] text-slate-100 font-sans pt-32 pb-10 overflow-hidden">
      
      {/* --- 1. HERO: MISSION CRITICAL DISPLAY --- */}
      <section className="px-6 mb-24 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto relative z-10 space-y-10"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md">
                <Activity size={14} className="text-blue-400 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-100 font-mono">Archive_Access::Unlocked</span>
              </div>
              <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.8] uppercase">
                Proven <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 italic">Deployments.</span>
              </h1>
            </div>
            
            <div className="max-w-xs space-y-4">
               <div className="h-1 w-20 bg-blue-600" />
               <p className="text-sm text-slate-400 font-mono font-bold leading-relaxed uppercase tracking-wider">
                 A live ledger of high-performance digital ecosystems engineered for the next generation of industry leaders.
               </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- 2. THE GRID: SYSTEM NODES --- */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-40 gap-6">
              <Loader2 className="animate-spin text-blue-500" size={48} />
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-500 font-mono">Syncing_Deployment_History...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {projects.map((project, i) => (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative"
                >
                  <Link href={project.url} target="_blank" className="block relative h-full">
                    {/* Glowing Border Effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[3rem] opacity-0 group-hover:opacity-20 blur transition duration-500" />
                    
                    <div className="relative h-full bg-slate-900/50 border border-white/5 rounded-[3rem] overflow-hidden backdrop-blur-sm transition-all duration-500 flex flex-col">
                      {/* Image Preview (Top) */}
                      <div className="h-80 relative overflow-hidden bg-[#050b1e]">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2563eb10_1px,transparent_1px)] bg-[size:20px_20px] z-10" />
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-20" />
                        
                        <div className="absolute top-8 left-8 z-30 flex items-center gap-2">
                           <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                           <span className="text-[10px] font-black uppercase text-white/50 tracking-widest font-mono">Node::{project.id.toString().padStart(3, '0')}</span>
                        </div>
                      </div>

                      {/* Content (Bottom) */}
                      <div className="p-12 flex-1 flex flex-col justify-between space-y-8">
                        <div className="space-y-4">
                          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">{project.tag}</span>
                          <h3 className="text-4xl font-black uppercase tracking-tighter text-white group-hover:text-blue-400 transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-slate-400 text-sm font-medium leading-relaxed line-clamp-3">
                            {project.description}
                          </p>
                        </div>

                        <div className="pt-8 border-t border-white/5 flex flex-col gap-6">
                           <div className="flex flex-wrap gap-2">
                              {project.technology.split(',').map((t, idx) => (
                                <span key={idx} className="px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/5 text-[9px] font-black font-mono text-slate-500 uppercase">
                                  {t.trim()}
                                </span>
                              ))}
                           </div>
                           <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                 <LayoutGrid size={16} className="text-slate-600" />
                                 <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">{project.status}</span>
                              </div>
                              <div className="flex items-center gap-2 text-blue-500 group-hover:gap-4 transition-all">
                                 <span className="text-[10px] font-black uppercase tracking-widest">Connect_System</span>
                                 <ExternalLink size={14} />
                              </div>
                           </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* --- 3. DASHBOARD METRICS SECTION --- */}
      <section className="py-32 px-6 bg-[#030712] border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-4xl font-black uppercase tracking-tighter">Stack <br /><span className="text-blue-600 italic">Diversity.</span></h2>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">
              Our engineering factory adapts to your requirements, delivering robust architecture across any modern vertical.
            </p>
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Uptime", val: "99.9%", icon: <ShieldCheck size={20}/> },
              { label: "Deployments", val: "250+", icon: <Cpu size={20}/> },
              { label: "Efficiency", val: "3x", icon: <Activity size={20}/> },
              { label: "Precision", val: "100%", icon: <Terminal size={20}/> }
            ].map((stat, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 flex flex-col items-center text-center space-y-3">
                <div className="text-blue-500">{stat.icon}</div>
                <div className="text-2xl font-black text-white">{stat.val}</div>
                <div className="text-[9px] font-black uppercase text-slate-500 tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. FINAL CALL: SYSTEM INITIALIZATION --- */}
      <section className="py-20 px-6 relative">
        <div className="max-w-5xl mx-auto rounded-[4rem] bg-gradient-to-br from-blue-600 to-indigo-900 p-1 bg-opacity-20">
          <div className="bg-[#020617] rounded-[3.8rem] p-16 md:p-24 text-center space-y-10 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,#2563eb10_0%,transparent_100%)]" />
             <div className="relative z-10 space-y-6">
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase">
                  Ready to <br /><span className="text-blue-500 italic">Scale_Up?</span>
                </h2>
                <p className="text-slate-400 font-mono text-xs uppercase tracking-[0.3em] max-w-sm mx-auto">
                  Initialize your success story with Uptimise IT today.
                </p>
             </div>
             
             <div className="relative z-10 pt-4">
                <button className="px-14 py-6 bg-blue-600 text-white rounded-full font-black uppercase tracking-[0.2em] text-sm hover:bg-blue-500 hover:shadow-[0_0_40px_-5px_rgba(37,99,235,0.4)] transition-all">
                  Initialize_Project
                </button>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CaseStudiesPage;