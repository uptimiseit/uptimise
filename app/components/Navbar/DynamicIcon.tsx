import * as LucideIcons from "lucide-react";

// Approved high-end brand colors from your design
const BRAND_COLORS = [
  "text-blue-600",
  "text-red-600",
  "text-emerald-600",
  "text-sky-500",
  "text-indigo-500",
  "text-purple-600",
  "text-orange-500",
  "text-pink-500",
  "text-cyan-600",
];

export const DynamicIcon = ({ name, className }: { name: string; className?: string }) => {
  const IconComponent = (LucideIcons as any)[name];

  if (!IconComponent) {
    return <LucideIcons.HelpCircle className="text-slate-400" size={20} />;
  }

  // Generate a consistent color index based on the icon name string
  const getColorClass = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % BRAND_COLORS.length;
    return BRAND_COLORS[index];
  };

  const iconColor = getColorClass(name);

  return <IconComponent className={`${iconColor} ${className}`} size={20} />;
};