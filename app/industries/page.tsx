import React from "react";
import Link from "next/link";

export default function IndustryTemplate() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center space-y-8 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-50 blur-[100px] rounded-full -z-10"></div>
        <h3 className="text-indigo-600 font-bold tracking-widest uppercase text-xs">Industry Solutions</h3>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight">
          FinTech Software <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Development Solutions</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Building secure, scalable, and high-performance financial technology platforms. Uptimise IT helps FinTech companies design and build modern applications that support secure transactions, real-time data processing, and scalable services.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link href="/contact" className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl shadow-md hover:bg-indigo-700 transition-all text-lg">
            Start Your Project
          </Link>
          <Link href="/contact" className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg">
            Book Strategy Call
          </Link>
        </div>
      </section>

      {/* 2. Industry Challenges */}
      <section className="py-20 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Technology Challenges in FinTech</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Financial technology platforms face unique technical and regulatory challenges. Building reliable financial platforms requires strong engineering practices and scalable infrastructure design to maintain trust and compliance.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <ul className="space-y-4">
              {[
                "Secure financial transactions",
                "Complex regulatory requirements",
                "Real-time data processing",
                "Fraud prevention systems",
                "High system reliability & uptime"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center text-slate-700 font-medium text-lg">
                  <svg className="w-6 h-6 text-red-500 mr-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Our Solutions */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">Our FinTech Technology Solutions</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Uptimise IT helps FinTech companies build modern technology systems capable of supporting secure, high-volume financial operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Digital Banking Platforms", desc: "Systems that allow users to manage financial accounts, payments, and transactions securely through modern digital channels." },
            { title: "Payment Processing Systems", desc: "Highly secure payment ecosystems capable of handling real-time financial transactions and seamless payment gateway integrations." },
            { title: "Financial Data Platforms", desc: "Advanced systems designed to process, visualize, and analyze massive volumes of financial data for reporting and rapid decision-making." },
            { title: "AI-Driven Financial Tools", desc: "Intelligent systems that automate complex financial workflows, analyze transaction patterns, and detect anomalies in real-time." }
          ].map((solution, idx) => (
            <div key={idx} className="p-8 rounded-2xl border border-slate-200 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-50 transition-all group bg-white">
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">{solution.title}</h3>
              <p className="text-slate-600 leading-relaxed text-lg">{solution.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Technology Stack */}
      <section className="py-24 px-6 bg-[#0B0F19] text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto relative z-10 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-white">Modern Technology Stack</h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              To build reliable FinTech platforms, we use an elite, modern technology stack designed strictly for security, performance, and massive scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { category: "Frontend", items: ["Next.js", "React"] },
              { category: "Backend & Database", items: ["Node.js", "Python", "PostgreSQL", "Java"] },
              { category: "Infrastructure", items: ["AWS", "Docker", "Kubernetes"] },
              { category: "Security", items: ["Secure Auth Systems", "Encrypted Data", "Secure API Arch"] }
            ].map((stack, idx) => (
              <div key={idx} className="bg-[#111827] border border-slate-800 rounded-2xl p-8 hover:border-indigo-500/50 transition-colors">
                <h4 className="text-indigo-400 font-bold mb-6 tracking-wide">{stack.category}</h4>
                <ul className="space-y-3">
                  {stack.items.map((item, i) => (
                    <li key={i} className="flex items-center text-slate-300 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-3"></span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Development Process */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">Our Development Process</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Our product engineering process ensures that financial platforms are designed with scalability and security inherently built-in from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {[
            { step: "01", title: "Discovery", desc: "Understanding business goals & financial workflows." },
            { step: "02", title: "Architecture", desc: "Designing scalable, secure system architecture." },
            { step: "03", title: "Development", desc: "Building backend services, APIs, and UIs." },
            { step: "04", title: "Testing", desc: "Validating system reliability and performance." },
            { step: "05", title: "Deployment", desc: "Launching via scalable cloud infrastructure." }
          ].map((process, idx) => (
            <div key={idx} className="relative p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-indigo-50 hover:border-indigo-100 transition-colors group">
              <div className="text-4xl font-extrabold text-slate-200 mb-4 group-hover:text-indigo-200 transition-colors">{process.step}</div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">{process.title}</h4>
              <p className="text-sm text-slate-600">{process.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Why Choose Us */}
      <section className="py-24 px-6 bg-indigo-600 text-white text-center space-y-12">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-4xl font-bold tracking-tight">Why FinTech Companies Choose Uptimise IT</h2>
          <p className="text-xl text-indigo-100 leading-relaxed">
            Organizations partner with us because of our strong engineering practices and modern development workflows. This allows them to focus on business growth while we handle the technology foundation.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {[
            "AI-assisted engineering workflows",
            "Scalable system architecture",
            "Secure financial infrastructure",
            "Transparent development process",
            "Experienced engineering teams"
          ].map((benefit, idx) => (
             <span key={idx} className="px-6 py-3 bg-indigo-700/50 border border-indigo-500 rounded-full text-white font-medium shadow-sm">
               ✓ {benefit}
             </span>
          ))}
        </div>
      </section>

      {/* 7. CTA Section */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Build Your Platform with Uptimise IT</h2>
        <p className="text-xl text-slate-600 leading-relaxed">
          Our teams help technology companies design and build modern digital platforms capable of handling complex workflows.
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