import React from "react";
import Link from "next/link";
import { 
  Handshake, Coins, Network, ArrowRight, 
  CheckCircle2, Users, Briefcase, LayoutDashboard, 
  LineChart, Send, ShieldCheck, Zap, Globe, Building
} from "lucide-react";

export default function PartnerProgramPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8 overflow-hidden">
        {/* Wealth & Trust Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-100/60 blur-[120px] rounded-full -z-10"></div>
        <div className="absolute top-20 right-1/4 w-[400px] h-[300px] bg-emerald-50/60 blur-[100px] rounded-full -z-10"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-sm font-bold tracking-wide uppercase mb-4">
          <Handshake size={16} /> Uptimise IT Partner Program
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight">
          Earn by Referring <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-emerald-500">Technology Projects</span>
        </h1>
        
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          We collaborate with agencies, consultants, and technology professionals. Introduce companies that need software development, AI solutions, or cloud infrastructure, and earn a <span className="font-bold text-emerald-600">10% commission</span> for every successful project.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <a href="#apply" className="px-8 py-4 bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-700/20 hover:bg-blue-800 hover:scale-105 transition-all text-lg">
            Apply for Partnership
          </a>
          <a href="#how-it-works" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg flex items-center justify-center gap-2">
            See How It Works
          </a>
        </div>
      </section>

      {/* 2. PARTNER TYPES */}
      <section className="py-24 px-6 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Ways to Partner With Us</h2>
            <p className="text-lg text-slate-600">Our program is designed to build long-term relationships where both sides benefit from successful technology projects.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Referral Partners", subtitle: "Earn 10% Commission", desc: "You make the introduction, we close the deal and build the product. You earn 10% of the project value as a finder's fee.", icon: <Coins className="text-emerald-500 w-8 h-8" />, border: "border-emerald-200", bg: "bg-emerald-50" },
              { title: "Agency Partners", subtitle: "Collaborative Delivery", desc: "Marketing and design agencies can white-label our engineering team or collaborate transparently to deliver complex tech builds to their clients.", icon: <Users className="text-blue-500 w-8 h-8" />, border: "border-blue-200", bg: "bg-blue-50" },
              { title: "Technology Partners", subtitle: "Platform Integrations", desc: "For SaaS and platform companies looking to build native integrations or co-market solutions to our shared enterprise client base.", icon: <Network className="text-indigo-500 w-8 h-8" />, border: "border-indigo-200", bg: "bg-indigo-50" }
            ].map((type, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform relative overflow-hidden group">
                <div className={`absolute top-0 left-0 w-full h-1 ${type.bg} border-t ${type.border}`}></div>
                <div className={`mb-6 ${type.bg} w-16 h-16 rounded-2xl flex items-center justify-center`}>{type.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{type.title}</h3>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">{type.subtitle}</p>
                <p className="text-slate-600 leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS (Timeline) */}
      <section id="how-it-works" className="py-24 px-6 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">How the Referral Program Works</h2>
          <p className="text-lg text-slate-600">A completely transparent, zero-friction process. You focus on relationships; we focus on engineering.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-10 -translate-y-1/2"></div>
          
          {[
            { step: "01", title: "Refer a Client", desc: "Introduce a startup or company that needs SaaS, AI, or cloud engineering." },
            { step: "02", title: "Consultation", desc: "We connect with the client, scope the requirements, and prepare the technical plan." },
            { step: "03", title: "Project Execution", desc: "Once approved, our AI Software Factory team begins development." },
            { step: "04", title: "Earn Commission", desc: "You receive 10% of the project value once milestone payments begin." }
          ].map((process, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/20 relative group hover:border-blue-400 transition-colors">
               <div className="w-10 h-10 bg-blue-100 text-blue-700 font-black rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-sm">
                 {idx + 1}
               </div>
               <h4 className="text-xl font-bold text-slate-900 mb-3">{process.title}</h4>
               <p className="text-sm text-slate-600 leading-relaxed">{process.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. THE PARTNER DASHBOARD (Pro Feature) */}
      <section className="py-24 px-6 bg-[#0A1128] text-white relative overflow-hidden border-y border-slate-800">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-bold tracking-wide uppercase">
              <LayoutDashboard size={16} /> Partner Portal
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Total Transparency. <br/><span className="text-emerald-500">Track Your Earnings.</span>
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              Never wonder about the status of your referral. Partners get access to a dedicated dashboard to track introductions, monitor project development phases, and view upcoming commission payouts in real-time.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Real-time pipeline tracking (Lead -> Closed Won).",
                "Automated commission calculations and payout history.",
                "Direct communication channels with the project architect."
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-300 font-medium">
                  <CheckCircle2 className="text-emerald-500 w-5 h-5 mr-3 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex-1 w-full bg-slate-900 border border-slate-700 p-6 rounded-[2rem] shadow-[0_0_50px_rgba(16,185,129,0.15)]">
             {/* Mock Dashboard UI */}
             <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center"><Briefcase size={16}/></div>
                 <span className="text-white font-bold">Partner Dashboard</span>
               </div>
               <span className="text-slate-400 text-sm">Welcome, Partner</span>
             </div>
             
             <div className="grid grid-cols-2 gap-4 mb-6">
               <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                 <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Total Earned</p>
                 <p className="text-2xl font-bold text-emerald-400">$14,250</p>
               </div>
               <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                 <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Active Referrals</p>
                 <p className="text-2xl font-bold text-white">3</p>
               </div>
             </div>

             <div className="space-y-3">
               <p className="text-sm font-bold text-slate-300 mb-2">Recent Pipeline</p>
               <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 flex justify-between items-center">
                 <div><p className="text-white font-bold text-sm">Acme Corp SaaS Build</p><p className="text-slate-400 text-xs">Referred: Oct 12</p></div>
                 <div className="text-right"><span className="bg-blue-500/20 text-blue-300 border border-blue-500/30 px-2 py-1 rounded text-xs">In Development</span></div>
               </div>
               <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 flex justify-between items-center">
                 <div><p className="text-white font-bold text-sm">Global Logistics ERP</p><p className="text-slate-400 text-xs">Referred: Nov 04</p></div>
                 <div className="text-right"><span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-1 rounded text-xs">Payout Pending</span></div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 5. BENEFITS & WHO IS IT FOR */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Benefits */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Partner Benefits</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <Coins className="text-emerald-500 mb-4 w-8 h-8" />
                <h4 className="font-bold text-slate-900 mb-2">Earn Referral Revenue</h4>
                <p className="text-sm text-slate-600">Receive 10% commission for every successful project you refer.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <ShieldCheck className="text-blue-600 mb-4 w-8 h-8" />
                <h4 className="font-bold text-slate-900 mb-2">No Delivery Risk</h4>
                <p className="text-sm text-slate-600">You only make the intro. Uptimise IT manages the entire development process.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <Zap className="text-orange-500 mb-4 w-8 h-8" />
                <h4 className="font-bold text-slate-900 mb-2">Trusted Engineering</h4>
                <p className="text-sm text-slate-600">Your network gets access to elite, AI-assisted development systems.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <LineChart className="text-indigo-500 mb-4 w-8 h-8" />
                <h4 className="font-bold text-slate-900 mb-2">Long-Term Upside</h4>
                <p className="text-sm text-slate-600">Continue referring clients and earning commissions on future project phases.</p>
              </div>
            </div>
          </div>

          {/* Who & What */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Who Can Become a Partner?</h3>
              <p className="text-slate-600 text-sm mb-6">Open to professionals who interact with businesses building digital products:</p>
              <div className="flex flex-wrap gap-2">
                {["Marketing Agencies", "Design Studios", "Startup Consultants", "Freelance Developers", "Tech Advisors", "Product Managers", "VCs & Angels"].map(tag => (
                  <span key={tag} className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-xs font-bold border border-slate-200">{tag}</span>
                ))}
              </div>
            </div>

            <div className="bg-blue-900 text-white p-8 rounded-3xl shadow-xl shadow-blue-900/20">
              <h3 className="text-xl font-bold mb-4">Solutions You Can Refer</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-blue-100">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-400"/> SaaS Development</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-400"/> AI Applications</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-400"/> Startup MVPs</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-400"/> Cloud Infrastructure</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-400"/> Enterprise Software</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-400"/> Workflow Automation</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 6. APPLICATION FORM SECTION */}
      <section id="apply" className="py-16 px-6 max-w-4xl mx-auto">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-slate-200 shadow-2xl shadow-slate-200/50">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Become a Partner</h2>
            <p className="text-lg text-slate-600">Create a new revenue stream by connecting your network with elite software engineering.</p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Full Name *</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" placeholder="John Doe" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Work Email *</label>
                <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" placeholder="john@company.com" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Company / Agency Name</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" placeholder="Acme Digital" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Country *</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" placeholder="United States" required />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Partner Type *</label>
              <div className="relative">
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all cursor-pointer" required>
                  <option value="" disabled selected>Select an option...</option>
                  <option value="agency">Agency Partner (Marketing/Design)</option>
                  <option value="consultant">Technology Consultant</option>
                  <option value="freelancer">Freelancer</option>
                  <option value="advisor">Startup Advisor / VC</option>
                  <option value="referral">Standard Referral Partner</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Message / Notes</label>
              <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none" placeholder="Tell us briefly about the types of clients you usually work with..."></textarea>
            </div>

            <button type="submit" className="w-full bg-blue-700 text-white font-bold text-lg rounded-xl py-4 flex items-center justify-center gap-2 hover:bg-blue-800 transition-all shadow-lg shadow-blue-700/20">
              Submit Application <Send size={18} />
            </button>
            <p className="text-center text-xs text-slate-500 mt-4">
              By applying, you agree to our Partnership Terms & Conditions. Our team will review your application and reach out within 24 hours.
            </p>
          </form>

        </div>
      </section>

    </div>
  );
}