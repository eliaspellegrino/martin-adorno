import Container from "../components/Container";
import Button from "../components/Button";
import Badge from "../components/Badge";
import Card, { CardContent } from "../components/Card";
import { site } from "../data/site";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Dumbbell, Salad, Sparkles } from "lucide-react";

function waLink() {
  const text = encodeURIComponent(
    "Hola Martín! Quiero arrancar con dieta + rutina personalizada. Mi objetivo es:"
  );
  return `https://wa.me/${site.contact.whatsappNumber}?text=${text}`;
}

export default function Hero() {
  const ref = useRef(null);

  // Parallax sutil
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section id="top" ref={ref} className="relative overflow-hidden">
      {/* BACKGROUND LAYER (z-0) */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: "url(/img/Hero.png)" }}
        />
      </motion.div>

      {/* OVERLAYS (z-0) */}
      <div className="absolute inset-0 z-0 bg-black/45" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/35 to-black/75" />
      <div className="absolute inset-0 z-0 [background:radial-gradient(ellipse_at_center,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.65)_70%,rgba(0,0,0,0.85)_100%)]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(20,184,166,0.18),transparent_55%)]" />
      {/* Fade bottom para transición suave con la siguiente sección */}
      <div className="absolute inset-x-0 bottom-0 z-0 h-56 bg-gradient-to-b from-transparent to-black" />

      {/* CONTENT (z-10) */}
      <div className="relative z-10">
        <Container className="grid gap-10 py-14 md:grid-cols-2 md:items-center md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="gap-2 border border-white/10 bg-black/35 backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-teal-300" />
                Plan 100% personalizado
              </Badge>
              <Badge className="gap-2 border border-white/10 bg-black/35 backdrop-blur">
                <Dumbbell className="h-3.5 w-3.5 text-teal-300" />
                Rutinas + técnica
              </Badge>
              <Badge className="gap-2 border border-white/10 bg-black/35 backdrop-blur">
                <Salad className="h-3.5 w-3.5 text-teal-300" />
                Dieta adaptable
              </Badge>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl drop-shadow-[0_10px_30px_rgba(0,0,0,0.7)]">
              {site.hero.headline}
            </h1>

            <p className="text-base leading-relaxed text-white/80 sm:text-lg drop-shadow-[0_6px_18px_rgba(0,0,0,0.7)]">
              {site.hero.subheadline}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                as="a"
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                className="gap-2 shadow-lg shadow-black/40 ring-1 ring-teal-300/30 hover:ring-teal-300/50"
              >
                {site.hero.ctaPrimary}
                <ArrowRight className="w-4 h-4" />
              </Button>

              <Button
                as="a"
                href="#planes"
                variant="secondary"
                className="text-white border shadow-lg border-white/15 bg-black/35 hover:bg-black/45 shadow-black/30"
              >
                {site.hero.ctaSecondary}
              </Button>
            </div>

            <p className="text-sm text-white/60 drop-shadow-[0_6px_18px_rgba(0,0,0,0.7)]">
              {site.hero.note}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <Card
              variant="darkGlass"
              className="p-0 shadow-2xl border-white/15 bg-black/35 backdrop-blur-md shadow-black/60"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-white/60">
                      Coach
                    </div>
                    <div className="text-xl font-extrabold text-white">
                      {site.brand.name}
                    </div>
                    <div className="text-sm text-white/60">
                      {site.brand.city}
                    </div>
                  </div>

                  <div className="relative overflow-hidden shadow-lg h-14 w-14 rounded-2xl ring-1 ring-white/15 shadow-black/40 bg-black/40">
                    <img
                      src="/img/Avatar-cuadrado.png"
                      alt="Martín Adorno"
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="grid gap-3 mt-6">
                  {[
                    { k: "Objetivo", v: "Definición / masa / recomposición" },
                    { k: "Plan", v: "Nutrición + entrenamiento" },
                    { k: "Seguimiento", v: "Ajustes semanales y control" },
                    { k: "Modalidad", v: "Online / presencial (según zona)" },
                  ].map((row) => (
                    <div
                      key={row.k}
                      className="flex items-center justify-between px-4 py-3 border rounded-2xl border-white/10 bg-black/35"
                    >
                      <div className="text-sm font-semibold text-white/85">
                        {row.k}
                      </div>
                      <div className="text-sm text-white/65">{row.v}</div>
                    </div>
                  ))}
                </div>

                <div className="p-4 mt-6 border rounded-2xl border-teal-400/20 bg-teal-500/10">
                  <div className="text-sm font-bold text-white">Incluye:</div>
                  <ul className="mt-2 space-y-1 text-sm text-white/75">
                    <li>• Evaluación inicial + objetivo realista</li>
                    <li>• Rutina progresiva (gimnasio o casa)</li>
                    <li>• Dieta flexible y sostenible</li>
                    <li>• Ajustes por resultados</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
