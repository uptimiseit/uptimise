'use client';

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { 
  Bot, BrainCircuit, Database, ShieldAlert, Zap, Network, 
  Cpu, ArrowRight, Lock, LineChart, Code2, Layers, 
  CheckCircle2, Activity, Lightbulb,
  Layout, ArrowUpRight, Sparkles
} from "lucide-react";

// --- Animation Variants ---
// const fadeInUp: Variants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     transition: { duration: 0.8, ease: "easeOut" } 
//   }
// };

// const staggerContainer: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15
//     }
//   }
// };

// const hoverCard: Variants = {
//   hover: { 
//     y: -8, 
//     transition: { type: "spring", stiffness: 400, damping: 10 } 
//   }
// };

export default function AIProductDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-purple-100 pb-20 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8 overflow-hidden">
        {/* Animated AI Glow */}
        <motion.div 
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-50 blur-[120px] rounded-full -z-10"
        />
        
        <motion.div 
          initial="hidden"
          animate="visible"
          
          className="space-y-8"
        >
          <motion.div  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-sm font-bold tracking-wide uppercase mb-4 shadow-sm">
            <BrainCircuit size={16} className="animate-pulse" /> Generative AI & Agentic Systems
          </motion.div>
          
          <motion.h1  className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight">
            Engineering Next-Generation <br className="hidden md:block" />
            <motion.span 
               animate={{ color: ["#9333ea", "#6366f1", "#9333ea"] }}
               transition={{ duration: 6, repeat: Infinity }}
               className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500 italic"
            >
                AI Products
            </motion.span>
          </motion.h1>
          
          <motion.p  className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Transform your business with intelligent software. We design, train, and deploy secure AI products—from custom LLM wrappers and RAG pipelines to fully autonomous agentic workflows.
          </motion.p>
          
          <motion.div  className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="px-8 py-4 bg-purple-600 text-white font-bold rounded-xl shadow-lg shadow-purple-600/20 hover:bg-purple-700 transition-all text-lg block">
                Discuss Your AI Vision
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all text-lg block">
                Explore Capabilities
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. AI PRODUCT CHALLENGES */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 uppercase">Production AI Realities</h2>
            <p className="text-lg text-slate-600">Deploying production-ready AI that is secure, accurate, and cost-effective requires deep engineering discipline.</p>
          </motion.div>
          
          <motion.div 
            
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { title: "LLM Hallucinations", desc: "Unconstrained models invent facts. We ground AI responses in proprietary data to ensure factual accuracy.", icon: <Activity className="text-red-500 w-8 h-8" /> },
              { title: "Privacy & Security", desc: "Secure data isolation is critical. We ensure sensitive data never compromises your enterprise compliance.", icon: <ShieldAlert className="text-red-500 w-8 h-8" /> },
              { title: "API Cost Scaling", desc: "We implement semantic caching and model routing to prevent AI infrastructure bills from spiraling.", icon: <LineChart className="text-red-500 w-8 h-8" /> }
            ].map((challenge, idx) => (
              <motion.div 
                key={idx} 
                // 
                whileHover="hover"
                // variants={hoverCardx}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-red-200 transition-all duration-300 group"
              >
                <div className="mb-6 bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">{challenge.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{challenge.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">{challenge.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. ENGINEERING APPROACH */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-purple-600 font-bold tracking-widest uppercase text-sm font-mono">// Engineering_Philosophy</h3>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Deterministic Results from Probabilistic Models
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              We tame LLMs by surrounding them with rigid engineering frameworks, injecting your proprietary data securely.
            </p>
            <div className="space-y-6 pt-4">
              <motion.div whileHover={{ x: 10 }} className="flex gap-4">
                <Database className="text-purple-600 shrink-0 w-8 h-8" />
                <div>
                  <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest">RAG (Retrieval-Augmented Generation)</h4>
                  <p className="text-slate-600 text-sm mt-1">Grounding responses in private vector databases for factual accuracy.</p>
                </div>
              </motion.div>
              <motion.div whileHover={{ x: 10 }} className="flex gap-4">
                <Lock className="text-purple-600 shrink-0 w-8 h-8" />
                <div>
                  <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest">Output Guardrails</h4>
                  <p className="text-slate-600 text-sm mt-1">Validation layers to intercept and format outputs before delivery.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-purple-50 p-8 md:p-12 rounded-[3rem] border border-purple-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10"><BrainCircuit size={200} /></div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8 relative z-10 font-mono tracking-tighter">AI_Architecture_Core</h3>
            <ul className="space-y-4 relative z-10">
              {["Custom System Prompts", "Vector Embeddings & Search", "Semantic Caching", "Model Fine-Tuning"].map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center text-purple-900 font-bold bg-white px-5 py-4 rounded-2xl shadow-sm border border-purple-100"
                >
                  <CheckCircle2 className="text-purple-500 w-5 h-5 mr-3 shrink-0" /> {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 4. AI SOLUTIONS WE BUILD */}
      <section className="py-24 px-6 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-white uppercase tracking-tighter">Build Ecosystem</h2>
          </motion.div>
          <motion.div 
            
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { title: "Custom LLM SaaS", icon: <Layout />, desc: "Monetize AI with multi-tenant subscription platforms." },
              { title: "Knowledge Bots", icon: <Bot />, desc: "Internal chatbots that instantly query secure company documents." },
              { title: "Autonomous Agents", icon: <Network />, desc: "Multi-agent systems that execute complex, multi-step workflows." },
              { title: "Predictive Analytics", icon: <LineChart />, desc: "ML models forecasting trends, churn, and financial data." }
            ].map((prod, idx) => (
              <motion.div 
                key={idx} 
                // 
                whileHover={{ y: -10, backgroundColor: "#1e293b" }}
                className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-purple-500 transition-all group"
              >
                <div className="text-purple-400 mb-6 group-hover:scale-110 transition-transform">{prod.icon}</div>
                <h3 className="text-xl font-bold mb-3 uppercase tracking-tighter leading-none">{prod.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed font-medium">{prod.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. TECHNOLOGY STACK */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-[3.5rem] p-8 md:p-16 shadow-xl shadow-slate-100 flex flex-col lg:flex-row gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 uppercase tracking-tighter">The Modern AI Stack</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              We select the absolute best foundation models, orchestration layers, and vector databases required for your specific use case.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["GPT-4o", "Claude 3.5", "Llama 3", "LangChain", "Pinecone", "Vercel AI", "AWS Bedrock"].map(tech => (
                <span key={tech} className="px-4 py-2 bg-slate-50 text-slate-700 font-bold rounded-lg text-[10px] border border-slate-200 hover:border-purple-400 transition-colors cursor-default font-mono uppercase">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div 
            
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1 w-full grid grid-cols-2 gap-4"
          >
             <motion.div
              // 
              className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center"><h4 className="text-purple-600 font-bold mb-1 text-sm uppercase font-mono">Models</h4><p className="text-slate-500 text-xs font-medium">GPT-4, Claude, Llama</p></motion.div>
             <motion.div
              //  
              className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center"><h4 className="text-purple-600 font-bold mb-1 text-sm uppercase font-mono">Chains</h4><p className="text-slate-500 text-xs font-medium">LangChain, AutoGen</p></motion.div>
             <motion.div
              // 
               className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center"><h4 className="text-purple-600 font-bold mb-1 text-sm uppercase font-mono">Storage</h4><p className="text-slate-500 text-xs font-medium">Pinecone, pgvector</p></motion.div>
             <motion.div 
            //  
              className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center"><h4 className="text-purple-600 font-bold mb-1 text-sm uppercase font-mono">Infra</h4><p className="text-slate-500 text-xs font-medium">Next.js, Bedrock</p></motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. AGENTIC WORKFLOWS */}
      <section className="py-24 px-6 bg-[#0B0F19] text-white relative overflow-hidden border-y border-slate-800">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold tracking-wide uppercase font-mono">
              <Network size={16} /> Autonomous_Ecosystems
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight uppercase tracking-tighter">
              Beyond Chatbots: <br /><span className="text-purple-500 italic">Agentic Workflows</span>
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed font-medium">
              We build systems where AI doesn't just talk—it acts. Autonomous agents capable of executing code and coordinating tasks end-to-end.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex-1 w-full bg-slate-900/50 border border-purple-500/30 p-8 rounded-[2rem] shadow-2xl relative"
          >
             <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-6">
               <span className="text-white font-bold text-xs uppercase tracking-widest font-mono">Agent_Swarm_Active</span>
               <span className="text-purple-400 text-[10px] font-mono flex items-center gap-2 animate-pulse">● Live_Sync</span>
             </div>
             <div className="space-y-4">
               {[
                 { t: "Planner Agent", s: "Request decomposition...", i: <BrainCircuit className="text-blue-400" /> },
                 { t: "Execution Agent", s: "Running Python script...", i: <Code2 className="text-emerald-400" /> },
                 { t: "Review Agent", s: "Verifying accuracy...", i: <ShieldAlert className="text-orange-400" /> }
               ].map((agent, i) => (
                 <motion.div 
                    key={i} 
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.2 }}
                    className="flex items-center gap-4 bg-slate-900 p-4 rounded-xl border border-slate-700"
                 >
                   <div className="bg-white/5 p-2 rounded-lg">{agent.i}</div>
                   <div><p className="text-white font-bold text-sm uppercase tracking-tighter">{agent.t}</p><p className="text-slate-500 text-[10px] font-mono">{agent.s}</p></div>
                 </motion.div>
               ))}
             </div>
          </motion.div>
        </div>
      </section>

      {/* 7. DEVELOPMENT LIFECYCLE */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 uppercase tracking-tighter leading-none">AI Delivery Protocol</h2>
          <p className="text-lg text-slate-600 font-medium italic">// Accelerated_AI_Lifecycle</p>
        </motion.div>
        
        <motion.div 
          
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-5 gap-4"
        >
          {[
            { step: "01", title: "Discovery", desc: "Auditing data sources and defining AI use cases." },
            { step: "02", title: "Model Config", desc: "Choosing LLMs based on cost and reasoning." },
            { step: "03", title: "Build", desc: "Engineering RAG pipelines and prompt chains." },
            { step: "04", title: "Eval", desc: "Testing against edge cases and hallucinations." },
            { step: "05", title: "Launch", desc: "Secure deployment with token tracking." }
          ].map((process, idx) => (
            <motion.div 
              key={idx} 
              // 
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-purple-400 transition-colors relative overflow-hidden group"
            >
               <div className="text-xs font-black text-purple-600 mb-3 uppercase tracking-widest font-mono">Phase_{process.step}</div>
               <h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{process.title}</h4>
               <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{process.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 10. CTA SECTION */}
      <section className="px-6 text-center max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tighter uppercase leading-none">
            Ready to <br /><span className="text-purple-600 italic">Build With AI?</span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium mt-10">
            The future belongs to organizations that deploy AI efficiently. Let our elite engineering team architect your next intelligent product.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-10">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="px-10 py-5 bg-slate-950 text-white font-black rounded-xl shadow-xl hover:bg-purple-600 transition-all uppercase tracking-[0.2em] text-xs block">
                    Start AI Project
                </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}