import Container from "../components/Container";

const items = [
  { title: "Alimentación y abrigo", img: "/images/programa-alimentacion.png", desc: "Comida caliente, ropa y un lugar seguro." },
  { title: "Salud y sanación", img: "/images/programa-salud.png", desc: "Acompañamiento básico y terapias de bienestar." },
  { title: "Integración y escucha", img: "/images/programa-integracion.png", desc: "Espacios de vínculo y contención emocional." },
  { title: "Voluntariado", img: "/images/programa-voluntariado.png", desc: "Acompáñanos con tu tiempo y corazón." },
];

export default function Programas() {
  return (
    <section id="programas" className="relative isolate overflow-hidden">
      {/* Fondo místico compartido */}
      <div
        className="absolute inset-0 -z-20 bg-[url('/images/donar-bg.png')] bg-cover bg-center md:bg-fixed"
        style={{ backgroundPosition: "50% 12%" }}
      />
      <div className="absolute inset-0 -z-10 bg-emerald-950/70" />
      <div className="absolute inset-0 -z-10 bg-cascade opacity-35" />

      <Container>
        <div className="py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center">¿Qué hacemos?</h2>
          <p className="mt-3 max-w-2xl mx-auto text-center text-white/90">
            Acciones simples que transforman realidades.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.slice(0, 3).map((it) => (
              <div
                key={it.title}
                className="overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm shadow-sm group"
              >
                <div
                  className="h-44 bg-cover bg-center transition-transform duration-300 group-hover:scale-[1.03]"
                  style={{ backgroundImage: `url('${it.img}')` }}
                />
                <div className="p-5 text-white">
                  <h3 className="text-xl font-bold">{it.title}</h3>
                  <p className="mt-2 text-white/90">{it.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Tarjeta 4 opcional debajo */}
          <div className="mt-6 grid lg:grid-cols-3">
            {items[3] && (
              <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm shadow-sm group">
                <div
                  className="h-44 bg-cover bg-center transition-transform duration-300 group-hover:scale-[1.03]"
                  style={{ backgroundImage: `url('${items[3].img}')` }}
                />
                <div className="p-5 text-white">
                  <h3 className="text-xl font-bold">{items[3].title}</h3>
                  <p className="mt-2 text-white/90">{items[3].desc}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
