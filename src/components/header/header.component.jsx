import React from 'react'
import { Bounce } from 'react-awesome-reveal'

function Header() {
  return (
    <section class="header-photo">
        <div class="header-description">
          <Bounce cascade duration={1500} triggerOnce>
            <h2>"Strength lies in differences, not similarities."</h2>
            <h3>Stephen Covey</h3> 
          </Bounce>
        </div>
    </section>
  )
}

export default Header