import Image from "next/image";
import { whatsAppHref } from "@/lib/whatsapp";

export function WhatsAppSupportButton() {
  return (
    <a
      href={whatsAppHref()}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#00E676]/40 bg-[#00E676]/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-[#00E676]/60 hover:bg-[#00E676]/20 sm:w-auto"
    >
      <Image
        src="/whatsapp.svg"
        alt=""
        width={20}
        height={20}
        className="h-5 w-5 shrink-0"
      />
      WhatsApp Support
    </a>
  );
}