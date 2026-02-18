import React from "react";

const logos = [
  { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Netflix", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "Apple", url: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
];

export default function LogoMarquee() {
  return (
    <div className="relative overflow-hidden bg-white ">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}} />
      
      <div className="flex animate-marquee">
        {/* First set */}
        {logos.map((logo, index) => (
          <img 
            key={`logo-1-${index}`} 
            src={logo.url} 
            alt={logo.name} 
            className="mx-12 h-6 w-auto shrink-0  transition-all hover:grayscale-0" 
          />
        ))}
        {/* Duplicate set for seamless loop */}
        {logos.map((logo, index) => (
          <img 
            key={`logo-2-${index}`} 
            src={logo.url} 
            alt={logo.name} 
            className="mx-12 h-6 w-auto shrink-0  transition-all hover:grayscale-0" 
          />
        ))}
      </div>
    </div>
  );
}