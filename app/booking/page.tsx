'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, Bot, Cpu, Zap, ChevronRight, 
  Linkedin, ArrowLeft, Sparkles,
  Command, Globe, Check
} from 'lucide-react';
import Link from 'next/link';

const BookingPage = () => {
  const [charCount, setCharCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Animation variants
  const containerVars = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVars = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => setIsSubmitting(false), 3000);
  };

  return (
    <main className="min-h-screen bg-[#FDFDFF] font-sans pt-20 selection:bg-blue-100 relative overflow-hidden">
      
      {/* Background Layer: The Digital Blueprint */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3" />

      {/* Persistent Top Bar */}
      {/* <nav className="relative z-20 max-w-7xl mx-auto px-6 py-10 flex justify-between flex-col items-center">
        <Link href="/" className="group flex  items-center gap-3">
          <div className="w-10 h-10 bg-slate-950 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
             <ArrowLeft size={18} className="text-white" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 font-mono group-hover:text-slate-950 transition-colors">
            Exit_to_Mainframe
          </span>
        </Link>
        <div className="flex items-center gap-4">
            <div className="hidden md:flex flex-col text-right">
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">System_Status</span>
                <span className="text-xs font-bold text-emerald-500 flex items-center gap-1.5 justify-end">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    LIVE_ARCHITECT_SYNC
                </span>
            </div>
        </div>
      </nav> */}

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-20 pb-32 relative z-10">
        
        {/* --- LEFT: Technical Value Stage --- */}
        <motion.div 
          variants={containerVars}
          initial="hidden"
          animate="visible"
          className="lg:col-span-5 text-center lg:text-left  space-y-16 py-12"
        >
          <div className="space-y-6">
            <motion.div variants={itemVars} className="p-3 bg-blue-50 rounded-2xl w-fit text-blue-600">
                <Sparkles size={24} />
            </motion.div>
            <motion.h1 variants={itemVars} className="text-6xl md:text-8xl font-black font-header tracking-tighter text-slate-950 leading-[0.85]">
              Elite <br />
              <span className="text-blue-600 italic">Access.</span>
            </motion.h1>
            <motion.p variants={itemVars} className="text-xl text-slate-500 font-body leading-relaxed max-w-sm">
              We don't do "sales calls." We do architecture audits. Prepare for a deep-dive into your system's potential.
            </motion.p>
          </div>

          {/* Feature List with Glassmorphic feel */}
          <div className="space-y-10">
            {[
              { icon: <Cpu size={20}/>, title: "System Stress Test", desc: "We identify architectural bottlenecks in your current plan." },
              { icon: <Bot size={20}/>, title: "AI Feasibility", desc: "Determine which agents can automate your core operations." },
              { icon: <ShieldCheck size={20}/>, title: "NDA Protocol", desc: "Every consultation is legally bounded and IP-secure." }
            ].map((item, i) => (
              <motion.div variants={itemVars} key={i} className="flex gap-6 group">
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:border-blue-200 group-hover:shadow-blue-100 transition-all duration-500">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <h5 className="font-black text-slate-950 uppercase tracking-tight text-sm">{item.title}</h5>
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* --- RIGHT: The Engineering Intake Form --- */}
        <div className="lg:col-span-7">
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="bg-white border border-slate-100 rounded-[3.5rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] overflow-hidden"
          >
            {/* Form Header Matrix */}
            <div className="p-12 border-b border-slate-50 bg-[#FDFDFF] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-slate-950">
                    <Command size={160} />
                </div>
                <h3 className="text-3xl font-black text-slate-950 tracking-tighter">PROJECT_INTAKE_v1.0</h3>
                <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mt-2 flex items-center gap-2">
                    <Globe size={14} className="text-blue-500" /> Secure Engineering Gateway
                </p>
            </div>

            <form onSubmit={handleSubmit} className="p-12 space-y-10">
              
              {/* Name & Email Group */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative group">
                  <input type="text" required className="peer w-full bg-transparent border-b-2 border-slate-100 py-3 text-sm font-bold focus:outline-none focus:border-blue-600 transition-all placeholder-transparent" placeholder="Name" />
                  <label className="absolute left-0 -top-3.5 text-[10px] font-black uppercase tracking-widest text-slate-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:font-bold peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-blue-600">Full Name *</label>
                </div>
                <div className="relative group">
                  <input type="email" required className="peer w-full bg-transparent border-b-2 border-slate-100 py-3 text-sm font-bold focus:outline-none focus:border-blue-600 transition-all placeholder-transparent" placeholder="Email" />
                  <label className="absolute left-0 -top-3.5 text-[10px] font-black uppercase tracking-widest text-slate-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:font-bold peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-blue-600">Work Email *</label>
                </div>
              </div>

              {/* Company & Revenue Group */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative group">
                  <input type="text" className="peer w-full bg-transparent border-b-2 border-slate-100 py-3 text-sm font-bold focus:outline-none focus:border-blue-600 transition-all placeholder-transparent" placeholder="Company" />
                  <label className="absolute left-0 -top-3.5 text-[10px] font-black uppercase tracking-widest text-slate-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:font-bold peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-blue-600">Company Name</label>
                </div>
                <div className="relative">
                  <select className="w-full bg-transparent border-b-2 border-slate-100 py-3 text-sm font-bold focus:outline-none focus:border-blue-600 transition-all appearance-none cursor-pointer">
                    <option className="text-slate-900">Revenue: Seed / Pre-revenue</option>
                    <option className="text-slate-900">$1M - $10M</option>
                    <option className="text-slate-900">$10M - $50M</option>
                    <option className="text-slate-900">$50M+</option>
                  </select>
                  <label className="absolute left-0 -top-3.5 text-[10px] font-black uppercase tracking-widest text-blue-600">Company Stage</label>
                </div>
              </div>

              {/* LinkedIn & Link */}
              <div className="relative group">
                <div className="absolute right-0 top-3 text-blue-600">
                    <Linkedin size={18} />
                </div>
                <input type="text" className="peer w-full bg-transparent border-b-2 border-slate-100 py-3 text-sm font-bold focus:outline-none focus:border-blue-600 transition-all placeholder-transparent" placeholder="LinkedIn" />
                <label className="absolute left-0 -top-3.5 text-[10px] font-black uppercase tracking-widest text-slate-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:font-bold peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-blue-600">LinkedIn Profile URL</label>
              </div>

              {/* Message Block */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Brief Project Context</label>
                    <span className="text-[9px] font-mono font-bold text-slate-300">{charCount}/300</span>
                </div>
                <textarea 
                  maxLength={300}
                  onChange={(e) => setCharCount(e.target.value.length)}
                  placeholder="Tell us about the mission-critical challenges you want us to solve..."
                  className="w-full bg-slate-50 border border-slate-100 rounded-3xl p-6 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-600 transition-all min-h-[120px] resize-none"
                />
              </div>

              {/* Action Button */}
              <div className="pt-6">
                <button 
                  disabled={isSubmitting}
                  className="w-full h-20 bg-slate-950 text-white rounded-3xl font-black uppercase tracking-[0.2em] text-xs hover:bg-blue-600 transition-all duration-500 shadow-2xl shadow-blue-900/10 flex items-center justify-center gap-4 group disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-3">
                        <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        <span>Initializing_Audit...</span>
                    </div>
                  ) : (
                    <>
                      Request Strategy Consultation
                      <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Bottom Status Bar */}
            <div className="px-12 py-6 bg-slate-50/50 border-t border-slate-50 flex justify-between items-center">
                <div className="flex items-center gap-3 opacity-40 grayscale group hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                    <Check size={14} className="text-emerald-500" />
                    <span className="text-[9px] font-black tracking-widest font-mono">SOC2_COMPLIANT</span>
                </div>
                <div className="flex items-center gap-3 opacity-40 grayscale group hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                    <Check size={14} className="text-blue-500" />
                    <span className="text-[9px] font-black tracking-widest font-mono">ENCRYPTED_INTAKE</span>
                </div>
            </div>
          </motion.div>
        </div>

      </div>
    </main>
  );
};

export default BookingPage;