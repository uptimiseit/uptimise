// app/services/growth-engineering/tech-stack.tsx
"use client";

import React from "react";
import { 
  BarChart3, Search, MousePointer, Target, Zap, Sparkles, Terminal 
} from "lucide-react";

// Define strict typing parameters for payload synchronization arrays
interface TechStackCard {
  category: string;
  code: string;
  iconKey: "analytics" | "seo" | "optimization" | "advertising" | "automation" | "aiTools";
  neonClass: string;
  glowClass: string;
  textClass: string;
  tools: string[];
}

interface TechStackPayload {
  terminalBadge: string;
  headlineMain: string;
  headlineGradient: string;
  environmentName: string;
  statusLog1: string;
  statusLog2: string;
  stacks: TechStackCard[];
}

const functionalIconRegistry: Record<string, React.ComponentType<{ size: number; className?: string }>> = {
  analytics: BarChart3,
  seo: Search,
  optimization: MousePointer,
  advertising: Target,
  automation: Zap,
  aiTools: Sparkles,
};

// Fallback schema defaults to preserve structural layouts when fields are blank
const fallbackTechStack: TechStackPayload = {
  terminalBadge: "// ENGINE_STACK_COMPILATION_V4",
  headlineMain: "Growth Technology",
  headlineGradient: "stack deployment",
  environmentName: "// RUNTIME_ENVIRONMENT",
  statusLog1: "Mixpanel / GA4 Pipeline Handshake: Secured",
  statusLog2: "Crawl Analytics Indexing Cluster: Listening",
  stacks: [
    { category: "Analytics", code: "DATA_CORE", iconKey: "analytics", neonClass: "hover:border-[#10B981]/50 hover:shadow-[#10B981]/10", glowClass: "from-[#10B981]/20", textClass: "text-[#10B981]", tools: ["Google Analytics 4", "Mixpanel", "PostHog", "Amplitude"] },
    { category: "SEO", code: "SERP_CRAWL", iconKey: "seo", neonClass: "hover:border-cyan-500/50 hover:shadow-cyan-500/10", glowClass: "from-cyan-500/20", textClass: "text-cyan-400", tools: ["Ahrefs", "SEMrush", "Screaming Frog", "Search Console"] },
  ]
};

export default function ServicesTechStackSection({ payload }: { payload?: TechStackPayload }) {
  // 🟢 FIX: Safe guard fallback ensures component never processes an undefined object track
  const activePayload = payload || fallbackTechStack;

  return (
    <section className="bg-[#030712] text-white py-36 px-6 border-y border-slate-900 relative overflow-hidden isolation-isolate">
      <div className="absolute inset-0 bg-[radial-gradient(#111827_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-70 -z-30" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#090d16_1px,transparent_1px),linear-gradient(to_bottom,#090d16_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-40 -z-20 mask-image-[radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Terminal Header Content */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8 pb-8 border-b border-slate-900/60">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-950 border border-slate-800 text-[#34D399] rounded-xl text-[10px] font-mono font-black uppercase tracking-widest shadow-2xl">
              {activePayload.terminalBadge}
            </div>
            <h2 className="text-4xl md:text-7xl font-black tracking-tight uppercase leading-none text-white">
              {activePayload.headlineMain} <br />
              <span className="text-transparent bg-clip-text pb-1 bg-gradient-to-r from-[#10B981] via-[#34D399] to-[#A7F3D0]">
                {activePayload.headlineGradient}
              </span>
            </h2>
          </div>
          
          <div className="font-mono text-[10px] text-slate-400 bg-slate-950 border border-slate-900 rounded-2xl p-5 max-w-sm flex items-start gap-4 shadow-2xl backdrop-blur-md relative">
            <Terminal size={14} className="text-[#34D399] shrink-0 mt-0.5" />
            <div className="space-y-1 uppercase tracking-wide">
              <div className="font-black text-white">{activePayload.environmentName}</div>
              <div className="text-[9px] text-slate-500 font-bold">{activePayload.statusLog1}</div>
              <div className="text-[9px] text-slate-500 font-bold">{activePayload.statusLog2}</div>
            </div>
          </div>
        </div>

        {/* Double Line Grid Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(activePayload.stacks || []).map((stack, i) => {
            const HeaderIcon = functionalIconRegistry[stack.iconKey] || Sparkles;

            return (
              <div 
                key={stack.category} 
                className={`p-8 rounded-[2.5rem] bg-slate-950/50 border border-slate-900/80 backdrop-blur-xl transition-all duration-500 ease-out flex flex-col justify-between min-h-[360px] relative overflow-hidden group shadow-2xl ${stack.neonClass} hover:-translate-y-2`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stack.glowClass} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                <div>
                  <div className="flex flex-col gap-3 pb-5 mb-6 border-b border-slate-900 relative z-10">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-inner">
                        <HeaderIcon size={22} className={`${stack.textClass}`} />
                      </div>
                      <h3 className="text-lg font-black uppercase tracking-wider text-white">
                        {stack.category}
                      </h3>
                    </div>
                    <span className="text-[9px] font-mono font-black tracking-widest text-slate-600 uppercase">// SYSTEM_NODE_0{i + 1} // PROTOCOL_{stack.code}</span>
                  </div>

                  <ul className="space-y-4 relative z-10">
                    {(stack.tools || []).map((tool, idx) => (
                      <li key={idx} className="text-[13px] font-extrabold tracking-wide uppercase text-slate-300 flex items-center gap-3.5">
                        <span className={`w-2 h-2 rounded-full bg-slate-800 border mr-2 border-slate-700`} /> 
                        <span className="truncate tracking-wide">{tool}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 mt-8 border-t border-slate-900/80 flex items-center justify-between font-mono text-[9px] tracking-widest font-black text-slate-600 relative z-10">
                  <span>DEPL_NODE_0{i + 1}</span>
                  <div className={`flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 ${stack.textClass}`}>
                    <span>SECURED_READY</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}