'use client';

import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
// @ts-ignore

import 'swiper/css';
// @ts-ignore
import 'swiper/css/navigation';

// --- DATA ---
const historyData = [
  {
    year: '2012',
    title: 'Leo9 Studio is born',
    description: 'We started with a vision to combine design and technology.',
    logos: []
  },
  {
    year: '2013',
    title: 'Expanded our resources to New Zealand',
    description: 'Opened for business in the USA and Spain Market',
    logos: []
  },
  {
    year: '2014',
    title: 'Leo9 Studio enters Canada',
    description: 'Worked with TCS, the World\'s Most Extensive IT Services Providing Company',
    logos: [
      { name: 'Tata', src: 'https://placehold.co/100x40?text=TATA' },
      { name: 'Lakme', src: 'https://placehold.co/100x40?text=LAKME' },
      { name: 'P&G', src: 'https://placehold.co/100x40?text=P&G' },
    ]
  },
  {
    year: '2015',
    title: 'Entered the UAE and Bahrain',
    description: 'Won two international awards for design and branding.',
    subText: 'Worked with Unilever, Global Gold Medalist for Sustainability.',
    logos: [
      { name: 'Unilever', src: 'https://placehold.co/100x40?text=Unilever' },
      { name: 'Yes Bank', src: 'https://placehold.co/100x40?text=YesBank' },
    ]
  },
  {
    year: '2016',
    title: 'Leo9 Studio enters the Australia and Nigeria market',
    description: 'Won four international awards for branding and digital marketing.',
    subText: 'Worked with Godrej, a Forbes listed company.',
    logos: [
      { name: 'Godrej', src: 'https://placehold.co/100x40?text=Godrej' },
      { name: 'Yes Bank', src: 'https://placehold.co/100x40?text=YesBank' },
    ]
  },
  {
    year: '2017',
    title: 'Entered the UK and Turkey',
    description: 'Expanded our global footprint further.',
    logos: []
  }
];

// --- COMPONENTS ---

const ActiveCard = ({ item }: { item: typeof historyData[0] }) => (
  // Ideally this should be white to cover the line behind it
  <div className="w-full h-[400px] border border-black bg-white p-12 flex flex-col justify-center shadow-none relative z-20">
    <div className="space-y-6">
      <h3 className="text-xl md:text-2xl font-bold text-black leading-snug">
        {item.description}
      </h3>
      {item.subText && (
        <p className="text-lg text-black font-semibold opacity-90">
          {item.subText}
        </p>
      )}
    </div>

    {/* Logos Section */}
    {item.logos.length > 0 && (
      <div className="flex items-center gap-10 mt-12 pt-8 border-t border-gray-100">
        {item.logos.map((logo, i) => (
          <img 
            key={i} 
            src={logo.src} 
            alt={logo.name} 
            className="h-8 w-auto object-contain grayscale"
          />
        ))}
      </div>
    )}
  </div>
);

const InactiveCard = ({ item }: { item: typeof historyData[0] }) => (
  <div className="relative w-full h-[350px]">
    
    {/* 1. TOP SECTION (Title + Tick) */}
    {/* positioned absolutely from bottom 50% (the center line) going UP */}
    <div className="absolute bottom-[50%] left-0 w-full  pl-8 flex flex-col justify-end border-l-2 border-transparent">
        {/* The Vertical Tick Line */}
        <div className="absolute bottom-0 left-0 w-0.5 h-16 bg-black"></div>
        
        <h3 className="text-lg font-bold text-black leading-tight max-w-[300px]">
          {item.title}
        </h3>
    </div>

    {/* 2. BOTTOM SECTION (Year) */}
    {/* positioned absolutely from top 50% (the center line) going DOWN */}
    <div className="absolute top-[50%] left-0 w-full pt-6 pl-0">
       <span className="text-2xl font-bold text-black tracking-tighter block">
         {item.year}
       </span>
    </div>

  </div>
);

// --- MAIN COMPONENT ---

const HistoryTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="w-full h-screen bg-white flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* --- THE GLOBAL AXIS LINE --- */}
      {/* This runs through the entire screen height center */}
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-black -translate-y-1/2 z-0" />

      <div className="w-full max-w-[1800px] px-4 z-10">
        <Swiper
          modules={[Navigation]}
          // Important: We adjust slidesPerView to fit the "wide center, narrow sides" look
          slidesPerView="auto"
          centeredSlides={true}
          spaceBetween={0} 
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          speed={700}
          className="overflow-visible!"
        >
          {historyData.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <SwiperSlide 
                key={index} 
                className={`transition-all duration-700 ease-in-out h-auto! flex items-center justify-center ${isActive ? 'w-[550px]! mx-12' : 'w-[350px]!'}`}
              >
                {/* Transition Logic:
                   We fade between the components.
                   The ActiveCard has a white bg, so it covers the axis line.
                */}
                <div className="w-full relative">
                  {isActive ? <ActiveCard item={item} /> : <InactiveCard item={item} />}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* --- BOTTOM NAVIGATION --- */}
      <div className="absolute bottom-16 left-0 w-full flex justify-center items-center gap-16 z-30">
        
        <button 
          onClick={() => swiperRef.current?.slidePrev()}
          className="group p-2 transition-transform active:scale-95"
        >
          <ArrowLeft className="w-10 h-10 text-black stroke-[1.5]" />
        </button>

        <span className="text-xl font-bold text-black font-mono">
           {String(activeIndex + 1).padStart(2, '0')}
        </span>

        <button 
          onClick={() => swiperRef.current?.slideNext()}
          className="group p-2 transition-transform active:scale-95"
        >
          <ArrowRight className="w-10 h-10 text-black stroke-[1.5]" />
        </button>

      </div>

    </section>
  );
};

export default HistoryTimeline;