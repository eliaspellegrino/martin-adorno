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

// ORDEN ESTRATÉGICO:
// Starter → Pro → Pro Plus (producto principal) → Full (premium)
const plans = [
  {
    name: "Starter",
    price: "$75k",
    desc: "Para empezar con una estructura clara y entrenar por tu cuenta.",
    badge: null,
    highlight: false,
    note: null,
    buttonText: "Empezar con Starter",
    features: [
      "Rutina adaptada a tu nivel",
      "Plan nutricional base",
      "Ajuste mensual",
      "Soporte por WhatsApp",
    ],
  },

  {
    name: "Pro",
    price: "$89k",
    desc: "Entrená conmigo 2 veces por semana y progresá con una estructura diseñada para vos.",
    badge: null,
    highlight: false,
    note: null,
    buttonText: "Elegir Pro",
    features: [
      "2 clases presenciales por semana",
      "Corrección de técnica",
      "Seguimiento del progreso",
      "Soporte por WhatsApp",
    ],
    nutritionUpsell: true,
  },

  {
    name: "Pro Plus",
    price: "$139k",
    desc: "El equilibrio ideal entre frecuencia, seguimiento y resultados.",
    badge: "MÁS ELEGIDO",
    highlight: true,
    note: "La mejor opción para la mayoría",
    buttonText: "Quiero Pro Plus",
    features: [
      "3 clases presenciales por semana",
      "Rutina personalizada y progresiva",
      "Corrección de técnica en cada sesión",
      "Seguimiento de tu progreso",
      "Soporte por WhatsApp",
    ],
    nutritionUpsell: true,
  },

  {
    name: "Full",
    price: "$219k",
    desc: "Acompañamiento integral para quienes quieren maximizar sus resultados.",
    badge: "MÁXIMO ACOMPAÑAMIENTO",
    highlight: false,
    note: "Incluye nutrición personalizada",
    buttonText: "Quiero el plan Full",
    features: [
      "4 clases presenciales por semana",
      "Plan nutricional completamente personalizado",
      "Rutina completamente personalizada",
      "Ajustes 2 veces por semana",
      "Estrategia de adherencia",
      "Optimización del rendimiento",
      "Optimización del descanso",
      "Corrección técnica avanzada",
      "Seguimiento completo de hábitos y progreso",
      "Soporte prioritario",
    ],
  },
];

export default function Plans() {
  return (
    <section id="planes" className="py-16">
      <Container className="max-w-6xl">
        <div className="flex flex-col gap-8 sm:gap-10">

          <SectionTitle
            eyebrow="Planes"
            title="Elegí el nivel de acompañamiento"
            subtitle="Todos los planes son mensuales."
          />

          {/* PLANES */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {plans.map((p, idx) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className={p.highlight ? "relative isolate" : ""}
              >
                {/* GLOW DEL PLAN DESTACADO */}
                {p.highlight && (
                  <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-r from-teal-500/20 via-cyan-500/10 to-emerald-500/20 blur-xl" />
                )}

                <Card
                  variant="darkGlass"
                  className={[
                    "relative overflow-hidden transition-all duration-300 h-full",
                    p.highlight
                      ? "border-teal-400/40 shadow-2xl md:scale-[1.02]"
                      : "hover:scale-[1.01]",
                  ].join(" ")}
                >
                  <CardContent className="p-5 sm:p-6 flex flex-col h-full">

                    {/* HEADER */}
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-extrabold text-white">
                        {p.name}
                      </h3>

                      {p.badge && (
                        <span className="px-2.5 py-1 text-[10px] sm:text-xs font-bold text-black bg-teal-500 rounded-full whitespace-nowrap">
                          {p.badge}
                        </span>
                      )}
                    </div>

                    {/* PRICE */}
                    <div className="mt-3">
                      <div className="text-3xl font-extrabold tracking-tight text-white">
                        {p.price}
                      </div>

                      <div className="text-xs text-white/50 mt-1">
                        por mes
                      </div>
                    </div>

                    {/* DESCRIPTION */}
                    <p className="mt-3 text-sm leading-relaxed text-white/70">
                      {p.desc}
                    </p>

                    {/* FEATURES */}
                    <ul className="mt-5 space-y-2.5 flex-1">
                      {p.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-sm text-white/80"
                        >
                          <Check className="mt-0.5 h-4 w-4 text-teal-300 shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    {/* NOTE */}
                    {p.note && (
                      <div
                        className={[
                          "mt-5 p-3 rounded-lg border",
                          p.highlight
                            ? "bg-teal-500/15 border-teal-400/30"
                            : "bg-white/[0.04] border-white/10",
                        ].join(" ")}
                      >
                        <p
                          className={[
                            "text-sm font-semibold",
                            p.highlight
                              ? "text-teal-200"
                              : "text-white/70",
                          ].join(" ")}
                        >
                          {p.note}
                        </p>
                      </div>
                    )}

                    {/* CTA PRINCIPAL */}
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
                        {p.buttonText}
                      </Button>
                    </div>

                    {/* UPSELL NUTRICIÓN
                        SOLO PARA PRO Y PRO PLUS */}
                    {p.nutritionUpsell && (
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <div className="text-center">
                          <p className="text-sm font-semibold text-white">
                            ¿Querés sumar nutrición?
                          </p>

                          <p className="mt-1 text-xs leading-relaxed text-white/55">
                            Disponible como adicional en {p.name}.
                          </p>

                          <Button
                            as="a"
                            href={waLink(
                              `${p.name} + Plan nutricional personalizado`
                            )}
                            target="_blank"
                            rel="noreferrer"
                            variant="ghost"
                            className="mt-2 w-full text-xs text-teal-300 hover:text-teal-200"
                          >
                            Consultar plan nutricional
                          </Button>
                        </div>
                      </div>
                    )}

                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* ACLARACIÓN FINAL */}
          <div className="text-center px-4">
            <p className="text-xs sm:text-sm text-white/50">
              El plan nutricional personalizado está disponible como adicional
              en Pro y Pro Plus. En Full ya está incluido.
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}
