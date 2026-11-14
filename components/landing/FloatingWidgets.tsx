import { Bell, CheckCircle2, Package, TrendingUp } from "lucide-react";

const widgets = [
  {
    icon: Bell,
    title: "New order",
    subtitle: "Order #1842 · ₹1,240",
    className: "left-[4%] top-[18%] hidden lg:block",
  },
  {
    icon: TrendingUp,
    title: "Today's sales",
    subtitle: "₹18,420 preview",
    className: "right-[6%] top-[22%] hidden lg:block",
  },
  {
    icon: Package,
    title: "Products listed",
    subtitle: "156 active SKUs",
    className: "left-[8%] bottom-[28%] hidden md:block",
  },
  {
    icon: CheckCircle2,
    title: "Order completed",
    subtitle: "#1840 delivered",
    className: "right-[4%] bottom-[32%] hidden md:block",
  },
];

export function FloatingWidgets() {
  return (
    <>
      {widgets.map((w) => (
        <div
          key={w.title}
          className={`glass-widget absolute z-20 max-w-[180px] animate-float ${w.className}`}
        >
          <w.icon className="mb-2 h-4 w-4 text-lime" />
          <p className="text-xs font-semibold text-white">{w.title}</p>
          <p className="text-[10px] text-secondary-text">{w.subtitle}</p>
        </div>
      ))}
    </>
  );
}