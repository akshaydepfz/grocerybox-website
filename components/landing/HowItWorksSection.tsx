import { ArrowRight, Share2, UserPlus, Wand2 } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Create Your Account",
    description: "Sign up and set up your store profile in minutes.",
    preview: (
      <div className="rounded-xl bg-soft-bg p-4 text-sm">
        <p className="font-medium text-forest">Store name</p>
        <div className="mt-2 h-9 rounded-lg border border-forest/10 bg-white px-3 py-2 text-forest/50">
          GreenBasket
        </div>
        <button
          type="button"
          className="mt-3 w-full rounded-lg bg-primary py-2 text-white"
        >
          Continue
        </button>
      </div>
    ),
  },
  {
    icon: Wand2,
    step: "02",
    title: "Add Your Products and Customize Your Store",
    description: "Upload products, categories and match your brand look.",
    preview: (
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="rounded-lg border bg-white p-2">Logo upload</div>
        <div className="rounded-lg border bg-white p-2">Product grid</div>
        <div className="col-span-2 rounded-lg border bg-white p-2">
          Theme: Forest Green + Lime
        </div>
      </div>
    ),
  },
  {
    icon: Share2,
    step: "03",
    title: "Share Your Store and Receive Orders",
    description: "Share your link and start taking orders online.",
    preview: (
      <div className="rounded-xl border border-dashed border-primary/30 bg-primary/5 p-4 text-sm">
        <p className="font-mono text-primary">greenbasket.grocerybox.in</p>
        <p className="mt-2 flex items-center gap-1 text-forest/70">
          Share link <ArrowRight className="h-3 w-3" />
        </p>
      </div>
    ),
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-soft-bg py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading title="Get Your Online Store Ready in Three Simple Steps." />
        </ScrollReveal>
        <div className="grid gap-8 lg:grid-cols-3">
          {steps.map((s, i) => (
            <ScrollReveal key={s.step} delay={i * 80}>
              <article className="relative h-full rounded-2xl border border-forest/8 bg-white p-6">
                <span className="text-4xl font-bold text-lime/40">{s.step}</span>
                <div className="mt-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-lime">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-forest">{s.title}</h3>
                <p className="mt-2 text-sm text-forest/65">{s.description}</p>
                <div className="mt-6">{s.preview}</div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
