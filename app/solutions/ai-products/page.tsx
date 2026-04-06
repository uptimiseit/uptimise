import React from "react";
import Link from "next/link";
import { 
  Bot, BrainCircuit, Database, ShieldAlert, Zap, Network, 
  Cpu, ArrowRight, Lock, LineChart, Code2, Layers, 
  CheckCircle2, Activity, Lightbulb,
  Layout
} from "lucide-react";

export default function AIProductDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-purple-100 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8 overflow-hidden">
        {/* Ambient AI Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-50 blur-[120px] rounded-full -z-10"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-sm font-bold tracking-wide uppercase mb-4">
          <BrainCircuit size={16} /> Generative AI & Agentic Systems
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight">
          Engineering Next-Generation <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500">AI Products</span>
        </h1>
        
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Transform your business with intelligent software. We design, train, and deploy secure AI products—from custom LLM wrappers and RAG pipelines to fully autonomous agentic workflows.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-8 py-4 bg-purple-600 text-white font-bold rounded-xl shadow-lg shadow-purple-600/20 hover:bg-purple-700 hover:scale-105 transition-all text-lg">
            Discuss Your AI Vision
          </Link>
          <Link href="/contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg">
            Explore Capabilities
          </Link>
        </div>
      </section>

      {/* 2. AI PRODUCT CHALLENGES */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">The Complexities of Production AI</h2>
            <p className="text-lg text-slate-600">Building a demo is easy. Deploying production-ready AI that is secure, accurate, and cost-effective requires deep engineering discipline.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "LLM Hallucinations", desc: "Unconstrained models invent facts. Without proper grounding and prompt engineering, AI destroys user trust.", icon: <Activity className="text-red-500 w-8 h-8" /> },
              { title: "Data Privacy & Security", desc: "Sending sensitive enterprise data to public APIs can violate compliance. Secure data isolation is critical.", icon: <ShieldAlert className="text-red-500 w-8 h-8" /> },
              { title: "API Cost Scaling", desc: "Inefficient token usage and poor caching strategies can cause AI infrastructure bills to spiral out of control.", icon: <LineChart className="text-red-500 w-8 h-8" /> }
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

      {/* 3. AI PRODUCT ENGINEERING APPROACH */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-purple-600 font-bold tracking-widest uppercase text-sm">Engineering Philosophy</h3>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Deterministic Results from Probabilistic Models
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We tame large language models by surrounding them with rigid engineering frameworks. We don't just rely on the model's baseline knowledge; we inject your proprietary enterprise data securely.
            </p>
            <div className="space-y-6 pt-4">
              <div className="flex gap-4">
                <Database className="text-purple-600 shrink-0 w-8 h-8" />
                <div>
                  <h4 className="font-bold text-slate-900">RAG (Retrieval-Augmented Generation)</h4>
                  <p className="text-slate-600 text-sm mt-1">Grounding AI responses in your private vector databases to ensure absolute factual accuracy.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Lock className="text-purple-600 shrink-0 w-8 h-8" />
                <div>
                  <h4 className="font-bold text-slate-900">Strict Output Guardrails</h4>
                  <p className="text-slate-600 text-sm mt-1">Implementing validation layers to intercept and format AI outputs before they ever reach the user.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-purple-50 p-8 md:p-12 rounded-[3rem] border border-purple-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10"><BrainCircuit size={200} /></div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 relative z-10">Our AI Architecture</h3>
            <ul className="space-y-4 relative z-10">
              {["Custom System Prompts", "Vector Embeddings & Semantic Search", "Semantic Caching for Speed", "Model Fine-Tuning Pipeline"].map((item, i) => (
                <li key={i} className="flex items-center text-purple-900 font-medium bg-white px-5 py-3 rounded-xl shadow-sm border border-purple-100">
                  <CheckCircle2 className="text-purple-500 w-5 h-5 mr-3 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. AI SOLUTIONS WE BUILD */}
      <section className="py-24 px-6 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-white">AI Solutions We Build</h2>
            <p className="text-lg text-slate-400">From internal operational tools to user-facing SaaS platforms, we architect AI solutions that drive measurable business value.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Custom LLM SaaS", icon: <Layout size={28} />, desc: "Monetize AI with beautifully designed, multi-tenant subscription platforms." },
              { title: "Enterprise Knowledge Bots", icon: <Bot size={28} />, desc: "Internal RAG chatbots that instantly query your secure company documents." },
              { title: "Autonomous Agents", icon: <Network size={28} />, desc: "Multi-agent systems that execute complex, multi-step workflows without human input." },
              { title: "Predictive Analytics", icon: <LineChart size={28} />, desc: "Machine learning models forecasting trends, churn, and financial data." }
            ].map((prod, idx) => (
              <div key={idx} className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-purple-500 transition-colors group">
                <div className="text-purple-400 mb-6 group-hover:scale-110 transition-transform">{prod.icon}</div>
                <h3 className="text-xl font-bold mb-3">{prod.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{prod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. AI TECHNOLOGY STACK */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-[3rem] p-8 md:p-16 shadow-xl shadow-slate-100 flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">The Modern AI Stack</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We are framework agnostic. We select the absolute best foundation models, orchestration layers, and vector databases required for your specific use case.
            </p>
          </div>
          <div className="flex-1 w-full grid grid-cols-2 gap-4">
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
              <h4 className="text-purple-600 font-bold mb-4 uppercase tracking-wider text-sm">Foundation Models</h4>
              <ul className="space-y-2 text-slate-700 font-medium">
                <li>OpenAI (GPT-4)</li><li>Anthropic (Claude 3)</li><li>Meta Llama 3</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
              <h4 className="text-purple-600 font-bold mb-4 uppercase tracking-wider text-sm">Orchestration</h4>
              <ul className="space-y-2 text-slate-700 font-medium">
                <li>LangChain</li><li>LlamaIndex</li><li>AutoGen</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
              <h4 className="text-purple-600 font-bold mb-4 uppercase tracking-wider text-sm">Vector DBs</h4>
              <ul className="space-y-2 text-slate-700 font-medium">
                <li>Pinecone</li><li>Qdrant</li><li>pgvector (PostgreSQL)</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
              <h4 className="text-purple-600 font-bold mb-4 uppercase tracking-wider text-sm">Infrastructure</h4>
              <ul className="space-y-2 text-slate-700 font-medium">
                <li>AWS Bedrock</li><li>Vercel AI SDK</li><li>Hugging Face</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. AI AGENTS & AUTOMATION */}
      <section className="py-24 px-6 bg-[#0B0F19] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-bold tracking-wide uppercase">
              <Network size={16} /> Autonomous Ecosystems
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Beyond Chatbots: <span className="text-purple-500">Agentic Workflows</span>
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              We build systems where AI doesn't just talk—it acts. We engineer autonomous agents capable of browsing the web, executing code, calling external APIs, and coordinating with other AI agents to complete complex business tasks end-to-end.
            </p>
          </div>
          <div className="flex-1 w-full bg-slate-800/50 border border-purple-500/30 p-8 rounded-[2rem] shadow-[0_0_40px_rgba(168,85,247,0.15)] relative">
             <div className="absolute top-4 right-4 animate-pulse"><Zap className="text-purple-400" /></div>
             <h4 className="text-white font-bold text-xl mb-6">Example Agent Swarm</h4>
             <div className="space-y-4 relative">
               <div className="flex items-center gap-4 bg-slate-900 p-4 rounded-xl border border-slate-700">
                 <div className="bg-blue-500/20 p-2 rounded-lg"><BrainCircuit className="text-blue-400" /></div>
                 <div><p className="text-white font-bold text-sm">Planner Agent</p><p className="text-slate-400 text-xs">Breaks down the user request.</p></div>
               </div>
               {/* Connector Line */}
               <div className="w-0.5 h-4 bg-slate-700 ml-8"></div>
               <div className="flex items-center gap-4 bg-slate-900 p-4 rounded-xl border border-slate-700">
                 <div className="bg-emerald-500/20 p-2 rounded-lg"><Code2 className="text-emerald-400" /></div>
                 <div><p className="text-white font-bold text-sm">Execution Agent</p><p className="text-slate-400 text-xs">Writes and runs Python code.</p></div>
               </div>
               {/* Connector Line */}
               <div className="w-0.5 h-4 bg-slate-700 ml-8"></div>
               <div className="flex items-center gap-4 bg-slate-900 p-4 rounded-xl border border-slate-700">
                 <div className="bg-orange-500/20 p-2 rounded-lg"><ShieldAlert className="text-orange-400" /></div>
                 <div><p className="text-white font-bold text-sm">Review Agent</p><p className="text-slate-400 text-xs">Verifies output for accuracy.</p></div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 7. DEVELOPMENT LIFECYCLE */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">AI Product Engineering Lifecycle</h2>
          <p className="text-lg text-slate-600">Our structured protocol for delivering safe, secure, and highly performant AI systems.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {[
            { step: "01", title: "Discovery & Data", desc: "Auditing your data sources and defining the exact AI use case." },
            { step: "02", title: "Model Selection", desc: "Choosing the optimal LLM based on cost, speed, and reasoning needs." },
            { step: "03", title: "Pipeline Build", desc: "Engineering the RAG architecture and prompt chains." },
            { step: "04", title: "Eval & Testing", desc: "Rigorous testing against edge cases and hallucination triggers." },
            { step: "05", title: "Deployment", desc: "Launching securely with token tracking and semantic caching." }
          ].map((process, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-purple-50 hover:border-purple-200 transition-colors relative overflow-hidden group">
              <div className="text-sm font-black text-purple-500 mb-4 tracking-widest uppercase">Step {process.step}</div>
              <h4 className="text-lg font-bold text-slate-900 mb-3">{process.title}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{process.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. BUSINESS BENEFITS */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="w-16 h-16 mx-auto bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6"><LineChart size={32} /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Hyper-Scale Operations</h3>
            <p className="text-slate-600">Execute tasks that normally require a 100-person team instantly, 24/7, with zero drop in quality.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="w-16 h-16 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6"><Zap size={32} /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Hyper-Personalization</h3>
            <p className="text-slate-600">Deliver dynamically tailored experiences and content to every single user based on real-time data analysis.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="w-16 h-16 mx-auto bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-6"><Layers size={32} /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">New Revenue Streams</h3>
            <p className="text-slate-600">Monetize your proprietary company data by exposing it securely through a premium AI SaaS wrapper.</p>
          </div>
        </div>
      </section>

      {/* 9. WHY UPTIMISE AI SYSTEMS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-purple-600 text-white rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl shadow-purple-600/20">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-extrabold tracking-tight">Why Uptimise For AI Engineering?</h2>
            <p className="text-purple-100 text-lg leading-relaxed">
              We aren't just jumping on the AI trend. We are core software engineers who understand how to integrate volatile AI models into stable, secure, and highly scalable enterprise infrastructure.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {[
              "Deep LLM & RAG Expertise",
              "Enterprise-Grade Security",
              "Framework Agnostic Approach",
              "Cost-Optimized Architecture"
            ].map((reason, i) => (
              <div key={i} className="bg-purple-700/50 border border-purple-500/50 p-4 rounded-xl flex items-center font-semibold text-white">
                <CheckCircle2 className="w-5 h-5 text-purple-300 mr-3 shrink-0" /> {reason}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA SECTION */}
      <section className="py-14 px-6 text-center max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">Ready to Build With AI?</h2>
        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          The future belongs to organizations that deploy AI efficiently. Let our elite engineering team architect your next intelligent product.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-10 py-5 bg-slate-900 text-white font-bold rounded-xl shadow-xl hover:bg-slate-800 hover:scale-105 transition-all text-lg">
            Book an AI Strategy Call
          </Link>
          <Link href="/contact" className="px-10 py-5 bg-white border-2 border-slate-200 text-slate-800 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg">
            Request an Estimate
          </Link>
        </div>
      </section>

    </div>
  );
}