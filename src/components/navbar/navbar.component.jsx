import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <header className="container">
        <div className="logo">
            <h1>LADYCRVSHCREW</h1>
        </div>
        <nav className="links">
          <Link to='/'>Home</Link>
          <Link to='/about'>About Us</Link>
          <Link to='/events'>Events</Link>
          <Link to='/shop'>Shop</Link>
          <Link to='/volunteer'>Volunteer</Link>
        </nav>
    </header>
  )
}

export default Navbar