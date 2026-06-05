// // app/services/growth-engineering/hero.tsx
// "use client";

// import React, { useState } from "react";
// import { 
//   ArrowUpRight, Globe, Users, Target, CheckCircle2, 
//   TrendingUp, BarChart3, Sparkles
// } from "lucide-react";

// export default function ServiceHero() {
//   // Dynamic metric tracking switcher state based on selected funnel node
//   const [funnelContext, setFunnelContext] = useState<string>("DEFAULT");

//   // Dynamic metrics bank mapped seamlessly to funnel interaction states
//   const metricsData: Record<string, Array<{ value: string; label: string }>> = {
//     DEFAULT: [
//       { value: "300% Organic", label: "ORGANIC VISIBILITY POTENTIAL" },
//       { value: "Advanced Metrics", label: "DATA LOGGING & EVENT TRACKING" },
//       { value: "AI-Powered", label: "AUTOMATED OPTIMIZATION LAYER" },
//       { value: "Conversion Engine", label: "OUTCOME-DRIVEN APPROACH" },
//     ],
//     TRAFFIC: [
//       { value: "+320% SERP", label: "PROGRAMMATIC INGRESS VELOCITY" },
//       { value: "< 1.2s Load", label: "CORE WEB VITALS TARGET SWEEP" },
//       { value: "Server-Rendered", label: "NEXT.JS SSR OPTIMIZATION" },
//       { value: "AI Search Ready", label: "GEO SEARCH FABRIC LOCK" },
//     ],
//     LEADS: [
//       { value: "+180% Inbound", label: "CAPTURED ENTRY HANDSHAKES" },
//       { value: "Type-Safe Forms", label: "SCHEMA VALIDATED DATA INPUT" },
//       { value: "Enriched Logs", label: "AUTOMATED FIRMOGRAPHIC LOOKUP" },
//       { value: "HubSpot Native", label: "API SYNC PIPELINE CONNECTION" },
//     ],
//     CONVERSIONS: [
//       { value: "+68% CRO Gain", label: "MULTIVARIANT TESTING VALUE" },
//       { value: "Zero Friction", label: "USER JOURNEY LAYOUT TUNING" },
//       { value: "Intent Triggers", label: "CONTEXT CLUSTERING ENGINE" },
//       { value: "VWO Verified", label: "EVALUATION ACCURACY VERDICT" },
//     ],
//     CUSTOMERS: [
//       { value: "-42% CAC Drop", label: "INFRASTRUCTURE COST EFFICIENCY" },
//       { value: "ARR Replicated", label: "STRIPE ANALYTICS HANDSHAKE" },
//       { value: "Idempotency Built", label: "TRANSACTION SAFE PLATFORM" },
//       { value: "High Retention", label: "PRODUCT LED ENGAGEMENT HOOK" },
//     ],
//     GROWTH: [
//       { value: "Predictable ARR", label: "SUSTAINABLE COMPOUND MARGINS" },
//       { value: "Predictive LTV", label: "AI MODEL DATA PREDICTION" },
//       { value: "Viral Loops", label: "AUTOMATED INVITATION TRIGGER" },
//       { value: "Factory Velocity", label: "CONTINUOUS LIFECYCLE SCALING" },
//     ],
//   };

//   return (
//     <section className="relative pt-24 pb-32 px-6 mx-auto overflow-hidden bg-white border-b border-slate-100 max-w-[1440px]">
//       {/* Analytics Structural Engineering Grid Backdrop */}
//       <div className="absolute inset-0 mask-image-[radial-gradient(ellipse_at_center,transparent_20%,black)] bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:5rem_5rem] -z-20 opacity-40" />
      
//       {/* Hyper-Saturated Brand Fluid Blur Anchors */}
//       <div className="absolute top-[5%] right-[-5%] w-[650px] h-[650px] rounded-full blur-[140px] opacity-[0.14] bg-gradient-to-tr from-[#10B981] via-[#34D399] to-transparent pointer-events-none -z-10 animate-pulse duration-[8000ms]" />
//       <div className="absolute bottom-[-5%] left-[-5%] w-[450px] h-[450px] rounded-full blur-[120px] opacity-[0.05] bg-[#A7F3D0] pointer-events-none -z-10" />

