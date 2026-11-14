import {
  MessageCircle,
  Store,
  Truck,
  UtensilsCrossed,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const benefits = [
  {
    icon: Store,
    title: "Your Own Online Store",
    description: "A branded storefront with your logo, products and store link.",
  },
  {
    icon: UtensilsCrossed,
    title: "Easy Product Management",
    description: "Add items, set prices, manage stock and categories in minutes.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Ordering",
    description: "Let customers place orders through familiar messaging flows.",
  },
  {
    icon: Truck,
    title: "Delivery Management",
    description: "Configure delivery radius, charges and free delivery rules.",
  },
];

export function TrustSection() {
  return (
    <section className="bg-soft-bg py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => (
              <article
                key={item.title}
                className="group rounded-2xl border border-forest/5 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-lime/40 hover:shadow-[0_20px_50px_rgba(22,122,67,0.12)]"
              >
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-lime group-hover:text-forest">
                  <item.icon className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-bold text-forest">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-forest/65">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}