import React from "react";
import { cn } from "@/lib/utils";

export const MovingBorderButton = ({ 
  children, 
  className, 
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
        aria-label="Uptimiseit"
      className={cn(
        // The outer container: defines the height and the "mask"
        "relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2",
        className
      )}
      {...props}
    >
      {/* The Background Layer: This spins behind the white center */}
      <span className="absolute inset-[-1000%] animate-border-spin bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#3B82F6_50%,#E2E8F0_100%)]" />
      
      {/* The Content Layer: Solid White Center */}
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-8 py-1 text-sm font-medium text-slate-950 backdrop-blur-3xl transition-colors hover:bg-slate-50">
        {children}
      </span>
    </button>
  );
};