//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
//         {/* ⬜ LEFT COLUMN: BRAND CONTENT MATRIX */}
//         <div className="lg:col-span-7 text-left space-y-8">
//           {/* Context Identity Badge */}
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-950 text-white border border-slate-900 rounded-full text-[10px] font-black tracking-widest uppercase shadow-xl shadow-slate-950/20">
//             <span className="flex h-1.5 w-1.5 relative">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34D399] opacity-80"></span>
//               <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#10B981]"></span>
//             </span>
//             Growth Engineering Services
//           </div>
          
//           {/* Aggressive Clean Heading Layout */}
//           <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-slate-950 uppercase leading-[0.95]">
//             Build Predictable <br />
//             <span className="text-slate-900 drop-shadow-sm">Growth Systems That</span> <br />
//             <span className="inline-block text-transparent bg-clip-text pb-1 italic font-serif tracking-normal lowercase bg-gradient-to-r from-[#10B981] via-[#34D399] to-[#A7F3D0] drop-shadow-sm py-1">
//               scale revenue
//             </span>
//           </h1>

//           {/* Narrative Subtext Copy */}
//           <p className="text-slate-500 text-xs md:text-sm leading-relaxed max-w-xl font-bold uppercase tracking-wider opacity-90">
//             We combine AI, analytics, technical SEO, conversion optimization, content systems, and performance marketing to build scalable growth engines for modern digital products.
//           </p>

//           {/* Premium Execution CTA Group */}
//           <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 max-w-md">
//             <button className="px-8 py-5 bg-slate-950 hover:bg-slate-900 border border-slate-950 text-white font-black text-[11px] uppercase tracking-widest rounded-3xl transition-all duration-300 shadow-2xl shadow-slate-950/40 flex items-center justify-center gap-3 group relative overflow-hidden">
//               Book Growth Strategy Session 
//               <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#34D399]" />
//             </button>
//             <button className="px-8 py-5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-black text-[11px] uppercase tracking-widest rounded-3xl transition-all duration-300 shadow-md shadow-slate-100">
//               Explore Growth Solutions
//             </button>
//           </div>
//         </div>

//         {/* 🟩 RIGHT COLUMN: HIGH-CONVERSION BROWSER SHELL INTERACTIVE MODULE */}
//         <div className="lg:col-span-5 flex justify-center lg:justify-end relative pt-8 lg:pt-0">
//           {/* Backing Ambient Gradient Aura */}
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#34D399]/20 blur-[90px] opacity-50 pointer-events-none" />

//           {/* Browser Canvas Container */}
//           <div className="w-full max-w-[420px] bg-white border border-slate-200/80 rounded-[2.5rem] p-6 shadow-[0_25px_60px_-15px_rgba(226,232,240,0.8)] relative z-10 transition-all duration-500 hover:-translate-y-1.5 group">
            
//             {/* Browser Upper Navigation Bar Window Header */}
//             <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
//               <div className="flex gap-1.5">
//                 <span className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-rose-400 transition-colors duration-300" />
//                 <span className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-amber-400 transition-colors duration-300" />
//                 <span className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-emerald-400 transition-colors duration-300" />
//               </div>
//               <span className="text-[8px] font-mono font-black text-slate-400 tracking-widest uppercase">// customer_acquisition_funnel</span>
//             </div>

//             {/* Funnel Component Steps Sequence */}
//             <div 
//               className="space-y-3 relative z-10"
//               onMouseLeave={() => setFunnelContext("DEFAULT")}
//             >
//               {[
//                 { id: "TRAFFIC", label: "TRAFFIC", icon: Globe, fill: "w-full" },
//                 { id: "LEADS", label: "LEADS", icon: Users, fill: "w-[85%]" },
//                 { id: "CONVERSIONS", label: "CONVERSIONS", icon: Target, fill: "w-[70%]" },
//                 { id: "CUSTOMERS", label: "CUSTOMERS", icon: CheckCircle2, fill: "w-[55%]" },
//                 { id: "GROWTH", label: "GROWTH", icon: TrendingUp, fill: "w-[40%]" }
//               ].map((tier, i) => {
//                 const TierIcon = tier.icon;
//                 const isSelected = funnelContext === tier.id;

