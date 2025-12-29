import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Card, { CardContent } from "../components/Card";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "¿La dieta es estricta?",
    a: "No. Es personalizada y flexible: ajustada a tu objetivo, gustos y rutina. Se busca adherencia real.",
  },
  {
    q: "¿Puedo entrenar en casa?",
    a: "Sí. La rutina se adapta al equipamiento disponible (casa, gym o híbrido).",
  },
  {
    q: "¿Cada cuánto se ajusta el plan?",
    a: "Depende del plan, pero normalmente hay control semanal o quincenal según tu progreso.",
  },
  {
    q: "¿Necesito suplementos?",
    a: "No son obligatorios. Primero se optimiza comida, hábitos, descanso y entrenamiento.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="py-20 md:py-24">
      <Container>
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 lg:items-start">
          <SectionTitle
            eyebrow="FAQ"
            title="Preguntas frecuentes"
            subtitle="Si te queda alguna duda, me escribís y lo resolvemos."
          />

          {/* Separación real en mobile (evita “pegado al título” aunque SectionTitle tenga estilos raros) */}
          <div className="mt-8 lg:mt-0">
            <div className="space-y-4 md:space-y-5">
              {faqs.map((f, idx) => {
                const open = openIdx === idx;

                return (
                  <Card
                    key={f.q}
                    variant="darkGlass"
                    className={[
                      "transition-all duration-200",
                      open ? "border-white/20" : "border-white/10",
                    ].join(" ")}
                  >
                    <button
                      onClick={() => setOpenIdx(open ? -1 : idx)}
                      aria-expanded={open}
                      className={[
                        "flex w-full items-center justify-between gap-4 text-left rounded-3xl",
                        "px-6 py-5 md:px-7 md:py-6",
                        "transition hover:bg-white/[0.04] active:bg-white/[0.06]",
                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20",
                      ].join(" ")}
                    >
                      <span className="text-[15px] md:text-base font-bold text-white leading-snug">
                        {f.q}
                      </span>

                      <ChevronDown
                        className={[
                          "h-5 w-5 shrink-0 text-white/60 transition-transform duration-200",
                          open ? "rotate-180" : "rotate-0",
                        ].join(" ")}
                      />
                    </button>

                    {/* Animación sin dejar “aire muerto” */}
                    <div
                      className={[
                        "grid transition-[grid-template-rows,opacity] duration-250 ease-out",
                        open
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0",
                      ].join(" ")}
                    >
                      <div className="overflow-hidden">
                        {/* IMPORTANT: neutralizamos padding default del CardContent para evitar doble padding */}
                        <CardContent className="px-0 pt-0 pb-0">
                          {/* padding CONTROLADO acá, sin duplicados */}
                          <div className="px-6 pb-5 md:px-7 md:pb-6 text-sm md:text-[15px] leading-relaxed text-white/70">
                            {f.a}
                          </div>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
