import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'

const services = [
  {
    number: '01',
    title: 'Consulta Dermatológica',
    subtag: 'Examen físico · Diagnóstico y seguimiento',
    description:
      'Evaluación clínica completa y seguimiento de enfermedades de la piel, con diagnósticos precisos y planes de tratamiento personalizados.',
    items: [
      'Acné y rosácea',
      'Dermatitis y psoriasis',
      'Evaluación de lunares y lesiones',
      'Lesiones malignas',
      'Manchas y alteraciones del pigmento',
      'Patologías del pelo y las uñas',
    ],
    image: 'https://images.unsplash.com/photo-1688588162416-f7a7e726e0bf?w=700&h=520&fit=crop&auto=format',
    alt: 'Consulta dermatológica con especialista',
    imageLeft: true,
  },
  {
    number: '02',
    title: 'Cirugía Dermatológica Ambulatoria',
    subtag: 'Procedimientos seguros · Instalaciones certificadas',
    description:
      'Procedimientos quirúrgicos menores realizados en un ambiente seguro y certificado, con anestesia local y recuperación inmediata.',
    items: [
      'Biopsias de piel',
      'Extirpación de lunares y nevus',
      'Quistes y tumores benignos',
      'Tumores malignos cutáneos',
      'Crioterapia',
    ],
    image: 'https://images.unsplash.com/photo-1713085085470-fba013d67e65?w=700&h=520&fit=crop&auto=format',
    alt: 'Cirugía dermatológica ambulatoria',
    imageLeft: false,
  },
  {
    number: '03',
    title: 'Dermatología Estética',
    subtag: 'Tratamientos personalizados · Resultados naturales',
    description:
      'Procedimientos estéticos médicos diseñados para mejorar la apariencia y salud de la piel, respetando la identidad y belleza natural de cada paciente.',
    items: [
      'Rejuvenecimiento facial',
      'Mejora de luminosidad y calidad de la piel',
      'Corrección de manchas y pigmentaciones',
      'Tratamiento de cicatrices de acné',
    ],
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=700&h=520&fit=crop&auto=format',
    alt: 'Tratamiento de dermatología estética',
    imageLeft: true,
  },
  {
    number: '04',
    title: 'Tecnología Láser',
    subtag: 'Laser New Harmony · Precisión y resultados',
    description:
      'Sistema LASER NEW HARMONY de última generación para el tratamiento no invasivo de múltiples condiciones cutáneas con resultados visibles y duraderos.',
    items: [
      'Unificación del tono de la piel',
      'Rejuvenecimiento facial',
      'Manchas, estrías y cicatrices',
      'Rosácea y telangiectasias faciales',
    ],
    image: 'https://images.unsplash.com/photo-1700760933941-3a06a28fbf47?w=700&h=520&fit=crop&auto=format',
    alt: 'Tratamiento con tecnología láser New Harmony',
    imageLeft: false,
  },
  {
    number: '05',
    title: 'Crioterapia',
    subtag: 'Tratamiento con congelación · Sin cirugía',
    description:
      'Técnica de congelación controlada con nitrógeno líquido para la eliminación eficaz y precisa de lesiones cutáneas benignas sin necesidad de cirugía.',
    items: [
      'Verrugas víricas',
      'Léntigos solares',
      'Queratosis seborreicas',
      'Pequeños tumores benignos',
    ],
    image: 'https://images.unsplash.com/photo-1761718209835-c8586b7dcac0?w=700&h=520&fit=crop&auto=format',
    alt: 'Tratamiento de crioterapia dermatológica',
    imageLeft: true,
  },
]

function ServiceBlock({
  number, title, subtag, description, items, image, alt, imageLeft,
}: (typeof services)[0]) {
  const textBlock = (
    <div className="flex flex-col justify-center px-8 lg:px-14 py-16">
      <div className="flex items-center gap-4 mb-6">
        <span className="font-display text-[3rem] font-[600] leading-none text-[#C4A252]/20 select-none">
          {number}
        </span>
        <div className="h-px flex-1 bg-[#C4A252]/20" />
      </div>
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px w-8 bg-[#C4A252]" />
        <span className="text-[10.5px] font-[600] tracking-[0.18em] text-[#C4A252] uppercase">
          {subtag}
        </span>
      </div>
      <h2 className="font-display text-3xl lg:text-4xl font-[600] text-[#1A1816] mb-5 leading-snug">
        {title}
      </h2>
      <p className="text-[14.5px] font-[400] leading-[1.85] text-[#6A6560] mb-7 max-w-md">
        {description}
      </p>
      <ul className="space-y-2.5 mb-9">
        {items.map(item => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-2 w-1 h-1 rounded-full bg-[#C4A252] flex-shrink-0" />
            <span className="text-[13.5px] font-[400] text-[#2C2825] leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
      <a
        href="https://softwaremedilink.com"
        target="_blank"
        rel="noopener noreferrer"
        className="self-start flex items-center gap-3 px-7 py-3.5 border border-[#C4A252] text-[#C4A252] text-[11px] font-[700] tracking-[0.14em] uppercase hover:bg-[#C4A252] hover:text-white transition-all duration-300 rounded-[20px]"
      >
        Agendar Consulta →
      </a>
    </div>
  )

  const imageBlock = (
    <div className="relative overflow-hidden bg-[#F5F0E6] min-h-[380px]">
      <img src={image} alt={alt} className="w-full h-full object-cover" />
      {imageLeft ? (
        <div className="absolute bottom-6 right-6 w-14 h-14 border-r border-b border-[#C4A252]/50 pointer-events-none" />
      ) : (
        <div className="absolute top-6 left-6 w-14 h-14 border-l border-t border-[#C4A252]/50 pointer-events-none" />
      )}
    </div>
  )

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-[#E8E2D8] last:border-b-0">
      {imageLeft ? (
        <>{imageBlock}{textBlock}</>
      ) : (
        <>{textBlock}{imageBlock}</>
      )}
    </div>
  )
}

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        title="Nuestros Servicios"
        tagline="Dermatología integral en cada etapa de tu vida."
        breadcrumb="Servicios"
      />

      <section className="bg-[#FAFAF6]">
        {services.map(s => <ServiceBlock key={s.number} {...s} />)}
      </section>

      <CTASection />
    </>
  )
}
