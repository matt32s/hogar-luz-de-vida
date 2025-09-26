import Container from "../components/Container";

const imgs = [
  "/images/galeria-1.png","/images/galeria-2.png","/images/galeria-3.png",
  "/images/galeria-4.png","/images/galeria-5.png","/images/galeria-6.png",
  "/images/galeria-7.png","/images/galeria-8.png",
];

export default function Historias() {
  const preview = imgs.slice(0, 6); // miniaturas en home
  return (
    <section id="historias" className="py-16 md:py-24 bg-white">
      <Container>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center">
          Historias en imágenes
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-center text-gray-700">
          Momentos reales que inspiran.
        </p>

        {/* 2 col en móvil, 3 en tablet, 4 en desktop */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {preview.map((src) => (
            <figure key={src} className="aspect-[4/3] overflow-hidden rounded-xl shadow-sm">
              <img
                src={src}
                alt="Historias Hogar Luz de Vida"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]"
              />
            </figure>
          ))}
        </div>

        {/* Botón a la galería completa */}
        <div className="text-center mt-8">
          <a
            href="/galeria"
            className="inline-flex items-center justify-center rounded-full px-5 py-3 border border-emerald-700 text-emerald-900 font-semibold hover:bg-emerald-700 hover:text-white transition"
          >
            Ir a la galería
          </a>
        </div>
      </Container>
    </section>
  );
}
