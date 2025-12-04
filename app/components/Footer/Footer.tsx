// import Link from 'next/link';
// import { Facebook, Linkedin, Instagram, Globe, X, Plus } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="w-full" style={{ zIndex: 1 }}>
//       {/* --- Part 1: Purple CTA Section --- */}
//       <div className="bg-linear-to-b from-[#5c0096]  to-[#8A0B92]   text-white py-24 px-6 flex flex-col items-center text-center relative overflow-hidden">
        

// {/* [#5c0096] */}

//         {/* Main Heading */}
//         <h2 className="text-4xl  font-bold mb-10 max-w-4xl leading-tight">
//           Let’s create a measurable <br /> impact on your business.
//         </h2>

//         {/* CTA Button */}
//         <button className=" bg-white hover:bg-black  text-black hover:text-white px-8 py-4 rounded font-bold text-lg  transition-colors">
//           Design A Quote
//         </button>

//         {/* Abstract Decoration (Optional - for the 'scrolled' feel) */}
//         <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 bg-linear-to-b from-transparent to-black/20"></div>
//       </div>

//       {/* --- Part 2: White Links Section --- */}
//       <div className=" pt-20 pb-10 px-6 md:px-12">
//         <div className="max-w-7xl mx-auto">
          
//           {/* Top Grid: Logo & Links */}
//           <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-16">
            
//             {/* Column 1: Brand & Social */}
//             <div className="col-span-1 md:col-span-1 flex flex-col justify-between">
//               <div>
//                 <h3 className="text-2xl font-bold mb-6">Uptimise IT</h3>
//                 <div className="flex gap-4 mb-6 font-light">
//                   <Facebook size={20} className="hover:text-red-300 cursor-pointer" />
//                   <Linkedin size={20} className="hover:text-red-300 cursor-pointer" />
//                   <Instagram size={20} className="hover:text-red-300 cursor-pointer" />
//                   <Globe size={20} className="hover:text-red-300 cursor-pointer" />
//                   <X size={20} className="hover:text-red-300 cursor-pointer" />
//                 </div>
//               </div>
//               <div className="text-xs space-y-1">
//                 <p>© uptimiseit.</p>
//                 <p>All rights reserved 2025</p>
//               </div>
//             </div>

//             {/* Column 2: Services */}
//             <div>
//               <h4 className="font-bold mb-6">Services</h4>
//               <ul className="space-y-3 text-sm font-light font-mono  ">
//                 <li className="hover:text-red-300 font-mono cursor-pointer">Design</li>
//                 <li className="hover:text-red-300 cursor-pointer">Technology</li>
//                 <li className="hover:text-red-300 cursor-pointer">Neuromarketing</li>
//                 <li className="hover:text-red-300 cursor-pointer">Digital Marketing</li>
//               </ul>
//             </div>

//             {/* Column 3: About */}
//             <div>
//               <h4 className="font-bold mb-6">About</h4>
//               <ul className="space-y-3 text-sm  font-mono font-light">
//                 <li className="hover:text-red-300 cursor-pointer">About Us</li>
//                 <li className="hover:text-red-300 cursor-pointer">Team</li>
//                 <li className="hover:text-red-300 cursor-pointer">Career</li>
//                 <li className="hover:text-red-300 cursor-pointer">Clients</li>
//               </ul>
//             </div>

//             {/* Column 4: Quick Links 1 */}
//             <div>
//               <h4 className="font-bold mb-6">Quick Links</h4>
//               <ul className="space-y-3 text-sm font-mono font-light">
//                 <li className="hover:text-red-300 cursor-pointer">Work</li>
//                 <li className="hover:text-red-300 cursor-pointer">Blog</li>
//                 <li className="hover:text-red-300 cursor-pointer">Reach Us</li>
//                 <li className="hover:text-red-300 cursor-pointer">Site Map</li>
//               </ul>
//             </div>

//              {/* Column 5: Quick Links 2 */}
//              <div>
//               <h4 className="font-bold mb-6">Quick Links</h4>
//               <ul className="space-y-3 text-sm font-mono font-light ">
//                 <li className="hover:text-red-300 cursor-pointer">Privacy Policy</li>
//                 <li className="hover:text-red-300 cursor-pointer">Terms of use</li>
//                 <li className="hover:text-red-300 cursor-pointer">Refund Policy</li>
//                 <li className="hover:text-red-300 cursor-pointer">Copyrights Policy</li>
//               </ul>
//             </div>
//           </div>

//           {/* Divider Line */}
//           <div className="w-full h-px bg-gray-200 mb-8"></div>

//           {/* Bottom Text & Plus Icon */}
//           <div className="flex flex-col md:flex-row items-center justify-center gap-4">
//             <p className="text-gray-400  text-center text-sm ">
//               We’re a UI/UX design agency that has helped businesses scale by transforming complex challenges into intuitive digital experiences.
//             </p>
//             {/* <Plus className="text-gray-400" /> */}
//           </div>

//         </div>
//       </div>
      
    
//     </footer>
//   );
// };

// export default Footer;

"use client";

