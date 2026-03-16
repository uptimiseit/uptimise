// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import Link from "next/link";
// import team from "@/public/json/team.json"
// import dynamic from "next/dynamic";

// const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// // --- 1. THE GEOMETRIC FACE ANIMATION COMPONENT ---
// This replicates the "Lion/Face" constellation effect from the video.
// const ConstellationFace = () => {
//   // Coordinates for the dots (Approximate "Face" shape)
//   // [x, y, color]
//   const nodes = [
//     // Center Face
//     { x: 200, y: 200, color: "#000" }, // Nose
//     { x: 170, y: 170, color: "#000" }, // Eye L
//     { x: 230, y: 170, color: "#000" }, // Eye R
//     { x: 180, y: 240, color: "#000" }, // Mouth L
//     { x: 220, y: 240, color: "#000" }, // Mouth R
//     { x: 200, y: 260, color: "#000" }, // Chin

//     // Inner Ring (Purple/Pink)
//     { x: 200, y: 120, color: "#d946ef" }, // Top
//     { x: 120, y: 200, color: "#8b5cf6" }, // Left
//     { x: 280, y: 200, color: "#8b5cf6" }, // Right
//     { x: 140, y: 280, color: "#d946ef" }, // Bottom L
//     { x: 260, y: 280, color: "#d946ef" }, // Bottom R

//     // Outer Ring (Red/Blue accents)
//     { x: 200, y: 60, color: "#ef4444" },
//     { x: 60, y: 200, color: "#3b82f6" },
//     { x: 340, y: 200, color: "#3b82f6" },
//     { x: 100, y: 100, color: "#ef4444" },
//     { x: 300, y: 100, color: "#ef4444" },
//     { x: 100, y: 300, color: "#3b82f6" },
//     { x: 300, y: 300, color: "#3b82f6" },
//   ];

//   // Connections (Which index connects to which)
//   const links = [
//     [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], // Nose connections
//     [1, 6], [2, 6], // Eyes to top
//     [1, 7], [3, 7], // Left side
//     [2, 8], [4, 8], // Right side
//     [5, 9], [3, 9], // Chin to Bottom L
//     [5, 10], [4, 10], // Chin to Bottom R
//     [6, 11], [6, 13], [6, 14], // Top connections
//     [7, 12], [8, 12], // Side outers
//     [9, 15], [10, 16] // Bottom outers
//   ];

//   return (
//     <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
//       <svg viewBox="0 0 400 400" className="w-full h-full max-w-md">
//         {/* Draw Lines First (so they are behind dots) */}
//         {links.map(([start, end], i) => (
//           <motion.line
//             key={`link-${i}`}
//             x1={nodes[start].x}
//             y1={nodes[start].y}
//             x2={nodes[end].x}
//             y2={nodes[end].y}
//             stroke="#e5e7eb" // Light gray lines
//             strokeWidth="1"
//             strokeDasharray="4 4" // Dotted lines like video
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: i * 0.05 }}
//           />
//         ))}

//         {/* Draw Dots */}
//         {nodes.map((node, i) => (
//           <motion.circle
//             key={`node-${i}`}
//             cx={node.x}
//             cy={node.y}
//             r={i < 6 ? 6 : 4} // Inner face dots are bigger
//             fill={node.color}
//             initial={{ scale: 0, opacity: 0 }}
//             animate={{ 
//               scale: [1, 1.3, 1],
//               opacity: 1,
//             }}
//             transition={{
//               scale: {
//                 duration: 2,
//                 repeat: Infinity,
//                 repeatType: "reverse",
//                 delay: i * 0.1, // Stagger effect
//               },
//               opacity: { duration: 0.5 }
//             }}
//           />
//         ))}
//       </svg>
//     </div>
//   );
// };

// // --- 2. ANIMATION HELPERS ---
// const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ duration: 0.6, delay }}
//     className={className}
//   >
//     {children}
//   </motion.div>
// );

// // --- 3. MAIN PAGE ---
// export default function CareerPage() {
//   return (
//     <div className="min-h-screen bg-white text-black font-sans selection:bg-pink-100 selection:text-pink-900">
      
