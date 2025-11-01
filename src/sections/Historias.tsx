import Container from "@/components/Container";

// En vez de sólo strings, ahora cada imagen tiene:
// - src: ruta
// - pos: cómo la recortamos (object-position)
const imgs = [
  { src: "/images/galeria-1.png", pos: "object-center" },
  { src: "/images/galeria-2.png", pos: "object-[center_20%]" }, // sube un poquito el encuadre
  { src: "/images/galeria-3.png", pos: "object-[center_30%]" },
  { src: "/images/galeria-4.png", pos: "object-top" },          // caras arriba → prioriza top
  { src: "/images/galeria-5.png", pos: "object-center" },
  { src: "/images/galeria-6.png", pos: "object-[center_25%]" },
  { src: "/images/galeria-7.png", pos: "object-center" },
  { src: "/images/galeria-8.png", pos: "object-[center_30%]" },
];

// mostramos solo 6 abajo en home
const preview = imgs.slice(0, 6);

export default function Historias() {
  return (
    <section id="historias" className="py-16 md:py-24 bg-white">
      <Container>
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center">
          Historias en imágenes
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-center text-gray-700">
          Momentos reales que inspiran.
        </p>

        {/* Grid de miniaturas */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {preview.map((img, i) => (
            <figure
              key={i}
              className="overflow-hidden rounded-xl shadow-sm border border-gray-200 bg-white"
            >
              {/* 
                h-[150px] en móvil, h-[190px] en pantallas medianas→
                hace que todas las cards tengan altura estable.
                object-cover mantiene proporción.
                img.pos controla qué parte de la imagen se prioriza.
              */}
              <img
                src={img.src}
                alt="Historias Hogar Luz de Vida"
                loading="lazy"
                className={`w-full h-[150px] sm:h-[170px] md:h-[190px] object-cover ${img.pos} transition-transform duration-300 hover:scale-[1.03]`}
              />
            </figure>
          ))}
        </div>

        {/* Botón /galeria */}
        <div className="text-center mt-8">
          <a
            href="/galeria"
            className="inline-flex items-center justify-center rounded-full px-5 py-3 border border-emerald-700 text-emerald-900 font-semibold hover:bg-emerald-700 hover:text-white transition shadow-sm"
          >
            Ir a la galería
          </a>
        </div>
      </Container>
    </section>
  );
}
