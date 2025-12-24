import Container from "../components/Container";
import Button from "../components/Button";
import Badge from "../components/Badge";
import { site } from "../data/site";
import { motion } from "framer-motion";
import { ArrowRight, Dumbbell, Salad, Sparkles } from "lucide-react";

function waLink() {
  const text = encodeURIComponent(
    "Hola Martín! Quiero arrancar con dieta + rutina personalizada. Mi objetivo es:"
  );
  return `https://wa.me/${site.contact.whatsappNumber}?text=${text}`;
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-48 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-teal-500/15 blur-3xl" />
        <div className="absolute -bottom-56 right-0 h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <Container className="relative grid gap-10 py-14 md:grid-cols-2 md:items-center md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="gap-2">
              <Sparkles className="h-3.5 w-3.5 text-teal-300" />
              Plan 100% personalizado
            </Badge>
            <Badge className="gap-2">
              <Dumbbell className="h-3.5 w-3.5 text-teal-300" />
              Rutinas + técnica
            </Badge>
            <Badge className="gap-2">
              <Salad className="h-3.5 w-3.5 text-teal-300" />
              Dieta adaptable
            </Badge>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {site.hero.headline}
          </h1>

          <p className="text-base leading-relaxed text-white/70 sm:text-lg">
            {site.hero.subheadline}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              as="a"
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="gap-2"
            >
              {site.hero.ctaPrimary}
              <ArrowRight className="h-4 w-4" />
            </Button>

            <Button as="a" href="#planes" variant="secondary">
              {site.hero.ctaSecondary}
            </Button>
          </div>

          <p className="text-sm text-white/50">{site.hero.note}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          {/* Tarjeta estilo CV */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold text-white/60">Coach</div>
                <div className="text-xl font-extrabold text-white">
                  {site.brand.name}
                </div>
                <div className="text-sm text-white/60">{site.brand.city}</div>
              </div>
              <div className="h-12 w-12 rounded-2xl bg-teal-500/90" />
            </div>

            <div className="mt-6 grid gap-3">
              {[
                { k: "Objetivo", v: "Definición / masa / recomposición" },
                { k: "Plan", v: "Nutrición + entrenamiento" },
                { k: "Seguimiento", v: "Ajustes semanales y control" },
                { k: "Modalidad", v: "Online / presencial (según zona)" },
              ].map((row) => (
                <div
                  key={row.k}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
                >
                  <div className="text-sm font-semibold text-white/80">{row.k}</div>
                  <div className="text-sm text-white/60">{row.v}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-teal-500/10 p-4">
              <div className="text-sm font-bold text-white">Incluye:</div>
              <ul className="mt-2 space-y-1 text-sm text-white/70">
                <li>• Evaluación inicial + objetivo realista</li>
                <li>• Rutina progresiva (gimnasio o casa)</li>
                <li>• Dieta flexible y sostenible</li>
                <li>• Ajustes por resultados</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
