import Container from "./Container";
import Button from "./Button";
import { site } from "../data/site";
import { MessageCircle } from "lucide-react";

function waLink() {
  const text = encodeURIComponent(
    "Hola Martín! Quiero info sobre dieta + rutina personalizada. Mi objetivo es:"
  );
  return `https://wa.me/${site.contact.whatsappNumber}?text=${text}`;
}

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-teal-500/90" />
          <div className="leading-tight">
            <div className="text-sm font-extrabold tracking-tight text-white">
              {site.brand.name}
            </div>
            <div className="text-xs text-white/60">{site.brand.tagline}</div>
          </div>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          <a className="text-sm text-white/70 hover:text-white" href="#servicios">
            Servicios
          </a>
          <a className="text-sm text-white/70 hover:text-white" href="#planes">
            Planes
          </a>
          <a className="text-sm text-white/70 hover:text-white" href="#faq">
            FAQ
          </a>
          <a className="text-sm text-white/70 hover:text-white" href="#contacto">
            Contacto
          </a>
        </div>

        <Button
          as="a"
          href={waLink()}
          target="_blank"
          rel="noreferrer"
          className="gap-2"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </Button>
      </Container>
    </div>
  );
}
