import { Link } from 'react-router-dom'
import logoPs from '../assets/logo-ps.png'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 px-4 py-6 text-sm text-gray-500 sm:px-8 sm:text-base">
      <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <Link
          to="/politica-de-cookies"
          className="underline decoration-gray-300 underline-offset-2 transition-colors hover:text-gray-700"
        >
          Política de cookies
        </Link>

        <p>© {year} Podo Fisioterapia. Todos los derechos reservados.</p>

        <a
          href="https://github.com/PaulaSuarez06"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 opacity-70 transition-opacity hover:opacity-100"
        >
          <img src={logoPs} alt="Developed by Paula Suárez" className="h-20 w-auto sm:h-28" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
