import { useState } from 'react'
import PageHero from '../components/PageHero'

const serviceOptions = [
  'Consulta Dermatológica',
  'Cirugía Dermatológica Ambulatoria',
  'Dermatología Estética',
  'Tecnología Láser',
  'Crioterapia',
]

const contactInfo = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    label: 'Dirección',
    lines: ['Av. Consistorial 5791, Oficina 84', 'Peñalolén, Santiago'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    label: 'Teléfono / WhatsApp',
    lines: ['+56 9 XXXX XXXX'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: 'Correo electrónico',
    lines: ['contacto@clinicaconsistorial.com'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: 'Horarios de atención',
    lines: ['Lunes a Viernes: 09:00 – 18:00', 'Sábado: 09:00 – 12:00'],
  },
]

export default function ContactoPage() {
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    correo: '',
    servicio: '',
    mensaje: '',
  })
  const [sent, setSent] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  const inputBase =
    'w-full px-4 py-3 bg-white border border-[#E8E2D8] text-[13.5px] font-[400] text-[#2C2825] placeholder-[#B8B2AA] focus:outline-none focus:border-[#C4A252] transition-colors duration-200 rounded-sm'

  return (
    <>
      <PageHero
        title="Contacto"
        tagline="Estamos para orientarte y responder todas tus dudas."
        breadcrumb="Contacto"
      />

      <section className="py-20 bg-[#FAFAF6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Form */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#C4A252]" />
              <span className="text-[11px] font-[600] tracking-[0.2em] text-[#C4A252] uppercase">
                Escríbenos
              </span>
            </div>
            <h2 className="font-display text-3xl font-[600] text-[#1A1816] mb-2">Envíanos un mensaje</h2>
            <p className="text-[14px] text-[#8A847C] mb-8">
              Completa el formulario y te contactaremos a la brevedad.
            </p>

            {sent ? (
              <div className="p-8 border border-[#C4A252]/40 bg-[#F5F0E6] rounded-sm text-center">
                <div className="text-[#C4A252] mb-3">
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 mx-auto">
                    <circle cx="24" cy="24" r="20" />
                    <path d="M15 24l7 7 11-13" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-[600] text-[#1A1816] mb-2">¡Mensaje enviado!</h3>
                <p className="text-[13.5px] text-[#8A847C]">Nos comunicaremos contigo a la brevedad.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Nombre completo"
                    required
                    className={inputBase}
                  />
                  <input
                    name="telefono"
                    value={form.telefono}
                    onChange={handleChange}
                    placeholder="Teléfono"
                    className={inputBase}
                  />
                </div>
                <input
                  name="correo"
                  type="email"
                  value={form.correo}
                  onChange={handleChange}
                  placeholder="Correo electrónico"
                  required
                  className={inputBase}
                />
                <select
                  name="servicio"
                  value={form.servicio}
                  onChange={handleChange}
                  className={`${inputBase} appearance-none cursor-pointer`}
                >
                  <option value="">Servicio de interés</option>
                  {serviceOptions.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <textarea
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  placeholder="¿En qué podemos ayudarte?"
                  rows={5}
                  className={`${inputBase} resize-none`}
                />
                <button
                  type="submit"
                  className="w-full py-4 bg-[#C4A252] text-white text-[11px] font-[700] tracking-[0.16em] uppercase hover:bg-[#A88840] transition-colors duration-300 rounded-[20px] cursor-pointer"
                >
                  Enviar Solicitud
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#C4A252]" />
              <span className="text-[11px] font-[600] tracking-[0.2em] text-[#C4A252] uppercase">
                Información
              </span>
            </div>
            <h2 className="font-display text-3xl font-[600] text-[#1A1816] mb-8">Encuéntranos</h2>

            <div className="space-y-7 mb-10">
              {contactInfo.map(item => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="text-[#C4A252] mt-0.5 flex-shrink-0">{item.icon}</div>
                  <div>
                    <p className="text-[11px] font-[700] tracking-[0.14em] uppercase text-[#C4A252]/80 mb-1">
                      {item.label}
                    </p>
                    {item.lines.map(l => (
                      <p key={l} className="text-[14px] font-[400] text-[#2C2825] leading-relaxed">{l}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="mb-10 pb-10 border-b border-[#E8E2D8]">
              <p className="text-[11px] font-[700] tracking-[0.14em] uppercase text-[#C4A252]/80 mb-3">Redes Sociales</p>
              <a
                href="https://instagram.com/clinicaconsistorial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[14px] text-[#2C2825] hover:text-[#C4A252] transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
                @clinicaconsistorial
              </a>
            </div>

            {/* WhatsApp CTA */}
            <div className="p-7 bg-[#F5F0E6] border border-[#E8E2D8] rounded-sm">
              <div className="flex items-center gap-3 mb-3">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 flex-shrink-0" stroke="#C4A252" strokeWidth="1.5">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                <h4 className="font-display text-lg font-[600] text-[#1A1816]">Contáctanos por WhatsApp</h4>
              </div>
              <p className="text-[13px] text-[#8A847C] mb-5">
                Para consultas rápidas o para coordinar tu hora directamente por WhatsApp.
              </p>
              <a
                href="https://wa.me/56912345678"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#C4A252] text-[#C4A252] text-[11px] font-[700] tracking-[0.14em] uppercase hover:bg-[#C4A252] hover:text-white transition-all duration-300 rounded-[20px]"
              >
                Abrir WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-[#F5F0E6] h-72 relative overflow-hidden border-t border-[#E8E2D8] flex items-center justify-center">
        <div className="text-center">
          <div className="text-[#C4A252]/40 mb-3">
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-12 h-12 mx-auto">
              <path d="M24 4C16.27 4 10 10.27 10 18c0 11 14 26 14 26s14-15 14-26c0-7.73-6.27-14-14-14z" />
              <circle cx="24" cy="18" r="5" />
            </svg>
          </div>
          <p className="text-[12px] font-[500] tracking-[0.14em] text-[#8A847C] uppercase">
            Av. Consistorial 5791, Oficina 84 · Peñalolén, Santiago
          </p>
        </div>
      </section>
    </>
  )
}
