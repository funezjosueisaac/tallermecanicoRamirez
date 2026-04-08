import { Phone, MapPin, Clock } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground">
    <div className="container mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
      <div>
        <h3 className="font-heading text-lg text-primary mb-3">Taller Ramirez</h3>
        <p className="text-sm text-muted">
          Servicios mecánicos automotrices de confianza en Choluteca, Honduras.
        </p>
      </div>
      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Choluteca, Honduras</div>
        <div className="flex items-center gap-2"><Phone size={16} className="text-primary" /> 9946-9775 / 9989-6450</div>
        <div className="flex items-center gap-2"><Clock size={16} className="text-primary" /> Lun–Sáb 8:00 AM – 5:00 PM</div>
      </div>
      <div className="text-sm text-muted">
        <p>Proyecto académico de:</p>
        <p className="text-secondary-foreground font-semibold">Josue Isaac Funes Herrea</p>
        <p>Cuenta: 202520110066</p>
        <p>Informática Aplicada</p>
      </div>
    </div>
    <div className="border-t border-muted-foreground/20 text-center py-4 text-xs text-muted">
      © 2026 Taller Ramirez – Todos los derechos reservados
    </div>
  </footer>
);

export default Footer;
