'use client';

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { 
  Cloud, Lock, Zap, Users, CreditCard, BarChart, Layers, Bot, 
  Terminal, ShieldCheck, Cpu, ArrowRight, LayoutDashboard, 
  ServerCrash, TrendingDown, ArrowUpRight, CheckCircle2,
  Database, Network, Shield,
  Building
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

export default function SaasIndustryPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200 pb-20 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8 overflow-hidden">
        {/* Animated Ambient Cloud Glow */}
        <motion.div 
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-100 blur-[120px] rounded-full -z-10" 
        />
        
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={staggerContainer} 
          className="space-y-6"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-bold tracking-wide uppercase mb-4 shadow-sm">
            <Cloud size={16} className="animate-bounce" /> SaaS Industry Solutions
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight">
            Scale Your MRR with <br className="hidden md:block" />
            <motion.span 
               animate={{ color: ["#2563eb", "#4f46e5", "#2563eb"] }}
               transition={{ duration: 6, repeat: Infinity }}
               className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
            >
              Enterprise SaaS Architecture
            </motion.span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We partner with ambitious founders to engineer high-retention, multi-tenant Software-as-a-Service platforms. From initial MVP to enterprise scale, we build the infrastructure that powers recurring revenue.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all text-lg block">
                Build Your SaaS Platform
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg flex items-center justify-center gap-2 block">
                Talk to a SaaS Architect <ArrowUpRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. SAAS INDUSTRY CHALLENGES */}
      <section className="py-24 px-6 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 uppercase">The Friction of Scaling SaaS</h2>
            <p className="text-lg text-slate-600">Acquiring users is only half the battle. If your platform's architecture isn't built for scale, technical debt will destroy your user retention.</p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { title: "High Churn Rates", desc: "Slow load times and buggy interfaces frustrate users, causing them to switch to competitors.", icon: <TrendingDown className="text-red-500 w-8 h-8" /> },
              { title: "Tenant Data Bleed", desc: "Poorly isolated databases risk exposing proprietary data, resulting in legal and reputational damage.", icon: <ShieldCheck className="text-red-500 w-8 h-8" /> },
              { title: "Costly Infrastructure", desc: "Unoptimized code forces you to over-provision servers, destroying gross margins as you grow.", icon: <ServerCrash className="text-red-500 w-8 h-8" /> }
            ].map((challenge, idx) => (
              <motion.div 
                key={idx} 
                // variants={fadeInUp}
                whileHover="hover"
                variants={hoverScale}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:border-red-200 transition-all duration-300 group"
              >
                <div className="mb-6 bg-red-100 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">{challenge.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{challenge.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{challenge.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. OUR SOLUTIONS FOR THIS INDUSTRY */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            className="space-y-8"
          >
            <h3 className="text-blue-600 font-bold tracking-widest uppercase text-sm font-mono">// Strategic_Solutions</h3>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Engineering for Recurring Revenue
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We eliminate technical debt by building on decoupled, scalable architectures. Our focus is on delivering a frictionless user experience paired with a highly secure backend.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Bulletproof Multi-Tenant Database Architecture.",
                "Stripe/Braintree Integration for Tiered Billing.",
                "Automated CI/CD pipelines for daily releases.",
                "Sub-second latency via edge caching."
              ].map((item, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-center text-slate-800 font-semibold text-lg">
                  <CheckCircle2 className="text-blue-500 w-6 h-6 mr-3 shrink-0" /> {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            className="grid grid-cols-2 gap-4"
          >
             <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm"><Layers className="w-10 h-10 mb-4 text-blue-600" /><h4 className="font-bold text-slate-900">Tenant Isolation</h4><p className="text-slate-600 text-xs mt-2">Pool, Bridge, or Silo models.</p></motion.div>
             <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="bg-slate-900 text-white p-6 rounded-3xl shadow-xl"><CreditCard className="w-10 h-10 mb-4 text-emerald-400" /><h4 className="font-bold">Billing Engine</h4><p className="text-slate-400 text-xs mt-2">Metered & Tiered usage.</p></motion.div>
             <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="bg-slate-900 text-white p-6 rounded-3xl shadow-xl"><LayoutDashboard className="w-10 h-10 mb-4 text-indigo-400" /><h4 className="font-bold">Super Admin</h4><p className="text-slate-400 text-xs mt-2">Manage users & billing.</p></motion.div>
             <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm"><Network className="w-10 h-10 mb-4 text-blue-600" /><h4 className="font-bold text-slate-900">API Webhooks</h4><p className="text-slate-600 text-xs mt-2">Extensible integrations.</p></motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. PLATFORMS WE BUILD */}
      <section className="py-24 px-6 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-white uppercase tracking-tighter">SaaS Models We Engineer</h2>
            <p className="text-lg text-slate-400">Tailored architecture to fit your specific go-to-market strategy.</p>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "B2B Vertical SaaS", icon: <Building size={28} />, desc: "Software tailored for real estate, construction, or legal." },
              { title: "AI-Powered SaaS", icon: <Bot size={28} />, desc: "Platforms leveraging LLMs for predictive analytics and automation." },
              { title: "Micro-SaaS", icon: <Zap size={28} />, desc: "Single-purpose tools designed for rapid deployment and low overhead." },
              { title: "Enterprise SaaS", icon: <Shield size={28} />, desc: "High-security platforms with SSO and SOC2 compliance." }
            ].map((prod, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                whileHover={{ y: -10, backgroundColor: "#1e293b" }}
                className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-blue-500 transition-all group"
              >
                <div className="text-blue-400 mb-6 group-hover:scale-110 transition-transform">{prod.icon}</div>
                <h3 className="text-xl font-bold mb-3">{prod.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed font-medium">{prod.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. SECURITY & COMPLIANCE ARCHITECTURE */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-900 to-[#020617] rounded-[3rem] p-8 md:p-16 text-white flex flex-col lg:flex-row items-center gap-12 border border-blue-900/50 relative overflow-hidden shadow-2xl"
        >
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 right-0 p-32 opacity-5 pointer-events-none"
          >
            <Lock size={400} />
          </motion.div>
          <div className="flex-1 space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-bold tracking-wide uppercase font-mono">
              <ShieldCheck size={16} /> Enterprise Trust
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight">Zero-Trust SaaS Security</h2>
            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              We build strict data isolation and compliance protocols directly into the foundation, making passing technical due-diligence effortless.
            </p>
            <ul className="space-y-4 pt-4">
              {["Row-Level Security (RLS) for data isolation.", "AES-256 Encryption at rest and in transit.", "SSO & SAML integration.", "SOC2 & GDPR compliant design."].map((item, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-center font-medium text-blue-50">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-blue-400 shrink-0" />{item}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>

      {/* 6. TECHNOLOGY STACK */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 uppercase tracking-tighter">The Modern SaaS Tech Stack</h2>
            <p className="text-lg text-slate-600 font-medium">Bleeding-edge performance for infinite scalability.</p>
          </motion.div>
          <motion.div 
            variants={staggerContainer} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {[
              { category: "Frontend Engine", items: ["Next.js", "React", "TypeScript"] },
              { category: "Backend & Logic", items: ["Node.js", "Python", "GraphQL"] },
              { category: "Database & Cache", items: ["PostgreSQL", "Redis", "Supabase"] },
              { category: "Cloud Infra", items: ["AWS", "Docker", "Stripe API"] },
            ].map((stack, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white border border-slate-200 shadow-sm rounded-2xl p-8 hover:border-blue-400 transition-colors"
              >
                <h4 className="text-blue-600 font-bold mb-6 tracking-wide uppercase text-[10px] font-mono">{stack.category}</h4>
                <ul className="space-y-3">
                  {stack.items.map((item, i) => (
                    <li key={i} className="flex items-center text-slate-700 font-bold text-sm">
                      <div className="w-1 h-1 rounded-full bg-blue-500 mr-3"></div> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 8. THE AI SOFTWARE FACTORY ADVANTAGE */}
      <section className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden border-y border-slate-800">
        <motion.div 
          animate={{ x: [-100, 100, -100], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600 blur-[100px] rounded-full -z-10 pointer-events-none" 
        />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1 space-y-6">
            <h2 className="text-4xl font-extrabold tracking-tight uppercase tracking-tighter">The AI Software Factory</h2>
            <p className="text-slate-300 text-lg leading-relaxed font-medium">
              By deploying autonomous agents to write boilerplate code and configure infrastructure, we launch platforms 40% faster than traditional agencies.
            </p>
          </motion.div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {[
              "40% Faster Time-to-Market",
              "Enterprise-Grade Architecture",
              "Transparent Agile Sprints",
              "No Vendor Lock-in"
            ].map((reason, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-800/80 border border-blue-500/30 p-4 rounded-xl flex items-center font-bold text-xs text-white backdrop-blur-sm uppercase tracking-widest"
              >
                <CheckCircle2 className="w-4 h-4 text-blue-400 mr-3 shrink-0" /> {reason}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA SECTION */}
      <section className="py-32 px-6 text-center max-w-4xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-8xl font-extrabold text-slate-900 tracking-tighter uppercase leading-none">Ready to <span className="text-blue-600 italic">Build?</span></h2>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium mt-10">
            Let Uptimise IT engineer the platform while you focus on acquiring customers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-10">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-10 py-5 bg-blue-600 text-white font-black uppercase tracking-widest text-xs rounded-xl shadow-xl">
              <Link href="/contact">Start Your Project</Link>
            </motion.button>
            <motion.button whileHover={{ backgroundColor: "#f1f5f9" }} className="px-10 py-5 bg-white border-2 border-slate-200 text-slate-800 font-black uppercase tracking-widest text-xs rounded-xl">
              <Link href="/contact">Book Strategy Call</Link>
            </motion.button>
          </div>
        </motion.div>
      </section>

    </div>
  );
}