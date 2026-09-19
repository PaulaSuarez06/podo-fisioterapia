import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import CookiePolicy from './pages/CookiePolicy'
import LegalNotice from './pages/LegalNotice'
import PrivacyPolicy from './pages/PrivacyPolicy'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="servicios"
          element={<Navigate to="/#servicios" replace />}
        />
        <Route
          path="contacto"
          element={<Navigate to="/#contacto" replace />}
        />
        <Route path="politica-de-cookies" element={<CookiePolicy />} />
        <Route path="aviso-legal" element={<LegalNotice />} />
        <Route path="politica-de-privacidad" element={<PrivacyPolicy />} />
      </Route>
    </Routes>
  )
}

export default App
