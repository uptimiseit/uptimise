// types/hero.ts
export interface CtaButton {
  text: string;
  href: string;
  variant: 'primary' | 'secondary' | 'outline' | 'gradient';
  customStyles?: string; // Optional escape hatch for custom Tailwind classes
  icon?: 'arrow-right' | 'arrow-up-right' | 'sparkles' | 'none';
}

export interface HeroData {
  badgeText: string;
  badgeIconName: 'workflow' | 'zap' | 'cpu';
  headingRegularTop: string;
  headingGradient: string;
  headingRegularBottom?: string;
  gradientFromTo: string; // Used for the main header text gradient
  description: string;
  primaryCta: CtaButton;
  secondaryCta: CtaButton;
}