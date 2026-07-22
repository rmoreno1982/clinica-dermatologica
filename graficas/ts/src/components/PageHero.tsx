import { Link } from 'react-router-dom'

interface PageHeroProps {
  title: string
  tagline?: string
  breadcrumb?: string
}

export default function PageHero({ title, tagline, breadcrumb }: PageHeroProps) {
  return (
    <section className="pt-20 bg-[#F5F0E6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8">
          <Link to="/" className="text-[11px] font-[500] tracking-wide text-[#8A847C] hover:text-[#C4A252] transition-colors">
            Inicio
          </Link>
          <span className="text-[#C4A252]/60 text-[10px]">—</span>
          <span className="text-[11px] font-[500] tracking-wide text-[#C4A252]">
            {breadcrumb ?? title}
          </span>
        </div>

        {/* Content */}
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[#C4A252]" />
              <span className="text-[11px] font-[600] tracking-[0.22em] text-[#C4A252] uppercase">
                Clínica Consistorial
              </span>
            </div>
            <h1 className="font-display text-5xl lg:text-[3.6rem] font-[600] text-[#1A1816] leading-[1.08]">
              {title}
            </h1>
            {tagline && (
              <p className="mt-4 text-[15px] font-[400] text-[#8A847C] leading-relaxed max-w-lg">
                {tagline}
              </p>
            )}
          </div>

          {/* Decorative gold corner element */}
          <div className="hidden lg:block w-20 h-20 border-r border-b border-[#C4A252]/40 mb-2 flex-shrink-0" />
        </div>
      </div>

      {/* Bottom gold line */}
      <div className="h-px bg-gradient-to-r from-[#C4A252]/40 via-[#C4A252]/15 to-transparent" />
    </section>
  )
}
