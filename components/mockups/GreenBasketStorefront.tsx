import { Leaf, Search, ShoppingCart } from "lucide-react";

const products = [
  { name: "Bananas", price: "₹49", unit: "1 kg", hue: "from-amber-100 to-amber-200" },
  { name: "Tomatoes", price: "₹42", unit: "500 g", hue: "from-red-100 to-red-200" },
  { name: "Onions", price: "₹38", unit: "1 kg", hue: "from-orange-100 to-orange-200" },
  { name: "Milk", price: "₹62", unit: "1 L", hue: "from-sky-100 to-sky-200" },
];

const categories = ["Fresh", "Dairy", "Snacks", "Bakery"];

type GreenBasketStorefrontProps = {
  compact?: boolean;
};

export function GreenBasketStorefront({
  compact = false,
}: GreenBasketStorefrontProps) {
  return (
    <div
      className={`flex h-full flex-col bg-[#F6F8F3] text-forest ${
        compact ? "text-[8px]" : "text-[10px] md:text-xs"
      }`}
    >
      <header className="flex items-center justify-between gap-2 border-b border-forest/5 bg-white px-3 py-2">
        <div className="flex items-center gap-1.5">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-primary">
            <Leaf className="h-3 w-3 text-lime" />
          </span>
          <span className="font-bold text-primary">GreenBasket</span>
        </div>
        {!compact ? (
          <div className="hidden flex-1 items-center gap-1 rounded-full bg-soft-bg px-2 py-1 sm:flex">
            <Search className="h-3 w-3 text-forest/40" />
            <span className="text-forest/40">Search groceries...</span>
          </div>
        ) : null}
        <button
          type="button"
          className="relative flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-white"
        >
          <ShoppingCart className="h-3.5 w-3.5" />
          <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-lime text-[7px] font-bold text-forest">
            3
          </span>
        </button>
      </header>

      <nav className="flex gap-2 overflow-x-auto bg-white px-3 py-1.5">
        {categories.map((cat, i) => (
          <span
            key={cat}
            className={`shrink-0 rounded-full px-2 py-0.5 font-medium ${
              i === 0
                ? "bg-primary text-white"
                : "bg-soft-bg text-forest/70"
            }`}
          >
            {cat}
          </span>
        ))}
      </nav>

      <div className="flex-1 overflow-hidden p-2 md:p-3">
        <div
          className={`mb-2 rounded-xl bg-gradient-to-r from-primary to-dark-green px-3 text-white ${
            compact ? "py-2" : "py-3"
          }`}
        >
          <p className="font-semibold">Farm Fresh Daily</p>
          <p className="text-white/80">Local produce, delivered fast</p>
        </div>
        <div
          className={`grid gap-2 ${
            compact ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-4"
          }`}
        >
          {products.map((p) => (
            <article
              key={p.name}
              className="overflow-hidden rounded-lg border border-forest/5 bg-white shadow-sm"
            >
              <div
                className={`aspect-[4/3] bg-gradient-to-br ${p.hue}`}
              />
              <div className="p-1.5">
                <p className="font-semibold text-forest">{p.name}</p>
                <p className="text-forest/50">{p.unit}</p>
                <div className="mt-1 flex items-center justify-between gap-1">
                  <span className="font-bold text-primary">{p.price}</span>
                  <button
                    type="button"
                    className="rounded-md bg-lime px-1.5 py-0.5 text-[8px] font-bold text-forest"
                  >
                    Add
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}