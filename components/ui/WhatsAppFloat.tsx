import Image from "next/image";

const WHATSAPP_NUMBER = "919567602325";
const WHATSAPP_MESSAGE = "Hi, I'm interested in GroceryBox";

export function WhatsAppFloat() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

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