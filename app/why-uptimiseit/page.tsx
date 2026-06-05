'use client';

import React, { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { 
  Cpu, ShieldCheck, Layers, Zap, Terminal, Code2, 
  HelpCircle, RefreshCw, CheckCircle2, ChevronRight, ArrowUpRight,
  LineChart, Sparkles, Server, MessageSquare, ChevronDown
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
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500/10 selection:text-indigo-600 overflow-x-hidden pt-12">
      
      {/* ==========================================
          SECTION 1 [LIGHT]: HERO INTRO SLATE
         ========================================== */}
      <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto text-center space-y-8 bg-slate-50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-indigo-500/5 via-blue-500/5 to-transparent blur-[100px] rounded-full pointer-events-none -z-10" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-6"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-600/5 border border-indigo-600/10 rounded-xl">
            <span className="text-[10px] font-mono font-black uppercase tracking-widest text-indigo-600">// SYSTEMS_OPTIMIZATION_ENGINE</span>
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-8xl font-black tracking-tighter text-slate-950 max-w-5xl mx-auto leading-[0.9] uppercase">
            An Elite AI-Native Partner for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500">
              Digital Infrastructure
            </span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-base md:text-lg text-slate-650 max-w-3xl mx-auto leading-relaxed font-medium">
            We isolate manual engineering logic into deterministic agent workflows. Uptimise IT combines advanced software blueprints with orchestrated computing loop modules.
          </motion.p>
        </motion.div>
      </section>


      {/* ==========================================
          SECTION 2 [DARK]: ORCHESTRATED WORKSPACE TERMINAL
         ========================================== */}
      <section className="bg-[#030712] text-white py-24 px-6 border-y border-slate-900 relative">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:2rem_2rem] opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-center">
            <span className="text-[10px] font-mono font-black text-indigo-400 tracking-widest block uppercase">// LIVE_WORKSPACE_PLAYGROUND</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-none text-white">
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
                      ? 'bg-indigo-600/20 border-indigo-500 text-white' 
                      : 'bg-white/[0.01] border-white/5 text-slate-400 hover:border-white/10 hover:text-slate-200'
                  }`}
                >
                  <div className="font-bold text-sm uppercase tracking-tight">{tab.title}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{tab.desc}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 h-[400px] rounded-3xl bg-slate-950 border border-slate-900 p-6 font-mono text-xs flex flex-col justify-between shadow-2xl">
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

        </div>
      </section>


      {/* ==========================================
          SECTION 3 [LIGHT]: CORE PHILOSOPHY BENTO MATRIX
         ========================================== */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-slate-50">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <motion.div 
            variants={bentoItem}
            whileHover={{ y: -4 }}
            className="lg:col-span-2 bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-200 shadow-xs hover:border-indigo-300 transition-all duration-300 group flex flex-col justify-between min-h-[300px]"
          >
            <div>
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 border border-slate-100 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Cpu size={22} />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight text-slate-950 mb-3">AI-Native Engineering Approach</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4 font-medium">
                We integrate advanced AI assistant loops to automate code scaffolding, component documentation, and repetitive boilerplate production.
              </p>
            </div>
            <p className="text-slate-800 text-sm font-semibold border-l-2 border-indigo-600 pl-4 italic bg-slate-50 py-2 rounded-r-xl">
              Experienced full-stack engineers stay fully responsible for your system&apos;s data relations and layout performance optimization.
            </p>
          </motion.div>

          <motion.div 
            variants={bentoItem}
            className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-200 hover:border-indigo-300 transition-all duration-300 group flex flex-col justify-between min-h-[300px]"
          >
            <div>
              <div className="w-12 h-12 bg-slate-50 border border-slate-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Layers size={22} />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight text-slate-950 mb-4">Architecture First</h3>
            </div>
            <ul className="space-y-2.5 text-slate-500 text-xs font-mono tracking-wide">
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✦</span> [System_Topology_Blueprint]</li>
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✦</span> [Type_Safe_Schema_Lock]</li>
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✦</span> [Multi_Tenant_Data_Isolation]</li>
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✦</span> [Infrastructure_As_Code_IaC]</li>
            </ul>
          </motion.div>
        </motion.div>
      </section>


      {/* ==========================================
          SECTION 4 [DARK]: CAPABILITY COUNTER-MATRIX TABLE
         ========================================== */}
      <section className="bg-[#030712] text-white py-24 px-6 border-y border-slate-900">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-left max-w-xl space-y-2">
            <span className="text-[10px] font-mono font-black text-indigo-400 tracking-widest block uppercase">// SHIFTING_THE_INDUSTRY_STANDARD</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">The Capability Counter-Matrix</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full font-sans border-collapse text-left text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-[10px] font-mono font-black uppercase tracking-widest text-slate-500">
                  <th className="pb-4 w-1/3">Performance Vector</th>
                  <th className="pb-4 w-1/3 text-slate-500">// TRADITIONAL_OUTSOURCING</th>
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


      {/* ==========================================
          SECTION 5 [LIGHT]: SYSTEMIC ENGINEERING ROADMAP
         ========================================== */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-slate-50">
        <div className="space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <span className="text-[10px] font-mono font-black text-indigo-600 tracking-widest uppercase">// AUTOMATED_DELIVERY_TRACK</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none text-slate-950">
                The Architecture <br /> Delivery Lifeline
              </h2>
            </div>
            <p className="text-sm text-slate-500 font-medium max-w-sm leading-relaxed">
              A precise engineering protocol designed to map project criteria directly into type-safe source structures without documentation lag.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {[
              { num: "01", icon: <Code2 size={18} />, title: "Schema Strategy Topology", desc: "We map system database fields and verify entity tracking paths before writing any core schema variables." },
              { num: "02", icon: <Layers size={18} />, title: "API Engine Compilation", desc: "Building asynchronous event brokers and validation endpoints to ensure secure write pathways." },
              { num: "03", icon: <Server size={18} />, title: "Production Scale Integration", desc: "Connecting full-stack interfaces to localized server nodes protected by telemetry dashboards." }
            ].map((pt, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, type: "spring", stiffness: 100 }}
                className="p-10 rounded-[3rem] bg-white border border-slate-200 flex flex-col justify-between min-h-[320px] relative group hover:border-indigo-600/30 transition-all duration-500 shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-slate-50 pb-6 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-700 flex items-center justify-center border border-slate-100 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-colors duration-500">
                      {pt.icon}
                    </div>
                    <span className="font-mono text-xs font-black text-slate-300 group-hover:text-indigo-600 transition-colors">
                      // RUN_NODE_{pt.num}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-black uppercase tracking-tight text-slate-950">{pt.title}</h3>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">{pt.desc}</p>
                  </div>
                </div>
                <div className="mt-8 flex items-center gap-2 text-[9px] font-mono font-black text-slate-400 uppercase tracking-widest">
                  <div className="w-4 h-4 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                    <CheckCircle2 size={10} />
                  </div>
                  <span>Verified Protocol</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ==========================================
          SECTION 6 [DARK]: CLIENT ADVOCACY & TESTIMONIAL GRAPH
         ========================================== */}
      <section className="bg-[#030712] text-white py-24 px-6 border-y border-slate-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] font-mono font-black text-cyan-400 tracking-widest block uppercase">// ACCREDITED_SYSTEMS_FEEDBACK</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none text-white">
              Validated By <br />Product Operators
            </h2>
            <p className="text-sm text-slate-400 font-medium leading-relaxed">
              Read how tech teams and system administrators maximize their deployment velocities using our engineering factory model.
            </p>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { quote: "Uptimise IT eliminated our frontend synchronization debt. Their type-safe schema mapping accelerated our Next.js feature releases by nearly 4x.", user: "CTO, SaaS Core System", network: "// SECURE_HANDSHAKE_NODE" },
              { quote: "The server-side telemetry integration worked flawlessly. We recovered 100% of our ad-attribution pipelines without data leakage gaps.", user: "VP of Product, FinTech Ledger", network: "// SIGNAL_ATTRIBUTION_OK" }
            ].map((card, i) => (
              <div key={i} className="bg-slate-950 border border-slate-900 rounded-[2.5rem] p-8 flex flex-col justify-between space-y-8 hover:border-slate-800 transition-all duration-300 shadow-xl">
                <div className="space-y-4">
                  <MessageSquare size={20} className="text-indigo-500/60" />
                  <p className="text-xs text-slate-300 font-medium leading-relaxed italic">"{card.quote}"</p>
                </div>
                <div className="space-y-2 border-t border-slate-900 pt-4">
                  <div className="text-xs font-black uppercase tracking-tight text-white">{card.user}</div>
                  <div className="text-[9px] font-mono font-black text-slate-600 uppercase tracking-widest">{card.network}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ==========================================
          SECTION 7 [LIGHT]: TECH STACK & DYNAMIC FAQ ACCORDION
         ========================================== */}
      <section className="py-24 px-6 max-w-4xl mx-auto bg-slate-50 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-[10px] font-mono font-black text-indigo-600 tracking-widest block uppercase">// FAQS_AND_SYSTEMIC_ANSWERS</span>
          <h2 className="text-3xl font-black tracking-tight uppercase text-slate-950">Technical Deep Dive</h2>
        </div>

        <div className="space-y-4">
          {[
            { q: "How does the AI-Native approach integration function day-to-day?", a: "We run background agent processes to write boilerplate structures, schema setups, and unit tests. Our senior systems architects review and sign off on all data entities to guarantee high deployment stability." },
            { q: "Is the software factory compatible with existing database networks?", a: "Absolutely. Our codebases map schemas using clean Drizzle or Prisma frameworks, allowing us to connect type-safe entities into production PostgreSQL tables without structural data drift." },
            { q: "How does Uptimise IT enforce zero-downtime deployment pipelines?", a: "We bundle builds using decoupled container structures and route incoming data through private virtual clouds. Updates launch via automated atomic rollovers to keep operations seamless." }
          ].map((faq, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 shadow-xs">
              <button 
                onClick={() => openFaq === idx ? setOpenFaq(null) : setOpenFaq(idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
              >
                <span className="font-bold uppercase tracking-tight text-xs text-slate-800 group-hover:text-indigo-600 transition-colors">{faq.q}</span>
                <ChevronDown size={16} className={`text-slate-400 transition-transform duration-300 ${openFaq === idx ? "rotate-180 text-indigo-600" : ""}`} />
              </button>
              <AnimatePresence initial={false}>
                {openFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-xs text-slate-600 font-medium leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>


      {/* ==========================================
          SECTION 8 [DARK]: CONCENTRIC END-CTA TERMINAL
         ========================================== */}
      <section className="bg-[#030712] border-t border-slate-900 py-28 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-10">
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
                className="flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-black uppercase tracking-widest text-[10px] rounded-xl shadow-xl transition-colors"
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
        </div>
      </section>

    </div>
  );
}