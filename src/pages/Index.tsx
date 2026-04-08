import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-workshop.jpg";
import { Wrench, Droplets, Disc, Monitor } from "lucide-react";

const services = [
  { icon: Wrench, title: "Mantenimiento general", desc: "Revisión completa de tu vehículo", cat: "mantenimiento-general" },
  { icon: Droplets, title: "Cambio de aceite", desc: "Aceites de alta calidad para tu motor", cat: "cambio-de-aceite" },
  { icon: Disc, title: "Reparación de frenos", desc: "Seguridad garantizada en cada frenado", cat: "reparacion-de-frenos" },
  { icon: Monitor, title: "Diagnóstico automotriz", desc: "Escaneo computarizado profesional", cat: "diagnostico-automotriz" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <img src={heroImg} alt="Taller Ramirez interior" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-secondary/70" />
      <div className="relative z-10 text-center px-4 animate-fade-in">
        <h1 className="font-heading text-5xl md:text-7xl text-primary-foreground mb-4">
          Bienvenidos a <span className="text-primary">Taller Ramirez</span>
        </h1>
        <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
          Taller mecánico automotriz en Barrio La Providencia, Choluteca, Honduras.
          Responsabilidad, honestidad y calidad.
        </p>
      </div>
    </section>

    {/* Servicios principales */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-12">
          Servicios <span className="text-primary">Principales</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <Link
              to={`/servicios?categoria=${s.cat}`}
              key={s.title}
              className="bg-background rounded-lg p-6 text-center shadow hover:shadow-lg hover:border-primary transition-all border border-border group cursor-pointer"
            >
              <s.icon size={40} className="mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="font-heading text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
              <span className="inline-block mt-3 text-xs font-heading text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Ver todos los servicios →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Datos del estudiante */}
    <section className="py-16 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-2xl mb-6">Datos del Estudiante</h2>
        <div className="inline-block bg-accent/50 rounded-lg p-6 text-left space-y-1">
          <p><span className="font-semibold">Nombre:</span> Josue Isaac Funes Herrea</p>
          <p><span className="font-semibold">Número de cuenta:</span> 202520110066</p>
          <p><span className="font-semibold">Clase:</span> Informática Aplicada</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
