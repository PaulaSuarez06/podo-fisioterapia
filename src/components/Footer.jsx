function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 px-8 py-6 text-center text-gray-500">
      <p>© {year} Podo Fisioterapia. Todos los derechos reservados.</p>
      <p className="mt-2">
        Developed by{' '}
        <a
          href="https://github.com/PaulaSuarez06"
          target="_blank"
          rel="noopener noreferrer"
          className=" decoration-gray-300  transition-colors hover:text-gray-700"
        >
          Paula Suárez
        </a>
      </p>
    </footer>
  )
}

export default Footer
