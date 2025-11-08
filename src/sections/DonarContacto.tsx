'use client';

import React, { useMemo, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

/**
 * Sección de Contacto + Formulario (v2 con teléfono)
 * - Dos columnas en desktop (izquierda info / derecha formulario)
 * - Móvil apilado
 * - Fondos semitransparentes con blur
 * - Botón grande de WhatsApp (institucional)
 * - Formulario conectado a EmailJS + campo de teléfono con prefijo (default +57)
 * - Se envía también "from_phone_e164" (ej: +573001234567)
 */

// === CONFIGURACIÓN EMAILJS (pública) ===
const SERVICE_ID = 'service_ululdpm';
const TEMPLATE_ID = 'template_v4g2z9g';
const PUBLIC_KEY = 'NRGihuJn00GQBrR4t';

// === CONFIGURACIÓN DE CONTACTO ===
const WHATSAPP_NUMBER_E164 = '+573116475186'; // Número institucional
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hola, me gustaría apoyar/donar o conocer más del Hogar Luz de Vida.'
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER_E164.replace(
  '+',
  ''
)}?text=${WHATSAPP_MESSAGE}`;

// Prefijos frecuentes (puedes ampliar la lista cuando quieras)
const COUNTRY_CODES = [
  { code: '57', label: '🇨🇴 +57 (Colombia) — Predeterminado' },
  { code: '1', label: '🇺🇸 +1 (USA/Canadá)' },
  { code: '34', label: '🇪🇸 +34 (España)' },
  { code: '44', label: '🇬🇧 +44 (Reino Unido)' },
  { code: '49', label: '🇩🇪 +49 (Alemania)' },
  { code: '33', label: '🇫🇷 +33 (Francia)' },
  { code: '39', label: '🇮🇹 +39 (Italia)' },
  { code: '55', label: '🇧🇷 +55 (Brasil)' },
  { code: '52', label: '🇲🇽 +52 (México)' },
  { code: '84', label: '🇻🇳 +84 (Vietnam)' },
];

export default function DonarContacto() {
  const formRef = useRef<HTMLFormElement>(null);

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Estado del teléfono del remitente
  const [countryCode, setCountryCode] = useState<string>('57'); // por defecto +57
  const [phoneLocal, setPhoneLocal] = useState<string>(''); // sin prefijo

  // Construimos E.164: +<countryCode><solo_dígitos>
  const phoneE164 = useMemo(() => {
    const digits = phoneLocal.replace(/\D+/g, '');
    if (!digits) return '';
    return `+${countryCode}${digits}`;
  }, [countryCode, phoneLocal]);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSent(false);

    if (!formRef.current) return;

    // Inyectamos el E.164 en un input hidden antes de enviar
    const hidden = formRef.current.querySelector<HTMLInputElement>(
      'input[name="from_phone_e164"]'
    );
    if (hidden) hidden.value = phoneE164;

    try {
      setSending(true);
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setSent(true);
      formRef.current.reset();
      setPhoneLocal('');
      setCountryCode('57');
    } catch (err) {
      console.error('Error al enviar:', err);
      setError('Hubo un error al enviar tu mensaje. Intenta nuevamente.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contacto"
      className="relative w-full py-16 md:py-20"
      aria-label="Sección de contacto"
    >
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        {/* Título centrado */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white drop-shadow md:text-4xl">
            Contacto
          </h2>
          <p className="mt-2 text-sm text-white/80 md:text-base">
            ¿Quieres apoyar, donar o conocer más? Escríbenos.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {/* IZQUIERDA: Tarjeta de contacto */}
          <div className="md:col-span-5">
            <div className="rounded-2xl bg-emerald-950/35 p-6 shadow-xl ring-1 ring-white/10 backdrop-blur-md">
              <h3 className="mb-6 text-2xl font-bold text-white">Contáctanos</h3>

              {/* Email */}
              <div className="mb-4">
                <p className="text-sm font-semibold text-emerald-200">Email</p>
                <a
                  href="mailto:contacto@hogarluzdevida.org"
                  className="text-[17px] text-white underline-offset-2 hover:underline"
                >
                  contacto@hogarluzdevida.org
                </a>
              </div>

              {/* WhatsApp */}
              <div className="mb-4">
                <p className="text-sm font-semibold text-emerald-200">WhatsApp</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-emerald-500 active:scale-[0.99]"
                  aria-label="Abrir chat de WhatsApp"
                >
                  <svg
                    aria-hidden
                    width="20"
                    height="20"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    className="opacity-90"
                  >
                    <path d="M19.11 17.39c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.66.15-.19.3-.76.97-.93 1.17-.17.2-.34.22-.63.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.53-.07-.15-.66-1.6-.9-2.2-.24-.58-.48-.5-.66-.5-.17 0-.37-.02-.56-.02s-.52.07-.8.37c-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.09 4.49.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.41.25-.69.25-1.28.18-1.41-.07-.13-.26-.2-.56-.35zM16.07 3C8.84 3 3 8.78 3 15.91c0 2.89.89 5.57 2.42 7.78L3 29l5.48-2.39C10.62 27.73 13.26 28.8 16.07 28.8 23.3 28.8 29.14 23.02 29.14 15.9 29.14 8.78 23.3 3 16.07 3zm0 23.34c-2.61 0-5.01-.86-6.97-2.31l-.5-.36-3.32 1.45.71-3.19-.41-.52a10.7 10.7 0 0 1-2.19-6.5c0-5.94 4.88-10.77 10.9-10.77 6.01 0 10.9 4.83 10.9 10.77 0 5.94-4.88 10.77-10.9 10.77z" />
                  </svg>
                  <span>Chatear por WhatsApp</span>
                </a>

                <p className="mt-2 text-sm text-white/80">
                  Número: <span className="font-medium">{WHATSAPP_NUMBER_E164}</span>
                </p>
              </div>

              {/* Ubicación */}
              <div className="mt-6">
                <p className="text-sm font-semibold text-emerald-200">Ubicación</p>
                <p className="text-[17px] text-white">Manizales, Caldas – Colombia</p>
              </div>
            </div>
          </div>

          {/* DERECHA: Formulario */}
          <div className="md:col-span-7">
            <div className="rounded-2xl bg-emerald-950/35 p-6 shadow-xl ring-1 ring-white/10 backdrop-blur-md">
              <h3 className="mb-6 text-2xl font-bold text-white">Envíanos un mensaje</h3>

              <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
                {/* NOMBRE */}
                <div>
                  <label htmlFor="from_name" className="mb-1 block text-sm font-semibold text-emerald-200">
                    Nombre
                  </label>
                  <input
                    id="from_name"
                    name="from_name"
                    type="text"
                    required
                    className="w-full rounded-xl border border-white/10 bg-emerald-900/30 px-4 py-3 text-white placeholder-white/60 outline-none ring-emerald-400/0 backdrop-blur-md transition focus:border-emerald-300/40 focus:ring-2 focus:ring-emerald-400/30"
                    placeholder="Tu nombre"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label htmlFor="from_email" className="mb-1 block text-sm font-semibold text-emerald-200">
                    Correo electrónico
                  </label>
                  <input
                    id="from_email"
                    name="from_email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-white/10 bg-emerald-900/30 px-4 py-3 text-white placeholder-white/60 outline-none ring-emerald-400/0 backdrop-blur-md transition focus:border-emerald-300/40 focus:ring-2 focus:ring-emerald-400/30"
                    placeholder="tucorreo@ejemplo.com"
                  />
                </div>

                {/* TELÉFONO con prefijo */}
                <div>
                  <label className="mb-1 block text-sm font-semibold text-emerald-200">
                    Teléfono / WhatsApp (opcional)
                  </label>

                  <div className="grid grid-cols-5 gap-3">
                    <div className="col-span-2">
                      <select
                        name="country_code"
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-emerald-900/30 px-3 py-3 text-white outline-none transition focus:border-emerald-300/40 focus:ring-2 focus:ring-emerald-400/30"
                        aria-label="Código de país"
                      >
                        {COUNTRY_CODES.map((c) => (
                          <option key={c.code} value={c.code}>
                            +{c.code} — {c.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col-span-3">
                      <input
                        name="phone"
                        type="tel"
                        inputMode="tel"
                        value={phoneLocal}
                        onChange={(e) => setPhoneLocal(e.target.value)}
                        placeholder="Número (solo dígitos)"
                        className="w-full rounded-xl border border-white/10 bg-emerald-900/30 px-4 py-3 text-white placeholder-white/60 outline-none transition focus:border-emerald-300/40 focus:ring-2 focus:ring-emerald-400/30"
                      />
                    </div>
                  </div>

                  {/* Se envía el E.164 a EmailJS */}
                  <input type="hidden" name="from_phone_e164" value={phoneE164} />
                </div>

                {/* MENSAJE */}
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-semibold text-emerald-200">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full resize-y rounded-xl border border-white/10 bg-emerald-900/30 px-4 py-3 text-white placeholder-white/60 outline-none ring-emerald-400/0 backdrop-blur-md transition focus:border-emerald-300/40 focus:ring-2 focus:ring-emerald-400/30"
                    placeholder="¿Cómo te gustaría apoyar?"
                  />
                </div>

                {/* ESTADOS */}
                {sent && (
                  <p className="rounded-lg bg-emerald-700/30 px-3 py-2 text-sm text-emerald-100 ring-1 ring-emerald-300/20">
                    ¡Gracias! Tu mensaje fue enviado correctamente.
                  </p>
                )}
                {error && (
                  <p className="rounded-lg bg-red-800/30 px-3 py-2 text-sm text-red-100 ring-1 ring-red-300/20">
                    {error}
                  </p>
                )}

                {/* BOTÓN ENVIAR */}
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {sending ? 'Enviando…' : 'Enviar mensaje'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
