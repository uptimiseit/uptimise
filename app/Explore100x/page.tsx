// // import React from 'react'
// // import { PhilosophyHero } from '../components/100X/Philosophy'
// // import PhilosophyComparison from '../components/100X/PhilosophyComparison'
// // import MultiplierMap from '../components/100X/MultiplierMap'

// // const Explore = () => {
// //   return (
// //    <>
// //    <PhilosophyHero />
// //    <PhilosophyComparison />
// //    <MultiplierMap />
   
// //    </>
// //   )
// // }

// // export default Explore

// // app/explore/page.tsx or where your page sits
// import React from 'react';
// import { PhilosophyHero } from '../components/100X/Philosophy';
// import PhilosophyComparison from '../components/100X/PhilosophyComparison';
// import { AsymmetricBentoMatrix } from '../components/100X/AsymmetricBentoMatrix'; // Bento layout parameters
// import { AgentExecutionMatrix } from '../components/100X/AgentExecutionMatrix'; // Live workspace simulation
// import MultiplierMap from '../components/100X/MultiplierMap';
// import { GrowthRoadmapTrack } from '../components/100X/GrowthRoadmapTrack'; // Delivery sequence track

// const Explore = () => {
//   return (
//     <>
//       {/* 🟦 Section 1: Hero Focus Entry */}
//       <PhilosophyHero />
      
//       {/* ⬜ Section 2: Conflict Side-by-Side Analysis */}
//       <PhilosophyComparison />

//       {/* ⬜ Section 3: High-Density Bento Grid System Capabilities */}
//       <AsymmetricBentoMatrix />
      
//       {/* 🟦 Section 4: Live Agent Execution Code Simulator */}
//       <AgentExecutionMatrix />
      
//       {/* ⬜ Section 5: Vector Capability Clusters Map */}
//       <MultiplierMap />

//       {/* ⬜ Section 6: Standard Delivery Roadmaps Track Lifecycle */}
//       <GrowthRoadmapTrack />
//     </>
//   );
// };

// export default Explore;

'use client';

