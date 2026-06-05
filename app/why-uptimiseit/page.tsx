'use client';

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { 
  Cpu, ShieldCheck, Layers, Zap, Terminal, Code2, 
  HelpCircle, RefreshCw, CheckCircle2, ChevronRight, ArrowUpRight 
} from "lucide-react";

// --- Fine-Tuned Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const bentoItem: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
  }
};

export default function WhyUptimisePage() {
  const [activeTab, setActiveTab] = useState<"architecture" | "telemetry" | "rollout">("architecture");

  return (
    <div className="min-h-screen bg-[#030712] text-white font-sans selection:bg-indigo-500/20 selection:text-indigo-400 pb-20 overflow-hidden pt-12">
      
      {/* BACKGROUND DECORATIVE GRID LINES */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:2rem_2rem] opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-indigo-500/10 via-blue-500/5 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* 1. HERO CONTAINER */}
      <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto text-center space-y-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-6"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-xl">
            <span className="text-[10px] font-mono font-black uppercase tracking-widest text-indigo-400">// SYSTEMS_OPTIMIZATION_ENGINE</span>
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-8xl font-black tracking-tighter text-white max-w-5xl mx-auto leading-[0.9] uppercase">
            An Elite AI-Native Partner for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400">
              Digital Infrastructure
            </span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
            We isolate manual engineering logic into deterministic agent workflows. Uptimise IT combines advanced software blueprints with orchestrated computing loop modules.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. DYNAMIC WORKSPACE TERMINAL (NEW HIGH-CONVERSION INTERACTIVE SECTION) */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-slate-900/30 border border-slate-800/80 rounded-[3rem] p-8 md:p-12 backdrop-blur-xl shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/5 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-center">
            <span className="text-[10px] font-mono font-black text-indigo-400 tracking-widest block uppercase">// LIVE_WORKSPACE_PLAYGROUND</span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-none">
              Orchestrated <br />Execution Control
            </h2>
            <p className="text-sm text-slate-400 font-medium leading-relaxed">
              Interact with our development pipeline loops. Select a command terminal switch module below to trace how our system automates code validation.
            </p>

            <div className="space-y-2">
              {[
                { id: "architecture", title: "Type-Safe System Blueprinting", desc: "Maps database nodes directly to runtime inputs." },
                { id: "telemetry", title: "Deterministic Test Verification", desc: "Runs end-to-end edge validation tracks." },
                { id: "rollout", title: "Atomic Deployment Rollovers", desc: "Pushes production packages smoothly to CDNs." }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                    activeTab === tab.id 
                      ? 'bg-indigo-600/10 border-indigo-500 text-white' 
                      : 'bg-white/[0.01] border-white/5 text-slate-400 hover:border-white/10 hover:text-slate-200'
                  }`}
                >
                  <div className="font-bold text-sm uppercase tracking-tight">{tab.title}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{tab.desc}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 h-[400px] rounded-2xl bg-slate-950 border border-slate-800/60 p-6 font-mono text-xs flex flex-col justify-between shadow-inner">
            <div className="flex items-center justify-between border-b border-slate-900 pb-4">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/30" />
              </div>
              <span className="text-[9px] text-slate-600 font-black uppercase tracking-widest">// NODE_LEDGER_SYSTEMS</span>
            </div>

            <div className="flex-1 py-4 space-y-3 overflow-y-auto select-none text-slate-400">
              {activeTab === "architecture" && (
                <>
                  <div className="text-indigo-400">uptimise-factory ~ npx drizzle-kit generate --safe</div>
                  <div className="text-[11px] text-emerald-400">✓ Extracting configuration values from postgresql database context...</div>
                  <div className="text-[11px] text-emerald-400">✓ Generating type-safe operational entity graph mapping...</div>
                  <div className="text-[11px] text-slate-500">// Schema models synced cleanly with zero compilation drifts.</div>
                </>
              )}
              {activeTab === "telemetry" && (
                <>
                  <div className="text-indigo-400">uptimise-factory ~ npm run test:concurrency --target=edge</div>
                  <div className="text-[11px] text-emerald-400">✓ Initializing 1,200 sandboxed virtual user session tracks...</div>
                  <div className="text-[11px] text-emerald-400">✓ Verification process checked inputs boundaries safely.</div>
                  <div className="text-[11px] text-cyan-400">✓ All mutations isolated without data validation leaks // 100% PASS</div>
                </>
              )}
              {activeTab === "rollout" && (
                <>
                  <div className="text-indigo-400">uptimise-factory ~ uptimise-agent deploy --atomic --region=global</div>
                  <div className="text-[11px] text-emerald-400">✓ Compiling standalone production serverless edge paths...</div>
                  <div className="text-[11px] text-emerald-400">✓ Directing active middleware traffic filters onto local CDNs...</div>
                  <div className="text-[11px] text-indigo-400 font-bold">✓ Deployment completed smoothly across all edge networks // 200 OK</div>
                </>
              )}
            </div>

            <div className="border-t border-slate-900 pt-4 flex justify-between text-[9px] text-slate-600 uppercase font-black tracking-wider">
              <div className="flex items-center gap-1.5">
                <RefreshCw size={10} className="animate-spin text-indigo-500" />
                <span>State Router: Sync Active</span>
              </div>
              <span>Protocol Verified</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. CORE PHILOSOPHY BENTO GRID GRID LAYER */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Bento Item 1: AI-Native (Double Column Width) */}
          <motion.div 
            variants={bentoItem}
            whileHover={{ y: -4 }}
            className="lg:col-span-2 bg-slate-900/40 p-8 md:p-10 rounded-[2.5rem] border border-slate-800 backdrop-blur-md hover:border-indigo-500/40 transition-all duration-300 group flex flex-col justify-between min-h-[300px]"
          >
            <div>
              <div className="w-12 h-12 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Cpu size={22} />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-3">AI-Native Engineering Matrix</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 font-medium">
                We integrate advanced AI assistant loops to automate code scaffolding, component documentation, and repetitive boilerplate production.
              </p>
            </div>
            <p className="text-slate-200 text-sm font-semibold border-l-2 border-indigo-500 pl-4 italic bg-indigo-950/20 py-2 rounded-r-xl">
              Experienced full-stack engineers stay fully responsible for your system&apos;s data relations and layout performance optimization.
            </p>
          </motion.div>

          {/* Bento Item 2: Architecture First */}
          <motion.div 
            variants={bentoItem}
            className="bg-slate-950 p-8 md:p-10 rounded-[2.5rem] border border-slate-800 hover:border-blue-500/40 transition-all duration-300 group flex flex-col justify-between min-h-[300px]"
          >
            <div>
              <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Layers size={22} />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-4">Architecture First</h3>
            </div>
            <ul className="space-y-2.5 text-slate-400 text-xs font-mono tracking-wide">
              <li className="flex items-center gap-2"><span className="text-indigo-500 font-bold">✦</span> [System_Topology_Blueprint]</li>
              <li className="flex items-center gap-2"><span className="text-indigo-500 font-bold">✦</span> [Type_Safe_Schema_Lock]</li>
              <li className="flex items-center gap-2"><span className="text-indigo-500 font-bold">✦</span> [Multi_Tenant_Data_Isolation]</li>
              <li className="flex items-center gap-2"><span className="text-indigo-500 font-bold">✦</span> [Infrastructure_As_Code_IaC]</li>
            </ul>
          </motion.div>

          {/* Bento Item 3: End-to-End Ecosystem */}
          <motion.div 
            variants={bentoItem}
            className="bg-slate-950 p-8 md:p-10 rounded-[2.5rem] border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between min-h-[340px]"
          >
            <div>
              <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">Unified Core Factory</h3>
              <p className="text-xs text-slate-500 font-mono mb-4">// END_TO_END_COMPILATION</p>
            </div>
            <div className="space-y-2">
              {["Product UX/UI Design", "Full-Stack Development", "DevOps Infrastructure", "Growth Engineering"].map((item, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ x: 4, backgroundColor: "rgba(30,41,59,0.4)" }}
                  className="flex items-center text-slate-300 text-xs font-bold uppercase tracking-wider bg-slate-900/40 px-4 py-3 rounded-xl border border-slate-800/50"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-3" />
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bento Item 4: Transparent Process (Double Column Width) */}
          <motion.div 
            variants={bentoItem}
            className="lg:col-span-2 bg-gradient-to-br from-indigo-900/50 to-slate-900/50 p-8 md:p-10 rounded-[2.5rem] border border-indigo-500/20 relative overflow-hidden group flex flex-col justify-between min-h-[340px]"
          >
            <div className="absolute right-0 top-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-full">
              <div className="md:col-span-5 space-y-3">
                <h3 className="text-2xl font-black uppercase tracking-tight text-white">Transparent Lifeline</h3>
                <p className="text-slate-400 leading-relaxed text-xs font-medium">
                  We run clear communication models and structured deployment pipelines to ensure our goals stay fully aligned with your business outcomes.
                </p>
              </div>
              <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-[10px] tracking-widest font-black uppercase">
                {["Structured Phases", "Clear Milestones", "Regular Log Updates", "Collaborative Flow"].map((item, i) => (
                  <div key={i} className="flex items-center text-slate-200 bg-slate-950/60 p-3 rounded-xl border border-slate-800/40">
                    <div className="w-5 h-5 rounded bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mr-3 text-indigo-400">0{i + 1}</div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/40 flex items-center gap-2 text-[9px] font-mono text-slate-500 font-black uppercase">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Continuous deployment monitoring active</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 4. METRIC COMPARISON MATRIX GRID (NEW ADVANCED STRUCTURAL SECTION) */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="bg-slate-900/20 border border-slate-800 rounded-[3rem] p-8 md:p-12 space-y-12">
          <div className="text-left max-w-xl space-y-2">
            <span className="text-[10px] font-mono font-black text-indigo-400 tracking-widest block uppercase">// SHIFTING_THE_INDUSTRY_STANDARD</span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">The Capability Counter-Matrix</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full font-sans border-collapse text-left text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-[10px] font-mono font-black uppercase tracking-widest text-slate-500">
                  <th className="pb-4 w-1/3">Performance Vector</th>
                  <th className="pb-4 w-1/3 text-slate-400">// TRADITIONAL_OUTSOURCING</th>
                  <th className="pb-4 w-1/3 text-indigo-400">✦ UPTIMISE_IT_FACTORY_MODEL</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-900/60 text-slate-300 font-medium">
                {[
                  { vector: "Feature Velocity", traditional: "Months spent tracking scopes & shifting boilerplate", uptimise: "Days via custom orchestrated agent loops" },
                  { vector: "Type Architecture Safety", traditional: "Loose inputs configurations causing runtime crashes", uptimise: "End-to-end schema validation lockouts" },
                  { vector: "Infrastructure Setup", traditional: "Manual server provisioning prone to software drift", uptimise: "Declarative programmatic systems builds" },
                  { vector: "Product Handover", traditional: "Vague file delivery leading to implementation debt", uptimise: "Clean monorepos with zero environment lag" }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.01] transition-colors">
                    <td className="py-4 font-black uppercase tracking-tight text-white">{row.vector}</td>
                    <td className="py-4 pr-4 text-slate-500">{row.traditional}</td>
                    <td className="py-4 font-bold text-slate-200 border-l border-indigo-500/10 pl-4">{row.uptimise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. TECH STACK & CLOUD ECOSYSTEM CONFIGURATOR */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-900 mt-12 space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <h2 className="text-3xl font-black tracking-tight uppercase text-white">Our Modern Stack Architecture</h2>
          <p className="text-slate-400 text-sm font-medium">We design digital products strictly using high-performance frameworks and cloud-native environments.</p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-3"
        >
          {["Next.js", "React Server Components", "TypeScript", "Node.js", "Drizzle ORM", "PostgreSQL", "AWS Core", "Docker Engines", "Kubernetes"].map((tech, i) => (
             <motion.span 
               key={i} 
               variants={fadeInUp}
               whileHover={{ scale: 1.03, backgroundColor: "rgba(99,102,241,0.1)", borderColor: "#6366f1", color: "#818cf8" }}
               className="px-5 py-2.5 bg-slate-900/40 border border-slate-800 rounded-xl text-slate-300 font-bold text-sm transition-all cursor-default select-none"
             >
               {tech}
             </motion.span>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-slate-900">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h3 className="text-xl font-black uppercase tracking-tight text-white">// Scalable_Cloud_Grids</h3>
            <p className="text-slate-400 text-xs leading-relaxed font-medium">
              Our infrastructure workflows set up production-ready configurations protected by virtual private boundaries, high-capacity load balancers, and automated rollout verification loops.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h3 className="text-xl font-black uppercase tracking-tight text-white">// Long_Term_System_Resiliency</h3>
            <p className="text-slate-400 text-xs leading-relaxed font-medium">
              We eliminate system technical debt at the repository level. This allows your team to maintain maximum feature velocity while preserving zero-downtime application continuity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 6. PARTNERING SYSTEM CHANNELS */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-950 text-white text-center rounded-[3rem] mx-6 border border-slate-900 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-8 relative z-10"
        >
          <h2 className="text-2xl md:text-3xl font-black tracking-tight uppercase text-white">Configured For Target Market Verticals</h2>
          <div className="flex flex-wrap justify-center gap-2.5">
            {["Scaleup Startups", "B2B SaaS Portals", "FinTech Ledgers", "AI Native Products", "Enterprise Runtimes"].map((client, i) => (
               <motion.span 
                 key={i} 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 transition={{ delay: i * 0.08 }}
                 className="px-5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-slate-400 font-bold text-xs tracking-wider uppercase font-mono"
               >
                 {client}
               </motion.span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 7. CONCENTRIC ACTION CONVERTER (CTA) */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">
            Ready to upgrade your <br />production velocity?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-black uppercase tracking-widest text-[10px] rounded-xl shadow-lg shadow-indigo-950/50 transition-colors"
            >
              <span>Initialize System Audit</span>
              <ArrowUpRight size={14} />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-transparent border border-slate-800 hover:border-slate-700 text-slate-300 font-black uppercase tracking-widest text-[10px] rounded-xl transition-colors"
            >
              Talk to Lead Architects
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}