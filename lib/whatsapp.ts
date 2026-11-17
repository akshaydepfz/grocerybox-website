export const WHATSAPP_NUMBER = "919567602325";
export const WHATSAPP_MESSAGE = "Hi, I'm interested in GroceryBox";

export function whatsAppHref() {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}