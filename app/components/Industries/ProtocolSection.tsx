'use client';

import React from 'react'; // 🟢 Added explicit React import for Fragment processing
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, Cpu, HelpCircle, 
  Settings, Gauge, Sparkles, LineChart 
} from 'lucide-react';
import Link from 'next/link';

interface ProtocolNode {
  title: string;
  subtitle?: string; 
  icon: string;      
}

interface ProtocolSectionProps {
  data: {
    heading: string;
    accentText?: string;
    description: string;
    buttonText: string;
    buttonHref: string;
    buttonColor?: string; 
    items: ProtocolNode[];
  };
}

const IconRegistry: Record<string, any> = {
  Settings: Settings,
  Gauge: Gauge,
  Cpu: Cpu,
  Sparkles: Sparkles,
  LineChart: LineChart,
};

const FLOW_GRADIENTS = [
  "from-cyan-400/10 to-blue-500/10 border-cyan-200 text-blue-600 shadow-blue-500/10",
  "from-amber-400/10 to-purple-500/10 border-amber-200 text-purple-600 shadow-purple-500/10",
  "from-orange-400/10 to-red-500/10 border-orange-200 text-red-600 shadow-red-500/10",
  "from-pink-400/10 to-fuchsia-500/10 border-pink-200 text-fuchsia-600 shadow-fuchsia-500/10"
];

const ARROW_COLORS = [
  "text-cyan-500",
  "text-amber-500",
  "text-orange-500",
  "text-pink-500"
];

export default function ProtocolSection({ data }: ProtocolSectionProps) {
  if (!data || !data.items || data.items.length === 0) return null;

  const btnThemeColor = data.buttonColor || '#466846'; 
  const protocolNodes = data.items;

  return (
    <section className="relative w-full py-32 px-4 md:px-8 bg-white overflow-hidden text-slate-900">
      
      {/* Background Micro-Dots Design Layer Accent */}
      <div className="absolute inset-0 opacity-[0.012] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="absolute top-1/4 left-10 w-[450px] h-[450px] bg-slate-50 blur-[120px] rounded-full -z-10 pointer-events-none" />

      {/* 12-COLUMN CORE MASTER VIEWPORT GRID ROW */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
        
        {/* LEFT SIDE PANEL: GRAPHIC TIMELINE NODES */}
        <div className="w-full lg:col-span-5 flex flex-col items-center">
          <div className="w-full max-w-sm space-y-4 relative flex flex-col items-center">
            
            {protocolNodes.map((node, index) => {
              const IconComponent = IconRegistry[node.icon] || HelpCircle;
              const currentGradient = FLOW_GRADIENTS[index % FLOW_GRADIENTS.length];
              const currentArrowColor = ARROW_COLORS[index % ARROW_COLORS.length];

              return (
                <React.Fragment key={`protocol-flow-step-${index}`}>
                  
                  {/* Pipeline Step Card Layer */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className={`w-full bg-linear-to-r ${currentGradient} border rounded-[1.75rem] px-6 py-4 flex items-center justify-between shadow-xl backdrop-blur-md transition-all duration-300 group`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Round Index Box Container */}
                      <div className="w-9 h-9 rounded-xl bg-white/90 border border-slate-100 shadow-xs flex items-center justify-center text-xs font-mono font-black text-slate-700">
                        0{index + 1}
                      </div>
                      
                      {/* Main Typography Label Node Segment */}
                      <div className="text-left">
                        <h4 className="text-base font-black tracking-tight text-slate-800 group-hover:text-slate-900 transition-colors">
                          {node.title}
                        </h4>
                        {node.subtitle && (
                          <p className="text-[11px] font-semibold text-slate-400">
                            {node.subtitle}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Registry Icon Element Mapping */}
                    <div className="w-10 h-10 rounded-full bg-white/80 border border-white/50 flex items-center justify-center shadow-2xs group-hover:rotate-12 transition-transform duration-300">
                      <IconComponent size={18} className="stroke-[2.2]" />
                    </div>
                  </motion.div>

                  {/* Flow Direction Arrow Pointer */}
                  {index < protocolNodes.length - 1 && (
                    <div className={`py-1 flex justify-center w-full ${currentArrowColor}`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                      </svg>
                    </div>
                  )}

                </React.Fragment>
              );
            })}

          </div>
        </div>

        {/* RIGHT SIDE PANEL: TYPOGRAPHY COPY & ACTIONS */}
        <div className="w-full lg:col-span-7 space-y-8 text-left">
          
          {/* Engineering Protocol System Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200/60 shadow-3xs">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-mono font-black tracking-widest text-slate-400 uppercase">
              Protocol_Orchestration_Engine
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
            {data.heading}{' '}
            {data.accentText && (
              <span className="block lg:inline text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-700">
                {data.accentText}
              </span>
            )}
          </h2>

          <p className="text-sm md:text-base text-slate-500 leading-relaxed font-semibold max-w-2xl">
            {data.description}
          </p>

          {/* Premium Action Link Button */}
          <div className="pt-4">
            <Link href={data.buttonHref || '#'} className="inline-flex items-center group">
              <div 
                className="h-14 px-8 rounded-l-full flex items-center justify-center text-sm font-black text-white transition-all duration-300 group-hover:brightness-95 shadow-md shadow-slate-100"
                style={{ backgroundColor: btnThemeColor }}
              >
                {data.buttonText || "Get a Consultation"}
              </div>
              <div className="h-14 w-14 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center -ml-1 relative z-20 group-hover:scale-105 group-hover:border-slate-300 transition-all duration-300">
                <ArrowUpRight size={18} style={{ color: btnThemeColor }} className="transition-transform duration-300 group-hover:rotate-45" />
              </div>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}