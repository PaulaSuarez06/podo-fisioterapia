import { useEffect, useRef, useState } from 'react'

const services = ['Podología', 'Fisioterapia', 'Información']
const RECAPTCHA_SITE_KEY = '6LdnkKEqAAAAAPvyqoRAmjXxvE6evlb5z-5Ol90Y'

function useRecaptcha() {
  const containerRef = useRef(null)
  const widgetIdRef = useRef(null)

  useEffect(() => {
    let cancelled = false

    function renderWidget() {
      if (cancelled || !containerRef.current || widgetIdRef.current !== null) return
      widgetIdRef.current = window.grecaptcha.render(containerRef.current, {
        sitekey: RECAPTCHA_SITE_KEY,
      })
    }

    if (window.grecaptcha?.render) {
      renderWidget()
      return
    }

    window.__onRecaptchaLoad = renderWidget

    const existingScript = document.querySelector('script[src*="recaptcha/api.js"]')
    if (!existingScript) {
      const script = document.createElement('script')
      script.src =
        'https://www.google.com/recaptcha/api.js?onload=__onRecaptchaLoad&render=explicit'
      script.async = true
      script.defer = true
      document.head.appendChild(script)
    }

    return () => {
      cancelled = true
    }
  }, [])

  const getResponse = () => {
    if (widgetIdRef.current === null || !window.grecaptcha) return ''
    return window.grecaptcha.getResponse(widgetIdRef.current)
  }

  const reset = () => {
    if (widgetIdRef.current !== null && window.grecaptcha) {
      window.grecaptcha.reset(widgetIdRef.current)
    }
  }

  return { containerRef, getResponse, reset }
}

function encodeFormData(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

function Contact() {
  const recaptcha = useRecaptcha()
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    servicio: services[0],
    mensaje: '',
    privacidad: false,
  })

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const recaptchaResponse = recaptcha.getResponse()
    if (!recaptchaResponse) {
      setStatus('recaptcha')
      return
    }

    setStatus('sending')

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeFormData({
          'form-name': 'contacto',
          ...form,
          'g-recaptcha-response': recaptchaResponse,
        }),
      })
      setStatus('success')
      setForm({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        servicio: services[0],
        mensaje: '',
        privacidad: false,
      })
      recaptcha.reset()
    } catch (error) {
      setStatus('error')
      recaptcha.reset()
    }
  }

  return (
    <section className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
        Contacto
      </h1>
      <p className="mt-4 text-base leading-relaxed text-neutral-600 md:text-lg">
        Ponte en contacto con nosotros y pide tu cita previa.
      </p>

      {status === 'success' ? (
        <p className="mt-8 rounded-2xl bg-neutral-50 p-6 text-neutral-700">
          Gracias por contactar con nosotros, nos pondremos en contacto contigo
          a la mayor brevedad posible.
        </p>
      ) : (
        <form
          name="contacto"
          method="POST"
          data-netlify="true"
          data-netlify-recaptcha="true"
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >
          <input type="hidden" name="form-name" value="contacto" />

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="nombre" className="text-sm font-medium text-neutral-700">
                Nombre *
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                value={form.nombre}
                onChange={handleChange}
                className="mt-1.5 w-full rounded-xl border border-neutral-300 px-4 py-2.5 text-neutral-900 outline-none transition-colors focus:border-wood-400"
              />
            </div>
            <div>
              <label htmlFor="apellido" className="text-sm font-medium text-neutral-700">
                Apellido *
              </label>
              <input
                id="apellido"
                name="apellido"
                type="text"
                required
                value={form.apellido}
                onChange={handleChange}
                className="mt-1.5 w-full rounded-xl border border-neutral-300 px-4 py-2.5 text-neutral-900 outline-none transition-colors focus:border-wood-400"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className="text-sm font-medium text-neutral-700">
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="mt-1.5 w-full rounded-xl border border-neutral-300 px-4 py-2.5 text-neutral-900 outline-none transition-colors focus:border-wood-400"
              />
            </div>
            <div>
              <label htmlFor="telefono" className="text-sm font-medium text-neutral-700">
                Teléfono *
              </label>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                required
                value={form.telefono}
                onChange={handleChange}
                className="mt-1.5 w-full rounded-xl border border-neutral-300 px-4 py-2.5 text-neutral-900 outline-none transition-colors focus:border-wood-400"
              />
            </div>
          </div>

          <div>
            <label htmlFor="servicio" className="text-sm font-medium text-neutral-700">
              Servicio *
            </label>
            <select
              id="servicio"
              name="servicio"
              required
              value={form.servicio}
              onChange={handleChange}
              className="mt-1.5 w-full rounded-xl border border-neutral-300 px-4 py-2.5 text-neutral-900 outline-none transition-colors focus:border-wood-400"
            >
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="mensaje" className="text-sm font-medium text-neutral-700">
              Mensaje *
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              required
              rows={5}
              value={form.mensaje}
              onChange={handleChange}
              className="mt-1.5 w-full rounded-xl border border-neutral-300 px-4 py-2.5 text-neutral-900 outline-none transition-colors focus:border-wood-400"
            />
          </div>

          <label className="flex items-start gap-3 text-sm text-neutral-600">
            <input
              type="checkbox"
              name="privacidad"
              required
              checked={form.privacidad}
              onChange={handleChange}
              className="mt-0.5 h-4 w-4 shrink-0 rounded border-neutral-300 text-wood-400 focus:ring-wood-400"
            />
            He leído y acepto la política de privacidad.
          </label>

          <div ref={recaptcha.containerRef} />

          {status === 'recaptcha' && (
            <p className="text-sm text-red-600">
              Por favor, verifica que no eres un robot antes de enviar el
              formulario.
            </p>
          )}

          {status === 'error' && (
            <p className="text-sm text-red-600">
              Ha ocurrido un error en el envío de tu mensaje, por favor
              inténtalo más tarde.
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="rounded-full bg-wood-400 px-8 py-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-wood-300 disabled:opacity-60"
          >
            {status === 'sending' ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      )}
    </section>
  )
}

export default Contact
