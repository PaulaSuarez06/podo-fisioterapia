import SEO from '../components/SEO'

function About() {
  return (
    <>
      <SEO
        title="Sobre nosotros"
        description="Conoce a Rodrigo Jiménez Martín, podólogo y fisioterapeuta en Valladolid, y las instalaciones de nuestra clínica."
        path="/sobre-nosotros"
      />
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <h1>Sobre nosotros</h1>
        <p>Información sobre nuestra clínica y equipo profesional.</p>
      </section>
    </>
  )
}

export default About
