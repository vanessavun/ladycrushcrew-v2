import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function Layout() {
  return (
    <>
      <header className="container">
        <div className="logo">
          <h1>LADYCRVSHCREW</h1>
        </div>
        <nav className="links">
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/events'>Events</Link>
          <Link to='/shop'>Shop</Link>
          <Link to='/volunteer'>Volunteer</Link>
        </nav>
      </header>

      <Outlet />

      <footer>
        <h3>LADYCRUSHCREW</h3>
        <p>info@ladycrushcrew.com</p>
        <p>Website design practice based on real community group: <a href="http://www.ladycrushcrew.com">ladycrushcrew.com</a></p>
      </footer>
    </>
  )
}

export default Layout