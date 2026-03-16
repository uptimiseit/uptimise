import React from "react";
import Link from "next/link";

export default function WhyUptimisePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 pb-20">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto text-center space-y-8 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-50/80 blur-[100px] rounded-full -z-10"></div>
        <h3 className="text-indigo-600 font-bold tracking-widest uppercase text-xs">Why Uptimise IT</h3>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight">
          A Modern Engineering Partner for <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Digital Product Innovation</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Organizations today need technology partners that can design, build, and scale digital platforms efficiently. We combine AI-native workflows, modern infrastructure, and elite product teams to deliver reliable solutions.
        </p>
      </section>

      {/* 2. Core Philosophy Bento Grid */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Bento Item 1: AI-Native (Spans 2 columns on large screens) */}
          <div className="lg:col-span-2 bg-white p-8 md:p-10 rounded-3xl border border-slate-200 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-50 transition-all duration-300 group">
            <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">AI-Native Engineering Approach</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              The future of software development is heavily influenced by intelligent automation. We integrate AI-assisted workflows to accelerate documentation, scaffolding, testing, and infrastructure automation.
            </p>
            <p className="text-slate-600 leading-relaxed font-medium">
              AI tools assist our teams, but experienced engineers remain responsible for system architecture, performance optimization, and product quality.
            </p>
          </div>

          {/* Bento Item 2: Architecture First */}
          <div className="bg-[#0B0F19] text-white p-8 md:p-10 rounded-3xl border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 group">
            <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Architecture-First Development</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              Successful digital platforms require strong technical foundations designed before development begins.
            </p>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="flex items-center"><span className="text-indigo-500 mr-2">✦</span> System architecture planning</li>
              <li className="flex items-center"><span className="text-indigo-500 mr-2">✦</span> Technology stack evaluation</li>
              <li className="flex items-center"><span className="text-indigo-500 mr-2">✦</span> Database structure design</li>
              <li className="flex items-center"><span className="text-indigo-500 mr-2">✦</span> Infrastructure planning</li>
            </ul>
          </div>

          {/* Bento Item 3: End-to-End */}
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-50 transition-all duration-300 group">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">End-to-End Product Engineering</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Avoid relying on multiple isolated vendors. We bring capabilities together into a unified ecosystem supporting the entire lifecycle.
            </p>
            <ul className="space-y-3">
              {["Product Design", "Software Development", "DevOps & Cloud", "Digital Growth Systems"].map((item, i) => (
                <li key={i} className="flex items-center text-slate-700 font-medium bg-slate-50 px-4 py-2 rounded-lg border border-slate-100">
                  <svg className="w-4 h-4 text-indigo-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Bento Item 4: Transparent Process (Spans 2 columns) */}
          <div className="lg:col-span-2 bg-indigo-600 text-white p-8 md:p-10 rounded-3xl border border-indigo-500 shadow-xl shadow-indigo-900/10 relative overflow-hidden group">
            <div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">Transparent Development Process</h3>
              <p className="text-indigo-100 leading-relaxed mb-6 max-w-2xl">
                Clear communication and transparency are essential. Projects remain perfectly aligned with business goals and technical requirements at all times.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Structured development phases",
                  "Clear project milestones",
                  "Regular progress updates",
                  "Collaborative communication channels"
                ].map((item, i) => (
                  <div key={i} className="flex items-center text-white font-medium">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 shrink-0">
                      <span className="text-sm">0{i + 1}</span>
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Tech Stack & Infrastructure */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-200 mt-12 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Modern Technology Stack & Infrastructure</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We build digital platforms using modern development frameworks, scalable cloud infrastructure, and intelligent automation systems.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {["Next.js", "React", "Node.js", "Python", "Kotlin", "Flutter", "AWS", "Docker", "Kubernetes"].map((tech, i) => (
             <span key={i} className="px-6 py-3 bg-white border border-slate-200 shadow-sm rounded-xl text-slate-800 font-bold text-lg hover:border-indigo-400 hover:text-indigo-600 transition-colors cursor-default">
               {tech}
             </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-slate-100">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-900">Scalable Cloud Infrastructure</h3>
            <p className="text-slate-600 leading-relaxed">
              Digital platforms must handle increasing user demand seamlessly. Our DevOps teams design cloud-native infrastructure systems that support reliable deployments, including containerized environments, automated CI/CD pipelines, and active monitoring.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-900">Focus on Long-Term Product Growth</h3>
            <p className="text-slate-600 leading-relaxed">
              Building the platform is just step one. We support organizations throughout the product lifecycle by expanding and evolving their technology systems. You focus on innovation; we maintain the technology foundation.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Partnering / Clients Section */}
      <section className="py-24 px-6 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Partnering with Forward-Thinking Organizations</h2>
          <p className="text-xl text-slate-400 leading-relaxed">
            Uptimise IT works with organizations that are building the next generation of digital platforms. They rely on our technology to power their products and operations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Technology Startups", "SaaS Companies", "FinTech Platforms", "AI Product Companies", "Enterprise Digital Transformation"].map((client, i) => (
               <span key={i} className="px-5 py-2.5 bg-slate-800 border border-slate-700 rounded-full text-slate-300 font-medium">
                 {client}
               </span>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="mt-24 px-6 text-center max-w-4xl mx-auto space-y-8">
        <h3 className="text-indigo-600 font-bold tracking-widest uppercase text-xs">Building The Future</h3>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Start Your Project with Uptimise IT</h2>
        <p className="text-xl text-slate-600 leading-relaxed">
          If you’re planning to build a digital product or scale an existing technology platform, our teams are ready to deliver reliable digital solutions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Link href="/contact" className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all text-lg">
            Start Your Project
          </Link>
          <Link href="/contact" className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg">
            Book Strategy Call
          </Link>
        </div>
      </section>

    </div>
  );
}