// src/GaleriaPage.tsx
import Container from "../components/Container";

const images = [
  "/images/galeria-1.png","/images/galeria-2.png","/images/galeria-3.png",
  "/images/galeria-4.png","/images/galeria-5.png","/images/galeria-6.png",
  "/images/galeria-7.png","/images/galeria-8.png",
  "/images/galeria-9.png","/images/galeria-10.png", // 👈 nuevas
];

export default function GaleriaPage() {
  return (
    <main className="pt-24 pb-20 bg-white">
      <Container>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center">Galería</h1>
        <p className="mt-3 text-center text-gray-700">Nuestra labor en imágenes.</p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((src) => (
            <figure key={src} className="aspect-[4/3] overflow-hidden rounded-xl shadow-sm">
              <img
                src={src}
                alt="Galería Hogar Luz de Vida"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </figure>
          ))}
        </div>
      </Container>
    </main>
  );
}
