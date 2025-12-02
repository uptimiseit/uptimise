"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Search,
  PenTool,
  Monitor,
  Smartphone,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import dynamic from "next/dynamic";
// import Image from "next/image"; // Ensure you have images or remove Image components if testing
import ab1 from "@/public/json/ab1.json";
import ab2 from "@/public/json/ab2.json";
import ab3 from "@/public/json/ab3.json";
import ab4 from "@/public/json/ab4.json";
import ab5 from "@/public/json/ab5.json";
import Image from "next/image";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// --- Data Constants ---

const SERVICES = [
  "UI Design",
  "UX Design",
  "UI Development",
  "UI Guidelines",
  "Design System",
  "User Research",
  "UX Consultancy",
  "UX Writing",
  "Iconography",
  "Illustrations",
  "Animations",
];

const PROCESS_STEPS = [
  {
    title: "Empathise",
    desc: "We strive to be a UI UX agency that decodes emotions, anticipates behaviors, and maps journeys.",
    icon: ab1,
  },
  {
    title: "Define (The Problem)",
    desc: "We blend behavioral insights with structured logic, ensuring functions and workflows feel intuitive.",
    // icon: <PenTool className="w-8 h-8 text-gray-700" />,
    icon: ab2,
  },
  {
    title: "Ideation",
    desc: "Our UI UX design firm integrates neuromarketing principles with strategy.",
    // icon: <Lightbulb className="w-8 h-8 text-gray-700" />,
    icon: ab3,
  },
  {
    title: "Prototype",
    desc: "We don't sketch possibilities, we build them considering every property to be a conversation starter.",
    // icon: <Monitor className="w-8 h-8 text-gray-700" />,
    icon: ab4,
  },
  {
    title: "Testing",
    desc: "As a UI and UX company that focuses on behavioral and cognitive assessments, we refine usability.",
    // icon: <CheckCircle className="w-8 h-8 text-gray-700" />,
    icon: ab5,
  },
];

const TOOLS = [
  { name: "Adobe XD", color: "text-purple-700", label: "Xd" },
  { name: "Photoshop", color: "text-blue-700", label: "Ps" },
  { name: "Illustrator", color: "text-orange-600", label: "Ai" },
  { name: "Sketch", color: "text-yellow-500", label: "💎" },
  { name: "Figma", color: "text-purple-600", label: "Fi" },
  { name: "InVision", color: "text-red-500", label: "in" },
];

