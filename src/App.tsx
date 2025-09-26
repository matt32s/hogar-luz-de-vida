import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Presentacion from "./sections/Presentacion";
import MisionVision from "./sections/MisionVision";
import Programas from "./sections/Programas";
// ⛔️ QUITAMOS la importación de Galeria como sección
// import Galeria from "./sections/Galeria";
import DonarContacto from "./sections/DonarContacto";
import Historias from "./sections/Historias"; // ojo: ahora está en src/sections

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* pt-24 compensa la altura del header */}
      <main className="pt-24">
        <Hero />
        <Presentacion />
        <MisionVision />
        <Programas />
        {/* Solo Historias (miniaturas + botón) */}
        <Historias />
        <DonarContacto />
      </main>
    </div>
  );
}
