// app/components/Services/Challenges.tsx
"use client";

import React, { useState } from "react";
import { 
  Search, MousePointer, AlertCircle, LineChart, Activity, Layers, Sparkles 
} from "lucide-react";

// 1. Map simple string backend keys directly to Lucide SVG components
const iconRegistry: Record<string, React.ComponentType<{ size: number; className?: string }>> = {
  Search,
  MousePointer,
  AlertCircle,
  LineChart,
  Activity,
  Layers,
};

// 2. Safe static maps ensuring Tailwind includes explicit color bundles at compilation runtime
const borderGlowRegistry: Record<string, string> = {
  "text-[#10B981]": "hover:border-emerald-500/50 hover:shadow-emerald-500/10 from-emerald-950/20 border-emerald-500/20",
  "text-cyan-400": "hover:border-cyan-500/50 hover:shadow-cyan-500/10 from-cyan-950/20 border-cyan-500/20",
  "text-purple-400": "hover:border-purple-500/50 hover:shadow-purple-500/10 from-purple-950/20 border-purple-500/20",
  "text-rose-400": "hover:border-rose-500/50 hover:shadow-rose-500/10 from-rose-950/20 border-rose-500/20",
  "text-amber-400": "hover:border-amber-500/50 hover:shadow-amber-500/10 from-amber-950/20 border-amber-500/20",
  "text-indigo-400": "hover:border-indigo-500/50 hover:shadow-indigo-500/10 from-indigo-950/20 border-indigo-500/20",
};

const textAccentRegistry: Record<string, string> = {
  "text-[#10B981]": "text-emerald-400 border-emerald-500/20",
  "text-cyan-400": "text-cyan-400 border-cyan-500/20",
  "text-purple-400": "text-purple-400 border-purple-500/20",
  "text-rose-400": "text-rose-400 border-rose-500/20",
  "text-amber-400": "text-amber-400 border-amber-500/20",
  "text-indigo-400": "text-indigo-400 border-indigo-500/20",
};

interface ChallengeItem {
  title: string;
  desc: string;
  icon: string; 
  tag: string;
  glowColor?: string; // Kept optional since fallback maps handle styling dynamically now
  accentColor: string; 
}

interface ChallengesSectionProps {
  data?: {
    heading: string;
    description: string;
    items: ChallengeItem[];
  };
}

const fallbackChallenges: ChallengeItem[] = [
  { title: "Organic Acquisition Blindness", desc: "Deploying platform content across disconnected architectures without programmatic schema validation leads to indexing degradation.", icon: "Search", tag: "ACQUISITION_BLIND", accentColor: "text-[#10B981]" },
  { title: "Visual Bottleneck Abandonment", desc: "Forcing prospects through multi-step onboarding processes with unoptimized performance metrics triggers immediate drop-offs.", icon: "MousePointer", tag: "FUNNEL_LEAKAGE", accentColor: "text-cyan-400" },
  { title: "Data Flow Obfuscation", desc: "Relying on unverified, client-side event triggers fails to log core product actions accurately, forcing growth adjustments based on data gaps.", icon: "LineChart", tag: "TELEMETRY_GAP", accentColor: "text-purple-400" },
];

