// app/solutions/[slug]/page.tsx
import BuildCapabilities from "@/app/components/Solution/BuildCapabilities";
import ChallengesSection from "@/app/components/Solution/ChallengesSection";
import CTASection from "@/app/components/Solution/CTASection";
import HeroSection from "@/app/components/Solution/HeroSection";
import ProcessSection from "@/app/components/Solution/ProcessSection";
import StartupEdge from "@/app/components/Solution/StartupEdge";
import SuccessBenefits from "@/app/components/Solution/SuccessBenefits";
import TechStackSection from "@/app/components/Solution/TechStackSection";
import { SolutionService } from "@/lib/solution.service";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function DynamicSolutionPage({ params }: Props) {
  // Next.js 15 requirement: await params
  const { slug } = await params;

  // Fetch data from the external Admin API
  const response = await SolutionService.getDetails(slug);

  // Validate response
  if (!response?.success || !response?.data) {
    return notFound();
  }

  const { content } = response.data;

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section: Badge, Heading, Accent, Description */}
      <HeroSection data={content.hero} />
      
      {/* 2. Tech Stack: Horizontal list of technologies */}
      {content.techStack && content.techStack.some((t: string) => t !== "") && (
        <TechStackSection data={content.techStack} />
      )}

      {/* 3. Challenges: The "Why Startups Fail" grid */}
      <ChallengesSection data={content.challenges} />

      {/* 4. Build Items: Capabilities grid (B2B SaaS, AI Wrappers, etc.) */}
      <BuildCapabilities data={content.buildItems} />

      {/* 5. Process: The 4-step Delivery Protocol */}
      <ProcessSection data={content.process} />

      {/* 6. Success Benefits: Investor-Ready, etc. */}
      {content.benefits && content.benefits.length > 0 && (
        <SuccessBenefits data={content.benefits} />
      )}

      {/* 7. Startup Edge: Co-founder approach features */}
      <StartupEdge data={content.edge} />

      {/* 8. Final CTA: Bottom conversion section */}
      <CTASection data={content.cta} />
    </main>
  );
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const response = await SolutionService.getDetails(slug);

  if (!response?.success || !response?.data) {
    return { title: "Solution Not Found | Uptimise IT" };
  }

  return {
    title: `${response.data.title} | Uptimise IT`,
    description: response.data.description,
    openGraph: {
      title: response.data.title,
      description: response.data.description,
      url: `https://uptimiseit.com/solutions/${slug}`,
      siteName: 'Uptimise IT',
      type: 'website',
    },
  };
}