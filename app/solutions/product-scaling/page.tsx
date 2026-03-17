import React from "react";
import Link from "next/link";
import { 
  Gauge, TrendingUp, ServerCrash, Coins, 
  Activity, ArrowRight, Database, Zap, 
  Layers, CheckCircle2, Cpu, ArrowUpRight, 
  Timer, LineChart, Code2, Network,
  ShieldCheck,
  Layout
} from "lucide-react";

export default function ProductScalingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-lime-200 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8 overflow-hidden">
        {/* Ambient Performance Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-lime-50 blur-[120px] rounded-full -z-10"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-50 border border-lime-200 text-lime-700 text-sm font-bold tracking-wide uppercase mb-4">
          <Gauge size={16} /> Performance Engineering
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight">
          Scale Your Product <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-emerald-600">Infrastructure</span>
        </h1>
        
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Eliminate bottlenecks, reduce cloud costs, and prepare for 10x growth. We audit, refactor, and optimize your application architecture to handle massive traffic spikes with sub-second latency.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl shadow-lg shadow-slate-900/20 hover:bg-slate-800 hover:scale-105 transition-all text-lg">
            Audit My Performance
          </Link>
          <Link href="/contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg flex items-center justify-center gap-2">
            Speak to an Architect <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* 2. GROWTH CHALLENGES */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">The Friction of Hyper-Growth</h2>
            <p className="text-lg text-slate-600">The code that got you to your first 1,000 users will break when you hit 100,000. As products scale, technical debt compounds, leading to catastrophic user experiences.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Slow Load Times", desc: "Bloated frontend bundles and slow API responses destroying your conversion rates.", icon: <Timer className="text-red-500 w-8 h-8" /> },
              { title: "Database Bottlenecks", desc: "N+1 query issues and missing indexes causing your database to lock up under load.", icon: <Database className="text-red-500 w-8 h-8" /> },
              { title: "Crashing Under Load", desc: "Monolithic servers running out of memory during marketing campaigns or traffic spikes.", icon: <ServerCrash className="text-red-500 w-8 h-8" /> },
              { title: "Exploding Cloud Costs", desc: "Inefficient code forcing you to constantly provision larger, more expensive servers.", icon: <Coins className="text-red-500 w-8 h-8" /> }
            ].map((challenge, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-red-200 transition-colors">
                <div className="mb-6 bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center">{challenge.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{challenge.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{challenge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SCALING STRATEGY */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-emerald-600 font-bold tracking-widest uppercase text-sm">Our Scaling Strategy</h3>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Measure. Isolate. Optimize.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We don't guess where the problems are. We deploy elite APM (Application Performance Monitoring) tools to find the exact lines of code and database queries causing latency, then surgically refactor them.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Decoupling heavy background tasks to async queues.",
                "Implementing aggressive Redis/Memcached layers.",
                "Optimizing database indexing and query structures.",
                "Migrating monolithic features to serverless/microservices."
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-800 font-semibold">
                  <CheckCircle2 className="text-emerald-500 w-6 h-6 mr-3 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-slate-900 p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
             {/* Abstract Performance Graph CSS */}
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
             <h3 className="text-2xl font-bold text-white mb-8 relative z-10 flex items-center gap-3">
               <Activity className="text-lime-400" /> Latency Reduction
             </h3>
             <div className="space-y-6 relative z-10">
               <div>
                 <div className="flex justify-between text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider"><span>Before Optimization</span><span>3.2s Load</span></div>
                 <div className="w-full bg-slate-800 rounded-full h-4 overflow-hidden">
                   <div className="bg-red-500 h-4 w-[85%] rounded-full relative">
                     <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                   </div>
                 </div>
               </div>
               <div>
                 <div className="flex justify-between text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider"><span>After Query Refactoring</span><span>1.1s Load</span></div>
                 <div className="w-full bg-slate-800 rounded-full h-4 overflow-hidden">
                   <div className="bg-amber-400 h-4 w-[45%] rounded-full"></div>
                 </div>
               </div>
               <div>
                 <div className="flex justify-between text-xs font-bold text-lime-400 mb-2 uppercase tracking-wider"><span>After Edge Caching</span><span>0.2s Load</span></div>
                 <div className="w-full bg-slate-800 rounded-full h-4 overflow-hidden">
                   <div className="bg-lime-500 h-4 w-[15%] rounded-full shadow-[0_0_10px_rgba(132,204,22,0.8)]"></div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. OPTIMIZATION SERVICES */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">Full-Stack Optimization Services</h2>
            <p className="text-lg text-slate-600">We tackle performance issues across every layer of your application stack to ensure fluid, unbroken user experiences.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Database Optimization", desc: "Rewriting ORM queries, adding composite indexes, and implementing read-replicas to prevent database deadlocks.", icon: <Database size={24} /> },
              { title: "Codebase Refactoring", desc: "Identifying CPU-intensive loops, resolving memory leaks, and updating legacy frameworks to modern, performant standards.", icon: <Code2 size={24} /> },
              { title: "Frontend Acceleration", desc: "Shrinking JavaScript bundles, implementing lazy-loading, and optimizing Core Web Vitals for better SEO and UX.", icon: <Layout size={24} /> },
              { title: "Caching Architecture", desc: "Designing multi-layer caching strategies (CDN, Application, Database) to serve data instantly without hitting the server.", icon: <Layers size={24} /> }
            ].map((sys, idx) => (
              <div key={idx} className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-lime-900/5 transition-all group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-lime-50 text-lime-600 rounded-xl flex items-center justify-center group-hover:bg-lime-500 group-hover:text-white transition-colors">
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

      {/* 5. PERFORMANCE TOOLS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-[3rem] p-8 md:p-16 shadow-xl shadow-slate-100 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">The Diagnostic Toolkit</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We utilize enterprise-grade observability and caching tools to monitor system health in real-time and deliver lightning-fast data.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["Datadog", "New Relic", "Redis", "Memcached", "Elastic APM", "AWS CloudWatch", "Lighthouse", "Grafana"].map(tech => (
                <span key={tech} className="px-4 py-2 bg-slate-100 text-slate-800 font-bold rounded-lg text-sm border border-slate-200 hover:border-lime-400 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full grid grid-cols-2 gap-4">
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-emerald-600 font-bold mb-2">APM</h4><p className="text-slate-600 text-sm">App Performance Monitoring</p></div>
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-emerald-600 font-bold mb-2">In-Memory</h4><p className="text-slate-600 text-sm">Redis & Memcached</p></div>
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-emerald-600 font-bold mb-2">Log Aggregation</h4><p className="text-slate-600 text-sm">ELK Stack & Datadog</p></div>
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-emerald-600 font-bold mb-2">Edge CDN</h4><p className="text-slate-600 text-sm">Cloudflare & Fastly</p></div>
          </div>
        </div>
      </section>

      {/* 6. INFRASTRUCTURE SCALING */}
      <section className="py-24 px-6 bg-[#0B0F19] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-500/10 border border-lime-500/30 text-lime-400 text-sm font-bold tracking-wide uppercase">
              <Network size={16} /> Elastic Cloud
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Infrastructure Built for <span className="text-lime-500">Massive Scale</span>
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              Code optimization only gets you so far. We engineer auto-scaling cloud infrastructure that dynamically provisions new servers during traffic spikes and spins them down during quiet hours to save you money.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Horizontal Pod Autoscaling (HPA) via Kubernetes.",
                "Serverless functions for unpredictable workloads.",
                "Database connection pooling to prevent timeouts."
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-300 font-medium">
                  <CheckCircle2 className="text-lime-500 w-5 h-5 mr-3 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 w-full bg-slate-800/50 border border-lime-500/20 p-8 rounded-[2rem] shadow-[0_0_40px_rgba(132,204,22,0.1)]">
             <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-6">
               <span className="text-white font-bold">Auto-Scaling Triggered</span>
               <span className="text-lime-400 text-sm font-mono flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></div> CPU 75%</span>
             </div>
             <div className="flex gap-4 items-end h-32 mb-4">
               {/* Abstract Server Bars */}
               <div className="w-full bg-slate-700 rounded-t-lg h-[40%] relative"><div className="absolute top-2 w-full text-center text-xs text-slate-400">Pod 1</div></div>
               <div className="w-full bg-slate-700 rounded-t-lg h-[60%] relative"><div className="absolute top-2 w-full text-center text-xs text-slate-400">Pod 2</div></div>
               <div className="w-full bg-lime-500/20 border border-lime-500/50 rounded-t-lg h-[90%] relative overflow-hidden">
                 <div className="absolute inset-0 bg-lime-400/10 animate-pulse"></div>
                 <div className="absolute top-2 w-full text-center text-xs font-bold text-lime-400">Pod 3 (New)</div>
               </div>
             </div>
             <p className="text-slate-400 text-sm text-center">New instances spin up automatically to handle load.</p>
          </div>
        </div>
      </section>

      {/* 7. OPTIMIZATION PROCESS */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">The Optimization Process</h2>
          <p className="text-lg text-slate-600">A scientific, data-driven approach to identifying and eliminating your deepest technical bottlenecks.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { step: "01", title: "Audit & Trace", desc: "Deploying APM tools to trace slow requests and map bottlenecks." },
            { step: "02", title: "Profile", desc: "Analyzing database queries, memory usage, and bundle sizes." },
            { step: "03", title: "Refactor", desc: "Rewriting inefficient code and restructuring database indexes." },
            { step: "04", title: "Load Test", desc: "Simulating massive traffic spikes to verify system resilience." },
            { step: "05", title: "Deploy", desc: "Releasing optimizations with active real-time monitoring." }
          ].map((process, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-lime-400 transition-colors group relative">
               <div className="text-sm font-black text-lime-600 mb-3 uppercase tracking-wider">{process.step}</div>
               <h4 className="text-lg font-bold text-slate-900 mb-2">{process.title}</h4>
               <p className="text-sm text-slate-600 leading-relaxed">{process.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. PERFORMANCE BENEFITS */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="w-16 h-16 mx-auto bg-lime-50 text-lime-600 rounded-full flex items-center justify-center mb-6"><Zap size={32} /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Sub-Second Latency</h3>
            <p className="text-slate-600">Faster load times directly correlate with higher user retention and massive improvements in SEO rankings.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="w-16 h-16 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6"><Coins size={32} /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Reduced Cloud Costs</h3>
            <p className="text-slate-600">By optimizing code and queries, we drastically reduce the CPU and RAM required, cutting your monthly AWS/GCP bills.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="w-16 h-16 mx-auto bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-6"><ShieldCheck size={32} /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Zero Downtime</h3>
            <p className="text-slate-600">Survive product launches, viral marketing campaigns, and Black Friday traffic surges without a single crash.</p>
          </div>
        </div>
      </section>

      {/* 9. CASE STUDIES */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Scaling Success Stories</h2>
            <p className="text-slate-600 text-lg">See how we have rescued platforms from crashing and optimized them for hyper-growth.</p>
          </div>
          <Link href="/case-studies" className="text-lime-600 font-bold hover:text-lime-700 flex items-center gap-2">
            View All Work <ArrowRight size={18} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "SaaS API Optimization", desc: "Refactored a monolithic Node.js application, implemented Redis caching, and reduced average API response time from 2.4s to 120ms.", tags: ["Node.js", "Redis", "PostgreSQL"] },
            { title: "E-Commerce Traffic Surge", desc: "Migrated a rigid application to a Kubernetes cluster with auto-scaling, allowing the client to survive a 10x traffic spike during a viral launch.", tags: ["Kubernetes", "AWS", "Datadog"] },
          ].map((study, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-lime-900/5 transition-all group cursor-pointer">
              <div className="flex gap-2 mb-6">
                {study.tags.map(tag => <span key={tag} className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">{tag}</span>)}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-lime-600 transition-colors">{study.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-8">{study.desc}</p>
              <span className="text-lime-600 font-semibold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                Read Case Study <ArrowRight size={16} />
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 10. CTA SECTION */}
      <section className="py-32 px-6 text-center max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">Stop Losing Users to Slow Load Times.</h2>
        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Technical debt limits your growth. Partner with Uptimise IT to architect a platform that is lightning-fast, highly resilient, and ready to scale.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-10 py-5 bg-slate-900 text-white font-bold rounded-xl shadow-xl hover:bg-slate-800 hover:scale-105 transition-all text-lg">
            Request Performance Audit
          </Link>
          <Link href="/contact" className="px-10 py-5 bg-white border-2 border-slate-200 text-slate-800 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg">
            Book a Strategy Call
          </Link>
        </div>
      </section>

    </div>
  );
}