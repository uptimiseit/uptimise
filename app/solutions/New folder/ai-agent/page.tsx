'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Search, Bug, 
  Terminal, Zap, Activity, 
  RotateCcw, FlaskConical, CheckCircle2,
  Lock, AlertTriangle, ArrowRight
} from 'lucide-react';
import Link from 'next/link';

// --- Sub-Components ---

const QAFactCard = ({ icon: Icon, title, desc, isLight }: any) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className={`p-8 rounded-[2.5rem] border transition-all duration-300 ${
      isLight 
        ? "bg-white border-slate-200 hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-300" 
        : "bg-slate-900/50 border-slate-800 hover:border-emerald-500/50"
    }`}
  >
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors ${
       isLight ? "bg-emerald-600 text-white" : "bg-emerald-500/10 text-emerald-400"
    }`}>
      <Icon size={24} />
    </div>
    <h3 className={`text-xl font-black uppercase tracking-tight mb-3 ${isLight ? "text-slate-950" : "text-white"}`}>
      {title}
    </h3>
    <p className={`${isLight ? "text-slate-600" : "text-slate-400"} text-sm leading-relaxed`}>
      {desc}
    </p>
  </motion.div>
);

export default function AIQAAgentPage() {
  return (
    <div className="min-h-screen font-sans selection:bg-emerald-500/30">
      
      {/* 1. HERO: DARK THEME (The Fortress) */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 bg-slate-950 text-white overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-600/10 border border-emerald-600/20 mb-8">
            <ShieldCheck size={14} className="text-emerald-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400">Agent_Status: Guarding_Production</span>
          </div>
          <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter uppercase leading-[0.85] mb-8">
            Unbreakable <br />
            <span className="text-emerald-500 italic">Integrity.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl font-medium leading-relaxed">
            Autonomous testing pipelines with 99.9% edge-case detection. Our agents hunt bugs before they reach your users.
          </p>
        </motion.div>
      </section>

      {/* 2. STATS BANNER: LIGHT THEME */}
      <section className="bg-white py-12 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-8">
          {[
            { icon: Search, text: "99.9% Detection", color: "text-emerald-600" },
            { icon: RotateCcw, text: "Zero-Latency Regression", color: "text-emerald-600" },
            { icon: Lock, text: "SOC2 Compliant Testing", color: "text-emerald-600" },
            { icon: Activity, text: "Live Smoke Tests", color: "text-emerald-600" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <item.icon size={20} className={item.color} />
              <span className="text-[11px] font-black text-slate-900 uppercase tracking-widest">{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CAPABILITIES: LIGHT THEME (The Laboratory) */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-white">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
            <h2 className="text-4xl md:text-6xl font-black text-slate-950 uppercase tracking-tighter leading-none">
                Autonomous <br /><span className="text-emerald-600 italic">Bug Hunting.</span>
            </h2>
            <p className="max-w-md text-slate-500 font-medium">
              We deploy agentic swarms that simulate real user behavior to stress-test your infrastructure.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-slate-950 rounded-[3rem] p-12 relative overflow-hidden group shadow-2xl">
             <AlertTriangle className="absolute right-[-20px] bottom-[-20px] w-64 h-64 text-emerald-500/5 rotate-12" />
             <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6">Edge-Case <br />Intelligence.</h2>
             <p className="text-slate-400 max-w-md leading-relaxed font-medium italic">
               "If it can break, our agents will find out how."
             </p>
             <div className="mt-8 flex gap-4">
                <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Self_Healing_Tests</div>
                <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">Visual_Regression</div>
             </div>
          </div>
          <QAFactCard isLight icon={Bug} title="Chaos Injection" desc="Simulating server failures and network latency to ensure high availability." />
          <QAFactCard isLight icon={FlaskConical} title="E2E Mastery" desc="Autonomous navigation through complex UI workflows and checkout funnels." />
          <QAFactCard isLight icon={CheckCircle2} title="Auto-Fix PRs" desc="Agent doesn't just find bugs—it creates the PR to fix the unit test." />
          <QAFactCard isLight icon={ShieldCheck} title="API Validation" desc="Deep contract testing ensuring 100% schema compliance." />
        </div>
      </section>

      {/* 4. TERMINAL: DARK THEME (The Debugger) */}
      <section className="py-32 bg-slate-950 px-6 relative">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent opacity-5" />
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-mono text-emerald-500 uppercase tracking-[0.4em] mb-4">// Continuous_Verification</h2>
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Zero-Trust Pipeline</h2>
          </div>
          <div className="bg-slate-900 rounded-[3rem] border border-slate-800 overflow-hidden shadow-3xl shadow-emerald-500/5">
             <div className="flex items-center justify-between px-8 py-5 bg-slate-800/50 border-b border-slate-800">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-700" />
                  <div className="w-3 h-3 rounded-full bg-slate-700" />
                  <div className="w-3 h-3 rounded-full bg-slate-700" />
                </div>
                <span className="text-[10px] font-mono text-emerald-500/50 uppercase tracking-widest">qa_agent_logs.log</span>
             </div>
             <div className="p-10 font-mono text-sm space-y-4">
                <div className="flex gap-4">
                  <span className="text-emerald-500 font-bold">$</span>
                  <span className="text-slate-300">uptimise qa --target "v2.4.0-release" --mode "aggressive"</span>
                </div>
                <div className="text-emerald-400/80">
                  <p>⠋ Scanning 452 endpoints...</p>
                  <p>⠙ Running visual regression on Chrome/Safari/Mobile...</p>
                  <p>⚠ Edge case found: Race condition in "Parallel_Checkout_Action"</p>
                  <p className="text-blue-400 font-bold">ℹ Generating fix strategy and updating test suite...</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 5. METHODOLOGY: LIGHT THEME (The Strategy) */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-slate-950">
                Predictive <br /> <span className="text-emerald-600 italic">Assurance.</span>
              </h2>
              <p className="text-slate-500 text-lg font-medium leading-relaxed">
                Our QA agents don't wait for code to break. They analyze commits to predict where regressions are most likely to occur.
              </p>
            </div>
            <div className="space-y-10">
              {[
                { title: "Synthetic User Flows", text: "Generating 10,000+ unique user paths to identify UI bottlenecks." },
                { title: "Cross-Environment Sync", text: "Ensuring parity between Dev, Staging, and Production instantly." },
                { title: "Security Probing", text: "Automated penetration testing integrated into every deployment." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center font-black">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-black uppercase text-slate-950 tracking-widest mb-2">{item.title}</h4>
                    <p className="text-slate-500 leading-relaxed font-medium text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. MARQUEE: EMERALD THEME */}
      <section className="py-16 bg-emerald-600 text-white overflow-hidden whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1200] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 items-center"
        >
          {Array(8).fill("RELIABILITY AT THE SPEED OF LIGHT").map((text, i) => (
            <span key={i} className="text-4xl md:text-6xl font-black tracking-tighter uppercase">{text}</span>
          ))}
        </motion.div>
      </section>

      {/* 7. CTA: DARK THEME (The Shield) */}
      <section className="p-10 px-6 bg-white text-center">
        <div className="max-w-5xl mx-auto py-20 bg-slate-950 p-16 md:p-32  rounded-3xl relative overflow-hidden shadow-4xl">
          <div className="absolute top-0 left-0 p-12 opacity-5">
            <ShieldCheck size={300} className="text-emerald-500" />
          </div>
          <div className="relative z-10">
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white mb-12">
                Secure <br /> Your <span className="text-emerald-500 italic">Codebase.</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/contact" className="px-12 py-6 bg-emerald-600 text-white font-black uppercase tracking-widest text-[11px] rounded-full hover:scale-105 transition-transform shadow-2xl shadow-emerald-500/50 flex items-center gap-2">
                    Initialize QA Swap <ArrowRight size={14} />
                </Link>
                <button className="px-12 py-6 bg-white/5 text-white font-black uppercase tracking-widest text-[11px] rounded-full hover:bg-white/10 transition-colors backdrop-blur-md border border-white/10">
                    View Case Studies
                </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}