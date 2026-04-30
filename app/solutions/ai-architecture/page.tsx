'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, Network, Database, ShieldCheck, 
  Zap, Share2, Binary, ChevronRight,
  Workflow, Microscope, ArrowUpRight
} from 'lucide-react';
import Link from 'next/link';

// --- Components ---

const ArchitectureCard = ({ icon: Icon, title, desc, featured = false }: any) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className={`relative p-10 rounded-[3rem] border transition-all duration-500 overflow-hidden group ${
      featured 
        ? 'bg-blue-600 border-blue-400 shadow-2xl shadow-blue-500/20 text-white' 
        : 'bg-slate-900/50 border-slate-800 hover:border-blue-500/50 text-slate-300'
    }`}
  >
    <div className={`mb-8 p-4 rounded-2xl inline-block ${featured ? 'bg-white/20' : 'bg-blue-500/10 text-blue-400'}`}>
      <Icon size={32} />
    </div>
    <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 text-white">
      {title}
    </h3>
    <p className="text-sm leading-relaxed opacity-80">
      {desc}
    </p>
    {!featured && (
      <div className="absolute -inset-20 bg-blue-500/0 group-hover:bg-blue-500/5 blur-[80px] transition-all duration-700 pointer-events-none" />
    )}
  </motion.div>
);

// --- Main Page ---

