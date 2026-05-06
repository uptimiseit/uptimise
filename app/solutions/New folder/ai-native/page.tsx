import React from "react";

export default function AINativeAdvantage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
      
      {/* 1. Hero Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center space-y-6">
        <h3 className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
          The Future of Software Development
        </h3>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto leading-tight">
          Why AI-Native Engineering Beats Traditional Development
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          A faster and smarter way to build digital products. Software development is evolving rapidly as artificial intelligence becomes deeply integrated into engineering workflows.
        </p>
      </section>

      {/* 2. The Context & Problem */}
      <section className="py-16 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              The Limitations of Traditional Development
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Traditional development models were designed in an era where most tasks were performed manually by large engineering teams. A typical workflow involves sequential tasks: business analysts, design teams, frontend/backend developers, QA, and DevOps passing work down the line.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              While this model has delivered successful systems, it often introduces challenges that make it difficult for companies to launch quickly and adapt to changing markets.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h4 className="text-lg font-semibold text-slate-900 mb-4 border-b border-slate-100 pb-2">Common Issues Include:</h4>
            <ul className="space-y-4">
              {[
                "Long development timelines",
                "Communication delays between teams",
                "Repetitive manual workflows",
                "Complex project coordination",
                "Higher operational costs"
              ].map((item, i) => (
                <li key={i} className="flex items-start text-slate-700">
                  <svg className="w-5 h-5 text-red-500 mr-3 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. The AI-Native Solution */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">The AI-Native Engineering Model</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            AI-native engineering introduces intelligent systems into the development workflow. Instead of replacing engineers, artificial intelligence assists with repetitive tasks and workflow automation, allowing our elite teams to focus on complex technical problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100 space-y-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900">Faster Product Development</h3>
            <p className="text-slate-600 leading-relaxed">AI systems assist with time-consuming tasks, accelerating planning, testing, and deployment. This results in faster launches, shorter cycles, and quicker iterations.</p>
          </div>
          
          <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100 space-y-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900">Maintaining Engineering Quality</h3>
            <p className="text-slate-600 leading-relaxed">Experienced engineers remain responsible for all architecture. We maintain strict modular code structures, automated testing, and structured code reviews.</p>
          </div>

          <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100 space-y-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900">Building Products That Scale</h3>
            <p className="text-slate-600 leading-relaxed">We design platforms for long-term growth utilizing cloud-native infrastructure, scalable database architecture, and automated deployment pipelines.</p>
          </div>
        </div>
      </section>

      {/* 4. Side-by-Side Comparison */}
      <section className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">The Difference is in the Workflow</h2>
            <p className="text-slate-400 text-lg">Comparing Traditional vs. AI-Native Engineering</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Traditional Card */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-semibold mb-6 pb-4 border-b border-slate-700 text-slate-300">Traditional Development</h3>
              <ul className="space-y-4">
                {["Large engineering teams", "Manual development workflows", "Long coordination cycles", "Sequential task execution", "Higher operational costs"].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-500 mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* AI-Native Card */}
            <div className="bg-blue-600 rounded-2xl p-8 border border-blue-500 shadow-xl shadow-blue-900/20">
              <h3 className="text-2xl font-semibold mb-6 pb-4 border-b border-blue-400/30 text-white">AI-Native Engineering</h3>
              <ul className="space-y-4">
                {["Smaller elite engineering teams", "AI-assisted development workflows", "Faster iteration cycles", "Automation-driven processes", "Optimized development costs"].map((item, i) => (
                  <li key={i} className="flex items-center text-blue-50">
                    <svg className="w-5 h-5 text-blue-200 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. How We Use AI (List) */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">How Uptimise IT Uses AI</h2>
            <p className="text-lg text-slate-600">
              By combining intelligent automation with experienced engineering teams, we handle the heavy lifting of development so you can focus on business growth.
            </p>
          </div>
          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Documentation generation",
                "Development scaffolding",
                "Architecture analysis",
                "Automated testing prep",
                "Infrastructure automation",
                "Code review assistance"
              ].map((task, i) => (
                <div key={i} className="bg-slate-50 border border-slate-100 p-4 rounded-xl flex items-center font-medium text-slate-700">
                  <span className="text-blue-600 mr-3">✦</span>
                  {task}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className=" px-6 text-center max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Build with AI-Native Engineering</h2>
        <p className="text-xl text-slate-600 leading-relaxed">
          If you are planning to build a digital platform or scale an existing product, Uptimise IT can help you take advantage of modern AI-augmented development practices.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <button      aria-label="Uptimiseit"  className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg transition-all text-lg">
            Start Your Project
          </button>
          <button     aria-label="Uptimiseit" className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-lg">
            Book Strategy Call
          </button>
        </div>
      </section>

    </div>
  );
}