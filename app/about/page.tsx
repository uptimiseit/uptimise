'use client';

import React from 'react';
import { motion, easeOut, Variants } from 'framer-motion';
import { 
  Users, Target, Lightbulb, ShieldCheck, 
  Cpu, Zap, Fingerprint, Network, ArrowRight,
  Code2, Globe, Database, Milestone, Bot, 
  Layers, Search, ShieldAlert, Rocket,
  Palette,
  CheckCircle2
} from 'lucide-react';

const ecosystemNodes = [
  { 
    title: "Product Design", 
    desc: "UX Research, UI Systems, and Interactive Prototyping.", 
    icon: <Palette size={20} className="text-blue-500" /> 
  },
  { 
    title: "Software Development", 
    desc: "Scalable Web, Mobile, and SaaS Systems via Modern Stacks.", 
    icon: <Code2 size={20} className="text-purple-500" /> 
  },
  { 
    title: "Cloud Infrastructure", 
    desc: "Automated CI/CD, Containerization, and Reliable Ops.", 
    icon: <Network size={20} className="text-cyan-500" /> 
  },
  { 
    title: "Digital Growth", 
    desc: "SEO, Performance Marketing, and Data-Driven Strategies.", 
    icon: <Zap size={20} className="text-emerald-500" /> 
  }
];

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-blue-100 overflow-hidden">
      
      {/* --- 1. HERO: The Identity Protocol --- */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden bg-slate-950">
        {/* Animated Background Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[40px_40px]" 
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            // variants={staggerContainer}
            className="max-w-4xl space-y-8"
          >
            <motion.div  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
              <Fingerprint size={14} className="text-blue-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 font-mono">
                System_Identity::Uptimise_IT
              </span>
            </motion.div>

            <motion.h1  className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-[0.85]">
              Future <br />
              <motion.span 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-blue-600 italic"
              >
                Engineered.
              </motion.span>
            </motion.h1>

            <motion.p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed max-w-2xl">
              Uptimise IT is an <span className="text-white">AI-Native Software Factory</span>. We bridge the gap between human creativity and autonomous execution to build digital platforms that scale.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* --- 2. THE VISION: Architecture of Tomorrow --- */}
      <section className="lg:py-32 py-20 px-6 border-b border-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            // variants={staggerContainer}
            className="space-y-8 text-center lg:text-left"
          >
            <motion.h2  className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter leading-tight uppercase">
              A Shift in <br /> <span className="text-blue-600">Perspective.</span>
            </motion.h2>
            <div className="space-y-6 text-lg text-slate-500 font-medium leading-relaxed">
              <motion.p>
                The future of development belongs to teams that combine <span className="text-slate-950 font-bold">intelligent automation</span> with <span className="text-slate-950 font-bold">elite human engineering.</span>
              </motion.p>
              <motion.p  className="font-bold text-slate-950 border-l-4 border-blue-600 pl-6">
                Our vision is to operate as the world&apos;s most efficient software factory—where complexity is managed by machines, and value is driven by human expertise.
              </motion.p>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1 }}
             className="relative p-10 bg-slate-50 rounded-[4rem] border border-slate-100 overflow-hidden group"
          >
             <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ecosystemNodes.map((node, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                      className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:border-blue-500 transition-all group/node"
                    >
                        <div className="mb-4 group-hover/node:rotate-12 transition-transform">{node.icon}</div>
                        <h4 className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">{node.title}</h4>
                        <p className="text-[11px] font-bold text-slate-950 leading-tight">{node.desc}</p>
                    </motion.div>
                ))}
             </div>
          </motion.div>
        </div>
      </section>

      {/* --- 3. THE ECOSYSTEM: AI-Augmented Engineering --- */}
      <section className="lg:py-32 py-20 px-6 bg-slate-950 text-white relative overflow-hidden">
          <motion.div 
            animate={{ 
              rotate: 360,
              opacity: [0.05, 0.08, 0.05]
            }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 p-24 pointer-events-none text-blue-500"
          >
            <Bot size={400} />
          </motion.div>
          
          <div className="max-w-7xl mx-auto relative z-10 space-y-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="max-w-2xl text-center lg:text-left space-y-4"
            >
                <h4 className="text-blue-400 font-mono text-[10px] font-black uppercase tracking-[0.4em] italic">// Core_Differentiator</h4>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">AI-Assisted <br /> Human-Led.</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { title: "Documentation", desc: "Automated tech-spec generation." },
                 { title: "Scaffolding", desc: "Rapid module generation via AI agents." },
                 { title: "QA Audit", desc: "Predictive bug detection and testing." },
                 { title: "Infrastructure", desc: "Self-healing cloud environments." }
               ].map((item, i) => (
                 <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
                 >
                    <div className="text-blue-500 font-black text-xl font-mono mb-4 italic group-hover:translate-x-2 transition-transform">0{i+1}</div>
                    <h5 className="text-lg font-black mb-2 uppercase tracking-tight">{item.title}</h5>
                    <p className="text-sm text-slate-400 leading-relaxed font-medium">{item.desc}</p>
                 </motion.div>
               ))}
            </div>
          </div>
      </section>

      {/* --- 4. WHO WE WORK WITH: Industry Reach --- */}
      <section className="lg:py-32 py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col lg:flex-row justify-between lg:items-end items-center gap-8 border-b border-slate-100 lg:pb-12 pb-6"
          >
              <h2 className="text-5xl font-black text-slate-950 tracking-tighter uppercase leading-none">Who we <br /> <span className="text-blue-600">Support.</span></h2>
              <p className="text-slate-500 max-w-sm font-medium text-center lg:text-left leading-relaxed italic">
                From early-stage founders to enterprise digital transformation teams.
              </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
                { title: "Startups", desc: "Launching MVPs with maximum engineering velocity.", icon: <Rocket /> },
                { title: "FinTech", desc: "Building secure, high-stakes finance ecosystems.", icon: <ShieldCheck /> },
                { title: "AI Systems", desc: "Integrating intelligent agents into core products.", icon: <Bot /> },
                { title: "Enterprise", desc: "Modernizing legacy platforms for cloud scale.", icon: <Globe /> }
            ].map((client, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-4 group"
                >
                    <div className="p-4 bg-slate-50 rounded-2xl w-fit text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 group-hover:rotate-[360deg]">
                        {client.icon}
                    </div>
                    <h5 className="text-xl font-black text-slate-950 uppercase tracking-tight">{client.title}</h5>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">{client.desc}</p>
                </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. STANDARDS: Technology That Scales --- */}
      <section className="lg:py-24 py-10 px-6 bg-slate-50/50">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto border border-slate-100 rounded-[3.5rem] p-12 lg:p-20 bg-white shadow-xl relative overflow-hidden"
        >
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute top-0 left-0 h-2 bg-blue-600" 
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div className="space-y-6">
                    <h3 className="text-3xl font-black uppercase tracking-tight">Engineering Standards.</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">
                        We don&apos;t build software that simply works. We build technology that lasts. Every platform follows our rigorous SOC2-ready standards.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        "Scalable Architecture", "Clean Maintainable Code",
                        "Secure Infra Design", "CI/CD Automation"
                    ].map((std, i) => (
                        <motion.div 
                          key={i} 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-slate-400"
                        >
                            <CheckCircle2 className="text-blue-600" size={16} /> {std}
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
      </section>

      {/* --- 6. FINAL CTA --- */}
      <section className="lg:py-32 py-20 px-6 text-center">
         <motion.div 
          initial="hidden"
          whileInView="visible"
          // variants={staggerContainer}
          className="max-w-4xl mx-auto space-y-12"
         >
            <motion.h2 className="text-5xl md:text-8xl font-black tracking-tighter text-slate-950 leading-none uppercase">
              Build the <span className="text-blue-600">Future</span> <br /> With Us.
            </motion.h2>
            <motion.div  className="flex flex-wrap justify-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-slate-950 text-white rounded-full font-black uppercase tracking-[0.2em] text-sm hover:bg-blue-600 transition-all shadow-2xl shadow-slate-200"
              >
                  Start Your Project
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-white border border-slate-200 text-slate-950 rounded-full font-black uppercase tracking-[0.2em] text-sm hover:bg-slate-50 transition-all"
              >
                  Book Strategy Call
              </motion.button>
            </motion.div>
         </motion.div>
      </section>
    </main>
  );
};

export default AboutPage;