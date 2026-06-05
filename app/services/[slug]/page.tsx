// // app/services/growth-engineering/page.tsx
// "use client";

// import React, { useState } from "react";
// import ServiceHero from "@/app/components/Services/Hero";
// import ServiceChallenges from "@/app/components/Services/Challenges";
// import ServicesCapabilitiesMatrix from "@/app/components/Services/Capabilities";
// import ServicesFramework from "@/app/components/Services/Framework";
// import ServicesSolutions from "@/app/components/Services/Solutions";
// import ServicesTechStackSection from "@/app/components/Services/TechStack";
// import ServiceWhyChoose from "@/app/components/Services/WhyUptimiste";
// import ServiceOutcomes from "@/app/components/Services/Outcomes";
// import FAQSection from "@/app/components/HomePage/FAQSection";
// import ServicesCta from "@/app/components/Services/Cta";
// // import GrowthEngineeringHero from "../Hero";

// export default function ServicesPage() {
//   const [activeFaq, setActiveFaq] = useState<number | null>(null);

//   return (
//     <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#10B981]/10 selection:text-[#10B981] overflow-x-hidden pt-20">
//       <ServiceHero />

//       {/* =========================================================================
//           ⬛ SECTION 2: GROWTH CHALLENGES (HIGH-CONTRAST DEEP DARK MODE CARDS)
//           ========================================================================= */}
//       <ServiceChallenges />

//       {/* =========================================================================
//           ⬜ SECTION 3: GROWTH ENGINEERING CAPABILITIES (PREMIUM LIGHT CHANNELS)
//           ========================================================================= */}
//       <ServicesCapabilitiesMatrix />
//       {/* =========================================================================
//           ⬛ SECTION 4: OUR GROWTH FRAMEWORK (STARK CHRONOLOGY ROADMAP)
//           ========================================================================= */}
//       <ServicesFramework />
//       {/* =========================================================================
//           ⬜ SECTION 5: SOLUTIONS WE DELIVER (PREMIUM LIGHT CORE PLATFORMS)
//           ========================================================================= */}
//       <ServicesSolutions />
//       {/* =========================================================================
//           ⬛ SECTION 6: TOOLS & TECHNOLOGY (HIGH-CONTRAST MARTECH MATRIX)
//           ========================================================================= */}
//       <ServicesTechStackSection />

//       {/* =========================================================================
//           ⬜ SECTION 7 & 8: WHY UPTIMISE IT & INDUSTRIES (PREMIUM MIXED TEMPLATE OVERVIEW)
//           ========================================================================= */}
//       <ServiceWhyChoose />

//       {/* =========================================================================
//           ⬛ SECTION 9: RESULTS & BUSINESS IMPACT (STARK DEEP DARK OUTCOME TILES)
//           ========================================================================= */}

//       <ServiceOutcomes />

//       {/* =========================================================================
//           ⬛ SECTION 12: CONVERSION ENGINE HOOK (STARK DEEP DARK MODE)
//           ========================================================================= */}
//       <ServicesCta />

//       <FAQSection />
//     </div>
//   );
// }


// app/services/[slug]/page.tsx
import React from "react";
import { notFound } from "next/navigation";
// import { getServiceBySlug } from "@/lib/actions/service.actions";

// Inbound Component Registry Imports mapped clean and absolute
import ServiceHero from "@/app/components/Services/Hero";
import ServiceChallenges from "@/app/components/Services/Challenges";
import ServicesCapabilitiesMatrix from "@/app/components/Services/Capabilities";
import ServicesFramework from "@/app/components/Services/Framework";
import ServicesSolutions from "@/app/components/Services/Solutions";
import ServicesTechStackSection from "@/app/components/Services/TechStack";
import ServiceWhyChoose from "@/app/components/Services/WhyUptimiste";
import ServiceOutcomes from "@/app/components/Services/Outcomes";
import ServicesCta from "@/app/components/Services/Cta";
import FAQSection from "@/app/components/HomePage/FAQSection";
import { ServicesService } from "@/lib/services.service";

interface Props {
  params: Promise<{ slug: string }>;
}

/**
 * Dynamically generates SEO metadata parameters for crawler bots
 * by pulling structural tag records straight from the live database entry.
 */
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const { success, data } = await ServicesService.getDetails(slug);

  if (!success || !data) return {};

  return {
    title: data.metaTitle || `${data.title} | Uptimise IT`,
    description: data.metaDescription,
    alternates: {
      canonical: `/services/${data.slug}`,
    },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      images: data.metaImage ? [{ url: data.metaImage }] : [],
      url: `/services/${data.slug}`,
    },
  };
}

export default async function DynamicServicePage({ params }: Props) {
  // 1. Await page router params for strict Next.js 15/16 runtime compatibility
  const { slug } = await params;

  // 2. Fetch the corresponding service record matrix from the PostgreSQL layer via Server Action
  const { success, data: serviceRecord } = await ServicesService.getDetails(slug);

  // 3. Gracefully break out into a 404 header response state if slug index yields no results
  if (!success || !serviceRecord) {
    return notFound();
  }

  // 4. Abstract our explicit JSONB block configuration types from the database schema field mapping
  const blockData = serviceRecord.content;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#10B981]/10 selection:text-[#10B981] overflow-x-hidden pt-20">
      
      {/* ⬜ SECTION 1: HERO CONTAINER (Feeds active funnel matrices and copy texts) */}
      <ServiceHero payload={blockData.hero} />

      {/* ⬛ SECTION 2: GROWTH CHALLENGES BENTO ROW PANEL */}
      <ServiceChallenges data={blockData.challenges} />

      {/* ⬜ SECTION 3: ENGINEERING CAPABILITIES MODULE COMPONENT */}
      <ServicesCapabilitiesMatrix payload={blockData.capabilities} />

      {/* ⬛ SECTION 4: FRAMEWORK LIFECYCLE SCALING LIFELINE CHRONOLOGY */}
      <ServicesFramework data={blockData.lifecycleFramework} />

      {/* ⬜ SECTION 5: CATEGORIZED APPLIED DISTRIBUTION SOLUTIONS STACKS */}
      <ServicesSolutions payload={blockData.deliveredSolutions} />

      {/* ⬛ SECTION 6: TOOLS & EXTENDED TECHNOLOGY ARCHITECTURE NETWORKS */}
      <ServicesTechStackSection payload={blockData.techStack} />

      {/* ⬜ SECTION 7 & 8: WHY TRUST OUR FACTORY MODEL & INTEGRATION VERTICALS */}
      <ServiceWhyChoose payload={blockData.differentiationMatrix} />

      {/* ⬛ SECTION 9: RESULTS AND QUANTIFIED VALUE PROPOSITION MONITOR OUTCOMES */}
      <ServiceOutcomes payload={blockData.measurableOutcomes} />

      {/* ⬛ SECTION 10: CONVERSION CONCENTRIC ACTION TRIPPERS ENDBLOCK CTA */}
      <ServicesCta payload={blockData.endCta} />

      {/* Global Context Frequently Asked Queries */}
      <FAQSection />
    </div>
  );
}