import React, { useRef } from "react";
import emailjs from "@emailjs/browser"; // Asegúrate de tener esta librería instalada

export default function DonarContacto() {
  const form = useRef<HTMLFormElement | null>(null); // Cambié el tipo de ref

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_ululdpm", // tu Service ID (Outlook)
          "template_XXXXXXXX", // tu Template ID real (el que acabas de crear)
          form.current, // Asegúrate de que form.current esté definido
          "YOUR_PUBLIC_KEY" // tu Public Key desde EmailJS > Account > API Keys
        )
        .then(
          () => {
            if (form.current) form.current.reset(); // Aquí especificamos que es un HTMLFormElement
          },
          (err: Error) => { // Especificamos que el tipo de err es Error
            console.error("Error:", err);
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
          className="w-full p-3 bg-emerald-700 text-white rounded-lg font-semibold hover:bg-emerald-800"
        >
          Enviar mensaje
        </button>
      </form>

      {/* Sección de contacto con WhatsApp */}
      <div className="md:w-1/2">
        <h2 className="text-3xl text-white font-bold mb-4">Contacto</h2>
        <p className="text-white mb-4">¿Quieres apoyar, donar o conocer más? Escríbenos:</p>
        <ul className="text-white">
          <li>
            <strong>Email:</strong>{" "}
            <a
              className="text-emerald-700 underline"
              href="mailto:contacto@hogarluzdevida.org"
            >
              contacto@hogarluzdevida.org
            </a>
          </li>
          <li>
            <strong>WhatsApp:</strong>{" "}
            <a
              className="text-emerald-700 underline"
              href="https://wa.me/573116475186"
              target="_blank"
              rel="noreferrer"
            >
              +57 311 647 5186
            </a>
          </li>
          <li>
            <strong>Ubicación:</strong> Manizales, Caldas – Colombia
          </li>
        </ul>
      </div>
    </section>
  );
}
