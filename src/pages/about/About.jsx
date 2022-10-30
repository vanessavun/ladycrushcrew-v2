import React from 'react'
import './about-styles.css'

function About() {
  return (
    <>
      <div className='about-container'>
        <div className='about-header'>
          <h1>About LCC<span id="about-emote">🥳</span></h1>
        </div>
        <div className='about-mission'>
          <h2>Mission</h2>
          <p>Our mission is to become involved in the climbing community by hosting meet ups for ladies (trans and cis), non-binary, 2 Spirit and friends, stewardship through crag clean ups, highlighting climbers on our social media platforms, and partnering with climbing organizations for events, raffles, and giveaways.</p>
        </div>
        <div className='about-vision'>
          <h2>Vision</h2>
          <p>To be the space for empowering ladies (trans and cis) and non-binary people through climbing.</p>
        </div>
        <div className='about-locations'>
          <h3>Meet Up Locations</h3>
          <p>Visit the events page or our Instagram for meet up dates, times, and locations! Here are some places we have held events.</p>
          <h4>San Francisco Bay Area & Los Angeles Metropolitan Area</h4>
          <ul>
            <li>Dogpatch Boulders</li>
            <li>Mission Cliffs</li>
            <li>Planet Granite Belmont</li>
            <li>LA Boulders</li>
            <li>Verdigo Boulders</li>
            <li>Rockreation LA</li>
            <li>Hanger 18 Riverside</li>
            <li>The Stronghold Climbing Gym</li>
          </ul>
          <h4>Outdoors</h4>
          <ul>
            <li>Indian Rock Park / Mortar Rock Park</li>
            <li>Joshua Tree National Park</li>
            <li>Stoney Point Park</li>
            <li>Bishop, California</li>
            <li>Yosemite National Park</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default About