//                 return (
//                   <div 
//                     key={i} 
//                     className="space-y-1.5 group/item cursor-pointer"
//                     onMouseEnter={() => setFunnelContext(tier.id)}
//                   >
//                     <div className={`flex items-center justify-between bg-white border rounded-2xl p-3.5 shadow-sm transition-all duration-300 ${
//                       isSelected ? "border-[#10B981] shadow-md shadow-[#10B981]/5 translate-x-1" : "border-slate-100 hover:border-slate-200/80"
//                     }`}>
//                       <div className="flex items-center gap-3">
//                         <div className={`w-8 h-8 rounded-xl border flex items-center justify-center transition-all duration-300 ${
//                           isSelected 
//                             ? "text-[#10B981] bg-[#10B981]/5 border-[#10B981]/20 scale-105" 
//                             : "text-slate-400 bg-slate-50 border-slate-100 group-hover/item:text-[#10B981] group-hover/item:bg-[#10B981]/5"
//                         }`}>
//                           <TierIcon size={14} className="transition-transform group-hover/item:scale-110" />
//                         </div>
//                         <span className={`text-[11px] font-mono font-black tracking-wider uppercase transition-colors duration-300 ${
//                           isSelected ? "text-[#10B981]" : "text-slate-800"
//                         }`}>
//                           {tier.label}
//                         </span>
//                       </div>
//                       <span className={`text-[8px] font-mono font-black tracking-widest border px-2 py-0.5 rounded uppercase transition-all duration-300 ${
//                         isSelected 
//                           ? "bg-[#10B981] text-white border-transparent" 
//                           : "bg-slate-50/50 text-slate-400 border-slate-100"
//                       }`}>
//                         {isSelected ? "Inspecting" : "Optimized"}
//                       </span>
//                     </div>
//                     {/* Dynamic Sliding Fill Track Indicator bar */}
//                     <div className="h-1 bg-slate-100 rounded-full mx-4 overflow-hidden relative shadow-inner">
//                       <div className={`h-full ${tier.fill} bg-gradient-to-r from-[#10B981] via-[#34D399] to-[#A7F3D0] rounded-full transition-all duration-500 ${
//                         isSelected ? "scale-x-[1.04] brightness-95" : ""
//                       } origin-left`} />
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Overlapping Absolute Revenue Floating Badge */}
//             <div className="absolute bottom-[-15px] -left-6 bg-slate-950 border border-slate-900 rounded-2xl p-4 text-white shadow-2xl flex items-center gap-3.5 max-w-[220px] transition-transform duration-500 group-hover:scale-105">
//               <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-[#34D399] shadow-inner">
//                 <BarChart3 size={16} className="animate-pulse" />
//               </div>
//               <div className="font-mono">
//                 <div className="text-[7px] font-black text-slate-500 uppercase tracking-widest">// REVENUE_FLOW</div>
//                 <div className="text-[10px] font-black text-white uppercase tracking-tight">ARR_MRR_SCALE</div>
//               </div>
//             </div>

//           </div>
//         </div>

//       </div>

//       {/* 🚀 MUTATING DATA RIBBON PANEL (Changes context dynamically based on right-side interactions) */}
//       <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 mt-36 pt-12 border-t border-slate-100 text-left relative z-10 bg-transparent">
//         {metricsData[funnelContext].map((metric, i) => (
//           <div 
//             key={funnelContext + i} 
//             className={`p-6 rounded-2xl relative shadow-sm font-mono border transition-all duration-500 transform animate-fadeIn ${
//               funnelContext !== "DEFAULT" 
//                 ? "bg-emerald-50/40 border-[#10B981]/30 shadow-[#10B981]/5" 
//                 : "bg-slate-50/40 border-slate-200/60 hover:border-[#34D399]/40 hover:bg-white"
//             }`}
//           >
//             <div className={`text-xl md:text-2xl font-black tracking-tight uppercase transition-colors duration-300 ${
//               funnelContext !== "DEFAULT" ? "text-[#10B981]" : "text-slate-950"
//             }`}>
//               {metric.value}
//             </div>
//             <div className="text-[9px] font-black text-slate-400 tracking-widest uppercase mt-2 block leading-none">
//               {metric.label}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }



