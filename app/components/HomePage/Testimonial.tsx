import React from 'react';
import { Linkedin, Quote, Star } from 'lucide-react';

const FounderAndTestimonials = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 font-sans space-y-12">
      
      {/* --- SECTION 1: MEET THE FOUNDER --- */}
      <div className="w-full bg-white border border-gray-300 rounded-xl overflow-hidden flex flex-col md:flex-row h-auto md:h-[350px]">
        
        {/* Left: Big Title */}
        <div className="w-full md:w-[35%] p-6 md:p-8 flex items-center">
          <h2 className="text-5xl font-extrabold text-black leading-tight tracking-tighter">
            Meet<br />The<br />Founder
          </h2>
        </div>

        {/* Right: Content & Image */}
        <div className="w-full md:w-[65%] relative p-8 md:p-12 flex flex-col justify-center">
          
          {/* Decorative Dots */}
          <div className="flex space-x-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-[#FF5555]"></div>
            <div className="w-3 h-3 rounded-full bg-[#9F45FF]"></div>
            <div className="w-3 h-3 rounded-full bg-[#4F46E5]"></div>
          </div>

          {/* Name & Bio */}
          <div className="z-10 relative max-w-lg">
            <h3 className="text-3xl font-bold text-black mb-2">Jugal Shah</h3>
            <p className="text-gray-700 text-sm font-medium leading-relaxed mb-4">
              Founder, Head of UX at Leo9 Studio.<br />
              Behavioral science and Neuromarketing expert.
            </p>
            
            {/* LinkedIn Icon */}
            <a href="#" className="inline-block text-blue-600 hover:text-blue-700 mb-6">
              <Linkedin size={24} fill="currentColor" strokeWidth={0} />
            </a>

            {/* Awards/Logos (Placeholders) */}
            <div className="flex items-center space-x-4 opacity-60 grayscale">
              {/* Simulate the award badges with text/border placeholders */}
              <div className="border border-gray-400 rounded px-2 py-1 text-[10px] font-serif text-center">
                <span className="font-bold">yahoo!</span><br/>Top Digital Agency
              </div>
              <div className="border border-gray-400 rounded px-2 py-1 text-[10px] font-serif text-center">
                <span className="font-bold">Clutch</span><br/>Top UX Designer
              </div>
              <div className="border border-gray-400 rounded px-2 py-1 text-[10px] font-serif text-center">
                <span className="font-bold">Clutch</span><br/>Top UX Agencies
              </div>
            </div>
          </div>

          {/* Founder Image (Cutout Style) */}
          {/* Using a grayscale filter to match the aesthetic */}
          <img 
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" 
            alt="Jugal Shah" 
            className="absolute bottom-0 right-0 h-[90%] object-contain grayscale contrast-110 md:mr-8 hidden md:block"
          />
        </div>
      </div>

      {/* --- SECTION 2: TESTIMONIALS --- */}
      <div className="w-full bg-gray-50 rounded-xl p-5 md:p-16 flex flex-col md:flex-row items-center md:items-start gap-12">
        
        {/* Left: Reviewer Info */}
        <div className="flex flex-col items-center text-center md:w-1/4">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" 
            alt="Robb Fahrion" 
            className="w-24 h-24 rounded-full object-cover grayscale mb-4 shadow-md"
          />
          <h4 className="font-bold text-black text-lg">Robb Fahrion</h4>
          <p className="text-xs text-black font-medium uppercase tracking-wide">C.E.O. - FVG</p>
        </div>

        {/* Right: Review Content */}
        <div className="flex-1 relative">
          <div className="flex flex-col h-full justify-between">
            
            {/* Header: Quote Icon + Stars */}
            <div className="mb-4">
              <h3 className="text-xl font-bold text-black mb-4">What Clients Say</h3>
              <div className="flex items-start space-x-3">
                <Quote className="text-blue-300 transform rotate-180 -mt-1" size={40} fill="currentColor" stroke="none" />
                <div className="flex space-x-1 pt-1">
                   {[...Array(5)].map((_, i) => (
                     <Star key={i} size={18} className="text-[#6366F1]" fill="currentColor" stroke="none" />
                   ))}
                </div>
              </div>
            </div>

            {/* Review Text */}
            <p className="text-sm md:text-base text-gray-800 leading-relaxed mb-8 font-medium">
              Team Leo9 works tirelessly to get deliverables to meet all client needs. Their organization should be trusted because they've continued to deliver quality over and over again.
            </p>

            {/* Pagination Dots */}
            <div className="flex items-center space-x-2 mt-auto">
              <div className="w-2 h-2 rounded-full bg-blue-300 hover:bg-blue-500 cursor-pointer"></div>
              <div className="w-2 h-2 rounded-full bg-blue-300 hover:bg-blue-500 cursor-pointer"></div>
              <div className="w-2 h-2 rounded-full bg-blue-600 cursor-pointer"></div> {/* Active */}
              <div className="w-2 h-2 rounded-full bg-blue-300 hover:bg-blue-500 cursor-pointer"></div>
              <div className="w-2 h-2 rounded-full bg-blue-300 hover:bg-blue-500 cursor-pointer"></div>
              <div className="w-2 h-2 rounded-full bg-blue-300 hover:bg-blue-500 cursor-pointer"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FounderAndTestimonials;