export default function AIArchitecturePage() {
  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans selection:bg-blue-500/30">
      
      {/* 1. HERO SECTION: THE SCHEMATIC */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3b82f610_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff05_1px,transparent_1px)] [background-size:32px_32px]" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <span className="text-blue-500 font-mono text-[10px] tracking-[0.5em] uppercase mb-6 border border-blue-500/30 px-4 py-1.5 rounded-full inline-block">
            Systems_Design_v4.0
          </span>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] mb-8">
            The <span className="text-blue-500 italic">Neural</span> <br /> Blueprint.
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 font-medium text-lg md:text-xl leading-relaxed">
            We architect self-scaling infrastructures where AI models function as core biological components, not just endpoints.
          </p>
        </motion.div>

        {/* Decorative Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
          <div className="w-[1px] h-20 bg-gradient-to-b from-blue-500 to-transparent" />
          <span className="text-[8px] uppercase tracking-[0.3em] font-mono">Initiate_Scroll</span>
        </div>
      </section>

      {/* 2. THE MODULAR CORE (BENTO LAYERS) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-black uppercase tracking-tighter">Modular <span className="text-blue-500">Stacks.</span></h2>
          <div className="h-1 w-20 bg-blue-600 mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ArchitectureCard 
            icon={Database} 
            title="Vector Memory" 
            desc="High-concurrency vector database clusters (Pinecone/Milvus) enabling multi-billion parameter RAG pipelines."
          />
          <ArchitectureCard 
            icon={Workflow} 
            title="Agentic Loops" 
            desc="Recursive logical structures that allow agents to self-correct, browse tools, and evolve their execution strategy."
            featured
          />
          <ArchitectureCard 
            icon={Share2} 
            title="Model Mesh" 
            desc="Intelligent orchestration between GPT-4, Claude, and specialized local LLMs for cost-performance optimization."
          />
        </div>
      </section>

      {/* 3. THE FACTORY PIPELINE (STEP-BY-STEP) */}
      <section className="py-24 border-y border-white/5 bg-slate-900/20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl font-black uppercase tracking-tighter leading-none">
                From Abstract <br /> to <span className="text-blue-500 italic">Autonomy.</span>
              </h2>
              <div className="space-y-6">
                {[
                  { id: '01', title: 'Context Ingestion', text: 'Mapping unstructured enterprise data into neural-ready formats.' },
                  { id: '02', title: 'Logic Synthesis', text: 'Defining the cognitive boundaries and tool-use capabilities of agents.' },
                  { id: '03', title: 'System Hardening', text: 'Applying prompt-injection shields and SOC2-compliant guardrails.' }
                ].map((step) => (
                  <div key={step.id} className="flex gap-6 group">
                    <span className="text-blue-600 font-mono font-bold text-xl opacity-50 group-hover:opacity-100 transition-opacity">/{step.id}</span>
                    <div>
                      <h4 className="font-bold uppercase tracking-widest text-sm text-white mb-2">{step.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square bg-blue-600/5 rounded-[4rem] border border-blue-500/20 flex items-center justify-center overflow-hidden">
               <Binary className="text-blue-500/20 absolute inset-0 w-full h-full p-20 animate-pulse" />
               <div className="relative z-10 p-12 bg-slate-950 border border-white/10 rounded-[3rem] shadow-2xl">
                  <Workflow className="text-blue-500 w-16 h-16 mb-6" />
                  <p className="font-mono text-[10px] text-blue-400 uppercase tracking-widest">Active_Architecture_Visual</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TECH STACK (HORIZONTAL LIST) */}
      <section className="py-20 px-6 bg-slate-950">
         <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {['Next.js 16', 'TypeScript', 'LangChain', 'Terraform', 'AWS Bedrock', 'Pinecone', 'Docker'].map((tech) => (
              <span key={tech} className="font-black text-xl tracking-tighter uppercase">{tech}</span>
            ))}
         </div>
      </section>

      {/* 5. SECURITY & GOVERNANCE */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="p-12 bg-white/5 rounded-[4rem] border border-white/10 backdrop-blur-xl">
             <ShieldCheck className="text-blue-500 w-12 h-12 mb-8" />
             <h2 className="text-4xl font-black uppercase tracking-tighter mb-6">Military-Grade <br />Guardrails.</h2>
             <p className="text-slate-400 leading-relaxed font-medium">
               Our architectures include automated PII masking, real-time prompt filtering, and isolated inference environments to ensure your proprietary data never leaks into training sets.
             </p>
          </div>
          <div className="space-y-4">
            {['SOC2 Compliance Mapping', 'Real-time Anomaly Detection', 'Zero-Trust Agent Access', 'Automated Audit Logging'].map((item) => (
              <div key={item} className="flex items-center gap-4 p-6 bg-slate-900/40 rounded-3xl border border-slate-800">
                <Zap size={16} className="text-blue-500" />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE TOPOLOGY PREVIEW */}
      <section className="py-24 px-6 bg-blue-600">
        <div className="max-w-5xl mx-auto text-center space-y-10 text-white">
           <Microscope className="w-16 h-16 mx-auto opacity-50" />
           <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
             Scalability <br /> By <span className="italic">Definition.</span>
           </h2>
           <p className="text-xl text-blue-100 max-w-2xl mx-auto font-medium leading-relaxed">
             We build for the future where billions of agents interact. Our architectures are horizontally scalable, handling surge loads with Kubernetes-driven elasticity.
           </p>
           <button className="px-10 py-5 bg-white text-blue-600 font-black uppercase text-xs tracking-widest rounded-full shadow-xl hover:scale-105 transition-transform">
             Request Technical Audit
           </button>
        </div>
      </section>

      {/* 7. CTA: THE FINAL PROTOCOL */}
      <section className="py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#3b82f615_0%,transparent_60%)]" />
        <div className="relative z-10">
          <h2 className="text-6xl md:text-[10rem] font-black text-slate-900/20 uppercase tracking-tighter leading-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
            CONNECT
          </h2>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-10">
            Ready to <span className="text-blue-500 italic">Deploy?</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact" className="px-12 py-6 bg-blue-600 text-white font-black uppercase tracking-[0.2em] text-[10px] rounded-full hover:shadow-2xl hover:shadow-blue-500/40 transition-all flex items-center gap-3">
              Initialize Protocol <ArrowUpRight size={16} />
            </Link>
            <button className="px-12 py-6 bg-white/5 border border-white/10 text-white font-black uppercase tracking-[0.2em] text-[10px] rounded-full hover:bg-white hover:text-slate-950 transition-all">
              View Documentation
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}