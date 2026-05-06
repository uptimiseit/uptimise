'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, Server, Cloud, 
  Infinity as InfinityIcon, Activity, 
  Settings, FastForward, Globe, 
  ShieldCheck, Cpu, HardDrive, 
  ChevronRight, Box
} from 'lucide-react';
import Link from 'next/link';

// --- Sub-Components ---

const DevOpsCard = ({ icon: Icon, title, desc, isLight }: any) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className={`p-8 rounded-[2.5rem] border transition-all duration-300 ${
      isLight 
        ? "bg-white border-slate-200 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-400" 
        : "bg-slate-900/50 border-slate-800 hover:border-blue-500/50"
    }`}
  >
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors ${
       isLight ? "bg-slate-950 text-white" : "bg-blue-500/10 text-blue-400"
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

export default function AIDevOpsPage() {
  return (
    <div className="min-h-screen font-sans selection:bg-blue-500/30">
      
      {/* 1. HERO: DARK THEME (The Cloud Engine) */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 bg-slate-950 text-white overflow-hidden">
        {/* Animated Background Pulse */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3b82f608_0%,transparent_70%)] animate-pulse" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
            <InfinityIcon size={14} className="text-blue-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">Agent_Role: Cloud_Orchestrator</span>
          </div>
          <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter uppercase leading-[0.85] mb-8">
            Zero-Touch <br />
            <span className="text-blue-500 italic">Deployments.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl font-medium leading-relaxed">
            Zero-touch CI/CD and cloud infrastructure provisioning. Our agents handle the complexity of scale while you focus on the code.
          </p>
        </motion.div>
      </section>

      {/* 2. LIVE DASHBOARD BANNER: LIGHT THEME */}
      <section className="bg-white py-12 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-8">
          {[
            { icon: Cloud, text: "Multi-Cloud Native", color: "text-slate-900" },
            { icon: FastForward, text: "Instant Rollbacks", color: "text-slate-900" },
            { icon: ShieldCheck, text: "Compliance-as-Code", color: "text-slate-900" },
            { icon: Activity, text: "Self-Healing Clusters", color: "text-slate-900" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <item.icon size={20} className={item.color} />
              <span className="text-[11px] font-black text-slate-900 uppercase tracking-widest">{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CAPABILITIES: LIGHT THEME (The Control Room) */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-white">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
            <h2 className="text-4xl md:text-6xl font-black text-slate-950 uppercase tracking-tighter leading-none">
                Autonomous <br /><span className="text-blue-600 italic">Infrastructure.</span>
            </h2>
            <p className="max-w-md text-slate-500 font-medium">
              We eliminate manual configuration. Our agents interpret requirements to build production-grade environments automatically.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-slate-950 rounded-[3rem] p-12 relative overflow-hidden group shadow-2xl">
             <Server className="absolute right-[-20px] bottom-[-20px] w-64 h-64 text-blue-500/5 rotate-12" />
             <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6">Elastic <br />Scalability.</h2>
             <p className="text-slate-400 max-w-md leading-relaxed font-medium">
               From single-instance prototypes to global Kubernetes clusters. The agent manages load-balancing and auto-scaling logic in real-time.
             </p>
             <div className="mt-8 flex gap-4">
                <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-[10px] font-bold text-blue-400 uppercase tracking-widest">Terraform_Managed</div>
                <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">K8s_Native</div>
             </div>
          </div>
          <DevOpsCard isLight icon={Globe} title="Edge Delivery" desc="Automated CDN configuration and edge-computing deployment for global low-latency." />
          <DevOpsCard isLight icon={Cpu} title="Resource Opt." desc="AI-driven cost analysis and CPU/RAM allocation to prevent cloud-bill spikes." />
          <DevOpsCard isLight icon={ShieldCheck} title="SecOps" desc="Hardening every port and protocol automatically before the first byte is served." />
          <DevOpsCard isLight icon={HardDrive} title="Auto-Backups" desc="Stateful data management with point-in-time recovery and regional redundancy." />
        </div>
      </section>

      {/* 4. TERMINAL: DARK THEME (The Provisioner) */}
      <section className="py-32 bg-slate-950 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-mono text-blue-500 uppercase tracking-[0.4em] mb-4">// Provisioning_Protocol</h2>
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Human Input, AI Output</h2>
          </div>
          <div className="bg-slate-900 rounded-[3rem] border border-slate-800 overflow-hidden shadow-3xl shadow-blue-500/10">
             <div className="flex items-center justify-between px-8 py-5 bg-slate-800/50 border-b border-slate-800">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-700" />
                  <div className="w-3 h-3 rounded-full bg-slate-700" />
                  <div className="w-3 h-3 rounded-full bg-slate-700" />
                </div>
                <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest italic">infra_provisioner.tf</span>
             </div>
             <div className="p-10 font-mono text-sm space-y-4">
                <div className="flex gap-4">
                  <span className="text-blue-500 font-bold">$</span>
                  <span className="text-slate-300">uptimise infra --deploy "Production Cluster" --region "us-east-1"</span>
                </div>
                <div className="text-blue-400/80">
                  <p>⠋ Calculating optimal resource allocation...</p>
                  <p>⠙ Generating Terraform modules...</p>
                  <p>⠹ Establishing VPC peering and Security Groups...</p>
                  <p className="text-emerald-500 font-bold">✔ Environment live. CI/CD pipelines connected. SSL active.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 5. METHODOLOGY: LIGHT THEME (The Bridge) */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-slate-950">
                Reliable <br /> <span className="text-blue-600 italic">Continuum.</span>
              </h2>
              <p className="text-slate-600 text-lg font-medium leading-relaxed">
                DevOps is no longer a bottleneck. Our agents operate as a 24/7 SRE team, monitoring and patching infrastructure before issues arise.
              </p>
            </div>
            <div className="space-y-10">
              {[
                { title: "Observability Built-in", text: "Every deployment includes pre-configured Datadog/Grafana dashboards and alerting loops." },
                { title: "Immutable Infrastructure", text: "Ensuring your environments are consistent and reproducible across every stage." },
                { title: "GitOps Workflow", text: "Pull requests are the source of truth for infrastructure changes, managed by the agent." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 bg-slate-950 text-white rounded-2xl flex items-center justify-center font-black">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-black uppercase text-slate-950 tracking-widest mb-2">{item.title}</h4>
                    <p className="text-slate-600 leading-relaxed font-medium text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. MARQUEE: DARK BLUE THEME */}
      <section className="py-16 bg-slate-950 text-white overflow-hidden whitespace-nowrap border-y border-white/5">
        <motion.div 
          animate={{ x: [0, -1200] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 items-center"
        >
          {Array(8).fill("PROVISIONING AT THE SPEED OF THOUGHT").map((text, i) => (
            <span key={i} className="text-4xl md:text-6xl font-black tracking-tighter uppercase opacity-50">{text}</span>
          ))}
        </motion.div>
      </section>

      {/* 7. CTA: LIGHT THEME (The Blueprint) */}
      <section className="py-16 px-6 bg-white text-center">
        <div className="max-w-5xl mx-auto bg-blue-600 p-16 md:p-32 py-10 rounded-2xl relative overflow-hidden shadow-4xl">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Box size={300} className="text-white" />
          </div>
          <div className="relative z-10 text-white">
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-12">
                Scale <br /> Your <span className="text-slate-950 italic">Ambition.</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/contact" className="px-12 py-6 bg-slate-950 text-white font-black uppercase tracking-widest text-[11px] rounded-full hover:scale-105 transition-transform flex items-center gap-2">
                    Start Provisioning <ChevronRight size={14} />
                </Link>
                <button className="px-12 py-6 bg-white text-blue-600 font-black uppercase tracking-widest text-[11px] rounded-full hover:bg-slate-100 transition-colors">
                    Infrastructure Audit
                </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}