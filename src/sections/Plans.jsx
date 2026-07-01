import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import Card, { CardContent } from "../components/Card";
import { site } from "../data/site";
import { motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";

function waLink(planName) {
  const text = encodeURIComponent(
    `Hola Martín! Quiero el plan "${planName}". Mi objetivo es:`
  );
  return `https://wa.me/${site.contact.whatsappNumber}?text=${text}`;
}

// ORDEN ESTRATÉGICO (PRO PRIMERO)
const plans = [
  {
    name: "Pro",
    price: "$89k",
    desc: "El plan ideal para ver resultados reales semana a semana.",
    highlight: true,
    note: "La mayoría de mis alumnos está en este plan",
    features: [
      "Plan nutricional flexible",
      "Rutina progresiva + técnica",
      "Ajustes todas las semanas",
      "Soporte prioritario",
      "Seguimiento de hábitos",
      "2 clases presenciales por semana",
    ],
  },
  {
    name: "Pro Plus",
    price: "$139k",
    desc: "Más frecuencia, más seguimiento, resultados más rápidos.",
    features: [
      "Todo lo del plan Pro",
      "3 clases presenciales por semana",
      "Seguimiento más cercano",
    ],
  },
  {
    name: "Elite",
    price: "$219k",
    desc: "Para objetivos exigentes con acompañamiento total.",
    features: [
      "Plan completamente personalizado",
      "Ajustes 2 veces por semana",
      "Estrategia de adherencia",
      "Optimización de rendimiento",
      "Optimización de descanso",
      "Corrección técnica avanzada",
      "4 clases presenciales por semana",
    ],
  },
  {
    name: "Starter",
    price: "$59k",
    desc: "Para empezar sin complicaciones y crear constancia.",
    features: [
      "Plan nutricional base",
      "Rutina adaptada a tu nivel",
      "Ajuste mensual",
      "Soporte por WhatsApp",
    ],
  },
];

export default function Plans() {
  return (
    <section id="planes" className="py-16">
      <Container className="max-w-6xl">
        <div className="flex flex-col gap-10">
          <SectionTitle
            eyebrow="Planes"
            title="Elegí el nivel de acompañamiento"
            subtitle="Todos los planes son mensuales."
          />

          {/* GRID CORRECTO */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {plans.map((p, idx) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className={p.highlight ? "relative isolate" : ""}
              >
                {p.highlight && (
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-500/20 via-cyan-500/10 to-emerald-500/20 blur-xl" />
                )}

                <Card
                  variant="darkGlass"
                  className={[
                    "relative overflow-hidden transition-all duration-300",
                    p.highlight
                      ? "border-teal-400/40 scale-[1.04] z-10 shadow-2xl"
                      : "hover:scale-[1.02]",
                  ].join(" ")}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-extrabold text-white">
                        {p.name}
                      </h3>

                      {p.highlight && (
                        <span className="px-3 py-1 text-xs font-bold text-black bg-teal-500 rounded-full">
                          🔥 Más elegido
                        </span>
                      )}
                    </div>

                    <div className="mt-3">
                      <div className="text-3xl font-extrabold tracking-tight text-white">
                        {p.price}
                      </div>
                    </div>

                    <p className="mt-2 text-sm text-white/70">{p.desc}</p>

                    <ul className="mt-5 space-y-2">
                      {p.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-sm text-white/80"
                        >
                          <Check className="mt-0.5 h-4 w-4 text-teal-300" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    {p.note && (
                      <div className="mt-5 p-3 rounded-lg bg-teal-500/15 border border-teal-400/30">
                        <p className="text-sm font-semibold text-teal-200">
                          🔥 {p.note}
                        </p>
                      </div>
                    )}

                    <div className="mt-6">
                      <Button
                        as="a"
                        href={waLink(`${p.name} - ${p.price}`)}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full gap-2"
                        variant={p.highlight ? "primary" : "secondary"}
                      >
                        <MessageCircle className="w-4 h-4" />
                        Empezar ahora
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* BLOQUE DE AYUDA */}
          <Card variant="darkGlass" hover={false}>
            <CardContent className="p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-base font-bold text-white">
                    ¿No sabés qué plan te conviene?
                  </div>
                  <div className="text-sm text-white/70">
                    Contame tu objetivo y te recomiendo el mejor para tu caso.
                  </div>
                </div>

                <Button
                  as="a"
                  href={waLink("Recomendación")}
                  target="_blank"
                  rel="noreferrer"
                  className="gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Hablar ahora
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}