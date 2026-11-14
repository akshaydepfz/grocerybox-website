"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const faqs = [
  {
    q: "What is GroceryBox?",
    a: "GroceryBox is a SaaS platform that helps local grocery and retail businesses launch branded online stores, manage products, and receive orders.",
  },
  {
    q: "Do I need coding knowledge?",
    a: "No. You can set up your store, add products, and manage orders without writing any code.",
  },
  {
    q: "Can I create my own branded store?",
    a: "Yes. You can customize your storefront with your store name, branding, and dedicated store link.",
  },
  {
    q: "Can customers order through WhatsApp?",
    a: "Yes. WhatsApp ordering is available on Growth and Pro plans.",
  },
  {
    q: "Can I configure delivery charges?",
    a: "Yes. You can set delivery radius, charges, and free delivery thresholds from your dashboard.",
  },
  {
    q: "How do I share my store link?",
    a: "After setup, you receive a unique store URL you can share via WhatsApp, social media, or print materials.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-soft-bg py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeading title="Frequently Asked Questions" align="center" />
        </ScrollReveal>
        <div className="space-y-3">
          {faqs.map((item, i) => {
            const open = openIndex === i;
            return (
              <ScrollReveal key={item.q} delay={i * 40}>
                <div className="overflow-hidden rounded-xl border border-forest/10 bg-white">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                  >
                    <span className="font-semibold text-forest">{item.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-primary transition ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden px-5 text-sm leading-relaxed text-forest/70 transition-all ${
                      open ? "max-h-40 pb-4 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    {item.a}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}