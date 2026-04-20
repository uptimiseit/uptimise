'use client';

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { 
  Globe, Server, Layout, Users, ShoppingCart, 
  ShieldCheck, Zap, Database, ArrowRight, Bot,
  Activity, ArrowUpRight, CheckCircle2, Workflow,
  Network, Cpu
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

// const hoverCard: Variants = {
//   hover: { 
//     y: -8, 
//     transition: { type: "spring", stiffness: 400, damping: 10 } 
//   }
// };

export default function DigitalPlatformPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-100 pb-20 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8 overflow-hidden">
        {/* Animated Background Glow */}
        <motion.div 
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-50 blur-[120px] rounded-full -z-10"
        />
        
        <motion.div 
          initial="hidden"
          animate="visible"
          // variants={staggerContainer}
          className="space-y-8"
        >
          <motion.div 
          // 
           className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-bold tracking-wide uppercase mb-4 shadow-sm">
            <Globe size={16} className="animate-spin-slow" /> Digital Platform Engineering
          </motion.div>
          
          <motion.h1 
          // 
           className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight">
            Architecting High-Performance <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 italic">Digital Ecosystems</span>
          </motion.h1>
          
          <motion.p 
          //  
          className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            We engineer complex, multi-sided digital platforms designed for massive concurrency. From B2B marketplaces to enterprise community hubs, we build the infrastructure that connects your users securely.
          </motion.p>
          
          <motion.div 
          // 
           className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 transition-all text-lg block">
                Start Your Platform Build
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:border-slate-300 transition-all text-lg flex items-center justify-center gap-2 block">
                Speak to an Architect <ArrowUpRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. PLATFORM CHALLENGES */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 uppercase tracking-tighter">Why Platforms Fail to Scale</h2>
            <p className="text-lg text-slate-600">Building a platform requires handling multiple distinct user types simultaneously. Without the right technical foundation, traffic spikes will paralyze your business.</p>
          </motion.div>
          
          <motion.div 
            // variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { title: "Monolithic Bottlenecks", desc: "Tightly coupled codebases make it impossible to add new features without breaking existing ones.", icon: <Server className="text-red-500" /> },
              { title: "Concurrency Crashes", desc: "Marketplaces require real-time database reads. Poor DB structuring leads to timeouts.", icon: <Activity className="text-red-500" /> },
              { title: "Fragmented UX", desc: "Buyers, sellers, and admins need distinct interfaces. Clunky UI destroys platform adoption.", icon: <Layout className="text-red-500" /> }
            ].map((challenge, idx) => (
              <motion.div 
                key={idx} 
                // 
                whileHover="hover"
                // variants={hoverCard}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm transition-all duration-300 group"
              >
                <div className="mb-6 bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">{challenge.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{challenge.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{challenge.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. PLATFORM ARCHITECTURE APPROACH */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-emerald-600 font-bold tracking-widest uppercase text-sm font-mono">// Our_Architecture_Approach</h3>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Decoupled, Event-Driven, and Future-Proof
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              We separate the front-end user experience from the back-end business logic using headless architecture. This allows your platform to serve web and mobile from a single source of truth.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Microservices orchestration for independent scaling",
                "Event-driven data streams (Kafka/RabbitMQ)",
                "Headless CMS and Commerce integrations",
                "Global Edge Network caching"
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
            // variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 mt-8">
              <motion.div  whileHover={{ y: -5 }} className="bg-slate-900 text-white p-6 rounded-3xl shadow-xl">
                <Network className="w-10 h-10 mb-4 text-emerald-400" />
                <h4 className="font-bold font-mono text-sm uppercase tracking-widest">API Gateway</h4>
                <p className="text-slate-400 text-xs mt-2">Central traffic routing.</p>
              </motion.div>
              <motion.div  whileHover={{ y: -5 }} className="bg-emerald-50 border border-emerald-100 p-6 rounded-3xl">
                <Database className="w-10 h-10 mb-4 text-emerald-600" />
                <h4 className="font-bold text-slate-900 font-mono text-sm uppercase tracking-widest">Distributed DB</h4>
                <p className="text-slate-600 text-xs mt-2">High-availability data.</p>
              </motion.div>
            </div>
            <div className="space-y-4">
              <motion.div  whileHover={{ y: -5 }} className="bg-blue-50 border border-blue-100 p-6 rounded-3xl">
                <Workflow className="w-10 h-10 mb-4 text-blue-600" />
                <h4 className="font-bold text-slate-900 font-mono text-sm uppercase tracking-widest">Event Bus</h4>
                <p className="text-slate-600 text-xs mt-2">Async task queues.</p>
              </motion.div>
              <motion.div  whileHover={{ y: -5 }} className="bg-slate-100 border border-slate-200 p-6 rounded-3xl">
                <Layout className="w-10 h-10 mb-4 text-slate-600" />
                <h4 className="font-bold text-slate-900 font-mono text-sm uppercase tracking-widest">Client Apps</h4>
                <p className="text-slate-600 text-xs mt-2">Web, iOS, and Android.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. PLATFORMS WE BUILD */}
      <section className="py-24 px-6 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <h2 className="text-4xl font-bold tracking-tight text-white uppercase tracking-tighter">Platforms We Build</h2>
            <p className="text-lg text-slate-400 font-medium">Complex ecosystems designed to manage thousands of concurrent interactions.</p>
          </motion.div>
          <motion.div 
            // variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { title: "B2B Marketplaces", icon: <ShoppingCart size={28} />, desc: "Vendor management, multi-cart logic, and escrow payments." },
              { title: "Community Portals", icon: <Users size={28} />, desc: "High-engagement hubs with real-time chat, feeds, and moderation." },
              { title: "EdTech Platforms", icon: <Globe size={28} />, desc: "LMS systems handling video streaming, live classes, and assessments." },
              { title: "Internal Hubs", icon: <ShieldCheck size={28} />, desc: "Secure intranet portals aggregating internal tools and data." }
            ].map((prod, idx) => (
              <motion.div 
                key={idx} 
                
                whileHover={{ y: -10, backgroundColor: "#1e293b" }}
                className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-emerald-500 transition-all group"
              >
                <div className="text-emerald-400 mb-6 group-hover:scale-110 transition-transform">{prod.icon}</div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">{prod.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed font-medium">{prod.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. TECHNOLOGY STACK */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-[3rem] p-8 md:p-16 shadow-xl shadow-slate-100 flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 uppercase">The Platform Tech Stack</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              We leverage modern, open-source technologies that give you full ownership of your IP while ensuring massive scalability.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["Next.js", "React Native", "Node.js", "Go", "GraphQL", "PostgreSQL", "Redis", "Kafka", "AWS"].map(tech => (
                <span key={tech} className="px-4 py-2 bg-slate-100 text-slate-800 font-bold rounded-lg text-xs border border-slate-200 hover:border-emerald-400 transition-colors cursor-default font-mono">
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
             <motion.div  className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-emerald-600 font-bold mb-1 text-sm uppercase">Frontend</h4><p className="text-slate-600 text-xs">React, Next.js, Flutter</p></motion.div>
             <motion.div  className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-emerald-600 font-bold mb-1 text-sm uppercase">Logic</h4><p className="text-slate-600 text-xs">Node.js, Go, GraphQL</p></motion.div>
             <motion.div  className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-emerald-600 font-bold mb-1 text-sm uppercase">Data</h4><p className="text-slate-600 text-xs">PostgreSQL, Redis</p></motion.div>
             <motion.div  className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-emerald-600 font-bold mb-1 text-sm uppercase">Infra</h4><p className="text-slate-600 text-xs">AWS, Kubernetes</p></motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. AI SOFTWARE FACTORY ACCELERATION */}
      <section className="py-24 px-6 bg-[#0B0F19] relative overflow-hidden">
        <motion.div 
          animate={{ x: [-100, 100, -100], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-600 blur-[100px] rounded-full -z-10 pointer-events-none" 
        />
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-bold tracking-wide uppercase font-mono"
          >
            <Bot size={16} /> AI Software Factory
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight uppercase tracking-tighter"
          >
            Accelerated Platform Delivery via <span className="text-emerald-500 italic">AI Agents</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            By deploying our proprietary AI-assisted engineering workflows, we automate CRUD API generation, database migrations, and unit testing—allowing us to deliver enterprise platforms in a fraction of the time.
          </motion.p>
        </div>
      </section>

      {/* 7. DEVELOPMENT PROCESS */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 uppercase tracking-tighter leading-none">Platform Delivery Process</h2>
          <p className="text-lg text-slate-600 font-medium italic">// Structured_System_Lifecycle</p>
        </motion.div>
        
        <motion.div 
          // variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-5 gap-4"
        >
          {[
            { step: "01", title: "Discovery", desc: "Mapping journeys for all platform personas." },
            { step: "02", title: "Design", desc: "Global design systems & UX prototypes." },
            { step: "03", title: "Architecture", desc: "Defining DB schemas and API services." },
            { step: "04", title: "Development", desc: "Agile sprints with automated QA testing." },
            { step: "05", title: "Deployment", desc: "CI/CD setup and scalable cloud launch." }
          ].map((process, idx) => (
            <motion.div 
              key={idx} 
              
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-emerald-400 transition-colors relative overflow-hidden group"
            >
               <div className="text-xs font-black text-emerald-600 mb-3 uppercase tracking-widest font-mono">Phase_{process.step}</div>
               <h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{process.title}</h4>
               <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{process.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 8. PLATFORM SCALABILITY BENEFITS */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <motion.div 
          // variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div  className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center group">
            <motion.div whileHover={{ scale: 1.1 }} className="w-16 h-16 mx-auto bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-6"><Zap size={32} /></motion.div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tighter">High Concurrency</h3>
            <p className="text-slate-600 text-sm font-medium">Handle tens of thousands of simultaneous users browsing or transacting without latency spikes.</p>
          </motion.div>
          <motion.div  className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center group">
            <motion.div whileHover={{ scale: 1.1 }} className="w-16 h-16 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6"><ShieldCheck size={32} /></motion.div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tighter">Enterprise Security</h3>
            <p className="text-slate-600 text-sm font-medium">Protect data and transactions with strict role-based access control and encrypted payloads.</p>
          </motion.div>
          <motion.div  className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center group">
            <motion.div whileHover={{ scale: 1.1 }} className="w-16 h-16 mx-auto bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-6"><Cpu size={32} /></motion.div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tighter">Modular Expansion</h3>
            <p className="text-slate-600 text-sm font-medium">Adding a new feature or app interface in the future is seamless and safe with decoupled microservices.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 uppercase tracking-tighter leading-none">Architecture Results</h2>
            <p className="text-slate-600 text-lg font-medium">See how we have architected massive digital ecosystems for our clients.</p>
          </div>
          <Link href="/case-studies" className="text-emerald-700 font-bold hover:text-emerald-800 flex items-center gap-2 text-sm uppercase tracking-widest">
            View All Work <ArrowRight size={18} />
          </Link>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Global B2B Marketplace", desc: "A multi-vendor marketplace connecting wholesale suppliers with retailers, featuring automated escrow and shipping logic.", tags: ["Next.js", "Node.js", "Stripe Connect"] },
            { title: "EdTech Creator Platform", desc: "A high-traffic platform allowing educators to host live classes, sell courses, and manage communities natively.", tags: ["React", "GraphQL", "AWS"] },
          ].map((study, idx) => (
            <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.95 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }} 
                className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-200 shadow-sm hover:shadow-2xl transition-all group cursor-pointer"
            >
              <div className="flex gap-2 mb-6">
                {study.tags.map(tag => <span key={tag} className="text-[10px] font-black font-mono text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">{tag}</span>)}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-emerald-600 transition-colors leading-tight">{study.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-8 text-sm font-medium">{study.desc}</p>
              <span className="text-emerald-600 font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform text-xs uppercase tracking-widest">
                Read Technical Study <ArrowRight size={16} />
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 10. CTA SECTION */}
      <section className="py-32 px-6 text-center max-w-4xl mx-auto space-y-12">
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-8xl font-extrabold text-slate-900 tracking-tighter uppercase leading-none">
            Build Your <br /><span className="text-emerald-600 italic">Platform.</span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mt-10 font-medium">
            Scale your business with an engineering partner that understands complex platform architecture. Let's design an ecosystem that grows with you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-10">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-12 py-6 bg-emerald-600 text-white font-black uppercase tracking-[0.2em] text-xs rounded-xl shadow-xl">
                <Link href="/contact">Start Your Project</Link>
            </motion.button>
          </div>
        </motion.div>
      </section>

    </div>
  );
}