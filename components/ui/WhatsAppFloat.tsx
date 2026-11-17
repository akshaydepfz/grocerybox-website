import Image from "next/image";
import { whatsAppHref } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  const href = whatsAppHref();

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp — 9567602325"
      className="fixed bottom-6 right-6 z-50 block rounded-full shadow-lg shadow-black/30 transition hover:scale-105 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
    >
      <Image
        src="/whatsapp.svg"
        alt=""
        width={56}
        height={56}
        className="h-14 w-14"
      />
    </a>
  );
}