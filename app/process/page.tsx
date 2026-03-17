import React from "react";
import Link from "next/link";
import { 
  Workflow, Search, Bot, Code2, ShieldCheck, 
  Rocket, ArrowRight, CheckCircle2, GitMerge, 
  Clock, Zap, LayoutDashboard, Terminal, 
  Database, ArrowUpRight, Gauge, MessagesSquare,
  Video
} from "lucide-react";

export default function OurProcessPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100 pb-20 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8">
        {/* Precision & Velocity Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-50 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-cyan-50/50 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-bold tracking-wide uppercase mb-4 shadow-sm">
          <Workflow size={16} /> The Delivery Protocol
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight">
          How We Build <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">At Venture Speed</span>
        </h1>
        
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Say goodbye to the "black box" agency model. We use a transparent, AI-accelerated engineering framework that delivers enterprise-grade software 40% faster than traditional development teams.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 hover:scale-105 transition-all text-lg">
            Start Your Project
          </Link>
          <a href="#framework" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg flex items-center justify-center gap-2">
            Explore the Framework <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* 2. THE PROBLEM VS OUR SOLUTION */}
      <section className="py-24 px-6 border-y border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Traditional Development is Broken.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Most agencies still build software like it's 2015. They spend months writing repetitive boilerplate code, communicate rarely, and treat security as an afterthought. This leads to blown budgets and delayed launches.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              <strong className="text-slate-900">Uptimise IT is different.</strong> By pairing elite human architects with autonomous AI coding agents, we have eliminated the bottleneck of manual typing.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 relative overflow-hidden">
             <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
               <span className="text-slate-900 font-bold flex items-center gap-2"><Clock className="text-red-500"/> The Velocity Difference</span>
             </div>
             
             {/* Pure CSS Gantt Chart Comparison */}
             <div className="space-y-6">
               {/* Traditional Agency */}
               <div>
                 <p className="text-slate-500 text-xs font-bold uppercase mb-2">Traditional Agency (6 Months)</p>
                 <div className="w-full bg-slate-100 rounded-full h-6 flex overflow-hidden border border-slate-200 shadow-inner">
                   <div className="bg-slate-200 w-1/4 h-full flex items-center justify-center text-[10px] font-bold text-slate-600 border-r border-slate-300">Planning</div>
                   <div className="bg-red-100 w-1/2 h-full flex items-center justify-center text-[10px] font-bold text-red-600 border-r border-red-200">Manual Coding (Slow)</div>
                   <div className="bg-slate-200 w-1/4 h-full flex items-center justify-center text-[10px] font-bold text-slate-600">QA & Launch</div>
                 </div>
               </div>
               
               {/* Uptimise IT */}
               <div>
                 <p className="text-indigo-600 text-xs font-bold uppercase mb-2 flex items-center gap-2">Uptimise AI Factory (8 Weeks) <Zap size={12} className="text-amber-500"/></p>
                 <div className="w-full bg-slate-100 rounded-full h-6 flex overflow-hidden border border-slate-200 relative shadow-inner">
                   <div className="bg-slate-200 w-[15%] h-full flex items-center justify-center text-[10px] font-bold text-slate-600 border-r border-slate-300">Arch.</div>
                   <div className="bg-indigo-600 w-[20%] h-full flex items-center justify-center text-[10px] font-bold text-white border-r border-indigo-700 relative overflow-hidden shadow-sm">
                     <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                     AI Scaffold
                   </div>
                   <div className="bg-cyan-100 w-[25%] h-full flex items-center justify-center text-[10px] font-bold text-cyan-800 border-r border-cyan-200">Human Logic</div>
                   <div className="bg-emerald-100 w-[10%] h-full flex items-center justify-center text-[10px] font-bold text-emerald-800 border-r border-emerald-200">QA</div>
                   <div className="bg-transparent w-[30%] h-full flex items-center pl-4 text-[10px] font-bold text-emerald-600">Launch & Scale 🚀</div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. THE 5-STEP FRAMEWORK (Vertical Timeline Style) */}
      <section id="framework" className="py-32 px-6 max-w-5xl mx-auto relative">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">The 5-Step Delivery Engine</h2>
          <p className="text-lg text-slate-600">A rigorous, deterministic process designed to turn your vision into a secure, scalable platform.</p>
        </div>

        {/* Central Line */}
        <div className="absolute left-6 md:left-1/2 top-64 bottom-0 w-1 bg-slate-100 -translate-x-1/2 hidden md:block"></div>

        <div className="space-y-12 md:space-y-24 relative z-10">
          
          {/* STEP 1 */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="md:w-1/2 md:text-right space-y-4 order-2 md:order-1">
              <h4 className="text-cyan-600 font-bold tracking-widest text-sm uppercase">Phase 01</h4>
              <h3 className="text-3xl font-bold text-slate-900">Discovery & Architecture</h3>
              <p className="text-slate-600 leading-relaxed">
                Before writing a single line of code, our Senior Architects map your entire system. We define database schemas, select the optimal cloud infrastructure, and create high-fidelity UI/UX prototypes.
              </p>
              <div className="flex flex-wrap gap-2 md:justify-end pt-2">
                <span className="px-3 py-1 bg-slate-50 border border-slate-200 text-xs font-bold text-slate-600 rounded">Figma</span>
                <span className="text-xs font-bold text-slate-400 my-auto">+</span>
                <span className="px-3 py-1 bg-slate-50 border border-slate-200 text-xs font-bold text-slate-600 rounded">System Blueprints</span>
              </div>
            </div>
            <div className="w-16 h-16 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center text-cyan-500 shrink-0 order-1 md:order-2 relative z-10 shadow-lg shadow-cyan-100/50">
              <Search size={24} />
            </div>
            <div className="md:w-1/2 order-3 hidden md:block"></div>
          </div>

          {/* STEP 2 */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="md:w-1/2 order-1 hidden md:block"></div>
            <div className="w-16 h-16 rounded-full bg-white border-4 border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0 order-1 md:order-2 relative z-10 shadow-lg shadow-indigo-200/50">
              <Bot size={24} />
              {/* Pulse effect to show AI working */}
              <div className="absolute inset-0 rounded-full border-2 border-indigo-400 animate-ping opacity-30"></div>
            </div>
            <div className="md:w-1/2 space-y-4 order-2 md:order-3">
              <h4 className="text-indigo-600 font-bold tracking-widest text-sm uppercase">Phase 02</h4>
              <h3 className="text-3xl font-bold text-slate-900">AI-Assisted Scaffolding</h3>
              <p className="text-slate-600 leading-relaxed">
                The AI Software Factory ingests the architecture blueprint and instantly generates the repository, database migrations, authentication flows, and API boilerplate. What used to take 3 weeks now takes 3 days.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 bg-indigo-50 border border-indigo-100 text-xs font-bold text-indigo-700 rounded">Next.js Bootstrapping</span>
                <span className="px-3 py-1 bg-indigo-50 border border-indigo-100 text-xs font-bold text-indigo-700 rounded">DB Migrations</span>
              </div>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="md:w-1/2 md:text-right space-y-4 order-2 md:order-1">
              <h4 className="text-cyan-600 font-bold tracking-widest text-sm uppercase">Phase 03</h4>
              <h3 className="text-3xl font-bold text-slate-900">Agile Sprint Execution</h3>
              <p className="text-slate-600 leading-relaxed">
                Our human engineers step in to craft the complex, proprietary business logic. We work in aggressive 2-week agile sprints, providing you with transparent demos at the end of every cycle. You see exactly what is being built in real-time.
              </p>
              <div className="flex flex-wrap gap-2 md:justify-end pt-2">
                <span className="px-3 py-1 bg-slate-50 border border-slate-200 text-xs font-bold text-slate-600 rounded">Custom Logic</span>
                <span className="px-3 py-1 bg-slate-50 border border-slate-200 text-xs font-bold text-slate-600 rounded">Weekly Demos</span>
              </div>
            </div>
            <div className="w-16 h-16 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center text-cyan-500 shrink-0 order-1 md:order-2 relative z-10 shadow-lg shadow-cyan-100/50">
              <Code2 size={24} />
            </div>
            <div className="md:w-1/2 order-3 hidden md:block"></div>
          </div>

          {/* STEP 4 */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="md:w-1/2 order-1 hidden md:block"></div>
            <div className="w-16 h-16 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center text-emerald-500 shrink-0 order-1 md:order-2 relative z-10 shadow-lg shadow-emerald-100/50">
              <ShieldCheck size={24} />
            </div>
            <div className="md:w-1/2 space-y-4 order-2 md:order-3">
              <h4 className="text-emerald-600 font-bold tracking-widest text-sm uppercase">Phase 04</h4>
              <h3 className="text-3xl font-bold text-slate-900">Automated QA & Security</h3>
              <p className="text-slate-600 leading-relaxed">
                Before deployment, our CI/CD pipelines run thousands of automated unit and integration tests. We utilize AI security agents to scan the codebase for vulnerabilities (like SQL injection or XSS) ensuring enterprise-grade compliance.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 bg-emerald-50 border border-emerald-100 text-xs font-bold text-emerald-700 rounded">Jest / Cypress</span>
                <span className="px-3 py-1 bg-emerald-50 border border-emerald-100 text-xs font-bold text-emerald-700 rounded">DevSecOps Audit</span>
              </div>
            </div>
          </div>

          {/* STEP 5 */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="md:w-1/2 md:text-right space-y-4 order-2 md:order-1">
              <h4 className="text-cyan-600 font-bold tracking-widest text-sm uppercase">Phase 05</h4>
              <h3 className="text-3xl font-bold text-slate-900">Deployment & Scale</h3>
              <p className="text-slate-600 leading-relaxed">
                We containerize the application and deploy it to highly available, auto-scaling cloud infrastructure (AWS/Vercel). We set up real-time observability tools so we can monitor performance metrics and scale resources as your user base grows.
              </p>
              <div className="flex flex-wrap gap-2 md:justify-end pt-2">
                <span className="px-3 py-1 bg-slate-50 border border-slate-200 text-xs font-bold text-slate-600 rounded">Docker / K8s</span>
                <span className="px-3 py-1 bg-slate-50 border border-slate-200 text-xs font-bold text-slate-600 rounded">Datadog Monitoring</span>
              </div>
            </div>
            <div className="w-16 h-16 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center text-cyan-500 shrink-0 order-1 md:order-2 relative z-10 shadow-lg shadow-cyan-100/50">
              <Rocket size={24} />
            </div>
            <div className="md:w-1/2 order-3 hidden md:block"></div>
          </div>

        </div>
      </section>

      {/* 4. CLIENT COLLABORATION / ZERO BLACK BOXES */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Zero Black Boxes.<br/>Absolute Transparency.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We integrate directly into your operations. You won't have to wait weeks for a status update. You have direct access to your architects, engineers, and project managers.
            </p>
            
            <div className="space-y-6 pt-4">
              <div className="flex gap-4">
                <MessagesSquare className="text-indigo-600 shrink-0 w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Shared Slack / Teams Channels</h4>
                  <p className="text-slate-600 text-sm mt-1">Direct communication with your engineering squad during business hours.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <LayoutDashboard className="text-indigo-600 shrink-0 w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Live Jira/Linear Boards</h4>
                  <p className="text-slate-600 text-sm mt-1">Real-time visibility into every ticket, bug fix, and feature being developed.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Video className="text-indigo-600 shrink-0 w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Weekly Demo Calls</h4>
                  <p className="text-slate-600 text-sm mt-1">See the actual working software at the end of every sprint, not just slide decks.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-cyan-50 blur-3xl rounded-[3rem]"></div>
             <div className="bg-white border border-slate-200 p-8 rounded-[2rem] relative z-10 shadow-2xl shadow-slate-200/50">
               <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                 <div className="flex items-center gap-2">
                   <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                   <span className="text-slate-900 font-bold text-sm"># project-updates</span>
                 </div>
                 <span className="text-slate-400 text-xs font-medium">Today</span>
               </div>
               
               {/* Mock Slack/Chat UI */}
               <div className="space-y-6">
                 <div className="flex gap-4">
                   <div className="w-8 h-8 rounded bg-indigo-100 border border-indigo-200 flex items-center justify-center text-xs font-bold text-indigo-700 shrink-0">PM</div>
                   <div>
                     <p className="text-slate-900 text-sm font-bold flex items-baseline gap-2">Sarah (Project Manager) <span className="text-xs text-slate-400 font-normal">10:42 AM</span></p>
                     <p className="text-slate-600 text-sm mt-1 leading-relaxed">Sprint 4 is complete! The Stripe integration and multi-tenant DB migrations are live on the staging server.</p>
                     <div className="mt-2 bg-slate-50 border border-slate-200 p-3 rounded-lg flex items-center gap-3 w-max">
                       <Terminal size={14} className="text-emerald-600"/>
                       <span className="text-xs font-mono text-emerald-700">staging-v1.4.2-deployed</span>
                     </div>
                   </div>
                 </div>
                 
                 <div className="flex gap-4">
                   <div className="w-8 h-8 rounded bg-slate-100 border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-700 shrink-0">CL</div>
                   <div>
                     <p className="text-slate-900 text-sm font-bold flex items-baseline gap-2">You (Client) <span className="text-xs text-slate-400 font-normal">10:45 AM</span></p>
                     <p className="text-slate-600 text-sm mt-1 leading-relaxed">Looks amazing. Testing it now. Are we still on track for the Friday demo?</p>
                   </div>
                 </div>
                 
                 <div className="flex gap-4">
                   <div className="w-8 h-8 rounded bg-cyan-100 border border-cyan-200 flex items-center justify-center text-xs font-bold text-cyan-800 shrink-0">TL</div>
                   <div>
                     <p className="text-slate-900 text-sm font-bold flex items-baseline gap-2">Alex (Tech Lead) <span className="text-xs text-slate-400 font-normal">10:47 AM</span></p>
                     <p className="text-slate-600 text-sm mt-1 leading-relaxed">Yes! I'll walk you through the codebase architecture during the call. 🚀</p>
                   </div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-32 px-6 text-center max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">Stop Waiting. Start Building.</h2>
        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Experience the velocity of AI-native engineering. Partner with a team that executes with mathematical precision and total transparency.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-10 py-5 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 hover:scale-105 transition-all text-lg">
            Initialize Your Project
          </Link>
          <Link href="/contact" className="px-10 py-5 bg-white border border-slate-200 text-slate-800 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg shadow-sm">
            Book a Strategy Call
          </Link>
        </div>
      </section>

    </div>
  );
}