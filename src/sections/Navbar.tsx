import Container from "../components/Container";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerBase = "fixed top-0 inset-x-0 z-50 transition-all duration-300";
  const headerGlass = "bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60";
  const headerSolid = "bg-white shadow-sm";
  const headerSpace = scrolled ? "py-2" : "py-4";

  const chipBase =
    "inline-flex items-center rounded-full font-semibold shadow-sm transform-gpu transition " +
    "hover:-translate-y-0.5 hover:shadow-md ring-1 ring-emerald-200 text-emerald-800 " +
    "bg-emerald-50 hover:bg-emerald-100 active:scale-95";
  const chipSize = scrolled ? "px-3.5 py-1.5 text-xs" : "px-5 py-2 text-sm";
  const ctaSize = scrolled ? "px-4 py-2 text-sm" : "px-5 py-2.5 text-base";

  const NAV = [
    { label: "Misión", href: "#mision" },
    { label: "Qué hacemos", href: "#programas" },
    { label: "Galería", href: "/galeria" },// 👈 sección en diferente página
    { label: "Contacto", href: "#contacto" }, // si tuvieras sección de contacto separada
  ];

  return (
    <header className={`${headerBase} ${headerSpace} ${scrolled ? headerSolid : headerGlass}`}>
      <Container>
        <nav className="flex items-center justify-between">
          <a href="#inicio" className="inline-flex items-center gap-2">
            <img
              src="/images/logo.png"
              alt="Hogar Luz de Vida"
              className={`transition-all duration-300 ${scrolled ? "h-10" : "h-12"} w-auto hover:scale-105`}
            />
            <span className="sr-only">Ir al inicio</span>
          </a>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-3">
            {NAV.map((item) => (
              <li key={item.label}>
                <a className={`${chipBase} ${chipSize}`} href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#donar"
            className={`hidden md:inline-flex rounded-full bg-emerald-700 text-white font-semibold shadow-md hover:bg-emerald-800 transform-gpu transition hover:-translate-y-0.5 ${ctaSize}`}
          >
            Apóyanos
          </a>

          {/* Móvil: hamburguesa */}
          <button
            className="md:hidden inline-flex flex-col items-center justify-center w-10 h-10 rounded-md hover:bg-black/5"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Abrir menú"
            onClick={() => setOpen(!open)}
          >
            <span className={`h-0.5 w-6 bg-emerald-900 transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-emerald-900 my-1 transition ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`h-0.5 w-6 bg-emerald-900 transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </button>
        </nav>

        {/* Menú móvil */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${open ? "max-h-96" : "max-h-0"}`}
        >
          <nav className="px-4 pb-4 grid gap-1 bg-white/90 backdrop-blur rounded-b-xl shadow-md">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 border-b text-emerald-900 font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#donar"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-full bg-emerald-700 px-5 py-2.5 font-semibold text-white hover:bg-emerald-800 transition"
            >
              Apóyanos
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
