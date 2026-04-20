'use client';

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { 
  Bot, Rocket, ShieldAlert, Coins, 
  Clock, ArrowRight, BrainCircuit, Zap, 
  CheckCircle2, Network, Cpu, Code2,
  ArrowUpRight, Database, Layers, Sparkles
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
//       staggerChildren: 0.12
//     }
//   }
// };

export default function AIStartupsIndustryPage() {
  return (
    <div className="min-h-screen bg-white text-slate-600 font-sans selection:bg-violet-100 pb-20 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8">
        {/* Soft Ambient Glows */}
        <motion.div 
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-50 blur-[120px] rounded-full -z-10 pointer-events-none"
        />
        
        <motion.div 
          initial="hidden"
          animate="visible"
          // variants={staggerContainer}
          className="space-y-8"
        >
          <motion.div 
          // variants={fadeInUp}
           className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-violet-100 text-violet-600 text-sm font-bold tracking-wide uppercase mb-4 shadow-sm">
            <Sparkles size={16} /> For Founders & VCs
          </motion.div>
          
          <motion.h1
          //  variants={fadeInUp}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight">
            Engineer Your AI Startup <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">At Venture Speed</span>
          </motion.h1>
          
          <motion.p 
          //  variants={fadeInUp}
           
          className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            Don't burn your runway trying to hire prompt engineers. Uptimise IT partners with ambitious founders to design, build, and scale AI-native products—from rapid MVPs to enterprise-grade autonomous agents.
          </motion.p>
          
          <motion.div 
          // variants={fadeInUp}
           className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="px-8 py-4 bg-violet-600 text-white font-bold rounded-xl shadow-lg shadow-violet-200 hover:bg-violet-700 hover:scale-105 transition-all text-lg block">
                Build Your AI MVP
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-900 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg flex items-center justify-center gap-2 block">
                Talk to an AI Architect <ArrowUpRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. STARTUP CHALLENGES */}
      <section className="py-24 px-6 border-y border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">The Risks of Building AI</h2>
            <p className="text-lg text-slate-500">The AI landscape changes weekly. Building without a scalable foundation guarantees you will be outpaced by competitors.</p>
          </motion.div>
          
          <motion.div 
            // variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { title: "Runway Burn", desc: "Spending 6 months building a complex wrapper means you might run out of cash before achieving PMF.", icon: <Clock className="text-orange-500 w-8 h-8" /> },
              { title: "Spiraling Token Costs", desc: "Inefficient prompting can cause your API bills to wipe out your gross margins instantly.", icon: <Coins className="text-orange-500 w-8 h-8" /> },
              { title: "Model Hallucinations", desc: "If your AI gives confident but incorrect answers, early adopters will lose trust and churn.", icon: <ShieldAlert className="text-orange-500 w-8 h-8" /> }
            ].map((challenge, idx) => (
              <motion.div 
                key={idx} 
                // variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-orange-200 transition-all duration-300"
              >
                <div className="mb-6 bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center border border-orange-100">{challenge.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{challenge.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{challenge.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. AI ARCHITECTURE STRATEGY */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-violet-600 font-bold tracking-widest uppercase text-sm font-mono">// Strategic_Foundation</h3>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Deterministic Engineering for Probabilistic Models
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              We build robust engineering wrappers around LLMs to ensure your application is fast, cost-efficient, and factually grounded.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Advanced RAG (Retrieval-Augmented Generation) pipelines.",
                "Semantic caching layers to drop API costs by up to 60%.",
                "Model routing (switching models dynamically based on task).",
                "Strict output parsers for structured JSON responses."
              ].map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center text-slate-600 font-medium text-lg"
                >
                  <CheckCircle2 className="text-emerald-500 w-6 h-6 mr-3 shrink-0" /> {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-200 shadow-xl relative overflow-hidden"
          >
             <h3 className="text-2xl font-bold text-slate-900 mb-8 relative z-10 flex items-center gap-3">
               <Database className="text-violet-600" /> RAG Architecture
             </h3>
             <div className="space-y-4 relative z-10 flex flex-col items-center">
               <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white border border-slate-200 p-4 rounded-xl w-full flex justify-between items-center shadow-sm"
               >
                 <span className="text-slate-900 font-bold">User Query</span>
                 <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                  <ArrowRight className="text-slate-300" />
                 </motion.div>
               </motion.div>
               
               <div className="flex w-full gap-4">
                 <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex-1 bg-violet-50 border border-violet-200 p-4 rounded-xl text-center shadow-sm relative"
                 >
                   <Network className="w-6 h-6 text-violet-600 mx-auto mb-2" />
                   <p className="text-[10px] text-violet-800 font-bold uppercase">Vector DB</p>
                   <div className="absolute -top-1 -right-1 w-2 h-2 bg-violet-400 rounded-full animate-ping"></div>
                 </motion.div>
                 <div className="flex flex-col justify-center text-slate-300"><ArrowRight /></div>
                 <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex-1 bg-indigo-50 border border-indigo-200 p-4 rounded-xl text-center shadow-sm"
                 >
                   <BrainCircuit className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
                   <p className="text-[10px] text-indigo-800 font-bold uppercase">LLM Engine</p>
                 </motion.div>
               </div>

               <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl w-full flex items-center gap-3"
               >
                 <CheckCircle2 className="text-emerald-600" />
                 <div>
                   <p className="text-slate-900 font-bold text-sm">Grounded Response</p>
                   <p className="text-xs text-emerald-700 font-mono tracking-tighter">SUCCESS::NO_HALLUCINATION</p>
                 </div>
               </motion.div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 4. AI PLATFORMS WE BUILD */}
      <section className="py-24 px-6 border-y border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 uppercase tracking-tighter">AI Build Ecosystem</h2>
            <p className="text-lg text-slate-500 font-medium">From validation wrappers to complex autonomous systems.</p>
          </motion.div>
          <motion.div 
            // variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { title: "B2B AI Copilots", icon: <Bot size={28} />, desc: "Intelligent assistants embedded directly into enterprise SaaS tools." },
              { title: "Generative Tools", icon: <Sparkles size={28} />, desc: "Platforms that generate text, code, or images based on fine-tuning." },
              { title: "Autonomous Agents", icon: <Cpu size={28} />, desc: "Multi-agent systems that perform complex tasks without human oversight." },
              { title: "Semantic Search", icon: <Database size={28} />, desc: "Tools that allow users to 'chat' with thousands of internal documents." }
            ].map((prod, idx) => (
              <motion.div 
                key={idx} 
                // variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-violet-400 transition-all group shadow-sm"
              >
                <div className="text-violet-600 mb-6 bg-violet-50 w-14 h-14 flex items-center justify-center rounded-2xl group-hover:bg-violet-600 group-hover:text-white transition-colors border border-violet-100">{prod.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 leading-tight">{prod.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{prod.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. AI TECHNOLOGY STACK */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-[3.5rem] p-8 md:p-16 shadow-sm flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 uppercase">The Unicorn Stack</h2>
            <p className="text-lg text-slate-500 leading-relaxed font-medium">
              We build using the same foundation models and orchestration tools used by the fastest-growing AI companies in the world.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["Next.js", "Python", "OpenAI", "Anthropic", "LangChain", "Pinecone", "Vercel AI", "Supabase"].map(tech => (
                <span key={tech} className="px-4 py-2 bg-slate-50 text-slate-700 font-bold rounded-lg text-[10px] border border-slate-200 hover:border-violet-500 hover:text-violet-600 transition-colors cursor-default font-mono uppercase">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div 
            // variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1 w-full grid grid-cols-2 gap-4"
          >
             <motion.div
              // variants={fadeInUp}
               className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm"><h4 className="text-violet-600 font-bold mb-2 text-sm uppercase">Models</h4><p className="text-slate-500 text-xs font-medium">GPT-4o, Claude 3.5</p></motion.div>
             <motion.div 
            //  variants={fadeInUp}
              className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm"><h4 className="text-violet-600 font-bold mb-2 text-sm uppercase">Memory</h4><p className="text-slate-500 text-xs font-medium">Pinecone, pgvector</p></motion.div>
             <motion.div
              // variants={fadeInUp} 
              className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm"><h4 className="text-violet-600 font-bold mb-2 text-sm uppercase">Chains</h4><p className="text-slate-500 text-xs font-medium">LangChain, AutoGen</p></motion.div>
             <motion.div
              // variants={fadeInUp}
               className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm"><h4 className="text-violet-600 font-bold mb-2 text-sm uppercase">Runtime</h4><p className="text-slate-500 text-xs font-medium">Next.js, Vercel</p></motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. AI SOFTWARE FACTORY ACCELERATION */}
      <section className="py-24 px-6 relative overflow-hidden bg-slate-950 text-white rounded-[4rem] mx-6">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12 p-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] font-black tracking-widest uppercase font-mono">
              <Zap size={14} /> Velocity_Protocol::v2
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight uppercase">
              Build AI with the <span className="text-cyan-400 italic">AI Factory</span>
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed font-medium">
              We use AI to build AI. Our proprietary factory utilizes autonomous coding agents to write boilerplate 40% faster than traditional teams.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Drastically reduced runway burn for early-stage founders.",
                "Automated CI/CD and container scaffolding.",
                "Rapid MVP iterations deployed in weeks, not months."
              ].map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center text-slate-300 font-medium"
                >
                  <CheckCircle2 className="text-cyan-400 w-5 h-5 mr-3 shrink-0" /> {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex-1 w-full bg-slate-900 border border-slate-700 p-8 rounded-[2rem] shadow-2xl flex items-center justify-center min-h-[300px] relative"
          >
             <div className="text-center relative z-10">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Rocket className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                </motion.div>
                <h3 className="text-2xl font-bold tracking-tight uppercase">MVP Velocity</h3>
                <div className="flex items-center justify-center gap-4 mt-6">
                  <div className="text-slate-500 line-through text-lg font-mono">6_MONTHS</div>
                  <ArrowRight className="text-slate-400" />
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-cyan-400 font-black text-3xl font-mono"
                  >
                    6_WEEKS
                  </motion.div>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 7. DEVELOPMENT PROCESS */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 uppercase tracking-tighter leading-none">The AI Delivery Protocol</h2>
          <p className="text-lg text-slate-500 font-medium italic">// Accelerated_Foundry_Lifecycle</p>
        </motion.div>
        
        <motion.div 
          // variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-5 gap-4"
        >
          {[
            { step: "01", title: "Discovery", desc: "Defining the LLM use case and mapping context data." },
            { step: "02", title: "Prototyping", desc: "Testing raw system prompts to validate feasibility." },
            { step: "03", title: "Architecture", desc: "Building Next.js UIs and engineering RAG backends." },
            { step: "04", title: "Evaluation", desc: "Running 'Eval' frameworks to score response accuracy." },
            { step: "05", title: "Launch", desc: "Deploying with token tracking and cost analytics." }
          ].map((process, idx) => (
            <motion.div 
              key={idx} 
              // variants={fadeInUp}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-violet-500 transition-colors shadow-sm group"
            >
               <div className="text-[10px] font-black text-violet-600 mb-3 uppercase tracking-widest font-mono">Phase_{process.step}</div>
               <h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{process.title}</h4>
               <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{process.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 8. STARTUP SUCCESS BENEFITS */}
      <section className="py-24 px-6 border-y border-slate-100 bg-slate-50/50">
        <motion.div 
          // variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div
          //  variants={fadeInUp}
            className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="w-16 h-16 mx-auto bg-violet-50 text-violet-600 rounded-full flex items-center justify-center mb-6 border border-violet-100"><Code2 size={32} /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tighter">Investor-Ready Code</h3>
            <p className="text-slate-500 text-sm font-medium">Pass technical due diligence with scalable, well-documented architecture that VCs love.</p>
          </motion.div>
          <motion.div 
          //  variants={fadeInUp}
            
          className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="w-16 h-16 mx-auto bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-6 border border-indigo-100"><Coins size={32} /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tighter">Margin Protection</h3>
            <p className="text-slate-500 text-sm font-medium">Semantic caching and optimized routing ensure your platform remains profitable at scale.</p>
          </motion.div>
          <motion.div
          //  variants={fadeInUp}
            className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="w-16 h-16 mx-auto bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-6 border border-emerald-100"><Layers size={32} /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tighter">Model Independence</h3>
            <p className="text-slate-500 text-sm font-medium">Architected wrappers so you can swap LLM providers instantly if pricing or performance shifts.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* 9. CASE STUDIES */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end gap-6"
        >
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 uppercase tracking-tighter">Startup Success Stories</h2>
            <p className="text-slate-500 text-lg font-medium">Engineering scalable AI for the next generation of visionary founders.</p>
          </div>
          <Link href="/case-studies" className="text-violet-600 font-bold hover:text-violet-700 flex items-center gap-2 text-sm uppercase tracking-widest">
            View All Work <ArrowRight size={18} />
          </Link>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "B2B Legal AI Copilot", desc: "Engineered a RAG analysis tool, reducing review time by 80% and helping secure a $2M Seed round.", tags: ["Next.js", "Pinecone", "Claude 3"] },
            { title: "Marketing Content Engine", desc: "Built a platform handling 50k+ daily requests, utilizing caching to reduce API bills by 45%.", tags: ["React", "OpenAI", "LangChain"] },
          ].map((study, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 hover:border-violet-300 transition-all group cursor-pointer shadow-sm"
            >
              <div className="flex gap-2 mb-6">
                {study.tags.map(tag => <span key={tag} className="text-[10px] font-black font-mono text-violet-600 bg-violet-50 px-3 py-1 rounded-full border border-violet-100">{tag}</span>)}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-violet-600 transition-colors leading-tight">{study.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-8 text-sm font-medium">{study.desc}</p>
              <span className="text-violet-600 font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform text-xs uppercase tracking-widest">
                Read Technical Case Study <ArrowRight size={16} />
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 10. CTA SECTION */}
      <section className="py-32 px-6 text-center max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-8xl font-extrabold text-slate-900 tracking-tighter uppercase leading-none">
            Launch Your <br /><span className="text-violet-600 italic">Vision.</span>
          </h2>
          <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto font-medium mt-10">
            The AI market moves too fast for traditional cycles. Partner with Uptimise IT to architect and launch your startup at venture speed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-10">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="px-10 py-5 bg-violet-600 text-white font-black rounded-xl shadow-xl shadow-violet-200 hover:bg-violet-700 transition-all uppercase tracking-[0.2em] text-xs block">
                Build Your AI Product
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="px-10 py-5 bg-white border-2 border-slate-200 text-slate-800 font-black rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all uppercase tracking-[0.2em] text-xs block">
                Calculate MVP Cost
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}