function CookiePolicy() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
        Política de cookies
      </h1>

      <p className="mt-6 text-base leading-relaxed text-neutral-600">
        En este sitio web utilizamos cookies propias y de terceros para
        garantizar el correcto funcionamiento de la página y mejorar la
        experiencia de navegación.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-neutral-900">
        ¿Qué son las cookies?
      </h2>
      <p className="mt-3 text-base leading-relaxed text-neutral-600">
        Las cookies son pequeños archivos de texto que los sitios web
        almacenan en tu dispositivo cuando los visitas. Se utilizan
        principalmente para que el sitio funcione correctamente, para
        recordar tus preferencias, o para ofrecer servicios de terceros
        integrados en la página.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-neutral-900">
        Cookies que utilizamos
      </h2>
      <div className="mt-4 overflow-x-auto rounded-2xl border border-neutral-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-neutral-50 text-neutral-700">
            <tr>
              <th className="px-4 py-3 font-medium">Servicio</th>
              <th className="px-4 py-3 font-medium">Finalidad</th>
              <th className="px-4 py-3 font-medium">Tipo</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200 text-neutral-600">
            <tr>
              <td className="px-4 py-3 font-medium text-neutral-900">
                Google reCAPTCHA
              </td>
              <td className="px-4 py-3">
                Proteger el formulario de contacto frente a envíos
                automatizados (spam).
              </td>
              <td className="px-4 py-3">Terceros</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-neutral-900">
                Google Maps
              </td>
              <td className="px-4 py-3">
                Mostrar la ubicación de la clínica mediante un mapa
                interactivo incrustado.
              </td>
              <td className="px-4 py-3">Terceros</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-neutral-900">
                Preferencia de cookies
              </td>
              <td className="px-4 py-3">
                Recordar que has aceptado el uso de cookies en este sitio.
              </td>
              <td className="px-4 py-3">Propia / técnica</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-8 text-xl font-semibold text-neutral-900">
        Cookies de terceros
      </h2>
      <p className="mt-3 text-base leading-relaxed text-neutral-600">
        Algunos servicios integrados en esta web (Google reCAPTCHA y Google
        Maps) pueden instalar sus propias cookies conforme a sus propias
        políticas de privacidad, ajenas a este sitio. Puedes consultar más
        información en la{' '}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-2 hover:decoration-neutral-900"
        >
          política de privacidad de Google
        </a>
        .
      </p>

      <h2 className="mt-8 text-xl font-semibold text-neutral-900">
        Cómo gestionar las cookies
      </h2>
      <p className="mt-3 text-base leading-relaxed text-neutral-600">
        Puedes permitir, bloquear o eliminar las cookies instaladas en tu
        equipo mediante la configuración de las opciones del navegador que
        utilices. También puedes gestionar el almacenamiento de cookies en
        Google Chrome, Mozilla Firefox, Microsoft Edge o Safari desde sus
        respectivos ajustes de privacidad.
      </p>

      <p className="mt-8 text-sm text-neutral-500">
        Última actualización: septiembre de 2026.
      </p>
    </section>
  )
}

export default CookiePolicy
