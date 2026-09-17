import { Link } from 'react-router-dom'
import logoPs from '../assets/logo-ps.png'
import logoRj from '../assets/logo-rj.png'

const legalLinks = [
  { to: '/aviso-legal', label: 'Aviso legal' },
  { to: '/politica-de-privacidad', label: 'Política de privacidad' },
  { to: '/politica-de-cookies', label: 'Política de cookies' },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 px-4 py-6 text-sm text-gray-500 sm:px-8 sm:text-base">
      <div className="flex flex-col items-center gap-4">
        <nav className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1.5">
          {legalLinks.map((link, index) => (
            <span key={link.to} className="flex items-center gap-x-2">
              <Link
                to={link.to}
                className="underline decoration-gray-300 underline-offset-2 transition-colors hover:text-gray-700"
              >
                {link.label}
              </Link>
              {index < legalLinks.length - 1 && (
                <span aria-hidden="true" className="text-gray-300">
                  ·
                </span>
              )}
            </span>
          ))}
        </nav>

        <div className="grid w-full grid-cols-1 items-center gap-4 border-t border-gray-100 pt-4 text-center sm:grid-cols-3 sm:text-left">
          <p>© {year} Podo Fisioterapia. Todos los derechos reservados.</p>

          <img
            src={logoRj}
            alt="Podología & Fisioterapia Rodrigo Jiménez"
            className="h-12 w-auto justify-self-center opacity-90 sm:h-14"
          />

          <a
            href="https://github.com/PaulaSuarez06"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 justify-self-center opacity-70 transition-opacity hover:opacity-100 sm:justify-self-end"
          >
            <img src={logoPs} alt="Developed by Paula Suárez" className="h-20 w-auto sm:h-28" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
