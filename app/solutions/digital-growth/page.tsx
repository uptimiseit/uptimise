import React from "react";
import Link from "next/link";
import { 
  TrendingUp, Target, BarChart3, Users, 
  MousePointerClick, Zap, Megaphone, Search, 
  ArrowRight, CheckCircle2, LineChart, ArrowUpRight,
  Filter, Activity, Rocket, PieChart
} from "lucide-react";

export default function DigitalGrowthPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-rose-200 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8 overflow-hidden">
        {/* High-Energy Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-rose-50 blur-[120px] rounded-full -z-10"></div>
        <div className="absolute top-20 right-1/4 w-[400px] h-[300px] bg-orange-50/50 blur-[100px] rounded-full -z-10"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 border border-rose-100 text-rose-700 text-sm font-bold tracking-wide uppercase mb-4">
          <TrendingUp size={16} /> User Acquisition & Scaling
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight">
          Engineered for <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">Hyper-Growth</span>
        </h1>
        
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Stop paying for vanity metrics. We engineer data-driven acquisition engines that lower your CAC, maximize Customer Lifetime Value (LTV), and flood your platform with high-intent users.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-8 py-4 bg-rose-600 text-white font-bold rounded-xl shadow-lg shadow-rose-600/20 hover:bg-rose-700 hover:scale-105 transition-all text-lg">
            Scale Your Revenue
          </Link>
          <Link href="/contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg flex items-center justify-center gap-2">
            Get a Growth Audit <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* 2. GROWTH CHALLENGES */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">The Leaky Funnel Problem</h2>
            <p className="text-lg text-slate-600">Most agencies focus on top-of-funnel clicks, ignoring what happens after the user lands. This results in burned budgets and stagnant revenue.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Unsustainable CAC", desc: "Your ad costs are rising faster than your revenue, making it impossible to scale profitably without burning cash.", icon: <Activity className="text-red-500 w-8 h-8" /> },
              { title: "Vanity Metrics", desc: "Millions of impressions and likes that never translate into actual paying customers or qualified B2B leads.", icon: <Filter className="text-red-500 w-8 h-8" /> },
              { title: "Blind Attribution", desc: "You don't know which campaigns are actually driving sales because your analytics tracking is broken or siloed.", icon: <Target className="text-red-500 w-8 h-8" /> }
            ].map((challenge, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-red-200 transition-colors">
                <div className="mb-6 bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center">{challenge.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{challenge.title}</h3>
                <p className="text-slate-600 leading-relaxed">{challenge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. GROWTH STRATEGY */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-rose-600 font-bold tracking-widest uppercase text-sm">Our Strategy</h3>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Full-Funnel Revenue Engineering
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We treat marketing as a mathematical system. By analyzing the entire user journey—from the first ad click to the final retention email—we optimize every touchpoint to maximize your LTV:CAC ratio.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Multi-touch attribution modeling for accurate ROI.",
                "Omnichannel scaling (Search, Social, Programmatic).",
                "A/B testing ad creatives and landing pages relentlessly.",
                "Automated lifecycle marketing to reduce user churn."
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-800 font-semibold text-lg">
                  <CheckCircle2 className="text-rose-500 w-6 h-6 mr-3 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-slate-900 p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
             {/* Abstract Analytics Chart CSS */}
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
             <h3 className="text-2xl font-bold text-white mb-8 relative z-10 flex items-center gap-3">
               <LineChart className="text-orange-400" /> Revenue Trajectory
             </h3>
             <div className="relative z-10 h-48 w-full border-b-2 border-l-2 border-slate-700 flex items-end gap-2 pb-1 pl-1">
               {/* Growth Bars */}
               <div className="w-1/6 bg-rose-500/20 hover:bg-rose-500/40 transition-colors h-[20%] rounded-t-sm relative"><div className="absolute -top-6 text-xs text-slate-400 w-full text-center">Q1</div></div>
               <div className="w-1/6 bg-rose-500/40 hover:bg-rose-500/60 transition-colors h-[35%] rounded-t-sm relative"><div className="absolute -top-6 text-xs text-slate-400 w-full text-center">Q2</div></div>
               <div className="w-1/6 bg-rose-500/60 hover:bg-rose-500/80 transition-colors h-[55%] rounded-t-sm relative"><div className="absolute -top-6 text-xs text-slate-400 w-full text-center">Q3</div></div>
               <div className="w-1/6 bg-orange-500/80 hover:bg-orange-500 transition-colors h-[80%] rounded-t-sm relative"><div className="absolute -top-6 text-xs text-orange-300 w-full text-center font-bold">Q4</div></div>
               <div className="w-1/6 bg-gradient-to-t from-orange-500 to-yellow-400 h-[100%] rounded-t-sm relative shadow-[0_0_20px_rgba(249,115,22,0.4)]">
                 <div className="absolute -top-8 text-sm text-yellow-400 w-full text-center font-bold animate-pulse">Scale</div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. MARKETING SERVICES */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">Growth Engineering Services</h2>
            <p className="text-lg text-slate-600">We don't just run ads; we build interconnected growth systems that capture, convert, and retain users at scale.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Technical SEO & Organic", desc: "Dominating search engines through programmatic SEO, high-authority content, and deep technical site architecture optimization.", icon: <Search size={24} /> },
              { title: "Paid Acquisition (PPC)", desc: "Hyper-targeted campaigns across Google Ads, Meta, LinkedIn, and TikTok, optimized strictly for CPA and ROAS.", icon: <Megaphone size={24} /> },
              { title: "Conversion Rate Opt. (CRO)", desc: "A/B testing landing pages, optimizing checkout flows, and removing friction to turn more clicks into actual revenue.", icon: <MousePointerClick size={24} /> },
              { title: "Lifecycle & Email Marketing", desc: "Automated email and SMS sequences that nurture leads, recover abandoned carts, and drive repeat purchases.", icon: <Users size={24} /> }
            ].map((srv, idx) => (
              <div key={idx} className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-rose-900/5 transition-all group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center group-hover:bg-rose-600 group-hover:text-white transition-colors">
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

      {/* 5. GROWTH TECHNOLOGY STACK */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-[3rem] p-8 md:p-16 shadow-xl shadow-slate-100 flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">The Modern Growth Stack</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We configure enterprise-grade analytics and marketing automation tools to ensure every single dollar spent is tracked, measured, and attributed perfectly.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["Google Analytics 4", "Mixpanel", "Segment", "HubSpot", "Klaviyo", "Ahrefs", "Semrush", "VWO"].map(tech => (
                <span key={tech} className="px-4 py-2 bg-slate-100 text-slate-800 font-bold rounded-lg text-sm border border-slate-200 hover:border-orange-400 hover:text-orange-600 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full grid grid-cols-2 gap-4">
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-rose-600 font-bold mb-2">Product Analytics</h4><p className="text-slate-600 text-sm">Mixpanel, Amplitude</p></div>
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-rose-600 font-bold mb-2">Marketing Automation</h4><p className="text-slate-600 text-sm">HubSpot, Klaviyo</p></div>
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-rose-600 font-bold mb-2">SEO & SEM</h4><p className="text-slate-600 text-sm">Ahrefs, Google Ads API</p></div>
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center"><h4 className="text-rose-600 font-bold mb-2">Testing & CRO</h4><p className="text-slate-600 text-sm">VWO, Hotjar, Optimizely</p></div>
          </div>
        </div>
      </section>

      {/* 6. AI MARKETING SYSTEMS */}
      <section className="py-24 px-6 bg-[#0B0F19] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 text-sm font-bold tracking-wide uppercase">
              <Zap size={16} /> Programmatic Scaling
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              AI-Powered <span className="text-orange-500">Marketing Engines</span>
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              We leverage machine learning to predict Customer Lifetime Value (LTV), automate ad bidding strategies, and programmatically generate thousands of hyper-personalized SEO landing pages.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Programmatic SEO generation at massive scale.",
                "Predictive Churn modeling via machine learning.",
                "Dynamic ad creative generation and testing."
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-300 font-medium">
                  <CheckCircle2 className="text-orange-500 w-5 h-5 mr-3 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 w-full bg-slate-900 border border-slate-800 p-8 rounded-[2rem] shadow-[0_0_40px_rgba(249,115,22,0.1)]">
             <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
               <span className="text-white font-bold">Predictive LTV Model</span>
               <span className="text-emerald-400 text-sm font-mono flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div> Active</span>
             </div>
             <div className="space-y-4">
               <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex justify-between items-center">
                 <div><p className="text-white font-bold">User Cohort A</p><p className="text-slate-400 text-xs">High Intent Signals</p></div>
                 <div className="text-right"><p className="text-emerald-400 font-bold">Increase Bids</p><p className="text-slate-500 text-xs">Predicted LTV: $1,200</p></div>
               </div>
               <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex justify-between items-center opacity-60">
                 <div><p className="text-white font-bold">User Cohort B</p><p className="text-slate-400 text-xs">Low Engagement</p></div>
                 <div className="text-right"><p className="text-rose-400 font-bold">Halt Spend</p><p className="text-slate-500 text-xs">Predicted LTV: $45</p></div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 7. GROWTH PROCESS */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">The Growth Sprint Framework</h2>
          <p className="text-lg text-slate-600">We don't do "set it and forget it" marketing. We run aggressive, high-tempo 2-week growth sprints to test hypotheses and scale winners.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Data Audit", desc: "Fixing broken pixels, establishing baseline metrics, and setting up clean multi-touch attribution." },
            { step: "02", title: "Hypothesis", desc: "Designing tests for ad creatives, landing pages, and email flows based on user data." },
            { step: "03", title: "Execution", desc: "Launching high-tempo A/B tests to find statistically significant winners." },
            { step: "04", title: "Scale", desc: "Pouring budget into the winning channels and killing underperforming ads instantly." }
          ].map((process, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-orange-50 hover:border-orange-200 transition-colors relative overflow-hidden group">
               <div className="text-sm font-black text-orange-500 mb-3 uppercase tracking-wider">Phase {process.step}</div>
               <h4 className="text-xl font-bold text-slate-900 mb-2">{process.title}</h4>
               <p className="text-sm text-slate-600 leading-relaxed">{process.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. BUSINESS IMPACT */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="w-16 h-16 mx-auto bg-rose-50 text-rose-600 rounded-full flex items-center justify-center mb-6"><Target size={32} /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Lower CAC</h3>
            <p className="text-slate-600">By optimizing landing pages and targeting high-intent users, we drive down your Customer Acquisition Cost significantly.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="w-16 h-16 mx-auto bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mb-6"><Rocket size={32} /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Predictable Scaling</h3>
            <p className="text-slate-600">Turn your marketing into a reliable machine: you know exactly how much revenue $1 of ad spend will generate.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="w-16 h-16 mx-auto bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-6"><PieChart size={32} /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Higher LTV</h3>
            <p className="text-slate-600">Through lifecycle marketing and automated re-engagement, we maximize the total value extracted from every user.</p>
          </div>
        </div>
      </section>

      {/* 9. CASE STUDIES */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Growth Success Stories</h2>
            <p className="text-slate-600 text-lg">See how our data-driven frameworks have generated massive ROI for our clients.</p>
          </div>
          <Link href="/case-studies" className="text-rose-600 font-bold hover:text-rose-700 flex items-center gap-2">
            View All Growth Work <ArrowRight size={18} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "B2B SaaS Acquisition", desc: "Rebuilt their Google Ads structure and optimized the free-trial onboarding flow, reducing Cost Per Lead (CPL) by 42% while doubling trial volume.", tags: ["Google Ads", "CRO", "HubSpot"] },
            { title: "E-Commerce Revenue Scaling", desc: "Implemented programmatic SEO and automated Klaviyo flows, scaling monthly recurring revenue (MRR) from $50k to $210k in 6 months.", tags: ["SEO", "Lifecycle", "Klaviyo"] },
          ].map((study, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-rose-900/5 transition-all group cursor-pointer">
              <div className="flex gap-2 mb-6">
                {study.tags.map(tag => <span key={tag} className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-100">{tag}</span>)}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-rose-600 transition-colors">{study.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-8">{study.desc}</p>
              <span className="text-rose-600 font-semibold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                Read Case Study <ArrowRight size={16} />
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 10. CTA SECTION */}
      <section className="py-32 px-6 text-center max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">Stop Buying Clicks. Start Buying Customers.</h2>
        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Scale your business with an engineering-first approach to marketing. Let's build an acquisition engine that prints predictable revenue.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-10 py-5 bg-rose-600 text-white font-bold rounded-xl shadow-xl shadow-rose-600/20 hover:bg-rose-700 hover:scale-105 transition-all text-lg">
            Scale Your Growth
          </Link>
          <Link href="/contact" className="px-10 py-5 bg-white border-2 border-slate-200 text-slate-800 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg">
            Request Growth Audit
          </Link>
        </div>
      </section>

    </div>
  );
}