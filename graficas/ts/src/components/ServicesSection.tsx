const services = [
  {
    title: 'Consulta Dermatológica',
    description:
      'Diagnóstico, seguimiento y atención de patologías como acné, rosácea, dermatitis, psoriasis, tumores y manchas cutáneas.',
    image:
      'https://images.unsplash.com/photo-1688588162416-f7a7e726e0bf?w=600&h=380&fit=crop&auto=format',
    alt: 'Consulta dermatológica con especialista',
  },
  {
    title: 'Cirugía Dermatológica Ambulatoria',
    description:
      'Extirpación de nevus, fibromas, quistes, tumores benignos, lipomas, cáncer de piel y corrección de cicatrices.',
    image:
      'https://images.unsplash.com/photo-1713085085470-fba013d67e65?w=600&h=380&fit=crop&auto=format',
    alt: 'Procedimiento de cirugía dermatológica ambulatoria',
  },
  {
    title: 'Dermatología Estética',
    description:
      'Tratamientos personalizados para el cuidado de la piel, corrección de manchas, arrugas y prevención del envejecimiento cutáneo.',
    image:
      'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=380&fit=crop&auto=format',
    alt: 'Tratamiento de dermatología estética',
  },
  {
    title: 'Tecnología Láser',
    description:
      'Laser HIFU HARMONY para tratar manchas, cicatrices, arrugas, rosácea y otros problemas cutáneos con resultados precisos.',
    image:
      'https://images.unsplash.com/photo-1700760933941-3a06a28fbf47?w=600&h=380&fit=crop&auto=format',
    alt: 'Tratamiento con tecnología láser avanzada',
  },
  {
    title: 'Crioterapia',
    description:
      'Tratamiento con congelación controlada para queratosis, verrugas, fibromas y pequeños tumores benignos de la piel.',
    image:
      'https://images.unsplash.com/photo-1761718209835-c8586b7dcac0?w=600&h=380&fit=crop&auto=format',
    alt: 'Tratamiento de crioterapia dermatológica',
  },
]

function ServiceCard({ title, description, image, alt }: (typeof services)[0]) {
  return (
    <div className="group bg-white rounded-[20px] overflow-hidden border border-[#E8E2D8] hover:border-[#C4A252]/40 hover:shadow-lg transition-all duration-400 flex flex-col">
      <div className="relative overflow-hidden h-52 bg-[#F5F0E6]">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {/* Gold bottom line on image */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[#C4A252]/50" />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-[1.15rem] font-[600] text-[#1A1816] mb-3 leading-snug">
          {title}
        </h3>
        <p className="text-[13.5px] leading-[1.75] text-[#8A847C] font-[400] flex-1 mb-5">
          {description}
        </p>
        <a
          href="#"
          className="flex items-center gap-2 text-[11px] font-[700] tracking-[0.15em] uppercase text-[#C4A252] hover:gap-3 transition-all duration-200"
        >
          Ver más <span className="text-base leading-none">→</span>
        </a>
      </div>
    </div>
  )
}

export default function ServicesSection() {
  const row1 = services.slice(0, 3)
  const row2 = services.slice(3)

  return (
    <section className="py-24 bg-[#FAFAF6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-12 bg-[#C4A252]/50" />
            <span className="text-[11px] font-[600] tracking-[0.2em] text-[#C4A252] uppercase">
              Especialidades
            </span>
            <div className="h-px w-12 bg-[#C4A252]/50" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-[600] text-[#1A1816] mb-4">
            Conoce Nuestros Servicios
          </h2>
          <p className="text-[14.5px] text-[#8A847C] max-w-lg mx-auto leading-relaxed">
            Abarcamos todos los áreas de la dermatología con diagnósticos precisos y tratamientos actualizados.
          </p>
        </div>

        {/* Row 1 — 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {row1.map(s => <ServiceCard key={s.title} {...s} />)}
        </div>

        {/* Row 2 — 2 cards centered */}
        <div className="flex justify-center gap-6">
          {row2.map(s => (
            <div key={s.title} className="w-full md:w-[calc(33.333%-12px)]">
              <ServiceCard {...s} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
