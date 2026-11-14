import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const businesses = [
  {
    title: "Grocery stores",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
  },
  {
    title: "Supermarkets",
    image:
      "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800&q=80",
  },
  {
    title: "Bakeries",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
  },
  {
    title: "Fruit & vegetable shops",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&q=80",
  },
  {
    title: "Local retail stores",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
  },
];

export function BusinessTypesSection() {
  return (
    <section className="bg-soft-bg py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading title="Made for Businesses Like Yours." />
        </ScrollReveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {businesses.map((b, i) => (
            <ScrollReveal key={b.title} delay={i * 60}>
              <article
                className={`group relative overflow-hidden rounded-2xl ${
                  i === 0 ? "sm:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <div
                  className={`relative ${i === 0 ? "min-h-[320px]" : "min-h-[200px]"}`}
                >
                  <Image
                    src={b.image}
                    alt={b.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/85 via-forest/25 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-lg font-bold text-white md:text-xl">
                    {b.title}
                  </h3>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
