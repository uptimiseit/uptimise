// // components/DynamicHero.tsx
// import { Workflow, Zap, Cpu } from 'lucide-react';
// import { HeroData } from '@/types/hero';
// import HeroCtaButton from './HeroCtaButton';
// import HeroAnimationWrapper from './HeroAnimationWrapper';

// const IconMap = {
//   workflow: Workflow,
//   zap: Zap,
//   cpu: Cpu,
// };

// /**
//  * Converts backend color configurations seamlessly into native browser linear gradients.
//  * Supports Tailwind tokens, raw Hex codes (#fff), or standard CSS strings (cyan, red).
//  */
// function parseGradientToken(token: string): string {
//   if (!token) return '#0891b2, #7c3aed'; // Production fallback (Cyan to Violet)

//   const colors = token.trim().split(/[\s,]+/);

//   // Fallback handler if old legacy Tailwind class formats exist in the database row
//   if (colors.some(c => c.includes('-'))) {
//     const legacyMap: Record<string, string> = {
//       'cyan-600': '#0891b2', 'cyan-900': '#164e63',
//       'violet-600': '#7c3aed', 'fuchsia-600': '#c026d3',
//       'blue-600': '#2563eb', 'red-600': '#dc2626',
//       'orange-600': '#ea580c', 'amber-500': '#f59e0b',
//       'emerald-500': '#10b981', 'teal-600': '#0d9488'
//     };

//     const fromColor = colors.find(c => c.startsWith('from-'))?.replace('from-', '') || 'cyan-600';
//     const toColor = colors.find(c => c.startsWith('to-'))?.replace('to-', '') || 'violet-600';

//     return `${legacyMap[fromColor] || fromColor}, ${legacyMap[toColor] || toColor}`;
//   }

//   // Handle standard Hex code combinations from the admin panel (e.g., "#dc2626 #ea580c")
//   if (colors.length >= 2) {
//     return `${colors[0]}, ${colors[1]}`;
//   }

//   return colors[0] ? `${colors[0]}, ${colors[0]}` : '#0891b2, #7c3aed';
// }

// export default function DynamicHero({ data }: { data: HeroData }) {
//   const BadgeIcon = IconMap[data.badgeIconName] || Workflow;
//   const embeddedGradient = parseGradientToken(data.gradientFromTo);

//   return (
//     <section className="relative pt-36 pb-28 px-6 max-w-7xl mx-auto text-center overflow-hidden isolation-isolate">
      
//       {/* Dynamic Ambient Background Glow */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] pointer-events-none -z-10 opacity-[0.08] blur-[140px] rounded-full transition-all duration-500"
//         style={{
//           backgroundImage: `linear-gradient(to right, ${embeddedGradient})`
//         }}
//       />

//       <HeroAnimationWrapper>
//         {/* Context Badge Element */}
//         <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-purple-500 text-slate-700 text-xs font-semibold tracking-wider uppercase shadow-sm">
//           <BadgeIcon size={14} className="text-purple-500" /> 
//           {data.badgeText}
//         </div>
        
//         {/* Dynamic Heading Stack with inline CSS Clip Masking */}
//         <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 max-w-5xl mx-auto leading-[1.15] md:leading-[1.2] pb-2">
//           {data.headingRegularTop} 
//           <br className="hidden md:block" />
          
//           <span 
//             className="inline-block text-transparent bg-clip-text mt-6  transition-all duration-300"
//             style={{
//               backgroundImage: `linear-gradient(to right, ${embeddedGradient})`
//             }}
//           >
//             {data.headingGradient}
//           </span>
          
//           {data.headingRegularBottom && (
//             <>
//               {" "}
//               <span className="block md:inline">{data.headingRegularBottom}</span>
//             </>
//           )}
//         </h1>
        
//         {/* Editorial Subtext Paragraph */}
//         <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
//           {data.description}
//         </p>
        
//         {/* Fully Dynamic Conversion Action CTAs */}
//         <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4 max-w-md mx-auto sm:max-w-none">
//           <HeroCtaButton button={data.primaryCta} globalGradient={data.gradientFromTo} />
//           <HeroCtaButton button={data.secondaryCta} globalGradient={data.gradientFromTo} />
//         </div>
//       </HeroAnimationWrapper>
//     </section>
//   );
// }


// components/DynamicHero.tsx
"use client";

import { Workflow, Zap, Cpu, ArrowRight, Sparkles } from 'lucide-react';
import { HeroData } from '@/types/hero';
import HeroCtaButton from './HeroCtaButton';
import HeroAnimationWrapper from './HeroAnimationWrapper';

const IconMap = {
  workflow: Workflow,
  zap: Zap,
  cpu: Cpu,
};

