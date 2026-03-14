
// "use client";

// import Link from 'next/link';
// import { Facebook, Linkedin, Instagram, Globe, X, MapPin } from 'lucide-react'; // Added MapPin
// import { useEffect, useRef, useState } from 'react';
// import Image from 'next/image';

// const Footer = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         } else {
//           setIsVisible(false);
//         }
//       },
//       { 
//         threshold: 0.2 
//       } 
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <footer className="w-full relative z-10 bg-white">
      
//       {/* --- Part 1: Animated Purple CTA Section --- */}
//       <div 
//         ref={sectionRef} 
//         className="relative w-full py-28 px-6 overflow-hidden"
//       >
//         <div 
//           className={`
//             absolute top-0 left-0 w-full bg-linear-to-b from-[#5c0096] to-[#8A0B92]
//             transition-[height] duration-1000 ease-in-out
//             ${isVisible ? 'h-full' : 'h-0'}
//           `}
//         ></div>

//         <div className={`relative z-10 flex flex-col items-center text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <h2 className="text-4xl font-bold mb-10 max-w-4xl leading-tight text-white">
//             Let’s create a measurable <br /> impact on your business.
//           </h2>
//           <button className="bg-white hover:bg-black text-black hover:text-white px-8 py-4 rounded font-bold text-lg transition-colors shadow-lg">
//             Design A Quote
//           </button>
//           <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 bg-linear-to-b from-transparent to-black/20"></div>
//         </div>
//       </div>

//       {/* --- Part 2: Company Info & Address (Added Section) --- */}
//       <div className="border-b border-gray-100">
//         <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-12 lg:gap-24">
          
//           {/* Left: Description & Badges */}
//           <div className="lg:w-2/3 space-y-8">
//             <div className="flex flex-col sm:flex-row gap-6">
//               {/* Logo Placeholder */}
//               <div className="shrink-0">
//                  {/* REPLACE WITH YOUR LOGO */}
//                  <div className="w-20  h-20 rounded-lg flex items-center justify-center text-white font-bold text-xs">
//                   <Image src="/logo.png" alt="image" height={100} width={100} />
//                  </div>
//               </div>
              
//               <p className="text-gray-600 text-sm leading-relaxed text-justify ">
//                 As a Custom Software Development Company, Decipher Zone&apos;s work revolves around developing web apps with technologies such as Blockchain, Crypto, Java, JavaScript, and other in-demand technologies. Want to take advantage of stupendous services? Collaborate with us NOW!
//               </p>
//             </div>

//             {/* Badges Row */}
//             <div className="flex flex-wrap items-center gap-4   transition-all duration-300">
//                 {/* REPLACE THESE WITH YOUR ACTUAL BADGE IMAGES */}
//                 <img src="/footer/f1.jpg" alt="Top Developers" className="h-16 w-auto object-contain" />
//                 <img src="/footer/f2.jpg" alt="AppFutura" className="h-16 w-auto object-contain" />
//                 <img src="/footer/f3.jpg" alt="Expertise" className="h-16 w-auto object-contain" />
//                 <img src="/footer/f4.jpg" alt="GoodFirms" className="h-16 w-auto object-contain" />
//                 <img src="/footer/f5.jpg" alt="SoftwareWorld" className="h-16 w-auto object-contain" />
//             </div>
//           </div>

//           {/* Right: Jaipur Office Address */}
//           <div className="lg:w-1/3">
//              <h3 className="text-xl font-bold text-gray-900 mb-6">Jaipur Office</h3>
//              <div className="flex items-start gap-4">
//                 <div className="bg-gray-500 rounded-full p-2 mt-1">
//                     <MapPin className="text-white w-5 h-5" />
//                 </div>
//                 <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
//                     C-29 Q Block, Mansarovar Extension, Narayan Vihar,<br />
//                     Jaipur, Rajasthan 302029
//                 </p>
//              </div>
//           </div>

//         </div>
//       </div>

//       {/* --- Part 3: Links Section --- */}
//       <div className="pt-12 pb-8 px-6 md:px-12">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
            