export default function ServiceChallenges({ data }: ChallengesSectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const sectionHeading = data?.heading || "Great Products Still Fail Without Growth Systems";
  const sectionDescription = data?.description || "Even world-class engineering requires strict systemic distribution protocols to reach critical traction velocities.";
  const activeCards = data?.items || fallbackChallenges;

  const dynamicGlowColors = [
    "bg-emerald-500/10",
    "bg-cyan-500/10",
    "bg-purple-500/10",
    "bg-rose-500/10",
    "bg-amber-500/10",
    "bg-indigo-500/10"
  ];

  return (
    <section className="bg-[#030712] text-white py-36 px-6 border-y border-slate-900 relative overflow-hidden isolation-isolate">
      
      {/* 🌌 Cyberpunk Mesh Vector Backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(#111827_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-60 -z-30" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#080e1a_1px,transparent_1px),linear-gradient(to_bottom,#080e1a_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-50 -z-20 mask-image-[radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      {/* Dynamic Ambient Cloud Aura */}
      <div 
        className={`absolute w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none -z-10 transition-all duration-700 ease-out ${
          hoveredIndex !== null ? dynamicGlowColors[hoveredIndex % dynamicGlowColors.length] : "bg-emerald-500/5"
        }`}
        style={{
          top: hoveredIndex !== null ? `${10 + (hoveredIndex * 8)}%` : "30%",
          left: hoveredIndex !== null ? `${20 + (hoveredIndex * 12)}%` : "50%",
          transform: "translateX(-50%)"
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-24 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-950 border border-slate-800 text-[#34D399] rounded-xl text-[10px] font-mono font-black uppercase tracking-widest shadow-2xl">
            <Sparkles size={10} className="animate-spin duration-[6000ms]" />
            // ANOMALY_DISTRIBUTION_DIAGNOSTICS
          </div>
          <h2 className="text-3xl md:text-6xl font-black tracking-tight uppercase leading-[0.95] text-white">
            {sectionHeading.split("<br />").map((line, index) => (
              <React.Fragment key={index}>
                {line} {index === 0 && <br />}
              </React.Fragment>
            ))}
          </h2>
          <p className="text-slate-400 text-[10px] font-mono max-w-xl mx-auto uppercase tracking-wider">// {sectionDescription}</p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#10B981] via-[#34D399] to-transparent mx-auto rounded-full pt-0.5" />
        </div>

        {/* Bento Grid Platform */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeCards.map((card, i) => {
            const CardIcon = iconRegistry[card.icon] || Search;
            const isHovered = hoveredIndex === i;

            // Extract verified style lines matching compilation dictionaries safely
            const resolvedGlow = borderGlowRegistry[card.accentColor] || "hover:border-slate-800 from-transparent border-slate-900/80";
            const resolvedText = textAccentRegistry[card.accentColor] || "text-slate-400 border-slate-800";
            const currentBorderColor = resolvedGlow.split(" ").find(c => c.startsWith("border-")) || "border-slate-900/80";

            return (
              <div 
                key={card.tag} 
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`p-8 rounded-[2.5rem] bg-slate-950/40 border transition-all duration-500 ease-out flex flex-col justify-between min-h-[280px] relative overflow-hidden backdrop-blur-xl shadow-2xl ${
                  isHovered ? `${resolvedGlow} -translate-y-2` : "border-slate-900/80"
                } group`}
              >
                {/* Neon Ambient Core Glow Layer */}
                <div className={`absolute inset-0 bg-gradient-to-br ${resolvedGlow.split(" ").find(c => c.startsWith("from-"))} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                <div className="relative z-10 space-y-8">
                  <div className="flex justify-between items-start">
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all duration-500 shadow-inner ${
                      isHovered 
                        ? `bg-slate-900 ${resolvedText} scale-110 rotate-3`
                        : `bg-slate-900/60 text-slate-500 ${currentBorderColor}`
                    }`}>
                      <CardIcon size={20} />
                    </div>
                    
                    <span className={`text-[8px] font-mono font-black tracking-widest transition-colors duration-300 bg-slate-950 border px-2 py-0.5 rounded-md ${
                      isHovered ? `${resolvedText}` : `text-slate-600 ${currentBorderColor}`
                    }`}>
                      // ERR_{card.tag}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xs font-black uppercase tracking-widest text-white leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 group-hover:text-slate-200 font-bold uppercase tracking-wide leading-relaxed transition-colors duration-300">
                      {card.desc}
                    </p>
                  </div>
                </div>

                {/* Sub-Terminal Blueprint Footer */}
                <div className="pt-4 mt-8 border-t border-slate-900/60 flex items-center justify-between font-mono text-[9px] tracking-widest font-black text-slate-700 relative z-10 bg-transparent">
                  <span>NODE_CRITICAL_0{i + 1}</span>
                  <div className={`flex items-center gap-2 transition-all duration-500 ${
                    isHovered ? `opacity-100 translate-x-0 ${resolvedText.split(" ")[0]}` : "opacity-0 translate-x-2"
                  }`}>
                    <span>SYSTEM_ALERT_FLAGGED</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-current animate-ping" />
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