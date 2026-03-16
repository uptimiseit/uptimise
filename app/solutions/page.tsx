import React from "react";
import Link from "next/link";
import { 
  Cloud, Lock, Zap, Users, CreditCard, BarChart, Layers, Bot, 
  Terminal, ShieldCheck, Cpu, ArrowRight, LayoutDashboard, Webhook,
  CheckCircle2, Server, ArrowUpRight,
  Globe
} from "lucide-react";

export default function SaasDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8 overflow-hidden">
        {/* Ambient Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-50 blur-[120px] rounded-full -z-10"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-bold tracking-wide uppercase mb-4">
          <Cloud size={16} /> Enterprise SaaS Engineering
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight">
          Architecting High-Growth <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">SaaS Platforms</span>
        </h1>
        
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Uptimise IT engineers secure, multi-tenant SaaS architectures. We combine AI-native workflows with elite cloud infrastructure to build platforms that scale from your first 100 users to your first million.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:scale-105 transition-all text-lg">
            Start Your SaaS Project
          </Link>
          <Link href="/contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg flex items-center justify-center gap-2">
            Consult an Architect <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* 2. SAAS PLATFORM CHALLENGES (Sticky Layout) */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6">
            <h3 className="text-blue-600 font-bold tracking-widest uppercase text-sm">The Complexities</h3>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">Why Most SaaS Platforms Break</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Building a SaaS isn't like building a standard website. It requires complex data isolation, complex billing logic, and infrastructure that won't collapse under sudden user loads.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Data Isolation & Leaks", desc: "Cross-tenant data bleeding is fatal. Tenant architectures must be perfectly isolated.", icon: <ShieldCheck className="text-red-500" /> },
              { title: "Global Latency", desc: "Slow load times destroy retention. Systems need edge caching to serve users globally.", icon: <Globe className="text-red-500" /> },
              { title: "Elastic Scaling", desc: "When traffic spikes 10x, standard servers crash. Auto-scaling is non-negotiable.", icon: <Zap className="text-red-500" /> },
              { title: "Complex Billing State", desc: "Handling prorated upgrades, downgrades, and usage-based billing is a nightmare to code.", icon: <CreditCard className="text-red-500" /> },
            ].map((challenge, idx) => (
              <div key={idx} className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">{challenge.icon}</div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{challenge.title}</h4>
                <p className="text-slate-600 leading-relaxed">{challenge.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. SAAS ARCHITECTURE SOLUTIONS */}
      <section className="py-32 px-6 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">Enterprise-Grade SaaS Architecture</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We engineer robust foundations. Our architecture-first methodology ensures your platform is secure, compliant, and infinitely scalable.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Multi-Tenant Architecture", desc: "Logical (Pool) or physical (Silo) data separation models tailored strictly to your security and compliance needs.", icon: <Layers /> },
            { title: "Microservices & APIs", desc: "Decoupled backend services allowing individual components of your SaaS to scale independently without bottlenecks.", icon: <Terminal /> },
            { title: "Zero-Trust Security", desc: "Enterprise-grade RBAC, JWT authentication, and AES-256 encrypted data both at rest and in transit.", icon: <Lock /> }
          ].map((arch, idx) => (
            <div key={idx} className="p-10 bg-white border border-slate-200 rounded-[2rem] hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-900/5 transition-all group">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                {arch.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{arch.title}</h3>
              <p className="text-slate-600 leading-relaxed">{arch.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SAAS FEATURES WE BUILD (Bento Grid) */}
      <section className="py-24 px-6 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Core SaaS Modules</h2>
            <p className="text-slate-400 text-lg">We implement the heavy-lifting foundational features every SaaS needs, allowing you to focus purely on your unique value proposition.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Subscription Billing", icon: <CreditCard size={24} /> },
              { title: "Tenant Management", icon: <Users size={24} /> },
              { title: "Admin Dashboards", icon: <LayoutDashboard size={24} /> },
              { title: "API & Webhooks", icon: <Webhook size={24} /> },
              { title: "Usage Analytics", icon: <BarChart size={24} /> },
              { title: "Role-Based Access", icon: <ShieldCheck size={24} /> },
              { title: "Automated Onboarding", icon: <Zap size={24} /> },
              { title: "Cloud Storage", icon: <Cloud size={24} /> },
            ].map((feat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center text-center gap-4 p-8 bg-slate-800/50 rounded-3xl border border-slate-700 hover:bg-slate-800 hover:border-blue-500 transition-colors group">
                <span className="text-blue-400 group-hover:scale-110 transition-transform">{feat.icon}</span>
                <span className="font-semibold text-slate-200">{feat.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TECHNOLOGY STACK */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-[3rem] p-8 md:p-16 shadow-xl shadow-slate-100 flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">The Ultimate SaaS Stack</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We build exclusively on modern, high-performance frameworks. No legacy PHP, no clunky CMS. We use the exact same tech stack utilized by leading Silicon Valley unicorns.
            </p>
            <Link href="/services/technology" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700 transition-colors">
              Explore our full tech stack <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
          <div className="flex-1 w-full grid grid-cols-2 gap-4">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <h4 className="text-blue-600 font-bold mb-4 uppercase tracking-wider text-sm">Frontend</h4>
              <ul className="space-y-2 text-slate-700 font-medium">
                <li>Next.js / React</li><li>TypeScript</li><li>Tailwind CSS</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <h4 className="text-blue-600 font-bold mb-4 uppercase tracking-wider text-sm">Backend</h4>
              <ul className="space-y-2 text-slate-700 font-medium">
                <li>Node.js / Python</li><li>GraphQL / REST</li><li>Go</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <h4 className="text-blue-600 font-bold mb-4 uppercase tracking-wider text-sm">Database</h4>
              <ul className="space-y-2 text-slate-700 font-medium">
                <li>PostgreSQL</li><li>MongoDB</li><li>Redis Cache</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <h4 className="text-blue-600 font-bold mb-4 uppercase tracking-wider text-sm">DevOps</h4>
              <ul className="space-y-2 text-slate-700 font-medium">
                <li>AWS / GCP</li><li>Docker & K8s</li><li>Terraform</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. AI SOFTWARE FACTORY */}
      <section className="py-24 px-6 bg-[#0B0F19] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-bold tracking-wide uppercase">
              <Bot size={16} /> AI Software Factory
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Accelerate Your Roadmap by 40%</h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              Uptimise IT deploys proprietary AI agent workflows to automate infrastructure scaffolding, CI/CD pipelines, and boilerplate code generation. Our senior architects focus entirely on your complex business logic.
            </p>
          </div>
          <div className="flex-1 w-full bg-[#111827] border border-slate-800 p-8 rounded-3xl">
             <ul className="space-y-6">
              {[
                "Automated Infrastructure Provisioning", 
                "AI-Assisted Unit & Integration Testing", 
                "Rapid UI Component Generation",
                "Automated Code Review & Security Audits"
              ].map((item, i) => (
                <li key={i} className="flex items-center font-medium text-lg text-slate-200">
                  <CheckCircle2 className="w-6 h-6 mr-4 text-blue-500 shrink-0" />{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 7. DEVELOPMENT PROCESS */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">The SaaS Delivery Protocol</h2>
          <p className="text-lg text-slate-600">A rigorous, highly transparent process designed to take your platform from raw concept to enterprise-ready deployment.</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {[
            { step: "01", title: "Discovery", desc: "User flows & multi-tenant planning." },
            { step: "02", title: "Architecture", desc: "Database & scalable system blueprint." },
            { step: "03", title: "Sprints", desc: "Agile, 2-week development sprints." },
            { step: "04", title: "QA Audit", desc: "Load testing & security penetration." },
            { step: "05", title: "Deployment", desc: "CI/CD & scalable cloud launch." }
          ].map((process, idx) => (
            <div key={idx} className="flex-1 p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-blue-50 hover:border-blue-100 transition-colors relative overflow-hidden group">
              <div className="text-6xl font-black text-slate-200/50 absolute -top-4 -right-2 group-hover:text-blue-200/50 transition-colors">{process.step}</div>
              <div className="relative z-10 mt-6">
                <h4 className="text-xl font-bold text-slate-900 mb-2">{process.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{process.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. SCALABILITY BENEFITS */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto text-center space-y-16">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">Why Scalability Matters</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              When your marketing team hits a home run and user acquisition spikes, the last thing you want is a database crash. We engineer SaaS platforms to scale elastically on demand.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
             <div className="space-y-4">
               <Cpu className="text-blue-600 w-10 h-10 mx-auto" />
               <h4 className="font-bold text-slate-900 text-lg">99.99% Uptime</h4>
               <p className="text-slate-600 text-sm">Resilient architecture built for high availability.</p>
             </div>
             <div className="space-y-4">
               <Zap className="text-blue-600 w-10 h-10 mx-auto" />
               <h4 className="font-bold text-slate-900 text-lg">Auto-Scaling</h4>
               <p className="text-slate-600 text-sm">Infrastructure that automatically grows with traffic.</p>
             </div>
             <div className="space-y-4">
               <Lock className="text-blue-600 w-10 h-10 mx-auto" />
               <h4 className="font-bold text-slate-900 text-lg">Compliance Ready</h4>
               <p className="text-slate-600 text-sm">Built to meet GDPR, SOC2, and HIPAA standards.</p>
             </div>
             <div className="space-y-4">
               <Cloud className="text-blue-600 w-10 h-10 mx-auto" />
               <h4 className="font-bold text-slate-900 text-lg">Cost Efficient</h4>
               <p className="text-slate-600 text-sm">Optimized cloud queries to reduce AWS/GCP bills.</p>
             </div>
          </div>
        </div>
      </section>

      {/* 9. CASE STUDIES */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Proven SaaS Success</h2>
            <p className="text-slate-600 text-lg">See how we have helped founders and enterprises build platforms that dominate their markets.</p>
          </div>
          <Link href="/case-studies" className="text-blue-600 font-bold hover:text-blue-700 flex items-center gap-2">
            View All Work <ArrowRight size={18} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Enterprise HR Platform", desc: "A multi-tenant workforce management system scaling to 50,000+ daily active employees globally.", tags: ["Next.js", "AWS", "Multi-Tenant"] },
            { title: "AI Marketing SaaS", desc: "An intelligent content generation platform processing millions of API calls daily with zero latency.", tags: ["OpenAI API", "Python", "React"] },
          ].map((study, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all group cursor-pointer">
              <div className="flex gap-2 mb-6">
                {study.tags.map(tag => <span key={tag} className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">{tag}</span>)}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">{study.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-8">{study.desc}</p>
              <span className="text-blue-600 font-semibold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                Read Case Study <ArrowRight size={16} />
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 10. CTA SECTION */}
      <section className="py-32 px-6 text-center max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">Ready to Build Your SaaS?</h2>
        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Stop worrying about technical debt and scalability limits. Let Uptimise IT engineer the platform while you focus on acquiring customers.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-10 py-5 bg-blue-600 text-white font-bold rounded-xl shadow-xl shadow-blue-600/20 hover:bg-blue-700 hover:scale-105 transition-all text-lg">
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