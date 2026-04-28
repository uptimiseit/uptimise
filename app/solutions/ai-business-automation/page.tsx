'use client';

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { 
  BrainCircuit, Zap, AlertTriangle, TrendingUp, 
  Workflow, Network, FileText, Bot, ArrowRight, 
  CheckCircle2, Database, ShieldCheck, LineChart, 
  Clock, ArrowUpRight, Cog, Layers, Users
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

// const hoverScale: Variants = {
//   hover: { 
//     scale: 1.02, 
//     y: -5,
//     transition: { type: "spring", stiffness: 400, damping: 10 } 
//   }
// };

export default function AIBusinessAutomationPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-amber-200 pb-20 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8 overflow-hidden">
        {/* Ambient AI & Wealth Glow */}
        <motion.div 
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-50 blur-[120px] rounded-full -z-10" 
        />
        <div className="absolute top-20 left-1/4 w-[400px] h-[300px] bg-amber-50/50 blur-[100px] rounded-full -z-10"></div>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          // 
          className="space-y-8"
        >
          <motion.div
          //  
           className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-bold tracking-wide uppercase mb-4 shadow-sm">
            <BrainCircuit size={16} className="animate-pulse" /> Cognitive Automation
          </motion.div>
          
          <motion.h1 
          
          // 
           className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight">
            Give Your Business a <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-amber-500 italic">Cognitive Engine</span>
          </motion.h1>
          
          <motion.p  className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Standard automation only handles predictable tasks. We engineer AI-driven autonomous systems that can read unstructured documents, make complex decisions, and execute business operations 24/7.
          </motion.p>
          
          <motion.div  className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 transition-all text-lg block">
                Automate My Operations
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg flex items-center justify-center gap-2 block">
                Calculate AI ROI <ArrowUpRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. OPERATIONAL CHALLENGES */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 uppercase tracking-tighter">The Limits of Human Scale</h2>
            <p className="text-lg text-slate-600 font-medium">Your operations team is drowning in unstructured data. Throwing more humans at the problem destroys your profit margins.</p>
          </motion.div>
          
          <motion.div 
            
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { title: "Unstructured Chaos", desc: "Invoices and contracts don't follow neat rules. Traditional software fails without manual entry.", icon: <FileText /> },
              { title: "Decision Bottlenecks", desc: "Workflows pause for days waiting for manager approval or document categorization.", icon: <Clock /> },
              { title: "Cost of Scaling", desc: "When volume doubles, headcount must double. This model prevents hyper-growth.", icon: <TrendingUp /> }
            ].map((challenge, idx) => (
              <motion.div 
                key={idx} 
                
                whileHover="hover"
                // variants={hoverScale}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-amber-400 transition-all duration-300 group"
              >
                <div className="mb-6 bg-red-50 text-red-500 w-16 h-16 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">{challenge.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{challenge.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{challenge.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. AUTOMATION STRATEGY */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-indigo-600 font-bold tracking-widest uppercase text-sm font-mono">// Cognitive_Operations</h3>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Injecting Cognition into Operations
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              We deploy LLMs and computer vision as the "brain" between your existing software systems. These agents read, interpret, decide, and route data securely.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Identify high-volume, low-judgment manual tasks.",
                "Deploy secure, private LLMs for unstructured data.",
                "Establish deterministic guardrails for accuracy.",
                "Integrate AI agents directly into your ERP or CRM."
              ].map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center text-slate-800 font-semibold text-lg"
                >
                  <CheckCircle2 className="text-indigo-500 w-6 h-6 mr-3 shrink-0" /> {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-900 p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden border border-indigo-900"
          >
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
             <h3 className="text-2xl font-bold text-white mb-8 relative z-10 flex items-center gap-3 font-mono tracking-tighter">
               <Cog className="text-amber-400 animate-spin-slow" /> Cognitive_Pipeline
             </h3>
             <div className="space-y-6 relative z-10">
               {/* Input */}
               <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} className="flex items-center gap-4 text-slate-300 bg-slate-800 p-4 rounded-xl border border-slate-700">
                 <FileText className="text-slate-400" />
                 <div><span className="font-bold block text-white text-sm uppercase">Unstructured Input</span><span className="text-[10px] font-mono opacity-60">vendor_invoice.pdf</span></div>
               </motion.div>
               
               {/* AI Brain Processing */}
               <div className="flex flex-col items-center justify-center">
                 <motion.div animate={{ height: [10, 24, 10], opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 2 }} className="w-0.5 bg-indigo-500"></motion.div>
                 <div className="bg-indigo-500/20 border border-indigo-500/50 p-6 rounded-2xl text-center w-full shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                   <BrainCircuit className="w-10 h-10 text-indigo-400 mx-auto mb-2 animate-pulse" />
                   <span className="font-bold text-indigo-300 block text-xs uppercase tracking-widest">AI Reasoning Agent</span>
                   <span className="text-[9px] text-indigo-200/70 font-mono">Extracting PO# ... Validating Totals ... Match ID</span>
                 </div>
                 <motion.div animate={{ height: [10, 24, 10], opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }} className="w-0.5 bg-amber-500"></motion.div>
               </div>

               {/* Output */}
               <motion.div initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} className="flex items-center gap-4 text-slate-300 bg-slate-800 p-4 rounded-xl border border-amber-500/30">
                 <Database className="text-amber-400" />
                 <div><span className="font-bold block text-white text-sm uppercase">Structured Execution</span><span className="text-[10px] font-mono opacity-60">POST /api/erp/log_payment</span></div>
               </motion.div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 4. AI SYSTEMS WE BUILD */}
      <section className="py-24 px-6 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-white uppercase tracking-tighter">AI Build Ecosystem</h2>
          </motion.div>
          <motion.div 
            
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              { title: "Document Intelligence", desc: "AI agents that read 100-page contracts, tax forms, or records, extracting data points in seconds.", icon: <FileText /> },
              { title: "Cognitive Support", desc: "Autonomous agents that access your database to process refunds and resolve complex tickets.", icon: <Users /> },
              { title: "Financial Reconciliation", desc: "AI that cross-referencesStatements against ERP ledgers to find discrepancies instantly.", icon: <LineChart /> },
              { title: "Predictive Logistics", desc: "ML models analyzing weather and traffic to dynamically reroute inventory before disruptions.", icon: <Network /> }
            ].map((sys, idx) => (
              <motion.div 
                key={idx} 
                
                whileHover={{ y: -5, backgroundColor: "#1e293b" }}
                className="bg-slate-800 p-8 md:p-10 rounded-3xl border border-slate-700 hover:border-indigo-500 transition-all group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-indigo-500/20 text-indigo-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform border border-indigo-500/30">
                    {sys.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white leading-tight">{sys.title}</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">{sys.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. TECHNOLOGY STACK */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-[3.5rem] p-8 md:p-16 shadow-xl shadow-slate-100 flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 uppercase tracking-tighter">Enterprise AI Stack</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              We build on advanced, secure orchestration layers to ensure your AI agents operate with deterministic accuracy.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              {["GPT-4o", "Claude 3.5", "Gemini", "LangChain", "LlamaIndex", "Pinecone", "AWS Bedrock"].map(tech => (
                <span key={tech} className="px-4 py-2 bg-slate-100 text-slate-800 font-bold rounded-lg text-[10px] border border-slate-200 hover:border-indigo-400 transition-colors cursor-default font-mono uppercase">
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
             <motion.div  className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center"><h4 className="text-indigo-600 font-bold mb-1 text-sm uppercase">Reasoning</h4><p className="text-slate-500 text-xs font-medium">GPT-4, Claude 3</p></motion.div>
             <motion.div  className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center"><h4 className="text-indigo-600 font-bold mb-1 text-sm uppercase">Memory</h4><p className="text-slate-500 text-xs font-medium">Vector DB (RAG)</p></motion.div>
             <motion.div  className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center"><h4 className="text-indigo-600 font-bold mb-1 text-sm uppercase">Orchestration</h4><p className="text-slate-500 text-xs font-medium">LangChain, AutoGen</p></motion.div>
             <motion.div  className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center"><h4 className="text-indigo-600 font-bold mb-1 text-sm uppercase">Vision</h4><p className="text-slate-500 text-xs font-medium">AWS Textract</p></motion.div>
          </motion.div>
        </div>
      </section>

      {/* 7. IMPLEMENTATION PROCESS */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 uppercase tracking-tighter leading-none">Safe Implementation Protocol</h2>
            <p className="text-lg text-slate-600 font-medium italic">// Hallucination_Free_Deployment</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Process Audit", d: "IdentifyingDisruption tasks." },
              { step: "02", title: "Structuring", d: "Cleaning private data for RAG." },
              { step: "03", title: "Prompt Eng.", d: "Crafting deterministic logic." },
              { step: "04", title: "Shadow Mode", d: "Verifying accuracy vs humans." },
              { step: "05", title: "Deployment", d: "Live API fallback integration." }
            ].map((process, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-indigo-400 transition-colors relative group"
              >
                <div className="text-xs font-black text-indigo-600 mb-3 uppercase tracking-widest font-mono">Phase_{process.step}</div>
                <h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{process.title}</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{process.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. ROI BENEFITS */}
      <section className="py-24 px-6 border-y border-slate-100 bg-white">
        <motion.div 
          
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div  className="bg-slate-50 p-10 rounded-3xl text-center group">
            <motion.div whileHover={{ scale: 1.1 }} className="w-16 h-16 mx-auto bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mb-6"><Clock size={32} /></motion.div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tighter">Instant Speed</h3>
            <p className="text-slate-600 text-sm font-medium">Tasks that took employees 45 minutes are executed by AI in under 3 seconds.</p>
          </motion.div>
          <motion.div  className="bg-slate-50 p-10 rounded-3xl text-center group">
            <motion.div whileHover={{ scale: 1.1 }} className="w-16 h-16 mx-auto bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mb-6"><TrendingUp size={32} /></motion.div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tighter">Infinite Scale</h3>
            <p className="text-slate-600 text-sm font-medium">Process 10 invoices or 10,000 a day without hiring a single new back-office employee.</p>
          </motion.div>
          <motion.div  className="bg-slate-50 p-10 rounded-3xl text-center group">
            <motion.div whileHover={{ scale: 1.1 }} className="w-16 h-16 mx-auto bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mb-6"><ShieldCheck size={32} /></motion.div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tighter">Zero Error</h3>
            <p className="text-slate-600 text-sm font-medium">Eliminate typos, copy-paste errors, and data inconsistencies permanently from your business.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* 10. CTA SECTION */}
      <section className=" px-6 text-center max-w-4xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-8xl font-black text-slate-900 tracking-tighter uppercase leading-none">
            Hire a Digital <br /><span className="text-indigo-600 italic">Workforce.</span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mt-10 font-medium">
            Free your human talent for strategy and creativity. Let Uptimise IT build the AI agents that run the rest of your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-10">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-12 py-6 bg-slate-950 text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl shadow-2xl">
                <Link href="/contact">Discuss AI Integration</Link>
            </motion.button>
          </div>
        </motion.div>
      </section>

    </div>
  );
}