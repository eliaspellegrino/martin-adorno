import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Card, { CardContent } from "../components/Card";
import { motion } from "framer-motion";

const quotes = [
  {
    name: "Sofía",
    text: "Me armó una dieta que pude sostener. Bajé grasa y no sentí que estaba “a dieta”.",
  },
  {
    name: "Nico",
    text: "Rutina clara y progresiva. Mejoré fuerza y postura, y por fin entendí cómo entrenar.",
  },
  {
    name: "Carla",
    text: "El seguimiento hace la diferencia. Ajustes semanales y motivación realista.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16">
      <Container>
        <div className="flex flex-col gap-10">
          <SectionTitle
            eyebrow="Resultados"
            title="Testimonios"
            subtitle="Ejemplos de lo que la gente suele notar cuando el plan es realmente personalizado."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {quotes.map((q, idx) => (
              <motion.div
                key={q.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
              >
                <Card variant="darkGlass" className="h-full p-0">
                  <CardContent className="p-6">
                    <p className="text-sm leading-relaxed text-white/80">
                      “{q.text}”
                    </p>
                    <div className="mt-4 text-sm font-bold text-white">
                      {q.name}
                    </div>
                    <div className="text-xs text-white/50">Cliente</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
