import { useSearchParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import {
  Droplets, Filter, Disc, Search, Settings, Sparkles, Wrench, Cpu, Battery,
  Zap, Flame, CarFront, Cog, CircleDot, ShieldCheck, Gauge, Thermometer,
  Fan, RefreshCw, Waves, ClipboardCheck, Monitor, Pipette, RotateCcw, ArrowLeft,
} from "lucide-react";

type Servicio = { icon: React.ElementType; name: string; desc: string };

const categorias: Record<string, { titulo: string; descripcion: string; servicios: Servicio[] }> = {
  "mantenimiento-general": {
    titulo: "Mantenimiento General",
    descripcion: "Revisión completa de tu vehículo para mantenerlo en óptimas condiciones. Incluye inspecciones periódicas, ajustes y servicios preventivos.",
    servicios: [
      { icon: ClipboardCheck, name: "Mantenimiento preventivo", desc: "Inspección periódica completa para prevenir fallas mecánicas y prolongar la vida útil de tu vehículo." },
      { icon: Settings, name: "Afinamiento de motor", desc: "Ajuste completo del motor para mejorar rendimiento, consumo de combustible y reducir emisiones." },
      { icon: Flame, name: "Cambio de bujías", desc: "Reemplazo de bujías desgastadas para asegurar un encendido óptimo y mejor combustión." },
      { icon: CarFront, name: "Revisión de suspensión", desc: "Inspección de amortiguadores, resortes y componentes de suspensión para mayor comodidad y seguridad." },
      { icon: Battery, name: "Revisión de batería", desc: "Prueba de carga y estado de batería, limpieza de terminales y verificación del sistema de arranque." },
      { icon: Filter, name: "Cambio de filtros", desc: "Reemplazo de filtros de aire, aceite, combustible y cabina para proteger el motor y mejorar la calidad del aire." },
    ],
  },
  "cambio-de-aceite": {
    titulo: "Cambio de Aceite",
    descripcion: "Aceites de alta calidad para tu motor. El cambio de aceite regular reduce el desgaste, evita sobrecalentamiento y prolonga la vida útil del vehículo.",
    servicios: [
      { icon: Droplets, name: "Cambio de aceite", desc: "Drenado completo del aceite usado y reemplazo con aceite de alta calidad según especificaciones del fabricante." },
      { icon: Filter, name: "Cambio de filtro de aceite", desc: "Reemplazo del filtro de aceite para garantizar una lubricación limpia y eficiente del motor." },
      { icon: Sparkles, name: "Limpieza de inyectores", desc: "Limpieza profesional del sistema de inyección para mejorar atomización del combustible y rendimiento." },
      { icon: Pipette, name: "Reparación de bomba de aceite", desc: "Diagnóstico y reparación de la bomba de aceite para asegurar presión y flujo adecuado de lubricación." },
      { icon: Thermometer, name: "Revisión de radiador", desc: "Inspección de niveles, fugas y estado general del radiador para prevenir sobrecalentamiento." },
      { icon: Waves, name: "Cambio de bomba de agua", desc: "Reemplazo de bomba de agua defectuosa para mantener la circulación correcta del refrigerante." },
      { icon: RefreshCw, name: "Limpieza de sistema de enfriamiento", desc: "Flush completo del sistema de enfriamiento para eliminar sedimentos y corrosión acumulada." },
      { icon: RotateCcw, name: "Cambio de coolant", desc: "Drenado y reemplazo del refrigerante para proteger el motor contra sobrecalentamiento y corrosión." },
    ],
  },
  "reparacion-de-frenos": {
    titulo: "Reparación de Frenos",
    descripcion: "Seguridad garantizada en cada frenado. Revisamos y reparamos todo el sistema de frenos para que viajes con total confianza.",
    servicios: [
      { icon: Search, name: "Revisión de frenos", desc: "Inspección completa de pastillas, discos, tambores y líneas de freno para detectar desgaste o daños." },
      { icon: Disc, name: "Reparación de frenos", desc: "Reemplazo de pastillas, rectificación de discos y reparación integral del sistema de frenado." },
      { icon: CarFront, name: "Revisión de suspensión", desc: "Inspección del sistema de suspensión que afecta la estabilidad al frenar y la seguridad general." },
      { icon: Zap, name: "Sistema eléctrico de frenos", desc: "Diagnóstico y reparación de sensores ABS, luces de freno y componentes eléctricos del sistema." },
    ],
  },
  "diagnostico-automotriz": {
    titulo: "Diagnóstico Automotriz",
    descripcion: "Escaneo computarizado profesional para detectar fallas con precisión. Utilizamos equipos de última generación para un diagnóstico completo.",
    servicios: [
      { icon: Monitor, name: "Diagnóstico automotriz", desc: "Evaluación integral del vehículo con equipo profesional para identificar cualquier falla mecánica o electrónica." },
      { icon: Cpu, name: "Escaneo computarizado", desc: "Lectura de códigos de error del computador del vehículo para diagnóstico preciso de fallas." },
      { icon: Zap, name: "Sistema eléctrico", desc: "Revisión completa del sistema eléctrico: alternador, cableado, fusibles y componentes electrónicos." },
      { icon: Wrench, name: "Reparación de motor", desc: "Diagnóstico y reparación de fallas internas del motor con mano de obra especializada." },
      { icon: Cog, name: "Overhaul de motor", desc: "Reconstrucción completa del motor: desmontaje, limpieza, reemplazo de piezas y reensamblaje." },
      { icon: CircleDot, name: "Rectificación de motor", desc: "Mecanizado de precisión de cilindros, cigüeñal y culata para restaurar dimensiones originales." },
      { icon: ShieldCheck, name: "Reparación de culata", desc: "Desmontaje, inspección y reparación de la culata incluyendo cambio de empaques y válvulas." },
      { icon: Gauge, name: "Cambio de pistones y anillos", desc: "Reemplazo de pistones y anillos desgastados para restaurar compresión y rendimiento del motor." },
      { icon: Fan, name: "Reparación de radiador", desc: "Soldadura, limpieza y restauración del radiador para corregir fugas y mejorar enfriamiento." },
    ],
  },
};

const todosLosServicios = Object.values(categorias).flatMap((c) => c.servicios);

const Servicios = () => {
  const [params] = useSearchParams();
  const cat = params.get("categoria");
  const categoriaActual = cat && categorias[cat] ? categorias[cat] : null;

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          {categoriaActual ? (
            <>
              <Link
                to="/servicios"
                className="inline-flex items-center gap-2 text-primary hover:underline mb-6 font-heading text-sm"
              >
                <ArrowLeft size={16} /> Ver todos los servicios
              </Link>
              <h1 className="font-heading text-4xl md:text-5xl mb-4">
                <span className="text-primary">{categoriaActual.titulo}</span>
              </h1>
              <p className="text-muted-foreground mb-12 max-w-2xl">
                {categoriaActual.descripcion}
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoriaActual.servicios.map((s) => (
                  <div
                    key={s.name}
                    className="bg-card border border-border rounded-lg p-6 hover:border-primary hover:shadow-md transition-all group"
                  >
                    <div className="bg-primary/10 p-3 rounded-lg inline-block group-hover:bg-primary/20 transition-colors mb-4">
                      <s.icon size={28} className="text-primary" />
                    </div>
                    <h3 className="font-heading text-lg mb-2">{s.name}</h3>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <h1 className="font-heading text-4xl md:text-5xl text-center mb-4">
                Nuestros <span className="text-primary">Servicios</span>
              </h1>
              <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
                Selecciona una categoría para ver los servicios disponibles, o explora todo nuestro catálogo.
              </p>

              {/* Categorías */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {Object.entries(categorias).map(([key, val]) => {
                  const Icon = val.servicios[0].icon;
                  return (
                    <Link
                      key={key}
                      to={`/servicios?categoria=${key}`}
                      className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary hover:shadow-lg transition-all group"
                    >
                      <Icon size={40} className="mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                      <h3 className="font-heading text-lg mb-2">{val.titulo}</h3>
                      <p className="text-sm text-muted-foreground">{val.servicios.length} servicios</p>
                      <span className="inline-block mt-3 text-xs font-heading text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Ver servicios →
                      </span>
                    </Link>
                  );
                })}
              </div>

              {/* Todos */}
              <h2 className="font-heading text-2xl md:text-3xl text-center mb-8">
                Catálogo <span className="text-primary">Completo</span>
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {todosLosServicios.map((s, i) => (
                  <div
                    key={`${s.name}-${i}`}
                    className="bg-card border border-border rounded-lg p-5 flex items-center gap-4 hover:border-primary hover:shadow-md transition-all group"
                  >
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <s.icon size={24} className="text-primary" />
                    </div>
                    <span className="font-heading text-sm">{s.name}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Servicios;
