export default function AboutSection() {
  return (
    <section className="py-0 bg-[#F5F0E6]">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        {/* Left — image */}
        <div className="relative overflow-hidden bg-[#E8E0D0] min-h-[400px] lg:min-h-0">
          <img
            src="https://images.unsplash.com/photo-1759262151080-e05ba1c6294f?w=800&h=700&fit=crop&auto=format"
            alt="Interior de la Clínica Consistorial"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1A1816]/10 pointer-events-none" />
          {/* Gold accent frame */}
          <div className="absolute top-8 left-8 w-20 h-20 border-l border-t border-[#C4A252]/60 pointer-events-none" />
        </div>

        {/* Right — content */}
        <div className="flex flex-col justify-center px-8 lg:px-16 xl:px-20 py-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-[#C4A252]" />
            <span className="text-[11px] font-[600] tracking-[0.2em] text-[#C4A252] uppercase">
              Nuestra Clínica
            </span>
          </div>

          <h2 className="font-display text-4xl xl:text-5xl font-[600] text-[#1A1816] leading-[1.1] mb-6">
            Una atención cercana,<br />
            <em>con respaldo médico</em>
          </h2>

          <div className="h-px w-14 bg-[#C4A252] mb-7" />

          <p className="text-[15px] font-[400] leading-[1.85] text-[#6A6560] max-w-md mb-4">
            En Clínica Consistorial disponemos de un espacio dedicado al cuidado integral de la piel, con atención médica personalizada, tecnología de apoyo y procedimientos dermatológicos especializados.
          </p>

          <p className="text-[14px] font-[400] leading-[1.8] text-[#8A847C] max-w-md mb-10">
            Nuestro compromiso es que cada paciente reciba una atención de excelencia en un ambiente cálido y de confianza.
          </p>

          <button className="self-start group flex items-center gap-3 px-7 py-3.5 border border-[#1A1816] text-[#1A1816] text-[11px] font-[700] tracking-[0.15em] uppercase hover:bg-[#1A1816] hover:text-white transition-all duration-300 cursor-pointer rounded-[20px]">
            Conoce a Nuestro Equipo
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}
