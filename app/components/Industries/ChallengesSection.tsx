// components/ChallengesSection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldAlert, Layers, Flame, Gauge, 
  HelpCircle, AlertTriangle, Radio
} from 'lucide-react';

interface ChallengeItem {
  title: string;
  desc: string;
  icon: string;
}

interface ChallengesSectionProps {
  data: {
    heading: string;
    description: string;
    items: ChallengeItem[];
  } | ChallengeItem[]; // Union fallback ensures legacy data won't crash the build
}

// Map database string keys to Lucide React Icon Components
const IconRegistry: Record<string, any> = {
  Shield: ShieldAlert,
  Layers: Layers,
  Flame: Flame,
  Gauge: Gauge,
  Alert: AlertTriangle,
  Radio: Radio,
};

export default function ChallengesSection({ data }: ChallengesSectionProps) {
  // 1. Safe validation check to ensure the page doesn't crash if uninitialized
  if (!data) return null;

  // 2. DEFENSIVE PARSING BLOCK: Normalizes old array structures vs new object matrices
  const challengeItems = Array.isArray(data) 
    ? data 
    : (data.items && Array.isArray(data.items)) 
      ? data.items 
      : [];

  // Exit gracefully instead of crashing if no matrix nodes exist
  if (challengeItems.length === 0) return null;

  // 3. Fallback Header configurations
  const sectionHeading = Array.isArray(data) 
    ? "The Hidden Bottlenecks Holding Your Architecture Back" 
    : data.heading || "The Hidden Bottlenecks Holding Your Architecture Back";

  const sectionDescription = Array.isArray(data)
    ? "Legacy configurations and manual technical debt slow down delivery tracks. Here are the core hurdles we engineer out."
    : data.description || "Legacy configurations and manual technical debt slow down delivery tracks. Here are the core hurdles we engineer out.";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      // Cast ease to any to satisfy framer-motion typing for cubic bezier arrays
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any } 
    }
  };

  return (
    <section className="relative w-full bg-slate-950 py-28 px-6 overflow-hidden isolation-isolate text-white">
      
      {/* Premium Backlighting Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[500px] pointer-events-none -z-10 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-amber-500/10 blur-[160px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto">
        
        {/* Structural Accent Header Group */}
        <div className="text-center space-y-4 mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold tracking-wider uppercase shadow-inner">
            <AlertTriangle size={14} className="animate-pulse text-red-500" /> Operational Friction Nodes
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            {sectionHeading}
          </h2>
          <p className="text-base text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
            {sectionDescription}
          </p>
        </div>

        {/* Dynamic Premium Glass Bento Grid Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {challengeItems.map((item, index) => {
            const IconComponent = IconRegistry[item.icon] || HelpCircle;
            
            // Design Layout Pattern Rule: Alternates visual weights smoothly across the viewport
            const isCriticalCard = index === 0 || index === 4 || index === 5;

            return (
              <motion.div
                key={`challenge-card-${index}`}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.2, ease: "easeOut" } }}
                className={`group relative overflow-hidden rounded-[2.5rem] border p-8 bg-slate-50 backdrop-blur-md transition-all duration-300 ${
                  isCriticalCard 
                    ? 'border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.05)]' 
                    : 'border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {/* Internal layout structures */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
                
                <div className="relative z-10 flex flex-col h-full justify-between space-y-6">
                  <div className="space-y-5">
                    
                    <div className={"w-14 h-14 rounded-2xl flex items-center justify-center border shadow-md transition-transform duration-300 group-hover:scale-110  bg-red-500/10 border-red-500/30 text-red-400"}>
                      <IconComponent size={24} strokeWidth={2} />
                    </div>

                    <div className="space-y-2.5">
                      <h3 className="text-xl font-bold tracking-tight text-black group-hover:text-red-400 transition-colors duration-300">
                        {item.title || "Unspecified Bottleneck Entry"}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-400 font-medium">
                        {item.desc || "No contextual friction narrative summary provided for this node block."}
                      </p>
                    </div>
                  </div>

                  {/* Footnotes */}
                  <div className="pt-4 flex items-center justify-between border-t border-slate-800/60 text-[10px] font-mono tracking-widest text-slate-500 uppercase">
                    <span>Cluster_Node_0{index + 1}</span>
                    <span className={`font-bold tracking-wider ${isCriticalCard ? "text-red-400/80" : "text-slate-400"}`}>
                      {isCriticalCard ? "CRITICAL_PATH" : "DEBT_REDUCTION"}
                    </span>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </motion.div>
        
      </div>
    </section>
  );
}