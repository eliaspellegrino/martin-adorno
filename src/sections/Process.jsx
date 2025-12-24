import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "1) Evaluación inicial",
    text: "Objetivo, hábitos, lesiones, historial, disponibilidad y preferencias.",
  },
  {
    title: "2) Armado del plan",
    text: "Dieta + rutina con progresión, volumen, frecuencia y técnica.",
  },
  {
    title: "3) Seguimiento semanal",
    text: "Revisión de progreso, adherencia, energía, ajustes estratégicos.",
  },
  {
    title: "4) Sostener resultados",
    text: "Estrategia para mantener y mejorar sin efecto rebote.",
  },
];

export default function Process() {
  return (
    <section className="py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <SectionTitle
            eyebrow="Metodología"
            title="Cómo trabajo (simple y efectivo)"
            subtitle="Sin fórmulas mágicas: planificación, ejecución y ajustes según tu realidad."
          />

          <div className="space-y-4">
            {steps.map((s, idx) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-teal-300" />
                  <div>
                    <h3 className="text-base font-bold text-white">{s.title}</h3>
                    <p className="mt-1 text-sm text-white/70">{s.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
