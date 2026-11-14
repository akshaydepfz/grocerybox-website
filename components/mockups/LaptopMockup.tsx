import { BrowserChrome } from "./BrowserChrome";
import {
  DesktopScreenImage,
  desktopScreenshotAspect,
} from "./DesktopScreenImage";

type LaptopMockupProps = {
  className?: string;
};

export function LaptopMockup({ className = "" }: LaptopMockupProps) {
  return (
    <div className={`relative mx-auto w-full max-w-5xl ${className}`}>
      <div className="overflow-hidden rounded-t-2xl border border-white/15 bg-[#1a1a1a] shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
        <BrowserChrome url="greenbasket.grocerybox.in" />
        <div
          className="relative w-full min-h-[180px] overflow-hidden bg-[#f6f8f3] sm:min-h-[240px]"
          style={{ aspectRatio: desktopScreenshotAspect }}
        >
          <DesktopScreenImage priority className="h-full w-full" />
        </div>
      </div>
      <div className="relative mx-auto h-3 w-[92%] rounded-b-md bg-gradient-to-b from-[#2a2a2a] to-[#111]" />
      <div className="mx-auto h-1.5 w-[35%] rounded-b-lg bg-[#0d0d0d]" />
    </div>
  );
}