// import React from 'react';
// import Image from 'next/image';

// function AboutSection  () {
//   return (
//     // Section Container: Needs 'relative' so the images can be positioned absolutely inside it.
//     // 'overflow-hidden' ensures images don't spill out if they are too big.
//     <section className="w-full bg-white py-10  relative overflow-hidden font-sans">
      
//       {/* ================= TEXT CONTENT (Centered) ================= */}
//       {/* 'relative z-10' ensures text sits ON TOP of the images */}
//       <div className="max-w-[90%] md:max-w-4xl mx-auto text-center relative z-10 px-4">
        
//         {/* The Pink Label */}
//         <h6 className="text-[#ff3366] font-bold uppercase tracking-wider mb-8 text-sm md:text-base">
//           About Us
//         </h6>
        
//         {/* The Main Headline */}
//         {/* leading-tight ensures the lines don't have too much gap */}
//         <h2 className="text-xl md:text-3xl md:max-w-3xl font-extrabold text-black leading-14">
//           We, at Leo9 Studio, apply neuromarketing and behavioral science to design, digitize and grow your business.
//         </h2>
//       </div>

//       {/* ================= LEFT IMAGE ================= */}
//       {/* - absolute bottom-0 left-0: Sticks it to the bottom left corner.
//          - hidden lg:block: Hides on mobile, shows on large screens (like the design).
//          - z-0: Puts it behind the text.
//       */}
//       <div className="hidden lg:block relative bottom-0 left-0 z-0 select-none pointer-events-none">
//         <Image
//           src="/about-left.svg" // Path to your left image
//           alt="Desk setup illustration"
//           width={500} // Base width for optimization
//           height={500}
//           // Tailwind classes to control responsive sizing. 
//           // It will be 300px wide on laptops, and up to 500px on very large screens.
//           className="w-auto h-auto max-w-[300px] xl:max-w-[500px]"
//         />
//       </div>

//       {/* ================= RIGHT IMAGE ================= */}
//       {/* Sticks to the bottom right corner */}
//       <div className="hidden lg:block relative bottom-0 right-0 z-0 select-none pointer-events-none">
//         <Image
//           src="/about-right.png" // Path to your right image (including the lion badge)
//           alt="Person working illustration"
//           width={800} 
//           height={800}
//           // Tailwind classes for sizing. slightly larger than the left one.
//           className="w-auto h-[300px]"
//         />
//       </div>

//     </section>
//   );
// };

// export default AboutSection;

"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import HistoryTimeline from '../components/About/HistoryTimeline';
import VisionMissionScroll from '../components/About/VisionMissionScroll';
import { ArrowRight } from 'lucide-react';
import { FaDebian } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import Link from 'next/link';

// function AboutSection() {

