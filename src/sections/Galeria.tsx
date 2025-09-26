import Container from "../components/Container";

const imgs = [
  "/images/galeria-1.png","/images/galeria-2.png","/images/galeria-3.png","/images/galeria-4.png",
  "/images/galeria-5.png","/images/galeria-6.png","/images/galeria-7.png","/images/galeria-8.png",
];

export default function Galeria() {
  return (
    <section id="galeria" className="py-16 md:py-24 bg-white">
      <Container>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center">Historias en imágenes</h2>
        <p className="mt-3 max-w-2xl mx-auto text-center text-gray-700">
          Momentos reales que inspiran.
        </p>

        <div className="mt-10 columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {imgs.map((src) => (
            <figure key={src} className="mb-4 overflow-hidden rounded-xl break-inside-avoid shadow-sm">
              <img src={src} alt="Galería Hogar Luz de Vida" loading="lazy" className="w-full h-auto transition-transform duration-300 hover:scale-[1.03]" />
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
