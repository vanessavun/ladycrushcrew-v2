import React from 'react'
import './events-styles.css'
import eventPic from '../../assets/lccpacpipe.jpg'

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
              <h3>Pacific Pipe Meetup - Every Fourth Friday!</h3>
              <img src={eventPic} alt='Women and non-binary climbers' />
              <li>Come join us for an evening of climbing and cheering each other on. Bring all your best gal friends and come meet other awesome women in the community. All levels welcome! If you plan on rope climbing you must be Touchstone belay certified. Free for Touchstone members. $20 day pass for non-members - just let the front desk know you’re there for the meetup!</li>
              <li>Questions? Contact <b>info@ladycrushcrew.com</b> or <b>IG @ladycrushcrew</b>.</li>
            </ul>
          </div>
        </div>
        <div className='events-regional'>
          <h2>Regional:</h2>
          <div className='events-list'>
          <ul>
              <li>No events planned.</li>
            </ul>
          </div>
        </div>
        <div className='events-global'>
          <h2>Global:</h2>
          <div className='events-list'>
          <ul>
              <li>No events planned.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events