'use client';

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { 
  Gauge, TrendingUp, ServerCrash, Coins, 
  Activity, ArrowRight, Database, Zap, 
  Layers, CheckCircle2, Cpu, ArrowUpRight, 
  Timer, LineChart, Code2, Network,
  ShieldCheck,
  Layout
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

const barGrowth: Variants = {
  hidden: { width: 0 },
  visible: (custom: number) => ({
    width: `${custom}%`,
    transition: { duration: 1.5, ease: "circOut", delay: 0.5 }
  })
};

export default function ProductScalingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-lime-200 pb-20 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8 overflow-hidden">
        {/* Ambient Performance Glow */}
        <motion.div 
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-lime-50 blur-[120px] rounded-full -z-10" 
        />
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-50 border border-lime-200 text-lime-700 text-sm font-bold tracking-wide uppercase mb-4 shadow-sm">
            <Gauge size={16} className="animate-pulse" /> Performance Engineering
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight">
            Scale Your Product <br className="hidden md:block" />
            <motion.span 
              animate={{ color: ["#84cc16", "#10b981", "#84cc16"] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-emerald-600 italic"
            >
              Infrastructure
            </motion.span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Eliminate bottlenecks, reduce cloud costs, and prepare for 10x growth. We audit, refactor, and optimize your application architecture to handle massive traffic spikes with sub-second latency.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl shadow-lg shadow-slate-900/20 hover:bg-slate-800 transition-all text-lg block">
                Audit My Performance
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg flex items-center justify-center gap-2 block">
                Speak to an Architect <ArrowUpRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. GROWTH CHALLENGES */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 uppercase tracking-tighter">The Friction of Hyper-Growth</h2>
            <p className="text-lg text-slate-600 font-medium">The code that got you to your first 1,000 users will break when you hit 100,000. Technical debt compounds into catastrophic experiences.</p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { title: "Slow Load Times", desc: "Bloated bundles and slow APIs destroying your conversion rates.", icon: <Timer className="text-red-500" /> },
              { title: "Database Locks", desc: "N+1 query issues causing your database to lock up under load.", icon: <Database className="text-red-500" /> },
              { title: "Crashing Load", desc: "Monoliths running out of memory during marketing traffic spikes.", icon: <ServerCrash className="text-red-500" /> },
              { title: "Exploding Costs", desc: "Inefficient code forcing larger, more expensive cloud servers.", icon: <Coins className="text-red-500" /> }
            ].map((challenge, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-red-200 transition-all duration-300 group"
              >
                <div className="mb-6 bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">{challenge.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{challenge.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{challenge.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. SCALING STRATEGY */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-emerald-600 font-bold tracking-widest uppercase text-sm font-mono">// Scaling_Strategy</h3>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Measure. Isolate. Optimize.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              We deploy elite APM tools to find the exact lines of code and database queries causing latency, then surgically refactor them.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Decoupling heavy background tasks to async queues.",
                "Implementing aggressive Redis/Memcached layers.",
                "Optimizing database indexing and query structures.",
                "Migrating monolith features to serverless/microservices."
              ].map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center text-slate-800 font-semibold"
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
            className="bg-slate-900 p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
             <h3 className="text-2xl font-bold text-white mb-8 relative z-10 flex items-center gap-3 font-mono tracking-tighter">
               <Activity className="text-lime-400" /> Latency_Response
             </h3>
             <div className="space-y-8 relative z-10">
               <div>
                 <div className="flex justify-between text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest"><span>Initial_State</span><span>3.2s Load</span></div>
                 <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
                   <motion.div 
                     variants={barGrowth}
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true }}
                     custom={85}
                     className="bg-red-500 h-full rounded-full relative"
                   >
                     <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                   </motion.div>
                 </div>
               </div>
               <div>
                 <div className="flex justify-between text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest"><span>Refactored_Query</span><span>1.1s Load</span></div>
                 <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
                   <motion.div 
                     variants={barGrowth}
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true }}
                     custom={45}
                     className="bg-amber-400 h-full rounded-full"
                   />
                 </div>
               </div>
               <div>
                 <div className="flex justify-between text-[10px] font-black text-lime-400 mb-2 uppercase tracking-widest"><span>Edge_Cached_Global</span><span>0.2s Load</span></div>
                 <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
                   <motion.div 
                     variants={barGrowth}
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true }}
                     custom={15}
                     className="bg-lime-500 h-full rounded-full shadow-[0_0_15px_#84cc16]"
                   />
                 </div>
               </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 4. OPTIMIZATION SERVICES */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 uppercase tracking-tighter">Full-Stack Optimization</h2>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              { title: "Database Tuning", desc: "Rewriting ORM queries and implementing read-replicas to prevent deadlocks.", icon: <Database /> },
              { title: "Codebase Refactor", desc: "Identifying CPU-intensive loops and updating legacy frameworks to modern standards.", icon: <Code2 /> },
              { title: "Frontend Acceleration", desc: "Shrinking bundles and optimizing Core Web Vitals for better SEO and UX.", icon: <Layout /> },
              { title: "Caching Topology", desc: "Designing multi-layer caching (CDN, App, DB) to serve data instantly.", icon: <Layers /> }
            ].map((sys, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm hover:border-lime-500 transition-all group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-lime-50 text-lime-600 rounded-xl flex items-center justify-center group-hover:bg-lime-500 group-hover:text-white transition-colors">
                    {sys.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{sys.title}</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed pl-16 font-medium">{sys.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. PERFORMANCE TOOLS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-[3.5rem] p-8 md:p-16 shadow-xl shadow-slate-100 flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 uppercase">Diagnostic Toolkit</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              We utilize enterprise-grade observability and caching tools to monitor system health in real-time.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              {["Datadog", "Redis", "Elastic APM", "CloudWatch", "Lighthouse", "Grafana"].map(tech => (
                <span key={tech} className="px-4 py-2 bg-slate-100 text-slate-800 font-bold rounded-lg text-[10px] border border-slate-200 hover:border-lime-400 transition-colors cursor-default font-mono uppercase tracking-widest">
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
             <motion.div variants={fadeInUp} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-emerald-600 font-bold mb-1 text-sm uppercase">APM Monitoring</h4><p className="text-slate-600 text-xs font-medium">Real-time health tracking.</p></motion.div>
             <motion.div variants={fadeInUp} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-emerald-600 font-bold mb-1 text-sm uppercase">In-Memory Store</h4><p className="text-slate-600 text-xs font-medium">Redis & Memcached layers.</p></motion.div>
             <motion.div variants={fadeInUp} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-emerald-600 font-bold mb-1 text-sm uppercase">Log Analysis</h4><p className="text-slate-600 text-xs font-medium">ELK Stack aggregation.</p></motion.div>
             <motion.div variants={fadeInUp} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-emerald-600 font-bold mb-1 text-sm uppercase">Global Edge</h4><p className="text-slate-600 text-xs font-medium">Cloudflare / Fastly CDN.</p></motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. INFRASTRUCTURE SCALING */}
      <section className="py-24 px-6 bg-[#0B0F19] text-white relative overflow-hidden border-y border-slate-800">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-500/10 border border-lime-500/30 text-lime-400 text-xs font-bold tracking-wide uppercase font-mono">
              <Network size={16} /> Elastic_Cloud_Infra
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight uppercase tracking-tighter">
              Infrastructure Built for <br /><span className="text-lime-500 italic">Massive Scale.</span>
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed font-medium">
              We engineer auto-scaling cloud infrastructure that dynamically provisions resources during traffic spikes and spins them down to save costs.
            </p>
            <ul className="space-y-4 pt-4">
              {["Kubernetes Pod Autoscaling (HPA).", "Serverless for unpredictable workloads.", "Database connection pooling."].map((item, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-center text-slate-300 font-bold italic">
                  <CheckCircle2 className="text-lime-500 w-5 h-5 mr-3 shrink-0" /> {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex-1 w-full bg-slate-900 border border-lime-500/20 p-8 rounded-[2rem] shadow-2xl relative"
          >
             <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-6">
               <span className="text-white font-bold text-xs uppercase tracking-widest font-mono">Scaling_Triggered</span>
               <span className="text-lime-400 text-[10px] font-mono flex items-center gap-2 animate-pulse">● CPU_Load_75%</span>
             </div>
             <div className="flex gap-4 items-end h-32 mb-6">
               <motion.div initial={{ height: "40%" }} animate={{ height: "40%" }} className="w-full bg-slate-700 rounded-t-lg relative"><div className="absolute -top-6 w-full text-center text-[10px] text-slate-500 font-mono">Node_1</div></motion.div>
               <motion.div initial={{ height: "60%" }} animate={{ height: "60%" }} className="w-full bg-slate-700 rounded-t-lg relative"><div className="absolute -top-6 w-full text-center text-[10px] text-slate-500 font-mono">Node_2</div></motion.div>
               <motion.div 
                initial={{ height: 0 }} 
                whileInView={{ height: "90%" }} 
                transition={{ duration: 1, delay: 0.5 }}
                className="w-full bg-lime-500/20 border border-lime-500/50 rounded-t-lg relative"
               >
                 <div className="absolute inset-0 bg-lime-400/10 animate-pulse"></div>
                 <div className="absolute -top-6 w-full text-center text-[10px] font-bold text-lime-400 font-mono">NODE_NEW</div>
               </motion.div>
             </div>
             <p className="text-slate-500 text-[10px] text-center font-mono uppercase tracking-widest">Instance_Provisioning_Sequence::Active</p>
          </motion.div>
        </div>
      </section>

      {/* 7. OPTIMIZATION PROCESS */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 uppercase tracking-tighter">The Scaling Protocol</h2>
          <p className="text-lg text-slate-600 font-medium italic">// Scientific_Optimization_Lifecycle</p>
        </motion.div>
        
        <motion.div 
            variants={staggerContainer} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            className="grid grid-cols-1 md:grid-cols-5 gap-4"
        >
          {[
            { step: "01", title: "Trace", desc: "Deploy APM to map bottlenecks." },
            { step: "02", title: "Profile", desc: "Analyzing queries & bundle sizes." },
            { step: "03", title: "Refactor", desc: "Rewriting inefficient codebase logic." },
            { step: "04", title: "Load Test", desc: "Simulating massive traffic spikes." },
            { step: "05", title: "Deploy", desc: "Optimized launch with monitoring." }
          ].map((process, idx) => (
            <motion.div 
                key={idx} 
                variants={fadeInUp}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-lime-500 transition-colors relative overflow-hidden group"
            >
               <div className="text-xs font-black text-lime-600 mb-3 uppercase tracking-widest font-mono">Step_{process.step}</div>
               <h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{process.title}</h4>
               <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{process.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 8. BUSINESS BENEFITS */}
      <section className="py-24 px-6 border-y border-slate-100 bg-white">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div variants={fadeInUp} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center group">
            <motion.div whileHover={{ scale: 1.1 }} className="w-16 h-16 mx-auto bg-lime-50 text-lime-600 rounded-full flex items-center justify-center mb-6"><Zap size={32} /></motion.div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tighter">Sub-Second Speed</h3>
            <p className="text-slate-600 text-sm font-medium">Faster load times correlate with higher user retention and massive improvements in SEO rankings.</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center group">
            <motion.div whileHover={{ scale: 1.1 }} className="w-16 h-16 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6"><Coins size={32} /></motion.div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tighter">Reduced Cloud Bill</h3>
            <p className="text-slate-600 text-sm font-medium">By optimizing code, we cut the CPU and RAM required, slashing your monthly AWS/GCP overhead.</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center group">
            <motion.div whileHover={{ scale: 1.1 }} className="w-16 h-16 mx-auto bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-6"><ShieldCheck size={32} /></motion.div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tighter">Zero-Crash Scaling</h3>
            <p className="text-slate-600 text-sm font-medium">Survive viral marketing campaigns and Black Friday traffic surges without a single infrastructure timeout.</p>
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
          <h2 className="text-4xl md:text-8xl font-black text-slate-900 tracking-tighter uppercase leading-none">
            Scale for the <br /><span className="text-lime-600 italic">Next 10X.</span>
          </h2>
          <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto mt-10 font-medium">
            Technical debt is a growth tax. Partner with Uptimise IT to architect a platform that is lightning-fast, resilient, and ready for hyper-growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-10">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-12 py-6 bg-slate-950 text-white font-black uppercase tracking-[0.2em] text-xs rounded-full shadow-2xl">
                <Link href="/contact">Request Performance Audit</Link>
            </motion.button>
          </div>
        </motion.div>
      </section>

    </div>
  );
}