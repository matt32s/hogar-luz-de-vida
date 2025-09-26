import Container from "../components/Container";

export default function Presentacion() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Fondo místico compartido */}
      <div
        className="absolute inset-0 -z-20 bg-[url('/images/donar-bg.png')] bg-cover bg-center md:bg-fixed"
        style={{ backgroundPosition: "50% 10%" }}
      />
      <div className="absolute inset-0 -z-10 bg-emerald-950/70" />
      <div className="absolute inset-0 -z-10 bg-cascade opacity-35" />

      <Container>
        <div className="py-16 md:py-24">
          <div className="grid md:grid-cols-[1.1fr_1fr] items-center gap-10">
            <div className="text-white">
              <p className="text-base font-semibold text-emerald-200">Quiénes somos</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">
                Cuidado, dignidad y comunidad.
              </h2>
              <p className="mt-4 text-white/90 leading-relaxed">
                Creemos en la dignidad de cada persona. Ofrecemos un hogar de paso,
                alimentación, abrigo y acompañamiento humano para quienes lo necesitan.
              </p>
            </div>

            {/* Imagen de apoyo: la dejamos con vidrio suave */}
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden border border-white/20 bg-white/5 backdrop-blur-sm shadow-lg">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/presentacion.png')" }}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
