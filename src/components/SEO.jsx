import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'Podología & Fisioterapia Rodrigo Jiménez'
const SITE_URL = 'https://podofisioterapia.netlify.app'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`

function SEO({ title, description, path = '', noIndex = false }) {
  const fullTitle = `${title} | ${SITE_NAME}`
  const url = `${SITE_URL}${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={DEFAULT_IMAGE} />

      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_IMAGE} />
    </Helmet>
  )
}

export default SEO
