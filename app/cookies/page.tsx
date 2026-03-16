import React from "react";
import Link from "next/link";

export default function CookiesPolicy() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100">
      
      {/* 1. Simple, Clean Header */}
      <header className="bg-slate-50 border-b border-slate-100 py-24 px-6">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Cookies Policy
          </h1>
          <p className="text-slate-500 font-medium tracking-wide">
            Last Updated: March 2026
          </p>
        </div>
      </header>

      {/* 2. Document Content */}
      <main className="py-16 px-6">
        <article className="max-w-3xl mx-auto">
          
          <div className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed">
            <p>
              This Cookies Policy explains how Uptimise IT uses cookies and similar tracking technologies when visitors interact with our website.
            </p>
            <p>
              By continuing to use our website, you agree to the use of cookies as described in this policy.
            </p>

            <hr className="my-10 border-slate-100" />

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">What Are Cookies</h2>
            <p>
              Cookies are small text files that are stored on a user’s device when they visit a website. These files help websites recognize users, remember preferences, and improve the overall browsing experience.
            </p>
            <p className="mt-4 font-medium text-slate-800">Cookies may collect information such as:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Browser type</li>
              <li>Device information</li>
              <li>Pages visited</li>
              <li>Time spent on the website</li>
              <li>User preferences</li>
            </ul>
            <p className="mt-4 italic text-sm text-slate-500">
              *Cookies do not typically contain personally identifiable information.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">How Uptimise IT Uses Cookies</h2>
            <p>
              Uptimise IT uses cookies to improve website performance, analyze visitor behavior, and enhance user experience.
            </p>
            <p className="mt-4 font-medium text-slate-800">Cookies may be used for purposes including:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Analyzing website traffic</li>
              <li>Remembering user preferences</li>
              <li>Improving website performance</li>
              <li>Supporting marketing and analytics tools</li>
            </ul>
            <p className="mt-4">
              These insights help us understand how visitors interact with our website and allow us to improve our services and content.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Essential Cookies</h3>
            <p>
              Essential cookies are necessary for the basic functionality of the website. These cookies enable features such as page navigation, form submissions, and secure access to certain areas of the website. Without these cookies, the website may not function properly.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Analytics Cookies</h3>
            <p>
              Analytics cookies help us understand how visitors interact with our website.
            </p>
            <p className="mt-4 font-medium text-slate-800">These cookies collect information such as:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Pages visited</li>
              <li>Time spent on pages</li>
              <li>User navigation patterns</li>
            </ul>
            <p className="mt-4">
              We may use analytics tools such as Google Analytics to help analyze website performance. The information collected is used only for improving website functionality and user experience.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Marketing Cookies</h3>
            <p>
              Marketing cookies help track visitor interactions with the website for marketing and advertising purposes.
            </p>
            <p className="mt-4 font-medium text-slate-800">These cookies may be used by platforms such as:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Google Ads</li>
              <li>Meta / Facebook advertising</li>
            </ul>
            <p className="mt-4">
              They help display relevant advertisements to users based on their browsing behavior.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Managing Cookies</h2>
            <p>
              Users have the ability to control or disable cookies through their browser settings.
            </p>
            <p className="mt-4 font-medium text-slate-800">Most web browsers allow users to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>View stored cookies</li>
              <li>Delete cookies</li>
              <li>Block cookies from certain websites</li>
              <li>Block all cookies</li>
            </ul>
            <p className="mt-4 text-slate-500">
              Please note that disabling cookies may affect certain features of the website.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Third-Party Cookies</h2>
            <p>
              Some cookies used on our website may be placed by third-party services that we use for analytics, marketing, or functionality.
            </p>
            <p className="mt-4 font-medium text-slate-800">These services may include tools such as:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Analytics platforms</li>
              <li>Advertising networks</li>
              <li>Marketing automation systems</li>
            </ul>
            <p className="mt-4">
              Each third-party service may have its own cookies and privacy policies. Users are encouraged to review the privacy policies of these services.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Updates to This Policy</h2>
            <p>
              Uptimise IT may update this Cookies Policy from time to time to reflect changes in website functionality, legal requirements, or technology practices. Any updates will be posted on this page along with the updated date.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Contact</h2>
            <p>
              If you have any questions about this Cookies Policy or how cookies are used on our website, you can contact us through the <Link href="/contact" className="text-indigo-600 hover:text-indigo-800 font-medium underline underline-offset-4">contact page</Link> on our website.
            </p>
            
          </div>
        </article>
      </main>

    </div>
  );
}