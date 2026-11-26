import { site } from "../data/site";

/** Link base de WhatsApp. La campaña se agrega en el navegador (ver Base.astro). */
export function waLink(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
