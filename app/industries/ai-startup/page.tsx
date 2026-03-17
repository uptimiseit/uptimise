import React from "react";
import Link from "next/link";
import { 
  Bot, Rocket, ShieldAlert, Coins, 
  Clock, ArrowRight, BrainCircuit, Zap, 
  CheckCircle2, Network, Cpu, Code2,
  ArrowUpRight, Database, Layers, Sparkles
} from "lucide-react";

export default function AIStartupsIndustryPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-violet-500/30 pb-20 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8">
        {/* Deep Tech Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-600/20 blur-[150px] rounded-full -z-10 pointer-events-none"></div>
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-cyan-400/10 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-violet-500/30 text-violet-400 text-sm font-bold tracking-wide uppercase mb-4 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
          <Sparkles size={16} /> For Founders & VCs
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-tight">
          Engineer Your AI Startup <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">At Venture Speed</span>
        </h1>
        
        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Don't burn your runway trying to hire prompt engineers. Uptimise IT partners with ambitious founders to design, build, and scale AI-native products—from rapid MVPs to enterprise-grade autonomous agents.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-8 py-4 bg-violet-600 text-white font-bold rounded-xl shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:bg-violet-500 hover:scale-105 transition-all text-lg">
            Build Your AI MVP
          </Link>
          <Link href="/contact" className="px-8 py-4 bg-slate-900 border border-slate-700 text-white font-bold rounded-xl hover:border-slate-600 hover:bg-slate-800 transition-all text-lg flex items-center justify-center gap-2">
            Talk to an AI Architect <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* 2. STARTUP CHALLENGES */}
      <section className="py-24 px-6 border-y border-slate-800/50 bg-slate-900/20">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">The Risks of Building AI</h2>
            <p className="text-lg text-slate-400">The AI landscape changes weekly. Building a product without a scalable foundation guarantees you will be outpaced by competitors or crushed by infrastructure costs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Runway Burn", desc: "Spending 6 months building a complex LLM wrapper means you might run out of cash before achieving Product-Market Fit.", icon: <Clock className="text-red-400 w-8 h-8" /> },
              { title: "Spiraling Token Costs", desc: "Inefficient prompting and lack of semantic caching can cause your OpenAI or Anthropic API bills to wipe out your gross margins.", icon: <Coins className="text-red-400 w-8 h-8" /> },
              { title: "Model Hallucinations", desc: "If your AI gives confident but incorrect answers, your early early adopters will instantly lose trust and churn.", icon: <ShieldAlert className="text-red-400 w-8 h-8" /> }
            ].map((challenge, idx) => (
              <div key={idx} className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-sm hover:border-red-900/50 transition-colors">
                <div className="mb-6 bg-red-500/10 w-16 h-16 rounded-2xl flex items-center justify-center border border-red-500/20">{challenge.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{challenge.title}</h3>
                <p className="text-slate-400 leading-relaxed">{challenge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. AI ARCHITECTURE STRATEGY */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-violet-400 font-bold tracking-widest uppercase text-sm">Strategic Foundation</h3>
            <h2 className="text-4xl font-bold tracking-tight text-white leading-tight">
              Deterministic Engineering for Probabilistic Models
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              We don't just "plug into the OpenAI API." We build robust engineering wrappers around LLMs to ensure your application is fast, cost-efficient, and factually grounded.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Advanced RAG (Retrieval-Augmented Generation) pipelines.",
                "Semantic caching layers to drop API costs by up to 60%.",
                "Model routing (switching between fast and smart models dynamically).",
                "Strict output parsers to ensure structured JSON responses."
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-300 font-medium text-lg">
                  <CheckCircle2 className="text-violet-500 w-6 h-6 mr-3 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-slate-900 p-8 md:p-12 rounded-[3rem] border border-slate-800 shadow-2xl relative overflow-hidden">
             {/* Abstract RAG Pipeline CSS Graphic */}
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
             <h3 className="text-2xl font-bold text-white mb-8 relative z-10 flex items-center gap-3">
               <Database className="text-cyan-400" /> RAG Architecture
             </h3>
             <div className="space-y-4 relative z-10 flex flex-col items-center">
               <div className="bg-slate-800 border border-slate-700 p-4 rounded-xl w-full flex justify-between items-center">
                 <span className="text-white font-bold">User Query</span>
                 <ArrowRight className="text-slate-500" />
               </div>
               
               <div className="flex w-full gap-4">
                 <div className="flex-1 bg-violet-900/30 border border-violet-500/50 p-4 rounded-xl text-center shadow-[0_0_20px_rgba(139,92,246,0.15)] relative">
                   <div className="absolute -top-1 -right-1 w-3 h-3 bg-violet-400 rounded-full animate-ping"></div>
                   <Network className="w-6 h-6 text-violet-400 mx-auto mb-2" />
                   <p className="text-xs text-violet-200 font-bold uppercase">Vector DB (Pinecone)</p>
                 </div>
                 <div className="flex flex-col justify-center text-slate-500"><ArrowRight /></div>
                 <div className="flex-1 bg-cyan-900/30 border border-cyan-500/50 p-4 rounded-xl text-center shadow-[0_0_20px_rgba(6,182,212,0.15)]">
                   <BrainCircuit className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                   <p className="text-xs text-cyan-200 font-bold uppercase">LLM (GPT-4o)</p>
                 </div>
               </div>

               <div className="bg-emerald-900/20 border border-emerald-500/30 p-4 rounded-xl w-full flex items-center gap-3">
                 <CheckCircle2 className="text-emerald-400" />
                 <div>
                   <p className="text-white font-bold text-sm">Grounded Response</p>
                   <p className="text-xs text-emerald-200/70">Zero hallucinations. 100% accurate context.</p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. AI PLATFORMS WE BUILD */}
      <section className="py-24 px-6 border-y border-slate-800/50 bg-slate-900/20">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-white">AI Products We Engineer</h2>
            <p className="text-lg text-slate-400">Whether you are building a simple wrapper to validate an idea or a complex multi-agent system, we have the stack to execute it.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "B2B AI Copilots", icon: <Bot size={28} />, desc: "Intelligent assistants embedded directly into enterprise SaaS tools to supercharge user workflows." },
              { title: "Generative Workspaces", icon: <Sparkles size={28} />, desc: "Platforms like Jasper or Notion AI that generate text, code, or images based on specialized fine-tuning." },
              { title: "Autonomous Agents", icon: <Cpu size={28} />, desc: "Multi-agent ecosystems that scrape the web, execute code, and perform complex tasks autonomously." },
              { title: "Semantic Search Engines", icon: <Database size={28} />, desc: "Internal tools for enterprises that allow users to 'chat' with thousands of internal PDF and Word documents." }
            ].map((prod, idx) => (
              <div key={idx} className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-violet-500 transition-colors group">
                <div className="text-violet-400 mb-6 bg-violet-950/50 w-14 h-14 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform border border-violet-900">{prod.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{prod.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{prod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. AI TECHNOLOGY STACK */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-slate-900 border border-slate-800 rounded-[3rem] p-8 md:p-16 shadow-2xl flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-white">The Modern AI Stack</h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              We build using the exact same foundation models and orchestration tools used by the fastest-growing AI unicorns in Silicon Valley.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["Next.js", "Python", "OpenAI", "Anthropic", "LangChain", "Pinecone", "Vercel AI SDK", "Supabase"].map(tech => (
                <span key={tech} className="px-4 py-2 bg-slate-950 text-violet-300 font-bold rounded-lg text-sm border border-violet-900/50 hover:bg-violet-900 hover:text-white transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full grid grid-cols-2 gap-4">
             <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-center"><h4 className="text-cyan-400 font-bold mb-2">Foundation Models</h4><p className="text-slate-500 text-sm">GPT-4o, Claude 3.5, Llama 3</p></div>
             <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-center"><h4 className="text-cyan-400 font-bold mb-2">Vector Databases</h4><p className="text-slate-500 text-sm">Pinecone, Qdrant, pgvector</p></div>
             <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-center"><h4 className="text-cyan-400 font-bold mb-2">Orchestration</h4><p className="text-slate-500 text-sm">LangChain, AutoGen, LlamaIndex</p></div>
             <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-center"><h4 className="text-cyan-400 font-bold mb-2">App Infrastructure</h4><p className="text-slate-500 text-sm">Next.js, Vercel, Node.js</p></div>
          </div>
        </div>
      </section>

      {/* 6. AI SOFTWARE FACTORY ACCELERATION */}
      <section className="py-24 px-6 relative overflow-hidden border-y border-slate-800/50 bg-[#020617]">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-bold tracking-wide uppercase">
              <Zap size={16} /> Velocity Engineering
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Build AI with the <span className="text-cyan-400">AI Factory</span>
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              We don't just build AI apps; we use AI to build them. Uptimise IT leverages a proprietary AI Software Factory that utilizes autonomous coding agents to scaffold your infrastructure and write boilerplate 40% faster.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Drastically reduced runway burn for early-stage founders.",
                "Automated CI/CD and Docker container scaffolding.",
                "Rapid MVP iterations deployed in weeks, not months."
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-300 font-medium">
                  <CheckCircle2 className="text-cyan-500 w-5 h-5 mr-3 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 w-full bg-slate-900 border border-slate-800 p-8 rounded-[2rem] shadow-[0_0_40px_rgba(6,182,212,0.15)] flex items-center justify-center min-h-[300px] relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600/10 to-violet-600/10 blur-xl rounded-[2rem]"></div>
             <div className="text-center relative z-10">
                <Rocket className="w-16 h-16 text-cyan-400 mx-auto mb-4 animate-bounce" />
                <h3 className="text-2xl font-bold text-white">MVP Delivery Time</h3>
                <div className="flex items-center justify-center gap-4 mt-4">
                  <div className="text-slate-500 line-through text-lg">4-6 Months</div>
                  <ArrowRight className="text-slate-600" />
                  <div className="text-cyan-400 font-black text-2xl">4-6 Weeks</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 7. DEVELOPMENT PROCESS */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-white">The AI Delivery Protocol</h2>
          <p className="text-lg text-slate-400">A lean, ruthless framework designed to prove your product's value to users and investors as quickly as possible.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { step: "01", title: "Discovery", desc: "Defining the exact LLM use case and mapping required context data." },
            { step: "02", title: "Prototyping", desc: "Testing raw system prompts in OpenAI playgrounds to validate feasibility." },
            { step: "03", title: "Architecture", desc: "Building the Next.js frontend and engineering the Python/Node RAG backend." },
            { step: "04", title: "Evaluation", desc: "Running automated 'Eval' frameworks to score response accuracy and tone." },
            { step: "05", title: "Launch", desc: "Deploying to Vercel/AWS with token tracking and cost analytics." }
          ].map((process, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-violet-500 transition-colors relative overflow-hidden group">
               <div className="text-sm font-black text-violet-500 mb-3 uppercase tracking-wider">Phase {process.step}</div>
               <h4 className="text-lg font-bold text-white mb-2">{process.title}</h4>
               <p className="text-sm text-slate-400 leading-relaxed">{process.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. STARTUP SUCCESS BENEFITS */}
      <section className="py-24 px-6 border-y border-slate-800/50 bg-slate-900/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-sm text-center">
            <div className="w-16 h-16 mx-auto bg-violet-900/30 text-violet-400 rounded-full flex items-center justify-center mb-6 border border-violet-500/30"><Code2 size={32} /></div>
            <h3 className="text-xl font-bold text-white mb-3">Investor-Ready Code</h3>
            <p className="text-slate-400">Pass VC technical due diligence with scalable, well-documented architecture that proves your team can execute.</p>
          </div>
          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-sm text-center">
            <div className="w-16 h-16 mx-auto bg-cyan-900/30 text-cyan-400 rounded-full flex items-center justify-center mb-6 border border-cyan-500/30"><Coins size={32} /></div>
            <h3 className="text-xl font-bold text-white mb-3">Cost Optimization</h3>
            <p className="text-slate-400">Semantic caching and strategic model routing ensure your platform remains profitable even under heavy user load.</p>
          </div>
          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-sm text-center">
            <div className="w-16 h-16 mx-auto bg-emerald-900/30 text-emerald-400 rounded-full flex items-center justify-center mb-6 border border-emerald-500/30"><Layers size={32} /></div>
            <h3 className="text-xl font-bold text-white mb-3">Model Independence</h3>
            <p className="text-slate-400">We architect LLM wrappers so you can swap OpenAI for Anthropic or Llama instantly if pricing or performance shifts.</p>
          </div>
        </div>
      </section>

      {/* 9. CASE STUDIES */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Startup Success Stories</h2>
            <p className="text-slate-400 text-lg">See how we have engineered scalable AI products for visionary founders.</p>
          </div>
          <Link href="/case-studies" className="text-violet-400 font-bold hover:text-violet-300 flex items-center gap-2">
            View AI Portfolio <ArrowRight size={18} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "B2B Legal AI Copilot", desc: "Engineered a RAG-based document analysis tool for law firms, reducing contract review time by 80% and helping the founders secure a $2M Seed round.", tags: ["Next.js", "Pinecone", "Claude 3"] },
            { title: "AI Marketing Content Engine", desc: "Built a generative platform handling 50k+ daily API requests, utilizing semantic caching to reduce the startup's OpenAI bill by 45%.", tags: ["React", "OpenAI", "LangChain"] },
          ].map((study, idx) => (
            <div key={idx} className="bg-slate-900 rounded-3xl p-8 md:p-10 border border-slate-800 hover:border-violet-500/50 transition-all group cursor-pointer">
              <div className="flex gap-2 mb-6">
                {study.tags.map(tag => <span key={tag} className="text-xs font-bold text-violet-300 bg-violet-900/30 px-3 py-1 rounded-full border border-violet-500/30">{tag}</span>)}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-violet-400 transition-colors">{study.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-8">{study.desc}</p>
              <span className="text-violet-400 font-semibold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                Read Technical Case Study <ArrowRight size={16} />
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 10. CTA SECTION */}
      <section className="py-32 px-6 text-center max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">Launch Before Your Competitors Do.</h2>
        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
          The AI market moves too fast for traditional development cycles. Partner with Uptimise IT to architect and launch your AI startup at venture speed.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-10 py-5 bg-violet-600 text-white font-bold rounded-xl shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:bg-violet-500 hover:scale-105 transition-all text-lg">
            Build Your AI Product
          </Link>
          <Link href="/contact" className="px-10 py-5 bg-slate-900 border border-slate-700 text-white font-bold rounded-xl hover:border-slate-600 hover:bg-slate-800 transition-all text-lg">
            Calculate MVP Cost
          </Link>
        </div>
      </section>

    </div>
  );
}