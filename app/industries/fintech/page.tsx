'use client';

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { 
  Landmark, ShieldCheck, Lock, Activity, 
  CreditCard, LineChart, Wallet, ArrowRight, 
  CheckCircle2, Network, Server, Database,
  ArrowUpRight, FileDigit, Fingerprint, Eye
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
      staggerChildren: 0.15
    }
  }
};

export default function FintechIndustryPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-200 pb-20 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8 overflow-hidden">
        {/* Institutional Ambient Glow */}
        <motion.div 
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-100/50 blur-[120px] rounded-full -z-10"
        />
        <div className="absolute top-20 right-1/4 w-[400px] h-[300px] bg-emerald-50/50 blur-[100px] rounded-full -z-10"></div>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-sm font-bold tracking-wide uppercase mb-4">
            <Landmark size={16} /> FinTech Software Engineering
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight">
            Architecting Secure <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-emerald-600">Financial Ecosystems</span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We engineer high-frequency, resilient financial platforms. From modern payment gateways to AI-driven wealth management, we build the secure infrastructure that powers the future of money.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <Link href="/contact" className="px-8 py-4 bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-700/20 hover:bg-blue-800 hover:scale-105 transition-all text-lg">
              Build Your FinTech Platform
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg flex items-center justify-center gap-2">
              Consult a Security Architect <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. FINTECH CHALLENGES */}
      <section className="py-24 px-6 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">The Risks of Financial Software</h2>
            <p className="text-lg text-slate-600">In FinTech, there is no room for "move fast and break things." Bugs don't just cause bad UX—they cause catastrophic financial loss and regulatory ruin.</p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { title: "Compliance & Fines", desc: "Failing to meet strict PCI-DSS, GDPR, or KYC/AML regulations can result in your platform being shut down overnight.", icon: <FileDigit className="text-red-500 w-8 h-8" /> },
              { title: "Data Breaches", desc: "Financial apps are the #1 target for cyberattacks. A single vulnerability in your API can expose millions of users' banking details.", icon: <Lock className="text-red-500 w-8 h-8" /> },
              { title: "Transaction Latency", desc: "In trading and payment processing, milliseconds matter. Legacy architectures simply cannot handle high-frequency transaction volumes.", icon: <Activity className="text-red-500 w-8 h-8" /> }
            ].map((challenge, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                whileHover={{ y: -10 }}
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

      {/* 3. FINTECH ARCHITECTURE STRATEGY */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-emerald-600 font-bold tracking-widest uppercase text-sm">Our Architecture Standard</h3>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Immutable, Event-Driven, Secure.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We design financial systems around "Event Sourcing." Instead of just updating a database row, every single transaction is recorded as an immutable event. This ensures absolute traceability, preventing double-spending and simplifying audits.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Immutable event ledgers (Kafka) for strict audit trails.",
                "Bank-grade AES-256 encryption at rest and in transit.",
                "Idempotent API design to absolutely prevent double-charging.",
                "Microservices architecture for isolated point-of-failure."
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
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#0A192F] p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden border border-slate-800"
          >
             {/* Abstract Ledger CSS Graphic */}
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
             <h3 className="text-2xl font-bold text-white mb-8 relative z-10 flex items-center gap-3">
               <Database className="text-emerald-400" /> Immutable Ledger Flow
             </h3>
             <div className="space-y-4 relative z-10">
               {/* Transaction Request */}
               <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700"
               >
                 <CreditCard className="text-slate-400" />
                 <div><span className="font-bold block text-white">Payment Initiated</span><span className="text-sm text-slate-400">Req: Transfer $500.00</span></div>
               </motion.div>
               <div className="flex justify-center">
                 <motion.div 
                  animate={{ y: [0, 5, 0], opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                 >
                  <ArrowRight className="text-emerald-500 rotate-90" />
                 </motion.div>
               </div>
               
               {/* Event Stream (Kafka) */}
               <motion.div 
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                className="bg-blue-900/30 border border-blue-500/50 p-5 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.15)] relative"
               >
                 <div className="absolute -left-2 top-1/2 w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
                 <div className="flex items-center gap-3 mb-2">
                   <Network className="text-blue-400 w-5 h-5" />
                   <span className="font-bold text-blue-100">Event Stream (Kafka)</span>
                 </div>
                 <div className="font-mono text-xs text-blue-300 bg-slate-900 p-2 rounded border border-blue-800">
                   {"{ event: 'FUNDS_LOCKED', timestamp: '14:02:01.003' }"}
                 </div>
               </motion.div>
               
               <div className="flex justify-center">
                <motion.div 
                    animate={{ y: [0, 5, 0], opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                  >
                    <ArrowRight className="text-emerald-500 rotate-90" />
                  </motion.div>
               </div>
               {/* Final State */}
               <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex items-center gap-4 bg-emerald-900/20 p-4 rounded-xl border border-emerald-500/30"
               >
                 <ShieldCheck className="text-emerald-400" />
                 <div><span className="font-bold block text-emerald-50">State Updated</span><span className="text-sm text-emerald-200/70">Ledger Appended. Balance Verified.</span></div>
               </motion.div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 4. FINTECH PLATFORMS WE BUILD */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">Financial Systems We Build</h2>
            <p className="text-lg text-slate-600">From consumer-facing banking apps to complex backend payment routing, we build the full spectrum of financial technology.</p>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { title: "Digital Banking (Neobanks)", icon: <Landmark size={28} />, desc: "Core banking replacements, wallet management, and frictionless KYC onboarding flows." },
              { title: "Payment Gateways", icon: <CreditCard size={28} />, desc: "High-throughput APIs for processing cards, ACH, and cross-border disbursements." },
              { title: "WealthTech & Trading", icon: <LineChart size={28} />, desc: "Real-time stock/crypto trading dashboards, portfolio analytics, and robo-advisors." },
              { title: "Lending & PropTech", icon: <Wallet size={28} />, desc: "Automated credit scoring engines, loan origination systems, and mortgage portals." }
            ].map((prod, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-blue-500 transition-all duration-300 group"
              >
                <div className="text-blue-600 mb-6 bg-blue-50 w-14 h-14 flex items-center justify-center rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors">{prod.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{prod.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{prod.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. TECHNOLOGY STACK */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-[3rem] p-8 md:p-16 shadow-xl shadow-slate-100 flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">The Enterprise Finance Stack</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We abandon standard web frameworks in favor of high-concurrency, memory-safe languages. This stack is specifically chosen to process thousands of financial transactions per second without dropping a single packet.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["Go (Golang)", "Rust", "Java / Spring Boot", "Node.js", "PostgreSQL", "Apache Kafka", "Redis", "AWS Shield"].map(tech => (
                <span key={tech} className="px-4 py-2 bg-slate-100 text-slate-800 font-bold rounded-lg text-sm border border-slate-200 hover:border-blue-400 transition-colors cursor-default">
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
             <motion.div variants={fadeInUp} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-blue-700 font-bold mb-2">High-Concurrency Core</h4><p className="text-slate-600 text-sm">Go (Golang), Rust, Java</p></motion.div>
             <motion.div variants={fadeInUp} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-blue-700 font-bold mb-2">Event Streaming</h4><p className="text-slate-600 text-sm">Apache Kafka, RabbitMQ</p></motion.div>
             <motion.div variants={fadeInUp} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-blue-700 font-bold mb-2">ACID Compliant DBs</h4><p className="text-slate-600 text-sm">PostgreSQL, CockroachDB</p></motion.div>
             <motion.div variants={fadeInUp} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-blue-700 font-bold mb-2">Client Applications</h4><p className="text-slate-600 text-sm">React Native, Next.js</p></motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. AI IN FINTECH (Fraud & Automation) */}
      <section className="py-24 px-6 bg-[#0A192F] text-white relative overflow-hidden border-y border-slate-800">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -right-20 -top-20 opacity-5 text-emerald-400 pointer-events-none"
        >
          <Eye size={400} />
        </motion.div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-bold tracking-wide uppercase">
              <Eye size={16} /> Intelligent Monitoring
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              AI-Driven <span className="text-emerald-500">Fraud Prevention</span>
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed font-medium">
              We deploy machine learning models directly into your payment pipelines. By analyzing location data, transaction velocity, and behavioral biometrics, our AI flags and blocks fraudulent transactions in real-time before the money leaves the account.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Algorithmic transaction scoring (0-100 Risk Score).",
                "Automated KYC document verification via OCR and Vision AI.",
                "Predictive credit scoring based on alternative data points."
              ].map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center text-slate-300 font-medium"
                >
                  <CheckCircle2 className="text-emerald-500 w-5 h-5 mr-3 shrink-0" /> {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full bg-slate-900 border border-slate-700 p-8 rounded-[2rem] shadow-[0_0_40px_rgba(16,185,129,0.1)]"
          >
             <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-6">
               <span className="text-white font-bold">Live Transaction Analysis</span>
               <span className="text-emerald-400 text-sm font-mono flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div> Active ML Model</span>
             </div>
             <div className="space-y-4">
               {/* Safe Tx */}
               <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex justify-between items-center"
               >
                 <div><p className="text-white font-bold text-sm">TXN_8921 • Apple Store</p><p className="text-slate-400 text-xs">Device: Known • Loc: Local</p></div>
                 <div className="text-right"><p className="text-emerald-400 font-bold">Approved</p><p className="text-slate-500 text-xs">Risk: 2%</p></div>
               </motion.div>
               {/* Flagged Tx */}
               <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-red-900/20 p-4 rounded-xl border border-red-500/50 flex justify-between items-center shadow-[0_0_20px_rgba(239,68,68,0.15)] relative overflow-hidden"
               >
                 <div className="absolute left-0 top-0 w-1 h-full bg-red-500"></div>
                 <div><p className="text-red-100 font-bold text-sm">TXN_8922 • Crypto.com</p><p className="text-red-300/70 text-xs">Device: Unknown • Velocity Anomaly</p></div>
                 <div className="text-right"><p className="text-red-400 font-bold">BLOCKED</p><p className="text-red-400 text-xs">Risk: 94%</p></div>
               </motion.div>
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
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">Secure Delivery Protocol</h2>
          <p className="text-lg text-slate-600">We follow a strict, security-first software development lifecycle to ensure absolute platform integrity before deployment.</p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-5 gap-4"
        >
          {[
            { step: "01", title: "Compliance Audit", desc: "Mapping platform features against PCI-DSS, SOC2, and regional banking laws." },
            { step: "02", title: "Architecture", desc: "Designing immutable data schemas and Zero-Trust network boundaries." },
            { step: "03", title: "Development", desc: "Writing memory-safe code using test-driven development (TDD)." },
            { step: "04", title: "Pen Testing", desc: "Simulating severe cyberattacks to identify and patch vulnerabilities." },
            { step: "05", title: "Launch", desc: "Deploying to hardened cloud infrastructure with active SOC monitoring." }
          ].map((process, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeInUp}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:border-blue-400 transition-colors relative overflow-hidden group"
            >
               <div className="text-sm font-black text-blue-600 mb-3 uppercase tracking-wider">Phase {process.step}</div>
               <h4 className="text-lg font-bold text-slate-900 mb-2">{process.title}</h4>
               <p className="text-sm text-slate-600 leading-relaxed">{process.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 8. BUSINESS BENEFITS */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div variants={fadeInUp} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="w-16 h-16 mx-auto bg-blue-50 text-blue-700 rounded-full flex items-center justify-center mb-6"><ShieldCheck size={32} /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Total Regulatory Peace of Mind</h3>
            <p className="text-slate-600">Breeze through technical due diligence and external banking audits with clean, compliant, and fully documented architecture.</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="w-16 h-16 mx-auto bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-6"><Activity size={32} /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Hyper-Scale Ready</h3>
            <p className="text-slate-600">As your user base grows from 1,000 to 1,000,000, your infrastructure scales elastically without database locks or transaction drops.</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="w-16 h-16 mx-auto bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-6"><Fingerprint size={32} /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Superior User Trust</h3>
            <p className="text-slate-600">Lightning-fast load times, seamless biometric logins, and flawless transaction execution build unshakable trust with your customers.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* 9. CASE STUDIES */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">FinTech Engineering Success</h2>
            <p className="text-slate-600 text-lg">See how we have engineered scalable financial infrastructure for ambitious companies.</p>
          </div>
          <Link href="/case-studies" className="text-blue-700 font-bold hover:text-blue-800 flex items-center gap-2">
            View All Work <ArrowRight size={18} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "B2B Cross-Border Payment API", desc: "Engineered a high-throughput API gateway processing $5M+ daily across 14 currencies, utilizing Go and Kafka for zero-packet-loss event streaming.", tags: ["Golang", "Kafka", "Payments"] },
            { title: "Modern Neobank Mobile App", desc: "Built a fully compliant consumer banking app from scratch (React Native + Node.js) featuring instant automated KYC and Plaid integration.", tags: ["React Native", "Plaid", "KYC"] },
          ].map((study, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all group cursor-pointer"
            >
              <div className="flex gap-2 mb-6">
                {study.tags.map(tag => <span key={tag} className="text-xs font-bold text-blue-800 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">{tag}</span>)}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-blue-700 transition-colors">{study.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-8">{study.desc}</p>
              <span className="text-blue-700 font-semibold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
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
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">Build the Future of Finance.</h2>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mt-6">
            Partner with an engineering team that understands the uncompromising security, compliance, and speed required to win in the financial sector.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-10">
            <Link href="/contact" className="px-10 py-5 bg-blue-700 text-white font-bold rounded-xl shadow-xl shadow-blue-700/20 hover:bg-blue-800 hover:scale-105 transition-all text-lg">
              Discuss Your FinTech Project
            </Link>
            <Link href="/contact" className="px-10 py-5 bg-white border-2 border-slate-200 text-slate-800 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg">
              Speak with an Architect
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}