import React from "react";
import Link from "next/link";
import { 
  Workflow, Zap, Link as LinkIcon, Clock, 
  AlertCircle, TrendingUp, Cpu, Database, 
  ArrowRight, CheckCircle2, Network, Bot, 
  Layers, FileText, Users, ArrowUpRight
} from "lucide-react";

export default function WorkflowAutomationPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-100 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8 overflow-hidden">
        {/* Ambient Connectivity Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-50 blur-[120px] rounded-full -z-10"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-sm font-bold tracking-wide uppercase mb-4">
          <Workflow size={16} /> Intelligent Operations
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight">
          Intelligent <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-violet-600">Workflow Automation</span>
        </h1>
        
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Eliminate manual data entry, connect siloed enterprise applications, and scale your operations without adding headcount. We engineer autonomous workflows powered by custom APIs and AI agents.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-8 py-4 bg-cyan-600 text-white font-bold rounded-xl shadow-lg shadow-cyan-600/20 hover:bg-cyan-700 hover:scale-105 transition-all text-lg">
            Automate Your Business
          </Link>
          <Link href="/contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg flex items-center justify-center gap-2">
            Audit My Workflows <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* 2. MANUAL WORKFLOW CHALLENGES */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">The Silent Killer of Profitability</h2>
            <p className="text-lg text-slate-600">Manual processes don't just slow you down—they introduce critical human errors, frustrate your team, and destroy your profit margins as you attempt to scale.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Data Silos", desc: "Your CRM, ERP, and marketing tools don't talk to each other, forcing staff to copy-paste data manually between screens.", icon: <Database className="text-red-500 w-8 h-8" /> },
              { title: "Human Error", desc: "Manual data entry inevitably leads to typos, lost invoices, and compliance violations that cost time and money to fix.", icon: <AlertCircle className="text-red-500 w-8 h-8" /> },
              { title: "Scaling Bottlenecks", desc: "When business doubles, your back-office headcount has to double too, erasing the financial benefits of your growth.", icon: <TrendingUp className="text-red-500 w-8 h-8" /> }
            ].map((challenge, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <div className="mb-6 bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center">{challenge.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{challenge.title}</h3>
                <p className="text-slate-600 leading-relaxed">{challenge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. AUTOMATION STRATEGY */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-cyan-600 font-bold tracking-widest uppercase text-sm">Our Strategy</h3>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Connecting the Disconnected
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              True automation isn't just setting up a basic Zapier trigger. We engineer resilient, fault-tolerant middleware that handles complex branching logic, data transformation, and error recovery.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Deep workflow audits to identify maximum ROI bottlenecks.",
                "Custom API development for legacy systems.",
                "Straight-Through Processing (STP) architecture.",
                "Real-time error logging and alerting systems."
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-800 font-semibold text-lg">
                  <CheckCircle2 className="text-cyan-500 w-6 h-6 mr-3 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-900 p-8 md:p-12 rounded-[3rem] relative overflow-hidden shadow-2xl">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
             <h3 className="text-2xl font-bold text-white mb-8 relative z-10">Data Flow Architecture</h3>
             <div className="space-y-4 relative z-10">
               <div className="flex items-center justify-between bg-slate-800 p-4 rounded-xl border border-slate-700">
                 <div className="flex items-center gap-3 text-white font-bold"><Layers className="text-cyan-400" /> CRM (Salesforce)</div>
                 <ArrowRight className="text-slate-500" />
               </div>
               <div className="flex items-center justify-center">
                 <div className="w-0.5 h-6 bg-cyan-500"></div>
               </div>
               <div className="flex items-center justify-center bg-cyan-500/20 border border-cyan-500/50 p-4 rounded-xl">
                 <div className="flex items-center gap-3 text-cyan-300 font-bold"><Cpu /> Custom Middleware / Logic</div>
               </div>
               <div className="flex items-center justify-center">
                 <div className="w-0.5 h-6 bg-cyan-500"></div>
               </div>
               <div className="flex items-center justify-between bg-slate-800 p-4 rounded-xl border border-slate-700">
                 <ArrowRight className="text-slate-500" />
                 <div className="flex items-center gap-3 text-white font-bold"><Database className="text-violet-400" /> ERP (NetSuite)</div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. AUTOMATION SYSTEMS WE BUILD */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">Automation Systems We Build</h2>
            <p className="text-lg text-slate-600">We replace manual human effort with autonomous digital workers across every department.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Financial & Invoice Automation", desc: "Auto-extracting data from PDF invoices, matching them to purchase orders, and pushing to accounting software.", icon: <FileText size={24} /> },
              { title: "HR & Employee Onboarding", desc: "Instantly provisioning software accounts, sending training emails, and updating payroll upon a new hire.", icon: <Users size={24} /> },
              { title: "Sales & CRM Synchronization", desc: "Routing leads from marketing campaigns directly to sales reps while enriching data from third-party APIs.", icon: <LinkIcon size={24} /> },
              { title: "Inventory & Supply Chain", desc: "Triggering automatic reorder requests to suppliers when warehouse stock drops below dynamic thresholds.", icon: <Layers size={24} /> }
            ].map((sys, idx) => (
              <div key={idx} className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-cyan-900/5 transition-all group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                    {sys.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{sys.title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed pl-16">{sys.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. AI AUTOMATION TOOLS */}
      <section className="py-24 px-6 bg-[#0B0F19] text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-300 text-sm font-bold tracking-wide uppercase">
              <Bot size={16} /> Intelligent Agents
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-white leading-tight">
              Supercharging Automation with AI
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              Standard automation fails when data is unstructured. By injecting AI agents and Large Language Models (LLMs) into the workflow, we can process emails, read documents, and make cognitive decisions autonomously.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
               {[
                 "Intelligent OCR Data Extraction", 
                 "NLP Email Triage & Routing", 
                 "Sentiment Analysis Triggers", 
                 "Autonomous Exception Handling"
               ].map((sec, idx) => (
                 <div key={idx} className="flex items-center gap-3 bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                   <Zap className="text-violet-400 shrink-0 w-5 h-5" />
                   <span className="text-sm font-semibold text-slate-200">{sec}</span>
                 </div>
               ))}
            </div>
          </div>
          <div className="bg-slate-800 border border-slate-700 p-8 rounded-3xl relative shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-700 pb-4">Standard vs. AI Automation</h3>
            <div className="space-y-6">
              <div>
                <p className="text-slate-400 text-xs font-bold uppercase mb-2">Standard (Rule-Based)</p>
                <div className="flex items-center gap-3 bg-slate-900 p-4 rounded-xl border border-slate-700 opacity-60">
                  <span className="text-sm">If form submitted &rarr; Send email.</span>
                </div>
              </div>
              <div>
                <p className="text-violet-400 text-xs font-bold uppercase mb-2">AI-Augmented (Cognitive)</p>
                <div className="flex items-center gap-3 bg-slate-900 p-4 rounded-xl border border-violet-500/30 shadow-[0_0_20px_rgba(139,92,246,0.1)]">
                  <span className="text-sm text-slate-200">Read angry support email &rarr; AI detects sentiment &rarr; Summarizes issue &rarr; Alerts VIP manager instantly.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INTEGRATION PLATFORMS */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Integration Platforms & Tools</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We are platform-agnostic. We use enterprise iPaaS tools or build fully custom Node.js/Python middlewares to connect your ecosystem securely.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {["Custom Webhooks / REST APIs", "n8n (Self-Hosted)", "Make (Integromat)", "Zapier Enterprise", "Workato", "MuleSoft", "GraphQL Integrations"].map(tech => (
            <span key={tech} className="px-6 py-3 bg-white border border-slate-200 shadow-sm rounded-xl text-slate-800 font-bold hover:border-cyan-400 hover:text-cyan-700 transition-colors cursor-default">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* 7. AUTOMATION IMPLEMENTATION PROCESS */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">Implementation Process</h2>
            <p className="text-lg text-slate-600">A secure, phased rollout to ensure zero disruption to your daily business operations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Process Audit", desc: "Identifying bottlenecks and calculating ROI for automation." },
              { step: "02", title: "Logic Design", desc: "Mapping edge cases and data transformation rules." },
              { step: "03", title: "API Integration", desc: "Connecting systems securely via tokens and webhooks." },
              { step: "04", title: "Sandbox Testing", desc: "Running dry-fire tests without affecting live production data." },
              { step: "05", title: "Go Live & Monitor", desc: "Activating the workflow with real-time error alerts." }
            ].map((process, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-cyan-400 transition-colors relative overflow-hidden group">
                <div className="text-sm font-black text-cyan-600 mb-3 uppercase tracking-wider">{process.step}</div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{process.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. EFFICIENCY BENEFITS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">The Business Impact</h2>
          <p className="text-lg text-slate-600">Automation provides immediate, measurable ROI by reclaiming thousands of wasted hours.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           <div className="space-y-4 p-8 bg-slate-50 rounded-3xl border border-slate-100">
             <Clock className="text-cyan-600 w-10 h-10" />
             <h4 className="font-bold text-slate-900 text-lg">Hours Reclaimed</h4>
             <p className="text-slate-600 text-sm">Save your team 20+ hours a week on repetitive administrative tasks.</p>
           </div>
           <div className="space-y-4 p-8 bg-slate-50 rounded-3xl border border-slate-100">
             <AlertCircle className="text-cyan-600 w-10 h-10" />
             <h4 className="font-bold text-slate-900 text-lg">Zero Errors</h4>
             <p className="text-slate-600 text-sm">Eliminate costly typos, misrouted data, and compliance slip-ups permanently.</p>
           </div>
           <div className="space-y-4 p-8 bg-slate-50 rounded-3xl border border-slate-100">
             <TrendingUp className="text-cyan-600 w-10 h-10" />
             <h4 className="font-bold text-slate-900 text-lg">Linear Scaling</h4>
             <p className="text-slate-600 text-sm">Double your transaction volume without needing to double your back-office staff.</p>
           </div>
           <div className="space-y-4 p-8 bg-slate-50 rounded-3xl border border-slate-100">
             <Zap className="text-cyan-600 w-10 h-10" />
             <h4 className="font-bold text-slate-900 text-lg">Instant Processing</h4>
             <p className="text-slate-600 text-sm">Reduce response and approval times from days to absolute milliseconds.</p>
           </div>
        </div>
      </section>

      {/* 9. CASE EXAMPLES */}
      <section className="py-24 px-6 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Automation Success Stories</h2>
              <p className="text-slate-400 text-lg">Real-world examples of how we transformed manual bottlenecks into autonomous engines.</p>
            </div>
            <Link href="/case-studies" className="text-cyan-400 font-bold hover:text-cyan-300 flex items-center gap-2">
              View All Work <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "B2B E-commerce Fulfillment", desc: "Automated a multi-step workflow connecting Shopify, SAP ERP, and 3PL shipping APIs, reducing order processing time from 4 hours to 2 seconds.", tags: ["Custom Node.js Middleware", "REST APIs", "SAP"] },
              { title: "AI-Powered Invoice Processing", desc: "Implemented an AI agent to read unformatted PDF invoices via email, extract line items via OpenAI, and push to QuickBooks securely.", tags: ["OpenAI Vision", "n8n", "QuickBooks API"] },
            ].map((study, idx) => (
              <div key={idx} className="bg-slate-800 rounded-3xl p-8 md:p-10 border border-slate-700 hover:border-cyan-500/50 transition-all group cursor-pointer">
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tags.map(tag => <span key={tag} className="text-xs font-bold text-slate-300 bg-slate-700 px-3 py-1 rounded-full">{tag}</span>)}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">{study.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-8">{study.desc}</p>
                <span className="text-cyan-400 font-semibold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  Read Case Study <ArrowRight size={16} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA SECTION */}
      <section className="py-32 px-6 text-center max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">Stop Doing Robot Work.</h2>
        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Free your team to focus on high-value creative and strategic tasks. Let Uptimise IT engineer the intelligent automation layer your business needs to scale.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-10 py-5 bg-cyan-600 text-white font-bold rounded-xl shadow-xl shadow-cyan-600/20 hover:bg-cyan-700 hover:scale-105 transition-all text-lg">
            Start Your Project
          </Link>
          <Link href="/contact" className="px-10 py-5 bg-white border-2 border-slate-200 text-slate-800 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg">
            Book a Strategy Call
          </Link>
        </div>
      </section>

    </div>
  );
}