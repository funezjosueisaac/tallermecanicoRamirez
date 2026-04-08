import Layout from "@/components/Layout";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

const Contacto = () => (
  <Layout>
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-heading text-4xl md:text-5xl text-center mb-12">
          <span className="text-primary">Contáctanos</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div className="flex gap-4">
              <MapPin className="text-primary shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-heading text-lg mb-1">Ubicación</h3>
                <p className="text-muted-foreground text-sm">Choluteca, Honduras</p>
                <p className="text-muted-foreground text-sm">Código: 8R7H+G5G Choluteca</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="text-primary shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-heading text-lg mb-1">Teléfono</h3>
                <p className="text-muted-foreground text-sm">9946-9775 / 9989-6450</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="text-primary shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-heading text-lg mb-1">Horario</h3>
                <p className="text-muted-foreground text-sm">Lunes a Sábado</p>
                <p className="text-muted-foreground text-sm">8:00 AM – 5:00 PM</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Navigation className="text-primary shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-heading text-lg mb-1">¿Cómo llegar?</h3>
                <p className="text-muted-foreground text-sm">
                  Blvrd. Mauricio Oliva, doblar a la derecha donde está Farmacia La Moncada,
                  luego a la izquierda cuadra y media.
                </p>
              </div>
            </div>
          </div>

          {/* Map embed */}
          <div className="rounded-lg overflow-hidden border border-border shadow-lg">
            <iframe
              title="Ubicación Taller Ramirez"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3864.5!2d-87.19!3d13.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2shn!4v1700000000000"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="bg-primary/10 border border-primary/30 rounded-lg p-8 text-center">
          <p className="font-heading text-xl text-foreground">
            Estamos listos para atenderte y brindarte el mejor servicio para tu vehículo.
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contacto;
