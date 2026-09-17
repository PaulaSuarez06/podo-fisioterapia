import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import ServiceList from '../components/ServiceList'
import Accordion from '../components/Accordion'
import ScrollLine from '../components/ScrollLine'
import rodrigoRetrato2 from '../assets/equipo/rodrigo-retrato-2.jpg'

const introHighlights = [
  {
    title: 'Recupera tu equilibrio y pisa con confianza',
    text: 'Nuestros tratamientos personalizados de podología te ayudarán a superar cualquier dolor o molestia en tus pies, permitiéndote dar pasos firmes hacia una vida sin limitaciones.',
  },
  {
    title: 'Libera tu cuerpo y vive sin restricciones',
    text: 'Con nuestra fisioterapia de vanguardia, deshazte del dolor, mejora tu movilidad y redescubre la alegría de moverte con soltura y flexibilidad.',
  },
  {
    title: 'Pon tus pies en manos expertas',
    text: 'Nuestro equipo altamente cualificado y apasionado está listo para brindarte atención especializada y resultados excepcionales. Confía en nosotros para cuidar de tus pies y ayudarte a alcanzar un bienestar total.',
  },
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

function Services() {
  return (
    <>
      <SEO
        title="Servicios"
        description="Servicios de podología y fisioterapia en Valladolid: quiropodología, terapia manual, fisioterapia deportiva, valoración musculoesquelética y mucho más."
        path="/servicios"
      />

      <div className="bg-linear-to-b from-white via-wood-100 to-white">
      <section>
        <div className="mx-auto grid max-w-5xl items-center gap-8 px-4 py-10 sm:gap-10 sm:px-6 sm:py-16 md:grid-cols-2 md:gap-16 md:py-20">
          <div className="order-1">
            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
              ¡Cuida tus pies y libera tu cuerpo!
            </h1>
            <p className="mt-4 text-justify text-base leading-relaxed text-neutral-600 sm:mt-6 md:text-lg">
              Encuentra soluciones integrales para el cuidado de tus pies y
              la recuperación de tu cuerpo en un solo lugar.
            </p>
            <Link
              to="/contacto"
              className="mt-6 inline-block rounded-full bg-wood-400 px-6 py-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-wood-300 sm:mt-8"
            >
              Solicita cita previa ya
            </Link>
          </div>

          <div className="order-2">
            <img
              src={rodrigoRetrato2}
              alt="Rodrigo Jiménez Martín, podólogo y fisioterapeuta"
              className="signature-corner aspect-square w-full object-cover shadow-sm sm:aspect-4/5"
            />
            <div className="mt-4 rounded-2xl bg-white/70 p-5 text-sm text-neutral-700">
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

        <div className="mx-auto max-w-5xl px-4 pb-12 sm:px-6 sm:pb-16">
          <div className="grid gap-6 sm:grid-cols-3">
            {introHighlights.map((item) => (
              <div key={item.title} className="rounded-3xl bg-white/70 p-6">
                <h2 className="font-semibold text-neutral-900">{item.title}</h2>
                <p className="mt-2 text-justify text-sm leading-relaxed text-neutral-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ScrollLine />

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
            Servicios especializados de calidad
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600 md:text-base">
            Un abordaje completo del pie y del cuerpo, con técnicas
            especializadas de podología y fisioterapia adaptadas a cada
            paciente.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-3xl px-4 sm:px-6">
          <ServiceList items={allServices} />
        </div>
      </section>
      </div>

      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
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

export default Services
