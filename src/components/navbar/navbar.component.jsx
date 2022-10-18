import React from 'react'

function Navbar() {
  return (
    <header className="container">
        <div className="logo">
            <h1>LADYCRVSHCREW</h1>
        </div>
        <nav className="links">
            <a href="http://localhost:3000/">About Us</a>
            <a href="http://localhost:3000/">Events</a>
            <a href="http://localhost:3000/">Shop</a>
            <a href="http://localhost:3000/">Volunteer</a>
        </nav>
    </header>
  )
}

export default Navbar