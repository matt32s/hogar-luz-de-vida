import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Presentacion from "./sections/Presentacion";
import MisionVision from "./sections/MisionVision";
import Programas from "./sections/Programas";
// import Galeria from "./sections/Galeria"; // ⛔️ NO usar como sección en home
import DonarContacto from "./sections/DonarContacto";
import Historias from "./sections/Historias";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* === Imagen global fija === */}
      <img
        src="/images/donar-bg.png"
        alt="Fondo Hogar Luz de Vida"
        className="bg-global-fixed"
      />

      {/* pt-24 compensa la altura del header y z-10 pone el contenido encima del fondo */}
      <main className="relative z-10 pt-24">
        <Hero />
        <Presentacion />
        <MisionVision />
        <Programas />
        <Historias />
        <DonarContacto />
      </main>
    </div>
  );
}
