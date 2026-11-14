import { HeroSection } from "@/components/landing/HeroSection";
import { TrustSection } from "@/components/landing/TrustSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { DashboardShowcase } from "@/components/landing/DashboardShowcase";
import { StorefrontShowcase } from "@/components/landing/StorefrontShowcase";
import { BusinessTypesSection } from "@/components/landing/BusinessTypesSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { FinalCTASection } from "@/components/landing/FinalCTASection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustSection />
      <FeaturesSection />
      <HowItWorksSection />
      <DashboardShowcase />
      <StorefrontShowcase />
      <BusinessTypesSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
}