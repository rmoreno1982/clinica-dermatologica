const footerLinks = {
  Clínica: ['Inicio', 'Conoce la Clínica', 'Nuestro Equipo', 'Trabaja con Nosotros'],
  Contacto: ['+56 (XX) XXX-XXXX', 'info@clinicaconsistorial.cl', 'Dirección Clínica', 'Agendar en línea'],
  Horarios: ['Lunes a Viernes', '09:00 – 18:30', 'Sábado', '09:00 – 13:00'],
}

export default function FooterSection() {
  return (
    <footer className="bg-[#141210] border-t border-[#C4A252]/15">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            {/* Text logo since original has white bg */}
            <div className="mb-5">
              <p className="font-display text-[1.3rem] font-[600] text-[#C4A252] leading-tight tracking-wide">
                Clínica Consistorial
              </p>
              <p className="text-[10px] font-[600] tracking-[0.3em] text-[#C4A252]/60 uppercase mt-1">
                Dermatología
              </p>
            </div>
            <div className="h-px w-10 bg-[#C4A252]/40 mb-5" />
            <p className="text-[13px] font-[400] leading-[1.8] text-white/35">
              Expertos en el cuidado y la salud de tu piel, con atención personalizada y respaldo médico de excelencia.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="text-[11px] font-[700] tracking-[0.18em] uppercase text-[#C4A252]/80 mb-5">
                {heading}
              </h4>
              <ul className="space-y-3">
                {items.map(item => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[13px] font-[400] text-white/40 hover:text-[#C4A252]/80 transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-[10px] border-t border-white/8 flex flex-col items-center gap-3">
          <p className="text-[12px] text-white/25 font-[400] text-center">
            © 2024 Clínica Consistorial Dermatología. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
