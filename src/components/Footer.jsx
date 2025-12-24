import Container from "./Container";
import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-sm font-bold text-white">{site.brand.name}</div>
          <div className="text-sm text-white/60">
            {site.brand.tagline} — {site.brand.city}
          </div>
        </div>

        <div className="text-xs text-white/40">
          © {new Date().getFullYear()} {site.brand.name}. Todos los derechos reservados.
        </div>
      </Container>
    </footer>
  );
}
