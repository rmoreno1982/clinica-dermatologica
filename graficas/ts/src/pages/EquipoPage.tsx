import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'

const doctors = [
  {
    name: 'Dra. Carolyn Rodríguez',
    role: 'Directora Médica',
    specialty: 'Médico Dermatólogo',
    image: 'https://images.unsplash.com/photo-1659353888906-adb3e0041693?w=600&h=720&fit=crop&auto=format',
    alt: 'Dra. Carolyn Rodríguez, Directora Médica Clínica Consistorial',
    credentials: [
      { label: 'Formación', value: 'Medicina y Especialización en Dermatología, Universidad de Chile' },
      { label: 'Diplomados', value: 'Dermatoestética, Pontificia Universidad Católica · Terapia Lumínica y Láser, U. de Chile' },
    ],
    experience: [
      'Hospital CRS Cordillera (2008–presente)',
      'Clínica Universidad de Chile (2008–presente)',
      'Clínica Las Condes (2017–2022)',
      'Clínica Orlandi (2021–presente)',
      'Ex Directora, Sociedad Chilena de Dermatología',
    ],
    teaching: 'Profesora Instructora, Universidad de Chile — docencia en pre y postgrado en Dermatología.',
    memberships: ['Sociedad Chilena de Dermatología', 'CILAD'],
    interests: [
      'Dermatología general y pediátrica',
      'Acné, rosácea y dermatitis',
      'Manchas y pigmentaciones cutáneas',
      'Láser y tecnología dermatológica',
      'Cirugía dermatológica',
      'Rejuvenecimiento facial',
      'Cáncer de piel',
    ],
  },
  {
    name: 'Dr. Claudio Sotomayor Soto',
    role: 'Médico Especialista',
    specialty: 'Médico Dermatólogo',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=720&fit=crop&auto=format',
    alt: 'Dr. Claudio Sotomayor Soto, Médico Dermatólogo',
    credentials: [
      { label: 'Formación', value: 'Medicina y Especialización en Dermatología, Universidad de Chile' },
    ],
    experience: [
      'Hospital CRS Cordillera (2005–2025)',
      'Clínica Universidad de Chile (2005–presente)',
      'Clínica Red Salud Vitacura (2005–presente)',
    ],
    teaching: 'Docencia de internos y residentes en Universidad de Chile en programas de pre y postgrado.',
    memberships: ['Sociedad Chilena de Dermatología'],
    interests: [
      'Dermatología general y pediátrica',
      'Acné, rosácea y psoriasis',
      'Dermatitis',
      'Patologías del pelo y las uñas',
      'Cirugía dermatológica',
    ],
  },
]

function DoctorCard({ doctor }: { doctor: (typeof doctors)[0] }) {
  const photo = (
    <div className="relative overflow-hidden bg-[#F5F0E6] h-96 lg:h-full">
      <img
        src={doctor.image}
        alt={doctor.alt}
        className="w-full h-full object-cover object-top"
      />
      {/* Gold accent */}
      <div className="absolute bottom-6 left-6 w-14 h-14 border-l border-b border-[#C4A252]/50 pointer-events-none" />
    </div>
  )

  const content = (
    <div className="flex flex-col justify-start px-6 lg:px-8 py-10 bg-[#FAFAF6]">
      {/* Role */}
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px w-6 bg-[#C4A252]" />
        <span className="text-[10px] font-[600] tracking-[0.2em] text-[#C4A252] uppercase">
          {doctor.role}
        </span>
      </div>

      {/* Name */}
      <h2 className="font-display text-2xl lg:text-3xl font-[600] text-[#1A1816] mb-1">
        {doctor.name}
      </h2>
      <p className="text-[12px] font-[500] text-[#8A847C] tracking-wide mb-5">
        {doctor.specialty}
      </p>
      <div className="h-px w-10 bg-[#C4A252] mb-5" />

      {/* Credentials */}
      <div className="space-y-2.5 mb-5">
        {doctor.credentials.map(c => (
          <div key={c.label}>
            <span className="text-[9.5px] font-[700] tracking-[0.14em] uppercase text-[#C4A252]/80">{c.label}</span>
            <p className="text-[12px] font-[400] text-[#2C2825] leading-tight mt-0.5">{c.value}</p>
          </div>
        ))}
      </div>

      {/* Experience */}
      <div className="mb-5">
        <span className="text-[9.5px] font-[700] tracking-[0.14em] uppercase text-[#C4A252]/80">Experiencia</span>
        <ul className="mt-1.5 space-y-1">
          {doctor.experience.map(e => (
            <li key={e} className="flex items-start gap-2">
              <span className="mt-1.5 w-0.5 h-0.5 rounded-full bg-[#C4A252] flex-shrink-0" />
              <span className="text-[11.5px] font-[400] text-[#2C2825] leading-tight">{e}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Teaching */}
      <div className="mb-5">
        <span className="text-[9.5px] font-[700] tracking-[0.14em] uppercase text-[#C4A252]/80">Docencia</span>
        <p className="text-[12px] font-[400] text-[#2C2825] leading-tight mt-1">{doctor.teaching}</p>
      </div>

      {/* Areas of interest */}
      <div className="mb-5">
        <span className="text-[9.5px] font-[700] tracking-[0.14em] uppercase text-[#C4A252]/80 block mb-2">Áreas de interés</span>
        <div className="flex flex-wrap gap-1.5">
          {doctor.interests.map(i => (
            <span
              key={i}
              className="px-2 py-0.5 text-[10px] font-[500] border border-[#C4A252]/30 text-[#8A847C] rounded-full"
            >
              {i}
            </span>
          ))}
        </div>
      </div>

      {/* Memberships */}
      <div>
        <span className="text-[9.5px] font-[700] tracking-[0.14em] uppercase text-[#C4A252]/80 block mb-1">Membresías</span>
        {doctor.memberships.map(m => (
          <p key={m} className="text-[12px] text-[#6A6560]">{m}</p>
        ))}
      </div>
    </div>
  )

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden border border-[#E8E2D8]">
      <>
        {photo}
        {content}
      </>
    </div>
  )
}

export default function EquipoPage() {
  return (
    <>
      <PageHero
        title="Nuestro Equipo"
        tagline="Especialistas comprometidos con la excelencia dermatológica."
        breadcrumb="Equipo"
      />

      {/* Intro */}
      <section className="bg-[#FAFAF6] py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-[15px] font-[400] leading-[1.9] text-[#6A6560]">
            Nuestro equipo está formado por dermatólogos con formación en la Universidad de Chile y
            amplia experiencia en los principales centros de salud del país. Cada profesional combina
            el rigor científico con una atención cercana y personalizada.
          </p>
        </div>
      </section>

      <section className="bg-[#FAFAF6] py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-10">
          {doctors.map(d => (
            <DoctorCard key={d.name} doctor={d} />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}
