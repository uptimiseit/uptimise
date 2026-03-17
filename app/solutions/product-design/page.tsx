import React from "react";
import Link from "next/link";
import { 
  PenTool, EyeOff, TrendingDown, UserX, 
  Layers, Smartphone, LayoutTemplate, MousePointerClick, 
  ArrowRight, Palette, Figma, CheckCircle2, 
  LineChart, SplitSquareHorizontal, ArrowUpRight,
  MonitorSmartphone, Heart, Zap, Sparkles
} from "lucide-react";

export default function ProductDesignPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-fuchsia-200 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8 overflow-hidden">
        {/* Ambient Creative Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-fuchsia-50 blur-[120px] rounded-full -z-10"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-50 border border-fuchsia-100 text-fuchsia-700 text-sm font-bold tracking-wide uppercase mb-4">
          <Sparkles size={16} /> Experience Engineering
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight">
          Designing Digital Products <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-rose-500">People Love to Use</span>
        </h1>
        
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          We bridge the gap between human psychology and digital interfaces. Uptimise IT crafts scalable design systems and high-converting user experiences that drive retention and delight your customers.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-8 py-4 bg-fuchsia-600 text-white font-bold rounded-xl shadow-lg shadow-fuchsia-600/20 hover:bg-fuchsia-700 hover:scale-105 transition-all text-lg">
            Redesign Your Product
          </Link>
          <Link href="/contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg flex items-center justify-center gap-2">
            Request UX Audit <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* 2. UX PROBLEMS BUSINESSES FACE */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Why Great Products Fail</h2>
            <p className="text-lg text-slate-600">You can build the most advanced software in the world, but if the interface is confusing, your users will abandon it within seconds.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "High Churn Rates", desc: "Users sign up but leave immediately because the onboarding flow is overwhelming and lacks clear direction.", icon: <UserX className="text-red-500 w-8 h-8" /> },
              { title: "Conversion Drop-offs", desc: "Clunky checkout processes and poor mobile responsiveness destroying your acquisition ROI.", icon: <TrendingDown className="text-red-500 w-8 h-8" /> },
              { title: "Feature Obscurity", desc: "You spend months building powerful features, but users never find them because the navigation architecture is broken.", icon: <EyeOff className="text-red-500 w-8 h-8" /> }
            ].map((challenge, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-rose-200 transition-colors">
                <div className="mb-6 bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center">{challenge.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{challenge.title}</h3>
                <p className="text-slate-600 leading-relaxed">{challenge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DESIGN STRATEGY */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-fuchsia-600 font-bold tracking-widest uppercase text-sm">Strategic Design</h3>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Behavioral Science Meets Aesthetics
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We don't design based on guesswork or subjective opinions. Our design strategy is rooted in data, user psychology, and proven conversion frameworks. We build systems that guide users effortlessly to their "Aha!" moment.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Data-driven UX research and user journey mapping.",
                "Cognitive load reduction to simplify complex tasks.",
                "Atomic Design principles for scalable UI architecture.",
                "Accessibility (WCAG) compliance built-in from day one."
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-800 font-semibold text-lg">
                  <CheckCircle2 className="text-fuchsia-500 w-6 h-6 mr-3 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-slate-900 p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
             {/* Abstract Wireframe to UI CSS Concept */}
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
             <h3 className="text-2xl font-bold text-white mb-8 relative z-10 flex items-center gap-3">
               <Layers className="text-fuchsia-400" /> Wireframe to Reality
             </h3>
             <div className="relative z-10 flex gap-6 h-64">
               {/* Wireframe Side */}
               <div className="flex-1 border-2 border-dashed border-slate-700 rounded-2xl p-4 flex flex-col gap-4">
                 <div className="w-1/2 h-4 bg-slate-800 rounded"></div>
                 <div className="w-full h-24 bg-slate-800 rounded-xl"></div>
                 <div className="w-1/3 h-8 bg-slate-700 rounded-lg mt-auto"></div>
               </div>
               <div className="flex flex-col justify-center text-slate-600"><ArrowRight /></div>
               {/* High Fidelity Side */}
               <div className="flex-1 bg-white rounded-2xl p-4 flex flex-col gap-4 shadow-[0_0_30px_rgba(217,70,239,0.2)] border border-fuchsia-200">
                 <div className="w-1/2 h-4 bg-slate-200 rounded"></div>
                 <div className="w-full h-24 bg-gradient-to-br from-fuchsia-100 to-rose-50 rounded-xl border border-fuchsia-100"></div>
                 <div className="w-full h-8 bg-fuchsia-600 rounded-lg mt-auto shadow-md"></div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. DESIGN SERVICES */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">End-to-End Product Design</h2>
            <p className="text-lg text-slate-600">From raw ideas to pixel-perfect developer handoffs, our design team covers the entire product spectrum.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "UX/UI Design", desc: "Creating intuitive user flows and stunning visual interfaces for web, mobile, and desktop applications.", icon: <MonitorSmartphone size={24} /> },
              { title: "Design Systems", desc: "Building scalable, reusable component libraries (Atomic Design) to ensure visual consistency as your engineering team grows.", icon: <LayoutTemplate size={24} /> },
              { title: "UX Audits & Revamps", desc: "Deep-diving into your existing product to identify friction points, accessibility issues, and UI inconsistencies.", icon: <EyeOff size={24} /> },
              { title: "Rapid Prototyping", desc: "Building high-fidelity, interactive prototypes in Figma to test with users and investors before writing a single line of code.", icon: <MousePointerClick size={24} /> }
            ].map((srv, idx) => (
              <div key={idx} className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-fuchsia-900/5 transition-all group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-fuchsia-50 text-fuchsia-600 rounded-xl flex items-center justify-center group-hover:bg-fuchsia-600 group-hover:text-white transition-colors">
                    {srv.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{srv.title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed pl-16">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DESIGN TOOLS */}
      <section className="py-24 px-6 bg-[#0B0F19] text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight text-white leading-tight">
              The Modern Design Stack
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              We utilize industry-leading design and prototyping tools that integrate seamlessly with modern engineering workflows, ensuring zero friction during developer handoff.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
               {[
                 "Figma (Auto-Layout Pro)", 
                 "Framer (Web Design)", 
                 "Spline (3D Interactions)", 
                 "Storybook (Dev Handoff)"
               ].map((sec, idx) => (
                 <div key={idx} className="flex items-center gap-3 bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                   <Palette className="text-fuchsia-400 shrink-0 w-5 h-5" />
                   <span className="text-sm font-semibold text-slate-200">{sec}</span>
                 </div>
               ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-800 border border-slate-700 p-8 rounded-3xl text-center hover:border-fuchsia-500/50 transition-colors">
              <Figma className="text-fuchsia-400 w-10 h-10 mx-auto mb-4" />
              <h4 className="text-white font-bold mb-2">Figma</h4>
              <p className="text-slate-400 text-sm">Our core UI/UX and collaborative design engine.</p>
            </div>
             <div className="bg-slate-800 border border-slate-700 p-8 rounded-3xl text-center hover:border-rose-500/50 transition-colors">
              <Smartphone className="text-rose-400 w-10 h-10 mx-auto mb-4" />
              <h4 className="text-white font-bold mb-2">Protopie / Principle</h4>
              <p className="text-slate-400 text-sm">Advanced micro-interactions and animations.</p>
            </div>
             <div className="bg-slate-800 border border-slate-700 p-8 rounded-3xl text-center hover:border-fuchsia-500/50 transition-colors">
              <LineChart className="text-fuchsia-400 w-10 h-10 mx-auto mb-4" />
              <h4 className="text-white font-bold mb-2">Hotjar / Mixpanel</h4>
              <p className="text-slate-400 text-sm">Post-launch behavioral tracking and heatmaps.</p>
            </div>
             <div className="bg-slate-800 border border-slate-700 p-8 rounded-3xl text-center hover:border-rose-500/50 transition-colors">
              <LayoutTemplate className="text-rose-400 w-10 h-10 mx-auto mb-4" />
              <h4 className="text-white font-bold mb-2">Storybook</h4>
              <p className="text-slate-400 text-sm">UI component testing and developer documentation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. UX PROCESS */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 border border-rose-100 text-rose-700 text-sm font-bold tracking-wide uppercase mb-4">
            <PenTool size={16} /> Methodology
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">The Iterative Design Process</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We don't design in a vacuum. We follow a rigorous, feedback-driven process to ensure the final product solves real user problems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { step: "01", title: "Research", desc: "Competitor analysis, user interviews, and defining product requirements." },
            { step: "02", title: "Wireframes", desc: "Low-fidelity structural layouts and user flow mapping." },
            { step: "03", title: "UI Design", desc: "Applying brand identity, typography, and high-fidelity aesthetics." },
            { step: "04", title: "Prototype", desc: "Linking screens to create a clickable, interactive model." },
            { step: "05", title: "Handoff", desc: "Delivering organized Figma files and assets to engineering." }
          ].map((process, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-fuchsia-300 transition-colors group relative overflow-hidden">
               <div className="text-sm font-black text-fuchsia-600 mb-3 uppercase tracking-wider">{process.step}</div>
               <h4 className="text-lg font-bold text-slate-900 mb-2">{process.title}</h4>
               <p className="text-sm text-slate-600 leading-relaxed">{process.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CONVERSION OPTIMIZATION (CRO) */}
      <section className="py-24 px-6 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300 text-sm font-bold tracking-wide uppercase">
              <SplitSquareHorizontal size={16} /> CRO Design
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Design That Drives <span className="text-rose-500">Revenue</span>
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              Beautiful design is useless if it doesn't convert. We specialize in Conversion Rate Optimization (CRO), redesigning checkout flows, landing pages, and SaaS onboarding to maximize your metrics.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "A/B and Multivariate Testing designs.",
                "Heatmap and scroll-depth analysis.",
                "Micro-copy optimization for CTA buttons.",
                "Frictionless onboarding flows."
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-300 font-medium">
                  <CheckCircle2 className="text-rose-500 w-5 h-5 mr-3 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 w-full bg-slate-800 border border-slate-700 p-8 rounded-[2rem] shadow-2xl relative">
             <div className="flex items-center justify-between mb-6">
               <span className="text-white font-bold">Conversion Funnel</span>
               <span className="text-emerald-400 text-sm font-bold flex items-center gap-1">+24% Lift <TrendingDown className="rotate-180 w-4 h-4"/></span>
             </div>
             <div className="space-y-3">
               {/* Funnel Visualization */}
               <div className="bg-slate-700 w-full h-12 rounded-xl flex items-center justify-between px-4"><span className="text-sm font-medium text-white">Landing Page</span><span className="text-xs text-slate-400">10,000 users</span></div>
               <div className="bg-fuchsia-900/40 border border-fuchsia-500/30 w-5/6 mx-auto h-12 rounded-xl flex items-center justify-between px-4"><span className="text-sm font-medium text-fuchsia-100">Sign Up Flow</span><span className="text-xs text-fuchsia-300">4,200 users</span></div>
               <div className="bg-rose-900/40 border border-rose-500/30 w-3/4 mx-auto h-12 rounded-xl flex items-center justify-between px-4"><span className="text-sm font-medium text-rose-100">Onboarding</span><span className="text-xs text-rose-300">3,100 users</span></div>
               <div className="bg-emerald-900/40 border border-emerald-500/30 w-2/3 mx-auto h-12 rounded-xl flex items-center justify-between px-4"><span className="text-sm font-medium text-emerald-100">Paid Activation</span><span className="text-xs font-bold text-emerald-400">2,850 users</span></div>
             </div>
          </div>
        </div>
      </section>

      {/* 8. PRODUCT EXPERIENCE BENEFITS */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="w-16 h-16 mx-auto bg-fuchsia-50 text-fuchsia-600 rounded-full flex items-center justify-center mb-6"><Heart size={32} /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Brand Loyalty</h3>
            <p className="text-slate-600">Products that are enjoyable and intuitive to use create fiercely loyal brand advocates who refer others.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="w-16 h-16 mx-auto bg-rose-50 text-rose-600 rounded-full flex items-center justify-center mb-6"><TrendingDown size={32} /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Lower Support Costs</h3>
            <p className="text-slate-600">When your UI is intuitive, users don't need to submit support tickets to figure out how to use your software.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="w-16 h-16 mx-auto bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-6"><Zap size={32} /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Faster Engineering</h3>
            <p className="text-slate-600">A robust Design System means your developers stop writing custom CSS and start assembling pre-designed components.</p>
          </div>
        </div>
      </section>

      {/* 9. CASE STUDIES */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Design Case Studies</h2>
            <p className="text-slate-600 text-lg">See how we have transformed complex workflows into stunning, high-converting interfaces.</p>
          </div>
          <Link href="/case-studies" className="text-fuchsia-600 font-bold hover:text-fuchsia-700 flex items-center gap-2">
            View All Work <ArrowRight size={18} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "FinTech Dashboard Revamp", desc: "Redesigned a complex enterprise financial tool, simplifying the data visualization and resulting in a 40% increase in daily active usage.", tags: ["UX/UI", "Design System", "Dashboard"] },
            { title: "E-Commerce Checkout Flow", desc: "Conducted a UX audit and redesigned the mobile checkout experience, reducing cart abandonment by 18% and generating instant ROI.", tags: ["CRO", "Mobile First", "Prototyping"] },
          ].map((study, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-fuchsia-900/5 transition-all group cursor-pointer">
              <div className="flex gap-2 mb-6">
                {study.tags.map(tag => <span key={tag} className="text-xs font-bold text-fuchsia-700 bg-fuchsia-50 border border-fuchsia-100 px-3 py-1 rounded-full">{tag}</span>)}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-fuchsia-600 transition-colors">{study.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-8">{study.desc}</p>
              <span className="text-fuchsia-600 font-semibold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                View Case Study <ArrowRight size={16} />
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 10. CTA SECTION */}
      <section className="py-32 px-6 text-center max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">Don't Let Bad UX Kill Your Product.</h2>
        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Whether you are building from scratch or need to modernize a legacy interface, our design team is ready to craft an experience your users will love.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-10 py-5 bg-fuchsia-600 text-white font-bold rounded-xl shadow-xl shadow-fuchsia-600/20 hover:bg-fuchsia-700 hover:scale-105 transition-all text-lg">
            Discuss Your Design Needs
          </Link>
          <Link href="/contact" className="px-10 py-5 bg-white border-2 border-slate-200 text-slate-800 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg">
            Request UX Audit
          </Link>
        </div>
      </section>

    </div>
  );
}