//       {/* --- HERO SECTION --- */}
//       <section className="max-w-5xl py-10 mx-auto px-6 ">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
//           {/* LEFT: Typography */}
//           <div className="w-full md:w-1/2">
//             <FadeIn>
//               <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-[1.1]">
//                 Want To Join <br />
//                 <span className="text-gray-400">The Team ?</span>
//               </h1>
//             </FadeIn>

//             <FadeIn delay={0.2}>
//               <p className="text-xl md:text-2xl text-gray-500 mt-2 font-medium">
//                 Be our next human <br /> experience designer
//               </p>
//             </FadeIn>

//             <FadeIn delay={0.4} className="pt-8">
//               <h2 className="text-3xl md:text-4xl font-bold text-black">
//                 Currently we don't <br /> have any openings.
//               </h2>
//             </FadeIn>
//           </div>

//           {/* RIGHT: Constellation Graphic */}
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             className="w-full md:w-1/2  flex justify-center md:justify-end"
//           >
//             {/* <ConstellationFace /> */}
//                <Lottie
//                                     animationData={team}
//                                     loop={true}
//                                     className="w-96 h-96" // Use Tailwind to control size
//                                 />
//           </motion.div>
//         </div>
//       </section>

//       {/* --- BOTTOM SECTION: "MORE ABOUT US" --- */}
//       <section className="bg-white py-20">
//         <div className="max-w-5xl mx-auto px-6">
//           <FadeIn className="text-center mb-12">
//             <h3 className="text-pink-500 font-bold tracking-widest text-sm uppercase">More About Us</h3>
//           </FadeIn>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
//             {/* CARD 1: About Us */}
//             <Link href="/about">
//               <FadeIn delay={0.1} className="h-full">
//                 <div className="bg-pink-50 p-10 rounded-2xl h-full flex flex-col justify-between group cursor-pointer hover:bg-pink-100 transition-colors duration-300">
//                   <div>
//                     <h3 className="text-3xl font-bold mb-4 text-black">About Us</h3>
//                     <p className="text-gray-600 text-sm">We are super-efficient yet humble to serve you!</p>
//                   </div>
//                   <div className="flex justify-end ">
//                     <ArrowRight className="text-black w-8 h-8 group-hover:translate-x-2 transition-transform duration-300" />
//                   </div>
//                 </div>
//               </FadeIn>
//             </Link>

//             {/* CARD 2: Team */}
//             <Link href="/team">
//               <FadeIn delay={0.2} className="h-full">
//                 <div className="bg-purple-50 p-10 rounded-2xl h-full flex flex-col justify-between group cursor-pointer hover:bg-purple-100 transition-colors duration-300">
//                   <div>
//                     <h3 className="text-3xl font-bold mb-4 text-black">Team</h3>
//                     <p className="text-gray-600 text-sm">We are proud of our experienced and accomplished team!</p>
//                   </div>
//                   <div className="flex justify-end ">
//                     <ArrowRight className="text-black w-8 h-8 group-hover:translate-x-2 transition-transform duration-300" />
//                   </div>
//                 </div>
//               </FadeIn>
//             </Link>

//           </div>
//         </div>
//       </section>
      
   

//     </div>
//   );
// }


import React from "react";

