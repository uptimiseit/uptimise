'use client';

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { 
  HeartPulse, ShieldAlert, Database, Stethoscope, 
  Activity, ArrowRight, CheckCircle2, Lock, 
  Video, Pill, Microscope, FilePlus, 
  ArrowUpRight, Server, Network, ShieldCheck
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

export default function HealthcareIndustryPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-teal-200 pb-20 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8 overflow-hidden">
        {/* Clinical Ambient Glow */}
        <motion.div 
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-50 blur-[120px] rounded-full -z-10" 
        />
        <div className="absolute top-20 right-1/4 w-[400px] h-[300px] bg-cyan-50/50 blur-[100px] rounded-full -z-10"></div>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-sm font-bold tracking-wide uppercase mb-4">
            <HeartPulse size={16} className="text-teal-600 animate-pulse" /> HealthTech Engineering
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight">
            Architecting Compliant <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-500 italic">Healthcare Platforms</span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We engineer secure, interoperable medical software. From telemedicine apps to complex EMR/EHR integrations, we build the digital infrastructure that improves patient outcomes while guaranteeing strict HIPAA compliance.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <Link href="/contact" className="px-8 py-4 bg-teal-600 text-white font-bold rounded-xl shadow-lg shadow-teal-600/20 hover:bg-teal-700 hover:scale-105 transition-all text-lg uppercase tracking-wider">
              Build Your HealthTech Platform
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg flex items-center justify-center gap-2">
              Consult a Compliance Architect <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. HEALTHCARE CHALLENGES */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">The Risks of Medical Software</h2>
            <p className="text-lg text-slate-600">Healthcare technology cannot afford to fail. Buggy software or unencrypted data doesn't just damage your brand—it puts patient lives and your legal standing at risk.</p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { title: "HIPAA Violations & ePHI Leaks", desc: "Exposing Protected Health Information (ePHI) results in devastating millions in federal fines and immediate loss of medical licenses.", icon: <ShieldAlert className="text-red-500 w-8 h-8" /> },
              { title: "Fragmented Data (Silos)", desc: "Legacy hospital systems don't talk to each other. When doctors can't access a unified patient history, care quality drops drastically.", icon: <Database className="text-red-500 w-8 h-8" /> },
              { title: "Poor Provider UX", desc: "Clunky, outdated EMR interfaces cause extreme physician burnout, slowing down clinics and reducing the number of patients seen daily.", icon: <Activity className="text-red-500 w-8 h-8" /> }
            ].map((challenge, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-red-200 transition-all duration-300 group"
              >
                <div className="mb-6 bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">{challenge.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{challenge.title}</h3>
                <p className="text-slate-600 leading-relaxed">{challenge.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. HEALTHCARE ARCHITECTURE STRATEGY */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-teal-600 font-bold tracking-widest uppercase text-sm font-mono">// Our_Architecture_Standard</h3>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Interoperable, Secure, & Patient-Centric
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              We solve the biggest problem in healthcare IT: Interoperability. We architect systems that seamlessly and securely share data between mobile apps, wearables, and massive hospital EMRs.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "HL7 & FHIR compliant data exchange pipelines.",
                "End-to-End ePHI Encryption (AES-256 & TLS 1.3).",
                "High-performance WebRTC for zero-latency telemedicine.",
                "Role-Based Access Control (RBAC) for clinical staff."
              ].map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center text-slate-800 font-semibold text-lg"
                >
                  <CheckCircle2 className="text-teal-500 w-6 h-6 mr-3 shrink-0" /> {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#021818] p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden border border-teal-900/50"
          >
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
             <h3 className="text-2xl font-bold text-white mb-8 relative z-10 flex items-center gap-3">
               <Network className="text-teal-400" /> HL7 / FHIR Integration
             </h3>
             <div className="space-y-4 relative z-10">
               {/* Mobile Patient App */}
               <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700"
               >
                 <HeartPulse className="text-rose-400 animate-pulse" />
                 <div><span className="font-bold block text-white">Patient Mobile App</span><span className="text-sm text-slate-400 font-mono text-[10px]">Vitals: BP 120/80</span></div>
               </motion.div>
               
               <div className="flex justify-center">
                  <motion.div 
                    animate={{ y: [0, 5, 0], opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <ArrowRight className="text-teal-500 rotate-90" />
                  </motion.div>
               </div>
               
               {/* Interoperability Layer */}
               <motion.div 
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                className="bg-teal-900/30 border border-teal-500/50 p-5 rounded-2xl shadow-[0_0_30px_rgba(20,184,166,0.15)] relative"
               >
                 <div className="absolute -left-2 top-1/2 w-4 h-4 bg-teal-500 rounded-full animate-ping"></div>
                 <div className="flex items-center justify-between mb-2">
                   <div className="flex items-center gap-3">
                     <Server className="text-teal-400 w-5 h-5" />
                     <span className="font-bold text-teal-100 text-sm">FHIR API Gateway</span>
                   </div>
                   <span className="text-[10px] font-mono bg-teal-950 text-teal-300 px-2 py-1 rounded">ENCRYPTED_TLS</span>
                 </div>
               </motion.div>
               
               <div className="flex justify-center">
                  <motion.div 
                    animate={{ y: [0, 5, 0], opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                  >
                    <ArrowRight className="text-teal-500 rotate-90" />
                  </motion.div>
               </div>
               
               {/* Hospital EMR */}
               <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex items-center gap-4 bg-blue-900/20 p-4 rounded-xl border border-blue-500/30"
               >
                 <FilePlus className="text-blue-400" />
                 <div><span className="font-bold block text-blue-50 text-sm">Hospital EMR (Epic/Cerner)</span><span className="text-[10px] text-blue-200/70 font-mono">Status: Chart_Updated_v1.2</span></div>
               </motion.div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 4. HEALTHCARE PLATFORMS WE BUILD */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 uppercase tracking-tighter">HealthTech Ecosystems</h2>
            <p className="text-lg text-slate-600">From patient-facing mobile applications to complex clinical backend portals.</p>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { title: "Telemedicine & Virtual Care", icon: <Video size={28} />, desc: "Secure video consultation platforms with integrated scheduling and e-prescriptions." },
              { title: "EMR / EHR Systems", icon: <FilePlus size={28} />, desc: "Custom Electronic Medical Records designed for specific clinic workflows to reduce burnout." },
              { title: "IoMT & Wearables", icon: <Activity size={28} />, desc: "Connecting Apple Health and medical devices to clinical dashboards." },
              { title: "Digital Pharmacy (E-Rx)", icon: <Pill size={28} />, desc: "Secure prescription routing, inventory management, and patient delivery platforms." }
            ].map((prod, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-teal-500 transition-all duration-300 group"
              >
                <div className="text-teal-600 mb-6 bg-teal-50 w-14 h-14 flex items-center justify-center rounded-2xl group-hover:bg-teal-600 group-hover:text-white transition-colors">{prod.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{prod.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">{prod.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. SECURITY & COMPLIANCE ARCHITECTURE (Dark Mode) */}
      <section className="py-24 px-6 bg-[#0A192F] text-white relative overflow-hidden border-y border-slate-800">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-bold tracking-wide uppercase font-mono">
              <ShieldCheck size={16} /> Legal_&_Compliance
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Absolute <span className="text-teal-500">HIPAA Compliance</span>
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed font-medium">
              We do not bolt security on at the end of a project. Our architecture is designed from day one to protect ePHI and pass rigorous federal compliance audits.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Business Associate Agreements (BAA) execution.",
                "Automated session timeouts & biometric authentication.",
                "Dedicated, isolated databases for ePHI segregation.",
                "Full immutable audit logging of all clinical access."
              ].map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center text-slate-300 font-medium"
                >
                  <CheckCircle2 className="text-teal-500 w-5 h-5 mr-3 shrink-0" /> {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full relative"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-teal-600/20 to-cyan-600/20 blur-3xl rounded-full"></div>
             <div className="bg-slate-900 border border-slate-700 p-8 rounded-3xl relative z-10 shadow-2xl backdrop-blur-sm">
               <motion.div 
                animate={{ rotate: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="w-16 h-16 bg-slate-950 rounded-full flex items-center justify-center border border-teal-500/50 mb-6 shadow-[0_0_15px_rgba(20,184,166,0.3)]"
               >
                 <Lock className="text-teal-400" />
               </motion.div>
               <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-700 pb-4 uppercase tracking-tighter">Compliance Frameworks</h3>
               <ul className="space-y-4">
                 <li className="flex justify-between items-center"><span className="text-slate-300 font-medium">USA Healthcare</span><span className="px-3 py-1 bg-slate-950 rounded-md text-[10px] font-bold text-teal-400 border border-slate-700 font-mono">HIPAA / HITECH</span></li>
                 <li className="flex justify-between items-center"><span className="text-slate-300 font-medium">European Privacy</span><span className="px-3 py-1 bg-slate-950 rounded-md text-[10px] font-bold text-teal-400 border border-slate-700 font-mono">GDPR_CORE</span></li>
                 <li className="flex justify-between items-center"><span className="text-slate-300 font-medium">Data Interoperability</span><span className="px-3 py-1 bg-slate-950 rounded-md text-[10px] font-bold text-teal-400 border border-slate-700 font-mono">HL7_FHIR_v4</span></li>
                 <li className="flex justify-between items-center"><span className="text-slate-300 font-medium">Cloud Security</span><span className="px-3 py-1 bg-slate-950 rounded-md text-[10px] font-bold text-teal-400 border border-slate-700 font-mono">SOC2_TYPE_II</span></li>
               </ul>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 6. TECHNOLOGY STACK */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-[3rem] p-8 md:p-16 shadow-xl shadow-slate-100 flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">The Clinical Tech Stack</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              We leverage cloud providers that sign BAAs and use modern, highly scalable frameworks to ensure zero latency during critical patient care moments.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["Next.js", "React Native", "Node.js", "Python (AI/ML)", "AWS Healthcare", "GCP Health API", "PostgreSQL", "WebRTC"].map(tech => (
                <span key={tech} className="px-4 py-2 bg-slate-100 text-slate-800 font-bold rounded-lg text-[10px] border border-slate-200 hover:border-teal-400 transition-colors cursor-default font-mono uppercase tracking-widest">
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
             <motion.div variants={fadeInUp} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-teal-700 font-bold mb-2 text-sm">Cloud Providers</h4><p className="text-slate-600 text-xs font-medium">AWS Health, Google Cloud</p></motion.div>
             <motion.div variants={fadeInUp} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-teal-700 font-bold mb-2 text-sm">Patient Apps</h4><p className="text-slate-600 text-xs font-medium">React Native, Flutter</p></motion.div>
             <motion.div variants={fadeInUp} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-teal-700 font-bold mb-2 text-sm">Video & Telehealth</h4><p className="text-slate-600 text-xs font-medium">WebRTC, Twilio Video</p></motion.div>
             <motion.div variants={fadeInUp} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-teal-700 font-bold mb-2 text-sm">Clinical AI / ML</h4><p className="text-slate-600 text-xs font-medium">Python, TensorFlow</p></motion.div>
          </motion.div>
        </div>
      </section>

      {/* 7. AI SOFTWARE FACTORY IN HEALTHCARE */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6"
          >
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">Accelerated by the AI Factory</h2>
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              Our AI agents automate the generation of HIPAA-compliant boilerplate code and infrastructure, launching your medical platform 40% faster without ever compromising security.
            </p>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
          >
            {[
              "40% Faster Time-to-Market",
              "Automated Security Code Scanning",
              "HIPAA Infrastructure generation",
              "Zero Vendor Lock-in"
            ].map((reason, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-white border border-teal-200 shadow-sm p-4 rounded-xl flex items-center font-semibold text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-teal-500 mr-3 shrink-0" /> {reason}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 8. DEVELOPMENT PROCESS */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 uppercase tracking-tighter">Secure Delivery Protocol</h2>
          <p className="text-lg text-slate-600 font-medium italic">// Rigorous_Clinic_Lifecycle</p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-5 gap-4"
        >
          {[
            { step: "01", title: "Clinical Discovery", desc: "Mapping physician workflows and patient journeys." },
            { step: "02", title: "Compliance Arch.", desc: "Designing isolated DBs and signing vendor BAAs." },
            { step: "03", title: "Development", desc: "Agile sprints with automated code vulnerability scanning." },
            { step: "04", title: "Penetration Testing", desc: "Third-party ethical hacking to verify ePHI security." },
            { step: "05", title: "Deployment", desc: "Live launch with active threat monitoring and SOC alerts." }
          ].map((process, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeInUp}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-teal-400 transition-colors relative overflow-hidden group"
            >
               <div className="text-xs font-black text-teal-600 mb-3 uppercase tracking-widest font-mono">Phase_{process.step}</div>
               <h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{process.title}</h4>
               <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{process.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 9. CASE STUDIES */}
      <section className="py-24 px-6 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end gap-6"
          >
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white uppercase tracking-tighter">Success Stories</h2>
              <p className="text-slate-400 text-lg font-medium">See our engineered platforms for ambitious healthcare companies.</p>
            </div>
            <Link href="/case-studies" className="text-teal-400 font-bold hover:text-teal-300 flex items-center gap-2 text-sm uppercase tracking-widest">
              View Portfolio <ArrowRight size={18} />
            </Link>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "National Telemedicine Platform", desc: "Built a mobile app featuring WebRTC video consults and automated e-prescriptions, scaling to 10,000+ daily patient visits securely.", tags: ["React Native", "WebRTC", "HIPAA"] },
              { title: "AI Medical Diagnostics (SaaS)", desc: "Engineered a secure pipeline for radiology scans via Python ML, integrating results directly into hospital EMRs via FHIR APIs.", tags: ["Python AI", "FHIR API", "AWS"] },
            ].map((study, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-slate-800 rounded-3xl p-8 md:p-10 border border-slate-700 hover:border-teal-500/50 transition-all group cursor-pointer"
              >
                <div className="flex gap-2 mb-6">
                  {study.tags.map(tag => <span key={tag} className="text-[10px] font-black font-mono text-teal-300 bg-teal-900/30 px-3 py-1 rounded-full border border-teal-500/30">{tag}</span>)}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-teal-400 transition-colors leading-tight">{study.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-8 text-sm font-medium">{study.desc}</p>
                <span className="text-teal-400 font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform text-xs uppercase tracking-widest">
                  Read Technical Study <ArrowRight size={16} />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA SECTION */}
      <section className="py-32 px-6 text-center max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tighter uppercase leading-none">Transform Patient <br /><span className="text-teal-600 italic">Care.</span></h2>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium mt-6">
            Partner with an engineering team that understands the uncompromising security, interoperability, and speed required for modern medicine.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-10">
            <Link href="/contact" className="px-10 py-5 bg-teal-600 text-white font-black rounded-xl shadow-xl shadow-teal-600/20 hover:bg-teal-700 hover:scale-105 transition-all text-xs uppercase tracking-[0.2em]">
              Discuss Your Project
            </Link>
            <Link href="/contact" className="px-10 py-5 bg-white border-2 border-slate-200 text-slate-800 font-black rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-xs uppercase tracking-[0.2em]">
              Speak with a Specialist
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}