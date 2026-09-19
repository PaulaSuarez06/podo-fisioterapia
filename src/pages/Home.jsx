import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Clock, Phone } from 'lucide-react'
import ScrollLine from '../components/ScrollLine'
import ReviewsCarousel from '../components/ReviewsCarousel'
import ServiceList from '../components/ServiceList'
import Accordion from '../components/Accordion'
import Carousel from '../components/Carousel'
import { useCookieConsent } from '../lib/useCookieConsent'
import SEO from '../components/SEO'
import podologo from '../assets/equipo/rodrigo-consulta.jpg'
import rodrigoRetrato2 from '../assets/equipo/rodrigo-retrato-2.jpg'
import clinica01 from '../assets/clinica/box-01.jpg'
import clinica02 from '../assets/clinica/sala-fisioterapia.jpg'
import clinica03 from '../assets/clinica/fachada.jpg'
import clinica04 from '../assets/clinica/recepcion.jpg'
import clinica05 from '../assets/clinica/box-02.jpg'
import ctaBackground from '../assets/abstract-blur-gym-fitness.jpg'

const clinicImages = [
  { src: clinica04, alt: 'Recepción de la clínica' },
  { src: clinica02, alt: 'Sala de fisioterapia' },
  { src: clinica01, alt: 'Box de tratamiento 2' },
  { src: clinica05, alt: 'Box de tratamiento con equipo de ecografía' },
  { src: clinica03, alt: 'Fachada de la clínica' },
]

const allServices = [
  {
    title: 'Quiropodología general',
    description:
      'Diagnóstico y tratamiento de uñas encarnadas, callosidades, hongos ungueales, verrugas plantares, deformidades, lesiones y problemas dermatológicos, mediante técnicas y equipos especializados.',
  },
  {
    title: 'Valoración musculoesquelética',
    description:
      'Evaluación especializada de puntos gatillo miofasciales, contracturas, dolores e incapacidades del paciente.',
  },
  {
    title: 'Aplicación de corrientes TENS',
    description: 'Corrientes analgésicas para el alivio del dolor.',
  },
  {
    title: 'Valoración de déficits musculares',
    description: 'Análisis y posterior rehabilitación y fortalecimiento muscular.',
  },
  {
    title: 'Masoterapia',
    description: 'Calmar y relajar estructuras a través del masaje.',
  },
  {
    title: 'Tratamiento de patologías',
    description: 'Abordaje terapéutico de problemas en espalda, hombros, cadera, muslo y pie.',
  },
  {
    title: 'Fisioterapia en ATM',
    description: 'Tratamiento de patologías como el bruxismo en la articulación temporomandibular.',
  },
  {
    title: 'Fisioterapia deportiva',
    description:
      'Descargas musculares, vendajes preventivos, análisis de técnica y fortalecimiento estructural.',
  },
  {
    title: 'Terapia manual',
    description: 'Movilizaciones, manipulaciones y técnicas especializadas de fisioterapia.',
  },
]