import Link from 'next/link';
import { Facebook, Linkedin, Instagram, Globe, X, MapPin } from 'lucide-react'; // Added MapPin
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const Footer = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { 
        threshold: 0.2 
      } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="w-full relative z-10 bg-white">
      
      {/* --- Part 1: Animated Purple CTA Section --- */}
      <div 
        ref={sectionRef} 
        className="relative w-full py-28 px-6 overflow-hidden"
      >
        <div 
          className={`
            absolute top-0 left-0 w-full bg-linear-to-b from-[#5c0096] to-[#8A0B92]
            transition-[height] duration-1000 ease-in-out
            ${isVisible ? 'h-full' : 'h-0'}
          `}
        ></div>

        <div className={`relative z-10 flex flex-col items-center text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold mb-10 max-w-4xl leading-tight text-white">
            Let’s create a measurable <br /> impact on your business.
          </h2>
          <button className="bg-white hover:bg-black text-black hover:text-white px-8 py-4 rounded font-bold text-lg transition-colors shadow-lg">
            Design A Quote
          </button>
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 bg-linear-to-b from-transparent to-black/20"></div>
        </div>
      </div>

      {/* --- Part 2: Company Info & Address (Added Section) --- */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Left: Description & Badges */}
          <div className="lg:w-2/3 space-y-8">
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Logo Placeholder */}
              <div className="shrink-0">
                 {/* REPLACE WITH YOUR LOGO */}
                 <div className="w-20  h-20 rounded-lg flex items-center justify-center text-white font-bold text-xs">
                  <Image src="/logo.png" alt="image" height={100} width={100} />
                 </div>
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed text-justify ">
                As a Custom Software Development Company, Decipher Zone&apos;s work revolves around developing web apps with technologies such as Blockchain, Crypto, Java, JavaScript, and other in-demand technologies. Want to take advantage of stupendous services? Collaborate with us NOW!
              </p>
            </div>

            {/* Badges Row */}
            <div className="flex flex-wrap items-center gap-4   transition-all duration-300">
                {/* REPLACE THESE WITH YOUR ACTUAL BADGE IMAGES */}
                <img src="/footer/f1.jpg" alt="Top Developers" className="h-16 w-auto object-contain" />
                <img src="/footer/f2.jpg" alt="AppFutura" className="h-16 w-auto object-contain" />
                <img src="/footer/f3.jpg" alt="Expertise" className="h-16 w-auto object-contain" />
                <img src="/footer/f4.jpg" alt="GoodFirms" className="h-16 w-auto object-contain" />
                <img src="/footer/f5.jpg" alt="SoftwareWorld" className="h-16 w-auto object-contain" />
            </div>
          </div>

          {/* Right: Jaipur Office Address */}
          <div className="lg:w-1/3">
             <h3 className="text-xl font-bold text-gray-900 mb-6">Jaipur Office</h3>
             <div className="flex items-start gap-4">
                <div className="bg-gray-500 rounded-full p-2 mt-1">
                    <MapPin className="text-white w-5 h-5" />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                    C-29 Q Block, Mansarovar Extension, Narayan Vihar,<br />
                    Jaipur, Rajasthan 302029
                </p>
             </div>
          </div>

        </div>
      </div>

      {/* --- Part 3: Links Section --- */}
      <div className="pt-12 pb-8 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
            
            {/* Brand */}
            <div className="col-span-1 md:col-span-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6">Uptimise IT</h3>
                <div className="flex gap-4 mb-6 font-light">
                  <Facebook size={20} className="hover:text-red-300 cursor-pointer transition-colors" />
                  <Linkedin size={20} className="hover:text-red-300 cursor-pointer transition-colors" />
                  <Instagram size={20} className="hover:text-red-300 cursor-pointer transition-colors" />
                  <Globe size={20} className="hover:text-red-300 cursor-pointer transition-colors" />
                  <X size={20} className="hover:text-red-300 cursor-pointer transition-colors" />
                </div>
              </div>
              <div className="text-xs space-y-1">
                <p>© uptimiseit.</p>
                <p>All rights reserved 2025</p>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold mb-6">Services</h4>
              <ul className="space-y-3 text-sm font-light font-mono">
                <li className="hover:text-red-300 cursor-pointer transition-colors">Design</li>
                <li className="hover:text-red-300 cursor-pointer transition-colors">Technology</li>
                <li className="hover:text-red-300 cursor-pointer transition-colors">Neuromarketing</li>
                <li className="hover:text-red-300 cursor-pointer transition-colors">Digital Marketing</li>
              </ul>
            </div>

            {/* About */}
            <div>
              <h4 className="font-bold mb-6">About</h4>
              <ul className="space-y-3 text-sm font-mono font-light">
                <li className="hover:text-red-300 cursor-pointer transition-colors">About Us</li>
                <li className="hover:text-red-300 cursor-pointer transition-colors">Team</li>
                <li className="hover:text-red-300 cursor-pointer transition-colors">Career</li>
                <li className="hover:text-red-300 cursor-pointer transition-colors">Clients</li>
              </ul>
            </div>

            {/* Quick Links 1 */}
            <div>
              <h4 className="font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-sm font-mono font-light">
                <li className="hover:text-red-300 cursor-pointer transition-colors">Work</li>
                <li className="hover:text-red-300 cursor-pointer transition-colors">Blog</li>
                <li className="hover:text-red-300 cursor-pointer transition-colors">Reach Us</li>
                <li className="hover:text-red-300 cursor-pointer transition-colors">Site Map</li>
              </ul>
            </div>

             {/* Quick Links 2 */}
             <div>
              <h4 className="font-bold mb-6">Legal</h4>
              <ul className="space-y-3 text-sm font-mono font-light">
                <li className="hover:text-red-300 cursor-pointer transition-colors">Privacy Policy</li>
                <li className="hover:text-red-300 cursor-pointer transition-colors">Terms of use</li>
                <li className="hover:text-red-300 cursor-pointer transition-colors">Refund Policy</li>
                <li className="hover:text-red-300 cursor-pointer transition-colors">Copyrights Policy</li>
              </ul>
            </div>
          </div>

          <div className="w-full h-px bg-gray-200 mb-8"></div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <p className="text-center text-sm max-w-2xl text-gray-500">
              We’re a UI/UX design agency that has helped businesses scale by transforming complex challenges into intuitive digital experiences.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;