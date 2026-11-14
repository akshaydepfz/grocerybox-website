import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MerchantDashboardMockup } from "@/components/mockups/MerchantDashboardMockup";

export function DashboardShowcase() {
  return (
    <section className="relative overflow-hidden bg-forest py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,241,105,0.08),transparent_65%)]" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            dark
            title="Your Entire Business. One Powerful Dashboard."
            description="Track sales, orders, products and performance from a single merchant workspace."
          />
        </ScrollReveal>
        <ScrollReveal delay={120}>
          <MerchantDashboardMockup />
        </ScrollReveal>
      </div>
    </section>
  );
}