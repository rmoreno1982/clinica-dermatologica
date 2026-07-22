const pillars = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <rect x="10" y="14" width="28" height="24" rx="2" />
        <path d="M10 22h28M17 14V10M31 14V10" strokeLinecap="round" />
        <path d="M16 30l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Especialistas Certificados',
    description:
      'Dermatólogos acreditados con formación en los mejores centros nacionales e internacionales de la especialidad.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <circle cx="24" cy="24" r="14" />
        <circle cx="24" cy="24" r="5" />
        <path d="M24 6v4M24 38v4M6 24h4M38 24h4" strokeLinecap="round" />
      </svg>
    ),
    title: 'Respaldo Científico',
    description:
      'Tratamientos basados en evidencia médica y protocolos clínicos actualizados con la literatura científica vigente.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <path d="M24 8l12 5v10c0 8-6 14-12 16C18 37 12 31 12 23V13l12-5z" />
        <path d="M18 24l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Seguridad y Confianza',
    description:
      'Instalaciones certificadas y procedimientos seguros para que cada tratamiento sea realizado con total tranquilidad.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <path d="M24 12c-6 0-12 4-12 10 0 4 3 7 6 9l6 7 6-7c3-2 6-5 6-9 0-6-6-10-12-10z" />
        <path d="M20 22c0-2 1.8-4 4-4s4 2 4 4" strokeLinecap="round" />
      </svg>
    ),
    title: 'Resultados Naturales',
    description:
      'Se esperan favorecer resultados que realzan la identidad y estética natural de cada paciente de manera armoniosa.',
  },
]

export default function PillarsSection() {
  return (
    <section className="py-24 bg-[#FAFAF6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[11px] font-[600] tracking-[0.22em] text-[#C4A252] uppercase mb-4">
            Por qué elegirnos
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-[600] text-[#1A1816]">
            Nuestros Pilares
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`p-8 flex flex-col items-center text-center group ${
                i < pillars.length - 1 ? 'lg:border-r border-[#E8E2D8]' : ''
              } ${i < 2 ? 'sm:border-r border-[#E8E2D8]' : ''}`}
            >
              {/* Top gold line */}
              <div className="h-px w-12 bg-[#C4A252] mb-8 group-hover:w-20 transition-all duration-400" />

              {/* Icon */}
              <div className="text-[#C4A252] mb-6 opacity-90">
                {p.icon}
              </div>

              <h3 className="font-display text-[1.1rem] font-[600] text-[#1A1816] mb-3 leading-snug">
                {p.title}
              </h3>
              <p className="text-[13px] leading-[1.8] text-[#8A847C] font-[400]">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
