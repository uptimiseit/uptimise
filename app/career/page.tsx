'use client';

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import FAQSection from "../components/HomePage/FAQSection";
// import FAQSection from "../components/HomePage/FAQSection";

// --- Animation Variants ---
// const fadeInUp: Variants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     transition: { duration: 0.8, ease: "easeOut" } 
//   }
// };

// const staggerContainer: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15
//     }
//   }
// };

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
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100 overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative pt-40 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-50 blur-[120px] rounded-full -z-10"
        ></motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          // variants={staggerContainer}
          className="space-y-6"
        >
          <motion.h3  className="text-indigo-600 font-bold tracking-widest uppercase text-xs">
            Careers at Uptimise IT
          </motion.h3>
          <motion.h1  className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto leading-tight">
            Building the Future of <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-blue-500">
              AI-Native Engineering
            </span>
          </motion.h1>
          <motion.p  className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Join a technology company focused on the future of digital product development. Work alongside intelligent systems, modern infrastructure, and elite teams.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. Our Culture & What We Look For */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 underline decoration-indigo-200 underline-offset-8">Our Culture</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Built around innovation and continuous learning. We encourage our teams to improve the way digital products are built.
            </p>
            <ul className="grid grid-cols-1 gap-4 pt-4">
              {["Curiosity & Continuous learning", "Strong engineering practices", "Collaborative problem solving"].map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center text-slate-700 font-semibold"
                >
                  <span className="w-2 h-2 rounded-full bg-indigo-500 mr-3"></span> {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 underline decoration-blue-200 underline-offset-8">What We Look For</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              We value curiosity and a holistic understanding of the broader product ecosystem.
            </p>
            <ul className="grid grid-cols-1 gap-4 pt-4">
              {["Strong problem-solving", "Interest in modern trends", "Willingness to adapt"].map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center text-slate-700 font-semibold"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span> {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 3. Engineering Culture & Tools */}
      <section className="py-24 px-6 bg-[#0B0F19] text-white relative">
        {/* <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-size-[30px_30px] opacity-20 pointer-events-none" /> */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff15_1px,transparent_1px)] [background-size:24px_24px]" /> 

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            // variants={fadeInUp}
            className="text-center max-w-3xl mx-auto space-y-6 mb-16"
          >
            <h3 className="text-blue-400 font-semibold tracking-widest uppercase text-sm">The Developer Experience</h3>
            <h2 className="text-4xl font-bold tracking-tight">AI-Augmented Engineering Stack</h2>
            <p className="text-lg text-slate-400">Intelligent systems assist with repetitive tasks while you focus on complex challenges.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            // variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {tools.map((block, idx) => (
              <motion.div 
                key={idx} 
                // variants={fadeInUp}
                className="bg-[#111827] border border-slate-800 rounded-2xl p-6 hover:bg-[#161e2e] transition-colors"
              >
                <h4 className="text-slate-300 font-bold mb-4 pb-4 border-b border-slate-800 uppercase text-xs tracking-tighter">{block.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {block.items.map((tool, i) => (
                    <motion.span 
                      key={i} 
                      whileHover={{ scale: 1.05, backgroundColor: "#334155" }}
                      className="px-3 py-1.5 bg-[#1F2937] text-slate-300 text-[11px] font-mono rounded-md border border-slate-700 cursor-default"
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Roles We Hire For */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight text-slate-900"
          >
            Roles We Hire For
          </motion.h2>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          // variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {roles.map((role, idx) => (
            <motion.div 
              key={idx} 
              // variants={fadeInUp}
              whileHover="hover"
              // variants={hoverCard}
              className="p-8 rounded-3xl border border-slate-200 bg-white transition-all cursor-pointer flex flex-col justify-between space-y-6"
            >
              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600">
                  {role.title}
                </h3>
                <p className="text-slate-500 mt-3 leading-relaxed text-sm font-medium">{role.desc}</p>
              </div>
              <div className="pt-4 flex items-center text-indigo-600 font-bold text-xs uppercase tracking-widest">
                Learn more 
                <ArrowRight size={14} className="ml-2" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 5. Learning & Growth */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-24 relative px-6 bg-slate-900 border-y border-slate-100"

      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff15_1px,transparent_1px)] [background-size:24px_24px]" /> 

        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-black tracking-tight text-teal-500 uppercase">Continuous Growth</h2>
          <p className="text-lg text-slate-50 leading-relaxed max-w-3xl mx-auto font-medium">
            Team members are encouraged to explore new technologies and improve their skills constantly.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            {["Exposure to modern stacks", "Diverse digital platforms", "AI & Automation focus"].map((perk, i) => (
              <motion.span 
                key={i} 
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-6 py-3 bg-teal-500 border  shadow-sm rounded-2xl text-slate-50 font-bold text-xs uppercase tracking-tighter"
              >
                ✦ {perk}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 6. CTA / Join Our Team */}
      <section className="py-32 px-6 text-center max-w-4xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">
            Ready to <span className="text-indigo-600 italic">Code the Future?</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium">
            Join a partner focused on reliability, scalability, and modern engineering workflows.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-indigo-600 text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl shadow-lg shadow-indigo-100"
            >
              View Open Positions
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white border-2 border-slate-200 text-slate-900 font-black uppercase tracking-[0.2em] text-xs rounded-2xl"
            >
              Contact Our Team
            </motion.button>
          </div>
        </motion.div>
      </section>


<FAQSection />
    </div>
  );
}