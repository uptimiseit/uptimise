
"use client";

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

// --- 1. Data Structure ---
// You can easily add more categories or questions here.
const faqData = {
  "UI/UX Design Company": [
    {
      question: "What are your areas of focus as a leading UI/UX design company in India?",
      answer: "We specialize in user research, interaction design, usability testing, and digital product strategy. From mobile applications to enterprise platforms, our solutions combine human neuroscience, psychology, technology, and design thinking to develop intuitive, high-impact experiences."
    },
    {
      question: "What separates Uptimise IT from other top UI/UX design agencies?",
      answer: "Our unique approach blends data-driven insights with creative storytelling. We don't just design interfaces; we engineer user journeys that convert."
    },
    {
      question: "Does Uptimise IT have experience working with large corporate organisations?",
      answer: "Yes, we have extensive experience partnering with Fortune 500 companies to modernize their legacy systems and create scalable design systems."
    },
    {
      question: "Does Uptimise IT work with startups in UX/UI design?",
      answer: "Absolutely. We love the energy of startups and offer agile design packages specifically tailored to help MVPs launch and scale quickly."
    },
    {
      question: "Why should we onboard Uptimise IT? What’s special about you?",
      answer: "We view ourselves as your product partners, not just a vendor. Our team integrates deeply with yours to ensure every pixel aligns with your business goals."
    }
  ],
  "UI/UX Design Process": [
    {
      question: "What is your typical design timeline?",
      answer: "Timelines vary by project, but a standard sprint runs 2-4 weeks."
    }
  ],
  "UI/UX Design Service": [
     {
      question: "Do you offer branding services?",
      answer: "Yes, we provide full-spectrum branding from logo design to brand guidelines."
    }
  ],
  "UX/UI Design — Web & Mobile": [
     {
      question: "Do you design for both iOS and Android?",
      answer: "Yes, we follow Human Interface Guidelines and Material Design principles for native apps."
    }
  ]
};

type Category = keyof typeof faqData;

const FaqSection = () => {
  // State for the active tab
  const [activeTab, setActiveTab] = useState<Category>("UI/UX Design Company");
  
  // State for the currently open question (null means all closed)
  const [openIndex, setOpenIndex] = useState<number | null>(0); // 0 opens the first item by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full  py-20 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* --- 1. Heading & Dots --- */}
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-5xl font-bold ">Faq's</h2>
          <div className="flex gap-2 mt-2">
            <span className="w-4 h-4 rounded-full bg-[#FF5E5E]"></span> {/* Red Dot */}
            <span className="w-4 h-4 rounded-full bg-[#5C6BFF]"></span> {/* Blue Dot */}
            <span className="w-4 h-4 rounded-full bg-[#A855F7]"></span> {/* Purple Dot */}
          </div>
        </div>

        {/* --- 2. Category Tabs (Scrollable on mobile) --- */}
        <div className="flex overflow-x-auto pb-4 gap-2 mb-12 scrollbar-hide">
          {Object.keys(faqData).map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveTab(category as Category);
                setOpenIndex(null); // Close questions when switching tabs
              }}
              className={`
                whitespace-nowrap px-8 py-4 rounded-full text-sm font-semibold transition-all duration-200
                ${activeTab === category 
                  ? 'bg-[#5C6BFF] text-white shadow-md' 
                  : 'bg-[#F3F4F6] text-gray-600 hover:bg-gray-200'}
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* --- 3. Accordion List --- */}
        <div className="space-y-0">
          {faqData[activeTab].map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="border-b border-gray-200">
                <button 
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-start gap-6 py-6 text-left group"
                >
                  {/* Icon Wrapper */}
                  <span className="mt-1 shrink-0 transition-colors">
                    {isOpen ? <Minus size={24} strokeWidth={1.5} /> : <Plus size={24} strokeWidth={1.5} />}
                  </span>
                  
                  <div className="flex-1">
                    {/* Question */}
                    <h3 className="text-lg  font-bold  mb-2">
                      {item.question}
                    </h3>

                    {/* Answer (Animated Height) */}
                    <div 
                      className={`
                        overflow-hidden transition-all duration-300 ease-in-out
                        ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}
                      `}
                    >
                      <p className="text-sm leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FaqSection;