const faqs = [
  {
    question: '¿Qué es la podología y cuándo debería consultar a un podólogo?',
    answer:
      'La podología es la especialidad médica que se enfoca en el estudio, diagnóstico y tratamiento de las enfermedades y alteraciones que afectan los pies. Deberías consultar a un podólogo si experimentas dolor en los pies, cambios en la piel o las uñas, deformidades, lesiones o cualquier otro problema relacionado con los pies.',
  },
  {
    question: '¿Cuáles son los beneficios de usar plantillas ortopédicas?',
    answer:
      'Las plantillas ortopédicas a medida pueden proporcionar varios beneficios. Ayudan a corregir la alineación y distribución del peso en los pies, reduciendo así el dolor y la presión en áreas problemáticas. También brindan soporte adicional, mejoran la estabilidad y previenen futuras lesiones. Además, pueden corregir problemas de marcha y mejorar la biomecánica del cuerpo en general.',
  },
  {
    question: '¿Qué condiciones pueden beneficiarse de la fisioterapia?',
    answer:
      'La fisioterapia es beneficiosa para una amplia gama de condiciones, como lesiones deportivas, dolor de espalda, rehabilitación postoperatoria, artritis, problemas musculoesqueléticos, disfunciones neurológicas y mucho más. Un fisioterapeuta puede evaluar tu condición específica y diseñar un plan de tratamiento personalizado para ayudarte a reducir el dolor, mejorar la función y promover la recuperación.',
  },
  {
    question: '¿Cuánto tiempo llevará recuperarme de una lesión deportiva con fisioterapia?',
    answer:
      'El tiempo de recuperación varía según la gravedad de la lesión y la respuesta individual de cada persona al tratamiento. Un fisioterapeuta evaluará tu lesión y establecerá un plan de tratamiento que se ajuste a tus necesidades. El tratamiento puede incluir terapia manual, ejercicios terapéuticos, modalidades de fisioterapia y educación para el autocuidado. Siguiendo el plan de tratamiento y las recomendaciones del fisioterapeuta, puedes esperar una recuperación gradual y progresiva.',
  },
  {
    question: '¿Qué medidas puedo tomar para mantener mis pies saludables?',
    answer: (
      <ul className="list-disc space-y-1.5 pl-5">
        <li>
          Lava tus pies a diario y sécalos bien, prestando especial atención
          a los espacios entre los dedos.
        </li>
        <li>
          Utiliza calzado adecuado y cómodo que se ajuste correctamente y
          brinde buen soporte.
        </li>
        <li>
          Recorta las uñas de los pies de forma recta y no demasiado cortas
          para prevenir las uñas encarnadas.
        </li>
        <li>
          Evita caminar descalzo en lugares públicos para reducir el riesgo
          de infecciones.
        </li>
        <li>
          Realiza ejercicios de estiramiento y fortalecimiento para los pies
          y las piernas.
        </li>
        <li>
          Si experimentas algún problema o dolor persistente, consulta a un
          podólogo para un diagnóstico y tratamiento adecuados.
        </li>
      </ul>
    ),
  },
]

const fallbackReviews = [
  {
    author: 'Dianibelle Taveras',
    date: 'Hace un mes',
    text: 'Muy contenta con la atención y amabilidad de Rodrigo, te explica todo muy bien desde el principio y está siempre pendiente de ti, lo recomiendo bastante. Estoy muy contenta con su trabajo y con las plantillas. Clínica recién reformada y acogedora.',
  },
  {
    author: 'Blanquita Luz',
    date: 'Hace 2 meses',
    text: 'Muy contenta con la atención, amabilidad y profesionalismo de Rodrigo, ha sido amable en el trato de mis pies y dando pautas para mejorar. Lo recomiendo 100%.',
  },
  {
    author: 'Einsly',
    date: 'Hace 7 meses',
    text: 'Realmente recomiendo esta clínica, además de ser nueva y contar con equipos de última tecnología, lo más valioso es el trabajo tan meticuloso y profesional de Rodrigo. De verdad da gusto encontrarse con profesionales apasionados por lo que hacen. Lo recomiendo!',
  },
]

const contactServiceOptions = ['Podología', 'Fisioterapia', 'Información']
const RECAPTCHA_SITE_KEY = '6LdnkKEqAAAAAPvyqoRAmjXxvE6evlb5z-5Ol90Y'