// --- 2. ANIMATION HELPERS ---
const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function AboutPage() {
    const [isExpanded, setIsExpanded] = useState(false);
    return (

        <>
    {/* // Section Container: Keeps 'relative' so absolute children stay inside */}
    <section className="w-full bg-white py-10 relative overflow-hidden font-sans">
      
      {/* ================= TEXT CONTENT ================= */}
      {/* z-10 ensures text is clickable and on top of images */}
      <div className="max-w-[90%] md:max-w-4xl mx-auto text-center relative z-10 px-4">
        
        <h6 className="text-[#ff3366] font-bold uppercase tracking-wider mb-8 text-sm md:text-base">
          About Us
        </h6>
        
        <h2 className="text-xl md:text-3xl md:max-w-3xl mx-auto font-extrabold text-black leading-snug">
          We, at Uptimiseit, apply neuromarketing and behavioral science to design, digitize and grow your business.
        </h2>
      </div>

      {/* ================= LEFT IMAGE ================= */}
      {/* CHANGED: 'relative' -> 'absolute' so it sticks to the corner */}
      <div className="hidden lg:block relative top-10 bottom-0 left-0 z-0 select-none pointer-events-none">
        <Image
          src="/about-left.svg" 
          alt="Desk setup illustration"
          width={500} 
          height={500}
          className="w-auto h-auto max-w-[300px] xl:max-w-[500px]"
        />
      </div>

      {/* ================= RIGHT IMAGE ================= */}
      {/* CHANGED: 'relative' -> 'absolute' so it sticks to the corner */}
      <div className="hidden lg:block absolute bottom-0 right-0 z-0 select-none pointer-events-none">
        <Image
          src="/about-right.png" 
          alt="Person working illustration"
          width={800} 
          height={800}
          className="w-auto h-[300px]"
        />
      </div>

    </section>


    <section className="w-full bg-white py-20 px-6 md:px-12 font-sans">
      <div className="max-w-5xl mx-auto flex flex-col items-start text-left">
        
        {/* Blue Label */}
        <h3 className="text-[#4F46E5] font-bold text-lg mb-8 tracking-wide">
          About Us
        </h3>

        {/* Main Headline */}
        <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-6 font-norma">
          At Uptimise IT, we bridge the gap between complex technology and business growth, creating digital solutions geared toward your long-term success.
        </p>

        {/* Visible Description */}
        <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-6 font-normal">
          Since our inception, we have established ourselves as leaders in IT excellence. Our services range from full-stack web development, blockchain integration, and mobile applications to strategic UI/UX design and data-driven digital marketing.
        </p>

        {/* 3. The Expandable/Hidden Content */}
        <div 
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? 'max-h-[1000px] opacity-100 mb-12' : 'max-h-0 opacity-0 mb-0'
          }`}
        >
          <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-normal">
            We specialize in creating custom software that scales with your vision. Whether you are a startup looking for an MVP or an enterprise seeking digital transformation, our team of expert developers and creative strategists work tirelessly to ensure your project is delivered on time, within budget, and beyond expectations. We don't just build software; we build the foundation for your future.
          </p>
        </div>

        {/* 4. The Toggle Button */}
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-[#FF3366]  cursor-pointer font-bold text-lg border-b-2 border-dotted border-[#FF3366] pb-1 hover:text-red-600 hover:border-red-600 transition-colors outline-none"
        >
          {isExpanded ? "Less" : "More"}
        </button>

      </div>
    </section>

    {/* <HistoryTimeline /> */}
    <VisionMissionScroll />


     <section className="bg-white py-20">
            <div className="max-w-5xl mx-auto px-6">
              <FadeIn className="text-center mb-12">
                <h3 className="text-pink-500 font-bold tracking-widest text-sm uppercase">More About Us</h3>
              </FadeIn>
    
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* CARD 1: About Us */}
                <Link href="/about">
                  <FadeIn delay={0.1} className="h-full">
                    <div className="bg-pink-50 p-10 rounded-2xl h-full flex flex-col justify-between group cursor-pointer hover:bg-pink-100 transition-colors duration-300">
                      <div>
                        <h3 className="text-3xl font-bold mb-4 text-black">About Us</h3>
                        <p className="text-gray-600 text-sm">We are super-efficient yet humble to serve you!</p>
                      </div>
                      <div className="flex justify-end ">
                        <ArrowRight className="text-black w-8 h-8 group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </FadeIn>
                </Link>
    
                {/* CARD 2: Team */}
                <Link href="/team">
                  <FadeIn delay={0.2} className="h-full">
                    <div className="bg-purple-50 p-10 rounded-2xl h-full flex flex-col justify-between group cursor-pointer hover:bg-purple-100 transition-colors duration-300">
                      <div>
                        <h3 className="text-3xl font-bold mb-4 text-black">Team</h3>
                        <p className="text-gray-600 text-sm">We are proud of our experienced and accomplished team!</p>
                      </div>
                      <div className="flex justify-end ">
                        <ArrowRight className="text-black w-8 h-8 group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </FadeIn>
                </Link>
    
              </div>
            </div>
          </section>

    </>
  );
}

// export default AboutSection;