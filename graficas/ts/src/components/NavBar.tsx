import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logoImg from '@/imports/logo-1.png'

const navLinks = [
  { label: 'Inicio', to: '/' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Equipo', to: '/equipo' },
  { label: 'Acerca de la Clínica', to: '/clinica' },
  { label: 'Contacto', to: '/contacto' },
]

export default function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAF6]/95 backdrop-blur-sm border-b border-[#C4A252]/15">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/">
          <img src={logoImg} alt="Clínica Consistorial Dermatología" className="h-14 w-auto object-contain" />
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `text-[12.5px] font-[500] tracking-wide transition-colors duration-200 ${
                  isActive ? 'text-[#C4A252]' : 'text-[#2C2825] hover:text-[#C4A252]'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <a
          href="https://softwaremedilink.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center px-6 py-2.5 border border-[#C4A252] text-[#C4A252] text-[11px] font-[600] tracking-[0.14em] uppercase hover:bg-[#C4A252] hover:text-white transition-all duration-300 cursor-pointer rounded-[20px]"
        >
          Agendar Cita
        </a>

        {/* Mobile hamburger */}
        <button className="lg:hidden flex flex-col gap-1.5 cursor-pointer p-1" onClick={() => setOpen(!open)}>
          <span className="w-6 h-px bg-[#2C2825] block" />
          <span className="w-6 h-px bg-[#2C2825] block" />
          <span className="w-4 h-px bg-[#2C2825] block" />
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#FAFAF6] border-t border-[#C4A252]/10 px-6 py-6 flex flex-col gap-5">
          {navLinks.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-[13px] font-[500] transition-colors ${isActive ? 'text-[#C4A252]' : 'text-[#2C2825]'}`
              }
            >
              {label}
            </NavLink>
          ))}
          <a
            href="https://softwaremedilink.com"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start px-6 py-2.5 border border-[#C4A252] text-[#C4A252] text-[11px] font-[600] tracking-[0.14em] uppercase rounded-[20px]"
          >
            Agendar Cita
          </a>
        </div>
      )}
    </header>
  )
}
