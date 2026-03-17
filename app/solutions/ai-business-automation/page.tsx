import React from "react";
import Link from "next/link";
import { 
  BrainCircuit, Zap, AlertTriangle, TrendingUp, 
  Workflow, Network, FileText, Bot, ArrowRight, 
  CheckCircle2, Database, ShieldCheck, LineChart, 
  Clock, ArrowUpRight, Cog, Layers, Users
} from "lucide-react";

export default function AIBusinessAutomationPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-amber-200 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8 overflow-hidden">
        {/* Ambient AI & Wealth Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-50 blur-[120px] rounded-full -z-10"></div>
        <div className="absolute top-20 left-1/4 w-[400px] h-[300px] bg-amber-50/50 blur-[100px] rounded-full -z-10"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-bold tracking-wide uppercase mb-4">
          <BrainCircuit size={16} /> Cognitive Automation
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight">
          Give Your Business a <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-amber-500">Cognitive Engine</span>
        </h1>
        
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Standard automation only handles predictable tasks. We engineer AI-driven autonomous systems that can read unstructured documents, make complex decisions, and execute business operations 24/7.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 hover:scale-105 transition-all text-lg">
            Automate My Operations
          </Link>
          <Link href="/contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg flex items-center justify-center gap-2">
            Calculate AI ROI <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* 2. OPERATIONAL CHALLENGES */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">The Limits of Human Scale</h2>
            <p className="text-lg text-slate-600">Your operations team is drowning in unstructured data—emails, PDFs, and customer requests. Throwing more humans at the problem destroys your profit margins.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Unstructured Data Chaos", desc: "Invoices, contracts, and support tickets don't follow neat rules. Traditional software cannot process them without manual human data entry.", icon: <FileText className="text-red-500 w-8 h-8" /> },
              { title: "Decision Bottlenecks", desc: "Workflows pause for hours or days waiting for a manager to review a document, approve a refund, or categorize an issue.", icon: <Clock className="text-red-500 w-8 h-8" /> },
              { title: "Cost of Scaling", desc: "When transaction volume doubles, back-office headcount must double. This linear scaling model prevents hyper-growth.", icon: <TrendingUp className="text-red-500 w-8 h-8" /> }
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

      {/* 3. AUTOMATION STRATEGY */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-indigo-600 font-bold tracking-widest uppercase text-sm">Our AI Strategy</h3>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Injecting Cognition into Operations
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We deploy Large Language Models (LLMs) and computer vision as the "brain" between your existing software systems. These agents read, interpret, decide, and route data securely.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Identify high-volume, low-judgment manual tasks.",
                "Deploy secure, private LLMs to interpret unstructured data.",
                "Establish deterministic guardrails to prevent AI hallucinations.",
                "Integrate the AI agent directly into your ERP or CRM."
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-800 font-semibold text-lg">
                  <CheckCircle2 className="text-indigo-500 w-6 h-6 mr-3 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-slate-900 p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden border border-indigo-900">
             {/* Abstract AI Brain Workflow CSS */}
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
             <h3 className="text-2xl font-bold text-white mb-8 relative z-10 flex items-center gap-3">
               <Cog className="text-amber-400 animate-spin-slow" /> The Cognitive Layer
             </h3>
             <div className="space-y-6 relative z-10">
               {/* Input */}
               <div className="flex items-center gap-4 text-slate-300 bg-slate-800 p-4 rounded-xl border border-slate-700">
                 <FileText className="text-slate-400" />
                 <div><span className="font-bold block text-white">Unstructured Input</span><span className="text-sm">Messy vendor email + PDF invoice attached.</span></div>
               </div>
               
               {/* AI Brain Processing */}
               <div className="flex flex-col items-center justify-center">
                 <div className="w-0.5 h-6 bg-indigo-500"></div>
                 <div className="bg-indigo-500/20 border border-indigo-500/50 p-6 rounded-2xl text-center w-full shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                   <BrainCircuit className="w-10 h-10 text-indigo-400 mx-auto mb-2 animate-pulse" />
                   <span className="font-bold text-indigo-300 block">AI Reasoning Agent</span>
                   <span className="text-xs text-indigo-200/70">Extracts PO#, validates totals, matches to vendor ID.</span>
                 </div>
                 <div className="w-0.5 h-6 bg-amber-500"></div>
               </div>

               {/* Output */}
               <div className="flex items-center gap-4 text-slate-300 bg-slate-800 p-4 rounded-xl border border-amber-500/30">
                 <Database className="text-amber-400" />
                 <div><span className="font-bold block text-white">Structured Execution</span><span className="text-sm">API call to QuickBooks: Log invoice, flag for payment.</span></div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. AI SYSTEMS WE BUILD */}
      <section className="py-24 px-6 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-white">AI Systems We Build</h2>
            <p className="text-lg text-slate-400">We replace entire departments of manual data entry with tireless, highly accurate digital workers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Intelligent Document Processing (IDP)", desc: "AI agents that read 100-page legal contracts, tax forms, or medical records, extracting exact clauses and data points in seconds.", icon: <FileText size={28} /> },
              { title: "Cognitive Customer Support", desc: "Autonomous agents that don't just answer FAQs, but actually access your database to process refunds, update shipping, and resolve tickets.", icon: <Users size={28} /> },
              { title: "Automated Financial Reconciliation", desc: "AI that cross-references hundreds of bank statements against ERP ledgers to find discrepancies and flag anomalies instantly.", icon: <LineChart size={28} /> },
              { title: "Predictive Supply Chain Routing", desc: "Machine learning models that analyze weather, traffic, and vendor data to dynamically reroute inventory before disruptions happen.", icon: <Network size={28} /> }
            ].map((sys, idx) => (
              <div key={idx} className="bg-slate-800 p-8 md:p-10 rounded-3xl border border-slate-700 hover:border-indigo-500 transition-colors group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-indigo-500/20 text-indigo-400 rounded-xl flex items-center justify-center group-hover:bg-indigo-500 group-hover:text-white transition-colors border border-indigo-500/30">
                    {sys.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{sys.title}</h3>
                </div>
                <p className="text-slate-400 leading-relaxed">{sys.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. AUTOMATION TOOLS (AI Stack) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-[3rem] p-8 md:p-16 shadow-xl shadow-slate-100 flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">The Enterprise AI Stack</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We build on the most advanced, secure foundation models and orchestration layers to ensure your AI agents operate with deterministic accuracy.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["OpenAI GPT-4o", "Anthropic Claude 3.5", "Google Gemini", "LangChain", "LlamaIndex", "Pinecone Vector DB", "AWS Bedrock"].map(tech => (
                <span key={tech} className="px-4 py-2 bg-slate-100 text-slate-800 font-bold rounded-lg text-sm border border-slate-200 hover:border-indigo-400 transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full grid grid-cols-2 gap-4">
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-indigo-600 font-bold mb-2">Reasoning Engines</h4><p className="text-slate-600 text-sm">GPT-4, Claude 3</p></div>
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-indigo-600 font-bold mb-2">Memory & Context</h4><p className="text-slate-600 text-sm">Vector Databases (RAG)</p></div>
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-indigo-600 font-bold mb-2">Orchestration</h4><p className="text-slate-600 text-sm">LangChain, AutoGen</p></div>
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-indigo-600 font-bold mb-2">Vision & OCR</h4><p className="text-slate-600 text-sm">AWS Textract, GPT Vision</p></div>
          </div>
        </div>
      </section>

      {/* 6. INTEGRATION PLATFORMS */}
      <section className="py-24 px-6 bg-[#0B0F19] text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Seamless Ecosystem Integration</h2>
            <p className="text-lg text-slate-400">An AI brain is useless if it has no hands. We connect your custom AI agents directly into your existing enterprise software via custom APIs and iPaaS platforms.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {["Custom Node.js/Python Middleware", "Salesforce", "SAP / Oracle", "NetSuite", "Workato", "Zapier Enterprise", "n8n", "Zendesk API"].map(tech => (
              <span key={tech} className="px-6 py-3 bg-slate-800 border border-slate-700 shadow-sm rounded-xl text-slate-300 font-bold hover:border-amber-400 hover:text-amber-300 transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 7. IMPLEMENTATION PROCESS */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">Safe AI Implementation</h2>
            <p className="text-lg text-slate-600">A rigorous deployment protocol designed to eliminate hallucinations and ensure absolute data security.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Process Audit", desc: "Identifying high-volume manual tasks prime for AI disruption." },
              { step: "02", title: "Data Structuring", desc: "Cleaning and vectorizing your private enterprise data for RAG." },
              { step: "03", title: "Prompt Eng.", desc: "Crafting deterministic system prompts and guardrails." },
              { step: "04", title: "Shadow Mode", desc: "Running the AI passively alongside humans to verify accuracy." },
              { step: "05", title: "Deployment", desc: "Live API integration with active human-in-the-loop fallback." }
            ].map((process, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-indigo-400 transition-colors relative overflow-hidden group">
                <div className="text-sm font-black text-indigo-600 mb-3 uppercase tracking-wider">{process.step}</div>
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
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">The ROI of Cognitive Automation</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           <div className="space-y-4 p-8 bg-slate-50 rounded-3xl border border-slate-100">
             <Clock className="text-amber-500 w-10 h-10" />
             <h4 className="font-bold text-slate-900 text-lg">Instant Processing</h4>
             <p className="text-slate-600 text-sm">Tasks that took employees 45 minutes are executed by AI in under 3 seconds.</p>
           </div>
           <div className="space-y-4 p-8 bg-slate-50 rounded-3xl border border-slate-100">
             <TrendingUp className="text-amber-500 w-10 h-10" />
             <h4 className="font-bold text-slate-900 text-lg">Infinite Scalability</h4>
             <p className="text-slate-600 text-sm">Process 10 invoices or 10,000 invoices a day without hiring a single new employee.</p>
           </div>
           <div className="space-y-4 p-8 bg-slate-50 rounded-3xl border border-slate-100">
             <AlertTriangle className="text-amber-500 w-10 h-10" />
             <h4 className="font-bold text-slate-900 text-lg">Zero Human Error</h4>
             <p className="text-slate-600 text-sm">Eliminate typos, copy-paste errors, and forgotten emails permanently.</p>
           </div>
           <div className="space-y-4 p-8 bg-slate-50 rounded-3xl border border-slate-100">
             <ShieldCheck className="text-amber-500 w-10 h-10" />
             <h4 className="font-bold text-slate-900 text-lg">24/7 Operations</h4>
             <p className="text-slate-600 text-sm">Your business operations no longer stop at 5:00 PM or pause for weekends.</p>
           </div>
        </div>
      </section>

      {/* 9. BUSINESS USE CASES */}
      <section className="py-24 px-6 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">AI Automation in Action</h2>
              <p className="text-slate-400 text-lg">Real-world examples of how we transformed manual bottlenecks into cognitive engines.</p>
            </div>
            <Link href="/case-studies" className="text-indigo-400 font-bold hover:text-indigo-300 flex items-center gap-2">
              View All Work <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Legal Contract Analysis", desc: "Built an LLM agent that scans incoming 50-page vendor contracts, extracts 14 specific risk clauses, and flags anomalies to the legal team instantly.", tags: ["RAG", "Claude 3.5", "Document Parsing"] },
              { title: "Autonomous Email Triage", desc: "Deployed an AI system to read 2,000+ daily support emails, determine user intent, verify account status in the DB, and auto-draft resolutions.", tags: ["OpenAI", "Zendesk API", "Python Middleware"] },
            ].map((study, idx) => (
              <div key={idx} className="bg-slate-800 rounded-3xl p-8 md:p-10 border border-slate-700 hover:border-indigo-500/50 transition-all group cursor-pointer">
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tags.map(tag => <span key={tag} className="text-xs font-bold text-indigo-300 bg-indigo-900/30 px-3 py-1 rounded-full border border-indigo-500/30">{tag}</span>)}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-indigo-400 transition-colors">{study.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-8">{study.desc}</p>
                <span className="text-indigo-400 font-semibold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  Read Case Study <ArrowRight size={16} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA SECTION */}
      <section className="py-32 px-6 text-center max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">Hire a Digital Workforce.</h2>
        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Free your most expensive human talent to focus on strategy and creativity. Let Uptimise IT build the AI agents that run the rest of your business.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-10 py-5 bg-indigo-600 text-white font-bold rounded-xl shadow-xl shadow-indigo-600/20 hover:bg-indigo-700 hover:scale-105 transition-all text-lg">
            Discuss AI Integration
          </Link>
          <Link href="/contact" className="px-10 py-5 bg-white border-2 border-slate-200 text-slate-800 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg">
            Request Process Audit
          </Link>
        </div>
      </section>

    </div>
  );
}