import React from "react";
import Link from "next/link";
import { 
  Cloud, Lock, Zap, Users, CreditCard, BarChart, Layers, Bot, 
  Terminal, ShieldCheck, Cpu, ArrowRight, LayoutDashboard, Webhook, 
  Globe
} from "lucide-react";

export default function SaasDevelopmentPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-50 blur-[100px] rounded-full -z-10"></div>
        <h3 className="text-indigo-600 font-bold tracking-widest uppercase text-xs">SaaS Platform Development</h3>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight">
          Engineering Scalable <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Software-as-a-Service Platforms</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Uptimise IT designs, builds, and scales secure multi-tenant SaaS platforms. We combine AI-native engineering, cloud-native architecture, and elite product teams to turn your vision into a high-growth recurring revenue engine.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl shadow-md hover:bg-indigo-700 transition-all text-lg hover:shadow-indigo-200">
            Start Your SaaS Project
          </Link>
          <Link href="/contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-semibold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg">
            Consult an Architect
          </Link>
        </div>
      </section>

      {/* 2. SAAS PLATFORM CHALLENGES */}
      <section className="py-24 px-6 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-indigo-600 font-bold tracking-widest uppercase text-sm">The Complexities</h3>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">The Challenges of Building SaaS</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Unlike traditional software, SaaS applications require complex infrastructure to manage multiple organizations safely. A poorly architected SaaS will suffer from data leaks, slow performance, and crippling technical debt.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Data Isolation", desc: "Keeping tenant data strictly separated and secure.", icon: <ShieldCheck className="text-red-500" /> },
              { title: "Global Latency", desc: "Ensuring fast load times for users across the world.", icon: <Globe className="text-red-500" /> },
              { title: "Elastic Scaling", desc: "Handling massive traffic spikes without crashing.", icon: <Zap className="text-red-500" /> },
              { title: "Complex Billing", desc: "Managing metered usage, upgrades, and churn.", icon: <CreditCard className="text-red-500" /> },
            ].map((challenge, idx) => (
              <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col gap-3">
                {challenge.icon}
                <h4 className="font-bold text-slate-900">{challenge.title}</h4>
                <p className="text-sm text-slate-600">{challenge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SAAS ARCHITECTURE SOLUTIONS */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">SaaS Architecture Solutions</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We don't just write code; we engineer systems. Our architecture-first approach ensures your platform is ready for enterprise scale from day one.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Multi-Tenant Architecture", desc: "Logical and physical data separation models (Pool, Bridge, and Silo) tailored to your compliance needs and budget.", icon: <Layers /> },
            { title: "Microservices & APIs", desc: "Decoupled backend services allowing individual components of your SaaS to scale independently without affecting the whole.", icon: <Terminal /> },
            { title: "Zero-Trust Security", desc: "Enterprise-grade RBAC (Role-Based Access Control), JWT authentication, and encrypted data at rest and in transit.", icon: <Lock /> }
          ].map((arch, idx) => (
            <div key={idx} className="p-8 bg-white border border-slate-200 rounded-3xl hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-50 transition-all group">
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {arch.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{arch.title}</h3>
              <p className="text-slate-600 leading-relaxed">{arch.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SAAS FEATURES WE BUILD */}
      <section className="py-24 px-6 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Core SaaS Features We Build</h2>
            <p className="text-slate-600">We implement the foundational features every high-growth SaaS needs, allowing you to focus purely on your unique business logic.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Subscription Billing", icon: <CreditCard size={20} /> },
              { title: "Tenant Management", icon: <Users size={20} /> },
              { title: "Admin Dashboards", icon: <LayoutDashboard size={20} /> },
              { title: "API & Webhooks", icon: <Webhook size={20} /> },
              { title: "Usage Analytics", icon: <BarChart size={20} /> },
              { title: "Role-Based Access", icon: <ShieldCheck size={20} /> },
              { title: "Automated Onboarding", icon: <Zap size={20} /> },
              { title: "Cloud Storage", icon: <Cloud size={20} /> },
            ].map((feat, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 font-semibold text-slate-700 hover:text-indigo-600 transition-colors">
                <span className="text-indigo-500">{feat.icon}</span>
                {feat.title}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TECHNOLOGY STACK */}
      <section className="py-24 px-6 bg-[#0B0F19] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto relative z-10 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-white">Modern SaaS Technology Stack</h2>
            <p className="text-lg text-slate-400">We utilize a bleeding-edge, highly performant stack to ensure your SaaS is fast, secure, and infinitely scalable.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { category: "Frontend Engine", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
              { category: "Backend & Logic", items: ["Node.js", "Python", "Go", "GraphQL / REST"] },
              { category: "Database & Cache", items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"] },
              { category: "DevOps & Cloud", items: ["AWS / GCP", "Docker & K8s", "Vercel", "Terraform"] },
            ].map((stack, idx) => (
              <div key={idx} className="bg-[#111827] border border-slate-800 rounded-2xl p-8 hover:border-indigo-500/50 transition-colors">
                <h4 className="text-indigo-400 font-bold mb-6 tracking-wide">{stack.category}</h4>
                <ul className="space-y-3">
                  {stack.items.map((item, i) => (
                    <li key={i} className="flex items-center text-slate-300 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-3"></span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. AI SOFTWARE FACTORY FOR SAAS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-linear-to-br from-indigo-900 to-[#020617] rounded-[3rem] p-8 md:p-16 text-white flex flex-col lg:flex-row items-center gap-12 border border-indigo-500/30 relative overflow-hidden shadow-2xl shadow-indigo-900/20">
          <div className="absolute top-0 right-0 p-32 opacity-10">
            <Bot size={400} />
          </div>
          <div className="flex-1 space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-sm font-bold tracking-wide uppercase">
              <Zap size={16} /> Powered by AI
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight">AI Software Factory for SaaS</h2>
            <p className="text-lg text-indigo-100/80 leading-relaxed max-w-xl">
              Launch your SaaS 40% faster. Uptimise IT utilizes intelligent agentic workflows to automate boilerplate code, infrastructure provisioning, and unit testing. Our engineers focus purely on your unique business logic and complex architecture.
            </p>
            <ul className="space-y-3 pt-4">
              {["Automated infrastructure scaffolding", "AI-assisted test-driven development", "Rapid UI component generation"].map((item, i) => (
                <li key={i} className="flex items-center font-medium text-indigo-50"><ShieldCheck className="w-5 h-5 mr-3 text-indigo-400" />{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 7. DEVELOPMENT PROCESS */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">SaaS Engineering Process</h2>
            <p className="text-lg text-slate-600">A rigorous, structured protocol designed to take your platform from concept to enterprise-ready deployment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Discovery", desc: "User flows & multi-tenant planning." },
              { step: "02", title: "Blueprint", desc: "Database & system architecture." },
              { step: "03", title: "Build", desc: "Agile, sprint-based development." },
              { step: "04", title: "QA & Audit", desc: "Load testing & security checks." },
              { step: "05", title: "Scale", desc: "Cloud deployment & CI/CD." }
            ].map((process, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="text-5xl font-black text-slate-50 absolute -top-2 -right-2 group-hover:text-indigo-50 transition-colors">{process.step}</div>
                <div className="relative z-10">
                  <h4 className="text-xl font-bold text-slate-900 mb-2 mt-4">{process.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{process.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SCALABILITY BENEFITS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-6 mt-8">
              <div className="bg-indigo-50 p-8 rounded-3xl">
                <Cpu className="text-indigo-600 w-10 h-10 mb-4" />
                <h4 className="font-bold text-slate-900 text-lg mb-2">99.99% Uptime</h4>
                <p className="text-slate-600 text-sm">Resilient architecture built for high availability.</p>
              </div>
              <div className="bg-blue-50 p-8 rounded-3xl">
                <Zap className="text-blue-600 w-10 h-10 mb-4" />
                <h4 className="font-bold text-slate-900 text-lg mb-2">Auto-Scaling</h4>
                <p className="text-slate-600 text-sm">Infrastructure that automatically grows with traffic.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-purple-50 p-8 rounded-3xl">
                <Lock className="text-purple-600 w-10 h-10 mb-4" />
                <h4 className="font-bold text-slate-900 text-lg mb-2">Compliance Ready</h4>
                <p className="text-slate-600 text-sm">Built to meet GDPR, SOC2, and HIPAA standards.</p>
              </div>
              <div className="bg-emerald-50 p-8 rounded-3xl">
                <Cloud className="text-emerald-600 w-10 h-10 mb-4" />
                <h4 className="font-bold text-slate-900 text-lg mb-2">Cost Efficient</h4>
                <p className="text-slate-600 text-sm">Optimized cloud queries to reduce AWS/GCP bills.</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">Why Scalability Matters</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              When your marketing team hits a home run and user acquisition spikes, the last thing you want is a database crash. 
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We engineer SaaS platforms to elastically scale. By utilizing container orchestration, read-replicas, and edge-caching, your platform remains lightning-fast whether you have 100 users or 1,000,000.
            </p>
          </div>
        </div>
      </section>

      {/* 9. CASE STUDIES */}
      <section className="py-24 px-6 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Proven SaaS Success</h2>
              <p className="text-slate-400 text-lg">See how we have helped founders and enterprises build platforms that dominate their markets.</p>
            </div>
            <Link href="/case-studies" className="text-indigo-400 font-bold hover:text-indigo-300 flex items-center gap-2">
              View All Work <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Enterprise HR Platform", desc: "A multi-tenant workforce management system scaling to 50,000+ daily active employees.", tags: ["Next.js", "AWS", "Multi-Tenant"] },
              { title: "AI Marketing SaaS", desc: "An intelligent content generation platform processing millions of API calls daily with zero latency.", tags: ["OpenAI API", "Python", "React"] },
            ].map((study, idx) => (
              <div key={idx} className="bg-slate-800 rounded-3xl p-8 md:p-10 border border-slate-700 hover:border-indigo-500/50 transition-colors group cursor-pointer">
                <div className="flex gap-2 mb-6">
                  {study.tags.map(tag => <span key={tag} className="text-xs font-bold text-slate-300 bg-slate-700 px-3 py-1 rounded-full">{tag}</span>)}
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">{study.title}</h3>
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
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">Ready to Build Your SaaS?</h2>
        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Stop worrying about technical debt and scalability. Let Uptimise IT engineer the platform while you focus on acquiring customers.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-10 py-5 bg-indigo-600 text-white font-bold rounded-xl shadow-xl shadow-indigo-600/20 hover:bg-indigo-700 hover:scale-105 transition-all text-lg">
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