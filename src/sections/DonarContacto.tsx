import Container from "../components/Container";

export default function DonarContacto() {
  return (
    <section id="donar" className="cascade-wrap relative isolate overflow-hidden">
      {/* Fondo (compatible móvil + desktop) */}
      <img src="/images/donar-bg.png" alt="" className="bg-img" />
      {/* Oscurecer un poco para mejor contraste de texto (puedes subir/bajar el /70) */}
      <div className="absolute inset-0 z-0 bg-emerald-950/70" />

      <Container>
        <div className="relative z-10 py-24 md:py-36 pb-32">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Columna izquierda */}
            <div className="text-center md:text-left text-white">
              <h2 className="text-3xl md:text-4xl font-extrabold">
                Tu ayuda enciende esta luz
              </h2>
              <p className="mt-3 text-white/90 max-w-xl md:max-w-none">
                Cada aporte se transforma en alimento, abrigo y esperanza.
                Gracias por sumar tu corazón.
              </p>

              <div className="mt-8">
                <a
                  href="https://tu-plataforma-de-donaciones.com/hogar-luz-de-vida"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Ir a Donar ahora"
                  className="inline-flex items-center rounded-full px-7 py-3 text-base font-semibold
                             bg-white/90 text-emerald-800 shadow-lg ring-2 ring-white/60 backdrop-blur
                             transition transform-gpu hover:scale-105 hover:shadow-xl active:scale-95"
                >
                  Donar ahora
                </a>
              </div>

              <ul className="mt-6 space-y-1 text-white/90">
                <li><strong>Email:</strong> contacto@hogarluzdevida.org</li>
                <li><strong>WhatsApp:</strong> +57 300 111 22 33</li>
                <li><strong>Ubicación:</strong> Manizales, Caldas – Colombia</li>
              </ul>
            </div>

            {/* Columna derecha: formulario */}
            <form
              className="bg-white/10 backdrop-blur-md border border-white/25 rounded-2xl p-6 shadow-2xl text-white"
              action="mailto:contacto@hogarluzdevida.org"
              method="post"
              encType="text/plain"
            >
              <label htmlFor="nombre" className="block text-sm font-medium">Nombre</label>
              <input
                id="nombre"
                name="nombre"
                required
                className="mt-1 w-full rounded-lg border border-white/30 bg-white/10 px-3 py-2 text-white placeholder-white/70
                           focus:outline-none focus:ring-2 focus:ring-white/70"
                placeholder="Tu nombre"
              />

              <label htmlFor="email" className="block text-sm font-medium mt-4">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="mt-1 w-full rounded-lg border border-white/30 bg-white/10 px-3 py-2 text-white placeholder-white/70
                           focus:outline-none focus:ring-2 focus:ring-white/70"
                placeholder="tucorreo@ejemplo.com"
              />

              <label htmlFor="mensaje" className="block text-sm font-medium mt-4">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                required
                className="mt-1 w-full rounded-lg border border-white/30 bg-white/10 px-3 py-2 text-white placeholder-white/70
                           focus:outline-none focus:ring-2 focus:ring-white/70"
                placeholder="¿Cómo te gustaría apoyar?"
              />

              <button
                className="mt-6 w-full rounded-full bg-emerald-600 px-4 py-2.5 font-semibold text-white
                           shadow-md hover:bg-emerald-500 hover:shadow-lg transition"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </Container>

      {/* Logo flotante con link al inicio */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-12 text-center">
        <a href="#inicio">
          <img
            src="/images/logo.png"
            alt="Hogar Luz de Vida"
            className="h-14 w-auto mx-auto drop-shadow-xl opacity-95 transition-transform duration-300 hover:scale-110 hover:opacity-100"
          />
        </a>
        <p className="mt-3 text-sm text-white/70">
          © 2025 Hogar Luz de Vida – Manizales, Colombia
        </p>
      </div>
    </section>
  );
}
