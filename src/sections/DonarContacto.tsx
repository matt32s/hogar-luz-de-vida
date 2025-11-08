import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser"; // Asegúrate de haber instalado la librería de emailjs

export default function DonarContacto() {
  const form = useRef<HTMLFormElement | null>(null);  // Utilizamos useRef para acceder al formulario
  const [sent, setSent] = useState(false);  // Estado para saber si el correo fue enviado
  const [error, setError] = useState(false);  // Estado para manejar errores

  // Función para enviar el correo
const sendEmail = (e: React.FormEvent) => {
  e.preventDefault(); // Prevenimos el comportamiento por defecto del formulario (recarga de página)

  if (form.current) {
    // Enviamos el formulario utilizando emailjs
    emailjs
      .sendForm(
        "service_ululdpm", // Tu Service ID de EmailJS (Outlook)
        "template_XXXXXXXX", // El Template ID real (el que acabas de crear)
        form.current, // Accedemos al formulario con useRef
        "YOUR_PUBLIC_KEY" // Tu Public Key desde EmailJS > Account > API Keys
      )
      .then(
        () => {
          setSent(true); // Si el envío es exitoso, cambiamos el estado
          setError(false); // Si no hubo error, lo ponemos en falso
          form.current?.reset(); // Limpiamos el formulario después de enviarlo
        },
        (err: Error) => { // Especificamos que err es de tipo 'Error'
          console.error("Error:", err); // En caso de error, lo mostramos en la consola
          setError(true); // Activamos el estado de error
        }
      );
  }
};


  return (
    <section className="flex flex-col md:flex-row items-start justify-center gap-10 p-6 md:p-12 bg-transparent">
      {/* Contenido de la sección */}
      <div className="w-full md:w-1/2 bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-semibold text-white">Contacto</h2>
        <p className="mt-4 text-white">¿Quieres apoyar, donar o conocer más? Escríbenos:</p>

        {/* Información de contacto */}
        <ul className="mt-4 space-y-2 text-white">
          <li><strong>Email:</strong> <a href="mailto:contacto@hogarluzdevida.org" className="text-emerald-500 underline">contacto@hogarluzdevida.org</a></li>
          <li><strong>WhatsApp:</strong> <a href="https://wa.me/573116475186" target="_blank" className="text-emerald-500 underline">+57 311 647 5186</a></li>
          <li><strong>Ubicación:</strong> Manizales, Caldas – Colombia</li>
        </ul>
      </div>

      {/* Formulario de contacto */}
      <div className="w-full md:w-1/2 bg-white/30 backdrop-blur-md p-8 rounded-2xl shadow-xl">
        <form ref={form} onSubmit={sendEmail}>
          {/* Nombre */}
          <label className="block text-white font-semibold">Nombre</label>
          <input
            type="text"
            name="from_name"
            required
            className="w-full mt-2 mb-4 p-3 rounded-lg bg-emerald-950/40 text-white placeholder-gray-300 border-emerald-700 focus:border-emerald-400"
            placeholder="Tu nombre"
          />

          {/* Correo electrónico */}
          <label className="block text-white font-semibold">Correo electrónico</label>
          <input
            type="email"
            name="from_email"
            required
            className="w-full mt-2 mb-4 p-3 rounded-lg bg-emerald-950/40 text-white placeholder-gray-300 border-emerald-700 focus:border-emerald-400"
            placeholder="tucorreo@ejemplo.com"
          />

          {/* Mensaje */}
          <label className="block text-white font-semibold">Mensaje</label>
          <textarea
            name="message"
            rows={5}
            required
            className="w-full mt-2 mb-6 p-3 rounded-lg bg-emerald-950/40 text-white placeholder-gray-300 border-emerald-700 focus:border-emerald-400"
            placeholder="¿Cómo te gustaría apoyar?"
          ></textarea>

          {/* Botón de enviar */}
          <button
            type="submit"
            className="w-full py-2.5 mt-4 bg-emerald-700 text-white rounded-lg font-semibold hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          >
            Enviar mensaje
          </button>

          {/* Mensajes de éxito o error */}
          {sent && !error && (
            <div className="mt-4 text-white font-semibold">¡Mensaje enviado exitosamente!</div>
          )}
          {error && (
            <div className="mt-4 text-red-500 font-semibold">Hubo un error al enviar el mensaje. Intenta nuevamente.</div>
          )}
        </form>
      </div>
    </section>
  );
}
