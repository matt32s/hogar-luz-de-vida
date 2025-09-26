import Container from "../components/Container";

export default function MisionVision() {
  const cards = [
    {
      title: "Nuestra Misión",
      text: "Brindar cuidado integral, alimento y acompañamiento humano a poblaciones vulnerables con amor y respeto.",
      img: "/images/mision.png",
    },
    {
      title: "Nuestra Visión",
      text: "Ser un faro de esperanza en Manizales: un lugar donde la vida vuelve a florecer.",
      img: "/images/vision.png",
    },
  ];

  return (
    <section id="mision" className="py-16 md:py-24 bg-gradient-to-b from-emerald-50/60 to-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((c) => (
            <article key={c.title} className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white/90 shadow transition-transform hover:-translate-y-1">
              <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url('${c.img}')` }} />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">{c.title}</h3>
                <p className="mt-3 text-gray-700">{c.text}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
