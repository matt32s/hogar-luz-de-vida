import React, { useRef, useState } from "react";
import emailjs from "emailjs-com"; // Asegúrate de haber instalado emailjs-com

export default function DonarContacto() {
  const form = useRef<HTMLFormElement | null>(null); // Cambié el tipo de ref
  const [sent, setSent] = useState(false); // Estado para saber si el correo fue enviado
  const [error, setError] = useState(false); // Estado para manejar errores

  // Función para enviar el correo
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault(); // Prevenimos el comportamiento por defecto del formulario (recarga de página)

    if (form.current) {
      // Verificamos si form.current no es null antes de enviar el formulario
      emailjs
        .sendForm(
          "service_ululdpm", // Tu Service ID de EmailJS (Outlook)
          "template_v4g2z9g", // El Template ID real (el que acabas de crear)
          form.current, // Accedemos al formulario con useRef
          "NRGihuJn00GQBrR4t" // Tu Public Key desde EmailJS > Account > API Keys
        )
        .then(
          () => {
            setSent(true); // Si el envío es exitoso, cambiamos el estado
            setError(false); // Si no hubo error, lo ponemos en falso
            form.current?.reset(); // Limpiamos el formulario después de enviarlo
          },
          (err: Error) => {
            console.error("Error:", err); // En caso de error, lo mostramos en la consola
            setError(true); // Activamos el estado de error
          }
        );
    }
  };

  return (
    <section className="flex flex-col md:flex-row items-start justify-center gap-10 p-6 md:p-12 bg-transparent">
      {/* Formulario */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full md:w-1/2 bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl"
      >
        <label className="text-white font-semibold">Nombre</label>
        <input
          type="text"
          name="from_name"
          required
          className="w-full mt-2 mb-4 p-3 rounded-lg bg-emerald-950/40 text-white placeholder-gray-300 border border-emerald-700 focus:border-emerald-400"
          placeholder="Tu nombre"
        />

        <label className="text-white font-semibold">Correo electrónico</label>
        <input
          type="email"
          name="from_email"
          required
          className="w-full mt-2 mb-4 p-3 rounded-lg bg-emerald-950/40 text-white placeholder-gray-300 border border-emerald-700 focus:border-emerald-400"
          placeholder="tucorreo@ejemplo.com"
        />

        <label className="text-white font-semibold">Mensaje</label>
        <textarea
          name="message"
          rows={5}
          required
          className="w-full mt-2 mb-6 p-3 rounded-lg bg-emerald-950/40 text-white placeholder-gray-300 border border-emerald-700 focus:border-emerald-400"
          placeholder="¿Cómo te gustaría apoyar?"
        />

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-emerald-700 text-white font-semibold hover:bg-emerald-800 transition"
        >
          Enviar mensaje
        </button>

        {sent && <p className="text-green-500 mt-3">¡Mensaje enviado con éxito!</p>}
        {error && (
          <p className="text-red-500 mt-3">Hubo un error al enviar el mensaje. Intenta nuevamente.</p>
        )}
      </form>
    </section>
  );
}
