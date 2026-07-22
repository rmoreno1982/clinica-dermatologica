import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'

const pillars = [
  {
    number: '01',
    title: 'Especialistas Certificados',
    body: 'Nuestros dermatólogos cuentan con formación especializada en la Universidad de Chile y perfeccionamiento continuo en los principales centros dermatológicos nacionales e internacionales.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <rect x="10" y="14" width="28" height="24" rx="2" />
        <path d="M10 22h28M17 14V10M31 14V10" strokeLinecap="round" />
        <path d="M16 30l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Respaldo Científico',
    body: 'Todos nuestros tratamientos están basados en evidencia clínica actualizada y protocolos internacionales. Nos comprometemos a ofrecer sólo lo que la ciencia respalda.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <circle cx="24" cy="24" r="14" />
        <circle cx="24" cy="24" r="5" />
        <path d="M24 6v4M24 38v4M6 24h4M38 24h4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Seguridad y Confianza',
    body: 'Contamos con instalaciones certificadas y procedimientos estandarizados para que cada paciente se sienta seguro y tranquilo durante todo el proceso de atención.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <path d="M24 8l12 5v10c0 8-6 14-12 16C18 37 12 31 12 23V13l12-5z" />
        <path d="M18 24l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Resultados Naturales',
    body: 'Nuestra filosofía es realzar la belleza e identidad natural de cada paciente, sin resultados artificiales ni promesas falsas. La salud de tu piel es nuestra prioridad.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <path d="M24 12c-6 0-12 4-12 10 0 4 3 7 6 9l6 7 6-7c3-2 6-5 6-9 0-6-6-10-12-10z" />
        <path d="M20 22c0-2 1.8-4 4-4s4 2 4 4" strokeLinecap="round" />
      </svg>
    ),
  },
]

const facilities = [
  {
    image: 'https://images.unsplash.com/photo-1759262151080-e05ba1c6294f?w=600&h=400&fit=crop&auto=format',
    label: 'Sala de espera',
  },
  {
    image: 'https://images.unsplash.com/photo-1648775507324-b48dd3791fa5?w=600&h=400&fit=crop&auto=format',
    label: 'Consultorios',
  },
  {
    image: 'https://images.unsplash.com/photo-1727562776256-64756ade2232?w=600&h=400&fit=crop&auto=format',
    label: 'Instalaciones',
  },
]

export default function ClinicaPage() {
  return (
    <>
      <PageHero
        title="Acerca de la Clínica"
        tagline="Un espacio pensado para tu bienestar."
        breadcrumb="Acerca de la Clínica"
      />

      {/* Mission statement */}
      <section className="py-20 bg-[#FAFAF6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-[#C4A252]" />
              <span className="text-[11px] font-[600] tracking-[0.2em] text-[#C4A252] uppercase">Nuestra Misión</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-[600] text-[#1A1816] leading-[1.1] mb-6">
              Dermatología de excelencia,<br />
              <em>con atención humana</em>
            </h2>
            <div className="h-px w-12 bg-[#C4A252] mb-7" />
            <p className="text-[15px] font-[400] leading-[1.9] text-[#6A6560] mb-5">
              En Clínica Consistorial creemos que el cuidado de la piel va más allá del diagnóstico.
              Cada consulta es una oportunidad para escuchar, comprender y acompañar al paciente en
              su proceso de salud y bienestar.
            </p>
            <p className="text-[14.5px] font-[400] leading-[1.85] text-[#8A847C]">
              Nos ubicamos en Av. Consistorial 5791, Oficina 84, en el corazón de Peñalolén,
              Santiago, con acceso conveniente y atención personalizada de lunes a sábado.
            </p>
          </div>

          <div className="relative rounded-sm overflow-hidden bg-[#F5F0E6] aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1759262151080-e05ba1c6294f?w=800&h=600&fit=crop&auto=format"
              alt="Interior Clínica Consistorial"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 left-6 w-14 h-14 border-l border-t border-[#C4A252]/60 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Pillars expanded */}
      <section className="py-20 bg-[#F5F0E6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="h-px w-12 bg-[#C4A252]/50" />
              <span className="text-[11px] font-[600] tracking-[0.2em] text-[#C4A252] uppercase">
                Nuestros valores
              </span>
              <div className="h-px w-12 bg-[#C4A252]/50" />
            </div>
            <h2 className="font-display text-4xl font-[600] text-[#1A1816]">Los pilares de nuestra clínica</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map(p => (
              <div
                key={p.number}
                className="bg-[#FAFAF6] p-8 rounded-sm border border-[#E8E2D8] hover:border-[#C4A252]/30 transition-colors group"
              >
                <div className="flex items-start gap-5">
                  <div className="text-[#C4A252] mt-1 flex-shrink-0">{p.icon}</div>
                  <div>
                    <span className="font-display text-[2rem] font-[600] text-[#C4A252]/15 select-none leading-none block mb-1">
                      {p.number}
                    </span>
                    <h3 className="font-display text-[1.2rem] font-[600] text-[#1A1816] mb-3">{p.title}</h3>
                    <p className="text-[13.5px] leading-[1.8] text-[#6A6560]">{p.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-[#FAFAF6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-[600] text-[#1A1816] mb-3">
              Nuestras instalaciones
            </h2>
            <p className="text-[14px] text-[#8A847C] max-w-md mx-auto">
              Un ambiente diseñado para la tranquilidad y el bienestar de nuestros pacientes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {facilities.map(f => (
              <div key={f.label} className="relative overflow-hidden rounded-sm bg-[#F5F0E6] aspect-[4/3] group">
                <img
                  src={f.image}
                  alt={f.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1816]/50 to-transparent" />
                <p className="absolute bottom-4 left-5 text-[12px] font-[600] tracking-[0.12em] text-white/90 uppercase">
                  {f.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-16 bg-[#F5F0E6] border-t border-[#E8E2D8]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="font-display text-3xl font-[600] text-[#1A1816] mb-4">
            Conoce a nuestros especialistas
          </h3>
          <p className="text-[14.5px] text-[#8A847C] mb-8 max-w-md mx-auto leading-relaxed">
            Nuestros dermatólogos cuentan con amplia formación y experiencia para atenderte con la mejor calidad.
          </p>
          <Link
            to="/equipo"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#C4A252] text-white text-[11px] font-[700] tracking-[0.15em] uppercase hover:bg-[#A88840] transition-colors duration-300 rounded-[20px]"
          >
            Ver el equipo →
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  )
}
