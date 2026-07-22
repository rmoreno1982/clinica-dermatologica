import fotoclinica2 from '@/imports/foto-clinica-2.jpg'

export default function HeroSection() {
  return (
    <section className="pt-20 min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left — text content */}
      <div className="flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-20 bg-[#FAFAF6]">
        {/* Gold label */}
        <div className="flex items-center gap-3 mb-7">
          <div className="h-px w-10 bg-[#C4A252]" />
          <span className="text-[11px] font-[600] tracking-[0.22em] text-[#C4A252] uppercase">
            Dermatología
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-display text-5xl xl:text-[3.8rem] leading-[1.08] text-[#1A1816] mb-6">
          Expertos en el<br />
          cuidado de tu piel
        </h1>

        {/* Gold rule */}
        <div className="h-px w-14 bg-[#C4A252] mb-7" />

        {/* Body */}
        <p className="text-[15px] font-[400] leading-[1.8] text-[#8A847C] max-w-sm mb-10">
          Atención dermatológica personalizada y cercana, con conocimientos
          médicos actualizados y experiencia clínica de excelencia.
        </p>

        {/* CTA */}
        <div className="flex items-center gap-5">
          <button className="group flex items-center gap-3 px-8 py-4 bg-[#C4A252] text-white text-[11px] font-[700] tracking-[0.15em] uppercase hover:bg-[#A88840] transition-colors duration-300 cursor-pointer rounded-[20px]">
            Agendar Hora
            <span className="group-hover:translate-x-1 transition-transform duration-200 text-base leading-none">→</span>
          </button>
        </div>
      </div>

      {/* Right — image */}
      <div className="relative bg-[#F5F0E6] overflow-hidden min-h-[60vh] lg:min-h-0">
        <img
          src={fotoclinica2}
          alt="Tratamiento dermatológico de excelencia"
          className="w-full h-full object-cover"
        />
        {/* Gold corner accents */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-[#C4A252]/70 pointer-events-none" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-[#C4A252]/70 pointer-events-none" />
        {/* Subtle dark overlay gradient at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#1A1816]/20 to-transparent pointer-events-none" />
      </div>
    </section>
  )
}
