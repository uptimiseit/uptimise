// app/components/Navbar/DynamicIcon.tsx
"use client";

import React from "react";
import * as FaIcons from "react-icons/fa";
import { Terminal } from "lucide-react";

export const DynamicIcon = ({ name, className }: { name: string; className?: string }) => {
  try {
    const IconComponent = (FaIcons as any)[name];
    if (IconComponent) {
      return <IconComponent className={className} />;
    }
  } catch (e) {
    console.warn(`HMR: Icon ${name} factory unavailable`);
  }
  return <Terminal className={className} size={18} />;
};