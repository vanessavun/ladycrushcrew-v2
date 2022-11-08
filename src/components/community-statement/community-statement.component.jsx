import React from 'react'
import { Link } from 'react-router-dom'
import './community-styles.css'
import { Slide, Fade } from 'react-awesome-reveal'

function CommunityStatement() {

  return (
    <div>
      <section className="community">
        <Slide duration={2000} direction="up" triggerOnce>
          <h2>Lady Crush Crew is a community for ladies who crush beta while empowering each other through climbing.</h2>
        </Slide>
      </section>
      <section className="community-photos">
        <div className="group" id="one">
        </div>
        <div className="group" id="two">
        </div>
        <div className="group" id="three">
        </div>
      </section>
      <section className="crush">
        <Slide duration={2000} direction="up" triggerOnce>
          <h2>Come crush with us! Check the <Link to='/events'>Events</Link> page for a meetup near you.
          </h2>
        </Slide>
      </section>
    </div>
  )
}

export default CommunityStatement