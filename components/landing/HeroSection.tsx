import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { FloatingWidgets } from "@/components/landing/FloatingWidgets";
import { LaptopMockup } from "@/components/mockups/LaptopMockup";
import { PhoneMockup } from "@/components/mockups/PhoneMockup";
import { PhoneScreenImage } from "@/components/mockups/PhoneScreenImage";
import { MerchantDashboardScreen } from "@/components/mockups/MerchantDashboardScreen";
import { WatchTutorialButton } from "@/components/landing/WatchTutorialButton";
import { appUrl } from "@/lib/brand";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="hero-grid relative min-h-screen overflow-x-hidden bg-forest pb-8 pt-24 md:pb-16"
    >
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <Navbar />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center md:px-6">
        <p className="mb-5 inline-block rounded-full border border-lime/30 bg-lime/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-lime">
          Your Business, Online
        </p>
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
          Create Your Grocery Website in Just{" "}
          <span className="text-lime">2 Minutes!</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-secondary-text md:text-lg">
          Launch your own branded online grocery store, manage products and
          receive customer orders — all from one powerful platform.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={appUrl}
            className="inline-flex items-center gap-2 rounded-full bg-lime px-7 py-3.5 text-sm font-bold text-forest transition hover:bg-light-lime"
          >
            Create Your Store
            <ArrowRight className="h-4 w-4" />
          </Link>
          <WatchTutorialButton />
        </div>
        <p className="mt-6 text-xs text-secondary-text md:text-sm">
          No Coding Required · Quick Setup · Built for Local Businesses
        </p>
      </div>

      <div className="relative z-10 mx-auto mt-10 max-w-6xl px-4 md:mt-14 md:px-6">
        <FloatingWidgets />
        <div className="relative">
          <LaptopMockup className="relative z-10" />
          <div className="relative z-30 -mt-4 flex items-end justify-between gap-2 px-0 sm:px-2 md:-mt-16 md:px-8">
            <PhoneMockup className="-rotate-6">
              <PhoneScreenImage
                src="/IMG_8236.PNG"
                alt="GreenBasket mobile storefront"
                priority
              />
            </PhoneMockup>
            <PhoneMockup className="rotate-6">
              <MerchantDashboardScreen compact />
            </PhoneMockup>
          </div>
        </div>
      </div>
    </section>
  );
}