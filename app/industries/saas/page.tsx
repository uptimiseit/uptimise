import React from "react";
import Link from "next/link";
import { 
  Cloud, Lock, Zap, Users, CreditCard, BarChart, Layers, Bot, 
  Terminal, ShieldCheck, Cpu, ArrowRight, LayoutDashboard, 
  ServerCrash, TrendingDown, ArrowUpRight, CheckCircle2,
  Database, Network, Shield,
  Building
} from "lucide-react";

export default function SaasIndustryPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8 overflow-hidden">
        {/* Ambient Cloud Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-100 blur-[120px] rounded-full -z-10"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-bold tracking-wide uppercase mb-4 shadow-sm">
          <Cloud size={16} /> SaaS Industry Solutions
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight">
          Scale Your MRR with <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Enterprise SaaS Architecture</span>
        </h1>
        
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          We partner with ambitious founders to engineer high-retention, multi-tenant Software-as-a-Service platforms. From initial MVP to enterprise scale, we build the infrastructure that powers recurring revenue.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-xl shadow-blue-600/20 hover:bg-blue-700 hover:scale-105 transition-all text-lg">
            Build Your SaaS Platform
          </Link>
          <Link href="/contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg flex items-center justify-center gap-2">
            Talk to a SaaS Architect <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* 2. SAAS INDUSTRY CHALLENGES */}
      <section className="py-24 px-6 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">The Friction of Scaling SaaS</h2>
            <p className="text-lg text-slate-600">Acquiring users is only half the battle. If your platform's architecture isn't built for scale, technical debt will destroy your user retention.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "High Churn Rates", desc: "Slow load times and buggy interfaces frustrate users, causing them to cancel their subscriptions and switch to competitors.", icon: <TrendingDown className="text-red-500 w-8 h-8" /> },
              { title: "Tenant Data Bleed", desc: "Poorly isolated databases risk exposing one client's proprietary data to another, resulting in massive legal and reputational damage.", icon: <ShieldCheck className="text-red-500 w-8 h-8" /> },
              { title: "Costly Infrastructure", desc: "Unoptimized code forces you to over-provision cloud servers, destroying your gross margins as your user base grows.", icon: <ServerCrash className="text-red-500 w-8 h-8" /> }
            ].map((challenge, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:border-red-200 transition-colors">
                <div className="mb-6 bg-red-100 w-16 h-16 rounded-2xl flex items-center justify-center">{challenge.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{challenge.title}</h3>
                <p className="text-slate-600 leading-relaxed">{challenge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR SOLUTIONS FOR THIS INDUSTRY */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-blue-600 font-bold tracking-widest uppercase text-sm">Strategic Solutions</h3>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Engineering for Recurring Revenue
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We eliminate technical debt by building on decoupled, scalable architectures. Our focus is on delivering a frictionless user experience paired with a highly secure backend.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Bulletproof Multi-Tenant Database Architecture.",
                "Stripe/Braintree Integration for Metered & Tiered Billing.",
                "Automated CI/CD pipelines for daily feature releases.",
                "Sub-second latency via edge caching and read-replicas."
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-800 font-semibold text-lg">
                  <CheckCircle2 className="text-blue-500 w-6 h-6 mr-3 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm"><Layers className="w-10 h-10 mb-4 text-blue-600" /><h4 className="font-bold text-slate-900">Tenant Isolation</h4><p className="text-slate-600 text-sm mt-2">Pool, Bridge, or Silo data models.</p></div>
             <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-xl shadow-blue-900/20"><CreditCard className="w-10 h-10 mb-4 text-emerald-400" /><h4 className="font-bold">Subscription Engine</h4><p className="text-slate-400 text-sm mt-2">Handling proration & upgrades.</p></div>
             <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-xl shadow-blue-900/20"><LayoutDashboard className="w-10 h-10 mb-4 text-indigo-400" /><h4 className="font-bold">Super Admin Panel</h4><p className="text-slate-400 text-sm mt-2">Manage users, features, and billing.</p></div>
             <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm"><Network className="w-10 h-10 mb-4 text-blue-600" /><h4 className="font-bold text-slate-900">API Webhooks</h4><p className="text-slate-600 text-sm mt-2">Extensible third-party integrations.</p></div>
          </div>
        </div>
      </section>

      {/* 4. PLATFORMS WE BUILD */}
      <section className="py-24 px-6 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-white">SaaS Models We Engineer</h2>
            <p className="text-lg text-slate-400">From niche B2B tools to massive consumer platforms, we tailor the architecture to fit your specific go-to-market strategy.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "B2B Vertical SaaS", icon: <Building size={28} />, desc: "Hyper-specialized software tailored for specific industries like real estate, construction, or legal." },
              { title: "AI-Powered SaaS", icon: <Bot size={28} />, desc: "Next-gen platforms leveraging LLMs for generative content, predictive analytics, and automation." },
              { title: "Micro-SaaS", icon: <Zap size={28} />, desc: "Highly focused, single-purpose tools designed for rapid deployment, low overhead, and fast MRR." },
              { title: "Enterprise SaaS", icon: <Shield size={28} />, desc: "Complex, high-security platforms requiring SSO, strict role-based access, and SOC2 compliance." }
            ].map((prod, idx) => (
              <div key={idx} className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-blue-500 transition-colors group">
                <div className="text-blue-400 mb-6 group-hover:scale-110 transition-transform">{prod.icon}</div>
                <h3 className="text-xl font-bold mb-3">{prod.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{prod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SECURITY & COMPLIANCE ARCHITECTURE */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-slate-900 to-[#020617] rounded-[3rem] p-8 md:p-16 text-white flex flex-col lg:flex-row items-center gap-12 border border-blue-900/50 relative overflow-hidden shadow-2xl">
          <div className="absolute bottom-0 right-0 p-32 opacity-5 pointer-events-none">
            <Lock size={400} />
          </div>
          <div className="flex-1 space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-bold tracking-wide uppercase">
              <ShieldCheck size={16} /> Enterprise Trust
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight">Zero-Trust SaaS Security</h2>
            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              Enterprise clients won't buy your SaaS if it isn't secure. We build strict data isolation and compliance protocols directly into the foundation of your platform, making passing technical due-diligence effortless.
            </p>
            <ul className="space-y-4 pt-4">
              {["Row-Level Security (RLS) for tenant data isolation.", "AES-256 Encryption at rest and in transit.", "Single Sign-On (SSO) & SAML integration.", "SOC2 & GDPR compliant infrastructure design."].map((item, i) => (
                <li key={i} className="flex items-center font-medium text-blue-50"><CheckCircle2 className="w-5 h-5 mr-3 text-blue-400 shrink-0" />{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 6. TECHNOLOGY STACK */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">The Modern SaaS Tech Stack</h2>
            <p className="text-lg text-slate-600">We utilize a bleeding-edge, highly performant stack to ensure your SaaS is fast, secure, and infinitely scalable.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { category: "Frontend Engine", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
              { category: "Backend & Logic", items: ["Node.js", "Python", "Go", "GraphQL / REST"] },
              { category: "Database & Cache", items: ["PostgreSQL", "MongoDB", "Redis", "Supabase"] },
              { category: "DevOps & Cloud", items: ["AWS / GCP", "Docker & K8s", "Vercel", "Stripe API"] },
            ].map((stack, idx) => (
              <div key={idx} className="bg-white border border-slate-200 shadow-sm rounded-2xl p-8 hover:border-blue-400 transition-colors">
                <h4 className="text-blue-600 font-bold mb-6 tracking-wide uppercase text-sm">{stack.category}</h4>
                <ul className="space-y-3">
                  {stack.items.map((item, i) => (
                    <li key={i} className="flex items-center text-slate-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3"></span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CASE STUDIES */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Proven SaaS Growth</h2>
            <p className="text-slate-600 text-lg">See how we have helped founders scale their MRR through superior product engineering.</p>
          </div>
          <Link href="/case-studies" className="text-blue-600 font-bold hover:text-blue-700 flex items-center gap-2">
            View SaaS Portfolio <ArrowRight size={18} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Enterprise HR Platform", desc: "Engineered a multi-tenant workforce management system handling 50,000+ daily active users with sub-second latency.", tags: ["Next.js", "AWS", "Multi-Tenant"] },
            { title: "AI Marketing SaaS", desc: "Built an intelligent content generation platform processing millions of API calls daily, scaling from $0 to $100k MRR in 8 months.", tags: ["OpenAI API", "Python", "Stripe"] },
          ].map((study, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all group cursor-pointer">
              <div className="flex gap-2 mb-6">
                {study.tags.map(tag => <span key={tag} className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">{tag}</span>)}
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

      {/* 8. WHY SAAS COMPANIES CHOOSE UPTIMISE */}
      <section className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden border-y border-slate-800">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-extrabold tracking-tight">The AI Software Factory Advantage</h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Startups and enterprise SaaS companies choose Uptimise IT because we utilize an AI-native engineering delivery model. 
              By deploying autonomous agents to write boilerplate code and configure infrastructure, our human architects can launch your platform 40% faster than traditional development agencies.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {[
              "40% Faster Time-to-Market",
              "Enterprise-Grade Architecture",
              "Transparent Agile Sprints",
              "No Vendor Lock-in"
            ].map((reason, i) => (
              <div key={i} className="bg-slate-800/80 border border-blue-500/30 p-4 rounded-xl flex items-center font-semibold text-white backdrop-blur-sm">
                <CheckCircle2 className="w-5 h-5 text-blue-400 mr-3 shrink-0" /> {reason}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA SECTION */}
      <section className="py-16 px-6 text-center max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">Ready to Build Your SaaS?</h2>
        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Stop worrying about technical debt and scalability limits. Let Uptimise IT engineer the platform while you focus on acquiring customers.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-10 py-5 bg-blue-600 text-white font-bold rounded-xl shadow-xl shadow-blue-600/20 hover:bg-blue-700 hover:scale-105 transition-all text-lg">
            Start Your SaaS Project
          </Link>
          <Link href="/contact" className="px-10 py-5 bg-white border-2 border-slate-200 text-slate-800 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg">
            Book a Strategy Call
          </Link>
        </div>
      </section>

    </div>
  );
}