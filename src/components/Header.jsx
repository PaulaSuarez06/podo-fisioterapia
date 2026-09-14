import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.jpg'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = ({ isActive }) =>
    `relative py-1 text-sm tracking-wide text-neutral-600 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-wood-400 after:transition-all hover:text-neutral-900 ${
      isActive
        ? 'text-neutral-900 after:w-full'
        : 'after:w-0 hover:after:w-full'
    }`

  const mobileLinkClass = ({ isActive }) =>
    `text-base tracking-wide ${
      isActive ? 'font-medium text-neutral-900' : 'text-neutral-600'
    }`

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled || isOpen
          ? 'border-neutral-200 bg-white/90 shadow-sm backdrop-blur-md'
          : 'border-transparent bg-white/70 backdrop-blur-sm'
      }`}
    >
      <div
        className={`mx-auto flex max-w-5xl items-center justify-between px-6 transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-5'
        }`}
      >
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img
            src={logo}
            alt="Podo Fisioterapia"
            className={`w-auto transition-all duration-300 ${
              isScrolled ? 'h-7' : 'h-8'
            }`}
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <NavLink to="/" end className={linkClass}>
            Inicio
          </NavLink>
          <NavLink to="/sobre-nosotros" className={linkClass}>
            Servicio
          </NavLink>
          <NavLink to="/contacto" className={linkClass}>
            Contacto
          </NavLink>
          <a
            href="tel:+34680927023"
            className="text-sm tracking-wide text-neutral-600 transition-colors hover:text-neutral-900"
          >
            680 927 023
          </a>
          <Link
            to="/contacto"
            className="rounded-full bg-wood-400 px-5 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-wood-300"
          >
            Cita previa
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
          className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-neutral-900 transition-transform ${
              isOpen ? 'translate-y-[3.5px] rotate-45' : ''
            }`}
          />
          <span
            className={`h-px w-6 bg-neutral-900 transition-transform ${
              isOpen ? 'translate-y-[-3.5px] -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {isOpen && (
        <nav className="flex flex-col gap-5 border-t border-neutral-200 px-6 py-6 md:hidden">
          <NavLink to="/" end className={mobileLinkClass} onClick={() => setIsOpen(false)}>
            Inicio
          </NavLink>
          <NavLink
            to="/sobre-nosotros"
            className={mobileLinkClass}
            onClick={() => setIsOpen(false)}
          >
            Servicio
          </NavLink>
          <NavLink
            to="/contacto"
            className={mobileLinkClass}
            onClick={() => setIsOpen(false)}
          >
            Contacto
          </NavLink>
          <a
            href="tel:+34680927023"
            className="text-base tracking-wide text-neutral-600"
          >
            680 927 023
          </a>
          <Link
            to="/contacto"
            onClick={() => setIsOpen(false)}
            className="rounded-full bg-wood-400 px-5 py-2 text-center text-sm font-medium text-neutral-900 transition-colors hover:bg-wood-300"
          >
            Cita previa
          </Link>
        </nav>
      )}
    </header>
  )
}

export default Header
