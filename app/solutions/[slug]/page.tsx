// app/solutions/[slug]/page.tsx
import FAQSection from "@/app/components/HomePage/FAQSection";
import ApproachSection from "@/app/components/Solution/ApproachSection";
import CapabilitiesSection from "@/app/components/Solution/CapabilitiesSection";
import ChallengesSection from "@/app/components/Solution/ChallengesSection";
import CTASection from "@/app/components/Solution/CTASection";
import DynamicHero from "@/app/components/Solution/DynamicHero";
import ProcessSection from "@/app/components/Solution/ProcessSection";
import ProtocolSection from "@/app/components/Solution/ProtocolSection";
import { SolutionService } from "@/lib/solution.service";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// 🟢 1. DYNAMIC NEXT.JS SEO METADATA ENGINE EXPORT
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  
  // Query backend data rows
  const response = await SolutionService.getDetails(slug);
  
  if (!response?.success || !response?.data) {
    return {
      title: "Solution Matrix Node | Uptimise IT",
    };
  }

  const solution = response.data;

  // Primary fallbacks matching your dropdown and metadata settings blocks
  const fallbackTitle = solution.title ? `${solution.title} | Uptimise IT` : "Enterprise Architectural Solution";
  const fallbackDesc = solution.description || "Explore advanced web layouts, decoupled architecture frameworks, and orchestrated AI agent ecosystems pipelines.";

  return {
    // Falls back to top-level backend row identifiers if explicit SEO parameters aren't filled out in the admin form yet
    title: solution.metaTitle || fallbackTitle,
    description: solution.metaDescription || fallbackDesc,
    keywords: Array.isArray(solution.metaTags) && solution.metaTags.length > 0 
      ? solution.metaTags 
      : ["AI-Native Engineering", "Next.js Systems", "Software Factory Delivery"],
    
    // OpenGraph Protocol parsing for messaging and social platform preview cards
    openGraph: {
      title: solution.metaTitle || fallbackTitle,
      description: solution.metaDescription || fallbackDesc,
      type: "article",
      images: [
        {
          url: solution.metaImage || "https://www.uptimiseit.com/logo.png",
          width: 1200,
          height: 630,
          alt: `${solution.title || "Solution Pipeline"} Matrix Preview Card`,
        },
      ],
    },
    // Twitter specific layout structures
    twitter: {
      card: "summary_large_image",
      title: solution.metaTitle || fallbackTitle,
      description: solution.metaDescription || fallbackDesc,
      images: [solution.metaImage || "https://www.uptimiseit.com/logo.png"],
    },
  };
}

// 🟢 2. CORE PAGE RENDER TIMELINE
export default async function DynamicSolutionPage({ params }: PageProps) {
  const { slug } = await params;

  const response = await SolutionService.getDetails(slug);

  if (!response?.success || !response?.data) {
    return notFound();
  }

  const { content } = response.data;

  if (!content || !content.hero) {
    return notFound();
  }

  const heroData = {
    badgeText: content.hero.badgeText || "Intelligent Operations",
    badgeIconName: content.hero.badgeIconName || "workflow",
    headingRegularTop: content.hero.headingRegularTop || "",
    headingGradient: content.hero.headingGradient || "",
    headingRegularBottom: content.hero.headingRegularBottom,
    gradientFromTo: content.hero.gradientFromTo || "from-cyan-600 to-violet-600",
    description: content.hero.description || "",
    primaryCta: content.hero.primaryCta || { text: "Get Started", href: "/contact", variant: "primary", icon: "none" },
    secondaryCta: content.hero.secondaryCta || { text: "Learn More", href: "#", variant: "outline", icon: "none" }
  };

  const approachSectionData = {
    smallHeading: content.approach?.smallHeading || "OUR_APPROACH",
    heading: content.approach?.heading || "The Lean, AI-Native MVP Methodology",
    description: content.approach?.description || "",
    features: content.approach?.features || [],
    approaches: content.approach?.approaches || []
  };

  const buildItemsData = {
    smallHeading: content.buildItems?.smallHeading || "PRODUCTION_CAPABILITIES",
    heading: content.buildItems?.heading || "What Platform We Build",
    description: content.buildItems?.description || "",
    items: content.buildItems?.items || []
  };

  const ctaSectionData = {
    heading: content.cta?.heading || "Technology, support, growth —",
    accentText: content.cta?.accentText || "all in one window",
    description: content.cta?.description || "",
    buttonText: content.cta?.buttonText || "Get a consultation",
    buttonHref: content.cta?.buttonHref || "/contact",
    glowColor: content.cta?.glowColor || "#10b981"
  };

  const protocolSectionData = {
    heading: content.process?.heading || "The Uptimise Production Protocol",
    accentText: content.process?.accentText || "", 
    description: content.process?.description || "We utilize proprietary AI agent workflows to automate boilerplate code and infrastructure.",
    buttonText: content.process?.buttonText || "Get a Consultation",
    buttonHref: process.env.NEXT_PUBLIC_SITE_URL ? `${process.env.NEXT_PUBLIC_SITE_URL}/contact` : "/contact",
    buttonColor: content.process?.buttonColor || "#466846",
    items: content.process?.items || []
  };

  const processCardsData = {
    smallHeading: content.processCardsSection?.smallHeading || "WORKFLOW_TIMELINE",
    heading: content.processCardsSection?.heading || "Our Step-by-Step Delivery Track",
    description: content.processCardsSection?.description || "",
    themeAccentColor: content.processCardsSection?.themeAccentColor || "#2563eb",
    steps: content.processCardsSection?.steps || []
  };

  return (
    <main className="min-h-screen bg-white isolation-isolate">
      {/* HERO SECTION */}
      <DynamicHero data={heroData} />

      {/* CHALLENGES SECTION */}
      <div className="bg-slate-50/50 border-t border-b border-slate-100">
        <ChallengesSection data={content.challenges || []} />
      </div>

      {/* APPROACH SECTION */}
      <ApproachSection data={approachSectionData} />

      {/* CAPABILITIES SECTION */}
      <CapabilitiesSection data={buildItemsData} />

      {/* CTA SECTION */}
      <CTASection data={ctaSectionData} />

      {/* CHRONOLOGICAL WORKFLOW SECTION */}
      <ProcessSection data={processCardsData} />

      {/* PROTOCOL PIPELINE AUTOMATION SECTION */}
      <ProtocolSection data={protocolSectionData} />

      <FAQSection />
    </main>
  );
}