export default function CareersPage() {
  const roles = [
    { title: "Software Engineers", desc: "Build scalable web platforms, backend systems, and APIs." },
    { title: "Mobile App Developers", desc: "Create high-performance mobile applications for Android and iOS." },
    { title: "AI Engineers", desc: "Specialists working on AI systems, automation workflows, and intelligent solutions." },
    { title: "DevOps Engineers", desc: "Manage cloud infrastructure, deployment automation, and system scalability." },
    { title: "Product Designers", desc: "Design focused on creating intuitive and engaging digital product experiences." },
    { title: "Digital Marketing Specialists", desc: "Help digital products grow through data-driven marketing strategies." },
  ];

  const tools = [
    { category: "AI & Automation", items: ["GitHub Copilot", "OpenAI APIs", "Cursor", "CI/CD Pipelines"] },
    { category: "Modern Stack", items: ["Next.js", "React", "Node.js", "TypeScript"] },
    { category: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "Terraform"] },
    { category: "Collaboration", items: ["Linear", "Slack", "Figma", "Notion"] },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto text-center space-y-8 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-50 blur-[120px] rounded-full -z-10"></div>
        <h3 className="text-indigo-600 font-bold tracking-widest uppercase text-xs">Careers at Uptimise IT</h3>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto leading-tight">
          Building the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">AI-Native Engineering</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          At Uptimise IT, we are building a technology company focused on the future of digital product development. Join us to work alongside intelligent systems, modern infrastructure, and elite teams.
        </p>
      </section>

      {/* 2. Our Culture & What We Look For */}
      <section className="py-20 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Our Culture</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our culture is built around innovation, collaboration, and continuous learning. We encourage engineers, designers, and product thinkers to explore new ideas, experiment with emerging technologies, and improve the way digital products are built.
            </p>
            <ul className="space-y-3 pt-4">
              {[
                "Curiosity and continuous learning",
                "Strong engineering practices",
                "Collaborative problem solving",
                "Respect for creative ideas",
                "Commitment to building high-quality products"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-700 font-medium">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 mr-3"></span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">What We Look For</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We value individuals who are curious, motivated, and passionate about technology. Rather than focusing only on narrow technical specialization, we look for team members who are capable of understanding the broader product ecosystem.
            </p>
            <ul className="space-y-3 pt-4">
              {[
                "Strong problem-solving skills",
                "Interest in modern technology trends",
                "Willingness to learn and adapt",
                "Collaborative mindset",
                "Commitment to quality and innovation"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-700 font-medium">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Engineering Culture & Tools (The "Vercel/Linear" dark aesthetic) */}
      <section className="py-24 px-6 bg-[#0B0F19] text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
            <h3 className="text-blue-400 font-semibold tracking-widest uppercase text-sm">The Developer Experience</h3>
            <h2 className="text-4xl font-bold tracking-tight text-white">AI-Augmented Engineering Stack</h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              The future of engineering is evolving. At Uptimise IT, we empower our teams with modern tools that enhance productivity, allowing engineers to focus on complex technical challenges while intelligent systems assist with repetitive tasks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((block, idx) => (
              <div key={idx} className="bg-[#111827] border border-slate-800 rounded-2xl p-6 hover:border-slate-600 transition-colors">
                <h4 className="text-slate-300 font-medium mb-4 pb-4 border-b border-slate-800">{block.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {block.items.map((tool, i) => (
                    <span key={i} className="px-3 py-1.5 bg-[#1F2937] text-slate-300 text-sm rounded-md border border-slate-700">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Roles We Hire For */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">Roles We Hire For</h2>
          <p className="text-lg text-slate-600">As Uptimise IT grows, we regularly look for talented individuals across different areas of expertise to join our remote-friendly, modern teams.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role, idx) => (
            <div key={idx} className="group p-8 rounded-2xl border border-slate-200 bg-white hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-100 transition-all cursor-pointer flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{role.title}</h3>
                <p className="text-slate-600 mt-3 leading-relaxed">{role.desc}</p>
              </div>
              <div className="pt-4 flex items-center text-indigo-600 font-medium text-sm">
                Learn more 
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Learning & Growth */}
      <section className="py-20 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Continuous Learning & Growth</h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Technology evolves rapidly, and we believe continuous learning is essential. At Uptimise IT, team members are encouraged to explore new technologies, improve their skills, and experiment with innovative solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            {["Exposure to modern stacks", "Diverse digital platforms", "Collaborate with experts", "Explore AI & automation"].map((perk, i) => (
              <span key={i} className="px-5 py-2.5 bg-white border border-slate-200 shadow-sm rounded-full text-slate-700 font-medium text-sm">
                ✦ {perk}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA / Join Our Team */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Join Our Team</h2>
        <p className="text-xl text-slate-600 leading-relaxed">
          If you are interested in building digital products, exploring new technologies, and contributing to innovative engineering workflows, we would love to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <button className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all text-lg">
            View Open Positions
          </button>
          <button className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg">
            Contact Our Team
          </button>
        </div>
      </section>

    </div>
  );
}