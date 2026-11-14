import { BarChart3, Package, ShoppingBag, TrendingUp } from "lucide-react";

const orders = [
  { id: "#1842", status: "New", amount: "₹1,240" },
  { id: "#1841", status: "Processing", amount: "₹890" },
  { id: "#1840", status: "Delivered", amount: "₹2,150" },
];

type MerchantDashboardScreenProps = {
  compact?: boolean;
};

export function MerchantDashboardScreen({
  compact = false,
}: MerchantDashboardScreenProps) {
  return (
    <div
      className={`flex h-full flex-col bg-forest text-white ${
        compact ? "text-[7px]" : "text-[9px] md:text-[10px]"
      }`}
    >
      <header className="border-b border-white/10 px-3 py-2">
        <p className="font-semibold text-lime">GroceryBox Dashboard</p>
        <p className="text-secondary-text">GreenBasket · Today</p>
      </header>
      <div className="grid grid-cols-2 gap-2 p-2">
        <StatCard
          icon={<ShoppingBag className="h-3 w-3 text-lime" />}
          label="Today's Orders"
          value="24"
        />
        <StatCard
          icon={<TrendingUp className="h-3 w-3 text-lime" />}
          label="Revenue"
          value="₹18.4k"
        />
        <StatCard
          icon={<Package className="h-3 w-3 text-lime" />}
          label="Products"
          value="156"
        />
        <StatCard
          icon={<BarChart3 className="h-3 w-3 text-lime" />}
          label="Conversion"
          value="3.2%"
        />
      </div>
      <div className="mx-2 mb-2 rounded-lg border border-white/10 bg-dark-green/80 p-2">
        <p className="mb-1 text-secondary-text">Sales overview</p>
        <div className="flex h-12 items-end gap-1">
          {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-sm bg-lime/80"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
      <p className="mb-1 px-2 text-[8px] font-medium text-secondary-text">
        Best-selling
      </p>
      <div className="mb-2 flex gap-1 overflow-hidden px-2">
        {["Banana", "Milk", "Rice"].map((p) => (
          <div
            key={p}
            className="min-w-0 flex-1 rounded-md bg-white/5 px-1 py-1 text-center"
          >
            <p className="truncate font-medium">{p}</p>
          </div>
        ))}
      </div>
      <div className="flex-1 space-y-1 overflow-hidden px-2 pb-2">
        {orders.map((o) => (
          <div
            key={o.id}
            className="flex items-center justify-between rounded-lg bg-white/5 px-2 py-1.5"
          >
            <div>
              <p className="font-medium">{o.id}</p>
              <p className="text-secondary-text">{o.amount}</p>
            </div>
            <StatusBadge status={o.status} />
          </div>
        ))}
      </div>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-2">
      <div className="mb-1">{icon}</div>
      <p className="text-secondary-text">{label}</p>
      <p className="text-sm font-bold text-lime">{value}</p>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    New: "bg-lime text-forest",
    Processing: "bg-amber-400/90 text-forest",
    Delivered: "bg-primary text-white",
  };
  return (
    <span
      className={`rounded-full px-2 py-0.5 text-[7px] font-semibold ${styles[status] ?? ""}`}
    >
      {status}
    </span>
  );
}
