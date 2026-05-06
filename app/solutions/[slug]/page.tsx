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

export default async function DynamicSolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const response = await SolutionService.getDetails(slug);

  if (!response?.success || !response?.data) return notFound();

  const { content } = response.data;

  return (
    <main className="min-h-screen bg-white">
      {/* 1. HERO - Clean White */}
      {/* <HeroSection data={content.hero} />
       */}
       <HeroSection data={content.hero} slug={slug} />
      
      {/* 2. TECH STACK - Minimal Slate */}
      <TechStackSection data={content.techStack} />

      {/* 3. CHALLENGES - Contrast Slate-50 */}
      <div className="bg-slate-50">
        <ChallengesSection data={content.challenges} />
      </div>

      {/* 4. BUILD ITEMS - Pure White */}
      <BuildCapabilities data={content.buildItems} />

      {/* 5. PROCESS - High-End Dark Theme */}
      <div className="bg-[#020617] text-white">
        <ProcessSection data={content.process} isDark={true} />
      </div>

      {/* 6. BENEFITS - High-Contrast Blue/White */}
      <SuccessBenefits data={content.benefits} />

      {/* 7. STARTUP EDGE - Gradient/Branded Theme */}
      <StartupEdge data={content.edge} />

      {/* 8. CTA - Bold Dark/Blue Mix */}
      <CTASection data={content.cta} />
    </main>
  );
}