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

const plans = [
  {
    name: "Base",
    price: "A consultar",
    desc: "Para arrancar con una estructura clara y sostenible.",
    features: [
      "Dieta personalizada",
      "Rutina por nivel",
      "Ajuste quincenal",
      "Soporte por WhatsApp (horario acordado)",
    ],
  },
  {
    name: "Pro (Recomendado)",
    price: "A consultar",
    desc: "Seguimiento más cercano y ajustes semanales.",
    highlight: true,
    features: [
      "Dieta personalizada + flexibilidad",
      "Rutina progresiva + técnica",
      "Ajustes semanales",
      "Soporte WhatsApp prioritario",
      "Checklist de hábitos",
    ],
  },
  {
    name: "Elite",
    price: "A consultar",
    desc: "Para objetivos exigentes y máxima personalización.",
    features: [
      "Plan completo ultra personalizado",
      "Ajustes 2 veces por semana",
      "Estrategia de adherencia",
      "Soporte cercano",
      "Optimización por rendimiento",
    ],
  },
];

export default function Plans() {
  return (
    <section id="planes" className="py-16">
      <Container>
        <div className="flex flex-col gap-10">
          <SectionTitle
            eyebrow="Planes"
            title="Elegí el nivel de acompañamiento"
            subtitle="Los precios dependen de modalidad y necesidad. Te paso opciones por WhatsApp en 1 minuto."
          />

          <div className="grid gap-4 lg:grid-cols-3">
            {plans.map((p, idx) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className={p.highlight ? "relative" : ""}
              >
                {p.highlight ? (
                  <div className="pointer-events-none absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-teal-500/30 via-cyan-500/20 to-emerald-500/30 blur-md" />
                ) : null}

                <Card
                  variant="darkGlass"
                  className={[
                    "relative",
                    p.highlight ? "border-teal-400/40" : "",
                  ].join(" ")}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-extrabold text-white">
                        {p.name}
                      </h3>
                      {p.highlight ? (
                        <span className="px-3 py-1 text-xs font-bold text-black bg-teal-500 rounded-full">
                          Mejor opción
                        </span>
                      ) : null}
                    </div>

                    <div className="mt-3 text-3xl font-extrabold tracking-tight text-white">
                      {p.price}
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

                    <div className="mt-6">
                      <Button
                        as="a"
                        href={waLink(p.name)}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full gap-2"
                        variant={p.highlight ? "primary" : "secondary"}
                      >
                        <MessageCircle className="w-4 h-4" />
                        Pedir info
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <Card variant="darkGlass" hover={false}>
            <CardContent className="p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-base font-bold text-white">
                    ¿No sabés qué plan te conviene?
                  </div>
                  <div className="text-sm text-white/70">
                    Me contás tu objetivo y te recomiendo el mejor para tu caso.
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
