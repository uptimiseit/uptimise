"use client";
import dynamic from "next/dynamic";
import React from "react";
import contact from "@/public/json/mail.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function ContactSection() {
  return (
    <>
   <section className="w-full  px-6 md:px-12 lg:px-28 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* ================= LEFT COLUMN: Heading & Form ================= */}
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-black">Let's Talk!</h2>

          <form className="space-y-10 w-full">
            {/* Input 1: Name */}
            <div className="flex flex-col md:flex-row md:items-end text-2xl md:text-4xl font-bold text-black group">
              <span className="whitespace-nowrap mr-4 mb-2 md:mb-0 text-gray-500">Hi! I am</span>
              <input
                type="text"
                placeholder="eg. Simran"
                className="w-full bg-transparent border-b border-gray-300 pb-2 focus:border-black focus:outline-none placeholder:text-gray-300 transition-colors duration-300"
              />
            </div>

            {/* Input 2: Email */}
            <div className="flex flex-col md:flex-row md:items-end text-2xl md:text-4xl font-bold text-black group">
              <span className="whitespace-nowrap mr-4 mb-2 md:mb-0 text-gray-500">Reach me at</span>
              <input
                type="email"
                placeholder="eg. hello@gmail.com"
                className="w-full bg-transparent border-b border-gray-300 pb-2 focus:border-black focus:outline-none placeholder:text-gray-300 transition-colors duration-300"
              />
            </div>

            {/* Button & Clutch Widget */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-8 gap-8">
              <button
                type="button"
                className="border-2 border-black text-black px-10 py-3 font-bold text-lg hover:bg-black hover:text-white transition-all duration-300"
              >
                Send Message
              </button>

              {/* Clutch Widget */}
              <div className="flex items-center gap-3 opacity-80 hover:opacity-100 border p-3 transition-opacity">
                <div className="flex flex-col items-end leading-tight">
                  <span className="text-[10px] tracking-widest text-gray-500 uppercase">
                    Reviewed on
                  </span>
                  <span className="text-xl font-bold text-slate-800">
                    Clutch
                  </span>
                </div>
                <div className="flex flex-col">
                  {/* Stars */}
                  <div className="flex text-red-500 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[10px] text-gray-500 font-medium mt-1">
                    31 REVIEWS
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* ================= RIGHT COLUMN: Lottie & Contact Info ================= */}
        {/* h-full ensures it stretches to match the form height. justify-between pushes Lottie top, Text bottom */}
        <div className="flex flex-col items-end justify-between h-full min-h-[500px] lg:min-h-0 pt-10 lg:pt-0">
            
            {/* Lottie Container - Made Responsive */}
            {/* w-full flex justify-end ensures it aligns right */}
            <div className="w-full flex justify-center lg:justify-end">
                <div className="w-68 h-68 md:w-96 md:h-96 lg:w-[300px] lg:h-[300px]">
                    <Lottie
                        animationData={contact}
                        loop={true}
                        className="w-full h-full" // Use Tailwind to control size
                    />
                </div>
            </div>

            {/* Contact Info Text */}
            <div className="text-right space-y-3 font-medium text-gray-800">
                <a
                    href="mailto:sales@gmail.com"
                    className="block text-blue-600 underline text-2xl mb-6 hover:text-blue-800 transition-colors"
                >
                    sales@uptimiseit.com
                </a>

                <div className="flex flex-col gap-1 text-lg">
                    <p>
                        <span className="font-bold text-gray-400">IND:</span> +91 7020134662
                    </p>
                    <p className="text-gray-600">+91 97622 25763</p>
                    <p className="text-gray-600">+91 94614 66510</p>
                </div>

                <p className="mt-4 text-lg">
                    <span className="font-bold text-gray-400">USA:</span> +1 (802) 347-3690
                </p>

                <p className="mt-4 text-gray-400 font-bold pt-4 border-t border-gray-100">
                    Join The Team:{" "}
                    <span className="text-black font-normal">+91 93244 68828</span>
                </p>
            </div>
        </div>

      </div>
    </section>

      <section className="w-full bg-white py-20 px-6 md:px-12 font-sans">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 relative">
          {/* ================= LEFT COLUMN: INDIA ================= */}
          {/* lg:border-r adds the vertical line only on large screens */}
          <div className="flex flex-col pb-12 lg:pb-0 lg:pr-16 border-gray-200 lg:border-r">
            {/* Header section with Text and Icon */}
            <div className="flex justify-between items-start mb-10">
              <div>
                <h2 className="text-5xl font-bold text-black mb-2">Jaipur</h2>
                {/* Note: Times are static to match image. For real-time, you'd need JS Date objects */}
                <p className="text-xl text-black font-medium">04:54 PM</p>
              </div>

              {/* Custom Gateway of India Line Art SVG */}
              <svg
                className="w-28 h-28 text-black -mt-4"
                viewBox="0 0 120 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                {/* Base */}
                <path d="M10 95h100" strokeLinecap="round" />
                {/* Main Structure */}
                <path d="M25 95V55a10 10 0 0110-10h50a10 10 0 0110 10v40" />
                {/* Central Arch */}
                <path d="M45 95V70a5 5 0 015-5h20a5 5 0 015 5v25" />
                {/* Side Arches */}
                <path d="M25 55l-5-8h15l-5 8M95 55l5-8h-15l5 8" />
                {/* Top Tiers */}
                <path d="M35 45h50v-8H35zM40 37h40v-8H40zM45 29h30v-8H45z" />
                {/* Domes */}
                <path d="M38 21a5 5 0 0110 0M55 15a6 6 0 0112 0M72 21a5 5 0 0110 0" />
                {/* Vertical lines in arches for detail */}
                <path d="M32 95v-8M88 95v-8M60 95v-15" opacity="0.5" />
              </svg>
            </div>

            {/* Address Blocks */}
            <div className="space-y-8 text-lg text-gray-800 leading-relaxed max-w-md">
              <p>
                Office No.202, 2nd Floor, Techno Park, Eksar, Link Road,
                Borivali (W), Mumbai: 400 092.
              </p>
              <p>
                44, 2nd floor, 2nd Main Road,3rd Cross Guru Raghavendra Nagar,
                JP Nagar 7th Phase Bangalore, Karnataka 560078
              </p>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: USA ================= */}
          {/* pt-12 adds space on mobile when stacked. lg:pl-16 adds left padding on desktop */}
          <div className="flex flex-col pt-12 lg:pt-0 lg:pl-16">
            {/* Header section with Text and Icon */}
            <div className="flex justify-between items-start mb-10">
              <div>
                <h2 className="text-5xl font-bold text-black mb-2">Pune</h2>
                <p className="text-xl text-black font-medium">06:24 AM</p>
              </div>

              {/* Custom Art Deco Skyscraper Line Art SVG */}
              <svg
                className="w-24 h-28 text-black -mt-4"
                viewBox="0 0 100 120"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                {/* Base */}
                <path d="M15 115h70" strokeLinecap="round" />
                {/* Main Body */}
                <path d="M25 115V75h50v40" />
                {/* Vertical Lines */}
                <path d="M35 75v40M45 75v40M55 75v40M65 75v40" opacity="0.6" />
                {/* Tier 1 */}
                <path d="M30 75V55h40v20" />
                {/* Tier 2 */}
                <path d="M38 55V35h24v20" />
                {/* Tier 3 & Spire */}
                <path d="M44 35V15h12v20M50 15V5" />
                {/* Horizontal details */}
                <path d="M30 65h40M38 45h24M44 25h12" />
              </svg>
            </div>

            {/* Address Block */}
            <div className="space-y-8 text-lg text-gray-800 leading-relaxed max-w-md">
              <p>16 Madison Ave, Lake Hiawatha, NJ 07034, United States</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
