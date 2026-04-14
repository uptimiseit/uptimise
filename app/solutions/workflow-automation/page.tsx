'use client';

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { 
  Workflow, Zap, Link as LinkIcon, Clock, 
  AlertCircle, TrendingUp, Cpu, Database, 
  ArrowRight, CheckCircle2, Network, Bot, 
  Layers, FileText, Users, ArrowUpRight,
  MessageSquare
} from "lucide-react";

// --- Animation Variants ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

const hoverScale: Variants = {
  hover: { 
    scale: 1.02, 
    transition: { type: "spring", stiffness: 400, damping: 10 } 
  }
};

export default function WorkflowAutomationPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-100 pb-20 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8 overflow-hidden">
        {/* Ambient Connectivity Glow */}
        <motion.div 
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-50 blur-[120px] rounded-full -z-10" 
        />
        
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-8">
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-sm font-bold tracking-wide uppercase mb-4 shadow-sm">
            <Workflow size={16} className="animate-spin-slow" /> Intelligent Operations
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight">
            Intelligent <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-violet-600 italic">Workflow Automation</span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Eliminate manual data entry, connect siloed enterprise applications, and scale your operations without adding headcount. We engineer autonomous workflows powered by custom APIs.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="px-8 py-4 bg-cyan-600 text-white font-bold rounded-xl shadow-lg shadow-cyan-600/20 hover:bg-cyan-700 transition-all text-lg block">
                Automate Your Business
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg flex items-center justify-center gap-2 block">
                Audit My Workflows <ArrowUpRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. MANUAL WORKFLOW CHALLENGES */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 uppercase tracking-tighter">The Silent Killer</h2>
            <p className="text-lg text-slate-600 font-medium">Manual processes introduce errors, frustrate teams, and destroy profit margins.</p>
          </motion.div>
          
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Data Silos", desc: "CRM and ERP systems don't talk, forcing manual copy-pasting between screens.", icon: <Database /> },
              { title: "Human Error", desc: "Manual entry leads to typos, lost invoices, and costly compliance violations.", icon: <AlertCircle /> },
              { title: "Scaling Bottlenecks", desc: "When business doubles, headcount doubles, erasing the benefits of growth.", icon: <TrendingUp /> }
            ].map((challenge, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                whileHover="hover"
                // variants={hoverScale}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-red-200 transition-all duration-300 group"
              >
                <div className="mb-6 bg-red-50 text-red-500 w-16 h-16 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">{challenge.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{challenge.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{challenge.desc}</p>
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
            <h3 className="text-cyan-600 font-bold tracking-widest uppercase text-sm font-mono">// Strategic_Operations</h3>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Connecting the Disconnected
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              We engineer fault-tolerant middleware that handles complex branching logic, data transformation, and automated error recovery.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Deep workflow audits to identify bottlenecks.",
                "Custom API development for legacy systems.",
                "Straight-Through Processing (STP) architecture.",
                "Real-time error logging and alerting systems."
              ].map((item, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-center text-slate-800 font-semibold text-lg">
                  <CheckCircle2 className="text-cyan-500 w-6 h-6 mr-3 shrink-0" /> {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-900 p-8 md:p-12 rounded-[3rem] relative overflow-hidden shadow-2xl"
          >
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
             <h3 className="text-2xl font-bold text-white mb-8 relative z-10 flex items-center gap-3">
               <Cpu className="text-cyan-400" /> Data Flow Architecture
             </h3>
             <div className="space-y-4 relative z-10">
               {/* CRM */}
               <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} className="flex items-center justify-between bg-slate-800 p-4 rounded-xl border border-slate-700">
                 <div className="flex items-center gap-3 text-white font-bold text-sm uppercase tracking-widest"><Layers className="text-cyan-400" /> CRM_Sync</div>
                 <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.5 }}><ArrowRight className="text-slate-500" /></motion.div>
               </motion.div>
               
               <div className="flex justify-center">
                  <motion.div animate={{ height: [10, 30, 10] }} transition={{ repeat: Infinity, duration: 2 }} className="w-0.5 bg-cyan-500"></motion.div>
               </div>
               
               {/* Middleware */}
               <motion.div initial={{ scale: 0.9 }} whileInView={{ scale: 1 }} className="flex items-center justify-center bg-cyan-500/20 border border-cyan-500/50 p-6 rounded-2xl relative">
                 <div className="absolute -left-1 -top-1 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                 <div className="flex items-center gap-3 text-cyan-300 font-bold uppercase tracking-tighter text-sm">Autonomous_Logic_Node</div>
               </motion.div>
               
               <div className="flex justify-center">
                  <motion.div animate={{ height: [10, 30, 10] }} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }} className="w-0.5 bg-cyan-500"></motion.div>
               </div>
               
               {/* ERP */}
               <motion.div initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} className="flex items-center justify-between bg-slate-800 p-4 rounded-xl border border-slate-700">
                 <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}><ArrowRight className="text-slate-500" /></motion.div>
                 <div className="flex items-center gap-3 text-white font-bold text-sm uppercase tracking-widest"><Database className="text-violet-400" /> ERP_Update</div>
               </motion.div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 4. AUTOMATION SYSTEMS */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 uppercase tracking-tighter">Autonomous Engines</h2>
            <p className="text-lg text-slate-600 font-medium">Replacing manual effort with digital workers across departments.</p>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Financial Automation", desc: "Auto-extracting PDF data, matching purchase orders, and pushing to accounting software.", icon: <FileText /> },
              { title: "HR Onboarding", desc: "Instantly provisioning software accounts and updating payroll upon new hire detection.", icon: <Users /> },
              { title: "Sales CRM Sync", desc: "Routing marketing leads to sales reps while enriching data from third-party APIs.", icon: <LinkIcon /> },
              { title: "Supply Chain", desc: "Automatic reorder requests triggered when warehouse stock drops below dynamic thresholds.", icon: <Layers /> }
            ].map((sys, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm hover:border-cyan-600 transition-all group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                    {sys.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tighter">{sys.title}</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed pl-16 font-medium">{sys.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. AI AUTOMATION TOOLS */}
      <section className="py-24 px-6 bg-[#0B0F19] text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-300 text-[10px] font-black tracking-widest uppercase font-mono">
              <Bot size={14} /> Intelligent_Agents
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-tight">
              Beyond Rules: <br /><span className="text-violet-400 italic">Cognitive Automation</span>
            </h2>
            <p className="text-lg text-slate-400 font-medium leading-relaxed">
              Standard automation fails with unstructured data. We inject AI agents into the workflow to read documents and make cognitive decisions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {["Intelligent OCR Extraction", "NLP Email Triage", "Sentiment Triggers", "Autonomous Exceptions"].map((sec, idx) => (
                 <motion.div key={idx} whileHover={{ scale: 1.05 }} className="flex items-center gap-3 bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                   <Zap className="text-violet-400 shrink-0 w-4 h-4" />
                   <span className="text-[10px] font-black uppercase tracking-widest text-slate-200">{sec}</span>
                 </motion.div>
               ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-slate-800 border border-slate-700 p-8 rounded-3xl relative shadow-2xl"
          >
            <h3 className="text-sm font-bold text-white mb-6 border-b border-slate-700 pb-4 uppercase tracking-widest font-mono">Cognitive_Pipeline_Test</h3>
            <div className="space-y-6">
              <motion.div initial={{ opacity: 0.5 }} className="bg-slate-900 p-4 rounded-xl border border-slate-700">
                <p className="text-slate-500 text-[10px] uppercase font-bold mb-2">Standard Rule</p>
                <span className="text-xs text-slate-400">IF form_submitted &rarr; SEND email.</span>
              </motion.div>
              <div className="flex justify-center"><TrendingUp className="text-slate-700 rotate-90" /></div>
              <motion.div 
                animate={{ boxShadow: ["0 0 0px #8b5cf6", "0 0 15px #8b5cf6", "0 0 0px #8b5cf6"] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="bg-slate-900 p-4 rounded-xl border border-violet-500/30"
              >
                <p className="text-violet-400 text-[10px] uppercase font-bold mb-2">AI-Augmented Logic</p>
                <span className="text-xs text-slate-200">Read angry support ticket &rarr; AI detects sentiment &rarr; Summarizes issue &rarr; Alerts VP instantly.</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. INTEGRATION STACK */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 uppercase tracking-tighter">Integration Stack</h2>
          <p className="text-lg text-slate-600 font-medium italic">// Platform_Agnostic_Connectivity</p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {["Custom Webhooks", "n8n Self-Hosted", "Make.com", "Zapier Enterprise", "Workato", "MuleSoft", "GraphQL"].map((tech, i) => (
            <motion.span 
              key={tech} 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05, borderColor: "#06b6d4", color: "#0891b2" }}
              className="px-6 py-3 bg-white border border-slate-200 shadow-sm rounded-xl text-slate-700 font-bold text-xs uppercase tracking-widest cursor-default transition-all"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </section>

      {/* 8. BUSINESS IMPACT */}
      <section className="py-24 px-6 border-y border-slate-100 bg-white">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div variants={fadeInUp} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center group">
            <motion.div whileHover={{ scale: 1.1 }} className="w-16 h-16 mx-auto bg-cyan-50 text-cyan-600 rounded-full flex items-center justify-center mb-6"><Clock size={32} /></motion.div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tighter">Hours Reclaimed</h3>
            <p className="text-slate-500 text-sm font-medium">Save your team 20+ hours a week on repetitive administrative logic.</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center group">
            <motion.div whileHover={{ scale: 1.1 }} className="w-16 h-16 mx-auto bg-cyan-50 text-cyan-600 rounded-full flex items-center justify-center mb-6"><TrendingUp size={32} /></motion.div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tighter">Linear Scaling</h3>
            <p className="text-slate-500 text-sm font-medium">Double your transaction volume without doubling your back-office staff.</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center group">
            <motion.div whileHover={{ scale: 1.1 }} className="w-16 h-16 mx-auto bg-cyan-50 text-cyan-600 rounded-full flex items-center justify-center mb-6"><Zap size={32} /></motion.div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tighter">Instant Velocity</h3>
            <p className="text-slate-500 text-sm font-medium">Reduce approval and processing times from days to absolute milliseconds.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* 10. CTA SECTION */}
      <section className="py-32 px-6 text-center max-w-4xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-8xl font-extrabold text-slate-900 tracking-tighter uppercase leading-none">
            Stop Doing <br /><span className="text-cyan-600 italic">Robot Work.</span>
          </h2>
          <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto mt-10 font-medium">
            Free your team for high-value strategic tasks. Let Uptimise IT engineer the intelligent automation layer your business needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-10">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-12 py-6 bg-cyan-600 text-white font-black uppercase tracking-[0.2em] text-xs rounded-full shadow-xl">
                <Link href="/contact">Start Your Project</Link>
            </motion.button>
          </div>
        </motion.div>
      </section>

    </div>
  );
}