import React, { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { 
  Cpu, Layers, Zap, Terminal, Code2, 
  RefreshCw, CheckCircle2, ArrowUpRight,
  MessageSquare, ChevronDown, Activity, ShieldAlert, Sliders,
  Server
} from "lucide-react";

// --- Framer Motion Variant Blueprint Tokens ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
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

export default function Explore100xPage() {
  const [activeNode, setActiveNode] = useState<"scaffold" | "agent" | "mesh">("scaffold");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-500/10 selection:text-blue-600 overflow-x-hidden pt-12">
      
      {/* ==========================================
          SECTION 1 [LIGHT]: MANIFESTO HERO INTRO
         ========================================== */}
      <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto text-center space-y-8 bg-slate-50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-blue-500/5 via-indigo-500/5 to-transparent blur-[100px] rounded-full pointer-events-none -z-10" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-6"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-600/5 border border-blue-600/10 rounded-xl">
            <span className="text-[10px] font-mono font-black uppercase tracking-widest text-blue-600">// ENGINEERING_MANIFESTO_2026</span>
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-8xl font-black tracking-tighter text-slate-950 max-w-5xl mx-auto leading-[0.9] uppercase">
            The Era of the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500">
              100× Augmented Engineer
            </span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Software building isn't a game of headcount anymore. By isolating repetitive boilerplate operations into context-aware agent systems, elite developers produce software at unprecedented speeds.
          </motion.p>
        </motion.div>
      </section>

      {/* ==========================================
          SECTION 2 [DARK]: LIVE FACTORY COMPILATION SIMULATOR
         ========================================== */}
      <section className="bg-[#030712] text-white py-24 px-6 border-y border-slate-900 relative">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:2rem_2rem] opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-center">
            <span className="text-[10px] font-mono font-black text-blue-400 tracking-widest block uppercase">// LIVE_MULTIPLICATION_LEDS</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-none text-white">
              Watch The Multiplier <br />In Real Time
            </h2>
            <p className="text-sm text-slate-400 font-medium leading-relaxed">
              Interact with the background pipelines. Switch through the core logic nodes below to see how our software factory processes type systems and isolates errors dynamically.
            </p>

            <div className="space-y-2">
              {[
                { id: "scaffold", title: "Automated Code Scaffolding", desc: "Generates pure Next.js routes and component frameworks." },
                { id: "agent", title: "Multi-Agent System Audits", desc: "Isolates validation bottlenecks across database mutations." },
                { id: "mesh", title: "Elastic Container Handshakes", desc: "Deploys standalone production blocks onto edge points." }
              ].map((node) => (
                <button
                  key={node.id}
                  onClick={() => setActiveNode(node.id as any)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                    activeNode === node.id 
                      ? 'bg-blue-600/20 border-blue-500 text-white' 
                      : 'bg-white/[0.01] border-white/5 text-slate-400 hover:border-white/10 hover:text-slate-200'
                  }`}
                >
                  <div className="font-bold text-sm uppercase tracking-tight">{node.title}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{node.desc}</div>
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
              <span className="text-[9px] text-slate-600 font-black uppercase tracking-widest">// AUTOMATION_MATRIX_LOG</span>
            </div>

            <div className="flex-1 py-4 space-y-3 overflow-y-auto select-none text-slate-400">
              {activeNode === "scaffold" && (
                <>
                  <div className="text-blue-400">uptimise-factory ~ npx uptimise-agent init --blueprint=next_app</div>
                  <div className="text-[11px] text-emerald-400">✓ Generating safe standalone App Router view layers...</div>
                  <div className="text-[11px] text-emerald-400">✓ Compiling reusable design tokens into Tailwind configuration files...</div>
                  <div className="text-[11px] text-slate-500">// Complex boilerplate architecture mounted successfully in 1.4s.</div>
                </>
              )}
              {activeNode === "agent" && (
                <>
                  <div className="text-blue-400">uptimise-factory ~ uptimise-agent audit --schema=relational</div>
                  <div className="text-[11px] text-emerald-400">✓ Scanning all active query parameters for type-safety boundary validation...</div>
                  <div className="text-[11px] text-emerald-400">✓ Testing 400 concurrency variations against mutations...</div>
                  <div className="text-[11px] text-cyan-400">✓ Zero security exceptions found // Data relationships locked down</div>
                </>
              )}
              {activeNode === "mesh" && (
                <>
                  <div className="text-blue-400">uptimise-factory ~ docker-compose up --build --atomic</div>
                  <div className="text-[11px] text-emerald-400">✓ Packing application components into isolated container layers...</div>
                  <div className="text-[11px] text-emerald-400">✓ Redirecting request load filters to active edge routes...</div>
                  <div className="text-[11px] text-blue-400 font-bold">✓ Deployment completed smoothly across all edge networks // 200 OK</div>
                </>
              )}
            </div>

            <div className="border-t border-slate-900 pt-4 flex justify-between text-[9px] text-slate-600 uppercase font-black tracking-wider">
              <div className="flex items-center gap-1.5">
                <RefreshCw size={10} className="animate-spin text-blue-500" />
                <span>Compute System: Idle Listening</span>
              </div>
              <span>Matrix Safe</span>
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 3 [LIGHT]: AUGMENTED CAPABILITIES BENTO GRID
         ========================================== */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-slate-50">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Card 1: Leverage (Double Width) */}
          <motion.div 
            variants={bentoItem}
            whileHover={{ y: -4 }}
            className="lg:col-span-2 bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-200 shadow-xs hover:border-blue-300 transition-all duration-300 group flex flex-col justify-between min-h-[300px]"
          >
            <div>
              <div className="w-12 h-12 bg-blue-50 text-blue-600 border border-slate-100 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Cpu size={22} />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight text-slate-950 mb-3">Pure Architectural Leverage</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4 font-medium">
                Our tools remove the overhead of software engineering. Engineers spend their time solving business logic challenges rather than tracking down configuration issues.
              </p>
            </div>
            <p className="text-slate-800 text-sm font-semibold border-l-2 border-blue-600 pl-4 italic bg-slate-50 py-2 rounded-r-xl">
              By shifting boilerplate task automation to software agents, production speed jumps up significantly with zero drop in safety parameters.
            </p>
          </motion.div>

          {/* Card 2: Deterministic Engine */}
          <motion.div 
            variants={bentoItem}
            className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-200 hover:border-blue-300 transition-all duration-300 group flex flex-col justify-between min-h-[300px]"
          >
            <div>
              <div className="w-12 h-12 bg-slate-50 border border-slate-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Activity size={22} />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight text-slate-950 mb-4">Failsafe Systems</h3>
            </div>
            <ul className="space-y-2.5 text-slate-500 text-xs font-mono tracking-wide">
              <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✦</span> [Continuous_Integration_CI]</li>
              <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✦</span> [End_To_End_Type_Locks]</li>
              <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✦</span> [Automated_Sanity_Checking]</li>
              <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✦</span> [Isolated_Sandbox_Testing]</li>
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* ==========================================
          SECTION 4 [DARK]: HYPER-VELOCITY VS TRADITIONAL MATRIX
         ========================================== */}
      <section className="bg-[#030712] text-white py-24 px-6 border-y border-slate-900">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-left max-w-xl space-y-2">
            <span className="text-[10px] font-mono font-black text-blue-400 tracking-widest block uppercase">// DISMANTLING_LEGACY_OVERHEAD</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">The Engineering Velocity Scale</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full font-sans border-collapse text-left text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-[10px] font-mono font-black uppercase tracking-widest text-slate-500">
                  <th className="pb-4 w-1/3">Engineering Variable</th>
                  <th className="pb-4 w-1/3 text-slate-500">// OLD_OUTSOURCING_MODELS</th>
                  <th className="pb-4 w-1/3 text-blue-400">✦ THE 100× AUGMENTED MATRIX</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-900/60 text-slate-300 font-medium">
                {[
                  { vector: "Setup Timelines", traditional: "Weeks spent writing backend boilerplate and setting up local paths", uptimise: "Instant initialization using declarative component engines" },
                  { vector: "Validation Velocity", traditional: "Manual inspection loops causing silent production glitches", uptimise: "Automated, script-driven edge safety confirmation" },
                  { vector: "Data Integration", traditional: "Loose, manually updated entity configurations prone to drift", uptimise: "Type-safe database relations connected straight to client fields" },
                  { vector: "Ecosystem Portability", traditional: "Bloated code packages tied to specific software parameters", uptimise: "Clean monorepos built for zero-dependency edge rollouts" }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.01] transition-colors">
                    <td className="py-4 font-black uppercase tracking-tight text-white">{row.vector}</td>
                    <td className="py-4 pr-4 text-slate-500">{row.traditional}</td>
                    <td className="py-4 font-bold text-slate-200 border-l border-blue-500/10 pl-4">{row.uptimise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 5 [LIGHT]: THE REPEATABLE LIFELINE PROTOCOL
         ========================================== */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-slate-50">
        <div className="space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <span className="text-[10px] font-mono font-black text-blue-600 tracking-widest uppercase">// REPEATABLE_COMPILATION</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none text-slate-950">
                The Core Production <br /> Lifecycle Protocol
              </h2>
            </div>
            <p className="text-sm text-slate-500 font-medium max-w-sm leading-relaxed">
              Our structured workflow splits production criteria into type-safe components with zero documentation lag.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {[
              { num: "01", icon: <Code2 size={18} />, title: "Declarative Schema Mapping", desc: "We model structural table architectures and relations prior to launching front-end development." },
              { num: "02", icon: <Sliders size={18} />, title: "Automated Script Scaffolding", desc: "Autonomous generation of API endpoints protected by strict type validation filters." },
              { num: "03", icon: <Server size={18} />, title: "Atomic Edge Compilation", desc: "Pushing optimized build targets to distributed server networks behind cloud firewalls." }
            ].map((pt, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, type: "spring", stiffness: 100 }}
                className="p-10 rounded-[3rem] bg-white border border-slate-200 flex flex-col justify-between min-h-[320px] relative group hover:border-blue-500/30 transition-all duration-500 shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-slate-50 pb-6 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-700 flex items-center justify-center border border-slate-100 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors duration-500">
                      {pt.icon}
                    </div>
                    <span className="font-mono text-xs font-black text-slate-300 group-hover:text-blue-600 transition-colors">
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
                  <span>Protocol Operational</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 6 [DARK]: OPERATOR CRITIQUE MATRICES
         ========================================== */}
      <section className="bg-[#030712] text-white py-24 px-6 border-y border-slate-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] font-mono font-black text-cyan-400 tracking-widest block uppercase">// AUDITED_OPERATOR_METRICS</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none text-white">
              Endorsed by Technical <br />System Architects
            </h2>
            <p className="text-sm text-slate-400 font-medium leading-relaxed">
              See how enterprise teams use our automated engineering lifecycle to drop operational code debt and speed up application shipping times.
            </p>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { quote: "By leveraging Uptimise IT's automated orchestration loops, we dropped our feature deployment latency by nearly 70%. Their monorepo structures run flawlessly.", user: "Director of Engineering, Enterprise AI", network: "// ATTRIBUTION_LOCK_OK" },
              { quote: "The data validation shields removed runtime drift completely. Our cloud setups run inside declarative, safe blueprints with zero manual overhead.", user: "Lead DevSecOps Consultant, FinTech Grid", network: "// NETWORK_PERIMETER_SECURE" }
            ].map((card, i) => (
              <div key={i} className="bg-slate-950 border border-slate-900 rounded-[2.5rem] p-8 flex flex-col justify-between space-y-8 hover:border-slate-800 transition-all duration-300 shadow-xl">
                <div className="space-y-4">
                  <MessageSquare size={20} className="text-blue-500/60" />
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
          SECTION 7 [LIGHT]: SYSTEMIC ACCORDION TELEMETRY
         ========================================== */}
      <section className="py-24 px-6 max-w-4xl mx-auto bg-slate-50 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-[10px] font-mono font-black text-blue-600 tracking-widest block uppercase">// SYSTEM_SPECIFICATION_FAQ</span>
          <h2 className="text-3xl font-black tracking-tight uppercase text-slate-950">Manifesto Deep Dive</h2>
        </div>

        <div className="space-y-4">
          {[
            { q: "Does a 100× velocity framework compromise code safety standards?", a: "Not at all. The acceleration happens by automating boilerplate configurations and initial test generation. Our senior application architects write the core database configurations, keeping layout stability high." },
            { q: "What parameters protect data isolation in multi-agent environments?", a: "We run agent scripts inside isolated application contexts. Your core database assets, schema definitions, and user identities remain encrypted and separated from outside AI modeling tools." },
            { q: "How do declarative code frameworks prevent infrastructure drift?", a: "We define all cloud servers, network load balancers, and access configurations inside clear code blueprints. This removes manual changes and allows identical environments to be spun up instantly." }
          ].map((faq, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 shadow-xs">
              <button 
                onClick={() => openFaq === idx ? setOpenFaq(null) : setOpenFaq(idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
              >
                <span className="font-bold uppercase tracking-tight text-xs text-slate-800 group-hover:text-blue-600 transition-colors">{faq.q}</span>
                <ChevronDown size={16} className={`text-slate-400 transition-transform duration-300 ${openFaq === idx ? "rotate-180 text-blue-600" : ""}`} />
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
          SECTION 8 [DARK]: CONCENTRIC ACTION CTA TERMINAL
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
                className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-widest text-[10px] rounded-xl shadow-xl transition-colors"
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