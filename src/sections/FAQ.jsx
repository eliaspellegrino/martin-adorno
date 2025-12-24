import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
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
    <section id="faq" className="py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <SectionTitle
            eyebrow="FAQ"
            title="Preguntas frecuentes"
            subtitle="Si te queda alguna duda, me escribís y lo resolvemos."
          />

          <div className="space-y-3">
            {faqs.map((f, idx) => {
              const open = openIdx === idx;
              return (
                <div
                  key={f.q}
                  className="rounded-3xl border border-white/10 bg-white/5"
                >
                  <button
                    onClick={() => setOpenIdx(open ? -1 : idx)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-sm font-bold text-white">{f.q}</span>
                    <ChevronDown
                      className={[
                        "h-5 w-5 text-white/60 transition",
                        open ? "rotate-180" : "rotate-0",
                      ].join(" ")}
                    />
                  </button>

                  {open ? (
                    <div className="px-5 pb-5 text-sm text-white/70">
                      {f.a}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
