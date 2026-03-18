"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, Star, Cpu, Code2, Layers, LineChart, 
  Bot, Zap, Building2, Landmark, GraduationCap, 
  HeartPulse, ShoppingCart, Rocket, ShieldCheck, 
  Terminal, Handshake, BookOpen, ArrowUpRight,
  Database, Network, Globe, CheckCircle2, ChevronRight,
  Sparkles, Video, MessageSquare, Quote
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FDFDFF] text-slate-900 font-sans selection:bg-indigo-200 overflow-hidden">
      
      {/* =========================================
          1. HERO SECTION
      ========================================= */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8">
        {/* Light Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-100 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-cyan-50 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-bold tracking-wide uppercase mb-4 shadow-sm">
          <Bot size={16} /> AI-Native Product Engineering
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight">
          Architecting Modern <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">Digital Platforms</span>
        </h1>
        
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          We help startups and enterprises design, build, and scale digital products using our AI Software Factory, modern engineering frameworks, and scalable cloud infrastructure.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 hover:scale-105 transition-all text-lg">
            Start Your Project
          </Link>
          <Link href="/solutions" className="px-8 py-4 bg-white border border-slate-200 text-slate-800 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg flex items-center justify-center gap-2 shadow-sm">
            Explore Solutions <ArrowRight size={18} />
          </Link>
        </div>

        {/* Abstract Hero Visual (Light Theme) */}
        <div className="pt-16 max-w-4xl mx-auto">
          <div className="h-48 md:h-64 rounded-t-3xl border-t border-x border-slate-200 bg-gradient-to-b from-slate-50 to-white relative flex items-end justify-center overflow-hidden shadow-2xl shadow-slate-200/50">
             <div className="absolute bottom-0 w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_rgba(6,182,212,0.5)]"></div>
             <div className="w-64 h-32 border border-slate-200 rounded-t-2xl bg-white flex flex-col items-center justify-center gap-2 relative shadow-lg">
               <Cpu className="text-indigo-600 animate-pulse" size={32} />
               <span className="text-xs font-mono text-slate-500 font-bold">AI_FACTORY_CORE_ACTIVE</span>
               <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-500 rounded-full animate-ping"></div>
             </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. CLIENT RATINGS & TRUST SIGNALS
      ========================================= */}
      <section className="py-12 border-y border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-8">
            Trusted by startups and enterprises building next-generation platforms
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Replace with actual logos in production */}
            <div className="flex items-center gap-2 font-bold text-2xl text-slate-800"><Star className="fill-current text-green-500"/> Trustpilot</div>
            <div className="flex items-center gap-2 font-bold text-2xl text-slate-800"><ShieldCheck className="text-blue-600"/> Clutch 4.9/5</div>
            <h3 className="font-black text-2xl tracking-tighter text-[#FF6600]">Y COMBINATOR<span className="text-xs align-top">®</span></h3>
            <h3 className="font-black text-2xl tracking-tighter text-[#00E676]">TECHSTARS</h3>
          </div>
        </div>
      </section>

      {/* =========================================
          3. TECHNOLOGIES WE WORK WITH
      ========================================= */}
      <section className="py-16 px-6 max-w-7xl mx-auto overflow-hidden">
         <div className="flex flex-wrap justify-center gap-4">
           {["Next.js", "React", "Node.js", "Python", "AWS", "Google Cloud", "Docker", "Kubernetes", "OpenAI", "PostgreSQL"].map(tech => (
             <span key={tech} className="px-5 py-2 bg-white border border-slate-200 text-slate-600 font-bold rounded-full text-sm hover:border-indigo-300 hover:text-indigo-600 transition-colors cursor-default shadow-sm">
               {tech}
             </span>
           ))}
         </div>
      </section>

      {/* =========================================
          4. WHAT WE DO (SERVICES OVERVIEW)
      ========================================= */}
      <section className="py-24 px-6 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">End-to-End Engineering</h2>
            <p className="text-slate-600 text-lg">We provide the complete technical infrastructure required to launch and scale category-defining digital products.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Software Development", icon: <Code2/>, desc: "Scalable web, mobile, and SaaS engineering." },
              { title: "Product Design", icon: <Layers/>, desc: "High-converting UI/UX and design systems." },
              { title: "DevOps & Cloud", icon: <Network/>, desc: "Resilient, auto-scaling infrastructure." },
              { title: "Digital Growth", icon: <LineChart/>, desc: "Programmatic SEO and acquisition engines." }
            ].map((srv, i) => (
              <Link href="#" key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:border-indigo-400 transition-all group hover:shadow-xl hover:bg-white">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-indigo-200">{srv.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{srv.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{srv.desc}</p>
                <span className="text-indigo-600 text-sm font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">Explore <ArrowRight size={14}/></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          5. AI SOFTWARE FACTORY
      ========================================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-cyan-600 font-bold tracking-widest uppercase text-sm">Our Core Differentiator</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              The AI Software Factory
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We don't build software manually anymore. By deploying autonomous AI agents to handle boilerplate code, database migrations, and QA testing, our senior architects deliver enterprise-grade platforms <strong className="text-slate-900">40% faster</strong>.
            </p>
            <ul className="space-y-3 pt-2">
              <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 className="text-cyan-500 w-5 h-5"/> Accelerated MVP delivery timelines.</li>
              <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 className="text-cyan-500 w-5 h-5"/> Automated security & vulnerability scanning.</li>
              <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 className="text-cyan-500 w-5 h-5"/> Zero vendor lock-in. Clean, readable codebase.</li>
            </ul>
          </div>
          <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-200/50 relative">
            <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-slate-200 mb-4 shadow-sm">
              <span className="text-slate-800 font-bold text-sm">Architect Blueprint</span>
              <ArrowRight className="text-slate-400"/>
            </div>
            <div className="bg-indigo-50 border border-indigo-100 p-6 rounded-xl text-center shadow-inner relative overflow-hidden mb-4">
              <div className="absolute inset-0 bg-indigo-500/5 animate-pulse"></div>
              <Bot className="w-8 h-8 text-indigo-600 mx-auto mb-2 relative z-10" />
              <p className="text-indigo-900 font-bold text-sm relative z-10">AI Scaffolding Agent</p>
              <p className="text-indigo-600 text-xs font-mono mt-1 relative z-10">Generating Next.js + Prisma Schema...</p>
            </div>
            <div className="flex justify-between items-center bg-emerald-50 border border-emerald-100 p-4 rounded-xl shadow-sm">
              <span className="text-emerald-700 font-bold text-sm flex items-center gap-2"><ShieldCheck size={16}/> Production Ready</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          6. PROJECTS WE CAN BUILD FOR YOU
      ========================================= */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Projects We Can Build For You</h2>
              <p className="text-slate-600 text-lg">Stop dreaming. Start deploying. We engineer high-stakes solutions across the entire digital spectrum.</p>
            </div>
            <Link href="/solutions" className="text-indigo-600 font-bold hover:text-indigo-700 flex items-center gap-2">
              Explore All Solutions <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "SaaS Platforms", "AI Applications", "Digital Marketplaces", 
              "Enterprise ERPs", "FinTech Dashboards", "E-Learning Portals"
            ].map((project, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between hover:border-indigo-400 hover:shadow-md transition-all group cursor-pointer">
                <span className="font-bold text-slate-800 group-hover:text-indigo-700 transition-colors">{project}</span>
                <ChevronRight className="text-slate-400 group-hover:text-indigo-600 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          7. INDUSTRIES SECTION
      ========================================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center space-y-16">
        <div className="space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Industries We Empower</h2>
          <p className="text-slate-600 text-lg">Deep domain expertise across highly regulated and hyper-growth sectors.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { name: "SaaS", icon: <Database size={16}/> },
            { name: "FinTech", icon: <Landmark size={16}/> },
            { name: "EdTech", icon: <GraduationCap size={16}/> },
            { name: "Healthcare", icon: <HeartPulse size={16}/> },
            { name: "E-commerce", icon: <ShoppingCart size={16}/> },
            { name: "AI Startups", icon: <Sparkles size={16}/> },
            { name: "Enterprise", icon: <Building2 size={16}/> }
          ].map((ind, i) => (
            <Link href={`/industries/${ind.name.toLowerCase()}`} key={i} className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-full text-slate-700 hover:border-indigo-400 hover:text-indigo-700 transition-all font-bold shadow-sm">
              <span className="text-indigo-500">{ind.icon}</span> {ind.name}
            </Link>
          ))}
        </div>
      </section>

      {/* =========================================
          8. HOW WE BUILD (PROCESS)
      ========================================= */}
      <section className="py-24 px-6 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Engineering Protocol</h2>
            <p className="text-slate-400 text-lg">A deterministic, math-driven approach to software delivery.</p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-700 -z-10 -translate-y-1/2"></div>
            {[
              "Discovery", "Architecture", "AI Scaffold", "Sprint Dev", "Security QA", "Deployment"
            ].map((step, i) => (
              <div key={i} className="bg-slate-800 border border-slate-600 w-full md:w-32 h-12 md:h-32 rounded-xl flex items-center justify-center text-center p-4 text-xs font-bold text-slate-200 shadow-xl relative group hover:border-cyan-400 transition-colors">
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-cyan-500 text-slate-900 rounded-full flex items-center justify-center text-[10px] font-black border-2 border-slate-900 opacity-0 group-hover:opacity-100 transition-opacity">{i+1}</div>
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          9. CASE STUDIES
      ========================================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Featured Engineering Work</h2>
          </div>
          <Link href="/case-studies" className="text-indigo-600 font-bold hover:text-indigo-700 flex items-center gap-2">
            View All Case Studies <ArrowRight size={18} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-md group cursor-pointer hover:shadow-xl hover:border-indigo-300 transition-all">
            <div className="h-64 bg-gradient-to-br from-indigo-500 to-blue-600 relative">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
            </div>
            <div className="p-8">
              <span className="text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full mb-4 inline-block">SaaS Architecture</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">Global Logistics Dashboard</h3>
              <p className="text-slate-600 text-sm">Engineered a real-time tracking portal handling 5M+ daily API events with zero latency.</p>
            </div>
          </div>
          <div className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-md group cursor-pointer hover:shadow-xl hover:border-cyan-300 transition-all">
            <div className="h-64 bg-gradient-to-br from-cyan-500 to-teal-500 relative">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
            </div>
            <div className="p-8">
              <span className="text-xs font-bold text-cyan-700 bg-cyan-50 border border-cyan-100 px-3 py-1 rounded-full mb-4 inline-block">AI Automation</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">Legal Contract Analyzer</h3>
              <p className="text-slate-600 text-sm">Deployed a fine-tuned RAG LLM pipeline that reduced contract review time by 80%.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          10. WHY UPTIMISE IT
      ========================================= */}
      <section className="py-24 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Uptimise IT?</h2>
            <p className="text-slate-600 text-lg">We outpace traditional agencies through technology, not just manpower.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "AI Software Factory", desc: "Automated boilerplate & infrastructure.", icon: <Bot size={24} className="text-indigo-600"/> },
              { title: "Architecture-First", desc: "Rigorous planning before any code is written.", icon: <Database size={24} className="text-cyan-600"/> },
              { title: "Modern Tech Stack", desc: "Next.js, Node, Python, and scalable cloud.", icon: <Code2 size={24} className="text-emerald-600"/> },
              { title: "End-to-End Delivery", desc: "From blank canvas to production scale.", icon: <Rocket size={24} className="text-orange-500"/> }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-4 border border-slate-100">{item.icon}</div>
                <h4 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h4>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          11. CLIENT TESTIMONIALS
      ========================================= */}
      <section className="py-24 px-6 bg-white border-y border-slate-200">
         <div className="max-w-4xl mx-auto text-center">
            <Quote className="text-indigo-200 w-16 h-16 mx-auto mb-8 rotate-180" />
            <p className="text-2xl md:text-3xl text-slate-800 font-medium leading-relaxed mb-10">
              "Uptimise IT helped us build a scalable SaaS platform with exceptional engineering quality. Their AI-assisted workflows cut our launch time in half without sacrificing security. They are true partners, not just vendors."
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 bg-slate-200 rounded-full border-2 border-white shadow-md"></div>
              <div className="text-left">
                <p className="text-slate-900 font-bold text-lg">Tech Founder</p>
                <p className="text-indigo-600 font-medium text-sm">Y Combinator Backed Startup</p>
              </div>
            </div>
         </div>
      </section>

      {/* =========================================
          12. ENGINEERING CULTURE
      ========================================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-slate-900 border border-slate-800 rounded-[3rem] p-8 md:p-16 shadow-2xl flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold text-white">The 100x Engineering Culture</h2>
            <p className="text-slate-400 leading-relaxed text-lg">
              We operate strictly as a team of senior technical architects and full-stack builders. No bloat. No middle-managers. Just elite engineers armed with autonomous AI tools shipping production-ready code.
            </p>
          </div>
          {/* Dark Terminal keeps its authentic look even in light theme */}
          <div className="flex-1 w-full bg-[#0D1117] p-6 rounded-2xl border border-slate-700 font-mono text-sm shadow-inner relative overflow-hidden">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div><div className="w-3 h-3 rounded-full bg-yellow-500"></div><div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-slate-400">$ uptimise deploy --target production</div>
            <div className="text-indigo-400">► Initializing AI QA Agents...</div>
            <div className="text-emerald-400">✔ 1,204 Tests Passed (0.8s)</div>
            <div className="text-emerald-400">✔ Security Scan Clean</div>
            <div className="text-white mt-2 font-bold flex items-center gap-2">🚀 Platform Live at Edge <div className="w-2 h-4 bg-white animate-pulse"></div></div>
          </div>
        </div>
      </section>

      {/* =========================================
          13. PARTNER PROGRAM
      ========================================= */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-indigo-600 to-blue-700 rounded-[3rem] p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full"></div>
           <Handshake className="w-16 h-16 text-white/30 mx-auto mb-6 relative z-10" />
           <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 relative z-10">Partner with Uptimise IT</h2>
           <p className="text-lg text-indigo-100 max-w-2xl mx-auto mb-8 relative z-10">
             Know a company that needs software engineering? Refer clients to our team and earn a <strong className="text-white">10% recurring commission</strong> on the project value.
           </p>
           <Link href="/partner" className="relative z-10 inline-block px-8 py-4 bg-white text-indigo-700 font-bold rounded-xl shadow-lg hover:scale-105 transition-transform">
             Become a Partner
           </Link>
        </div>
      </section>

      {/* =========================================
          14. BLOG / INSIGHTS
      ========================================= */}
      <section className="py-24 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <h2 className="text-3xl font-bold text-slate-900">Latest Engineering Insights</h2>
            <Link href="/blog" className="text-indigo-600 font-bold hover:text-indigo-700 flex items-center gap-2">
              Explore Blog <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "AI Software Factories Explained", 
              "SaaS Architecture Design Guide", 
              "Startup MVP Development Speed"
            ].map((title, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-indigo-400 hover:shadow-md transition-all cursor-pointer group">
                <BookOpen className="text-slate-400 mb-6 group-hover:text-indigo-500 transition-colors w-8 h-8" />
                <h4 className="font-bold text-slate-900 text-lg mb-4">{title}</h4>
                <span className="text-sm text-indigo-600 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">Read Article <ArrowRight size={14}/></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          15. FINAL CTA
      ========================================= */}
      <section className="py-32 px-6 text-center max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">Build Your Next Digital Product.</h2>
        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Partner with Uptimise IT to design, build, and scale modern digital platforms at venture speed.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-10 py-5 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 hover:scale-105 transition-all text-lg">
            Start Your Project
          </Link>
          <Link href="/contact" className="px-10 py-5 bg-white border-2 border-slate-200 text-slate-800 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg flex items-center justify-center gap-2 shadow-sm">
            Book a Strategy Call <ArrowUpRight size={18}/>
          </Link>
        </div>
      </section>

    </div>
  );
}