import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Clock } from 'lucide-react'
import Reveal from '../components/Reveal'
import ScrollLine from '../components/ScrollLine'
import ReviewsCarousel from '../components/ReviewsCarousel'
import { useCookieConsent } from '../lib/useCookieConsent'
import SEO from '../components/SEO'
import podologo from '../assets/equipo/rodrigo-consulta.jpg'
import podologo2 from '../assets/equipo/rodrigo-retrato.jpg'
import clinica01 from '../assets/clinica/box-01.jpg'
import clinica02 from '../assets/clinica/sala-fisioterapia.jpg'
import clinica03 from '../assets/clinica/fachada.jpg'
import clinica04 from '../assets/clinica/recepcion.jpg'
import clinica05 from '../assets/clinica/box-02.jpg'
import quiropodiaIcon from '../assets/icons/quiropodia.png'
import ctaBackground from '../assets/abstract-blur-gym-fitness.jpg'
import analisisMarchaIcon from '../assets/icons/analisis-marcha.png'
import plantillaIcon from '../assets/icons/plantilla.png'
import podologiaFisicaIcon from '../assets/icons/podologia-fisica.png'
import agujaPieIcon from '../assets/icons/aguja-pie.png'

const clinicImages = [
  { src: podologo2, alt: 'Rodrigo Jiménez Martín en consulta' },
  { src: clinica04, alt: 'Recepción de la clínica' },
  { src: clinica02, alt: 'Sala de fisioterapia' },
  { src: clinica01, alt: 'Box de tratamiento 2' },
  { src: clinica05, alt: 'Box de tratamiento con equipo de ecografía' },
  { src: clinica03, alt: 'Fachada de la clínica' },
]

const services = [
  {
    title: 'Quiropodología',
    subtitle: '(Consultas rutinarias de podología)',
    description: 'Uñas encarnadas, callos.',
    iconImage: quiropodiaIcon,
  },
  {
    title: 'Análisis de la marcha',
    description: 'Valoración muscular.',
    iconImage: analisisMarchaIcon,
  },
  {
    title: 'Ortopodología',
    description: 'Plantillas.',
    iconImage: plantillaIcon,
  },
  {
    title: 'Podología física',
    description: 'Tratamientos manuales en el pie.',
    iconImage: podologiaFisicaIcon,
  },
  {
    title: 'Tratamientos invasivos en el pie',
    description: 'Pie diabético.',
    iconImage: agujaPieIcon,
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
              Recupera tu movilidad, alivia el dolor y vuelve a disfrutar de tu día a día. Te acompañamos con tratamientos personalizados de podología y fisioterapia pensados para mejorar tu calidad de vida.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
              <Link
                to="/contacto"
                className="rounded-full bg-wood-400 px-6 py-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-wood-300"
              >
                Pedir cita previa
              </Link>
              <Link
                to="/servicios"
                className="rounded-full border border-neutral-300 bg-white/60 px-6 py-3 text-sm font-medium text-neutral-700 transition-colors hover:border-neutral-400 hover:text-neutral-900"
              >
                Conoce nuestros servicios
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-linear-to-b from-white via-wood-100 to-white">
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
          Rodrigo Jiménez Martín, tu experto en podología y fisioterapia
        </h2>
        <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:mt-6 md:text-lg">
          Instalaciones modernas y un trato cercano, pensados para que te
          sientas en las mejores manos desde el primer momento.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-16 sm:grid-cols-4 sm:gap-4">
          {clinicImages.map((image, index) => (
            <Reveal
              key={image.src}
              delay={index * 60}
              className={index === 0 ? 'col-span-2 row-span-2' : ''}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="aspect-square h-full w-full rounded-2xl object-cover shadow-sm"
              />
            </Reveal>
          ))}
        </div>
      </section>

      <ScrollLine />

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
          Confía en nuestros expertos para el cuidado integral de tus pies
        </h2>
        <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:mt-6 md:text-lg">
          Todo lo que tus pies y tu cuerpo necesitan, en un solo lugar.
        </p>

        <div className="mt-10 divide-y divide-neutral-200 border-t border-neutral-200 sm:mt-16">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 80}>
              <div className="flex flex-col gap-3 py-6 sm:flex-row sm:items-start sm:gap-8 sm:py-8">
                <img
                  src={service.iconImage}
                  alt=""
                  className="h-16 w-28 shrink-0 object-contain object-left sm:mt-1"
                />
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-neutral-900 sm:text-xl md:text-2xl">
                    {service.title}
                  </h3>
                  {service.subtitle && (
                    <p className="mt-1 text-sm font-medium text-neutral-500">
                      {service.subtitle}
                    </p>
                  )}
                  <p className="mt-2 text-base leading-relaxed text-neutral-600">
                    {service.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      </div>

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
            <Link
              to="/contacto"
              className="rounded-full bg-wood-400 px-6 py-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-wood-300"
            >
              Pedir cita previa
            </Link>
            <a
              href="tel:+34680927023"
              className="text-sm font-medium text-neutral-200 transition-colors hover:text-white"
            >
              680 927 023
            </a>
          </div>
        </div>
      </section>

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
    </>
  )
}

export default Home
