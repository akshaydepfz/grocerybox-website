import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BrowserChrome } from "@/components/mockups/BrowserChrome";
import {
  DesktopScreenImage,
  desktopScreenshotAspect,
} from "@/components/mockups/DesktopScreenImage";
import { PhoneMockup } from "@/components/mockups/PhoneMockup";
import { PhoneScreenImage } from "@/components/mockups/PhoneScreenImage";

export function StorefrontShowcase() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Your Store. Your Brand. Your Customers."
            description="Give shoppers a beautiful, mobile-responsive experience across every device."
          />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-end lg:justify-center">
            <div className="w-full max-w-3xl overflow-hidden rounded-2xl border border-forest/10 shadow-xl">
              <BrowserChrome />
              <div
                className="w-full overflow-hidden bg-[#f6f8f3]"
                style={{ aspectRatio: desktopScreenshotAspect }}
              >
                <DesktopScreenImage />
              </div>
            </div>
            <PhoneMockup className="shrink-0 scale-90">
              <PhoneScreenImage
                src="/IMG_8236.PNG"
                alt="GreenBasket mobile storefront"
              />
            </PhoneMockup>
            <div className="hidden w-full max-w-md overflow-hidden rounded-xl border border-forest/10 shadow-lg lg:block">
              <BrowserChrome />
              <div
                className="w-full overflow-hidden bg-[#f6f8f3]"
                style={{ aspectRatio: desktopScreenshotAspect }}
              >
                <DesktopScreenImage />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}