function useRecaptcha(enabled) {
  const containerRef = useRef(null)
  const widgetIdRef = useRef(null)

  useEffect(() => {
    if (!enabled) return

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
  }, [enabled])

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

function Home() {
  const consent = useCookieConsent()
  const [reviews, setReviews] = useState(fallbackReviews)

  useEffect(() => {
    fetch('/api/reviews')
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => {
        if (data.reviews?.length) setReviews(data.reviews)
      })
      .catch(() => {})
  }, [])

  const recaptchaEnabled = consent?.functional === true
  const recaptcha = useRecaptcha(recaptchaEnabled)
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    servicio: contactServiceOptions[0],
    mensaje: '',
    privacidad: false,
  })

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!recaptchaEnabled) {
      setStatus('cookies')
      return
    }

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
        servicio: contactServiceOptions[0],
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
    <>
      <SEO
        title="Inicio"
        description="Podología y fisioterapia en Valladolid. Quiropodología, análisis de la marcha, ortopodología, podología física y tratamientos invasivos en el pie con Rodrigo Jiménez Martín."
        path="/"
      />
      <section
        className="relative flex min-h-[55vh] items-center overflow-hidden bg-cover bg-center sm:min-h-[60vh]"
        style={{ backgroundImage: `url(${podologo})` }}
      >
        <div className="absolute inset-0 bg-white/80" />

        <div className="relative mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="max-w-lg">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-wood-500">
              <span className="h-px w-8 bg-wood-400" />
              Rodrigo Jiménez Martín
            </div>
            <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
              Paso a paso hacia el bienestar
            </h1>
            <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:mt-6 md:text-lg">
              Recupera tu movilidad, alivia el dolor y vuelve a disfrutar de
              tu día a día. Te acompañamos con tratamientos personalizados de
              podología y fisioterapia pensados para mejorar tu calidad de
              vida.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
              <a
                href="#contacto"
                className="rounded-full bg-wood-400 px-6 py-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-wood-300"
              >
                Pedir cita previa
              </a>
              <a
                href="#servicios"
                className="rounded-full border border-neutral-300 bg-white/60 px-6 py-3 text-sm font-medium text-neutral-700 transition-colors hover:border-neutral-400 hover:text-neutral-900"
              >
                Conoce nuestros servicios
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-linear-to-b from-white via-wood-100 to-white">
      <section id="clinica">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
          <div className="grid items-center gap-8 sm:gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <img
                src={rodrigoRetrato2}
                alt="Rodrigo Jiménez Martín, podólogo y fisioterapeuta"
                className="signature-corner aspect-square w-full object-cover shadow-sm sm:aspect-4/5"
              />
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
                Rodrigo Jiménez Martín, tu experto en podología y
                fisioterapia
              </h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:mt-6 md:text-lg">
                Un trato cercano y personalizado, pensado para que te
                sientas en las mejores manos desde el primer momento.
              </p>
              <div className="mt-6 rounded-2xl bg-white/70 p-5 text-sm text-neutral-700">
                <p className="font-semibold text-neutral-900">
                  Rodrigo Jiménez Martín
                </p>
                <p className="text-neutral-600">
                  Podólogo y Fisioterapeuta colegiado
                </p>
                <p className="mt-2">
                  Podólogo con número de colegiado: 838470450
                </p>
                <p>Fisioterapeuta con número de colegiado: 4291</p>
              </div>
            </div>
          </div>

          <div className="my-16">
            <ScrollLine />
          </div>

          <div className="grid items-center gap-8 sm:gap-10 md:grid-cols-2 md:gap-16">
            <div className="md:order-2">
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
                Nuestra clínica
              </h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:mt-6 md:text-lg">
                Instalaciones modernas y equipadas con la última tecnología,
                diseñadas para tu comodidad en cada visita.
              </p>
            </div>

            <div className="md:order-1">
              <Carousel images={clinicImages} />
            </div>
          </div>
        </div>
      </section>

      <ScrollLine />

      <section id="servicios">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
            Servicios especializados de calidad
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 sm:mt-6 md:text-lg">
            Un abordaje completo del pie y del cuerpo, con técnicas
            especializadas de podología y fisioterapia adaptadas a cada
            paciente.
          </p>

          <div className="mt-10 sm:mt-16">
            <ServiceList items={allServices} />
          </div>
        </div>
      </section>

      <div className="py-8">
        <ScrollLine />
      </div>
      </div>

      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto grid max-w-5xl items-stretch gap-8 px-4 py-12 sm:gap-10 sm:px-6 sm:py-16 md:grid-cols-2 md:gap-16 md:py-20">
          <div>
            <div className="flex items-center gap-2 text-neutral-900">
              <MapPin className="h-5 w-5 shrink-0 text-wood-400" strokeWidth={1.5} />
              <span className="text-sm font-medium">
                C. de Labradores, 33, 47004 Valladolid
              </span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-neutral-900">
              <Clock className="h-5 w-5 shrink-0 text-wood-400" strokeWidth={1.5} />
              <span className="text-sm font-medium">
                Lunes a viernes, 9:00–14:00 y 16:00–20:00
              </span>
            </div>
            <div className="signature-corner mt-4 h-64 overflow-hidden shadow-sm sm:h-full sm:min-h-64">
              {consent?.functional ? (
                <iframe
                  title="Ubicación de la clínica en el mapa"
                  src="https://www.google.com/maps?q=41.6462111,-4.720613&z=16&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-3 bg-neutral-100 p-6 text-center">
                  <p className="text-sm text-neutral-600">
                    Acepta las cookies funcionales para ver el mapa
                    interactivo.
                  </p>
                  <a
                    href="https://www.google.com/maps?q=41.6462111,-4.720613"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-neutral-300 px-5 py-2 text-sm font-medium text-neutral-700 transition-colors hover:border-neutral-400"
                  >
                    Ver en Google Maps
                  </a>
                </div>
              )}
            </div>
          </div>

          <ReviewsCarousel reviews={reviews} />
        </div>
      </section>

      <section
        className="relative overflow-hidden border-t border-neutral-200 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${ctaBackground})` }}
      >
        <div className="absolute inset-0 bg-neutral-900/30" />
        <div className="relative mx-auto max-w-2xl px-4 py-12 text-center sm:px-6 sm:py-16 md:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-wood-200 md:text-3xl">
            ¿Listo para cuidar tus pies?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-200 md:text-lg">
            Pide tu cita previa y da el primer paso hacia tu bienestar.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-8 sm:gap-4">
            <a
              href="#contacto"
              className="rounded-full bg-wood-400 px-6 py-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-wood-300"
            >
              Pedir cita previa
            </a>
            <a
              href="tel:+34680927023"
              className="text-sm font-medium text-neutral-200 transition-colors hover:text-white"
            >
              680 927 023
            </a>
          </div>
        </div>
      </section>

      <section id="contacto" className="border-t border-neutral-200">
        <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
            Contacto
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-600 md:text-lg">
            Ponte en contacto con nosotros y pide tu cita previa.
          </p>

          <div className="mt-8 flex flex-col gap-3 rounded-2xl bg-neutral-50 p-6 text-sm text-neutral-700">
            <a
              href="tel:+34680927023"
              className="flex items-center gap-2 transition-colors hover:text-neutral-900"
            >
              <Phone className="h-4 w-4 shrink-0 text-wood-400" strokeWidth={1.5} />
              680 927 023
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-wood-400" strokeWidth={1.5} />
              C. de Labradores, 33, Valladolid
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0 text-wood-400" strokeWidth={1.5} />
              L-V, 9:00–14:00 y 16:00–20:00
            </span>
          </div>

          {status === 'success' ? (
            <p className="mt-8 rounded-2xl bg-neutral-50 p-6 text-neutral-700">
              Gracias por contactar con nosotros, nos pondremos en contacto
              contigo a la mayor brevedad posible.
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
                  {contactServiceOptions.map((service) => (
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

              {recaptchaEnabled ? (
                <div ref={recaptcha.containerRef} />
              ) : (
                <p className="text-sm text-neutral-500">
                  Para enviar el formulario necesitamos cargar Google
                  reCAPTCHA, que requiere aceptar las cookies funcionales.
                  Puedes cambiar tu preferencia desde el aviso de cookies.
                </p>
              )}

              {status === 'cookies' && (
                <p className="text-sm text-red-600">
                  Debes aceptar las cookies funcionales para poder enviar el
                  formulario.
                </p>
              )}

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
        </div>
      </section>

      <div className="py-8">
        <ScrollLine />
      </div>

      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
            Recomendaciones y preguntas frecuentes
          </h2>
          <div className="mt-6">
            <Accordion items={faqs} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
