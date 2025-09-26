import Container from "../components/Container";

export default function Contacto() {
  return (
    <section id="contacto" className="py-16 md:py-24">
      <Container>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Contacto</h2>
            <p className="mt-4 text-gray-700">¿Quieres apoyar, donar o conocer más? Escríbenos:</p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li><strong>Email:</strong> <a className="text-emerald-700 underline" href="mailto:contacto@hogarluzdevida.org">contacto@hogarluzdevida.org</a></li>
              <li><strong>WhatsApp:</strong> <a className="text-emerald-700 underline" href="https://wa.me/573001112233" target="_blank" rel="noreferrer">+57 300 111 22 33</a></li>
              <li><strong>Ubicación:</strong> Manizales, Caldas – Colombia</li>
            </ul>
          </div>

          <form className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm" action="mailto:contacto@hogarluzdevida.org" method="post" encType="text/plain">
            <label className="block text-sm font-medium text-gray-700">Nombre</label>
            <input className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2" name="nombre" required />

            <label className="block text-sm font-medium text-gray-700 mt-4">Email</label>
            <input type="email" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2" name="email" required />

            <label className="block text-sm font-medium text-gray-700 mt-4">Mensaje</label>
            <textarea className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2" name="mensaje" rows={4} required />

            <button className="mt-6 w-full rounded-lg bg-emerald-700 text-white px-4 py-2 font-semibold hover:bg-emerald-800">
              Enviar mensaje
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
