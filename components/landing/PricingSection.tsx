import { Check } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { appUrl } from "@/lib/brand";

const plans = [
  {
    name: "Basic",
    price: "₹199",
    features: [
      "100 products",
      "Unlimited orders",
      "GroceryBox subdomain",
      "WhatsApp ordering",
      "UPI and COD options",
      "Online storefront",
      "Admin panel",
      "Mobile-friendly website",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "₹399",
    features: [
      "200 products",
      "Unlimited orders",
      "Custom domain",
      "Mobile storefront",
      "Admin panel",
      "Delivery-boy app/site",
      "Delivery management features",
    ],
    highlighted: true,
  },
  {
    name: "Pro",
    price: "₹599",
    features: [
      "Everything in Growth",
      "Unlimited products",
      "Advanced dashboard and reports",
      "Multiple delivery boys",
      "Coupons and promotional tools",
      "Priority support",
    ],
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading title="Simple Pricing. Start Growing Today." />
        </ScrollReveal>
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 80}>
              <article
                className={`relative flex h-full flex-col rounded-2xl border p-8 ${
                  plan.highlighted
                    ? "border-lime bg-forest text-white shadow-[0_0_60px_rgba(200,241,105,0.15)]"
                    : "border-forest/10 bg-white"
                }`}
              >
                {plan.highlighted ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-lime px-3 py-1 text-xs font-bold text-forest">
                    Popular
                  </span>
                ) : null}
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span
                    className={
                      plan.highlighted ? "text-secondary-text" : "text-forest/50"
                    }
                  >
                    /month
                  </span>
                </p>
                <ul className="mt-8 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm">
                      <Check
                        className={`h-4 w-4 shrink-0 ${
                          plan.highlighted ? "text-lime" : "text-primary"
                        }`}
                      />
                      <span
                        className={
                          plan.highlighted
                            ? "text-white/90"
                            : "text-forest/75"
                        }
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={appUrl}
                  className={`mt-8 block rounded-full py-3 text-center text-sm font-semibold transition ${
                    plan.highlighted
                      ? "bg-lime text-forest hover:bg-light-lime"
                      : "bg-primary text-white hover:bg-dark-green"
                  }`}
                >
                  Get Started
                </Link>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}