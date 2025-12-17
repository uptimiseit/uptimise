"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Background Decor (Optional subtle gradient blob) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE: TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold tracking-wide mb-4"
              whileHover={{ scale: 1.05 }}
            >
              WHO WE ARE
            </motion.span>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Designing Spaces That <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600">
                Inspire & Elevate.
              </span>
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We are a team of visionary architects and interior designers dedicated 
              to transforming ordinary spaces into extraordinary experiences. 
              With over a decade of expertise, we blend functionality with 
              breathtaking aesthetics to create homes that tell your unique story.
            </p>

            {/* ANIMATED STATS */}
            <div className="grid grid-cols-3 gap-8 mb-10 border-t border-gray-100 pt-8">
              {[
                { label: "Years Exp.", value: "12+" },
                { label: "Awards", value: "25+" },
                { label: "Projects", value: "300+" },
              ].map((stat, index) => (
                <div key={index}>
                  <h4 className="text-3xl font-bold text-gray-900">{stat.value}</h4>
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gray-900 text-white font-medium rounded-xl shadow-lg hover:bg-gray-800 transition-colors"
            >
              Learn More About Us &rarr;
            </motion.button>
          </motion.div>

          {/* RIGHT SIDE: FLOATING IMAGES COMPOSITION */}
          <div className="relative h-[600px] w-full hidden lg:block">
            {/* Image 1: Background Large */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="absolute top-0 right-0 w-4/5 h-4/5 rounded-3xl overflow-hidden shadow-2xl z-10"
            >
              <Image
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop"
                alt="Modern Interior"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Image 2: Foreground Small (Parallax Float) */}
            <motion.div
              initial={{ opacity: 0, y: 100, x: -50 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
              animate={{ y: [0, -15, 0] }} // Floating Loop
              // @ts-ignore - Framer motion transition types can be strict
              transition={{
                 // This transition applies to the loop
                 repeat: Infinity,
                 duration: 6,
                 ease: "easeInOut"
              }}
              className="absolute bottom-10 left-10 w-3/5 h-3/5 rounded-3xl overflow-hidden shadow-2xl border-8 border-white z-20"
            >
              <Image
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop"
                alt="Architect Details"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Decorative Dot Grid */}
            <div className="absolute bottom-0 right-20 w-32 h-32 opacity-20 bg-[radial-gradient(#4f46e5_2px,transparent_2px)] bg-size-[16px_16px] z-0" />
          </div>

        </div>
      </div>
    </section>
  );
}