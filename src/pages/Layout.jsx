import React from 'react'
import { Outlet} from 'react-router-dom'
import Footer from '../components/footer/footer.component'
import Navbar from '../components/navbar/navbar.component'

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout