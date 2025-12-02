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
import { Facebook, Linkedin, Instagram, Globe, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Footer = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // IF the user sees the footer:
        if (entry.isIntersecting) {
          setIsVisible(true);
        } 
        // IF the user scrolls away (it's no longer visible):
        else {
          setIsVisible(false); // <--- This resets the animation!
        }
      },
      { 
        threshold: 0.2 // Trigger when 20% of the footer is visible
      } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="w-full relative z-10">
      
      {/* --- Part 1: Animated Purple CTA Section --- */}
      <div 
        ref={sectionRef} 
        className="relative w-full py-28 px-6 overflow-hidden"
      >
        
        {/* ANIMATED CURTAIN BACKGROUND */}
        {/* When isVisible is false, h-0. When true, h-full. */}
        <div 
          className={`
            absolute top-0 left-0 w-full bg-linear-to-b from-[#5c0096] to-[#8A0B92]
            transition-[height] duration-1000 ease-in-out
            ${isVisible ? 'h-full' : 'h-0'}
          `}
        ></div>

        {/* Content Wrapper */}
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

      {/* --- Part 2: White Links Section (Static) --- */}
      <div className="pt-10 pb-8 px-6 md:px-12 ">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-16">
            
            {/* Brand */}
            <div className="col-span-1 md:col-span-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6 ">Uptimise IT</h3>
                <div className="flex gap-4 mb-6 font-light ">
                  <Facebook size={20} className="hover:text-red-300  cursor-pointer transition-colors" />
                  <Linkedin size={20} className="hover:text-red-300  cursor-pointer transition-colors" />
                  <Instagram size={20} className="hover:text-red-300  cursor-pointer transition-colors" />
                  <Globe size={20} className="hover:text-red-300  cursor-pointer transition-colors" />
                  <X size={20} className="hover:text-red-300  cursor-pointer transition-colors" />
                </div>
              </div>
              <div className="text-xs space-y-1 ">
                <p>© uptimiseit.</p>
                <p>All rights reserved 2025</p>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold mb-6 ">Services</h4>
              <ul className="space-y-3 text-sm font-light font-mono ">
                <li className="hover:text-red-300  cursor-pointer transition-colors">Design</li>
                <li className="hover:text-red-300  cursor-pointer transition-colors">Technology</li>
                <li className="hover:text-red-300  cursor-pointer transition-colors">Neuromarketing</li>
                <li className="hover:text-red-300  cursor-pointer transition-colors">Digital Marketing</li>
              </ul>
            </div>

            {/* About */}
            <div>
              <h4 className="font-bold mb-6 ">About</h4>
              <ul className="space-y-3 text-sm font-mono font-light ">
                <li className="hover:text-red-300  cursor-pointer transition-colors">About Us</li>
                <li className="hover:text-red-300  cursor-pointer transition-colors">Team</li>
                <li className="hover:text-red-300  cursor-pointer transition-colors">Career</li>
                <li className="hover:text-red-300  cursor-pointer transition-colors">Clients</li>
              </ul>
            </div>

            {/* Quick Links 1 */}
            <div>
              <h4 className="font-bold mb-6 ">Quick Links</h4>
              <ul className="space-y-3 text-sm font-mono font-light ">
                <li className="hover:text-red-300  cursor-pointer transition-colors">Work</li>
                <li className="hover:text-red-300  cursor-pointer transition-colors">Blog</li>
                <li className="hover:text-red-300  cursor-pointer transition-colors">Reach Us</li>
                <li className="hover:text-red-300  cursor-pointer transition-colors">Site Map</li>
              </ul>
            </div>

             {/* Quick Links 2 */}
             <div>
              <h4 className="font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-sm font-mono font-light ">
                <li className="hover:text-red-300  cursor-pointer transition-colors">Privacy Policy</li>
                <li className="hover:text-red-300  cursor-pointer transition-colors">Terms of use</li>
                <li className="hover:text-red-300  cursor-pointer transition-colors">Refund Policy</li>
                <li className="hover:text-red-300  cursor-pointer transition-colors">Copyrights Policy</li>
              </ul>
            </div>
          </div>

          <div className="w-full h-px bg-gray-200 mb-8"></div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <p className=" text-center text-sm max-w-2xl">
              We’re a UI/UX design agency that has helped businesses scale by transforming complex challenges into intuitive digital experiences.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;