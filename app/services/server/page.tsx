'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  Server, Cloud, ShieldCheck, Terminal, 
  Cpu, Zap, Activity, Globe,
  Database, HardDrive, ArrowRight, Bot, Layers,
  Rocket, Gauge, Lock,
  CheckCircle2
} from 'lucide-react';

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

// const pulseGlow: Variants = {
//   initial: { opacity: 0.5, scale: 1 },
//   animate: { 
//     opacity: [0.5, 0.8, 0.5], 
//     scale: [1, 1.05, 1],
//     transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } 
//   }
// };

const infraStats = [
  { label: "Uptime", val: "99.99%", icon: <Activity size={20} /> },
  { label: "Deployments", val: "Automated", icon: <Zap size={20} /> },
  { label: "Security", val: "Zero-Trust", icon: <ShieldCheck size={20} /> },
  { label: "Scaling", val: "Elastic", icon: <Layers size={20} /> }
];

const DevOpsPage = () => {
  return (
    <main className="min-h-screen bg-white font-sans pt-32 pb-20 overflow-hidden">
      
      {/* --- 1. HERO: The High-Availability Entry --- */}
      <section className="px-6 mb-32 relative">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" 
        />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            
            className="lg:col-span-7 text-center lg:text-left space-y-8"
          >
            <motion.div  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-100">
              <Terminal size={14} className="text-cyan-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-700 font-mono">Module::Cloud_Infra_v2.0</span>
            </motion.div>
            <motion.h1  className="text-6xl md:text-8xl font-black text-slate-950 tracking-tighter leading-[0.85]">
              Scalable <br />
              <motion.span 
                animate={{ color: ["#0891b2", "#06b6d4", "#0891b2"] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-cyan-600 italic"
              >
                Persistence.
              </motion.span>
            </motion.h1>
            <motion.p  className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
              Uptimise IT engineers resilient, automated cloud environments that support high-performance digital platforms at any scale.
            </motion.p>
            <motion.div  className="flex flex-col lg:flex-row gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-slate-950 text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-cyan-600 transition-all shadow-xl shadow-slate-200"
              >
                Scale Your Infrastructure
              </motion.button>
              <motion.button 
                whileHover={{ backgroundColor: "#f8fafc" }}
                className="px-10 py-5 bg-white border border-slate-200 text-slate-950 rounded-full font-black uppercase tracking-widest text-xs transition-all"
              >
                System Audit
              </motion.button>
            </motion.div>
          </motion.div>

          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, x: 30, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="bg-slate-950 rounded-[3rem] p-10 border border-white/10 shadow-2xl relative overflow-hidden"
            >
               <motion.div 
                  animate={{ y: [0, -10, 0], opacity: [0.03, 0.08, 0.03] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute top-0 right-0 p-8 text-cyan-400"
               >
                  <Cpu size={200} />
               </motion.div>
               
               <div className="relative z-10 space-y-8">
                  <div className="flex justify-between items-center pb-6 border-b border-white/5">
                     <span className="text-[10px] font-black font-mono text-cyan-500 tracking-widest">INFRA_MONITORING</span>
                     <div className="flex gap-1">
                        {[1,2,3].map(i => <motion.div key={i} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }} className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />)}
                     </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                     {infraStats.map((stat, i) => (
                        <motion.div 
                          key={i} 
                          whileHover={{ scale: 1.05 }}
                          className="space-y-2 group cursor-default"
                        >
                           <div className="flex items-center gap-2 text-slate-500 group-hover:text-cyan-400 transition-colors">
                              {stat.icon}
                              <span className="text-[9px] font-black uppercase tracking-widest">{stat.label}</span>
                           </div>
                           <p className="text-2xl font-black text-white italic">{stat.val}</p>
                        </motion.div>
                     ))}
                  </div>

                  <div className="pt-6 border-t border-white/5 space-y-3">
                     <div className="flex justify-between text-[10px] font-mono text-slate-400">
                        <span>Cluster_Load</span>
                        <span>42%</span>
                     </div>
                     <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }} 
                          animate={{ width: '42%' }} 
                          transition={{ duration: 2, delay: 1.5, ease: "circOut" }} 
                          className="h-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]" 
                        />
                     </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- 2. THE CHALLENGE --- */}
      <section className="lg:py-24 py-10 px-6 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl text-center lg:text-left font-black text-slate-950 tracking-tighter leading-tight uppercase">
               Stability <br /><span className="text-cyan-600">is not Optional.</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              Without modern DevOps, scaling becomes an existential risk. We solve unstable deployments by integrating automation directly into your code's DNA.
            </p>
          </motion.div>
          <motion.div 
            
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
             {[
               "Auto-Scaling Workloads", "Zero-Downtime Releases", 
               "Predictive Monitoring", "Cloud Cost Optimization"
             ].map((text, i) => (
               <motion.div 
                key={i} 
                
                whileHover={{ y: -5, borderColor: "#06b6d4" }}
                className="flex items-center gap-4 p-6 bg-white border border-slate-100 rounded-3xl shadow-sm transition-all"
               >
                  <CheckCircle2 className="text-cyan-600 shrink-0" size={20} />
                  <span className="text-xs font-black text-slate-900 uppercase tracking-tight">{text}</span>
               </motion.div>
             ))}
          </motion.div>
        </div>
      </section>

      {/* --- 3. THE CORE PILLARS --- */}
      <section className="lg:py-32 py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          
          {/* Automated Pipelines */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-6"
            >
               <h3 className="text-3xl font-black uppercase tracking-tight">Deployment Automation</h3>
               <p className="text-slate-500 font-medium leading-relaxed">
                  CI/CD pipelines allow teams to release faster while maintaining perfect stability via automated rollback mechanisms.
               </p>
               <ul className="space-y-3">
                  {["Automated Build Systems", "Validation Pipelines", "Rollback Mechanisms"].map(t => (
                    <li key={t} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-600" /> {t}
                    </li>
                  ))}
               </ul>
            </motion.div>
            
            <motion.div 
              
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-7 p-10 bg-slate-50 rounded-[3rem] border border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8"
            >
               {[
                 { step: "Build", icon: <Cpu /> },
                 { step: "Test", icon: <ShieldCheck /> },
                 { step: "Staging", icon: <Globe /> },
                 { step: "Deploy", icon: <Rocket /> }
               ].map((item, i) => (
                 <React.Fragment key={i}>
                    <motion.div  className="text-center group">
                       <motion.div 
                        whileHover={{ scale: 1.1, backgroundColor: "#06b6d4", color: "white" }}
                        className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-cyan-600 mb-4 border border-cyan-50 transition-colors"
                       >
                          {item.icon}
                       </motion.div>
                       <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-cyan-600 transition-colors">{item.step}</span>
                    </motion.div>
                    {i < 3 && (
                      <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ delay: i * 0.2 + 0.5 }}>
                        <ArrowRight className="hidden md:block text-slate-200" />
                      </motion.div>
                    )}
                 </React.Fragment>
               ))}
            </motion.div>
          </div>

          <motion.div 
            
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
             {[
               { title: "Cloud Management", desc: "Expertise across AWS and GCP infrastructure.", icon: <Cloud /> },
               { title: "Containerization", desc: "Orchestration using Docker and Kubernetes.", icon: <HardDrive /> },
               { title: "Performance Sync", desc: "Real-time visibility into system health.", icon: <Activity /> }
             ].map((box, i) => (
               <motion.div 
                key={i} 
                
                whileHover={{ y: -10, borderColor: "#06b6d4" }}
                className="p-10 rounded-[3rem] bg-white border border-slate-100 hover:shadow-xl transition-all group"
               >
                  <div className="text-cyan-600 mb-8 p-4 bg-slate-50 rounded-2xl w-fit group-hover:bg-cyan-600 group-hover:text-white transition-all">
                    {box.icon}
                  </div>
                  <h4 className="text-xl font-black uppercase tracking-tight mb-4">{box.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">{box.desc}</p>
               </motion.div>
             ))}
          </motion.div>
        </div>
      </section>

      {/* --- 4. AI-ASSISTED OPTIMIZATION --- */}
      <section className="lg:py-32 px-6">
         <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto p-12 lg:p-24 bg-cyan-950 rounded-[4rem] text-white relative overflow-hidden group"
         >
            <motion.div 
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-0 right-0 p-12 opacity-5 pointer-events-none"
            >
               <Bot size={300} />
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
               <div className="space-y-6">
                  <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none uppercase">
                    AI-Driven <br /><span className="text-cyan-400">Optimization.</span>
                  </h2>
                  <p className="text-lg text-slate-300 font-medium max-w-md leading-relaxed">
                    We leverage AI to identify performance anomalies, predict infrastructure scaling needs, and automate remediation before issues arise.
                  </p>
               </div>
               <motion.div  initial="hidden" whileInView="visible" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Usage Analysis", "Anomaly Detection", 
                    "Scaling Forecast", "Auto-Remediation"
                  ].map((text, i) => (
                    <motion.div 
                      key={i} 
                      
                      whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      className="flex items-center gap-3 p-5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm transition-all"
                    >
                       <Zap size={16} className="text-cyan-400" />
                       <span className="text-[10px] font-black uppercase tracking-widest">{text}</span>
                    </motion.div>
                  ))}
               </motion.div>
            </div>
         </motion.div>
      </section>

      {/* --- 5. TECH STACK --- */}
      <section className="py-32 px-6">
         <div className="max-w-7xl mx-auto space-y-20">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center">
               <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 uppercase italic">Control Center.</h3>
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] font-mono mt-4">// Tech_Stack_v2.0</p>
            </motion.div>
            
            <motion.div 
              
              initial="hidden"
              whileInView="visible"
              className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center"
            >
               {[
                 { cat: "Cloud Platforms", tools: ["AWS", "Google Cloud"] },
                 { cat: "Containerization", tools: ["Docker", "Kubernetes"] },
                 { cat: "CI/CD Systems", tools: ["Github Actions", "Jenkins"] },
                 { cat: "Security", tools: ["Zero-Trust", "CloudFlare"] }
               ].map((group, i) => (
                 <motion.div key={i}  className="space-y-6">
                    <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-600 font-mono">{group.cat}</h5>
                    <div className="space-y-2">
                       {group.tools.map((tool, idx) => (
                         <motion.p 
                          key={idx} 
                          whileHover={{ scale: 1.1, color: "#0891b2", opacity: 1 }}
                          className="text-2xl font-black tracking-tighter opacity-40 transition-all cursor-default"
                         >
                           {tool}
                         </motion.p>
                       ))}
                    </div>
                 </motion.div>
               ))}
            </motion.div>
         </div>
      </section>

      {/* --- 6. FINAL CTA --- */}
      <section className="lg:py-20 px-6">
         <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto bg-cyan-600 rounded-[4rem] p-12 md:p-24 text-center text-white space-y-10 relative overflow-hidden shadow-2xl shadow-cyan-200"
         >
            <motion.div 
              animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff15_1px,transparent_1px)] [background-size:24px_24px]" 
            />
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none relative z-10 uppercase">
                Zero-Downtime <br /> <span className="italic">Excellence.</span>
            </h2>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative z-10">
              <button     aria-label="Uptimiseit" className="px-12 py-6 bg-slate-950 text-white rounded-full font-black uppercase tracking-[0.2em] text-sm shadow-2xl">
                 Secure Your Product
              </button>
            </motion.div>
         </motion.div>
      </section>
    </main>
  );
};

export default DevOpsPage;