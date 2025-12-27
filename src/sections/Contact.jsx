import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import Card, { CardContent } from "../components/Card";
import { site } from "../data/site";
import { Mail, MapPin, MessageCircle } from "lucide-react";

function waLink() {
  const text = encodeURIComponent(
    "Hola Martín! Quiero arrancar. Mi objetivo es:"
  );
  return `https://wa.me/${site.contact.whatsappNumber}?text=${text}`;
}

export default function Contact() {
  return (
    <section id="contacto" className="py-16">
      <Container>
        <Card variant="darkGlass" hover={false} className="p-0">
          <CardContent className="p-6 sm:p-10">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6">
                <SectionTitle
                  eyebrow="Contacto"
                  title="Listo para empezar"
                  subtitle="Escribime por WhatsApp y te pido 3 datos para armar tu plan inicial."
                />

                <div className="space-y-3 text-sm text-white/75">
                  <div className="flex items-start gap-3">
                    <MessageCircle className="mt-0.5 h-5 w-5 text-teal-300" />
                    <div>
                      <div className="font-semibold text-white">WhatsApp</div>
                      <div className="text-white/70">
                        {site.contact.whatsappLabel}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 text-teal-300" />
                    <div>
                      <div className="font-semibold text-white">Email</div>
                      <div className="text-white/70">{site.contact.email}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 text-teal-300" />
                    <div>
                      <div className="font-semibold text-white">Ubicación</div>
                      <div className="text-white/70">
                        {site.contact.address}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Card variant="darkSolid" className="p-6">
                <div className="text-base font-bold text-white">
                  Mensaje sugerido (copiar y pegar)
                </div>

                <div className="p-4 mt-3 text-sm border rounded-2xl border-white/10 bg-white/5 text-white/70">
                  Hola Martín! Quiero dieta + rutina personalizada. Mi objetivo
                  es: ___. Entreno (casa/gym): ___. Disponibilidad semanal: ___.
                  Edad/peso/altura: ___.
                </div>

                <div className="flex flex-col gap-3 mt-5">
                  <Button
                    as="a"
                    href={waLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Abrir WhatsApp
                  </Button>

                  <Button
                    as="a"
                    href="#planes"
                    variant="secondary"
                    className="justify-center"
                  >
                    Ver planes
                  </Button>
                </div>

                <p className="mt-4 text-xs text-white/45">
                  *Respuesta sujeta a disponibilidad de cupos.
                </p>
              </Card>
            </div>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
}
