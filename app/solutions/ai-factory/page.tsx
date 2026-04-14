'use client';

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { 
  Bot, Factory, Cpu, Terminal, ShieldAlert, Clock, 
  Coins, Zap, Network, Code2, ShieldCheck, ArrowRight,
  CheckCircle2, Layers, LineChart, Globe, Box, Server,
  ArrowUpRight, Workflow, Cloud
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
    scale: 1.03, 
    y: -5,
    transition: { type: "spring", stiffness: 400, damping: 10 } 
  }
};

export default function AISoftwareFactoryPage() {
  return (
    <div className="min-h-screen bg-white text-slate-600 font-sans selection:bg-indigo-100 pb-20 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8">
        {/* Soft Ambient Glows (Light version) */}
        <motion.div 
          animate={{ opacity: [0.4, 0.6, 0.4], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-50 blur-[120px] rounded-full -z-10"
        />
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-cyan-50 blur-[100px] rounded-full -z-10"></div>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-indigo-600 text-sm font-bold tracking-wide uppercase mb-4 shadow-sm">
            <Factory size={16} className="animate-spin-slow" /> The Core Delivery Engine
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500 italic">AI Software Factory</span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
            Welcome to the future of product engineering. We have replaced traditional, slow, manual coding with a proprietary ecosystem of autonomous AI agents orchestrated by elite human architects. 
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl shadow-lg shadow-slate-200 hover:bg-slate-800 transition-all text-lg uppercase tracking-wider block">
                Deploy The Factory
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-900 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg flex items-center justify-center gap-2 block">
                See How It Works <ArrowUpRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. TRADITIONAL DEVELOPMENT PROBLEMS */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 uppercase tracking-tighter">The Legacy Model is Broken</h2>
            <p className="text-lg text-slate-500 font-medium">Traditional agencies throw human bodies at repetitive tasks, resulting in bloated budgets and infinite delays.</p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { title: "Painfully Slow Delivery", desc: "Writing boilerplate code takes months before you even see a prototype.", icon: <Clock className="text-orange-500" /> },
              { title: "Astronomical Costs", desc: "You pay premium rates for senior developers to write repetitive, low-value CRUD APIs.", icon: <Coins className="text-orange-500" /> },
              { title: "Human Error & Bugs", desc: "Manual code writing introduces typos and security flaws that break in production.", icon: <ShieldAlert className="text-orange-500" /> }
            ].map((challenge, idx) => (
              <motion.div 
                key={idx} 
                // variants={fadeInUp}
                whileHover="hover"
                variants={hoverScale}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-orange-200 transition-all duration-300 group"
              >
                <div className="mb-6 bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center border border-orange-100 group-hover:scale-110 transition-transform">{challenge.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{challenge.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{challenge.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. AI SOFTWARE FACTORY MODEL */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-indigo-600 font-bold tracking-widest uppercase text-sm font-mono">// The_Paradigm_Shift</h3>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Human Architecture + Machine Execution
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed font-medium">
              The AI Software Factory flips the traditional model. Our senior architects spend 100% of their time on design and logic, while agents handle 90% of execution.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "10x faster generation of infrastructure code.",
                "Deterministic output guided by strict architectural prompts.",
                "Zero fatigue—agents code and refactor 24/7.",
                "Human-in-the-loop review for absolute quality."
              ].map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center text-slate-800 font-semibold text-lg"
                >
                  <CheckCircle2 className="text-emerald-500 w-6 h-6 mr-3 shrink-0" /> {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-200 shadow-xl relative overflow-hidden"
          >
             <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <span className="text-slate-900 font-bold flex items-center gap-2"><Cpu className="text-indigo-600" /> Human Architect</span>
                  <motion.span animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2 }} className="text-[10px] font-mono text-indigo-600 bg-indigo-50 px-2 py-1 rounded border border-indigo-100">Defines Blueprint</motion.span>
                </div>
                <div className="flex justify-center">
                  <motion.div animate={{ y: [0, 5, 0], opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                    <ArrowRight className="text-slate-300 rotate-90" />
                  </motion.div>
                </div>
                <motion.div whileHover={{ scale: 1.02 }} className="bg-white border border-indigo-100 p-6 rounded-2xl shadow-sm text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-indigo-50/20 animate-pulse"></div>
                  <Bot className="w-12 h-12 text-indigo-500 mx-auto mb-3 relative z-10" />
                  <h4 className="text-slate-900 font-bold text-lg relative z-10 font-mono tracking-tighter">AI_Factory_Engine</h4>
                  <p className="text-slate-400 text-xs mt-2 relative z-10 font-medium">Generates, tests, and self-heals code.</p>
                </motion.div>
                <div className="flex justify-center">
                  <motion.div animate={{ y: [0, 5, 0], opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.75 }}>
                    <ArrowRight className="text-slate-300 rotate-90" />
                  </motion.div>
                </div>
                <div className="flex items-center justify-between border-t border-slate-200 pt-4">
                  <span className="text-slate-900 font-bold flex items-center gap-2"><ShieldCheck className="text-emerald-600" /> Human QA</span>
                  <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-2 py-1 rounded border border-emerald-100 uppercase font-black">Approves & Deploys</span>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 4. AI AGENTS ECOSYSTEM */}
      <section className="py-20 px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-16 relative z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 uppercase tracking-tighter">The Swarm Ecosystem</h2>
            <p className="text-lg text-slate-500 font-medium">Your project is engineered by a highly specialized swarm of autonomous agents.</p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { role: "Architect Agent", task: "Translates requirements into schemas and API specs.", icon: <Layers size={24} />, color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-100" },
              { role: "Coder Agent", task: "Generates frontend and backend code in real-time.", icon: <Code2 size={24} />, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
              { role: "QA Agent", task: "Writes unit tests and attempts to break generated code.", icon: <ShieldAlert size={24} />, color: "text-red-600", bg: "bg-red-50", border: "border-red-100" },
              { role: "DevOps Agent", task: "Writes Dockerfiles and configures CI/CD pipelines.", icon: <Terminal size={24} />, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" }
            ].map((agent, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                whileHover="hover"
                // variants={hoverScale}
                className={`p-8 rounded-3xl bg-white border ${agent.border} hover:shadow-md transition-all duration-300 relative group`}
              >
                <div className={`w-14 h-14 ${agent.bg} ${agent.color} rounded-2xl flex items-center justify-center mb-6 shadow-sm`}>
                  {agent.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 font-mono tracking-tight">{agent.role}</h3>
                <p className="text-slate-500 text-xs leading-relaxed font-medium">{agent.task}</p>
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  className={`absolute bottom-0 left-0 w-full h-1 ${agent.bg} origin-left`}
                ></motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. TECHNOLOGY STACK */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-slate-50 border border-slate-200 rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row gap-12 items-center shadow-sm">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 uppercase tracking-tighter">Factory Infrastructure</h2>
            <p className="text-lg text-slate-500 leading-relaxed font-medium">
              We leverage the most powerful models to generate clean, enterprise-grade Next.js, Node, and Python code.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["GPT-4o", "Claude 3.5", "Cursor", "LangChain", "AutoGen"].map(tech => (
                <span key={tech} className="px-4 py-2 bg-white text-indigo-600 font-bold rounded-lg text-xs border border-slate-200 hover:border-indigo-400 transition-colors cursor-default font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1 w-full grid grid-cols-2 gap-4"
          >
             <motion.div variants={fadeInUp} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"><h4 className="text-blue-600 font-bold mb-1 text-sm uppercase">Models</h4><p className="text-slate-400 text-xs font-medium">GPT-4, Claude, Llama</p></motion.div>
             <motion.div variants={fadeInUp} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"><h4 className="text-emerald-600 font-bold mb-1 text-sm uppercase">Logic</h4><p className="text-slate-400 text-xs font-medium">LangChain & AutoGen</p></motion.div>
             <motion.div variants={fadeInUp} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"><h4 className="text-purple-600 font-bold mb-1 text-sm uppercase">Augment</h4><p className="text-slate-400 text-xs font-medium">Cursor & Copilot</p></motion.div>
             <motion.div variants={fadeInUp} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"><h4 className="text-orange-600 font-bold mb-1 text-sm uppercase">Target</h4><p className="text-slate-400 text-xs font-medium">TS, Python, Go</p></motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. DEVELOPMENT WORKFLOW */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 uppercase tracking-tighter">The Assembly Line</h2>
            <p className="text-lg text-slate-500 font-medium italic">// Turning raw ideas into deployed assets.</p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-5 gap-4"
          >
            {[
              { step: "01", title: "Ingestion", desc: "PRDs and Figma files are fed into the system." },
              { step: "02", title: "Scaffold", desc: "Agents generate repo, DB, and routes in seconds." },
              { step: "03", title: "Logic", desc: "Human + AI pair programming for complex logic." },
              { step: "04", title: "QA Loop", desc: "Automated agents write tests and self-fix builds." },
              { step: "05", title: "Ship", desc: "Architect reviews final code and pushes live." }
            ].map((process, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-indigo-400 transition-all group"
              >
                <div className="text-[10px] font-black text-indigo-600 mb-3 uppercase tracking-widest font-mono">Phase_{process.step}</div>
                <h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{process.title}</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{process.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. BENEFITS */}
      <section className="py-24 px-6 border-y border-slate-100 bg-white">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div variants={fadeInUp} className="bg-slate-50 p-10 rounded-3xl border border-slate-200 text-center group">
            <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="w-16 h-16 mx-auto bg-white text-indigo-600 rounded-full flex items-center justify-center mb-6 shadow-sm border border-indigo-100"><Zap size={32} /></motion.div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tighter">40-60% Faster</h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">Cut months out of the development cycle. Launch while competitors are still planning.</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="bg-slate-50 p-10 rounded-3xl border border-slate-200 text-center group">
            <motion.div whileHover={{ scale: 1.1, rotate: -5 }} className="w-16 h-16 mx-auto bg-white text-indigo-600 rounded-full flex items-center justify-center mb-6 shadow-sm border border-indigo-100"><ShieldCheck size={32} /></motion.div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tighter">Bulletproof QA</h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">AI generates fully documented, unit-tested code consistently across every layer of the stack.</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="bg-slate-50 p-10 rounded-3xl border border-slate-200 text-center group">
            <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="w-16 h-16 mx-auto bg-white text-indigo-600 rounded-full flex items-center justify-center mb-6 shadow-sm border border-indigo-100"><Workflow size={32} /></motion.div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tighter">Infinite Scale</h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">Built on modular, cloud-native architectures that are ready for hyper-growth from day one.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* 8. PRODUCT TYPES */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 uppercase tracking-tighter">Factory Outputs</h2>
            <p className="text-lg text-slate-500 font-medium">Framework agnostic generation for virtually any digital product.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "B2B SaaS Platforms", icon: <Cloud size={24} />, desc: "Multi-tenant architectures with Stripe billing and role-based access." },
              { title: "Enterprise Workflows", icon: <Network size={24} />, desc: "Internal tools, ERP integrations, and custom CRM systems." },
              { title: "AI Product Wrappers", icon: <Bot size={24} />, desc: "Custom LLM integrations, RAG applications, and autonomous bots." }
            ].map((prod, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[2.5rem] border border-slate-200 hover:shadow-2xl transition-all group"
              >
                <div className="text-indigo-600 mb-8 bg-indigo-50 w-12 h-12 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform">{prod.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{prod.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{prod.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. WHY UPTIMISE */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-[4rem] p-10 md:p-20 flex flex-col md:flex-row items-center justify-between gap-16 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#4f46e520_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
          <div className="flex-1 space-y-8 relative z-10">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase leading-none">Why <br /><span className="text-indigo-400">Uptimise IT?</span></h2>
            <p className="text-slate-400 text-lg leading-relaxed font-medium max-w-md">
              We are pioneers in AI-native engineering, building structured assembly lines that safely integrate agents into the software lifecycle.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full relative z-10">
            {[
              "Proprietary Workflows",
              "Senior Human Oversight",
              "No Vendor Lock-in",
              "Enterprise Security"
            ].map((reason, i) => (
              <motion.div 
                key={i} 
                whileHover={{ backgroundColor: "#1e293b" }}
                className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl flex items-center font-bold text-white shadow-sm transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-indigo-400 mr-3 shrink-0" /> <span className="text-xs uppercase tracking-widest">{reason}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 10. CTA SECTION */}
      <section className="py-32 px-6 text-center max-w-4xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter uppercase leading-none">
            Build <span className="text-indigo-600 italic">Faster.</span>
          </h2>
          <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto mt-10 font-medium">
            The future of software is generated. Launch your next platform at unprecedented speed with the factory.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-10">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="px-12 py-6 bg-indigo-600 text-white font-black uppercase tracking-widest text-xs rounded-full shadow-2xl block">
                Initialize Project
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="px-12 py-6 bg-white border-2 border-slate-200 text-slate-800 font-black uppercase tracking-widest text-xs rounded-full block">
                Consult Architect
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}