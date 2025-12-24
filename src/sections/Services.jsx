import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import { motion } from "framer-motion";
import { ClipboardList, Dumbbell, Salad, Target } from "lucide-react";

const items = [
  {
    icon: Target,
    title: "Objetivo claro y medible",
    text: "Definimos meta, plazos y métricas (peso, medidas, rendimiento, adherencia).",
  },
  {
    icon: Salad,
    title: "Dieta personalizada (flexible)",
    text: "Plan adaptable a tus gustos, horarios y presupuesto. Sin extremos.",
  },
  {
    icon: Dumbbell,
    title: "Rutina progresiva",
    text: "Entrenamiento por nivel y contexto: gimnasio, casa o híbrido.",
  },
  {
    icon: ClipboardList,
    title: "Seguimiento y ajustes",
    text: "Control semanal: cambios según evolución, energía y resultados.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-16">
      <Container>
        <div className="flex flex-col gap-10">
          <SectionTitle
            eyebrow="Servicios"
            title="Lo que vas a recibir"
            subtitle="Un sistema completo: nutrición + entrenamiento + seguimiento para progresar sin improvisar."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((it, idx) => {
              const Icon = it.icon;
              return (
                <motion.div
                  key={it.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-500/15">
                    <Icon className="h-5 w-5 text-teal-300" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-white">{it.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{it.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
