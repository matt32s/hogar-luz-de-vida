import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Presentacion from "./sections/Presentacion";
import MisionVision from "./sections/MisionVision";
import Programas from "./sections/Programas";
import Galeria from "./sections/Galeria";
import DonarContacto from "./sections/DonarContacto";


export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* pt-24 compensa la altura del header: 96px aprox */}
      <main className="pt-24">
        <Hero />
        <Presentacion />
        <MisionVision />
        <Programas />
        <Galeria />
        <DonarContacto />
      </main>
    </div>
  );
}

