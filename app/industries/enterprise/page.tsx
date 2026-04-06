import React from "react";
import Link from "next/link";
import { 
  Building, ServerCrash, ShieldAlert, Network, 
  ArrowRight, CheckCircle2, Database, Workflow, 
  Lock, ArrowUpRight, Cpu, Layers, BarChart4,
  RefreshCcw, ShieldCheck, Zap, Globe, Users
} from "lucide-react";

export default function EnterpriseIndustryPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8 overflow-hidden">
        {/* Corporate Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-blue-100/60 blur-[120px] rounded-full -z-10"></div>
        <div className="absolute top-20 right-1/4 w-[500px] h-[300px] bg-slate-200/50 blur-[100px] rounded-full -z-10"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-sm font-bold tracking-wide uppercase mb-4">
          <Building size={16} /> Enterprise Software Systems
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight">
          Modernizing the <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">Corporate Infrastructure</span>
        </h1>
        
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          We engineer scalable, secure, and interoperable software for global enterprises. From legacy system modernization to custom ERPs and intelligent data lakes, we build the digital foundation for enterprise agility.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-8 py-4 bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-700/20 hover:bg-blue-800 hover:scale-105 transition-all text-lg">
            Transform Your Enterprise
          </Link>
          <Link href="/contact" className="px-8 py-4 bg-white border border-slate-300 text-slate-700 font-bold rounded-xl hover:border-slate-400 hover:bg-slate-50 transition-all text-lg flex items-center justify-center gap-2">
            Consult a Solutions Architect <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* 2. ENTERPRISE CHALLENGES */}
      <section className="py-24 px-6 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">The Tax of Technical Debt</h2>
            <p className="text-lg text-slate-600">Enterprises are being outpaced by agile startups because their operations are tethered to rigid, outdated technology that is terrifying to update.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "The Monolith Trap", desc: "A massive, tightly-coupled codebase where changing one minor feature risks taking down the entire global operation.", icon: <ServerCrash className="text-red-500 w-8 h-8" /> },
              { title: "Siloed Corporate Data", desc: "Your CRM, ERP, and HR systems don't communicate. Leadership is making decisions based on fragmented, outdated CSV exports.", icon: <Database className="text-red-500 w-8 h-8" /> },
              { title: "Security & Compliance Risk", desc: "Running mission-critical operations on deprecated software frameworks exposes the enterprise to devastating cyberattacks.", icon: <ShieldAlert className="text-red-500 w-8 h-8" /> }
            ].map((challenge, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:border-red-200 transition-colors">
                <div className="mb-6 bg-red-100 w-16 h-16 rounded-2xl flex items-center justify-center">{challenge.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{challenge.title}</h3>
                <p className="text-slate-600 leading-relaxed">{challenge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ENTERPRISE ARCHITECTURE STRATEGY */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-blue-700 font-bold tracking-widest uppercase text-sm">Our Architecture Standard</h3>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Microservices & Data Orchestration
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We deconstruct massive legacy monoliths using the Strangler Fig pattern—replacing outdated modules with agile microservices one by one, ensuring zero operational downtime for your business.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Zero-downtime legacy system modernization.",
                "API Gateways to unify fragmented corporate data streams.",
                "Containerized microservices (Docker/K8s) for isolated scaling.",
                "Event-driven message brokers (Kafka) for real-time sync."
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-800 font-semibold text-lg">
                  <CheckCircle2 className="text-blue-600 w-6 h-6 mr-3 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-[#0A1128] p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden border border-slate-800">
             {/* Abstract Monolith to Microservices CSS Graphic */}
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
             <h3 className="text-2xl font-bold text-white mb-8 relative z-10 flex items-center gap-3">
               <Workflow className="text-blue-400" /> System Orchestration
             </h3>
             <div className="space-y-4 relative z-10">
               {/* Legacy Monolith */}
               <div className="flex items-center justify-between bg-slate-800/50 border border-red-500/30 p-4 rounded-xl opacity-60">
                 <div className="flex items-center gap-3 text-slate-300 font-bold"><Database size={18} className="text-red-400" /> Legacy Monolith</div>
                 <div className="text-xs text-red-400 font-mono">Deprecated</div>
               </div>
               
               <div className="flex justify-center py-2">
                 <RefreshCcw className="text-slate-500 animate-spin-slow" />
               </div>

               {/* API Gateway */}
               <div className="bg-blue-900/40 border border-blue-500/50 p-3 rounded-xl text-center shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                 <p className="text-white font-bold text-sm tracking-widest uppercase">Enterprise API Gateway</p>
               </div>

               <div className="flex justify-between w-3/4 mx-auto px-4 py-2">
                 <ArrowRight className="text-blue-400 rotate-90" />
                 <ArrowRight className="text-blue-400 rotate-90" />
                 <ArrowRight className="text-blue-400 rotate-90" />
               </div>

               {/* Microservices */}
               <div className="grid grid-cols-3 gap-3 w-full">
                 <div className="bg-slate-800 border border-slate-600 p-4 rounded-xl text-center hover:border-blue-400 transition-colors">
                   <Users className="w-5 h-5 text-emerald-400 mx-auto mb-2" />
                   <p className="text-white font-bold text-[10px] uppercase">CRM Service</p>
                 </div>
                 <div className="bg-slate-800 border border-slate-600 p-4 rounded-xl text-center hover:border-blue-400 transition-colors">
                   <Layers className="w-5 h-5 text-amber-400 mx-auto mb-2" />
                   <p className="text-white font-bold text-[10px] uppercase">ERP Service</p>
                 </div>
                 <div className="bg-slate-800 border border-slate-600 p-4 rounded-xl text-center hover:border-blue-400 transition-colors">
                   <BarChart4 className="w-5 h-5 text-indigo-400 mx-auto mb-2" />
                   <p className="text-white font-bold text-[10px] uppercase">BI Analytics</p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. PLATFORMS WE BUILD */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">Enterprise Systems We Build</h2>
            <p className="text-lg text-slate-600">We replace disparate, clunky software with unified digital ecosystems designed to accelerate massive organizations.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Custom ERP Systems", icon: <Layers size={28} />, desc: "Tailored Resource Planning software that maps perfectly to your unique operational and manufacturing workflows." },
              { title: "Supply Chain & Logistics", icon: <Globe size={28} />, desc: "Real-time tracking, vendor management, and predictive inventory portals for global distribution networks." },
              { title: "Corporate Intranets", icon: <Users size={28} />, desc: "Secure, high-engagement employee hubs for HR, document management, and internal communications." },
              { title: "Data Lakes & BI Dashboards", icon: <BarChart4 size={28} />, desc: "Aggregating millions of data points from across the enterprise into visual, real-time leadership dashboards." }
            ].map((prod, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-blue-600 transition-colors group">
                <div className="text-blue-700 mb-6 bg-blue-50 w-14 h-14 flex items-center justify-center rounded-2xl group-hover:bg-blue-700 group-hover:text-white transition-colors">{prod.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{prod.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{prod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TECHNOLOGY STACK */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-[3rem] p-8 md:p-16 shadow-xl shadow-slate-100 flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">The Enterprise Stack</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We leverage cloud-native technologies and robust backend languages that are fully supported, heavily audited, and guaranteed to scale securely for decades.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["Java / Spring Boot", ".NET Core", "Node.js", "Python", "Kubernetes", "Apache Kafka", "Oracle / SAP APIs", "AWS Enterprise"].map(tech => (
                <span key={tech} className="px-4 py-2 bg-slate-100 text-slate-800 font-bold rounded-lg text-sm border border-slate-200 hover:border-blue-600 transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full grid grid-cols-2 gap-4">
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-blue-800 font-bold mb-2">Backend Architecture</h4><p className="text-slate-600 text-sm">Java, .NET, Node.js, Go</p></div>
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-blue-800 font-bold mb-2">Cloud & Orchestration</h4><p className="text-slate-600 text-sm">AWS, Azure, Kubernetes</p></div>
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-blue-800 font-bold mb-2">Data & Integration</h4><p className="text-slate-600 text-sm">Kafka, MuleSoft, PostgreSQL</p></div>
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-blue-800 font-bold mb-2">Frontend Interfaces</h4><p className="text-slate-600 text-sm">React, Angular, Next.js</p></div>
          </div>
        </div>
      </section>

      {/* 6. AI SOFTWARE FACTORY (Legacy Refactoring) */}
      <section className="py-24 px-6 bg-[#0A1128] text-white relative overflow-hidden border-y border-slate-800">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-bold tracking-wide uppercase">
              <Cpu size={16} /> Intelligent Modernization
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              AI-Assisted <span className="text-blue-500">Legacy Refactoring</span>
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              Updating millions of lines of 15-year-old code manually takes years. Uptimise IT utilizes AI agents to analyze legacy codebases, map complex dependencies, and automatically refactor outdated logic into modern microservices.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Automated codebase audits to identify technical debt.",
                "AI generation of comprehensive unit and regression tests.",
                "Drastically reduced human error during data migrations."
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-300 font-medium">
                  <CheckCircle2 className="text-blue-500 w-5 h-5 mr-3 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 w-full bg-slate-900 border border-slate-700 p-8 rounded-[2rem] shadow-[0_0_40px_rgba(59,130,246,0.15)] relative">
             <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-6">
               <span className="text-white font-bold flex items-center gap-2"><Lock className="text-blue-400" /> Automated Code Translation</span>
             </div>
             <div className="space-y-4 font-mono text-sm">
               {/* Legacy Code */}
               <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 opacity-60">
                 <div className="text-slate-500 mb-2">// Legacy PHP (2012)</div>
                 <div className="text-red-300">mysql_query("SELECT * FROM users WHERE...");</div>
               </div>
               
               <div className="flex justify-center"><ArrowRight className="text-blue-400 rotate-90" /></div>
               
               {/* Modern Code */}
               <div className="bg-blue-950/30 p-4 rounded-xl border border-blue-500/50 shadow-inner">
                 <div className="text-blue-300 mb-2">// Refactored Node.js Microservice</div>
                 <div className="text-emerald-300">await prisma.users.findMany({"{"} where: ... {"}"})</div>
               </div>
               <div className="mt-4 flex items-center gap-2 text-xs text-emerald-400 bg-emerald-900/20 p-2 rounded-lg border border-emerald-500/30">
                 <ShieldCheck size={14} /> AI Verification: SQL Injection vulnerability removed.
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 7. DEVELOPMENT PROCESS */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">Enterprise Transformation Protocol</h2>
          <p className="text-lg text-slate-600">We do not believe in reckless "rip-and-replace." We execute a phased, risk-mitigated rollout.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { step: "01", title: "Discovery Audit", desc: "Deep technical mapping of existing legacy systems, databases, and third-party APIs." },
            { step: "02", title: "Architecture", desc: "Designing the new microservices blueprint and planning the Zero-Downtime cutover." },
            { step: "03", title: "Agile Sprints", desc: "Iterative development using AI-assisted refactoring and automated QA pipelines." },
            { step: "04", title: "Parallel Run", desc: "Running the legacy and new systems simultaneously to verify absolute data integrity." },
            { step: "05", title: "Scale & Support", desc: "Phased rollout to global teams with 24/7 SLA-backed enterprise support." }
          ].map((process, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:border-blue-600 transition-colors relative overflow-hidden group">
               <div className="text-sm font-black text-blue-700 mb-3 uppercase tracking-wider">Phase {process.step}</div>
               <h4 className="text-lg font-bold text-slate-900 mb-2">{process.title}</h4>
               <p className="text-sm text-slate-600 leading-relaxed">{process.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. BUSINESS BENEFITS */}
      <section className="py-10 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="w-16 h-16 mx-auto bg-blue-50 text-blue-700 rounded-full flex items-center justify-center mb-6"><Zap size={32} /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Enterprise Agility</h3>
            <p className="text-slate-600">Break free from legacy vendor lock-in. Microservices allow your organization to deploy new features in days rather than months.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="w-16 h-16 mx-auto bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-6"><ShieldCheck size={32} /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Bank-Grade Security</h3>
            <p className="text-slate-600">Modern frameworks naturally patch critical vulnerabilities. We implement Zero-Trust networking and identity access management (IAM).</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="w-16 h-16 mx-auto bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-6"><Network size={32} /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Data Democratization</h3>
            <p className="text-slate-600">By unifying data through API gateways, leadership finally gains real-time, 360-degree visibility into global corporate operations.</p>
          </div>
        </div>
      </section>

      {/* 9. CASE STUDIES */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Enterprise Transformation</h2>
            <p className="text-slate-600 text-lg">See how we have successfully modernized mission-critical operations for massive organizations.</p>
          </div>
          <Link href="/case-studies" className="text-blue-700 font-bold hover:text-blue-800 flex items-center gap-2">
            View Enterprise Portfolio <ArrowRight size={18} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Global Supply Chain Modernization", desc: "Deconstructed a 12-year-old monolithic logistics application into agile Node.js microservices, cutting server infrastructure costs by $1.2M annually.", tags: ["Node.js", "Docker", "Kubernetes"] },
            { title: "Financial Institution Intranet", desc: "Built a secure, RBAC-protected internal portal replacing 14 fragmented legacy tools, heavily integrated with their core SAP database.", tags: ["React", "Java", "SAP API"] },
          ].map((study, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all group cursor-pointer">
              <div className="flex gap-2 mb-6">
                {study.tags.map(tag => <span key={tag} className="text-xs font-bold text-blue-800 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">{tag}</span>)}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-blue-700 transition-colors">{study.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-8">{study.desc}</p>
              <span className="text-blue-700 font-semibold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                Read Technical Case Study <ArrowRight size={16} />
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 10. CTA SECTION */}
      <section className=" px-6 text-center max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">Future-Proof Your Operations.</h2>
        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Technical debt is the greatest threat to enterprise longevity. Partner with an engineering team capable of executing secure, zero-downtime digital transformations.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-10 py-5 bg-blue-700 text-white font-bold rounded-xl shadow-xl shadow-blue-700/20 hover:bg-blue-800 hover:scale-105 transition-all text-lg">
            Discuss Your Modernization
          </Link>
          <Link href="/contact" className="px-10 py-5 bg-white border-2 border-slate-200 text-slate-800 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg">
            Request an IT Audit
          </Link>
        </div>
      </section>

    </div>
  );
}