import React from 'react';
import { AlertCircle, Clock, Users, BarChart3, ArrowRight, ShieldAlert, ZapOff } from 'lucide-react';

const ProblemSection = () => {
  return (
    <section className="relative bg-white py-10 px-6 overflow-hidden">
      {/* Background Tech-Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[32px_32px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT: The "Friction Grid" Visual */}
          <div className="relative">

                <h2 className="text-3xl md:text-5xl font-black font-serif font-header tracking-normal text-slate-900 leading-10">
                Traditional <br />
                Development <br />
                <span className="text-slate-200">Is Obsolete.</span>
              </h2>

            <div className="grid grid-cols-2 gap-4">
              
              {/* BIG TEAM & HIGH COST */}
              <div className="p-6 bg-slate-50 border border-slate-100 rounded-4xl space-y-4">
                <div className="flex justify-between items-start">
                  <Users className="text-slate-400" size={24} />
                  <span className="text-[10px] font-mono text-red-500 bg-red-50 px-2 py-1 rounded">HIGH COST</span>
                </div>
                <h4 className="font-bold text-slate-900">Big Teams</h4>
                <p className="text-xs text-slate-500 font-body">Massive overhead with diminishing returns on output.</p>
              </div>

              {/* HUMAN ERROR */}
              <div className="p-6 bg-white border border-slate-100 rounded-4xl shadow-xl shadow-slate-200/40 space-y-4 mt-8">
                <div className="flex justify-between items-start">
                  <ShieldAlert className="text-orange-500" size={24} />
                  <div className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-ping" />
                </div>
                <h4 className="font-bold text-slate-900">Human Error</h4>
                <p className="text-xs text-slate-500 font-body">Manual workflows lead to inconsistent code and security risks.</p>
              </div>

              {/* ZERO AGILITY */}
              <div className="p-6 bg-slate-900 rounded-4xl space-y-4 -mt-4 text-white">
                <ZapOff className="text-blue-400" size={24} />
                <h4 className="font-bold">Zero Agility</h4>
                <p className="text-xs text-slate-400 font-body">Rigid structures that can't pivot to market demands.</p>
              </div>

              {/* SLOW SPEED */}
              <div className="p-6 bg-slate-50 border border-slate-100 rounded-[2rem] space-y-4">
                <Clock className="text-slate-400" size={24} />
                <h4 className="font-bold text-slate-900">Slow Speed</h4>
                <p className="text-xs text-slate-500 font-body">Weeks spent on boilerplate that AI handles in seconds.</p>
              </div>
            </div>

            {/* OVERLAY: Timeline Delay Alert */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[280px] bg-white border-2 border-red-500 p-4 rounded-2xl shadow-2xl rotate-[-2deg] z-20">
              <div className="flex items-center gap-3 text-red-600">
                <AlertCircle size={20} className="shrink-0" />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-tighter">Timeline Delay Detected</p>
                  <p className="text-sm font-bold">Delivery Delay: +12 Weeks</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: The Manifesto */}
          <div className="space-y-10">
            <div className="space-y-4 flex  items-center justify-between">
                 
              <span className="text-blue-600 font-mono text-sm font-bold tracking-widest uppercase italic">
                # The Friction Analysis
              </span>
         
            </div>

            <div className="space-y-6 text-xl text-slate-600 font-body leading-relaxed">
              <p className="text-slate-950 font-bold border-l-4 border-red-500 pl-6">
                Legacy agencies rely on <span className="text-red-600 underline decoration-2 underline-offset-4">Big Teams</span> and manual labor, resulting in exponential <span className="text-red-600">Human Error</span>.
              </p>
              
              <p className='font-serif text-lg'>
                The industry is plagued by <span className="font-bold text-slate-900">Slow Speed</span> and <span className="font-bold text-slate-900">Zero Agility</span>. Complex communication layers and fragmented processes aren't just bottlenecks—they are the primary cause of <span className="italic">Timeline Delays</span> and <span className="italic">Delivery Delays</span>.
              </p>
            </div>

            {/* The Pivot to Solution */}
            <div className="group cursor-pointer bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:border-blue-500 transition-all">
              <p className="text-xs font-black text-blue-600 uppercase tracking-[0.2em] mb-4">Transition to Velocity</p>
              <div className="flex items-center justify-between">
                <h4 className="text-3xl font-black font-header text-slate-950 tracking-tight">
                  Deploy the AI-Native <br />Software Factory.
                </h4>
                <div className="w-14 h-14 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  <ArrowRight />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSection;