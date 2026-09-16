import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import Carousel from '../components/Carousel'
import Reveal from '../components/Reveal'
import ScrollLine from '../components/ScrollLine'
import ReviewsCarousel from '../components/ReviewsCarousel'
import { useCookieConsent } from '../lib/useCookieConsent'
import podologo from '../assets/podologo_01.jpg'
import podologo2 from '../assets/podologo_02.jpg'
import clinica01 from '../assets/clinica_01.jpg'
import clinica02 from '../assets/clinica_02.jpg'
import clinica03 from '../assets/clinica_03.jpg'
import clinica04 from '../assets/clinica_04.jpg'
import clinica05 from '../assets/clinica_05.jpg'
import quiropodiaIcon from '../assets/icons/quiropodia.png'
import ctaBackground from '../assets/cta-background.jpg'
import analisisMarchaIcon from '../assets/icons/analisis_marcha.png'
import plantillaIcon from '../assets/icons/plantilla.png'
import podologiaFisicaIcon from '../assets/icons/podologia_fisica.png'
import agujaPieIcon from '../assets/icons/aguja_pie.png'

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
      <div className="bg-linear-to-b from-white via-wood-100 to-white">
      <section>
        <div className="mx-auto grid max-w-5xl items-center gap-8 px-4 py-10 sm:px-6 sm:py-12 md:grid-cols-2 md:gap-16 md:py-20">
        <div className="order-1 md:order-1">
          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
            Paso a paso hacia el bienestar
          </h1>
          <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:mt-6 md:text-lg">
            Descubre nuestra atención integral en podología y fisioterapia y
            camina con confianza, cuidamos de tus pies: tu salud es nuestra
            prioridad.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
            <Link
              to="/contacto"
              className="rounded-full bg-wood-400 px-6 py-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-wood-300"
            >
              Pedir cita previa
            </Link>
            <Link
              to="/sobre-nosotros"
              className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-700 transition-colors hover:border-neutral-400 hover:text-neutral-900"
            >
              Conoce nuestros servicios
            </Link>
          </div>
        </div>

        <div className="order-2 md:order-2">
          <Carousel images={clinicImages} />
        </div>
        </div>
      </section>

      <ScrollLine />

      <section>
        <div className="mx-auto grid max-w-5xl items-center gap-8 px-4 py-12 sm:gap-10 sm:px-6 sm:py-16 md:grid-cols-2 md:gap-16 md:py-20">
          <div className="order-1 md:order-1">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
              Pasión por el cuidado integral: Rodrigo Jiménez Martín, tu
              experto en podología y fisioterapia
            </h2>
            <p className="mt-4 text-justify text-base leading-relaxed text-neutral-600 sm:mt-6 md:text-lg">
              ¡Bienvenidos! Soy Rodrigo Jiménez Martín, un profesional
              capacitado para brindarte una atención integral en el campo
              de la podología y la fisioterapia. Con amplias competencias
              y una pasión por el cuidado de la salud, mi objetivo
              principal es ayudarte a mejorar tu bienestar y calidad de
              vida.
            </p>
          </div>

          <div className="order-2 md:order-2">
            <img
              src={podologo}
              alt="Rodrigo Jiménez Martín"
              className="signature-corner aspect-square w-full object-cover shadow-sm sm:aspect-4/5"
            />
          </div>
        </div>
      </section>

      <ScrollLine />

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
            Confía en nuestros expertos para el cuidado integral de tus
            pies
          </h2>
          <p className="mt-4 text-justify text-base leading-relaxed text-neutral-600 sm:mt-6 md:text-lg">
            En nuestro centro de podología y fisioterapia ofrecemos una
            amplia gama de servicios: desde la quiropodología y la
            ortopodología hasta el análisis de la marcha con valoración
            muscular y los tratamientos invasivos en el pie. Todo lo que
            necesitas en un solo lugar, porque tu bienestar es nuestra
            prioridad.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl divide-y divide-neutral-200 border-t border-neutral-200 sm:mt-16">
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
        className="relative overflow-hidden border-t border-neutral-200 bg-cover bg-center bg-scroll md:bg-fixed"
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
