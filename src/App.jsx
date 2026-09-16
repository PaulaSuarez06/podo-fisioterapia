import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import CookiePolicy from './pages/CookiePolicy'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sobre-nosotros" element={<About />} />
        <Route path="contacto" element={<Contact />} />
        <Route path="politica-de-cookies" element={<CookiePolicy />} />
      </Route>
    </Routes>
  )
}

export default App
