import Container from "../components/Container";

export default function DonarContacto() {
  return (
    <section id="contacto" className="py-16 md:py-24">
      <Container>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Contact Info (Email, WhatsApp, Location) */}
          <div className="rounded-2xl bg-[rgba(16,60,46,0.6)] backdrop-blur-md border border-white/20 shadow-xl p-10 text-white z-10 relative">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Contacto</h2>
            <p className="mt-4 text-white/80 text-lg leading-relaxed">
              ¿Quieres apoyar, donar o conocer más? <br className="hidden sm:block" /> Escríbenos:
            </p>

            <ul className="mt-8 space-y-6 text-base md:text-lg">
              {/* Email */}
              <li className="flex flex-col">
                <span className="font-semibold text-white/60">Email:</span>
                <a className="text-emerald-700 underline" href="mailto:contacto@hogarluzdevida.org">
                  contacto@hogarluzdevida.org
                </a>
              </li>

              {/* WhatsApp */}
              <li>
                <span className="font-semibold text-white/60">WhatsApp:</span>
                <a
                  className="text-emerald-700 underline"
                  href="https://wa.me/573116475186"
                  target="_blank"
                  rel="noreferrer"
                >
                  chat +57 311 647 5186
                </a>
              </li>

              {/* Location */}
              <li>
                <span className="font-semibold text-white/60">Ubicación:</span> Manizales, Caldas – Colombia
              </li>
            </ul>
          </div>

          {/* Right Contact Form */}
          <form
            className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
            action="mailto:contacto@hogarluzdevida.org"
            method="post"
            encType="text/plain"
          >
            <label className="block text-sm font-medium text-gray-700">Nombre</label>
            <input
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
              name="nombre"
              required
            />

            <label className="block text-sm font-medium text-gray-700 mt-4">Correo electrónico</label>
            <input
              type="email"
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
              name="email"
              required
            />

            <label className="block text-sm font-medium text-gray-700 mt-4">Mensaje</label>
            <textarea
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
              name="mensaje"
              rows={4}
              required
            />

            <button className="mt-6 w-full rounded-lg bg-emerald-700 text-white px-4 py-2 font-semibold hover:bg-emerald-800">
              Enviar mensaje
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
