import React from "react";
import Link from "next/link";
import { 
  Bot, Factory, Cpu, Terminal, ShieldAlert, Clock, 
  Coins, Zap, Network, Code2, ShieldCheck, ArrowRight,
  CheckCircle2, Layers, LineChart, Globe, Box, Server,
  ArrowUpRight, Workflow,
  Cloud
} from "lucide-react";

export default function AISoftwareFactoryPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500/30 pb-20 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8">
        {/* Ambient Factory Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full -z-10"></div>
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-cyan-400/20 blur-[100px] rounded-full -z-10"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-sm font-bold tracking-wide uppercase mb-4 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
          <Factory size={16} /> The Core Delivery Engine
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-tight">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">AI Software Factory</span>
        </h1>
        
        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Welcome to the future of product engineering. We have replaced traditional, slow, manual coding with a proprietary ecosystem of autonomous AI agents orchestrated by elite human architects. 
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-8 py-4 bg-cyan-500 text-slate-950 font-black rounded-xl shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:bg-cyan-400 hover:scale-105 transition-all text-lg uppercase tracking-wider">
            Deploy The Factory
          </Link>
          <Link href="/contact" className="px-8 py-4 bg-slate-900 border border-slate-700 text-white font-bold rounded-xl hover:border-slate-600 hover:bg-slate-800 transition-all text-lg flex items-center justify-center gap-2">
            See How It Works <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* 2. TRADITIONAL DEVELOPMENT PROBLEMS */}
      <section className="py-24 px-6 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">The Legacy Model is Broken</h2>
            <p className="text-lg text-slate-400">Traditional software agencies operate like 19th-century assembly lines. They throw human bodies at repetitive tasks, resulting in bloated budgets, infinite delays, and human error.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Painfully Slow Delivery", desc: "Writing boilerplate code and setting up basic infrastructure takes months before you even see a prototype.", icon: <Clock className="text-red-400 w-8 h-8" /> },
              { title: "Astronomical Costs", desc: "You are paying premium hourly rates for senior developers to write repetitive, low-value CRUD APIs.", icon: <Coins className="text-red-400 w-8 h-8" /> },
              { title: "Human Error & Bugs", desc: "Manual code writing inevitably introduces typos, security vulnerabilities, and logic flaws that break in production.", icon: <ShieldAlert className="text-red-400 w-8 h-8" /> }
            ].map((challenge, idx) => (
              <div key={idx} className="bg-slate-950 p-8 rounded-3xl border border-slate-800 shadow-sm hover:border-red-900/50 transition-colors">
                <div className="mb-6 bg-red-500/10 w-16 h-16 rounded-2xl flex items-center justify-center border border-red-500/20">{challenge.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{challenge.title}</h3>
                <p className="text-slate-400 leading-relaxed">{challenge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. AI SOFTWARE FACTORY MODEL */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-cyan-500 font-bold tracking-widest uppercase text-sm">The Paradigm Shift</h3>
            <h2 className="text-4xl font-bold tracking-tight text-white leading-tight">
              Human Architecture + Machine Execution
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              The AI Software Factory flips the traditional model. Our senior architects spend 100% of their time on high-level system design, security, and business logic. The factory's AI agents handle 90% of the actual code generation, testing, and deployment.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "10x faster generation of boilerplate and infrastructure code.",
                "Deterministic output guided by strict architectural prompting.",
                "Zero fatigue—agents code, test, and refactor 24/7.",
                "Human-in-the-loop review for absolute quality assurance."
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-300 font-medium text-lg">
                  <CheckCircle2 className="text-cyan-500 w-6 h-6 mr-3 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-slate-900 p-8 md:p-12 rounded-[3rem] border border-slate-800 shadow-2xl relative overflow-hidden">
             {/* Abstract Code Grid CSS */}
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
             <div className="relative z-10 space-y-6">
               <div className="flex items-center justify-between border-b border-slate-700 pb-4">
                 <span className="text-white font-bold flex items-center gap-2"><Cpu className="text-cyan-400" /> Human Architect</span>
                 <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded border border-cyan-500/30">Defines Blueprint</span>
               </div>
               <div className="flex justify-center"><ArrowRight className="text-slate-600 rotate-90" /></div>
               <div className="bg-slate-950 border border-blue-500/30 p-6 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.15)] text-center">
                 <Bot className="w-12 h-12 text-blue-400 mx-auto mb-3 animate-pulse" />
                 <h4 className="text-white font-bold text-lg">AI Factory Engine</h4>
                 <p className="text-slate-500 text-sm mt-2">Generates, tests, and self-heals code simultaneously.</p>
               </div>
               <div className="flex justify-center"><ArrowRight className="text-slate-600 rotate-90" /></div>
               <div className="flex items-center justify-between border-t border-slate-700 pt-4">
                 <span className="text-white font-bold flex items-center gap-2"><ShieldCheck className="text-emerald-400" /> Human QA</span>
                 <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/30">Approves & Deploys</span>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. AI AGENTS ECOSYSTEM */}
      <section className="py-32 px-6 bg-[#020617] border-y border-slate-900 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto space-y-16 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-white">The Swarm: Our Agent Ecosystem</h2>
            <p className="text-lg text-slate-400">Your project isn't built by a single AI. It is engineered by a highly specialized, communicating swarm of autonomous agents.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { role: "Architect Agent", task: "Translates human requirements into database schemas and API specifications.", icon: <Layers size={24} />, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/30" },
              { role: "Coder Agent", task: "Generates the actual application code across frontend and backend in real-time.", icon: <Code2 size={24} />, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/30" },
              { role: "QA Agent", task: "Writes unit tests and attempts to break the code generated by the Coder Agent.", icon: <ShieldAlert size={24} />, color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/30" },
              { role: "DevOps Agent", task: "Writes Dockerfiles, Terraform scripts, and configures the CI/CD pipeline.", icon: <Terminal size={24} />, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/30" }
            ].map((agent, idx) => (
              <div key={idx} className={`p-8 rounded-3xl bg-slate-900/50 border ${agent.border} backdrop-blur-sm hover:-translate-y-2 transition-transform duration-300 relative group`}>
                {/* Connection lines simulating communication between cards on large screens */}
                {idx < 3 && <div className="hidden lg:block absolute top-1/2 -right-6 w-6 h-0.5 bg-slate-800 z-0"></div>}
                
                <div className={`w-14 h-14 ${agent.bg} ${agent.color} rounded-2xl flex items-center justify-center mb-6`}>
                  {agent.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{agent.role}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{agent.task}</p>
                
                <div className={`absolute bottom-0 left-0 w-full h-1 ${agent.bg} scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TECHNOLOGY STACK */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-slate-900 border border-slate-800 rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row gap-12 items-center shadow-2xl">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-white">The Factory Infrastructure</h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              The Factory leverages the most powerful foundation models and orchestration frameworks available to generate clean, enterprise-grade Next.js, Node, and Python code.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["OpenAI GPT-4o", "Anthropic Claude 3.5 Sonnet", "Cursor", "GitHub Copilot Enterprise", "LangChain", "AutoGen"].map(tech => (
                <span key={tech} className="px-4 py-2 bg-slate-950 text-cyan-400 font-bold rounded-lg text-sm border border-cyan-900 hover:bg-cyan-900/50 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full grid grid-cols-2 gap-4">
             <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800"><h4 className="text-blue-400 font-bold mb-2">Foundation Models</h4><p className="text-slate-500 text-sm">GPT-4, Claude, Llama</p></div>
             <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800"><h4 className="text-emerald-400 font-bold mb-2">Agent Orchestration</h4><p className="text-slate-500 text-sm">LangChain & AutoGen</p></div>
             <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800"><h4 className="text-purple-400 font-bold mb-2">Code Generation</h4><p className="text-slate-500 text-sm">Cursor & Copilot</p></div>
             <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800"><h4 className="text-orange-400 font-bold mb-2">Output Languages</h4><p className="text-slate-500 text-sm">TypeScript, Python, Go</p></div>
          </div>
        </div>
      </section>

      {/* 6. DEVELOPMENT WORKFLOW */}
      <section className="py-24 px-6 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-white">The Factory Workflow</h2>
            <p className="text-lg text-slate-400">How we turn a raw idea into a deployed platform at unprecedented speed.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Ingestion", desc: "Human architects feed PRDs, Figma files, and logic rules into the Factory context." },
              { step: "02", title: "Scaffolding", desc: "Agents generate the repository, DB schemas, and API routes in seconds." },
              { step: "03", title: "Logic Build", desc: "Human + AI pair programming to construct complex business logic." },
              { step: "04", title: "QA Loop", desc: "Automated agents write tests and fix failing CI/CD builds instantly." },
              { step: "05", title: "Ship", desc: "Architect reviews the final codebase and pushes to production." }
            ].map((process, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-colors relative overflow-hidden group">
                <div className="text-sm font-black text-cyan-500 mb-3 uppercase tracking-wider">{process.step}</div>
                <h4 className="text-lg font-bold text-white mb-2">{process.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BENEFITS OF AI SOFTWARE FACTORY */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white">Why We Build This Way</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           <div className="space-y-4 p-8 bg-slate-900 rounded-3xl border border-slate-800">
             <Zap className="text-cyan-400 w-10 h-10" />
             <h4 className="font-bold text-white text-lg">40-60% Faster</h4>
             <p className="text-slate-400 text-sm">Cut months out of the development cycle. Launch your MVP or feature while competitors are still planning.</p>
           </div>
           <div className="space-y-4 p-8 bg-slate-900 rounded-3xl border border-slate-800">
             <Coins className="text-cyan-400 w-10 h-10" />
             <h4 className="font-bold text-white text-lg">Cost Efficient</h4>
             <p className="text-slate-400 text-sm">Less time spent writing boilerplate means you pay for high-value business logic, not manual typing.</p>
           </div>
           <div className="space-y-4 p-8 bg-slate-900 rounded-3xl border border-slate-800">
             <ShieldCheck className="text-cyan-400 w-10 h-10" />
             <h4 className="font-bold text-white text-lg">Higher Quality</h4>
             <p className="text-slate-400 text-sm">AI doesn't get tired. It generates fully documented, unit-tested code consistently across the entire stack.</p>
           </div>
           <div className="space-y-4 p-8 bg-slate-900 rounded-3xl border border-slate-800">
             <Workflow className="text-cyan-400 w-10 h-10" />
             <h4 className="font-bold text-white text-lg">Infinite Scale</h4>
             <p className="text-slate-400 text-sm">The Factory outputs clean, modular, cloud-native architecture that is ready to scale from day one.</p>
           </div>
        </div>
      </section>

      {/* 8. PRODUCT TYPES WE BUILD */}
      <section className="py-24 px-6 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-white">What The Factory Produces</h2>
            <p className="text-lg text-slate-400">The Factory is language and framework agnostic, allowing us to generate virtually any digital product.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "B2B SaaS Platforms", icon: <Cloud size={24} />, desc: "Multi-tenant architectures with Stripe billing, complex dashboards, and role-based access." },
              { title: "Enterprise Workflows", icon: <Network size={24} />, desc: "Internal tools, ERP integrations, and custom CRM systems that replace manual data entry." },
              { title: "AI Product Wrappers", icon: <Bot size={24} />, desc: "Custom LLM integrations, RAG applications, and autonomous workflow bots." }
            ].map((prod, idx) => (
              <div key={idx} className="bg-slate-950 p-8 rounded-3xl border border-slate-800 hover:border-cyan-500/50 transition-all group">
                <div className="text-cyan-400 mb-6 bg-cyan-950/30 w-12 h-12 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform">{prod.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{prod.title}</h3>
                <p className="text-slate-400 leading-relaxed">{prod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. WHY UPTIMISE AI SYSTEMS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-cyan-950/30 border border-cyan-500/30 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-[0_0_50px_rgba(6,182,212,0.1)] relative overflow-hidden">
           <div className="absolute -right-20 -top-20 opacity-10"><Factory size={300} className="text-cyan-400" /></div>
          <div className="flex-1 space-y-6 relative z-10">
            <h2 className="text-4xl font-extrabold tracking-tight text-white">Why Uptimise IT?</h2>
            <p className="text-cyan-100/80 text-lg leading-relaxed">
              Anyone can use ChatGPT. Very few agencies have built a structured, enterprise-grade assembly line that safely integrates AI agents into the actual software development lifecycle. We are pioneers in AI-native engineering.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full relative z-10">
            {[
              "Proprietary Agent Workflows",
              "Senior Human Oversight",
              "No Vendor Lock-in (You own the code)",
              "Enterprise Security Standards"
            ].map((reason, i) => (
              <div key={i} className="bg-slate-900/80 border border-cyan-500/20 p-4 rounded-xl flex items-center font-semibold text-white backdrop-blur-sm">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 mr-3 shrink-0" /> {reason}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA SECTION */}
      <section className="py-32 px-6 text-center max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">Build Faster Than Ever Before.</h2>
        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
          The future of software is generated, not just written. Leverage the AI Software Factory to launch your next platform at unprecedented speed.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-10 py-5 bg-cyan-500 text-slate-950 font-black uppercase tracking-wider rounded-xl shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:bg-cyan-400 hover:scale-105 transition-all text-lg">
            Initialize Project
          </Link>
          <Link href="/contact" className="px-10 py-5 bg-slate-900 border border-slate-700 text-white font-bold rounded-xl hover:border-slate-600 hover:bg-slate-800 transition-all text-lg">
            Consult an Architect
          </Link>
        </div>
      </section>

    </div>
  );
}