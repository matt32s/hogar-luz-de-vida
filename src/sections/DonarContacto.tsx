import Container from "../components/Container";

export default function Contacto() {
  return (
    <section id="contacto" className="py-16 md:py-24 relative">
      <Container>
        <div className="grid gap-8 md:grid-cols-2">
          {/* === Left Contact Info (Email, WhatsApp, Location) === */}
          <div
            className={`
              rounded-2xl
              bg-[rgba(16,60,46,0.6)]   /* Green translucent background */
              backdrop-blur-md           /* Glass effect */
              border border-white/20     /* Subtle border */
              shadow-xl p-8 md:p-10
              text-white
              z-10 relative
            `}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Contacto
            </h2>

            <p className="mt-4 text-white/80 text-lg leading-relaxed">
              ¿Quieres apoyar, donar o conocer más?
              <br className="hidden sm:block" />
              Escríbenos:
            </p>

            <ul className="mt-8 space-y-6 text-base md:text-lg">
              {/* Email */}
              <li className="flex flex-col">
                <span className="font-semibold text-white/60">
                  Correo electrónico:
                </span>
                <a
                  className="text-emerald-200 hover:text-emerald-100 underline underline-offset-2"
                  href="mailto:contacto@hogarluzdevida.org"
                >
                  contacto@hogarluzdevida.org
                </a>
              </li>

              {/* WhatsApp */}
              <li className="flex flex-col">
                <span className="font-semibold text-white/60">
                  WhatsApp:
                </span>
                <a
                  href="https://wa.me/573116475186"
                  target="_blank"
                  rel="noreferrer"
                  className={`
                    inline-flex items-center gap-2
                    bg-emerald-700 hover:bg-emerald-600
                    text-white font-semibold
                    rounded-full px-4 py-3
                    shadow-md w-fit
                    ring-1 ring-white/20
                    transition
                  `}
                >
                  <span
                    className={`
                      inline-flex h-5 min-w-[2.5rem] items-center justify-center
                      rounded-full bg-white/20 ring-1 ring-white/30
                      text-[13px] leading-none font-medium
                      px-2
                    `}
                  >
                    chat
                  </span>
                  <span className="tracking-tight">+57 311 647 5186</span>
                </a>
              </li>

              {/* Location */}
              <li className="flex flex-col">
                <span className="font-semibold text-white/60">
                  Ubicación:
                </span>
                <span className="text-white/80">
                  Manizales, Caldas – Colombia
                </span>
              </li>
            </ul>
          </div>

          {/* === Right Form (Message) === */}
          <form
            className={`
              rounded-2xl
              bg-[rgba(16,60,46,0.6)]
              backdrop-blur-md
              border border-white/20
              shadow-xl p-8 md:p-10
              text-white
              z-10 relative
            `}
            onSubmit={(e) => {
              e.preventDefault();
              // Handle form submission
            }}
          >
            {/* Name */}
            <label className="block text-sm font-medium text-white/80">
              Nombre
            </label>
            <input
              className={`
                mt-2 w-full rounded-lg
                bg-[rgba(16,60,46,0.6)]
                border border-emerald-300/20
                text-white
                placeholder-white/50
                px-3 py-2 text-base
                shadow-lg outline-none
                focus:ring-2 focus:ring-emerald-400/40
                focus:border-emerald-300/40
              `}
              name="nombre"
              placeholder="Tu nombre"
              required
            />

            {/* Email */}
            <label className="block text-sm font-medium text-white/80 mt-6">
              Correo electrónico
            </label>
            <input
              type="email"
              className={`
                mt-2 w-full rounded-lg
                bg-[rgba(16,60,46,0.6)]
                border border-emerald-300/20
                text-white
                placeholder-white/50
                px-3 py-2 text-base
                shadow-lg outline-none
                focus:ring-2 focus:ring-emerald-400/40
                focus:border-emerald-300/40
              `}
              name="email"
              placeholder="tucorreo@ejemplo.com"
              required
            />

            {/* Message */}
            <label className="block text-sm font-medium text-white/80 mt-6">
              Mensaje
            </label>
            <textarea
              className={`
                mt-2 w-full rounded-lg
                bg-[rgba(16,60,46,0.6)]
                border border-emerald-300/20
                text-white
                placeholder-white/50
                px-3 py-2 text-base
                shadow-lg outline-none
                focus:ring-2 focus:ring-emerald-400/40
                focus:border-emerald-300/40
                min-h-[140px]
                resize-vertical
              `}
              name="mensaje"
              placeholder="¿Cómo te gustaría apoyar?"
              required
            />

            {/* Submit Button */}
            <button
              className={`
                mt-8 w-full
                rounded-lg
                bg-emerald-700 hover:bg-emerald-600
                text-white font-semibold
                px-4 py-3 text-lg
                shadow-lg
                ring-1 ring-white/20
                transition
              `}
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
