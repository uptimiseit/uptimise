'use client';

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { 
  Rocket, Clock, ShieldAlert, Wallet, Cpu, Layers, 
  Smartphone, Bot, Server, Zap, LineChart, Code2, 
  CheckCircle2, ArrowRight, LayoutDashboard, Database
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
//     transition: { type: "spring", stiffness: 400, damping: 10 } 
//   }
// };

export default function MVPDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100 pb-20 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8 overflow-hidden">
        {/* Animated Background glow */}
        <motion.div 
          animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-orange-50/80 blur-[100px] rounded-full -z-10" 
        />
        
        <motion.div 
          initial="hidden"
          animate="visible"
          
          className="space-y-8"
        >
          <motion.div  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-bold tracking-wide uppercase mb-4 border border-orange-200">
            <Rocket size={16} className="animate-pulse" /> For Founders & Startups
          </motion.div>
          
          <motion.h1  className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight">
            Build Your Startup MVP <br className="hidden md:block" />
            <motion.span 
               animate={{ color: ["#f97316", "#db2777", "#f97316"] }}
               transition={{ duration: 6, repeat: Infinity }}
               className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500"
            >
              Faster & Smarter
            </motion.span>
          </motion.h1>
          
          <motion.p  className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Don't burn your runway on slow development. Uptimise IT builds scalable, investor-ready Minimum Viable Products in weeks, not months, using AI-native engineering and modern cloud architecture.
          </motion.p>
          
          <motion.div  className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="px-8 py-4 bg-orange-500 text-white font-bold rounded-xl shadow-lg shadow-orange-500/20 hover:bg-orange-600 transition-all text-lg block text-center">
                Discuss Your MVP Idea
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg block text-center">
                Get an Estimate
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. STARTUP CHALLENGES */}
      <section className="py-24 px-6 bg-slate-950 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-300 uppercase">Why Most MVPs Fail</h2>
            <p className="text-base text-slate-100 font-medium">Startups operate in high-risk environments. Traditional agencies often set founders up for failure through slow timelines and fragile code.</p>
          </motion.div>
          
          <motion.div 
            
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { title: "Too Slow to Market", desc: "Spending 6-9 months building an MVP means missing the market window and running out of cash before launch.", icon: <Clock /> },
              { title: "Technical Debt", desc: "Freelancers often hack together unscalable code. When you get your first 1,000 users, the whole system crashes.", icon: <ShieldAlert /> },
              { title: "Runway Burn", desc: "Over-engineering features that users don't actually want drains your budget before you achieve Product-Market Fit.", icon: <Wallet /> }
            ].map((challenge, idx) => (
              <motion.div 
                key={idx} 
                
                whileHover="hover"
                // variants={hoverScale}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-orange-300 transition-all duration-300 group"
              >
                <div className="mb-6 bg-red-50 text-red-500 w-16 h-16 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">{challenge.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{challenge.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{challenge.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. MVP DEVELOPMENT APPROACH */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-orange-500 font-bold tracking-widest uppercase text-sm font-mono">// Our_Approach</h3>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              The Lean, AI-Native MVP Methodology
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              We focus strictly on the core value proposition. Our goal is to get a functional, beautiful, and scalable product into the hands of your users fast.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Core Feature Isolation (No over-engineering)",
                "Scalable Architecture Foundations (Ready for Series A)",
                "Rapid AI-Assisted Prototyping",
                "Built-in Analytics for User Tracking"
              ].map((item, i) => (
                <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center text-slate-800 font-semibold text-lg"
                >
                  <CheckCircle2 className="text-orange-500 w-6 h-6 mr-3 shrink-0" /> {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 mt-8">
              <motion.div  whileHover={{ y: -5 }} className="bg-orange-50 p-6 rounded-3xl border border-orange-100 shadow-sm">
                <span className="text-2xl font-black text-orange-600 font-mono">01. Build</span>
                <p className="text-slate-600 mt-2 text-sm font-medium">Ship the core product fast.</p>
              </motion.div>
              <motion.div  whileHover={{ y: -5 }} className="bg-slate-900 text-white p-6 rounded-3xl shadow-xl">
                <span className="text-2xl font-black text-white font-mono">03. Learn</span>
                <p className="text-slate-400 mt-2 text-sm font-medium">Iterate based on feedback.</p>
              </motion.div>
            </div>
            <div className="space-y-4">
              <motion.div  whileHover={{ y: -5 }} className="bg-blue-50 p-6 rounded-3xl border border-blue-100 shadow-sm">
                <span className="text-2xl font-black text-blue-600 font-mono">02. Measure</span>
                <p className="text-slate-600 mt-2 text-sm font-medium">Track user behavior data.</p>
              </motion.div>
              <motion.div  whileHover={{ y: -5 }} className="bg-pink-50 p-6 rounded-3xl border border-pink-100 shadow-sm">
                <span className="text-2xl font-black text-pink-600 font-mono">04. Scale</span>
                <p className="text-slate-600 mt-2 text-sm font-medium">Expand tech stack safely.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. WHAT WE BUILD (MVP PRODUCTS) */}
      <section className="py-24 px-6 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <h2 className="text-4xl font-bold tracking-tight text-white uppercase tracking-tighter">What We Build for Founders</h2>
            <p className="text-lg text-slate-400">Specialized engineering teams to execute your vision flawlessly.</p>
          </motion.div>
          <motion.div 
            
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { title: "B2B SaaS MVPs", icon: <LayoutDashboard size={28} />, desc: "Multi-tenant architectures with subscriptions." },
              { title: "AI Product Wrappers", icon: <Bot size={28} />, desc: "LLM-integrated apps leveraging OpenAI or Anthropic." },
              { title: "Two-Sided Marketplaces", icon: <Layers size={28} />, desc: "Secure platforms connecting buyers and sellers." },
              { title: "Mobile App MVPs", icon: <Smartphone size={28} />, desc: "Cross-platform React Native or Flutter apps." }
            ].map((prod, idx) => (
              <motion.div 
                key={idx} 
                
                whileHover={{ y: -10, backgroundColor: "#1e293b" }}
                className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-orange-500 transition-all group"
              >
                <div className="text-orange-400 mb-6 group-hover:scale-110 transition-transform">{prod.icon}</div>
                <h3 className="text-xl font-bold mb-3 uppercase tracking-tighter leading-none">{prod.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed font-medium">{prod.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. TECHNOLOGY STACK FOR MVP */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-[3rem] p-8 md:p-16 shadow-xl shadow-slate-100 flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 uppercase">The Modern Startup Stack</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              We build on the exact same modern, scalable stack used by billion-dollar unicorns. No legacy code, no rigid templates.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["Next.js", "React", "Node.js", "PostgreSQL", "Supabase", "AWS", "Tailwind CSS", "Vercel"].map(tech => (
                <span key={tech} className="px-4 py-2 bg-slate-100 text-slate-800 font-bold rounded-lg text-[10px] border border-slate-200 hover:border-orange-400 transition-colors cursor-default font-mono uppercase">
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
            {[
                { i: <Code2 />, t: "Frontend" },
                { i: <Server />, t: "Backend" },
                { i: <Database />, t: "Database" },
                { i: <Zap />, t: "Deployment" }
            ].map((box, i) => (
                <motion.div key={i}  whileHover={{ y: -5 }} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center justify-center shadow-sm">
                    <div className="text-slate-400 mb-3">{box.i}</div>
                    <span className="font-bold text-slate-800 text-sm uppercase tracking-widest">{box.t}</span>
                </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. AI SOFTWARE FACTORY ACCELERATION */}
      <section className="py-24 px-6 bg-[#0B0F19] relative overflow-hidden">
        <motion.div 
          animate={{ x: [-100, 100, -100], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600 blur-[100px] rounded-full -z-10 pointer-events-none" 
        />
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-bold tracking-wide uppercase font-mono"
          >
            <Bot size={16} /> AI_Software_Factory
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto uppercase tracking-tighter"
          >
            Launch 40% Faster with <br /><span className="text-blue-500 italic">AI-Native Engineering</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            We utilize proprietary AI agent workflows to automate boilerplate code and infrastructure. This allows engineers to focus strictly on your unique business logic, cutting time-to-market nearly in half.
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
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 uppercase tracking-tighter leading-none">Startup Delivery Protocol</h2>
          <p className="text-lg text-slate-600 font-medium italic">// Zero_to_Customer_Lifecycle</p>
        </motion.div>
        
        <motion.div 
          
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {[
            { step: "1. Scope", title: "Feature Scoping", desc: "Ruthlessly trimming the fat. We define the exact features needed to prove the concept." },
            { step: "2. Design", title: "UX/UI Prototyping", desc: "Creating high-fidelity Figma designs to visualize the product before coding." },
            { step: "3. Build", title: "Sprint Development", desc: "Agile, 2-week engineering sprints with full transparency and weekly demos." },
            { step: "4. Launch", title: "Deploy & Monitor", desc: "Deploying to scalable cloud infrastructure and setting up user analytics." }
          ].map((process, idx) => (
            <motion.div 
              key={idx} 
              
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-orange-50 hover:border-orange-100 transition-colors group shadow-sm"
            >
               <div className="text-xs font-black text-orange-500 mb-4 tracking-widest uppercase font-mono">{process.step}</div>
               <h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{process.title}</h4>
               <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{process.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 8. STARTUP SUCCESS BENEFITS */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <motion.div 
          
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div  className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center group">
            <motion.div whileHover={{ scale: 1.1 }} className="w-16 h-16 mx-auto bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6"><LineChart size={32} /></motion.div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tighter">Investor-Ready</h3>
            <p className="text-slate-600 text-sm font-medium">Pass technical due diligence with ease. We write clean, modular code that VCs love.</p>
          </motion.div>
          <motion.div  className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center group">
            <motion.div whileHover={{ scale: 1.1 }} className="w-16 h-16 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6"><Zap size={32} /></motion.div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tighter">Pivot Capability</h3>
            <p className="text-slate-600 text-sm font-medium">Our architecture is decoupled, allowing you to easily pivot features based on early feedback.</p>
          </motion.div>
          <motion.div  className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center group">
            <motion.div whileHover={{ scale: 1.1 }} className="w-16 h-16 mx-auto bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-6"><Wallet size={32} /></motion.div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tighter">Efficient Scaling</h3>
            <p className="text-slate-600 text-sm font-medium">Serverless cloud setups ensure you only pay for the exact computing power you consume.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* 9. WHY STARTUPS CHOOSE UPTIMISE */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-orange-600 text-white rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl shadow-orange-600/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff10_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          <div className="flex-1 space-y-6 relative z-10">
            <h2 className="text-4xl font-extrabold tracking-tight uppercase tracking-tighter leading-none">Why Startups <br /> Choose Uptimise</h2>
            <p className="text-orange-100 text-lg leading-relaxed font-medium">
              We operate as your interim technical co-founder. You get an elite squad who understand business logic—not just code.
            </p>
          </div>
          <motion.div  initial="hidden" whileInView="visible" className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full relative z-10">
            {[
              "Transparent weekly demos",
              "Direct access to architects",
              "No vendor lock-in",
              "Post-launch growth support"
            ].map((reason, i) => (
              <motion.div 
                key={i} 
                
                className="bg-orange-700/50 border border-orange-500/50 p-4 rounded-xl flex items-center font-bold text-xs uppercase tracking-widest text-white backdrop-blur-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-orange-300 mr-3 shrink-0" /> {reason}
              </motion.div>
            ))}
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
          <h2 className="text-4xl md:text-8xl font-extrabold text-slate-900 tracking-tighter uppercase leading-none">
            Stop Dreaming. <br /><span className="text-orange-600 italic">Start Building.</span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mt-10 font-medium">
            The market won't wait. Let's build a highly scalable, investor-ready MVP and get your product into the hands of real users.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-10">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-12 py-6 bg-slate-900 text-white font-black uppercase tracking-[0.2em] text-xs rounded-xl shadow-2xl">
              <Link href="/contact">Start Your Project</Link>
            </motion.button>
          </div>
        </motion.div>
      </section>

    </div>
  );
}