//             {/* Brand */}
//             <div className="col-span-1 md:col-span-1 flex flex-col justify-between">
//               <div>
//                 <h3 className="text-2xl font-bold mb-6">Uptimise IT</h3>
//                 <div className="flex gap-4 mb-6 font-light">
//                   <Facebook size={20} className="hover:text-red-300 cursor-pointer transition-colors" />
//                   <Linkedin size={20} className="hover:text-red-300 cursor-pointer transition-colors" />
//                   <Instagram size={20} className="hover:text-red-300 cursor-pointer transition-colors" />
//                   <Globe size={20} className="hover:text-red-300 cursor-pointer transition-colors" />
//                   <X size={20} className="hover:text-red-300 cursor-pointer transition-colors" />
//                 </div>
//               </div>
//               <div className="text-xs space-y-1">
//                 <p>© uptimiseit.</p>
//                 <p>All rights reserved 2025</p>
//               </div>
//             </div>

//             {/* Services */}
//             <div>
//               <h4 className="font-bold mb-6">Services</h4>
//               <ul className="space-y-3 text-sm font-light font-mono">
//                 <li className="hover:text-red-300 cursor-pointer transition-colors">Design</li>
//                 <li className="hover:text-red-300 cursor-pointer transition-colors">Technology</li>
//                 <li className="hover:text-red-300 cursor-pointer transition-colors">Neuromarketing</li>
//                 <li className="hover:text-red-300 cursor-pointer transition-colors">Digital Marketing</li>
//               </ul>
//             </div>

//             {/* About */}
//             <div>
//               <h4 className="font-bold mb-6">About</h4>
//               <ul className="space-y-3 text-sm font-mono font-light">
//                 <li className="hover:text-red-300 cursor-pointer transition-colors">About Us</li>
//                 <li className="hover:text-red-300 cursor-pointer transition-colors">Team</li>
//                 <li className="hover:text-red-300 cursor-pointer transition-colors">Career</li>
//                 <li className="hover:text-red-300 cursor-pointer transition-colors">Clients</li>
//               </ul>
//             </div>

//             {/* Quick Links 1 */}
//             <div>
//               <h4 className="font-bold mb-6">Quick Links</h4>
//               <ul className="space-y-3 text-sm font-mono font-light">
//                 <li className="hover:text-red-300 cursor-pointer transition-colors">Work</li>
//                 <li className="hover:text-red-300 cursor-pointer transition-colors">Blog</li>
//                 <li className="hover:text-red-300 cursor-pointer transition-colors">Reach Us</li>
//                 <li className="hover:text-red-300 cursor-pointer transition-colors">Site Map</li>
//               </ul>
//             </div>

//              {/* Quick Links 2 */}
//              <div>
//               <h4 className="font-bold mb-6">Legal</h4>
//               <ul className="space-y-3 text-sm font-mono font-light">
//                 <li className="hover:text-red-300 cursor-pointer transition-colors">Privacy Policy</li>
//                 <li className="hover:text-red-300 cursor-pointer transition-colors">Terms of use</li>
//                 <li className="hover:text-red-300 cursor-pointer transition-colors">Refund Policy</li>
//                 <li className="hover:text-red-300 cursor-pointer transition-colors">Copyrights Policy</li>
//               </ul>
//             </div>
//           </div>

//           <div className="w-full h-px bg-gray-200 mb-8"></div>

//           <div className="flex flex-col md:flex-row items-center justify-center gap-4">
//             <p className="text-center text-sm max-w-2xl text-gray-500">
//               We’re a UI/UX design agency that has helped businesses scale by transforming complex challenges into intuitive digital experiences.
//             </p>
//           </div>

//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

"use client";

