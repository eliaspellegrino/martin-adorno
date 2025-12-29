import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Card, { CardContent } from "../components/Card";
import {
  BadgeCheck,
  CalendarDays,
  LineChart,
  ShieldCheck,
  Users,
  Building2,
} from "lucide-react";

export default function About() {
  return (
    <section id="sobre-mi" className="py-16">
      <Container>
        {/* TÍTULO ARRIBA (full width) */}
        <SectionTitle
          eyebrow="Sobre mí"
          title="Formación + experiencia"
          subtitle="Para que sepas con quién estás trabajando."
        />

        {/* GRID DE CARDS */}
        <div className="grid gap-6 mt-10 lg:grid-cols-3">
          {/* CARD 0 — Foto (mobile arriba, desktop al final como 3ra) */}
          <Card
            variant="darkGlass"
            hover={false}
            className="order-1 p-0 overflow-hidden lg:order-3"
          >
            <CardContent className="p-0">
              {/* Imagen */}
              <div className="bg-black/20">
                {/* Mobile: recortada (sin bordes) */}
                <img
                  src="/img/Avatar-cuadrado.png"
                  alt="Martín Adorno"
                  className="block w-full object-cover object-top h-[380px] sm:h-[440px] lg:hidden"
                  loading="lazy"
                />

                {/* Desktop: full sin recorte */}
                <img
                  src="/img/Avatar.png"
                  alt="Martín Adorno"
                  className="hidden w-full object-contain bg-black/20 lg:block lg:h-[520px]"
                  loading="lazy"
                />
              </div>

              {/* Pie opcional */}
              <div className="px-6 py-5">
                <div className="text-sm font-bold text-white">
                  Martín Adorno
                </div>
                <div className="mt-1 text-sm text-white/65">
                  Competencia • disciplina • resultados medibles
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CARD 1 — Experiencia en números (igual, solo orden) */}
          <Card
            variant="darkGlass"
            hover={false}
            className="order-2 p-0 lg:order-1"
          >
            <CardContent className="p-6 sm:p-8">
              <div className="text-sm font-bold text-white">
                Experiencia en números
              </div>
              <div className="mt-1 text-sm text-white/70">
                Seguimiento real, ajustes semanales y foco en técnica +
                adherencia.
              </div>

              <div className="grid grid-cols-2 gap-3 mt-6">
                <div className="p-4 border rounded-2xl border-white/10 bg-black/30">
                  <div className="flex items-center gap-2 text-white/80">
                    <CalendarDays className="w-4 h-4 text-teal-300" />
                    <span className="text-xs font-semibold">Experiencia</span>
                  </div>
                  <div className="mt-2 text-2xl font-extrabold text-white">
                    6+ años
                  </div>
                  <div className="mt-1 text-xs text-white/55">
                    Planificación personalizada
                  </div>
                </div>
                <div className="p-4 border rounded-2xl border-white/10 bg-black/30">
                  <div className="flex items-center gap-2 text-white/80">
                    <LineChart className="w-4 h-4 text-teal-300" />
                    <span className="text-xs font-semibold">Resultados</span>
                  </div>
                  <div className="mt-2 text-2xl font-extrabold text-white">
                    85–90%
                  </div>
                  <div className="mt-1 text-xs text-white/55">
                    Objetivos en 3 meses
                  </div>
                </div>
                <div className="p-4 border rounded-2xl border-white/10 bg-black/30">
                  <div className="flex items-center gap-2 text-white/80">
                    <Users className="w-4 h-4 text-teal-300" />
                    <span className="text-xs font-semibold">Retención</span>
                  </div>
                  <div className="mt-2 text-2xl font-extrabold text-white">
                    +85%
                  </div>
                  <div className="mt-1 text-xs text-white/55">
                    Continuidad del proceso
                  </div>
                </div>
                <div className="p-4 border rounded-2xl border-white/10 bg-black/30">
                  <div className="flex items-center gap-2 text-white/80">
                    <Building2 className="w-4 h-4 text-teal-300" />
                    <span className="text-xs font-semibold">
                      Infraestructura
                    </span>
                  </div>
                  <div className="mt-2 text-2xl font-extrabold text-white">
                    Gym propio
                  </div>
                  <div className="mt-1 text-xs text-white/55">
                    Sesiones de calidad
                  </div>
                </div>{" "}
              </div>

              <p className="mt-4 text-xs text-white/45">
                *Datos basados en seguimiento y métricas internas del proceso.
              </p>
            </CardContent>
          </Card>

          {/* CARD 2 — Formación y enfoque (igual, solo orden) */}
          <Card
            variant="darkGlass"
            hover={false}
            className="order-3 p-0 lg:order-2"
          >
            <CardContent className="p-6 sm:p-8">
              <div className="text-sm font-bold text-white">
                Formación y enfoque profesional
              </div>

              <div className="mt-4 space-y-4 text-sm text-white/75">
                <div className="flex items-start gap-3">
                  <BadgeCheck className="mt-0.5 h-5 w-5 text-teal-300" />
                  <div>
                    <div className="font-semibold text-white">
                      Personal Trainer (IFBB)
                    </div>
                    <div className="text-white/65">
                      Entrenamiento y planificación.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 text-teal-300" />
                  <div>
                    <div className="font-semibold text-white">
                      Nutrición deportiva y suplementación
                    </div>
                    <div className="text-white/65">
                      Composición corporal y energía sostenible.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 text-teal-300" />
                  <div>
                    <div className="font-semibold text-white">
                      Entrenamiento operativo
                    </div>
                    <div className="text-white/65">
                      Técnica, disciplina y protocolos de alta exigencia.
                    </div>
                  </div>
                </div>{" "}
              </div>

              <div className="p-4 mt-6 border rounded-2xl border-teal-400/20 bg-teal-500/10">
                <div className="text-sm font-bold text-white">
                  Lo que priorizo
                </div>
                <ul className="mt-2 space-y-1 text-sm text-white/75">
                  <li>• Técnica segura + progresión inteligente</li>
                  <li>• Nutrición flexible (adherencia real)</li>
                  <li>• Ajustes semanales según progreso</li>
                  <li>• Resultados sostenibles (sin rebote)</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}