// app/components/Services/Hero.tsx
"use client";

import React, { useState } from "react";
import { 
  ArrowUpRight, Globe, Users, Target, CheckCircle2, 
  TrendingUp, BarChart3
} from "lucide-react";

interface MetricItem {
  value: string;
  label: string;
}

interface HeroPayload {
  badgeText: string;
  badgeIconName: 'workflow' | 'zap' | 'cpu';
  headingRegularTop: string;
  headingGradient: string;
  headingRegularBottom?: string;
  gradientFromTo: string;
  description: string;
  primaryCta: { text: string; href: string; variant: string; icon?: string; };
  secondaryCta: { text: string; href: string; variant: string; icon?: string; };
  metricsMatrix: Record<string, MetricItem[]>;
}

// 🟢 FIX: Wrap payload inside the props interface mapping parameter
export default function ServiceHero({ payload }: { payload: HeroPayload }) {
  const [funnelContext, setFunnelContext] = useState<string>("DEFAULT");

  // Fallback structural safety check if data hasn't fully loaded from backend hooks
  if (!payload) return null;

  return (
    <section className="relative pt-24 pb-32 px-6 mx-auto overflow-hidden bg-white border-b border-slate-100 max-w-[1440px]">
      <div className="absolute inset-0 mask-image-[radial-gradient(ellipse_at_center,transparent_20%,black)] bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:5rem_5rem] -z-20 opacity-40" />
      
      <div className="absolute top-[5%] right-[-5%] w-[650px] h-[650px] rounded-full blur-[140px] opacity-[0.14] bg-gradient-to-tr from-[#10B981] via-[#34D399] to-transparent pointer-events-none -z-10 animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[450px] h-[450px] rounded-full blur-[120px] opacity-[0.05] bg-[#A7F3D0] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        <div className="lg:col-span-7 text-left space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-950 text-white border border-slate-900 rounded-full text-[10px] font-black tracking-widest uppercase shadow-xl shadow-slate-950/20">
            <span className="flex h-1.5 w-1.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34D399] opacity-80"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#10B981]"></span>
            </span>
            {payload.badgeText}
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter text-slate-950 uppercase leading-[0.95]">
            {payload.headingRegularTop} <br />
            {/* <span className="text-slate-900 drop-shadow-sm">{payload.headingGradient}</span> <br /> */}
            <span className="inline-block text-transparent bg-clip-text pb-1 italic font-serif tracking-normal lowercase bg-gradient-to-r from-[#10B981] via-[#34D399] to-[#A7F3D0] drop-shadow-sm py-1">
              {payload.headingGradient}
            </span>
          </h1>

          <p className="text-slate-500 text-xs md:text-sm leading-relaxed max-w-xl font-bold uppercase tracking-wider opacity-90">
            {payload.description}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 max-w-md">
            <a href={payload.primaryCta.href} className="px-8 py-5 bg-slate-950 hover:bg-slate-900 border border-slate-950 text-white font-black text-[11px] uppercase tracking-widest rounded-3xl transition-all duration-300 shadow-2xl shadow-slate-950/40 flex items-center justify-center gap-3 group relative overflow-hidden">
              {payload.primaryCta.text} 
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#34D399]" />
            </a>
            <a href={payload.secondaryCta.href} className="px-8 py-5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 text-center font-black text-[11px] uppercase tracking-widest rounded-3xl transition-all duration-300 shadow-md shadow-slate-100">
              {payload.secondaryCta.text}
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center lg:justify-end relative pt-8 lg:pt-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#34D399]/20 blur-[90px] opacity-50 pointer-events-none" />

          <div className="w-full max-w-[420px] bg-white border border-slate-200/80 rounded-[2.5rem] p-6 shadow-[0_25px_60px_-15px_rgba(226,232,240,0.8)] relative z-10 transition-all duration-500 hover:-translate-y-1.5 group">
            
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-rose-400 transition-colors duration-300" />
                <span className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-amber-400 transition-colors duration-300" />
                <span className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-emerald-400 transition-colors duration-300" />
              </div>
              <span className="text-[8px] font-mono font-black text-slate-400 tracking-widest uppercase">// customer_acquisition_funnel</span>
            </div>

            <div className="space-y-3 relative z-10" onMouseLeave={() => setFunnelContext("DEFAULT")}>
              {[
                { id: "TRAFFIC", label: "TRAFFIC", icon: Globe, fill: "w-full" },
                { id: "LEADS", label: "LEADS", icon: Users, fill: "w-[85%]" },
                { id: "CONVERSIONS", label: "CONVERSIONS", icon: Target, fill: "w-[70%]" },
                { id: "CUSTOMERS", label: "CUSTOMERS", icon: CheckCircle2, fill: "w-[55%]" },
                { id: "GROWTH", label: "GROWTH", icon: TrendingUp, fill: "w-[40%]" }
              ].map((tier, i) => {
                const TierIcon = tier.icon;
                const isSelected = funnelContext === tier.id;

                return (
                  <div key={i} className="space-y-1.5 group/item cursor-pointer" onMouseEnter={() => setFunnelContext(tier.id)}>
                    <div className={`flex items-center justify-between bg-white border rounded-2xl p-3.5 shadow-sm transition-all duration-300 ${
                      isSelected ? "border-[#10B981] shadow-md shadow-[#10B981]/5 translate-x-1" : "border-slate-100 hover:border-slate-200/80"
                    }`}>
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-xl border flex items-center justify-center transition-all duration-300 ${
                          isSelected ? "text-[#10B981] bg-[#10B981]/5 border-[#10B981]/20 scale-105" : "text-slate-400 bg-slate-50 border-slate-100"
                        }`}>
                          <TierIcon size={14} />
                        </div>
                        <span className={`text-[11px] font-mono font-black tracking-wider uppercase ${isSelected ? "text-[#10B981]" : "text-slate-800"}`}>
                          {tier.label}nklnlk
                        </span>
                      </div>
                      <span className={`text-[8px] font-mono font-black tracking-widest border px-2 py-0.5 rounded uppercase ${
                        isSelected ? "bg-[#10B981] text-white border-transparent" : "bg-slate-50/50 text-slate-400 border-slate-100"
                      }`}>{isSelected ? "Inspecting" : "Optimized"}</span>
                    </div>
                    <div className="h-1 bg-slate-100 rounded-full mx-4 overflow-hidden relative shadow-inner">
                      <div className={`h-full ${tier.fill} bg-gradient-to-r from-[#10B981] via-[#34D399] to-[#A7F3D0] rounded-full transition-all duration-500 ${
                        isSelected ? "scale-x-[1.04] brightness-95" : ""
                      } origin-left`} />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="absolute bottom-[-15px] -left-6 bg-slate-950 border border-slate-900 rounded-2xl p-4 text-white shadow-2xl flex items-center gap-3.5 max-w-[220px]">
              <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-[#34D399] shadow-inner">
                <BarChart3 size={16} className="animate-pulse" />
              </div>
              <div className="font-mono">
                <div className="text-[7px] font-black text-slate-500 uppercase tracking-widest">// REVENUE_FLOW</div>
                <div className="text-[10px] font-black text-white uppercase tracking-tight">ARR_MRR_SCALE</div>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 mt-36 pt-12 border-t border-slate-100 text-left relative z-10 bg-transparent">
        {(payload.metricsMatrix?.[funnelContext] || payload.metricsMatrix?.DEFAULT || []).map((metric, i) => (
          <div key={funnelContext + i} className={`p-6 rounded-2xl relative shadow-sm font-mono border transition-all duration-500 transform animate-fadeIn ${
            funnelContext !== "DEFAULT" ? "bg-emerald-50/40 border-[#10B981]/30 shadow-[#10B981]/5" : "bg-slate-50/40 border-slate-200/60"
          }`}>
            <div className={`text-xl md:text-2xl font-black tracking-tight uppercase ${funnelContext !== "DEFAULT" ? "text-[#10B981]" : "text-slate-950"}`}>
              {metric.value}
            </div>
            <div className="text-[9px] font-black text-slate-400 tracking-widest uppercase mt-2 block leading-none">
              {metric.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}