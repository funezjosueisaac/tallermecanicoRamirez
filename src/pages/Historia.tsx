import Layout from "@/components/Layout";
import tallerFoto from "@/assets/taller-foto.jpg";
import { Target, Eye, Heart } from "lucide-react";

const Historia = () => (
  <Layout>
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="font-heading text-4xl md:text-5xl text-center mb-12">
          Nuestra <span className="text-primary">Historia</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <img src={tallerFoto} alt="Taller Ramirez - Choluteca, Honduras" width={1280} height={720} loading="lazy" className="rounded-lg shadow-lg w-full object-cover" />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>Taller Ramirez nace como un emprendimiento familiar en Choluteca con el objetivo de ofrecer servicios mecánicos confiables a la comunidad.</p>
            <p>La idea del taller surge después de haber laborado en la empresa Grupo Granjas Marinas, donde se adquirieron conocimientos, disciplina y experiencia en el ámbito técnico.</p>
            <p>El proyecto inicia gracias al esfuerzo de <strong className="text-foreground">Carlos Ramírez</strong>, quien decide dar el primer paso alquilando un solar para comenzar con el taller. Luego se incorpora <strong className="text-foreground">Armando Aguilar</strong>, con experiencia previa en Misión Lázaro.</p>
            <p>Su unión permitió mejorar la calidad del servicio y formalizar el taller en <strong className="text-foreground">2019</strong>.</p>
          </div>
        </div>

        {/* Misión, Visión, Valores */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card rounded-lg p-8 border border-border text-center">
            <Target size={40} className="mx-auto mb-4 text-primary" />
            <h3 className="font-heading text-xl mb-3">Misión</h3>
            <p className="text-sm text-muted-foreground">Brindar servicios mecánicos automotrices de alta calidad.</p>
          </div>
          <div className="bg-card rounded-lg p-8 border border-border text-center">
            <Eye size={40} className="mx-auto mb-4 text-primary" />
            <h3 className="font-heading text-xl mb-3">Visión</h3>
            <p className="text-sm text-muted-foreground">Ser un taller reconocido por su excelencia en Choluteca.</p>
          </div>
          <div className="bg-card rounded-lg p-8 border border-border text-center">
            <Heart size={40} className="mx-auto mb-4 text-primary" />
            <h3 className="font-heading text-xl mb-3">Valores</h3>
            <p className="text-sm text-muted-foreground">Responsabilidad, Honestidad, Compromiso, Trabajo en equipo, Calidad.</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Historia;
