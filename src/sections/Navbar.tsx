import Container from "../components/Container";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Header: sin bordes (adiós “línea”), vidrio arriba y sólido con sombra al scrollear.
  const headerBase = "fixed top-0 inset-x-0 z-50 transition-all duration-300";
  const headerGlass = "bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60";
  const headerSolid = "bg-white shadow-sm";

  // Usamos padding vertical (py) para la altura y centrar el contenido.
  const headerSpace = scrolled ? "py-2" : "py-4";

  // Chips “burbuja”: grandes arriba, compactos al scrollear.
  const chipBase =
    "inline-flex items-center rounded-full font-semibold shadow-sm " +
    "transform-gpu transition hover:-translate-y-0.5 hover:shadow-md " +
    "ring-1 ring-emerald-200 text-emerald-800 bg-emerald-50 hover:bg-emerald-100 active:scale-95";
  const chipSize = scrolled ? "px-3.5 py-1.5 text-xs" : "px-5 py-2 text-sm";

  // CTA: también se compacta un poco al scrollear.
  const ctaSize = scrolled ? "px-4 py-2 text-sm" : "px-5 py-2.5 text-base";

  return (
    <header className={`${headerBase} ${headerSpace} ${scrolled ? headerSolid : headerGlass}`}>
      <Container>
        <nav className="flex items-center justify-between">
          {/* LOGO: grande arriba, un poco menor al scrollear */}
          <a href="#inicio" className="inline-flex items-center gap-2">
            <img
              src="/images/logo.png"
              alt="Hogar Luz de Vida"
              className={`transition-all duration-300 ${scrolled ? "h-10" : "h-12"} w-auto hover:scale-105`}
            />
            <span className="sr-only">Ir al inicio</span>
          </a>

          {/* MENÚ DESKTOP en “burbujas” */}
          <ul className="hidden md:flex items-center gap-3">
            <li><a className={`${chipBase} ${chipSize}`} href="#mision">Misión</a></li>
            <li><a className={`${chipBase} ${chipSize}`} href="#programas">Qué hacemos</a></li>
            <li><a className={`${chipBase} ${chipSize}`} href="#galeria">Galería</a></li>
            <li><a className={`${chipBase} ${chipSize}`} href="#contacto">Contacto</a></li>
          </ul>

          {/* CTA */}
          <a
            href="#donar"
            className={`hidden md:inline-flex rounded-full bg-emerald-700 text-white font-semibold shadow-md hover:bg-emerald-800 transform-gpu transition hover:-translate-y-0.5 ${ctaSize}`}
          >
            Apóyanos
          </a>
        </nav>
      </Container>
    </header>
  );
}
