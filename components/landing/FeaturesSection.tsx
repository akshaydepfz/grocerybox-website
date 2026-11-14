import type { ComponentType, ReactNode } from "react";
import {
  CreditCard,
  MessageSquare,
  Package,
  Palette,
  ShoppingCart,
  Truck,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading title="Everything Your Grocery Business Needs." />
        </ScrollReveal>

        <div className="grid auto-rows-[minmax(140px,auto)] grid-cols-1 gap-4 md:grid-cols-12">
          <ScrollReveal className="md:col-span-7 md:row-span-2" delay={50}>
            <FeatureCard
              icon={Palette}
              title="Online Store Builder"
              className="h-full min-h-[280px]"
            >
              <div className="mt-4 rounded-xl border border-forest/10 bg-soft-bg p-4">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-8 w-8 rounded-lg bg-primary" />
                    <div>
                      <p className="font-semibold text-forest">GreenBasket</p>
                      <p className="text-xs text-forest/50">
                        greenbasket.grocerybox.in
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-lime px-2 py-0.5 text-xs font-bold text-forest">
                    Live
                  </span>
                </div>
                <div className="h-24 rounded-lg bg-gradient-to-r from-primary/20 to-lime/30" />
              </div>
            </FeatureCard>
          </ScrollReveal>

          <ScrollReveal className="md:col-span-5" delay={100}>
            <FeatureCard icon={Package} title="Product Management">
              <div className="mt-3 grid grid-cols-3 gap-2">
                {["Tomato", "Rice", "Milk"].map((p, i) => (
                  <div
                    key={p}
                    className="rounded-lg border border-forest/10 bg-white p-2"
                  >
                    <div className="mb-1 aspect-square rounded bg-gradient-to-br from-orange-100 to-amber-100" />
                    <p className="text-xs font-medium">{p}</p>
                    <p className="text-[10px] text-primary">In stock</p>
                    <p className="text-xs font-bold">₹{40 + i * 12}</p>
                  </div>
                ))}
              </div>
            </FeatureCard>
          </ScrollReveal>

          <ScrollReveal className="md:col-span-5" delay={150}>
            <FeatureCard icon={ShoppingCart} title="Order Management">
              <ul className="mt-3 space-y-2 text-xs">
                <OrderRow id="#1842" status="New" />
                <OrderRow id="#1841" status="Processing" />
                <OrderRow id="#1840" status="Delivered" />
              </ul>
            </FeatureCard>
          </ScrollReveal>

          <ScrollReveal className="md:col-span-4" delay={200}>
            <FeatureCard icon={MessageSquare} title="WhatsApp Ordering">
              <div className="mt-3 rounded-xl bg-[#e7f7ef] p-3 text-xs text-forest">
                <p className="font-medium text-primary">Order summary</p>
                <p className="mt-1">2× Banana, 1× Milk</p>
                <p className="font-bold">Total: ₹160</p>
              </div>
            </FeatureCard>
          </ScrollReveal>

          <ScrollReveal className="md:col-span-4" delay={250}>
            <FeatureCard icon={CreditCard} title="Payment Options">
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge>UPI</Badge>
                <Badge>Cash on Delivery</Badge>
              </div>
            </FeatureCard>
          </ScrollReveal>

          <ScrollReveal className="md:col-span-4" delay={300}>
            <FeatureCard icon={Truck} title="Delivery Settings">
              <ul className="mt-3 space-y-1.5 text-xs text-forest/80">
                <li>Radius: 5 km</li>
                <li>Delivery charge: ₹30</li>
                <li>Free above: ₹499</li>
              </ul>
            </FeatureCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  children,
  className = "",
}: {
  icon: ComponentType<{ className?: string }>;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <article
      className={`rounded-2xl border border-forest/8 bg-white p-6 shadow-sm ${className}`}
    >
      <div className="flex items-center gap-2">
        <Icon className="h-5 w-5 text-primary" />
        <h3 className="font-bold text-forest">{title}</h3>
      </div>
      {children}
    </article>
  );
}

function OrderRow({ id, status }: { id: string; status: string }) {
  const colors: Record<string, string> = {
    New: "bg-lime text-forest",
    Processing: "bg-amber-200 text-forest",
    Delivered: "bg-primary text-white",
  };
  return (
    <li className="flex items-center justify-between rounded-lg bg-soft-bg px-3 py-2">
      <span>{id}</span>
      <span className={`rounded-full px-2 py-0.5 font-medium ${colors[status]}`}>
        {status}
      </span>
    </li>
  );
}

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-lg border border-primary/20 bg-primary/5 px-3 py-1.5 font-medium text-primary">
      {children}
    </span>
  );
}
