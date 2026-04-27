"use client";

import React, { useState } from "react";

export default function LegalHub() {
  const [activeTab, setActiveTab] = useState("privacy");

  return (
    // Added pt-28 to safely clear the global fixed header
    <div className="min-h-screen bg-white md:bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 flex flex-col md:flex-row pt-28">
      
      {/* Sidebar Navigation */}
      {/* Added top-28 so it sticks correctly below the header */}
      <aside className="w-full md:w-64 lg:w-80 bg-white md:bg-slate-50 border-r border-slate-200 shrink-0 p-6 md:sticky md:top-28 h-fit">
        <h2 className="text-xl font-bold text-slate-900 mb-6 tracking-tight">Legal Documents</h2>
        <nav className="flex flex-col space-y-2">
          <button 
              aria-label="Uptimiseit"
            onClick={() => setActiveTab("privacy")}
            className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              activeTab === "privacy" 
                ? "bg-indigo-50 text-indigo-700" 
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }`}
          >
            Privacy Policy
          </button>
          <button 
              aria-label="Uptimiseit"
            onClick={() => setActiveTab("terms")}
            className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              activeTab === "terms" 
                ? "bg-indigo-50 text-indigo-700" 
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }`}
          >
            Terms of Service
          </button>
          <button 
              aria-label="Uptimiseit"
            onClick={() => setActiveTab("cookies")}
            className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              activeTab === "cookies" 
                ? "bg-indigo-50 text-indigo-700" 
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }`}
          >
            Cookies Policy
          </button>
        </nav>

        <div className="mt-12 pt-6 border-t border-slate-200">
          <p className="text-sm text-slate-500 mb-4">Have legal questions?</p>
          <a href="/contact" className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors">
            Contact our team &rarr;
          </a>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 py-8 px-6 lg:px-16 max-w-4xl bg-white">
        
        {/* Privacy Policy Content */}
        {activeTab === "privacy" && (
          <article className="text-slate-600 text-lg leading-relaxed animate-in fade-in duration-300">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Privacy Policy</h1>
            <p className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-8">Last Updated: March 2026</p>
            
            <p className="mb-4">Uptimise IT values the privacy of visitors and clients who interact with our website and services. This Privacy Policy explains how we collect, use, and protect personal information when users visit our website or engage with our services.</p>
            <p className="mb-8">By using the Uptimise IT website, you agree to the collection and use of information in accordance with this policy.</p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Information We Collect</h2>
            <p className="mb-4">When visitors interact with our website, we may collect certain types of information.</p>
            
            <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Personal Information</h3>
            <p className="mb-3">Personal information may include:</p>
            {/* Explicitly defined list classes to fix missing bullets */}
            <ul className="list-disc pl-6 space-y-2 mb-6 text-slate-700">
              <li>Name</li>
              <li>Email address</li>
              <li>Company name</li>
              <li>Phone number</li>
              <li>Project details submitted through contact forms</li>
            </ul>
            <p className="mb-8">This information is typically provided voluntarily when users fill out forms or contact our team.</p>

            <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Usage Data</h3>
            <p className="mb-3">We may also collect non-personal information about how visitors use our website. This may include:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6 text-slate-700">
              <li>Browser type</li>
              <li>Device information</li>
              <li>Pages visited</li>
              <li>Time spent on the website</li>
              <li>Referring websites</li>
            </ul>
            <p className="mb-8">This data helps us improve the performance and usability of our website.</p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">How We Use Information</h2>
            <p className="mb-3">Information collected through the website may be used for purposes such as:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6 text-slate-700">
              <li>Responding to inquiries or project requests</li>
              <li>Communicating with potential clients</li>
              <li>Improving website performance and user experience</li>
              <li>Analyzing website traffic and engagement</li>
              <li>Sending relevant updates or content (if subscribed)</li>
            </ul>
            <p className="mb-8 font-medium text-slate-900">We do not sell or rent personal information to third parties.</p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Cookies and Tracking Technologies</h2>
            <p className="mb-3">Our website may use cookies and similar tracking technologies to enhance user experience. Cookies may be used for:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6 text-slate-700">
              <li>Remembering user preferences</li>
              <li>Analyzing website traffic</li>
              <li>Improving website functionality</li>
            </ul>
            <p className="mb-8">Users can adjust their browser settings to decline cookies if they prefer.</p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Third-Party Services</h2>
            <p className="mb-8">Our website may use third-party services for analytics, marketing, or communication tools. Examples may include analytics platforms, email communication services, and advertising platforms. These third-party services may collect information according to their own privacy policies.</p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Data Security</h2>
            <p className="mb-8">Uptimise IT takes reasonable measures to protect personal information from unauthorized access, misuse, or disclosure. While we strive to protect user information, no internet-based system can guarantee absolute security.</p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Links to External Websites</h2>
            <p className="mb-8">Our website may contain links to external websites. Uptimise IT is not responsible for the privacy practices or content of those external websites. Users should review the privacy policies of any third-party websites they visit.</p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Updates to This Policy</h2>
            <p className="mb-8">We may update this Privacy Policy from time to time to reflect changes in legal requirements or website practices. Any updates will be published on this page with the updated date.</p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Contact Information</h2>
            <p className="mb-8">If you have questions regarding this Privacy Policy, you may contact us through the <a href="/contact" className="text-indigo-600 hover:text-indigo-800 font-medium underline underline-offset-4">contact form</a> on our website.</p>
          </article>
        )}

        {/* Terms of Service Content */}
        {activeTab === "terms" && (
          <article className="text-slate-600 text-lg leading-relaxed animate-in fade-in duration-300">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Terms of Service</h1>
            <p className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-8">Last Updated: March 2026</p>
            
            <p className="mb-8">These Terms of Service govern the use of the Uptimise IT website and services. By accessing or using our website, you agree to comply with these terms.</p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Use of Website</h2>
            <p className="mb-3">The Uptimise IT website is intended to provide information about our services, technology capabilities, and insights related to digital product development. Users agree to use the website only for lawful purposes.</p>
            <p className="font-medium text-slate-800 mt-6 mb-3">Users must not:</p>
            <ul className="list-disc pl-6 space-y-2 mb-8 text-slate-700">
              <li>Attempt to gain unauthorized access to website systems</li>
              <li>Misuse website content or intellectual property</li>
              <li>Disrupt website functionality</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Intellectual Property</h2>
            <p className="mb-8">All content published on the Uptimise IT website, including text, graphics, logos, and design elements, is the property of Uptimise IT unless otherwise stated. Content may not be reproduced, copied, or distributed without permission.</p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Service Information</h2>
            <p className="mb-8">Information provided on the website regarding services, technologies, or capabilities is intended for informational purposes only. Specific project requirements and deliverables are defined through direct agreements between Uptimise IT and its clients.</p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Limitation of Liability</h2>
            <p className="mb-8">While Uptimise IT strives to maintain accurate and up-to-date information on this website, we do not guarantee that all content is free from errors. Uptimise IT is not liable for any damages arising from the use of the website or reliance on information provided on it.</p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">External Links</h2>
            <p className="mb-8">Our website may contain links to third-party websites for informational purposes. Uptimise IT does not control or take responsibility for the content or practices of external websites.</p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Changes to Terms</h2>
            <p className="mb-8">We may update these Terms of Service periodically to reflect changes in website policies or legal requirements. Users are encouraged to review this page periodically for updates.</p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Contact</h2>
            <p className="mb-8">For questions regarding these terms, users may contact Uptimise IT through the <a href="/contact" className="text-indigo-600 hover:text-indigo-800 font-medium underline underline-offset-4">contact page</a> of the website.</p>
          </article>
        )}

        {/* Cookies Policy Link */}
        {activeTab === "cookies" && (
          <article className="text-slate-600 text-lg leading-relaxed animate-in fade-in duration-300">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Cookies Policy</h1>
            <p className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-8">Last Updated: March 2026</p>
            <p className="mb-8">Our detailed Cookies Policy explains how we use tracking technologies to improve your experience on our website.</p>
            <a href="/cookies" className="inline-flex items-center px-6 py-3 bg-indigo-50 text-indigo-700 font-semibold rounded-xl hover:bg-indigo-100 transition-colors">
              Read Full Cookies Policy &rarr;
            </a>
          </article>
        )}

      </main>
    </div>
  );
}