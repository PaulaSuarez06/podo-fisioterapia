import { useState } from 'react'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import { setConsent } from '../lib/cookieConsent'
import { useCookieConsent } from '../lib/useCookieConsent'

function CookieBanner() {
  const consent = useCookieConsent()
  const [showPanel, setShowPanel] = useState(false)
  const [functionalDraft, setFunctionalDraft] = useState(true)

  if (consent) return null

  const acceptAll = () => setConsent(true)
  const rejectAll = () => setConsent(false)
  const savePreferences = () => setConsent(functionalDraft)

  return (
    <>
      <div className="fixed bottom-4 left-4 right-4 z-60 max-w-sm rounded-3xl border border-neutral-200 bg-white p-4 shadow-lg sm:right-auto">
        <div className="flex items-start gap-3">
          <div className="signature-corner flex h-12 w-12 shrink-0 items-center justify-center bg-wood-100 text-2xl">
            🍪
          </div>
          <div>
            <p className="text-sm leading-relaxed text-neutral-600">
              Usamos cookies propias y de terceros (Google reCAPTCHA y
              Google Maps) para el correcto funcionamiento del sitio.
              Puedes consultar más información en nuestra{' '}
              <Link
                to="/politica-de-cookies"
                className="font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-2 hover:decoration-neutral-900"
              >
                política de cookies
              </Link>
              .
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={acceptAll}
                className="rounded-full bg-wood-400 px-5 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-wood-300"
              >
                Aceptar todas
              </button>
              <button
                type="button"
                onClick={rejectAll}
                className="rounded-full border border-neutral-300 px-5 py-2 text-sm font-medium text-neutral-700 transition-colors hover:border-neutral-400"
              >
                Rechazar
              </button>
              <button
                type="button"
                onClick={() => setShowPanel(true)}
                className="rounded-full px-5 py-2 text-sm font-medium text-neutral-600 underline decoration-neutral-300 underline-offset-2 transition-colors hover:text-neutral-900"
              >
                Personalizar
              </button>
            </div>
          </div>
        </div>
      </div>

      {showPanel && (
        <div className="fixed inset-0 z-70 flex items-center justify-center bg-neutral-900/50 px-4">
          <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-xl">
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-lg font-semibold text-neutral-900">
                Personalizar preferencias de consentimiento
              </h2>
              <button
                type="button"
                onClick={() => setShowPanel(false)}
                aria-label="Cerrar"
                className="shrink-0 text-neutral-400 transition-colors hover:text-neutral-900"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              Utilizamos cookies para ayudarte a navegar de manera eficiente
              y realizar ciertas funciones. Encontrarás información sobre
              cada categoría a continuación.
            </p>

            <div className="mt-5 space-y-4">
              <div className="rounded-2xl border border-neutral-200 p-4">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-medium text-neutral-900">
                    Necesarias
                  </span>
                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-500">
                    Siempre activo
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  Cookies imprescindibles para el funcionamiento básico del
                  sitio, como recordar tu preferencia de cookies. No
                  almacenan datos personales identificables.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 p-4">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-medium text-neutral-900">
                    Funcionales
                  </span>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={functionalDraft}
                    onClick={() => setFunctionalDraft((v) => !v)}
                    className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
                      functionalDraft ? 'bg-wood-400' : 'bg-neutral-300'
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                        functionalDraft ? 'translate-x-5' : 'translate-x-0.5'
                      }`}
                    />
                  </button>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  Permiten mostrar el mapa de ubicación (Google Maps) y
                  protegen el formulario de contacto frente a spam (Google
                  reCAPTCHA). Si las desactivas, esas funciones no estarán
                  disponibles.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={savePreferences}
                className="rounded-full bg-wood-400 px-5 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-wood-300"
              >
                Guardar preferencias
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="rounded-full border border-neutral-300 px-5 py-2 text-sm font-medium text-neutral-700 transition-colors hover:border-neutral-400"
              >
                Aceptar todas
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CookieBanner
