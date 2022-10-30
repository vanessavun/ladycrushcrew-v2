import React from 'react'
import './events-styles.css'

function Events() {
  return (
    <div>
      <div className='events-container'>
        <div className='events-header'>
          <h1>Events</h1>
        </div>
        <div className='events-california'>
          <h2>California:</h2>
          <div className='events-list'>
            <ul>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae blanditiis vitae adipisci ipsam laboriosam ex dicta alias aliquid beatae quis voluptates non ab assumenda repellendus, ratione saepe repellat numquam cumque.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae blanditiis vitae adipisci ipsam laboriosam ex dicta alias aliquid beatae quis voluptates non ab assumenda repellendus, ratione saepe repellat numquam cumque.</li>
            </ul>
          </div>
        </div>
        <div className='events-regional'>
          <h2>Regional:</h2>
          <div className='events-list'>
          <ul>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae blanditiis vitae adipisci ipsam laboriosam ex dicta alias aliquid beatae quis voluptates non ab assumenda repellendus, ratione saepe repellat numquam cumque.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae blanditiis vitae adipisci ipsam laboriosam ex dicta alias aliquid beatae quis voluptates non ab assumenda repellendus, ratione saepe repellat numquam cumque.</li>
            </ul>
          </div>
        </div>
        <div className='events-global'>
          <h2>Global:</h2>
          <div className='events-list'>
          <ul>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae blanditiis vitae adipisci ipsam laboriosam ex dicta alias aliquid beatae quis voluptates non ab assumenda repellendus, ratione saepe repellat numquam cumque.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae blanditiis vitae adipisci ipsam laboriosam ex dicta alias aliquid beatae quis voluptates non ab assumenda repellendus, ratione saepe repellat numquam cumque.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events