import type { ReactNode } from "react";

type PhoneMockupProps = {
  children: ReactNode;
  className?: string;
};

export function PhoneMockup({ children, className = "" }: PhoneMockupProps) {
  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-[2rem] border-[3px] border-[#2a2a2a] bg-[#111] shadow-[0_24px_80px_rgba(0,0,0,0.45)] ${className}`}
    >
      <div className="absolute left-1/2 top-2 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-black" />
      <div className="relative aspect-[9/19] w-[168px] overflow-hidden rounded-[1.65rem] bg-black sm:w-[200px] md:w-[220px]">
        {children}
      </div>
    </div>
  );
}