// components/100X/AgentExecutionMatrix.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Cpu, RefreshCw, CheckCircle2 } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export const AgentExecutionMatrix = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { title: "Boilerplate Scaffolding", cmd: "npx uptimise-agent init --schema=saas_core", status: "STABLE", out: ["✓ Generating type-safe Prisma schemas...", "✓ Initializing Next.js 16 runtime configurations...", "✓ Building responsive glassmorphic design variables..."] },
    { title: "Deterministic Validation", cmd: "uptimise-agent test --target=all --edge-cases", status: "VERIFIED", out: ["✓ Running 1,400 concurrency test tracks...", "✓ Verifying Zod validation boundaries...", "✓ Zero security drift exceptions detected."] },
    { title: "Atomic Cloud Rollout", cmd: "uptimise-agent deploy --region=global --atomic", status: "ACTIVE", out: ["✓ Compiling production standalone build paths...", "✓ Routing active middleware layers to edge points...", "✓ Deployment locked down safely // 200 OK"] }
  ];

  return (
    <section className="relative bg-slate-950 py-32 px-6 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* LEFT COMPONENT: HIGH-END ARCHITECTURE CONTENT */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-5 space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-xl">
            <span className="text-[9px] font-mono font-black uppercase tracking-widest text-blue-400">// DETERMINISTIC_AUTOMATION</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
            Orchestrated Agent <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">
              Execution Fabrics
            </span>
          </h2>
          <p className="text-slate-400 text-base font-medium leading-relaxed">
            We isolate manual engineering logic into self-healing loops. Watch our multi-agent layer scaffold routes, test edge mutations, and deploy production assets across live server targets.
          </p>

          <div className="space-y-3">
            {steps.map((step, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-500 flex items-center justify-between ${
                  activeStep === i 
                    ? 'bg-blue-600/10 border-blue-500 text-white' 
                    : 'bg-white/[0.02] border-white/5 text-slate-500 hover:border-white/10 hover:text-slate-300'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-black text-xs ${activeStep === i ? 'bg-blue-600 text-white' : 'bg-white/5 text-slate-400'}`}>
                    0{i + 1}
                  </div>
                  <span className="font-bold uppercase tracking-tight text-sm">{step.title}</span>
                </div>
                {activeStep === i && <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />}
              </button>
            ))}
          </div>
        </motion.div>

        {/* RIGHT COMPONENT: MODERN CYBERPUNK TERMINAL SIMULATION */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="lg:col-span-7 w-full h-[460px] rounded-[2.5rem] bg-slate-900/40 border border-white/5 backdrop-blur-xl p-8 font-mono text-xs flex flex-col justify-between relative shadow-2xl group shadow-blue-950/20"
        >
          {/* Mac Buttons */}
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/40" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
              <div className="w-3 h-3 rounded-full bg-green-500/40" />
            </div>
            <div className="text-[10px] text-slate-500 uppercase tracking-widest font-black">
              // AGENT_NODE_0{activeStep + 1} // STATUS_{steps[activeStep].status}
            </div>
          </div>

          {/* Core Command Streams */}
          <div className="flex-1 py-6 space-y-4 overflow-y-auto select-none">
            <div className="flex items-center gap-2 text-blue-400 font-bold">
              <span>uptimise-factory ~</span>
              <span className="text-white font-medium">{steps[activeStep].cmd}</span>
            </div>
            <div className="space-y-2 text-slate-400">
              {steps[activeStep].out.map((line, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.15 }}
                  className="flex items-center gap-2 text-[11px]"
                >
                  <span className="text-emerald-400 font-black">✓</span>
                  <span>{line}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* System Telemetry Bar */}
          <div className="border-t border-white/5 pt-4 flex justify-between text-[10px] text-slate-500 uppercase font-black">
            <div className="flex items-center gap-2">
              <RefreshCw size={10} className="animate-spin text-blue-500" />
              <span>Pipeline Ledger: Streaming</span>
            </div>
            <span className="text-slate-400">Secure Token Layer Active</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};