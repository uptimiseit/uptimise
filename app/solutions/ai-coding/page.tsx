'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Terminal, Zap, Bug, 
  GitBranch, Rocket, ShieldCheck, 
  ChevronRight, Cpu, Command, Layers 
} from 'lucide-react';
import Link from 'next/link';

// --- Sub-Components ---

const FeatureCard = ({ icon: Icon, title, desc, isLight }: any) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className={`p-8 rounded-[2.5rem] border transition-all duration-300 ${
      isLight 
        ? "bg-slate-50 border-slate-200 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-300" 
        : "bg-slate-900/50 border-slate-800 hover:border-blue-500/50"
    }`}
  >
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors ${
       isLight ? "bg-blue-600 text-white" : "bg-blue-500/10 text-blue-400"
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

export default function AICodingAgentPage() {
  return (
    <div className="min-h-screen font-sans selection:bg-blue-500/30">
      
      {/* 1. HERO: DARK THEME */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] font-mono text-[10px] pointer-events-none select-none overflow-hidden">
          {Array(15).fill(0).map((_, i) => (
            <div key={i} className="whitespace-nowrap">
              {`const agent = await initAgent({ speed: 'warp', role: 'engineer' }); agent.deploy(); `.repeat(10)}
            </div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20 mb-8">
            <Terminal size={14} className="text-blue-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">System_Status: Optimal</span>
          </div>
          <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter uppercase leading-[0.85] mb-8">
            Code at <br />
            <span className="text-blue-500 italic">Light Speed.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl font-medium">
            Autonomous engineering agents that generate enterprise-grade scaffolding in seconds.
          </p>
        </motion.div>
      </section>

      {/* 2. METRICS: LIGHT THEME */}
      <section className="bg-white py-12 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-8">
          {[
            { icon: Zap, text: "100x Velocity", color: "text-blue-600" },
            { icon: Bug, text: "Zero-Bug Synthesis", color: "text-blue-600" },
            { icon: GitBranch, text: "Auto-PR Reviews", color: "text-blue-600" },
            { icon: Code2, text: "Polyglot Native", color: "text-blue-600" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <item.icon size={20} className={item.color} />
              <span className="text-[11px] font-black text-slate-900 uppercase tracking-widest">{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CAPABILITIES: LIGHT THEME (Bento Grid) */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-white">
        <div className="mb-16 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black text-slate-950 uppercase tracking-tighter">
                Smarter <span className="text-blue-600 italic">Workflows.</span>
            </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-slate-950 rounded-[3rem] p-12 relative overflow-hidden group shadow-2xl">
             <Layers className="absolute right-[-20px] bottom-[-20px] w-64 h-64 text-white/5 rotate-12" />
             <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6">Full-Stack <br />Integration.</h2>
             <p className="text-slate-400 max-w-md leading-relaxed font-medium">
               Our agents understand your entire repository, maintaining context across frontend, backend, and infrastructure layers simultaneously.
             </p>
          </div>
          <FeatureCard isLight icon={ShieldCheck} title="Secure Scans" desc="Automated vulnerability detection integrated into every generation loop." />
          <FeatureCard isLight icon={Command} title="CLI Driven" desc="Control the agent via terminal or your favorite IDE extension." />
          <FeatureCard isLight icon={Cpu} title="Deep Logic" desc="Native support for complex algorithms and microservice design." />
          <FeatureCard isLight icon={Rocket} title="Instant MVP" desc="Go from a blank folder to a deployed microservice in minutes." />
        </div>
      </section>

      {/* 4. TERMINAL: DARK THEME */}
      <section className="py-32 bg-slate-950 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white uppercase tracking-[0.2em]">The Developer Experience</h2>
          </div>
          <div className="bg-slate-900 rounded-[3rem] border border-slate-800 overflow-hidden shadow-2xl shadow-blue-500/10">
             <div className="flex items-center justify-between px-8 py-4 bg-slate-800/50 border-b border-slate-800">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/40" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                  <div className="w-3 h-3 rounded-full bg-green-500/40" />
                </div>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest italic">agent_cli.v2</span>
             </div>
             <div className="p-10 font-mono text-sm space-y-4">
                <div className="flex gap-4">
                  <span className="text-blue-500 font-bold">$</span>
                  <span className="text-slate-300">uptimise code --init "Cloud-native CRM backend"</span>
                </div>
                <div className="text-blue-400/80">
                  <p>⠋ Scaffolding Kubernetes clusters...</p>
                  <p>⠙ Generating Prisma models...</p>
                  <p className="text-emerald-500 font-bold">✔ Build successful. Agent is now training on local patterns.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 5. DIFFERENTIATORS: LIGHT THEME */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] text-slate-950">
            Precision <br /> <span className="text-blue-600 italic">Engineering.</span>
          </h2>
          <div className="space-y-12">
            {[
              { title: "Zero Hallucination", text: "Verified logical trees ensure the code works on the first run, every time." },
              { title: "Team Alignment", text: "The agent mimics your specific linting rules, variable naming, and architecture." },
              { title: "Auto-Docs", text: "JSDoc and architectural READMEs are generated alongside the source code." }
            ].map((item, i) => (
              <div key={i} className="group cursor-default">
                <h4 className="text-lg font-black uppercase text-blue-600 tracking-widest mb-2 group-hover:translate-x-2 transition-transform">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. MARQUEE: BLUE THEME */}
      <section className="py-16 bg-blue-600 text-white overflow-hidden whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 items-center"
        >
          {Array(8).fill("BUILD BEYOND HUMAN VELOCITY").map((text, i) => (
            <span key={i} className="text-4xl md:text-6xl font-black tracking-tighter uppercase">{text}</span>
          ))}
        </motion.div>
      </section>

      {/* 7. CTA: DARK THEME */}
      <section className="py-32 px-6 bg-white text-center">
        <div className="max-w-5xl mx-auto bg-slate-950 p-16 md:p-32 rounded-[5rem] relative overflow-hidden shadow-3xl">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Code2 size={200} className="text-white" />
          </div>
          <div className="relative z-10">
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white mb-12">
                Deploy <br /> Your <span className="text-blue-500 italic">Agent.</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/contact" className="px-12 py-6 bg-blue-600 text-white font-black uppercase tracking-widest text-[11px] rounded-full hover:scale-105 transition-transform shadow-2xl shadow-blue-500/50">
                    Initialize Protocol
                </Link>
                <button className="px-12 py-6 bg-white/10 text-white font-black uppercase tracking-widest text-[11px] rounded-full hover:bg-white/20 transition-colors backdrop-blur-md border border-white/10">
                    Request Strategy Call
                </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}