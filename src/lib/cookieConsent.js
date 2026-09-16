const STORAGE_KEY = 'cookie-consent'
const listeners = new Set()

function readStoredConsent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch (error) {
    return null
  }
}

function writeStoredConsent(consent) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent))
  } catch (error) {
    // localStorage no disponible: la preferencia no persiste, sin más consecuencias.
  }
}

export function getConsent() {
  return readStoredConsent()
}

export function setConsent(functional) {
  const consent = { necessary: true, functional, updatedAt: new Date().toISOString() }
  writeStoredConsent(consent)
  listeners.forEach((listener) => listener(consent))
  return consent
}

export function subscribeConsent(listener) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}
