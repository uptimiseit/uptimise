import React from "react";
import Link from "next/link";
import { 
  ServerCrash, ShieldAlert, Clock, Coins, 
  Workflow, ArrowRight, Server, Cloud, 
  Lock, CheckCircle2, Database, Layout, 
  RefreshCcw, Cpu, ShieldCheck, ArrowUpRight,
  Users
} from "lucide-react";

export default function EnterpriseModernizationPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-100 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8 overflow-hidden">
        {/* Corporate Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-50 blur-[120px] rounded-full -z-10"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-sm font-bold tracking-wide uppercase mb-4">
          <RefreshCcw size={16} className="text-cyan-600" /> Enterprise Transformation
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight">
          Modernize Your <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Legacy Systems</span>
        </h1>
        
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Transform outdated, fragile software into scalable, cloud-native enterprise platforms. Uptimise IT executes secure, zero-downtime migrations to future-proof your business operations.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl shadow-lg shadow-slate-900/20 hover:bg-slate-800 hover:scale-105 transition-all text-lg">
            Start Your Modernization
          </Link>
          <Link href="/contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg flex items-center justify-center gap-2">
            Consult a Solutions Architect <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* 2. PROBLEMS WITH LEGACY SOFTWARE */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">The Cost of Doing Nothing</h2>
            <p className="text-lg text-slate-600">Legacy systems are more than just old code—they are active liabilities that drain budgets, stifle innovation, and expose your enterprise to critical security risks.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Security Vulnerabilities", desc: "Unsupported frameworks and unpatched servers create massive compliance and data breach risks.", icon: <ShieldAlert className="text-red-500 w-8 h-8" /> },
              { title: "High Maintenance Costs", desc: "Paying premium rates for developers who still know outdated languages just to keep the lights on.", icon: <Coins className="text-red-500 w-8 h-8" /> },
              { title: "System Instability", desc: "Monolithic architectures that crash under load, causing devastating operational downtime.", icon: <ServerCrash className="text-red-500 w-8 h-8" /> },
              { title: "Slow Feature Velocity", desc: "Tightly coupled code makes it terrifying to add new features without breaking existing functionality.", icon: <Clock className="text-red-500 w-8 h-8" /> }
            ].map((problem, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-red-200 transition-colors">
                <div className="mb-6 bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center">{problem.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{problem.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MODERNIZATION STRATEGY */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-cyan-600 font-bold tracking-widest uppercase text-sm">Strategic Execution</h3>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Risk-Mitigated System Re-Architecture
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We do not believe in reckless "rip-and-replace" strategies that halt your business. We utilize the <strong>Strangler Fig Pattern</strong>—incrementally replacing legacy functionality with modern microservices until the old system can be safely decommissioned.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Zero-downtime phased migrations",
                "API-first microservices orchestration",
                "Automated legacy data mapping and transfer",
                "Parallel run testing for absolute data integrity"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-800 font-semibold">
                  <CheckCircle2 className="text-cyan-500 w-6 h-6 mr-3 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-900 p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5"><Workflow size={200} className="text-white" /></div>
            <h3 className="text-2xl font-bold text-white mb-8 relative z-10">Our Modernization Pathways</h3>
            <div className="space-y-4 relative z-10">
              <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700 flex gap-4">
                <Cloud className="text-cyan-400 shrink-0 mt-1" />
                <div><h4 className="text-white font-bold">Re-Platforming (Lift & Reshape)</h4><p className="text-slate-400 text-sm mt-1">Moving applications to the cloud with minor optimizations.</p></div>
              </div>
              <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700 flex gap-4 border-l-4 border-l-cyan-500">
                <Cpu className="text-cyan-400 shrink-0 mt-1" />
                <div><h4 className="text-white font-bold">Re-Architecting (Our Standard)</h4><p className="text-slate-400 text-sm mt-1">Breaking down monoliths into scalable, decoupled microservices.</p></div>
              </div>
              <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700 flex gap-4">
                <Layout className="text-cyan-400 shrink-0 mt-1" />
                <div><h4 className="text-white font-bold">UI/UX Revitalization</h4><p className="text-slate-400 text-sm mt-1">Wrapping legacy backends with modern, fast React frontends.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ENTERPRISE SYSTEMS WE BUILD/MODERNIZE */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">Enterprise Systems We Modernize</h2>
            <p className="text-lg text-slate-600">We breathe new life into mission-critical platforms that power the core of your business operations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Custom ERP Systems", desc: "Centralizing fragmented databases and migrating slow, on-premise Resource Planning tools to cloud-native architectures." },
              { title: "Financial & Core Banking", desc: "Upgrading legacy financial ledgers to real-time, high-concurrency event-driven systems with bank-grade security." },
              { title: "Supply Chain & Logistics", desc: "Modernizing inventory routing, tracking APIs, and vendor management portals for global scale." },
              { title: "Internal Workflow Portals", desc: "Replacing clunky internal desktop applications with lightning-fast, accessible web-based dashboards." }
            ].map((sys, idx) => (
              <div key={idx} className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-cyan-900/5 transition-all group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                    <Database size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{sys.title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed pl-16">{sys.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TECHNOLOGY STACK */}
      <section className="py-24 px-6 bg-[#0B0F19] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto relative z-10 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-white">The Modernization Stack</h2>
            <p className="text-lg text-slate-400">We migrate legacy Java, .NET, and PHP monoliths to elite, future-proof cloud infrastructures.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { category: "Target Backend", items: ["Node.js", "Python", "Go (Golang)", "GraphQL APIs"] },
              { category: "Target Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
              { category: "Cloud & DevOps", items: ["Docker & K8s", "AWS / Azure", "Terraform", "CI/CD Pipelines"] },
              { category: "Data Migration", items: ["PostgreSQL", "MongoDB", "Redis", "Kafka (Event Streaming)"] },
            ].map((stack, idx) => (
              <div key={idx} className="bg-[#111827] border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-colors">
                <h4 className="text-cyan-400 font-bold mb-6 tracking-wide uppercase text-sm">{stack.category}</h4>
                <ul className="space-y-3">
                  {stack.items.map((item, i) => (
                    <li key={i} className="flex items-center text-slate-300 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-3"></span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CLOUD TRANSFORMATION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-slate-900 to-[#020617] rounded-[3rem] p-8 md:p-16 text-white flex flex-col lg:flex-row items-center gap-12 border border-slate-800 relative overflow-hidden shadow-2xl">
          <div className="absolute bottom-0 right-0 p-32 opacity-10">
            <Cloud size={400} />
          </div>
          <div className="flex-1 space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-sm font-bold tracking-wide uppercase">
              <Server size={16} /> Cloud-Native Architecture
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight">The Cloud Transformation Advantage</h2>
            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              Moving away from rigid, on-premise servers is the core of modernization. We containerize your applications and deploy them to managed cloud environments, drastically reducing infrastructure overhead.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div>
                <h4 className="text-cyan-400 font-bold text-xl mb-2">99.99%</h4>
                <p className="text-slate-400 text-sm">Target Uptime via Multi-AZ deployment.</p>
              </div>
              <div>
                <h4 className="text-cyan-400 font-bold text-xl mb-2">Auto-Scaling</h4>
                <p className="text-slate-400 text-sm">Elastic resources match traffic demands.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. MIGRATION PROCESS */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">Secure Migration Process</h2>
            <p className="text-lg text-slate-600">A meticulous, 5-stage protocol designed to guarantee zero data loss and absolute business continuity.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Audit & Assess", desc: "Deep code analysis and dependency mapping of the legacy monolith." },
              { step: "02", title: "Blueprint", desc: "Designing the target cloud architecture and data migration path." },
              { step: "03", title: "Refactor", desc: "Rewriting core modules into microservices using modern stacks." },
              { step: "04", title: "Parallel Run", desc: "Running old and new systems simultaneously to verify data integrity." },
              { step: "05", title: "Cutover", desc: "Seamless traffic switch to the new platform with zero downtime." }
            ].map((process, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-cyan-400 transition-colors relative overflow-hidden group">
                <div className="text-5xl font-black text-slate-50 absolute -top-2 -right-2 group-hover:text-cyan-50 transition-colors">{process.step}</div>
                <div className="relative z-10">
                  <h4 className="text-lg font-bold text-slate-900 mb-2 mt-4">{process.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{process.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. ENTERPRISE BENEFITS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">The ROI of Modernization</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           <div className="space-y-4 p-8 bg-slate-50 rounded-3xl border border-slate-100">
             <Workflow className="text-cyan-600 w-10 h-10" />
             <h4 className="font-bold text-slate-900 text-lg">Increased Agility</h4>
             <p className="text-slate-600 text-sm">Deploy new features in days, not months, using decoupled architectures.</p>
           </div>
           <div className="space-y-4 p-8 bg-slate-50 rounded-3xl border border-slate-100">
             <Coins className="text-cyan-600 w-10 h-10" />
             <h4 className="font-bold text-slate-900 text-lg">Cost Optimization</h4>
             <p className="text-slate-600 text-sm">Eliminate expensive legacy server maintenance and licensing fees.</p>
           </div>
           <div className="space-y-4 p-8 bg-slate-50 rounded-3xl border border-slate-100">
             <Users className="text-cyan-600 w-10 h-10" />
             <h4 className="font-bold text-slate-900 text-lg">Developer Retention</h4>
             <p className="text-slate-600 text-sm">Top engineering talent wants to work with modern stacks, not 20-year-old code.</p>
           </div>
           <div className="space-y-4 p-8 bg-slate-50 rounded-3xl border border-slate-100">
             <Cloud className="text-cyan-600 w-10 h-10" />
             <h4 className="font-bold text-slate-900 text-lg">Infinite Scale</h4>
             <p className="text-slate-600 text-sm">Cloud-native infrastructure scales automatically to handle massive enterprise loads.</p>
           </div>
        </div>
      </section>

      {/* 9. SECURITY & COMPLIANCE */}
      <section className="py-24 px-6 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm font-bold tracking-wide uppercase">
              <ShieldCheck size={16} className="text-cyan-400" /> Enterprise Security
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-white leading-tight">
              Security is Not an Afterthought
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              Legacy systems are prime targets for cyberattacks. Our modernization process injects Zero-Trust security protocols directly into the foundation of your new architecture.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
               {["End-to-End Encryption (AES-256)", "Strict RBAC Auth Models", "SOC2 & GDPR Compliance Ready", "Automated Vulnerability Scanning"].map((sec, idx) => (
                 <div key={idx} className="flex items-center gap-3">
                   <Lock className="text-cyan-400 shrink-0 w-5 h-5" />
                   <span className="text-sm font-semibold text-slate-200">{sec}</span>
                 </div>
               ))}
            </div>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600/20 to-blue-600/20 blur-3xl rounded-full"></div>
             <div className="bg-slate-800 border border-slate-700 p-8 rounded-3xl relative z-10 shadow-2xl backdrop-blur-sm">
               <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-700 pb-4">Compliance Frameworks We Support</h3>
               <ul className="space-y-4">
                 <li className="flex justify-between items-center"><span className="text-slate-300">Data Privacy</span><span className="px-3 py-1 bg-slate-900 rounded-md text-xs font-bold text-cyan-400 border border-slate-700">GDPR / CCPA</span></li>
                 <li className="flex justify-between items-center"><span className="text-slate-300">Healthcare Info</span><span className="px-3 py-1 bg-slate-900 rounded-md text-xs font-bold text-cyan-400 border border-slate-700">HIPAA Ready</span></li>
                 <li className="flex justify-between items-center"><span className="text-slate-300">Financial Data</span><span className="px-3 py-1 bg-slate-900 rounded-md text-xs font-bold text-cyan-400 border border-slate-700">PCI-DSS Ready</span></li>
                 <li className="flex justify-between items-center"><span className="text-slate-300">Org Security</span><span className="px-3 py-1 bg-slate-900 rounded-md text-xs font-bold text-cyan-400 border border-slate-700">SOC 2 Type II Architecture</span></li>
               </ul>
             </div>
          </div>
        </div>
      </section>

      {/* 10. CTA SECTION */}
      <section className="py-32 px-6 text-center max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">Ready to Future-Proof Your Enterprise?</h2>
        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Stop paying the tax on technical debt. Partner with Uptimise IT to architect a secure, scalable, and modern digital foundation.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-10 py-5 bg-slate-900 text-white font-bold rounded-xl shadow-xl hover:bg-slate-800 hover:scale-105 transition-all text-lg">
            Discuss Modernization
          </Link>
          <Link href="/contact" className="px-10 py-5 bg-white border-2 border-slate-200 text-slate-800 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg">
            Request Technical Audit
          </Link>
        </div>
      </section>

    </div>
  );
}