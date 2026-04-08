import Layout from "@/components/Layout";
import { Calendar } from "lucide-react";
import motorImg from "@/assets/motor-desarmado.jpg";

const posts = [
  {
    title: "Importancia del cambio de aceite",
    date: "15 de marzo, 2026",
    image: null,
    content:
      "El cambio de aceite es fundamental para el buen funcionamiento del motor. Reduce desgaste, evita sobrecalentamiento y prolonga la vida útil del vehículo. Se recomienda realizar el cambio cada 5,000 a 10,000 kilómetros según el fabricante del vehículo. Un aceite limpio permite que todas las piezas internas del motor se muevan con menor fricción, lo que se traduce en mejor rendimiento y menor consumo de combustible.",
  },
  {
    title: "¿Cómo cuidar tu vehículo?",
    date: "2 de abril, 2026",
    image: motorImg,
    imageCaption: "Desarmando un motor en Taller Ramirez",
    content:
      "Es necesario realizar mantenimientos periódicos, revisar niveles de fluidos y no sobrecargar el motor. Un taller de confianza ayuda a prevenir fallas mayores. Cuando un motor presenta fallas graves, es necesario desarmarlo por completo para inspeccionar cada pieza. Revisa regularmente la presión de las llantas, el estado de las luces, y no ignores ruidos o vibraciones inusuales. La prevención siempre será más económica que la reparación de una avería grave.",
  },
];

const Blog = () => (
  <Layout>
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="font-heading text-4xl md:text-5xl text-center mb-12">
          Nuestro <span className="text-primary">Blog</span>
        </h1>

        <div className="space-y-10">
          {posts.map((post) => (
            <article key={post.title} className="bg-card border border-border rounded-lg overflow-hidden">
              {post.image && (
                <div>
                  <img src={post.image} alt={post.imageCaption || post.title} className="w-full h-64 object-cover" loading="lazy" />
                  {post.imageCaption && (
                    <p className="text-xs text-muted-foreground px-4 py-2 bg-secondary/50">{post.imageCaption}</p>
                  )}
                </div>
              )}
              <div className="p-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar size={16} className="text-primary" />
                  {post.date}
                </div>
                <h2 className="font-heading text-2xl mb-4">{post.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{post.content}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Blog;
