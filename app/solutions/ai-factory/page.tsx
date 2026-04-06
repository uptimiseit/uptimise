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
    <div className="min-h-screen bg-white text-slate-600 font-sans selection:bg-indigo-100 pb-20 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8">
        {/* Soft Ambient Glows (Light version) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-50 blur-[120px] rounded-full -z-10"></div>
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-cyan-50 blur-[100px] rounded-full -z-10"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-indigo-600 text-sm font-bold tracking-wide uppercase mb-4 shadow-sm">
          <Factory size={16} /> The Core Delivery Engine
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">AI Software Factory</span>
        </h1>
        
        <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
          Welcome to the future of product engineering. We have replaced traditional, slow, manual coding with a proprietary ecosystem of autonomous AI agents orchestrated by elite human architects. 
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl shadow-lg shadow-slate-200 hover:bg-slate-800 hover:scale-105 transition-all text-lg uppercase tracking-wider">
            Deploy The Factory
          </Link>
          <Link href="/contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-900 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg flex items-center justify-center gap-2">
            See How It Works <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* 2. TRADITIONAL DEVELOPMENT PROBLEMS */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">The Legacy Model is Broken</h2>
            <p className="text-lg text-slate-500">Traditional agencies throw human bodies at repetitive tasks, resulting in bloated budgets and infinite delays.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Painfully Slow Delivery", desc: "Writing boilerplate code takes months before you even see a prototype.", icon: <Clock className="text-orange-500 w-8 h-8" /> },
              { title: "Astronomical Costs", desc: "You pay premium rates for senior developers to write repetitive, low-value CRUD APIs.", icon: <Coins className="text-orange-500 w-8 h-8" /> },
              { title: "Human Error & Bugs", desc: "Manual code writing introduces typos and security flaws that break in production.", icon: <ShieldAlert className="text-orange-500 w-8 h-8" /> }
            ].map((challenge, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-orange-200 transition-colors group">
                <div className="mb-6 bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center border border-orange-100 group-hover:scale-110 transition-transform">{challenge.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{challenge.title}</h3>
                <p className="text-slate-500 leading-relaxed">{challenge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. AI SOFTWARE FACTORY MODEL */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-indigo-600 font-bold tracking-widest uppercase text-sm">The Paradigm Shift</h3>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Human Architecture + Machine Execution
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              The AI Software Factory flips the traditional model. Our senior architects spend 100% of their time on design and logic, while agents handle 90% of execution.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "10x faster generation of infrastructure code.",
                "Deterministic output guided by strict architectural prompts.",
                "Zero fatigue—agents code and refactor 24/7.",
                "Human-in-the-loop review for absolute quality."
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-600 font-medium text-lg">
                  <CheckCircle2 className="text-emerald-500 w-6 h-6 mr-3 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-200 shadow-xl relative overflow-hidden">
             <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <span className="text-slate-900 font-bold flex items-center gap-2"><Cpu className="text-indigo-600" /> Human Architect</span>
                  <span className="text-xs font-mono text-indigo-600 bg-indigo-50 px-2 py-1 rounded border border-indigo-100">Defines Blueprint</span>
                </div>
                <div className="flex justify-center"><ArrowRight className="text-slate-300 rotate-90" /></div>
                <div className="bg-white border border-indigo-100 p-6 rounded-2xl shadow-sm text-center">
                  <Bot className="w-12 h-12 text-indigo-500 mx-auto mb-3" />
                  <h4 className="text-slate-900 font-bold text-lg">AI Factory Engine</h4>
                  <p className="text-slate-400 text-sm mt-2">Generates, tests, and self-heals code.</p>
                </div>
                <div className="flex justify-center"><ArrowRight className="text-slate-300 rotate-90" /></div>
                <div className="flex items-center justify-between border-t border-slate-200 pt-4">
                  <span className="text-slate-900 font-bold flex items-center gap-2"><ShieldCheck className="text-emerald-600" /> Human QA</span>
                  <span className="text-xs font-mono text-emerald-600 bg-emerald-50 px-2 py-1 rounded border border-emerald-100">Approves & Deploys</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. AI AGENTS ECOSYSTEM */}
      <section className="py-20 px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-16 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">The Swarm: Our Agent Ecosystem</h2>
            <p className="text-lg text-slate-500">Your project is engineered by a highly specialized swarm of autonomous agents.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { role: "Architect Agent", task: "Translates requirements into schemas and API specs.", icon: <Layers size={24} />, color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-100" },
              { role: "Coder Agent", task: "Generates frontend and backend code in real-time.", icon: <Code2 size={24} />, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
              { role: "QA Agent", task: "Writes unit tests and attempts to break generated code.", icon: <ShieldAlert size={24} />, color: "text-red-600", bg: "bg-red-50", border: "border-red-100" },
              { role: "DevOps Agent", task: "Writes Dockerfiles and configures CI/CD pipelines.", icon: <Terminal size={24} />, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" }
            ].map((agent, idx) => (
              <div key={idx} className={`p-8 rounded-3xl bg-white border ${agent.border} hover:shadow-md transition-all duration-300 relative group`}>
                <div className={`w-14 h-14 ${agent.bg} ${agent.color} rounded-2xl flex items-center justify-center mb-6`}>
                  {agent.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{agent.role}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{agent.task}</p>
                <div className={`absolute bottom-0 left-0 w-full h-1 ${agent.bg} scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TECHNOLOGY STACK */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-slate-50 border border-slate-200 rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row gap-12 items-center shadow-sm">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">The Factory Infrastructure</h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              We leverage the most powerful models to generate clean, enterprise-grade Next.js, Node, and Python code.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["GPT-4o", "Claude 3.5 Sonnet", "Cursor", "Copilot", "LangChain", "AutoGen"].map(tech => (
                <span key={tech} className="px-4 py-2 bg-white text-indigo-600 font-bold rounded-lg text-sm border border-slate-200 hover:border-indigo-300 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full grid grid-cols-2 gap-4">
             <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"><h4 className="text-blue-600 font-bold mb-2">Models</h4><p className="text-slate-500 text-sm">GPT-4, Claude, Llama</p></div>
             <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"><h4 className="text-emerald-600 font-bold mb-2">Orchestration</h4><p className="text-slate-500 text-sm">LangChain & AutoGen</p></div>
             <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"><h4 className="text-purple-600 font-bold mb-2">Code Gen</h4><p className="text-slate-500 text-sm">Cursor & Copilot</p></div>
             <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"><h4 className="text-orange-600 font-bold mb-2">Stack</h4><p className="text-slate-500 text-sm">TS, Python, Go</p></div>
          </div>
        </div>
      </section>

      {/* 6. DEVELOPMENT WORKFLOW */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">The Factory Workflow</h2>
            <p className="text-lg text-slate-500">How we turn a raw idea into a deployed platform at unprecedented speed.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Ingestion", desc: "Architects feed PRDs and Figma files into the Factory." },
              { step: "02", title: "Scaffolding", desc: "Agents generate repo, DB schemas, and routes in seconds." },
              { step: "03", title: "Logic Build", desc: "Human + AI pair programming for complex logic." },
              { step: "04", title: "QA Loop", desc: "Automated agents write tests and fix failing builds." },
              { step: "05", title: "Ship", desc: "Architect reviews final code and pushes to production." }
            ].map((process, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-indigo-400 transition-colors relative group shadow-sm">
                <div className="text-sm font-black text-indigo-600 mb-3 uppercase tracking-wider">{process.step}</div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{process.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BENEFITS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">Why We Build This Way</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           <div className="space-y-4 p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
             <Zap className="text-indigo-600 w-10 h-10" />
             <h4 className="font-bold text-slate-900 text-lg">40-60% Faster</h4>
             <p className="text-slate-500 text-sm">Cut months out of the development cycle. Launch while competitors are still planning.</p>
           </div>
           <div className="space-y-4 p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
             <Coins className="text-indigo-600 w-10 h-10" />
             <h4 className="font-bold text-slate-900 text-lg">Cost Efficient</h4>
             <p className="text-slate-500 text-sm">Pay for high-value business logic, not manual boilerplate typing.</p>
           </div>
           <div className="space-y-4 p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
             <ShieldCheck className="text-indigo-600 w-10 h-10" />
             <h4 className="font-bold text-slate-900 text-lg">Higher Quality</h4>
             <p className="text-slate-500 text-sm">AI generates fully documented, unit-tested code consistently across the stack.</p>
           </div>
           <div className="space-y-4 p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
             <Workflow className="text-indigo-600 w-10 h-10" />
             <h4 className="font-bold text-slate-900 text-lg">Infinite Scale</h4>
             <p className="text-slate-500 text-sm">Modular, cloud-native architecture ready to scale from day one.</p>
           </div>
        </div>
      </section>

      {/* 8. PRODUCT TYPES */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">What The Factory Produces</h2>
            <p className="text-lg text-slate-500">Framework agnostic generation for virtually any digital product.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "B2B SaaS Platforms", icon: <Cloud size={24} />, desc: "Multi-tenant architectures with Stripe billing and role-based access." },
              { title: "Enterprise Workflows", icon: <Network size={24} />, desc: "Internal tools, ERP integrations, and custom CRM systems." },
              { title: "AI Product Wrappers", icon: <Bot size={24} />, desc: "Custom LLM integrations, RAG applications, and autonomous bots." }
            ].map((prod, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-indigo-400 transition-all group shadow-sm">
                <div className="text-indigo-600 mb-6 bg-indigo-50 w-12 h-12 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform">{prod.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{prod.title}</h3>
                <p className="text-slate-500 leading-relaxed">{prod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. WHY UPITIMISE (Uptimise) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-indigo-50 border border-indigo-100 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
          <div className="flex-1 space-y-6 relative z-10">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">Why Uptimise IT?</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We are pioneers in AI-native engineering, building structured assembly lines that safely integrate agents into the software lifecycle.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full relative z-10">
            {[
              "Proprietary Workflows",
              "Senior Human Oversight",
              "No Vendor Lock-in",
              "Enterprise Security"
            ].map((reason, i) => (
              <div key={i} className="bg-white border border-indigo-200 p-4 rounded-xl flex items-center font-semibold text-slate-900 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 mr-3 shrink-0" /> {reason}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA SECTION */}
      <section className="py-32 px-6 text-center max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">Build Faster Than Ever.</h2>
        <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
          The future of software is generated. Launch your next platform at unprecedented speed.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-10 py-5 bg-indigo-600 text-white font-bold uppercase tracking-wider rounded-xl shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all text-lg">
            Initialize Project
          </Link>
          <Link href="/contact" className="px-10 py-5 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all text-lg">
            Consult an Architect
          </Link>
        </div>
      </section>

    </div>
  );
}