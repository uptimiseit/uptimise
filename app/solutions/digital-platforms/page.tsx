import React from "react";
import Link from "next/link";
import { 
  Globe, Server, Layout, Users, ShoppingCart, 
  ShieldCheck, Zap, Database, ArrowRight, Bot,
  Activity, ArrowUpRight, CheckCircle2, Workflow,
  Network, Cpu
} from "lucide-react";

export default function DigitalPlatformPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-100 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-50 blur-[120px] rounded-full -z-10"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-bold tracking-wide uppercase mb-4">
          <Globe size={16} /> Digital Platform Engineering
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight">
          Architecting High-Performance <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Digital Ecosystems</span>
        </h1>
        
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          We engineer complex, multi-sided digital platforms designed for massive concurrency. From B2B marketplaces to enterprise community hubs, we build the infrastructure that connects your users securely and seamlessly.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 hover:scale-105 transition-all text-lg">
            Start Your Platform Build
          </Link>
          <Link href="/contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg flex items-center justify-center gap-2">
            Speak to an Architect <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* 2. PLATFORM CHALLENGES */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Why Digital Platforms Fail to Scale</h2>
            <p className="text-lg text-slate-600">Building a platform requires handling multiple distinct user types simultaneously. Without the right technical foundation, traffic spikes and complex workflows will paralyze your business.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Monolithic Bottlenecks", desc: "Tightly coupled codebases make it impossible to add new features without breaking existing ones.", icon: <Server className="text-red-500 w-8 h-8" /> },
              { title: "Concurrency Crashes", desc: "Marketplaces and social platforms require real-time database reads. Poor DB structuring leads to timeouts.", icon: <Activity className="text-red-500 w-8 h-8" /> },
              { title: "Fragmented UX", desc: "Buyers, sellers, and admins need distinct, highly optimized interfaces. Clunky UI destroys platform adoption.", icon: <Layout className="text-red-500 w-8 h-8" /> }
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

      {/* 3. PLATFORM ARCHITECTURE APPROACH */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-emerald-600 font-bold tracking-widest uppercase text-sm">Our Architecture Approach</h3>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Decoupled, Event-Driven, and Future-Proof
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We separate the front-end user experience from the back-end business logic using headless architecture. This allows your platform to serve web, mobile, and third-party APIs from a single, robust source of truth.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Microservices orchestration for independent scaling",
                "Event-driven data streams (Kafka/RabbitMQ)",
                "Headless CMS and Commerce integrations",
                "Global Edge Network caching"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-800 font-semibold text-lg">
                  <CheckCircle2 className="text-emerald-500 w-6 h-6 mr-3 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
             {/* Abstract visual representation of architecture */}
            <div className="space-y-4 mt-8">
              <div className="bg-slate-900 text-white p-6 rounded-3xl"><Network className="w-10 h-10 mb-4 text-emerald-400" /><h4 className="font-bold">API Gateway</h4><p className="text-slate-400 text-sm mt-2">Central traffic routing.</p></div>
              <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-3xl"><Database className="w-10 h-10 mb-4 text-emerald-600" /><h4 className="font-bold text-slate-900">Distributed DB</h4><p className="text-slate-600 text-sm mt-2">High-availability data.</p></div>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-100 p-6 rounded-3xl"><Workflow className="w-10 h-10 mb-4 text-blue-600" /><h4 className="font-bold text-slate-900">Event Bus</h4><p className="text-slate-600 text-sm mt-2">Async task queues.</p></div>
              <div className="bg-slate-100 border border-slate-200 p-6 rounded-3xl"><Layout className="w-10 h-10 mb-4 text-slate-600" /><h4 className="font-bold text-slate-900">Client Apps</h4><p className="text-slate-600 text-sm mt-2">Web, iOS, and Android.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PLATFORMS WE BUILD */}
      <section className="py-24 px-6 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-white">Platforms We Build</h2>
            <p className="text-lg text-slate-400">Complex ecosystems require specialized engineering. We build platforms that manage thousands of concurrent interactions securely.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "B2B Marketplaces", icon: <ShoppingCart size={28} />, desc: "Complex vendor management, multi-cart logic, and escrow payments." },
              { title: "Community Portals", icon: <Users size={28} />, desc: "High-engagement hubs with real-time chat, feeds, and moderation." },
              { title: "EdTech Platforms", icon: <Globe size={28} />, desc: "LMS systems handling video streaming, live classes, and assessments." },
              { title: "Internal Enterprise Hubs", icon: <ShieldCheck size={28} />, desc: "Secure intranet portals aggregating internal tools and data." }
            ].map((prod, idx) => (
              <div key={idx} className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-emerald-500 transition-colors group">
                <div className="text-emerald-400 mb-6 group-hover:scale-110 transition-transform">{prod.icon}</div>
                <h3 className="text-xl font-bold mb-3">{prod.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{prod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TECHNOLOGY STACK */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-[3rem] p-8 md:p-16 shadow-xl shadow-slate-100 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">The Platform Tech Stack</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We leverage modern, open-source technologies that give you full ownership of your IP while ensuring massive scalability and security.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["Next.js", "React Native", "Node.js", "Go", "GraphQL", "PostgreSQL", "Redis", "Kafka", "AWS"].map(tech => (
                <span key={tech} className="px-4 py-2 bg-slate-100 text-slate-800 font-bold rounded-lg text-sm border border-slate-200 hover:border-emerald-400 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full grid grid-cols-2 gap-4">
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-emerald-600 font-bold mb-2">Frontend & Mobile</h4><p className="text-slate-600 text-sm">React, Next.js, Flutter</p></div>
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-emerald-600 font-bold mb-2">Core API & Logic</h4><p className="text-slate-600 text-sm">Node.js, Go, GraphQL</p></div>
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-emerald-600 font-bold mb-2">Data & Caching</h4><p className="text-slate-600 text-sm">PostgreSQL, Redis</p></div>
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-emerald-600 font-bold mb-2">Cloud Infrastructure</h4><p className="text-slate-600 text-sm">AWS, Kubernetes, Docker</p></div>
          </div>
        </div>
      </section>

      {/* 6. AI SOFTWARE FACTORY ACCELERATION */}
      <section className="py-24 px-6 bg-[#0B0F19] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-bold tracking-wide uppercase">
            <Bot size={16} /> AI Software Factory
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Accelerated Platform Delivery via <span className="text-emerald-500">AI Agents</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Building complex platforms usually takes 12-18 months. By deploying our proprietary AI-assisted engineering workflows, we automate CRUD API generation, database migrations, and unit testing—allowing us to deliver enterprise platforms in a fraction of the time.
          </p>
        </div>
      </section>

      {/* 7. DEVELOPMENT PROCESS */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">Platform Delivery Process</h2>
          <p className="text-lg text-slate-600">A structured engineering process to handle high-complexity, multi-sided systems.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { step: "01", title: "Discovery", desc: "Mapping user journeys for all platform personas." },
            { step: "02", title: "Design", desc: "Creating global design systems & UX prototypes." },
            { step: "03", title: "Architecture", desc: "Defining DB schemas and API microservices." },
            { step: "04", title: "Development", desc: "Iterative sprints with automated QA testing." },
            { step: "05", title: "Deployment", desc: "CI/CD setup and scalable cloud launch." }
          ].map((process, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-emerald-400 transition-colors group relative">
               <div className="text-sm font-black text-emerald-600 mb-3 uppercase tracking-wider">{process.step}</div>
               <h4 className="text-lg font-bold text-slate-900 mb-2">{process.title}</h4>
               <p className="text-sm text-slate-600 leading-relaxed">{process.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. PLATFORM SCALABILITY BENEFITS */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="w-16 h-16 mx-auto bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-6"><Zap size={32} /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">High Concurrency</h3>
            <p className="text-slate-600">Handle tens of thousands of simultaneous users browsing, chatting, or transacting without latency spikes.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="w-16 h-16 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6"><ShieldCheck size={32} /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Enterprise Security</h3>
            <p className="text-slate-600">Protect user data and financial transactions with strict role-based access control and encrypted payloads.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="w-16 h-16 mx-auto bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-6"><Cpu size={32} /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Modular Expansion</h3>
            <p className="text-slate-600">Because we build decoupled microservices, adding a new feature or app interface in the future is seamless and safe.</p>
          </div>
        </div>
      </section>

      {/* 9. CASE STUDIES */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Platform Case Studies</h2>
            <p className="text-slate-600 text-lg">See how we have architected massive digital ecosystems for our clients.</p>
          </div>
          <Link href="/case-studies" className="text-emerald-600 font-bold hover:text-emerald-700 flex items-center gap-2">
            View All Work <ArrowRight size={18} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Global B2B Marketplace", desc: "A multi-vendor marketplace connecting wholesale suppliers with retailers, featuring automated escrow and complex shipping logic.", tags: ["Next.js", "Node.js", "Stripe Connect"] },
            { title: "EdTech Creator Platform", desc: "A high-traffic platform allowing educators to host live classes, sell courses, and manage student communities natively.", tags: ["React", "GraphQL", "AWS"] },
          ].map((study, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 transition-all group cursor-pointer">
              <div className="flex gap-2 mb-6">
                {study.tags.map(tag => <span key={tag} className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">{tag}</span>)}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-emerald-600 transition-colors">{study.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-8">{study.desc}</p>
              <span className="text-emerald-600 font-semibold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                Read Case Study <ArrowRight size={16} />
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 10. CTA SECTION */}
      <section className="py-32 px-6 text-center max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">Build Your Platform With Us</h2>
        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Scale your business with an engineering partner that understands complex platform architecture. Let's design an ecosystem that grows with you.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-10 py-5 bg-emerald-600 text-white font-bold rounded-xl shadow-xl shadow-emerald-600/20 hover:bg-emerald-700 hover:scale-105 transition-all text-lg">
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