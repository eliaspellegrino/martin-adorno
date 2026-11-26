export const site = {
  name: "Martín Adorno",
  tagline: "Personal Trainer",
  city: "Mercedes, Buenos Aires",
  url: "https://www.martinadorno.com",
  whatsappNumber: "5492324681926",
  whatsappLabel: "+54 9 2324 681926",
  email: "martinadornofit@gmail.com",
  instagram: "https://instagram.com/tinchoadorno",
  instagramHandle: "@tinchoadorno",
} as const;

export interface Plan {
  name: string;
  price: string;
  priceNote: string;
  description: string;
  features: string[];
  extra?: string;
}

/** Planes de Argentina, en pesos argentinos (ARS). */
export const plansAr: Plan[] = [
  {
    name: "Starter",
    price: "ARS 75.000",
    priceNote: "por mes · 100 % online",
    description: "Entrená por tu cuenta con un plan hecho para vos.",
    features: [
      "Rutina adaptada a tu nivel",
      "Plan de alimentación",
      "Seguimiento semanal por WhatsApp",
      "Rutina ajustada a pedido; dieta ajustada si te estancás",
    ],
  },
  {
    name: "Pro",
    price: "ARS 89.000",
    priceNote: "por mes · presencial en Mercedes",
    description: "Clases conmigo dos veces por semana.",
    features: [
      "2 clases presenciales por semana",
      "Corrección de técnica",
      "Seguimiento del progreso",
      "Soporte por WhatsApp",
    ],
    extra: "Nutrición como adicional (consultá el valor).",
  },
  {
    name: "Pro Plus",
    price: "ARS 139.000",
    priceNote: "por mes · presencial en Mercedes",
    description: "Más frecuencia para progresar más rápido.",
    features: [
      "3 clases presenciales por semana",
      "Rutina personalizada y progresiva",
      "Corrección de técnica en cada sesión",
      "Soporte por WhatsApp",
    ],
    extra: "Nutrición como adicional (consultá el valor).",
  },
  {
    name: "Full",
    price: "ARS 219.000",
    priceNote: "por mes · presencial en Mercedes",
    description: "El mayor nivel de acompañamiento.",
    features: [
      "4 clases presenciales por semana",
      "Nutrición y rutina totalmente personalizadas",
      "Ajustes 2 veces por semana",
      "Soporte prioritario",
    ],
    extra: "Nutrición incluida.",
  },
];

export const faq = [
  {
    q: "¿La dieta es estricta?",
    a: "No. Es personalizada y flexible: se ajusta a tu objetivo, tus gustos y tu rutina. Se busca que puedas sostenerla.",
  },
  {
    q: "¿Puedo entrenar en casa?",
    a: "Sí. La rutina se adapta al equipamiento que tengas: casa, gimnasio o una combinación.",
  },
  {
    q: "¿Cada cuánto se ajusta el plan?",
    a: "En el plan online hay seguimiento semanal por WhatsApp. La rutina se actualiza cuando lo pedís y la dieta se cambia si te estancás. En los planes presenciales los ajustes dependen del plan.",
  },
  {
    q: "¿Necesito suplementos?",
    a: "No son obligatorios. Primero se ordenan la comida, los hábitos, el descanso y el entrenamiento.",
  },
];