// --- Animation Helper ---
const FadeIn = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-purple-100 selection:text-purple-900">
      {/* --- 1. HERO SECTION --- */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left: Illustration (Placeholder for the Brain/Bulb) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            {/* Replace this div with your actual SVG/Image */}
            <div className="relative w-80 h-80 border-2 border-gray-100 rounded-full flex items-center justify-center bg-gray-50">
              <Lightbulb strokeWidth={1} size={120} className="text-gray-400" />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-purple-500 rounded-full"></div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <div className="w-full md:w-1/2 space-y-6">
            <FadeIn>
              <span className="text-purple-500 font-bold tracking-widest text-sm uppercase">
                Design
              </span>
              <div className="text-sm text-gray-400 mt-1 mb-4">
                Home • Services • Design
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-gray-900">
                We deliver art <br />
                <span className="text-gray-400">inspired by science.</span>
              </h1>
              <p className="text-xl md:text-2xl font-medium text-gray-600 mt-6 max-w-lg">
                Acing user psychology makes us the best UI UX design agency.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- 2. INTRO & SERVICES LIST --- */}
      <section className="flex items-center justify-center">
        <div className="max-w-4xl  flex items-center justify-center  px-6">
          <div className="flex flex-col  gap-12">
            {/* Left Title */}
            <div className="w-full ">
              <FadeIn>
                <h2 className="text-xl text-purple-500 font-bold leading-snug">
                  What UI/UX Design Services Do We Offer?
                </h2>
                <p className="mt-6 text-2xl font-bold leading-relaxed">
                  At the crossroads of human behaviour, neuromarketing, and
                  data-driven design we craft what we call the ‘blended
                  experience’ - where logic meets intuition, and design becomes
                  second nature.{" "}
                </p>

                <p className="mt-6 text-lg">
                  UI UX design services that go beyond shaping interfaces; we
                  turn simple thoughts into immersive, behaviour-driven digital
                  visions.
                </p>
              </FadeIn>
            </div>

            {/* Right Grid */}
            <div className="w-full ">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-10">
                {SERVICES.map((service, index) => (
                  <FadeIn key={index} delay={index * 0.05}>
                    <h3 className="text-2xl font-bold text-gray-800 border-b w-fit border-dashed hover:text-purple-500 transition-colors cursor-pointer">
                      {service}
                    </h3>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. PROCESS (HOW WE DO IT) --- */}
      <section className="py-20 bg-white flex items-center justify-center">
        <div className=" px-6 max-w-4xl ">
          <div className="text-center mb-16">
            <span className="text-purple-500 font-bold uppercase tracking-widest text-base">
              How We Do It ?
            </span>
            <h2 className="text-4xl font-bold mt-2">
              Every pixel, we design with intent.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {PROCESS_STEPS.map((step, index) => (
              <FadeIn
                key={index}
                delay={index * 0.1}
                className="p-8 transition-all duration-300 bg-white group"
              >
                <div className="mb-6 w-28 h-28 rounded-lg flex items-center justify-center  transition-colors">
                  <Lottie
                    animationData={step.icon}
                    loop={true}
                    className="w-full h-full" // Use Tailwind to control size
                  />
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className=" leading-relaxed text-base">{step.desc}</p>
              </FadeIn>
            ))}
          </div>

          <div className="text-left ml-10 mt-12">
            <a href="/knowledge" className=" font-bold hover:underline">
              To Know More Read{" "}
              <span className="text-purple-500">Our Blog...</span>
            </a>
          </div>
        </div>
      </section>

      {/* --- 4. TOOLS CAROUSEL --- */}
      <section className="py-20 bg-white flex items-center justify-center">
        <div className=" px-6 text-center">
          <h3 className="text-2xl font-bold mb-12">Tools We Use</h3>
          <div className=" justify-center grid grid-cols-3 gap-10">
            {TOOLS.map((tool, i) => (
              <FadeIn
                key={i}
                delay={i * 0.1}
                className="flex flex-col items-center group cursor-pointer"
              >
                {/* Simulating the Logo Box */}
                <div className="w-20 h-20 bg-neutral-100/60 shadow-sm p-28  rounded-xl flex items-center justify-center mb-4 group-hover:-translate-y-2 transition-transform duration-300">
                  <span className={`text-3xl font-extrabold ${tool.color}`}>
                    {tool.label}
                  </span>
                </div>
                {/* <span className="text-gray-400 font-medium text-sm group-hover:text-gray-900">{tool.name}</span> */}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. WORK / CASE STUDY --- */}
     <section className="py-20 bg-white w-full">
  <div className="container mx-auto px-6 max-w-6xl">
    
    {/* Section Label */}
    <div className="text-purple-500 font-bold mb-8 text-xl tracking-wide">Design.</div>

    {/* Card Container */}
    <FadeIn className="relative w-full h-[500px] bg-gray-900 rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500">
      
      {/* 1. Background Image (Using 'fill' for responsiveness) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/about-design.jpg"
          alt="TravelXp Project"
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      {/* 2. Gradient Overlay (Fixed Syntax: bg-gradient-to-t) */}
      {/* This sits on top of the image but behind the text to ensure readability */}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-90 transition-opacity duration-300" />

      {/* 3. Text Content Overlay */}
    

    </FadeIn>
      <div className=" bottom-0 left-0 w-full  transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
        <h3 className="text-4xl md:text-5xl font-extrabold mb-3">TravelXp</h3>
        
        <p className="text-lg mb-6 max-w-2xl leading-relaxed">
          Created great experience for clients looking to book holidays.
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-3 text-sm font-semibold tracking-wider uppercase ">
          <span>UX-UI</span> 
          <span className="text-purple-500">•</span> 
          <span>Web</span> 
          <span className="text-purple-500">•</span> 
          <span>Mobile</span> 
          <span className="text-purple-500">•</span> 
          <span>Branding</span>
        </div>
      </div>
  </div>
</section>

      {/* --- 6. OTHER SERVICES (Bottom Nav) --- */}
      <section className="py-10 max-w-4xl mx-auto px-6 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeIn
            delay={0.1}
            className="bg-purple-50 p-5 rounded-2xl group cursor-pointer hover:bg-purple-100 transition-colors"
          >
            <h3 className="text-3xl font-bold mb-2">Technology.</h3>
            <p className="text-gray-600 mb-6">Leverage the power of code.</p>
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </FadeIn>
          <FadeIn
            delay={0.2}
            className="bg-purple-50 p-5 rounded-2xl group cursor-pointer hover:bg-purple-100 transition-colors"
          >
            <h3 className="text-3xl font-bold mb-2">Marketing.</h3>
            <p className="text-gray-600 mb-6">
              Creative strategies for brands.
            </p>
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