import Link from 'next/link';
import { 
  Linkedin, Github, Bot, ShieldCheck, Cpu, 
  MapPin, Mail, ArrowUpRight, Send, Twitter 
} from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full bg-white font-sans border-t border-slate-100">

      {/* <div className="mx-6 mt-6">
        <div className="max-w-7xl mx-auto bg-slate-950 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">

          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/10 to-transparent pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[0.9]">
                Ready to <br /> 
                <span className="text-blue-500 italic">Accelerate?</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-md font-medium">
                Join the innovators deploying products with 100x engineering velocity.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <button className="px-10 py-5 bg-blue-600 text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-blue-500 transition-all flex items-center justify-center gap-2 group">
                Start a Project
                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <button className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all">
                Schedule Strategy Call
              </button>
            </div>
          </div>
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        {/* --- Section 2: Technical Navigation --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Brand & Manifesto */}
          <div className="lg:col-span-4 space-y-8">
            <Image src="/logo.png" alt="Uptimise IT" height={40} width={140} className="brightness-0" />
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              An AI-Native Software Factory engineered for high-growth startups and enterprises. We replace manual bottlenecks with autonomous intelligence.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Linkedin size={18} />, href: "#" },
                { icon: <Twitter size={18} />, href: "#" },
                { icon: <Github size={18} />, href: "#" }
              ].map((social, i) => (
                <Link key={i} href={social.href} className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:border-blue-600 hover:text-blue-600 transition-all">
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Links Matrix */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8 font-mono">
                // Solutions
              </h4>
              <ul className="space-y-4 text-[13px] font-bold text-slate-600">
                {["AI Software Factory", "AI Development", "Blockchain Engineering", "Cloud Systems", "UX Architecture"].map(item => (
                  <li key={item} className="hover:text-blue-600 transition-colors cursor-pointer flex items-center group">
                    <span className="w-0 group-hover:w-4 transition-all overflow-hidden text-blue-600">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8 font-mono">
                // Philosophy
              </h4>
              <ul className="space-y-4 text-[13px] font-bold text-slate-600">
                {["100x Engineer", "Our Ecosystem", "Case Studies", "Engineering Blog", "Careers"].map(item => (
                  <li key={item} className="hover:text-blue-600 transition-colors cursor-pointer flex items-center group">
                    <span className="w-0 group-hover:w-4 transition-all overflow-hidden text-blue-600">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact & HQ */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8 font-mono">
              // HQ_JAIPUR
            </h4>
            <div className="space-y-6">
              <div className="flex gap-4 items-start group">
                <div className="p-3 bg-slate-50 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <MapPin size={20} />
                </div>
                <p className="text-xs font-bold text-slate-600 leading-relaxed">
                  C-29 Q Block, Mansarovar Extension,<br /> Narayan Vihar, Jaipur 302029
                </p>
              </div>
              <div className="flex gap-4 items-start group">
                <div className="p-3 bg-slate-50 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <p className="text-xs font-bold text-slate-600 leading-relaxed">
                  hello@uptimise.it <br />
                  <span className="text-slate-400 font-medium font-mono text-[10px]">UPTIME: 99.9%</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- Section 3: The Trust & Tech Bar --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10 border-y border-slate-50 mb-10">
          {[
            { icon: <ShieldCheck size={18} />, label: "Enterprise Engineering Standards" },
            { icon: <Bot size={18} />, label: "Autonomous Development Workflows" },
            { icon: <Cpu size={18} />, label: "Global Hybrid Deployment" }
          ].map((trust, i) => (
            <div key={i} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-400 font-mono">
              <span className="text-blue-600">{trust.icon}</span>
              {trust.label}
            </div>
          ))}
        </div>

        {/* --- Section 4: Legal & System Status --- */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 font-mono">
          <div className="flex items-center gap-4">
            <p>© 2026 UPTIMISE IT</p>
            <span className="w-1 h-1 bg-slate-200 rounded-full" />
            <p className="text-emerald-500 flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              SYSTEM_ACTIVE
            </p>
          </div>
          <div className="flex gap-8 mt-6 md:mt-0">
            <Link href="/privacy" className="hover:text-blue-600 transition-colors">Privacy_Policy</Link>
            <Link href="/terms" className="hover:text-blue-600 transition-colors">Terms_of_Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;