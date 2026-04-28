'use client';

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Building, ServerCrash, ShieldAlert, Network, 
  ArrowRight, CheckCircle2, Database, Workflow, 
  Lock, ArrowUpRight, Cpu, Layers, BarChart4,
  RefreshCcw, ShieldCheck, Zap, Globe, Users
} from "lucide-react";

// // --- Animation Variants ---
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
//     transition: { type: "spring", stiffness: 400, damping: 10 } 
//   }
// };

export default function EnterpriseIndustryPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200 pb-20 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8 overflow-hidden">
        {/* Corporate Ambient Glow */}
        <motion.div 
          animate={{ opacity: [0.4, 0.6, 0.4], scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-blue-100/60 blur-[120px] rounded-full -z-10"
        />
        <div className="absolute top-20 right-1/4 w-[500px] h-[300px] bg-slate-200/50 blur-[100px] rounded-full -z-10"></div>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          // variants={staggerContainer}
          className="space-y-8"
        >
          <motion.div
          //  
           className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-sm font-bold tracking-wide uppercase mb-4 shadow-sm">
            <Building size={16} /> Enterprise Software Systems
          </motion.div>
          
          <motion.h1
          //  
           className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight">
            Modernizing the <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">Corporate Infrastructure</span>
          </motion.h1>
          
          <motion.p 
          // 
           className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We engineer scalable, secure, and interoperable software for global enterprises. From legacy system modernization to custom ERPs and intelligent data lakes, we build the digital foundation for enterprise agility.
          </motion.p>
          
          <motion.div 
          // 
           className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="px-8 py-4 bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-700/20 hover:bg-blue-800 transition-all text-lg block">
                Transform Your Enterprise
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="px-8 py-4 bg-white border border-slate-300 text-slate-700 font-bold rounded-xl hover:border-slate-400 hover:bg-slate-50 transition-all text-lg flex items-center justify-center gap-2 block">
                Consult a Solutions Architect <ArrowUpRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. ENTERPRISE CHALLENGES */}
      <section className="py-24 px-6 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">The Tax of Technical Debt</h2>
            <p className="text-lg text-slate-600">Enterprises are being outpaced by agile startups because their operations are tethered to rigid, outdated technology that is terrifying to update.</p>
          </motion.div>
          
          <motion.div 
            // variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { title: "The Monolith Trap", desc: "A massive, tightly-coupled codebase where changing one minor feature risks taking down the entire global operation.", icon: <ServerCrash className="text-red-500 w-8 h-8" /> },
              { title: "Siloed Corporate Data", desc: "Your CRM, ERP, and HR systems don't communicate. Leadership is making decisions based on fragmented, outdated CSV exports.", icon: <Database className="text-red-500 w-8 h-8" /> },
              { title: "Security & Compliance Risk", desc: "Running mission-critical operations on deprecated software frameworks exposes the enterprise to devastating cyberattacks.", icon: <ShieldAlert className="text-red-500 w-8 h-8" /> }
            ].map((challenge, idx) => (
              <motion.div 
                key={idx} 
                // 
                whileHover="hover"
                // variants={hoverScale}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:border-red-200 transition-all duration-300"
              >
                <div className="mb-6 bg-red-100 w-16 h-16 rounded-2xl flex items-center justify-center">{challenge.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{challenge.title}</h3>
                <p className="text-slate-600 leading-relaxed">{challenge.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. ENTERPRISE ARCHITECTURE STRATEGY */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-blue-700 font-bold tracking-widest uppercase text-sm font-mono">// Our_Architecture_Standard</h3>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Microservices & Data Orchestration
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              We deconstruct massive legacy monoliths using the Strangler Fig pattern—replacing outdated modules with agile microservices one by one, ensuring zero operational downtime.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Zero-downtime legacy system modernization.",
                "API Gateways to unify fragmented corporate data streams.",
                "Containerized microservices (Docker/K8s) for isolated scaling.",
                "Event-driven message brokers (Kafka) for real-time sync."
              ].map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center text-slate-800 font-semibold text-lg"
                >
                  <CheckCircle2 className="text-blue-600 w-6 h-6 mr-3 shrink-0" /> {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#0A1128] p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden border border-slate-800"
          >
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
             <h3 className="text-2xl font-bold text-white mb-8 relative z-10 flex items-center gap-3">
               <Workflow className="text-blue-400" /> System Orchestration
             </h3>
             <div className="space-y-4 relative z-10">
               {/* Legacy Monolith */}
               <motion.div 
                initial={{ opacity: 0.3 }}
                whileInView={{ opacity: 0.6 }}
                className="flex items-center justify-between bg-slate-800/50 border border-red-500/30 p-4 rounded-xl"
               >
                 <div className="flex items-center gap-3 text-slate-300 font-bold"><Database size={18} className="text-red-400" /> Legacy Monolith</div>
                 <div className="text-xs text-red-400 font-mono">Deprecated</div>
               </motion.div>
               
               <div className="flex justify-center py-2">
                 <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                 >
                  <RefreshCcw className="text-slate-500" />
                 </motion.div>
               </div>

               {/* API Gateway */}
               <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                className="bg-blue-900/40 border border-blue-500/50 p-3 rounded-xl text-center shadow-[0_0_20px_rgba(59,130,246,0.3)]"
               >
                 <p className="text-white font-bold text-sm tracking-widest uppercase font-mono text-[10px]">Enterprise_API_Mesh</p>
               </motion.div>

               <div className="flex justify-between w-3/4 mx-auto px-4">
                 <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }}><ArrowRight className="text-blue-400 rotate-90" /></motion.div>
                 <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.3 }}><ArrowRight className="text-blue-400 rotate-90" /></motion.div>
                 <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.6 }}><ArrowRight className="text-blue-400 rotate-90" /></motion.div>
               </div>

               {/* Microservices */}
               <div className="grid grid-cols-3 gap-3 w-full">
                 {[
                  {icon: <Users />, title: "CRM"},
                  {icon: <Layers />, title: "ERP"},
                  {icon: <BarChart4 />, title: "BI"}
                 ].map((service, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ y: -5, borderColor: "#3b82f6" }}
                      className="bg-slate-800 border border-slate-600 p-3 rounded-xl text-center transition-colors"
                    >
                      <div className="text-blue-400 flex justify-center mb-1">{service.icon}</div>
                      <p className="text-white font-bold text-[8px] uppercase">{service.title}_Service</p>
                    </motion.div>
                 ))}
               </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 4. PLATFORMS WE BUILD */}
      <section className="py-10 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 uppercase tracking-tighter">Enterprise Build Ecosystem</h2>
            <p className="text-lg text-slate-600 font-medium">Unified digital ecosystems designed to accelerate massive organizations.</p>
          </motion.div>
          <motion.div 
            // variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { title: "Custom ERP Systems", icon: <Layers size={28} />, desc: "Tailored Resource Planning software that maps perfectly to unique manufacturing workflows." },
              { title: "Supply Chain", icon: <Globe size={28} />, desc: "Real-time tracking, vendor management, and predictive inventory for distribution networks." },
              { title: "Corporate Intranets", icon: <Users size={28} />, desc: "Secure employee hubs for HR, document management, and internal communications." },
              { title: "Data Lakes & BI", icon: <BarChart4 size={28} />, desc: "Aggregating millions of data points into visual, real-time leadership dashboards." }
            ].map((prod, idx) => (
              <motion.div 
                key={idx} 
                // 
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-blue-700 transition-all group"
              >
                <div className="text-blue-700 mb-6 bg-blue-50 w-14 h-14 flex items-center justify-center rounded-2xl group-hover:bg-blue-700 group-hover:text-white transition-colors">{prod.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 leading-tight">{prod.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed font-medium">{prod.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. TECHNOLOGY STACK */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-[3rem] p-8 md:p-16 shadow-xl shadow-slate-100 flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 uppercase">The Enterprise Stack</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Cloud-native technologies and robust backend languages guaranteed to scale securely for decades.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["Java / Spring Boot", ".NET Core", "Node.js", "Python", "Kubernetes", "Kafka", "Oracle", "AWS"].map(tech => (
                <span key={tech} className="px-4 py-2 bg-slate-100 text-slate-800 font-bold rounded-lg text-[10px] border border-slate-200 hover:border-blue-600 transition-colors cursor-default font-mono uppercase tracking-widest">
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
             <motion.div  className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-blue-800 font-bold mb-1 text-sm uppercase">Backend</h4><p className="text-slate-500 text-xs font-medium">Java, .NET, Node.js</p></motion.div>
             <motion.div  className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-blue-800 font-bold mb-1 text-sm uppercase">Cloud</h4><p className="text-slate-500 text-xs font-medium">AWS, Azure, K8s</p></motion.div>
             <motion.div  className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-blue-800 font-bold mb-1 text-sm uppercase">Integration</h4><p className="text-slate-500 text-xs font-medium">Kafka, MuleSoft</p></motion.div>
             <motion.div  className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-blue-800 font-bold mb-1 text-sm uppercase">Frontend</h4><p className="text-slate-500 text-xs font-medium">React, Next.js</p></motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. AI SOFTWARE FACTORY (Legacy Refactoring) */}
      <section className="py-16 px-6 bg-[#0A1128] text-white relative overflow-hidden border-y border-slate-800">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] font-black tracking-widest uppercase font-mono">
              <Cpu size={14} /> Intelligent_Modernization
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight uppercase tracking-tighter">
              AI-Assisted <br /><span className="text-blue-500 italic">Legacy Refactoring</span>
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed font-medium">
              We utilize AI agents to analyze legacy codebases, map complex dependencies, and automatically refactor logic into modern microservices.
            </p>
            <ul className="space-y-4 pt-4">
              {["Automated codebase technical debt audits.", "AI generation of comprehensive regression tests.", "Reduced human error during high-stakes migrations."].map((item, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-center text-slate-300 font-bold italic">
                  <CheckCircle2 className="text-blue-500 w-5 h-5 mr-3 shrink-0" /> {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex-1 w-full bg-slate-900 border border-slate-700 p-8 rounded-[2rem] shadow-2xl relative"
          >
             <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-6">
               <span className="text-white font-bold text-xs uppercase tracking-widest font-mono">Code_Refactoring_v4</span>
               <span className="text-blue-400 text-[10px] font-mono flex items-center gap-2 animate-pulse">● Active_Analysis</span>
             </div>
             <div className="space-y-4 font-mono text-xs">
               <motion.div initial={{ opacity: 0.3 }} whileInView={{ opacity: 0.5 }} className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                 <div className="text-slate-500 mb-1">// Legacy_PHP_Deprecated</div>
                 <div className="text-red-300 line-through">mysql_query("SELECT * FROM...");</div>
               </motion.div>
               <div className="flex justify-center">
                 <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.5 }}><ArrowRight className="text-blue-400 rotate-90 w-4" /></motion.div>
               </div>
               <motion.div 
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-blue-950/40 p-4 rounded-xl border border-blue-500/30 shadow-inner"
               >
                 <div className="text-blue-300 mb-1">// Node.js_Microservice</div>
                 <div className="text-emerald-300">await prisma.users.findMany();</div>
               </motion.div>
               <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex items-center gap-2 text-[10px] text-emerald-400 bg-emerald-900/10 p-2 rounded border border-emerald-500/20"
               >
                 <ShieldCheck size={12} /> AI_VERIFIED::SECURITY_FIX_APPLIED
               </motion.div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 7. DEVELOPMENT PROCESS */}
      <section className="py-16 px-6 max-w-7xl mx-auto space-y-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 uppercase tracking-tighter leading-none">Modernization Protocol</h2>
          <p className="text-lg text-slate-600 font-medium italic">// Risk_Mitigated_Rollout</p>
        </motion.div>
        
        <motion.div 
          // variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-5 gap-4"
        >
          {[
            { step: "01", title: "Discovery", desc: "Technical mapping of legacy systems and APIs." },
            { step: "02", title: "Blueprint", desc: "Designing microservices and zero-downtime cutover." },
            { step: "03", title: "Sprints", desc: "Iterative build with AI-assisted refactoring." },
            { step: "04", title: "Parallel Run", desc: "Simultaneous system operation to verify integrity." },
            { step: "05", title: "Rollout", desc: "Phased rollout with 24/7 SLA-backed support." }
          ].map((process, idx) => (
            <motion.div 
              key={idx} 
              
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-600 transition-colors relative overflow-hidden group"
            >
               <div className="text-xs font-black text-blue-700 mb-3 uppercase tracking-widest font-mono">Phase_{process.step}</div>
               <h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{process.title}</h4>
               <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{process.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 8. BUSINESS BENEFITS */}
      <section className="py-10 px-6 bg-slate-50 border-y border-slate-100">
        <motion.div 
          // variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div  className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center group">
            <motion.div whileHover={{ scale: 1.1 }} className="w-16 h-16 mx-auto bg-blue-50 text-blue-700 rounded-full flex items-center justify-center mb-6"><Zap size={32} /></motion.div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tighter">Enterprise Agility</h3>
            <p className="text-slate-600 text-sm font-medium">Break free from legacy lock-in. Deploy new features in days rather than months.</p>
          </motion.div>
          <motion.div  className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center group">
            <motion.div whileHover={{ scale: 1.1 }} className="w-16 h-16 mx-auto bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-6"><ShieldCheck size={32} /></motion.div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tighter">Zero-Trust Security</h3>
            <p className="text-slate-600 text-sm font-medium">Modern frameworks with IAM and zero-trust networking naturally patch vulnerabilities.</p>
          </motion.div>
          <motion.div  className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center group">
            <motion.div whileHover={{ scale: 1.1 }} className="w-16 h-16 mx-auto bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-6"><Network size={32} /></motion.div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tighter">Unified Data</h3>
            <p className="text-slate-600 text-sm font-medium">Leadership gains 360-degree visibility into corporate operations via API gateways.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* 9. CASE STUDIES */}
      <section className="py-16 px-6 max-w-7xl mx-auto space-y-12">
        <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="flex flex-col md:flex-row justify-between items-end gap-6"
        >
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 uppercase tracking-tighter leading-none">Transformation Work</h2>
            <p className="text-slate-500 text-lg font-medium">Modernizing mission-critical operations for massive organizations.</p>
          </div>
          <Link href="/case-studies" className="text-blue-700 font-bold hover:text-blue-800 flex items-center gap-2 text-sm uppercase tracking-widest">
            View All Work <ArrowRight size={18} />
          </Link>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Supply Chain Modernization", desc: "Deconstructed a monolithic logistics app into agile microservices, cutting costs by $1.2M annually.", tags: ["Node.js", "Docker", "K8s"] },
            { title: "Financial Institution Intranet", desc: "Built a secure internal portal replacing 14 legacy tools, integrated with core SAP databases.", tags: ["React", "Java", "SAP API"] },
          ].map((study, idx) => (
            <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.95 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }} 
                className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-200 shadow-sm hover:shadow-2xl transition-all group cursor-pointer"
            >
              <div className="flex gap-2 mb-6">
                {study.tags.map(tag => <span key={tag} className="text-[10px] font-black font-mono text-blue-800 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">{tag}</span>)}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-blue-700 transition-colors tracking-tight leading-tight">{study.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-8 text-sm font-medium">{study.desc}</p>
              <span className="text-blue-700 font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform text-xs uppercase tracking-widest">
                Read Case Study <ArrowRight size={16} />
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 10. CTA SECTION */}
      <section className=" px-6 text-center max-w-4xl mx-auto space-y-8">
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-8xl font-extrabold text-slate-900 tracking-tighter uppercase leading-none">
            Future-Proof Your <br /><span className="text-blue-600 italic">Operations.</span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mt-10 font-medium">
            Partner with an engineering team capable of executing secure, zero-downtime digital transformations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-10">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="px-10 py-5 bg-blue-700 text-white font-black rounded-xl shadow-xl shadow-blue-700/20 hover:bg-blue-800 transition-all uppercase tracking-[0.2em] text-xs block">
                    Discuss Your Modernization
                </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="px-10 py-5 bg-white border-2 border-slate-300 text-slate-800 font-black rounded-xl hover:border-slate-400 hover:bg-slate-50 transition-all uppercase tracking-[0.2em] text-xs block">
                    Request an IT Audit
                </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}