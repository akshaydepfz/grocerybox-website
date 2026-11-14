import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Footer } from "@/components/layout/Footer";

export function FinalCTASection() {
  return (
    <>
      <section className="relative overflow-hidden bg-dark-green py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,241,105,0.12),transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl px-4 text-center md:px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white md:text-5xl">
              Your Customers Are Online. Is Your Store?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-secondary-text md:text-lg">
              Take your grocery business online and make shopping easier for
              your customers.
            </p>
            <Link
              href="#pricing"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime px-8 py-4 text-sm font-bold text-forest transition hover:bg-light-lime"
            >
              Create Your Store Now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
      <Footer />
    </>
  );
}