import React from "react";
import Link from "next/link";
import { 
  HeartPulse, ShieldAlert, Database, Stethoscope, 
  Activity, ArrowRight, CheckCircle2, Lock, 
  Video, Pill, Microscope, FilePlus, 
  ArrowUpRight, Server, Network, ShieldCheck
} from "lucide-react";

export default function HealthcareIndustryPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-teal-200 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8 overflow-hidden">
        {/* Clinical Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-50 blur-[120px] rounded-full -z-10"></div>
        <div className="absolute top-20 right-1/4 w-[400px] h-[300px] bg-cyan-50/50 blur-[100px] rounded-full -z-10"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-sm font-bold tracking-wide uppercase mb-4">
          <HeartPulse size={16} /> HealthTech Engineering
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight">
          Architecting Compliant <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-500">Healthcare Platforms</span>
        </h1>
        
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          We engineer secure, interoperable medical software. From telemedicine apps to complex EMR/EHR integrations, we build the digital infrastructure that improves patient outcomes while guaranteeing strict HIPAA compliance.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-8 py-4 bg-teal-600 text-white font-bold rounded-xl shadow-lg shadow-teal-600/20 hover:bg-teal-700 hover:scale-105 transition-all text-lg">
            Build Your HealthTech Platform
          </Link>
          <Link href="/contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg flex items-center justify-center gap-2">
            Consult a Compliance Architect <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* 2. HEALTHCARE CHALLENGES */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">The Risks of Medical Software</h2>
            <p className="text-lg text-slate-600">Healthcare technology cannot afford to fail. Buggy software or unencrypted data doesn't just damage your brand—it puts patient lives and your legal standing at risk.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "HIPAA Violations & ePHI Leaks", desc: "Exposing Protected Health Information (ePHI) results in devastating millions in federal fines and immediate loss of medical licenses.", icon: <ShieldAlert className="text-red-500 w-8 h-8" /> },
              { title: "Fragmented Data (Silos)", desc: "Legacy hospital systems don't talk to each other. When doctors can't access a unified patient history, care quality drops drastically.", icon: <Database className="text-red-500 w-8 h-8" /> },
              { title: "Poor Provider UX", desc: "Clunky, outdated EMR interfaces cause extreme physician burnout, slowing down clinics and reducing the number of patients seen daily.", icon: <Activity className="text-red-500 w-8 h-8" /> }
            ].map((challenge, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-red-200 transition-colors">
                <div className="mb-6 bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center">{challenge.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{challenge.title}</h3>
                <p className="text-slate-600 leading-relaxed">{challenge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HEALTHCARE ARCHITECTURE STRATEGY */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-teal-600 font-bold tracking-widest uppercase text-sm">Our Architecture Standard</h3>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Interoperable, Secure, & Patient-Centric
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We solve the biggest problem in healthcare IT: Interoperability. We architect systems that seamlessly and securely share data between mobile apps, wearables, and massive hospital EMRs (like Epic or Cerner).
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "HL7 & FHIR compliant data exchange pipelines.",
                "End-to-End ePHI Encryption (AES-256 & TLS 1.3).",
                "High-performance WebRTC for zero-latency telemedicine.",
                "Role-Based Access Control (RBAC) for clinical staff."
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-800 font-semibold text-lg">
                  <CheckCircle2 className="text-teal-500 w-6 h-6 mr-3 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-[#021818] p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden border border-teal-900/50">
             {/* Abstract FHIR Interoperability CSS Graphic */}
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
             <h3 className="text-2xl font-bold text-white mb-8 relative z-10 flex items-center gap-3">
               <Network className="text-teal-400" /> HL7 / FHIR Integration
             </h3>
             <div className="space-y-4 relative z-10">
               {/* Mobile Patient App */}
               <div className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                 <HeartPulse className="text-rose-400" />
                 <div><span className="font-bold block text-white">Patient Mobile App</span><span className="text-sm text-slate-400">Vitals Logged: BP 120/80</span></div>
               </div>
               
               <div className="flex justify-center"><ArrowRight className="text-teal-500 rotate-90" /></div>
               
               {/* Interoperability Layer */}
               <div className="bg-teal-900/30 border border-teal-500/50 p-5 rounded-2xl shadow-[0_0_30px_rgba(20,184,166,0.15)] relative">
                 <div className="absolute -left-2 top-1/2 w-4 h-4 bg-teal-500 rounded-full animate-ping"></div>
                 <div className="flex items-center justify-between mb-2">
                   <div className="flex items-center gap-3">
                     <Server className="text-teal-400 w-5 h-5" />
                     <span className="font-bold text-teal-100">FHIR API Gateway</span>
                   </div>
                   <span className="text-xs font-mono bg-teal-950 text-teal-300 px-2 py-1 rounded">Encrypted TLS</span>
                 </div>
               </div>
               
               <div className="flex justify-center"><ArrowRight className="text-teal-500 rotate-90" /></div>
               
               {/* Hospital EMR */}
               <div className="flex items-center gap-4 bg-blue-900/20 p-4 rounded-xl border border-blue-500/30">
                 <FilePlus className="text-blue-400" />
                 <div><span className="font-bold block text-blue-50">Hospital EMR (Epic/Cerner)</span><span className="text-sm text-blue-200/70">Patient chart updated instantly.</span></div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. HEALTHCARE PLATFORMS WE BUILD */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">HealthTech Systems We Build</h2>
            <p className="text-lg text-slate-600">From patient-facing mobile applications to complex clinical backend portals, we cover the full spectrum of modern medicine.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Telemedicine & Virtual Care", icon: <Video size={28} />, desc: "Secure, high-definition video consultation platforms with integrated scheduling and e-prescriptions." },
              { title: "EMR / EHR Systems", icon: <FilePlus size={28} />, desc: "Custom Electronic Medical Records designed for specific clinic workflows to reduce physician burnout." },
              { title: "IoMT & Wearable Integrations", icon: <Activity size={28} />, desc: "Connecting Apple Health, Fitbit, and specialized medical devices to clinical dashboards." },
              { title: "Digital Pharmacy (E-Rx)", icon: <Pill size={28} />, desc: "Secure prescription routing, inventory management, and direct-to-patient delivery platforms." }
            ].map((prod, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-teal-500 transition-colors group">
                <div className="text-teal-600 mb-6 bg-teal-50 w-14 h-14 flex items-center justify-center rounded-2xl group-hover:bg-teal-600 group-hover:text-white transition-colors">{prod.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{prod.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{prod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SECURITY & COMPLIANCE ARCHITECTURE (Dark Mode) */}
      <section className="py-24 px-6 bg-[#0A192F] text-white relative overflow-hidden border-y border-slate-800">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-bold tracking-wide uppercase">
              <ShieldCheck size={16} /> Legal & Compliance
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Absolute <span className="text-teal-500">HIPAA Compliance</span>
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              We do not bolt security on at the end of a project. Our architecture is designed from day one to protect Electronic Protected Health Information (ePHI) and pass rigorous federal compliance audits.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Business Associate Agreements (BAA) execution.",
                "Automated session timeouts & biometric authentication.",
                "Dedicated, isolated databases for ePHI segregation.",
                "Full immutable audit logging of all clinical access."
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-300 font-medium">
                  <CheckCircle2 className="text-teal-500 w-5 h-5 mr-3 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 w-full relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-teal-600/20 to-cyan-600/20 blur-3xl rounded-full"></div>
             <div className="bg-slate-900 border border-slate-700 p-8 rounded-3xl relative z-10 shadow-2xl backdrop-blur-sm">
               <div className="w-16 h-16 bg-slate-950 rounded-full flex items-center justify-center border border-teal-500/50 mb-6 shadow-[0_0_15px_rgba(20,184,166,0.3)]">
                 <Lock className="text-teal-400" />
               </div>
               <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-700 pb-4">Compliance Frameworks Supported</h3>
               <ul className="space-y-4">
                 <li className="flex justify-between items-center"><span className="text-slate-300">USA Healthcare</span><span className="px-3 py-1 bg-slate-950 rounded-md text-xs font-bold text-teal-400 border border-slate-700">HIPAA / HITECH</span></li>
                 <li className="flex justify-between items-center"><span className="text-slate-300">European Privacy</span><span className="px-3 py-1 bg-slate-950 rounded-md text-xs font-bold text-teal-400 border border-slate-700">GDPR Compliant</span></li>
                 <li className="flex justify-between items-center"><span className="text-slate-300">Data Interoperability</span><span className="px-3 py-1 bg-slate-950 rounded-md text-xs font-bold text-teal-400 border border-slate-700">HL7 / FHIR / DICOM</span></li>
                 <li className="flex justify-between items-center"><span className="text-slate-300">Cloud Security</span><span className="px-3 py-1 bg-slate-950 rounded-md text-xs font-bold text-teal-400 border border-slate-700">SOC 2 Type II Ready</span></li>
               </ul>
             </div>
          </div>
        </div>
      </section>

      {/* 6. TECHNOLOGY STACK */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-[3rem] p-8 md:p-16 shadow-xl shadow-slate-100 flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">The Clinical Tech Stack</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We leverage cloud providers that sign BAAs (Business Associate Agreements) and use modern, highly scalable frameworks to ensure zero latency during critical patient care moments.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["Next.js", "React Native", "Node.js", "Python (AI/ML)", "AWS Healthcare", "GCP Cloud Healthcare API", "PostgreSQL", "WebRTC"].map(tech => (
                <span key={tech} className="px-4 py-2 bg-slate-100 text-slate-800 font-bold rounded-lg text-sm border border-slate-200 hover:border-teal-400 transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full grid grid-cols-2 gap-4">
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-teal-700 font-bold mb-2">Cloud Providers</h4><p className="text-slate-600 text-sm">AWS Health, Google Cloud</p></div>
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-teal-700 font-bold mb-2">Patient Apps</h4><p className="text-slate-600 text-sm">React Native, Flutter</p></div>
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-teal-700 font-bold mb-2">Video & Telehealth</h4><p className="text-slate-600 text-sm">WebRTC, Twilio Video</p></div>
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-teal-700 font-bold mb-2">Clinical AI / ML</h4><p className="text-slate-600 text-sm">Python, TensorFlow</p></div>
          </div>
        </div>
      </section>

      {/* 7. AI SOFTWARE FACTORY IN HEALTHCARE */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">Accelerated by the AI Factory</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Healthcare software development is notoriously slow due to regulatory hurdles. Uptimise IT utilizes an AI-native engineering delivery model. 
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our AI agents automate the generation of HIPAA-compliant boilerplate code and infrastructure, allowing our senior human architects to launch your medical platform 40% faster without ever compromising security or quality.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {[
              "40% Faster Time-to-Market",
              "Automated Security Code Scanning",
              "HIPAA-Compliant Infrastructure generation",
              "Zero Vendor Lock-in"
            ].map((reason, i) => (
              <div key={i} className="bg-white border border-teal-200 shadow-sm p-4 rounded-xl flex items-center font-semibold text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-teal-500 mr-3 shrink-0" /> {reason}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. DEVELOPMENT PROCESS */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">Secure Delivery Protocol</h2>
          <p className="text-lg text-slate-600">A rigorous, medically-aligned software development lifecycle designed to protect patients and clinics.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { step: "01", title: "Clinical Discovery", desc: "Mapping physician workflows and patient journeys." },
            { step: "02", title: "Compliance Arch.", desc: "Designing isolated DBs and signing vendor BAAs." },
            { step: "03", title: "Development", desc: "Agile sprints with automated code vulnerability scanning." },
            { step: "04", title: "Penetration Testing", desc: "Third-party ethical hacking to verify ePHI security." },
            { step: "05", title: "Deployment", desc: "Live launch with active threat monitoring and SOC alerts." }
          ].map((process, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-teal-400 transition-colors relative overflow-hidden group">
               <div className="text-sm font-black text-teal-600 mb-3 uppercase tracking-wider">Phase {process.step}</div>
               <h4 className="text-lg font-bold text-slate-900 mb-2">{process.title}</h4>
               <p className="text-sm text-slate-600 leading-relaxed">{process.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. CASE STUDIES */}
      <section className="py-24 px-6 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">HealthTech Success Stories</h2>
              <p className="text-slate-400 text-lg">See how we have engineered compliant platforms for ambitious healthcare companies.</p>
            </div>
            <Link href="/case-studies" className="text-teal-400 font-bold hover:text-teal-300 flex items-center gap-2">
              View Healthcare Portfolio <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "National Telemedicine Platform", desc: "Built a React Native mobile app featuring WebRTC video consults and automated e-prescriptions, scaling to 10,000+ daily patient visits securely.", tags: ["React Native", "WebRTC", "HIPAA"] },
              { title: "AI Medical Diagnostics (SaaS)", desc: "Engineered a secure pipeline for analyzing radiological scans via Python ML models, integrating results directly back into hospital Epic EMRs via FHIR APIs.", tags: ["Python AI", "FHIR API", "AWS"] },
            ].map((study, idx) => (
              <div key={idx} className="bg-slate-800 rounded-3xl p-8 md:p-10 border border-slate-700 hover:border-teal-500/50 transition-all group cursor-pointer">
                <div className="flex gap-2 mb-6">
                  {study.tags.map(tag => <span key={tag} className="text-xs font-bold text-teal-300 bg-teal-900/30 px-3 py-1 rounded-full border border-teal-500/30">{tag}</span>)}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-teal-400 transition-colors">{study.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-8">{study.desc}</p>
                <span className="text-teal-400 font-semibold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  Read Technical Case Study <ArrowRight size={16} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA SECTION */}
      <section className="py-32 px-6 text-center max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">Transform Patient Care.</h2>
        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Partner with an engineering team that understands the uncompromising security, interoperability, and speed required to win in modern healthcare.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-10 py-5 bg-teal-600 text-white font-bold rounded-xl shadow-xl shadow-teal-600/20 hover:bg-teal-700 hover:scale-105 transition-all text-lg">
            Discuss Your HealthTech Project
          </Link>
          <Link href="/contact" className="px-10 py-5 bg-white border-2 border-slate-200 text-slate-800 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg">
            Speak with a Compliance Expert
          </Link>
        </div>
      </section>

    </div>
  );
}