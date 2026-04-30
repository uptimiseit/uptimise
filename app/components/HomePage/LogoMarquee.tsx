import React from "react";

// 1. Imports (Ensure these paths are correct in your project)
import logo1 from "@/public/logos/1.webp"; 
import logo2 from "@/public/logos/2.webp";
import logo3 from "@/public/logos/3.webp";
import logo4 from "@/public/logos/4.webp";
import logo5 from "@/public/logos/5.jpg";
import logo6 from "@/public/logos/6.webp";
import logo7 from "@/public/logos/7.png";
import logo8 from "@/public/logos/9.png";


// 2. Define the logo array
const logos = [
  { name: "Google", url: logo1 },
  { name: "Microsoft", url: logo2 },
  { name: "Amazon", url: logo3 },
  { name: "Netflix", url: logo4 },
  { name: "Apple", url: logo5 },
  { name: "Meta", url: logo6 },
  { name: "OpenAI", url: logo7 },
  { name: "Anthropic", url: logo8 },
];

export default function LogoMarquee() {
  // Helper to handle both Next.js objects and standard string imports
  const getSrc = (logoUrl: any) => {
    if (typeof logoUrl === 'string') return logoUrl;
    return logoUrl.src || logoUrl; 
  };

  return (
    <div className="relative overflow-hidden bg-white py-8">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        /* Optional: Pause on hover */
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
      
      <div className="flex animate-marquee">
        {/* Render the set twice for a seamless loop */}
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="flex items-center justify-center mx-12">
            <img 
              src={getSrc(logo.url)} 
              alt={logo.name} 
              // Set a consistent height so different images look uniform
              className="h-8 w-auto shrink-0  transition-all hover:grayscale-0 object-contain" 
              onError={(e) => {
                // Fixed the Type error by casting to HTMLImageElement
                (e.currentTarget as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
        ))}
      </div>

      {/* Edge Fading Gradients (Makes it look professional) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent"></div>
    </div>
  );
}