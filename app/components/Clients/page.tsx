import React from "react";

export default function TestimonialsPage() {
  const testimonials = [
    {
      industry: "SaaS Platform Development",
      quote: "Uptimise IT helped us build a scalable SaaS platform that supports our growing user base. Their engineering team designed a strong architecture and maintained clear communication throughout the development process.",
      role: "Technology Startup Founder",
    },
    {
      industry: "Mobile Application Platform",
      quote: "Working with Uptimise IT was a smooth experience. Their team understood our requirements quickly and delivered a high-quality mobile application integrated with our backend systems.",
      role: "Product Manager, Digital Platform",
    },
    {
      industry: "AI Automation System",
      quote: "The Uptimise team demonstrated strong technical knowledge while building our automation platform. Their structured development approach helped us launch our product efficiently.",
      role: "Operations Director",
    },
    {
      industry: "Marketplace Platform",
      quote: "Our marketplace platform required complex integrations and scalable infrastructure. Uptimise IT provided the technical expertise needed to build a reliable system.",
      role: "E-commerce Platform Founder",
    },
    {
      industry: "Enterprise Software Development",
      quote: "Uptimise IT worked closely with our internal teams to develop an enterprise workflow system that streamlined our operations. Their engineers were highly collaborative and solution-oriented.",
      role: "Enterprise Technology Lead",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
      
      {/* 1. Hero Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center space-y-6">
        <h3 className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Client Testimonials</h3>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 max-w-3xl mx-auto">
          What Our Clients Say About Working with Uptimise IT
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          At Uptimise IT, we focus on building long-term partnerships with companies that rely on technology to power their products and operations. Our teams collaborate closely with startups, product companies, and enterprises to design, build, and scale digital platforms.
        </p>
      </section>

      {/* 2. Trust Indicators Banner */}
      <section className="border-y border-slate-100 bg-slate-50 py-10 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
            Trusted by startups and product teams across industries
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {["SaaS Platforms", "AI Products", "FinTech Systems", "E-commerce Platforms", "Enterprise Software"].map((item) => (
              <span key={item} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-700 font-medium text-sm shadow-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Testimonials Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Custom Quote Icon */}
                <svg className="w-8 h-8 text-blue-500/20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-slate-700 leading-relaxed text-lg">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100">
                <p className="font-semibold text-slate-900">{testimonial.role}</p>
                <p className="text-sm text-blue-600 font-medium mt-1">{testimonial.industry}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Value Propositions & Long-Term Partnerships */}
      <section className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Why Clients Choose Uptimise IT</h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              Clients partner with us because we focus on building reliable digital products while maintaining strong communication and collaboration throughout the project lifecycle.
            </p>
            <ul className="space-y-3 mt-6">
              {[
                "Modern technology expertise",
                "Scalable system architecture",
                "AI-assisted development workflows",
                "Transparent development processes",
                "Long-term product support"
              ].map((benefit, i) => (
                <li key={i} className="flex items-center text-slate-300">
                  <svg className="w-5 h-5 text-blue-400 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Building Long-Term Partnerships</h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              Many of our client relationships extend beyond a single project. Our goal is to help companies build technology platforms that continue evolving as their businesses grow. We often continue supporting organizations with:
            </p>
            <ul className="space-y-3 mt-6">
              {[
                "Ongoing product development",
                "Infrastructure optimization",
                "Feature expansion",
                "Digital growth strategies"
              ].map((service, i) => (
                <li key={i} className="flex items-center text-slate-300">
                  <svg className="w-5 h-5 text-blue-400 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  {service}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Start Your Project with Uptimise IT</h2>
        <p className="text-xl text-slate-600 leading-relaxed">
          If you are planning to build or scale a digital platform, our teams are ready to help. We combine AI-native engineering workflows, modern technology stacks, and scalable infrastructure systems to deliver reliable digital solutions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg transition-all text-lg">
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