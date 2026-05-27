'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  BrainCircuit, Cpu, Sparkles, 
  Network, Database, ShieldCheck, 
  Terminal, Bot, Binary, 
  ArrowUpRight, Zap, Activity 
} from 'lucide-react';
import Link from 'next/link';

// --- Sub-Components ---

const AICard = ({ icon: Icon, title, desc, isLight }: any) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className={`p-10 rounded-[3.5rem] border transition-all duration-500 ${
      isLight 
        ? "bg-white border-slate-200 hover:shadow-2xl hover:border-blue-500/50" 
        : "bg-slate-900/50 border-slate-800 hover:border-blue-500/50"
    }`}
  >
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all ${
       isLight ? "bg-blue-600 text-white shadow-lg shadow-blue-200" : "bg-blue-500/10 text-blue-400"
    }`}>
      <Icon size={28} />
    </div>
    <h3 className={`text-2xl font-black uppercase tracking-tighter mb-4 ${isLight ? "text-slate-950" : "text-white"}`}>
      {title}
    </h3>
    <p className={`${isLight ? "text-slate-600" : "text-slate-400"} text-sm leading-relaxed font-medium`}>
      {desc}
    </p>
  </motion.div>
);

export default function AICompaniesIndustryPage() {
  return (
    <div className="min-h-screen font-sans selection:bg-blue-100 overflow-hidden">
      
      {/* 1. HERO: NEURAL DARK (The Core) */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 bg-slate-950 text-white overflow-hidden">
        {/* Background Logic: Neural Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3b82f610_0%,transparent_70%)] animate-pulse" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
            <BrainCircuit size={14} className="text-blue-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 font-mono">Industry::AI_Native_Priority</span>
          </div>
          <h1 className="text-6xl md:text-[9.5rem] font-black tracking-tighter uppercase leading-[0.8] mb-8">
            The LLM-Native <br />
            <span className="text-blue-500 italic text-5xl md:text-[8rem]">Architects.</span>
          </h1>
          <p className="max-w-3xl mx-auto text-slate-400 text-lg md:text-xl font-medium leading-relaxed">
            Powering the next generation of LLM-native products. We bridge the gap between foundation models and production-ready applications with agentic workflows and neural orchestration.
          </p>
        </motion.div>
      </section>

      {/* 2. COMPUTE METRICS: SILICON LIGHT */}
      <section className="bg-white py-16 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: "Token Efficiency", val: "99.9%", icon: Zap },
            { label: "Inference Latency", val: "< 50ms", icon: Activity },
            { label: "RAG Accuracy", val: "98.2%", icon: Database },
            { label: "Models Managed", val: "500+", icon: Cpu }
          ].map((stat, i) => (
            <div key={i} className="space-y-1">
              <stat.icon size={20} className="mx-auto text-blue-600 mb-3" />
              <p className="text-4xl font-black text-slate-950 tracking-tighter">{stat.val}</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. AI SOLUTIONS: SILICON LIGHT (Bento Grid) */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-white">
        <div className="mb-20 text-center lg:text-left space-y-4">
            <h2 className="text-5xl md:text-7xl font-black text-slate-950 uppercase tracking-tighter leading-none">
                Intelligence <br /><span className="text-blue-600 italic">Redefined.</span>
            </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-slate-950 rounded-[4rem] p-12 relative overflow-hidden group shadow-2xl">
             <Network className="absolute right-[-20px] bottom-[-20px] w-80 h-80 text-blue-600/5 rotate-12" />
             <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6 leading-none">Agentic Loop <br />Engineering.</h2>
                <p className="text-slate-400 max-w-md leading-relaxed font-medium text-lg">
                   Go beyond simple chat. We build autonomous agent swarms that reason, use tools, and solve complex multi-step problems within your enterprise ecosystem.
                </p>
                <div className="mt-10 flex gap-4">
                    <div className="px-6 py-3 bg-blue-600 rounded-full text-[10px] font-black text-white uppercase tracking-widest shadow-lg shadow-blue-600/20">Reasoning_Engine</div>
                    <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-[10px] font-black text-white uppercase tracking-widest">Tool_Calling_Native</div>
                </div>
             </div>
          </div>
          <AICard isLight icon={Sparkles} title="Custom Fine-tuning" desc="Adapting open-source models (Llama 3, Mistral) to your specific domain data for superior accuracy and lower costs." />
          <AICard isLight icon={Database} title="Vector Pipelines" desc="High-performance RAG architectures using Pinecone, Milvus, or Weaviate for real-time semantic retrieval." />
          <AICard isLight icon={ShieldCheck} title="Neural Guardrails" desc="Implementing prompt-injection shields and PII masking layers to ensure enterprise-grade safety." />
          <AICard isLight icon={Binary} title="Multi-Model Mesh" desc="Orchestrating between GPT-4, Claude 3, and local models to optimize for performance and unit economics." />
        </div>
      </section>

      {/* 4. THE AI STACK: NEURAL DARK */}
      <section className="py-32 bg-slate-950 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-sm font-mono text-blue-500 uppercase tracking-[0.5em] mb-4">// Inference_Optimization</h2>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">The Neural <br /> <span className="text-blue-500 italic">Primitive.</span></h2>
            <p className="text-slate-400 text-lg leading-relaxed font-medium">
              We leverage the industry's most advanced AI frameworks to build stable, scalable, and cost-effective intelligent systems.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
            {['LangChain', 'LlamaIndex', 'vLLM', 'PyTorch', 'HuggingFace', 'AutoGPT', 'Pinecone', 'Weights & Biases', 'AWS Bedrock'].map((tech) => (
              <div key={tech} className="p-6 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center hover:bg-blue-600/10 transition-colors">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. METHODOLOGY: SILICON LIGHT (The Intelligence Protocol) */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-slate-950">
                The Intelligence <br /> <span className="text-blue-600 italic">Protocol.</span>
              </h2>
              <p className="text-slate-600 text-lg font-medium leading-relaxed">
                Building AI products requires a unique lifecycle. We focus on rapid experimentation followed by rigid architectural hardening and monitoring.
              </p>
            </div>
            <div className="lg:col-span-7 space-y-12">
              {[
                { title: "Latent Discovery", text: "Mapping your unstructured data assets to identify the highest-value AI integration points and ROI." },
                { title: "Synthetic Prototyping", text: "Rapidly spinning up LLM test-beds to validate reasoning paths and prompt-engineering strategies." },
                { title: "Production Hardening", text: "Wrapping models in robust API layers with automated evaluations (Evals) to ensure consistent quality." },
                { title: "Inference Scaling", text: "Optimizing token consumption and infrastructure to ensure your AI grows profitably and sustainably." }
              ].map((item, i) => (
                <div key={i} className="group p-10 bg-white border border-slate-100 rounded-[3rem] hover:shadow-2xl transition-all">
                  <div className="flex items-center gap-6 mb-4">
                    <span className="text-4xl font-black text-blue-600 opacity-20">0{i + 1}</span>
                    <h4 className="text-2xl font-black uppercase text-slate-950 tracking-tighter">{item.title}</h4>
                  </div>
                  <p className="text-slate-500 leading-relaxed font-medium text-sm">{item.text}</p>
                </div>
              ))}
            </div>
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
          {Array(8).fill("REASONING. TOOLS. MEMORY. ACTION.").map((text, i) => (
            <span key={i} className="text-4xl md:text-6xl font-black tracking-tighter uppercase">{text}</span>
          ))}
        </motion.div>
      </section>

      {/* 7. CTA: NEURAL DARK (The Singularity) */}
      <section className="py-32 px-6 bg-white text-center">
        <div className="max-w-6xl mx-auto bg-slate-950 p-16 md:p-32 rounded-[5rem] relative overflow-hidden shadow-4xl group">
          <div className="absolute top-0 right-0 p-16 opacity-5">
            <Bot size={300} className="text-blue-500 group-hover:scale-110 transition-transform duration-1000" />
          </div>
          <div className="relative z-10 text-white">
            <h2 className="text-5xl md:text-[9rem] font-black uppercase tracking-tighter mb-12 leading-none">
                Deploy <br /> <span className="text-blue-500 italic">Autonomy.</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/contact" className="px-14 py-7 bg-blue-600 text-white font-black uppercase tracking-widest text-xs rounded-full hover:scale-105 transition-transform shadow-2xl shadow-blue-900/40 flex items-center gap-3">
                    Initialize AI Squad <ArrowUpRight size={18} />
                </Link>
                <button className="px-14 py-7 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-xs rounded-full hover:bg-white hover:text-slate-950 transition-all">
                    Book AI Strategy Call
                </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}