"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal, Cpu, Layout, Sparkles, ArrowUpRight } from "lucide-react";

const WhoWeAre = () => {
 
  const highlights = [
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "AI-Native Engineering",
      desc: "Architecting scalable systems with integrated intelligence.",
    },
    {
      icon: <Layout className="w-5 h-5" />,
      title: "UX/UI Precision",
      desc: "Fusing high-end digital design with motion graphics expertise.",
    },
    {
      icon: <Terminal className="w-5 h-5" />,
      title: "Full-Stack Mastery",
      desc: "Production-ready code using Next.js, TypeScript, and PostgreSQL.",
    },
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-600 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
        //   variants={containerVars}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
        >
          {/* Left Column: Content */}
          <div className="space-y-10">
            <motion.div className="space-y-4">
              <div className="flex items-center gap-2 text-blue-600 font-mono text-[10px] font-black uppercase tracking-[0.3em]">
                <Sparkles size={14} />
                <span>Established_2025</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-slate-950 tracking-tighter leading-none uppercase">
                The Architects of <br />
                <span className="text-blue-600 italic">Digital Evolution.</span>
              </h2>
            </motion.div>

            <motion.p  className="text-lg text-slate-500 leading-relaxed max-w-xl font-medium">
              At <span className="text-slate-950 font-bold">Uptimise IT</span>, we operate as an AI-native 
              software engineering powerhouse. We bridge the gap between 
              complex technical requirements and intuitive user experiences through 
              precision execution and design-led engineering.
            </motion.p>

            <motion.div  className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              {highlights.map((item, i) => (
                <div key={i} className="p-6 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 group">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <h4 className="text-sm font-black text-slate-950 uppercase tracking-tight mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Visual Element */}
          <motion.div 
            // variants={itemVars}
            className="relative"
          >
            <div className="aspect-square bg-slate-950 rounded-[4rem] p-12 overflow-hidden relative group">
              {/* Decorative Code Snippet Style */}
              <div className="font-mono text-[10px] text-blue-400/40 space-y-2 opacity-50">
                <p>const agency = "Uptimise IT";</p>
                <p>const mission = "Scalable Architecture";</p>
                <p>const status = "SOC2_COMPLIANT";</p>
                <div className="h-40" />
                <p>export default precision;</p>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10">
                <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-8 rotate-3 shadow-2xl shadow-blue-500/20">
                  <ArrowUpRight size={40} />
                </div>
                <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-4 leading-none">
                  Uptimise IT <br /> Engineering
                </h3>
                <p className="text-slate-400 text-xs uppercase font-black tracking-widest leading-loose">
                  Next.js • TypeScript • PostgreSQL • AI Agents
                </p>
              </div>

              {/* Glassmorphism card overlay */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 right-10 bg-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-3xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                    <CheckCircle className="text-blue-400 w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-black text-white uppercase tracking-widest">Engineering Lead</p>
                    <p className="text-sm font-bold text-slate-300">Simran Kushrestha</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Helper component
const CheckCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default WhoWeAre;