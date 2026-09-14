import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Layout() {
  return (
    <>
      <Header />
      <main className="min-h-[60vh] p-8">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
