export default function CTASection() {
  return (
    <section className="relative py-28 bg-[#1A1816] overflow-hidden">
      {/* Decorative gold lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C4A252]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C4A252]/40 to-transparent" />

      {/* Background subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #C4A252 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Corner accents */}
      <div className="absolute top-10 left-10 w-20 h-20 border-l border-t border-[#C4A252]/20" />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-r border-b border-[#C4A252]/20" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-4 mb-7">
          <div className="h-px w-12 bg-[#C4A252]/60" />
          <span className="text-[11px] font-[600] tracking-[0.22em] text-[#C4A252] uppercase">
            Agenda tu Hora
          </span>
          <div className="h-px w-12 bg-[#C4A252]/60" />
        </div>

        <h2 className="font-display text-4xl lg:text-5xl xl:text-[3.4rem] font-[600] text-white leading-[1.12] mb-6">
          Tu piel merece una atención<br />
          <em>integral y especializada</em>
        </h2>

        <div className="h-px w-14 bg-[#C4A252] mx-auto mb-7" />

        <p className="text-[15px] font-[400] leading-relaxed text-white/50 max-w-lg mx-auto mb-12">
          Te invitamos a agendar tu hora y descubrir todo lo que la dermatología especializada puede hacer por ti. La primera consulta es el primer paso.
        </p>

        <button className="group inline-flex items-center gap-3 px-10 py-4 bg-[#C4A252] text-white text-[11px] font-[700] tracking-[0.15em] uppercase hover:bg-[#D4BA78] transition-colors duration-300 cursor-pointer rounded-[20px]">
          Agendar Hora Ahora
          <span className="group-hover:translate-x-1 transition-transform duration-200 text-base leading-none">→</span>
        </button>
      </div>
    </section>
  )
}
