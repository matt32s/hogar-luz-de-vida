import Container from "../components/Container";

export default function DonarContacto() {
  return (
    <section id="donar" className="cascade-wrap relative isolate overflow-hidden">
      {/* Capas de luz sobre el fondo global fijo */}
      <div className="cascade-layer" />
      <div className="cascade-tint" />

      <Container>
        {/* padding grande abajo para que el logo flotante no tape nada */}
        <div className="relative z-10 py-24 md:py-36 pb-44 md:pb-48">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* IZQUIERDA: texto + CTA + datos de contacto */}
            <div className="text-center md:text-left text-white">
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
                Tu ayuda enciende esta Luz
              </h2>

              <p className="mt-4 text-lg text-white/90 max-w-lg mx-auto md:mx-0">
                Cada Aporte se transforma en Alimento, Abrigo y Esperanza.
                Gracias por sumar tu Corazón.
              </p>

              {/* Botón donar (placeholder, cámbialo luego si vas a usar una pasarela) */}
              <a
                href="#"
                className="mt-8 inline-flex items-center justify-center rounded-xl bg-white text-emerald-900 font-semibold shadow-lg px-6 py-3 text-lg hover:bg-emerald-50 hover:shadow-xl transition"
              >
                Donar ahora
              </a>

              {/* Datos de contacto */}
              <ul className="mt-6 space-y-3 text-white/90 text-left inline-block md:inline-block">
                {/* EMAIL */}
                <li className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                  <span className="font-semibold text-white">Email:</span>
                  <a
                    className="text-white/90 hover:text-white underline-offset-2 hover:underline"
                    href="mailto:contacto@hogarluzdevida.org"
                  >
                    contacto@hogarluzdevida.org
                  </a>
                </li>

                {/* WHATSAPP como BOTÓN cliqueable */}
                <li className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="font-semibold text-white">WhatsApp:</span>

                  <a
                    href="https://wa.me/573116475186"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-md hover:shadow-lg transition"
                  >
                    {/* icono simple, si no lo quieres bórralo */}
                    <span
                      className="text-white text-base leading-none"
                      aria-hidden="true"
                    >
                      💬
                    </span>
                    <span>+57 311 647 5186</span>
                  </a>
                </li>

                {/* UBICACIÓN */}
                <li className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                  <span className="font-semibold text-white">Ubicación:</span>
                  <span>Manizales, Caldas – Colombia</span>
                </li>
              </ul>
            </div>

            {/* DERECHA: formulario vidrio */}
            <form
              className="bg-white/10 backdrop-blur-md border border-white/25 rounded-2xl p-6 shadow-2xl text-white"
              action="mailto:contacto@hogarluzdevida.org"
              method="post"
              encType="text/plain"
            >
              {/* Nombre */}
              <label
                htmlFor="nombre"
                className="block text-sm font-medium"
              >
                Nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                required
                className="mt-1 w-full rounded-lg border border-white/30 bg-white/10 px-3 py-2 text-white placeholder-white/70
                           focus:outline-none focus:ring-2 focus:ring-white/70"
                placeholder="Tu nombre"
              />

              {/* Email */}
              <label
                htmlFor="email"
                className="block text-sm font-medium mt-4"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="mt-1 w-full rounded-lg border border-white/30 bg-white/10 px-3 py-2 text-white placeholder-white/70
                           focus:outline-none focus:ring-2 focus:ring-white/70"
                placeholder="tucorreo@ejemplo.com"
              />

              {/* Mensaje */}
              <label
                htmlFor="mensaje"
                className="block text-sm font-medium mt-4"
              >
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                required
                className="mt-1 w-full rounded-lg border border-white/30 bg-white/10 px-3 py-2 text-white placeholder-white/70
                           focus:outline-none focus:ring-2 focus:ring-white/70"
                placeholder="¿Cómo te gustaría apoyar?"
              />

              {/* Botón enviar */}
              <button
                className="mt-6 w-full rounded-lg bg-emerald-600 text-white px-4 py-3 font-semibold text-lg shadow-lg hover:bg-emerald-500 hover:shadow-xl transition"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* LOGO flotante y copyright */}
          <div className="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-[50%] text-center">
            <a
              href="#inicio"
              className="inline-flex justify-center items-center"
            >
              <img
                src="/images/logo.png"
                alt="Hogar Luz de Vida"
                className="h-14 w-auto mx-auto drop-shadow-xl opacity-90 transition-transform duration-300 hover:scale-110 hover:opacity-100"
              />
            </a>

            <p className="mt-3 text-sm text-white/70">
              © 2025 Hogar Luz de Vida – Manizales, Colombia
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
