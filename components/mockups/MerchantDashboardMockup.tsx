import { BrowserChrome } from "./BrowserChrome";
import { MerchantDashboardScreen } from "./MerchantDashboardScreen";

export function MerchantDashboardMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-lime/20 bg-[#0a1812] shadow-[0_0_80px_rgba(200,241,105,0.12)]">
      <BrowserChrome url="dashboard.grocerybox.in" />
      <div className="aspect-[16/9] w-full min-h-[320px] md:min-h-[420px]">
        <MerchantDashboardScreen />
      </div>
    </div>
  );
}