function parseGradientToken(token: string): string {
  if (!token) return '#0891b2, #7c3aed';

  const colors = token.trim().split(/[\s,]+/);

  if (colors.some(c => c.includes('-'))) {
    const legacyMap: Record<string, string> = {
      'cyan-600': '#0891b2', 'cyan-900': '#164e63',
      'violet-600': '#7c3aed', 'fuchsia-600': '#c026d3',
      'blue-600': '#2563eb', 'red-600': '#dc2626',
      'orange-600': '#ea580c', 'amber-500': '#f59e0b',
      'emerald-500': '#10b981', 'teal-600': '#0d9488'
    };

    const fromColor = colors.find(c => c.startsWith('from-'))?.replace('from-', '') || 'cyan-600';
    const toColor = colors.find(c => c.startsWith('to-'))?.replace('to-', '') || 'violet-600';

    return `${legacyMap[fromColor] || fromColor}, ${legacyMap[toColor] || toColor}`;
  }

  if (colors.length >= 2) {
    return `${colors[0]}, ${colors[1]}`;
  }

  return colors[0] ? `${colors[0]}, ${colors[0]}` : '#0891b2, #7c3aed';
}

export default function DynamicHero({ data }: { data: HeroData }) {
  const BadgeIcon = IconMap[data.badgeIconName] || Workflow;
  const embeddedGradient = parseGradientToken(data.gradientFromTo);

  return (
    <section className="relative pt-36 pb-32 px-4 md:px-8 w-full overflow-hidden bg-white isolation-isolate">
      
      {/* 🔮 Background Abstract Object 1: Technical Infrastructure Grid Lining */}
      <div className="absolute inset-0 mask-image-[radial-gradient(ellipse_at_center,transparent_20%,black)] bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] -z-20 opacity-70" />

      {/* 🔮 Background Abstract Object 2: Ambient Floating Soft Mesh Clouds */}
      <div 
        className="absolute top-[-10%] left-1/4 w-[600px] h-[600px] rounded-full blur-[160px] opacity-[0.12] pointer-events-none -z-10 mix-blend-multiply animate-pulse duration-[6000ms]"
        style={{ backgroundImage: `radial-gradient(circle, ${embeddedGradient.split(',')[0]} 0%, transparent 70%)` }}
      />
      <div 
        className="absolute top-[10%] right-1/4 w-[500px] h-[500px] rounded-full blur-[140px] opacity-[0.08] pointer-events-none -z-10 mix-blend-multiply animate-pulse duration-[8000ms]"
        style={{ backgroundImage: `radial-gradient(circle, ${embeddedGradient.split(',')[1] || '#7c3aed'} 0%, transparent 70%)` }}
      />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <HeroAnimationWrapper>
          
          {/* Context Badge Element */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-black tracking-widest uppercase shadow-xl shadow-slate-900/10 mb-8 border border-slate-800">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <BadgeIcon size={12} className="text-orange-400" /> 
            {data.badgeText}
          </div>
          
          {/* Dynamic Typography Header Block */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-slate-950 max-w-5xl mx-auto leading-[1.05] uppercase pb-6">
            {data.headingRegularTop} 
            <br className="hidden md:block" />
            <span 
              className="inline-block text-transparent bg-clip-text pb-1 italic font-serif tracking-normal lowercase bg-gradient-to-r"
              style={{ backgroundImage: `linear-gradient(to right, ${embeddedGradient})` }}
            >
              {data.headingGradient}
            </span>
            {data.headingRegularBottom && (
              <span className="block md:inline-block ml-0 md:ml-4">{data.headingRegularBottom}</span>
            )}
          </h1>

          {/* 🔮 Interactive Bento Object Layer: Coded Glassmorphic Context Dashboard Box */}
          <div className="max-w-3xl mx-auto my-10 relative group">
            {/* Soft backdrop boundary aura */}
            <div 
              className="absolute -inset-1 rounded-[2rem] opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"
              style={{ backgroundImage: `linear-gradient(to right, ${embeddedGradient})` }}
            />
            
            {/* The Glassmorphism Box Core Layout Container */}
            <div className="relative bg-white/60 backdrop-blur-xl border border-slate-200/80 rounded-[2rem] p-8 md:p-10 shadow-xl shadow-slate-200/50 text-center">
              
              {/* Decorative Console Window Accent Markers */}
              <div className="absolute top-4 left-6 flex gap-1.5 items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                <span className="text-[8px] font-mono text-slate-400 ml-2 uppercase tracking-widest font-bold">// Engine_Context_Active</span>
              </div>

              <div className="absolute top-4 right-6 text-slate-300">
                <Sparkles size={14} className="animate-spin duration-[4000ms]" />
              </div>

              {/* Central Editorial Narrative Narrative Subtext */}
              <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-medium tracking-wide uppercase pt-2">
                {data.description}
              </p>
            </div>
          </div>
          
          {/* Fully Dynamic Conversion Action CTAs */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4 max-w-md mx-auto sm:max-w-none">
            <HeroCtaButton button={data.primaryCta} globalGradient={data.gradientFromTo} />
            <HeroCtaButton button={data.secondaryCta} globalGradient={data.gradientFromTo} />
          </div>

        </HeroAnimationWrapper>
      </div>
    </section>
  );
}