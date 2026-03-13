import React from 'react';
import { Check, X, Zap, Users2, Clock, BarChart3, Workflow } from 'lucide-react';

const CompareSection = () => {
  const comparisonData = [
    {
      feature: "Team Structure",
      icon: <Users2 size={18} />,
      traditional: "Large, bloated teams",
      uptimise: "Small, elite AI-hybrid squads",
      status: "Efficiency"
    },
    {
      feature: "Workflow Type",
      icon: <Zap size={18} />,
      traditional: "Manual & human-dependent",
      uptimise: "AI-orchestrated automation",
      status: "Velocity"
    },
    {
      feature: "Delivery Speed",
      icon: <Clock size={18} />,
      traditional: "Slow, sequential cycles",
      uptimise: "Accelerated parallel delivery",
      status: "Speed"
    },
    {
      feature: "Operational Cost",
      icon: <BarChart3 size={18} />,
      traditional: "High overhead & sunk costs",
      uptimise: "Optimized production costs",
      status: "ROI"
    },
    {
      feature: "Development Model",
      icon: <Workflow size={18} />,
      traditional: "Sequential waterfall process",
      uptimise: "Parallel AI-assisted engineering",
      status: "Agility"
    }
  ];

  return (
    <section className="relative bg-white py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="mb-20 space-y-4 flex items-center justify-between">
          <span className="text-blue-600 font-mono tracking-widest text-sm uppercase font-bold">
            # The Competitive Edge
          </span>
          <h2 className="text-5xl md:text-7xl font-black font-header tracking-tighter text-slate-950 leading-[0.9]">
            Why We Are <br />
            <span className="text-slate-300 italic">Different.</span>
          </h2>
        </div>

        {/* Comparison Table Container */}
        <div className="border border-slate-100 rounded-[3rem] overflow-hidden bg-white shadow-2xl shadow-slate-100">
          
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-slate-950 p-8 text-white items-center">
            <div className="col-span-4 text-xs font-black uppercase tracking-widest opacity-50 font-mono">Core Metric</div>
            <div className="col-span-4 text-xs font-black uppercase tracking-widest opacity-50 font-mono">Traditional Model</div>
            <div className="col-span-4 text-xs font-black uppercase tracking-widest text-blue-400 font-mono flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
               Uptimise Factory
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-slate-50">
            {comparisonData.map((item, i) => (
              <div key={i} className="grid grid-cols-12 p-8 items-center group hover:bg-slate-50 transition-colors duration-300">
                
                {/* Metric Label */}
                <div className="col-span-4 flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-slate-100 text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-bold text-slate-950 text-lg">{item.feature}</p>
                    <p className="text-[10px] font-mono text-slate-300 font-bold uppercase tracking-widest">{item.status}</p>
                  </div>
                </div>

                {/* Traditional Agency Column */}
                <div className="col-span-4 flex items-center gap-3 pr-8">
                  <div className="p-1 rounded-full bg-red-50 text-red-400">
                    <X size={12} />
                  </div>
                  <p className="text-slate-400 font-body italic text-sm">{item.traditional}</p>
                </div>

                {/* Uptimise Column */}
                <div className="col-span-4 flex items-center gap-3">
                  <div className="p-1 rounded-full bg-blue-50 text-blue-600">
                    <Check size={12} strokeWidth={4} />
                  </div>
                  <p className="text-slate-900 font-black font-header text-lg tracking-tight">
                    {item.uptimise}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* Bottom Note */}
        <div className="mt-12 flex justify-center">
           <div className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-slate-50 border border-slate-100 text-slate-500 font-body text-sm italic">
              <Zap size={16} className="text-blue-600" />
              This model delivers up to 100x higher ROI compared to traditional agency cycles.
           </div>
        </div>
      </div>
    </section>
  );
};

export default CompareSection;