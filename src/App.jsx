import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import CookiePolicy from './pages/CookiePolicy'
import LegalNotice from './pages/LegalNotice'
import PrivacyPolicy from './pages/PrivacyPolicy'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="servicios" element={<Services />} />
        <Route path="contacto" element={<Contact />} />
        <Route path="politica-de-cookies" element={<CookiePolicy />} />
        <Route path="aviso-legal" element={<LegalNotice />} />
        <Route path="politica-de-privacidad" element={<PrivacyPolicy />} />
      </Route>
    </Routes>
  )
}

export default App
