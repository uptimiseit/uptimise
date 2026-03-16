import React from "react";
import Link from "next/link";
import { 
  Rocket, Clock, ShieldAlert, Wallet, Cpu, Layers, 
  Smartphone, Bot, Server, Zap, LineChart, Code2, 
  CheckCircle2, ArrowRight, LayoutDashboard, Database
} from "lucide-react";

export default function MVPDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-orange-50/80 blur-[100px] rounded-full -z-10"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-bold tracking-wide uppercase mb-4 border border-orange-200">
          <Rocket size={16} /> For Founders & Startups
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight">
          Build Your Startup MVP <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">Faster & Smarter</span>
        </h1>
        
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Don't burn your runway on slow development. Uptimise IT builds scalable, investor-ready Minimum Viable Products in weeks, not months, using AI-native engineering and modern cloud architecture.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-8 py-4 bg-orange-500 text-white font-bold rounded-xl shadow-lg shadow-orange-500/20 hover:bg-orange-600 hover:scale-105 transition-all text-lg">
            Discuss Your MVP Idea
          </Link>
          <Link href="/contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg">
            Get an Estimate
          </Link>
        </div>
      </section>

      {/* 2. STARTUP CHALLENGES */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Why Most MVPs Fail</h2>
            <p className="text-lg text-slate-600">Startups operate in high-risk environments. Traditional development agencies often set founders up for failure through slow timelines and fragile code.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Too Slow to Market", desc: "Spending 6-9 months building an MVP means missing the market window and running out of cash before launch.", icon: <Clock className="text-red-500 w-8 h-8" /> },
              { title: "Technical Debt", desc: "Freelancers often hack together unscalable code. When you get your first 1,000 users, the whole system crashes.", icon: <ShieldAlert className="text-red-500 w-8 h-8" /> },
              { title: "Runway Burn", desc: "Over-engineering features that users don't actually want drains your budget before you achieve Product-Market Fit.", icon: <Wallet className="text-red-500 w-8 h-8" /> }
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

      {/* 3. MVP DEVELOPMENT APPROACH */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-orange-500 font-bold tracking-widest uppercase text-sm">Our Approach</h3>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              The Lean, AI-Native MVP Methodology
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We focus strictly on the core value proposition. Our goal is to get a functional, beautiful, and scalable product into the hands of your users as fast as possible to start gathering real-world data.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Core Feature Isolation (No over-engineering)",
                "Scalable Architecture Foundations (Ready for Series A)",
                "Rapid AI-Assisted Prototyping",
                "Built-in Analytics for User Tracking"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-800 font-semibold text-lg">
                  <CheckCircle2 className="text-orange-500 w-6 h-6 mr-3 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 mt-8">
              <div className="bg-orange-50 p-6 rounded-3xl border border-orange-100"><span className="text-2xl font-black text-orange-600">01. Build</span><p className="text-slate-600 mt-2 text-sm">Ship the core product fast.</p></div>
              <div className="bg-slate-900 text-white p-6 rounded-3xl"><span className="text-2xl font-black text-white">03. Learn</span><p className="text-slate-400 mt-2 text-sm">Iterate based on feedback.</p></div>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100"><span className="text-2xl font-black text-blue-600">02. Measure</span><p className="text-slate-600 mt-2 text-sm">Track user behavior data.</p></div>
              <div className="bg-pink-50 p-6 rounded-3xl border border-pink-100"><span className="text-2xl font-black text-pink-600">04. Scale</span><p className="text-slate-600 mt-2 text-sm">Expand the tech stack safely.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT WE BUILD (MVP PRODUCTS) */}
      <section className="py-24 px-6 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-white">What We Build for Founders</h2>
            <p className="text-lg text-slate-400">Whether you are building the next big SaaS or a consumer app, we have the specialized engineering teams to execute it flawlessly.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "B2B SaaS MVPs", icon: <LayoutDashboard size={28} />, desc: "Multi-tenant architectures with subscriptions." },
              { title: "AI Product Wrappers", icon: <Bot size={28} />, desc: "LLM-integrated apps leveraging OpenAI or Anthropic." },
              { title: "Two-Sided Marketplaces", icon: <Layers size={28} />, desc: "Secure platforms connecting buyers and sellers." },
              { title: "Mobile App MVPs", icon: <Smartphone size={28} />, desc: "Cross-platform React Native or Flutter apps." }
            ].map((prod, idx) => (
              <div key={idx} className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-orange-500 transition-colors group">
                <div className="text-orange-400 mb-6 group-hover:scale-110 transition-transform">{prod.icon}</div>
                <h3 className="text-xl font-bold mb-3">{prod.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{prod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TECHNOLOGY STACK FOR MVP */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-[3rem] p-8 md:p-16 shadow-xl shadow-slate-100 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">The Modern Startup Stack</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We do not use outdated legacy code or rigid CMS templates. Your MVP is built on the exact same modern, scalable stack used by billion-dollar unicorns.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["Next.js", "React", "Node.js", "PostgreSQL", "Supabase", "AWS", "Tailwind CSS", "Vercel"].map(tech => (
                <span key={tech} className="px-4 py-2 bg-slate-100 text-slate-800 font-bold rounded-lg text-sm border border-slate-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full grid grid-cols-2 gap-4">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center justify-center"><Code2 className="text-slate-400 w-8 h-8 mb-3" /><span className="font-bold text-slate-800">Frontend</span></div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center justify-center"><Server className="text-slate-400 w-8 h-8 mb-3" /><span className="font-bold text-slate-800">Backend</span></div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center justify-center"><Database className="text-slate-400 w-8 h-8 mb-3" /><span className="font-bold text-slate-800">Database</span></div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center justify-center"><Zap className="text-slate-400 w-8 h-8 mb-3" /><span className="font-bold text-slate-800">Deployment</span></div>
          </div>
        </div>
      </section>

      {/* 6. AI SOFTWARE FACTORY ACCELERATION */}
      <section className="py-24 px-6 bg-[#0B0F19] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-bold tracking-wide uppercase">
            <Bot size={16} /> AI Software Factory
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto">
            Launch 40% Faster with <span className="text-blue-500">AI-Native Engineering</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            We utilize proprietary AI agent workflows to automate boilerplate code, infrastructure setup, and testing. This allows our senior engineers to focus strictly on your unique business logic, cutting your time-to-market nearly in half.
          </p>
        </div>
      </section>

      {/* 7. DEVELOPMENT PROCESS */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">The Startup Delivery Protocol</h2>
          <p className="text-lg text-slate-600">A ruthless, structured process designed to get you from concept to first-paying-customer.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: "1. Scope", title: "Feature Scoping", desc: "Ruthlessly trimming the fat. We define the exact features needed to prove the concept." },
            { step: "2. Design", title: "UX/UI Prototyping", desc: "Creating high-fidelity Figma designs to visualize the product before coding." },
            { step: "3. Build", title: "Sprint Development", desc: "Agile, 2-week engineering sprints with full transparency and weekly demos." },
            { step: "4. Launch", title: "Deploy & Monitor", desc: "Deploying to scalable cloud infrastructure and setting up user analytics." }
          ].map((process, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-orange-50 hover:border-orange-100 transition-colors group">
              <div className="text-sm font-black text-orange-500 mb-4 tracking-widest uppercase">{process.step}</div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{process.title}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{process.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. STARTUP SUCCESS BENEFITS */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="w-16 h-16 mx-auto bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6"><LineChart size={32} /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Investor-Ready Code</h3>
            <p className="text-slate-600">Pass technical due diligence with ease. We write clean, documented, and modular code that VCs love.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="w-16 h-16 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6"><Zap size={32} /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Rapid Pivot Capability</h3>
            <p className="text-slate-600">Our architecture is decoupled, allowing you to easily pivot features based on early user feedback without breaking the app.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="w-16 h-16 mx-auto bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-6"><Wallet size={32} /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Cost-Efficient Scaling</h3>
            <p className="text-slate-600">Cloud-native setups using serverless tech ensure you only pay for the exact computing power your active users consume.</p>
          </div>
        </div>
      </section>

      {/* 9. WHY STARTUPS CHOOSE UPTIMISE */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-orange-600 text-white rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl shadow-orange-600/20">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-extrabold tracking-tight">Why Startups Choose Uptimise IT</h2>
            <p className="text-orange-100 text-lg leading-relaxed">
              We operate as your interim technical co-founder. You get an elite squad of designers, architects, and developers who understand business logic—not just code.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {[
              "Transparent weekly demos",
              "Direct access to architects",
              "No vendor lock-in",
              "Post-launch growth support"
            ].map((reason, i) => (
              <div key={i} className="bg-orange-700/50 border border-orange-500/50 p-4 rounded-xl flex items-center font-semibold text-white">
                <CheckCircle2 className="w-5 h-5 text-orange-300 mr-3 shrink-0" /> {reason}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA SECTION */}
      <section className="py-32 px-6 text-center max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">Stop Dreaming. Start Building.</h2>
        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          The market won't wait. Let's build a highly scalable, investor-ready MVP and get your product into the hands of real users.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-10 py-5 bg-slate-900 text-white font-bold rounded-xl shadow-xl hover:bg-slate-800 hover:scale-105 transition-all text-lg">
            Book a Strategy Call
          </Link>
          <Link href="/contact" className="px-10 py-5 bg-white border-2 border-slate-200 text-slate-800 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg">
            Calculate MVP Cost
          </Link>
        </div>
      </section>

    </div>
  );
}