import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import CookieBanner from './CookieBanner'

function Layout() {
  return (
    <>
      <Header />
      <main className="min-h-[60vh]">
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}

export default Layout
