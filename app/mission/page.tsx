import React from "react";

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto text-center space-y-8">
        <h3 className="text-indigo-600 font-bold tracking-widest uppercase text-xs">Our Mission</h3>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight">
          Empowering Organizations to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Build and Scale</span> Digital Platforms
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          At Uptimise IT, our mission is to help organizations design, build, and scale modern digital products using intelligent engineering systems and modern technology infrastructure.
        </p>
      </section>

      {/* 2. Core Mission Statement */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center border-t border-slate-100">
        <p className="text-2xl font-medium text-slate-800 leading-relaxed">
          We aim to simplify the process of building digital platforms by combining AI-assisted engineering workflows, modern development technologies, and scalable cloud infrastructure. Our mission is centered around enabling businesses to innovate faster while maintaining strong engineering quality and long-term product scalability.
        </p>
      </section>

      {/* 3. The Gap & The Solution (Two-column layout) */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Making Technology More Accessible</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Building advanced technology platforms often requires significant engineering expertise, infrastructure knowledge, and development resources. Many organizations have strong product ideas but face challenges when translating those ideas into scalable digital systems.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Uptimise IT works to bridge this gap by providing the technical expertise and engineering systems required to transform ideas into reliable technology platforms. Our goal is to make it easier for companies to bring innovative digital products to life.
            </p>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Combining Human Expertise with Intelligent Automation</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Artificial intelligence is transforming how engineering teams operate. At Uptimise IT, we believe the most effective development teams are those that combine human expertise with intelligent automation systems.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              AI tools can assist with tasks such as documentation generation, development scaffolding, testing preparation, and infrastructure analysis. By integrating these tools into workflows, our teams can move faster while maintaining strong architectural and code quality standards.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Supporting the Entire Product Lifecycle (Grid) */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">Supporting the Entire Product Lifecycle</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Our mission extends beyond software development. Successful digital products require a combination of design, engineering, infrastructure management, and growth strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Product Design",
              desc: "Designing intuitive and user-focused digital experiences.",
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            },
            {
              title: "Software Development",
              desc: "Building scalable web platforms, mobile applications, SaaS products, and enterprise systems.",
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
            },
            {
              title: "DevOps & Cloud Infrastructure",
              desc: "Managing cloud environments and deployment systems to support reliable product operations.",
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
            },
            {
              title: "Digital Growth Systems",
              desc: "Helping digital platforms grow through data-driven marketing strategies and user acquisition systems.",
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
            }
          ].map((service, idx) => (
            <div key={idx} className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-50 transition-all flex items-start space-x-6">
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center shrink-0 text-indigo-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">{service.icon}</svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Core Values / Principles */}
      <section className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Building Technology That Scales</h3>
            <p className="text-slate-400 leading-relaxed">
              Our mission is not only to build functional software but also to create technology platforms that support long-term growth. Every system we develop is designed with scalability, performance, and maintainability in mind, ensuring your platform evolves as business requirements change.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Fostering Innovation</h3>
            <p className="text-slate-400 leading-relaxed">
              Technology innovation requires an environment where engineers can experiment, learn, and explore new ideas. We aim to build a culture where engineers, designers, and product thinkers collaborate to solve complex problems and develop modern digital solutions.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Partnering with Visionaries</h3>
            <p className="text-slate-400 leading-relaxed">
              Our mission is to work with forward-thinking organizations—startups launching innovative products, SaaS companies expanding their platforms, and enterprises modernizing their infrastructure. Together, we shape the future of digital innovation.
            </p>
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto space-y-8">
        <h3 className="text-indigo-600 font-bold tracking-widest uppercase text-xs">Moving Toward the Future</h3>
        <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Build the Future with Uptimise IT</h2>
        <p className="text-xl text-slate-600 leading-relaxed">
          If you are planning to launch a new digital product or expand an existing platform, Uptimise IT is ready to support your journey. Together we can build digital systems that combine innovation, reliability, and scalability.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <button className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all text-lg">
            Start Your Project
          </button>
          <button className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg">
            Book Strategy Call
          </button>
        </div>
      </section>

    </div>
  );
}