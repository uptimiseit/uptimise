"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  ArrowRight, 
  Car, 
  Building2, 
  Briefcase, 
  ShoppingCart, 
  GraduationCap, 
  Zap, 
  Calendar, 
  Utensils, 
  HardDrive, 
  HeartPulse, 
  Hotel, 
  Factory, 
  Clapperboard, 
  BookOpen, 
  Home, 
  Cloud, 
  Ship, 
  Plane 
} from "lucide-react";

// --- DATA ---

const LOGOS = [
  "TATA", "Godrej", "tikona", "travelxp", "HUGGIES", "LAKME",
  "ICICI Prudential", "CRMNEXT", "P&G", "Unilever", "SONY",
  "KALPATARU", "Star", "Colgate", "YES BANK", "RELIANCE",
  "Tax2win", "Capital First", "ANAND RATHI", "investorial",
  "Lxme", "Mahindra", "SAHARA", "Fino"
];

const TESTIMONIALS = [
  {
    id: 1,
    quote: "Leo9 Studio is a reliable, tech savvy and creative group to work with. Their creative insights, combined with superb technical capabilities make them a great team. I would recommend Leo9 team without hesitation.",
    author: "Kamlesh Dixit",
    role: "India Head at Deloitte",
    image: "/api/placeholder/100/100" // Replace with real image
  },
  {
    id: 2,
    quote: "The team understood our vision perfectly and translated it into a seamless digital experience. Their attention to detail in UI/UX is unmatched in the industry.",
    author: "Robb Fahrion",
    role: "C.E.O - FVG",
    image: "/api/placeholder/100/100"
  },
  {
    id: 3,
    quote: "They brought a fresh perspective to our brand. The collaboration was smooth, professional, and the final output exceeded our expectations significantly.",
    author: "Kapil Pershad",
    role: "C.T.O. - Payzli",
    image: "/api/placeholder/100/100"
  }
];

const DOMAINS = [
  { name: "Automobiles", icon: <Car strokeWidth={1.5} /> },
  { name: "Capital", icon: <Building2 strokeWidth={1.5} /> },
  { name: "Consulting", icon: <Briefcase strokeWidth={1.5} /> },
  { name: "E-Commerce", icon: <ShoppingCart strokeWidth={1.5} /> },
  { name: "Education", icon: <GraduationCap strokeWidth={1.5} /> },
  { name: "Energy", icon: <Zap strokeWidth={1.5} /> },
  { name: "Events", icon: <Calendar strokeWidth={1.5} /> },
  { name: "Food", icon: <Utensils strokeWidth={1.5} /> },
  { name: "Hardware", icon: <HardDrive strokeWidth={1.5} /> },
  { name: "Healthcare", icon: <HeartPulse strokeWidth={1.5} /> },
  { name: "Hospitality", icon: <Hotel strokeWidth={1.5} /> },
  { name: "Industries", icon: <Factory strokeWidth={1.5} /> },
  { name: "Movies", icon: <Clapperboard strokeWidth={1.5} /> },
  { name: "Publishing", icon: <BookOpen strokeWidth={1.5} /> },
  { name: "Real-Estate", icon: <Home strokeWidth={1.5} /> },
  { name: "SAAS", icon: <Cloud strokeWidth={1.5} /> },
  { name: "Ship", icon: <Ship strokeWidth={1.5} /> },
  { name: "Travel", icon: <Plane strokeWidth={1.5} /> },
];

// --- ANIMATION HELPERS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function ClientsPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-pink-100 selection:text-pink-900">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="container mx-auto px-6 py-20 text-center">
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeInUp}
        >
          <span className="text-pink-500 font-bold tracking-widest text-sm uppercase">Clients</span>
          <div className="text-sm text-gray-400 mt-1 mb-8">Home • Clients</div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-4xl mx-auto text-gray-900 mb-12">
            We make happy clients by interconnecting technology with business & art.
          </h1>
        </motion.div>

        {/* Hero Illustration with Float Animation */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full max-w-lg mx-auto h-64 md:h-80 flex items-center justify-center"
        >
           {/* Placeholder for the illustration in the video */}
           {/* Replace this div with your actual <Image /> or SVG */}
           <div className="relative w-full h-full bg-indigo-50 rounded-full flex items-center justify-center opacity-80">
              <span className="text-9xl">🧘</span>
              {/* Floating Icons decoration */}
              <div className="absolute top-0 right-10 text-4xl animate-bounce delay-100">👍</div>
              <div className="absolute bottom-10 left-10 text-4xl animate-bounce delay-700">❤️</div>
              <div className="absolute top-1/2 left-0 text-4xl animate-pulse">💬</div>
           </div>
        </motion.div>
      </section>

      {/* --- 2. CLIENT LOGOS GRID --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.05 } }
            }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center justify-items-center opacity-80"
          >
            {LOGOS.map((logo, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
              >
                {/* Text Placeholder for Logos - Replace with <Image> in real app */}
                <h3 className="text-xl font-bold text-gray-400 hover:text-black">{logo}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- 3. TESTIMONIALS SLIDER --- */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-pink-500 font-bold uppercase tracking-widest text-sm">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              Happy clients with 760+ <br/> successful Projects
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-16 shadow-sm border border-gray-100">
             
             {/* Large Quote Mark */}
             <div className="absolute top-8 left-8 text-pink-100 text-9xl font-serif leading-none select-none">“</div>

             <div className="relative z-10 text-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium mb-10">
                      {TESTIMONIALS[currentTestimonial].quote}
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4">
                       <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                          {/* Image placeholder */}
                          <div className="w-full h-full bg-gray-300"></div>
                       </div>
                       <div>
                          <h4 className="text-lg font-bold text-black">{TESTIMONIALS[currentTestimonial].author}</h4>
                          <p className="text-sm text-gray-500">{TESTIMONIALS[currentTestimonial].role}</p>
                       </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
             </div>

             {/* Navigation Arrows */}
             <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 w-full px-4 md:px-0 md:-left-20 md:-right-20 pointer-events-none">
                <button onClick={prevTestimonial} className="pointer-events-auto p-3 rounded-full border border-gray-200 hover:bg-black hover:text-white hover:border-black transition-all bg-white">
                  <ArrowLeft size={20} />
                </button>
                <button onClick={nextTestimonial} className="pointer-events-auto p-3 rounded-full border border-gray-200 hover:bg-black hover:text-white hover:border-black transition-all bg-white">
                  <ArrowRight size={20} />
                </button>
             </div>
          </div>
        </div>
      </section>

      {/* --- 4. EXPERTISE DOMAINS --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <span className="text-pink-500 font-bold uppercase tracking-widest text-sm">Expertise</span>
          <h2 className="text-4xl font-bold mt-4 mb-20">Domains we have worked for.</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-16">
            {DOMAINS.map((domain, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col items-center gap-4 group cursor-pointer"
              >
                <div className="text-gray-400 group-hover:text-black group-hover:scale-110 transition-all duration-300">
                  {React.cloneElement(domain.icon as React.ReactElement)}
                </div>
                <span className="font-bold text-gray-700 text-sm tracking-wide uppercase group-hover:text-black">
                  {domain.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ROTATING CONTACT BADGE --- */}
      
    </div>
  );
}