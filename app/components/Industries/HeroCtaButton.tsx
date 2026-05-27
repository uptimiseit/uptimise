// components/HeroCtaButton.tsx
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { CtaButton } from '@/types/hero';
// import { CtaButton } from '@/types/hero';

const IconMap = {
  'arrow-right': ArrowRight,
  'arrow-up-right': ArrowUpRight,
  'sparkles': Sparkles,
  'none': null,
};

const VariantMap = {
  primary: 'bg-slate-900 text-white hover:bg-slate-800 shadow-xl shadow-slate-900/10 hover:shadow-slate-900/20 border border-transparent',
  secondary: 'bg-cyan-600 text-white hover:bg-cyan-700 shadow-xl shadow-cyan-600/10 hover:shadow-cyan-600/20 border border-transparent',
  outline: 'bg-white border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50',
  gradient: 'bg-gradient-to-r text-white shadow-lg border border-transparent hover:opacity-95',
};

export default function HeroCtaButton({ button, globalGradient }: { button: CtaButton; globalGradient: string }) {
  const IconComponent = button.icon ? IconMap[button.icon] : null;
  
  // Base structural classes matching standard modern SaaS button layouts
  const baseClasses = "px-8 py-4 font-semibold rounded-xl text-base duration-200 active:scale-95 transition-all flex items-center justify-center gap-2 text-center w-full sm:w-auto";
  
  // Combine design structural patterns safely
  const variantClasses = button.variant === 'gradient' 
    ? `${VariantMap.gradient} ${globalGradient}`
    : VariantMap[button.variant];

  const finalClasses = `${baseClasses} ${variantClasses} ${button.customStyles || ''}`;

  return (
    <Link href={button.href} className={finalClasses}>
      {button.text}
      {IconComponent && <IconComponent size={18} className="shrink-0 opacity-80 transition-transform group-hover:translate-x-0.5" />}
    </Link>
  );
}