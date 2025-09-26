import { useEffect, useState } from "react";
import Container from "../components/Container";
import Button from "../components/Button";

const slides = [
  "/images/hero-1.png",
  "/images/hero-2.png",
  "/images/hero-3.png",
  "/images/hero-4.png", // si no la tienes, bórrala del array
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="inicio"
      className="relative isolate min-h-[90vh] flex items-center"
    >
      {/* Fondo con carrusel */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {slides.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1200ms] will-change-opacity ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url('${src}')`,
              transform: i === index ? "scale(1.03)" : "scale(1.02)",
              transitionProperty: "opacity, transform",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/45" /> {/* overlay */}
      </div>

      <Container>
        {/* 👇 Ajusté padding superior para compensar el navbar grande */}
        <div className="pt-36 pb-20 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow">
            Un hogar de luz y esperanza.
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            Acompañamos a comunidades indígenas y personas sin hogar en
            Manizales con techo, alimento y sanación.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
      <Button
  asLink
  href="#donar"
  variant="inverse"
  className="hover:scale-[1.03] active:scale-95"
>
  Quiero Donar
</Button>

            <a
              href="#mision"
              className="font-semibold underline underline-offset-4 hover:text-emerald-200"
            >
              Conocer más
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
