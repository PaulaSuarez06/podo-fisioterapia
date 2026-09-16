import { useEffect, useState } from 'react'
import { getConsent, subscribeConsent } from './cookieConsent'

export function useCookieConsent() {
  const [consent, setConsentState] = useState(() => getConsent())

  useEffect(() => subscribeConsent(setConsentState), [])

  return consent
}
