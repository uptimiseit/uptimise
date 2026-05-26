// components/DynamicHero.tsx
import { Workflow, Zap, Cpu } from 'lucide-react';
import { HeroData } from '@/types/hero';
import HeroCtaButton from './HeroCtaButton';
import HeroAnimationWrapper from './HeroAnimationWrapper';

const IconMap = {
  workflow: Workflow,
  zap: Zap,
  cpu: Cpu,
};

/**
 * Converts backend color configurations seamlessly into native browser linear gradients.
 * Supports Tailwind tokens, raw Hex codes (#fff), or standard CSS strings (cyan, red).
 */
function parseGradientToken(token: string): string {
  if (!token) return '#0891b2, #7c3aed'; // Production fallback (Cyan to Violet)

  const colors = token.trim().split(/[\s,]+/);

  // Fallback handler if old legacy Tailwind class formats exist in the database row
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

  // Handle standard Hex code combinations from the admin panel (e.g., "#dc2626 #ea580c")
  if (colors.length >= 2) {
    return `${colors[0]}, ${colors[1]}`;
  }

  return colors[0] ? `${colors[0]}, ${colors[0]}` : '#0891b2, #7c3aed';
}

export default function DynamicHero({ data }: { data: HeroData }) {
  const BadgeIcon = IconMap[data.badgeIconName] || Workflow;
  const embeddedGradient = parseGradientToken(data.gradientFromTo);

  return (
    <section className="relative pt-36 pb-28 px-6 max-w-7xl mx-auto text-center overflow-hidden isolation-isolate">
      
      {/* Dynamic Ambient Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] pointer-events-none -z-10 opacity-[0.08] blur-[140px] rounded-full transition-all duration-500"
        style={{
          backgroundImage: `linear-gradient(to right, ${embeddedGradient})`
        }}
      />

      <HeroAnimationWrapper>
        {/* Context Badge Element */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-purple-500 text-slate-700 text-xs font-semibold tracking-wider uppercase shadow-sm">
          <BadgeIcon size={14} className="text-purple-500" /> 
          {data.badgeText}
        </div>
        
        {/* Dynamic Heading Stack with inline CSS Clip Masking */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 max-w-5xl mx-auto leading-[1.15] md:leading-[1.2] pb-2">
          {data.headingRegularTop} 
          <br className="hidden md:block" />
          
          <span 
            className="inline-block text-transparent bg-clip-text mt-6  transition-all duration-300"
            style={{
              backgroundImage: `linear-gradient(to right, ${embeddedGradient})`
            }}
          >
            {data.headingGradient}
          </span>
          
          {data.headingRegularBottom && (
            <>
              {" "}
              <span className="block md:inline">{data.headingRegularBottom}</span>
            </>
          )}
        </h1>
        
        {/* Editorial Subtext Paragraph */}
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          {data.description}
        </p>
        
        {/* Fully Dynamic Conversion Action CTAs */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4 max-w-md mx-auto sm:max-w-none">
          <HeroCtaButton button={data.primaryCta} globalGradient={data.gradientFromTo} />
          <HeroCtaButton button={data.secondaryCta} globalGradient={data.gradientFromTo} />
        </div>
      </HeroAnimationWrapper>
    </section>
  );
}