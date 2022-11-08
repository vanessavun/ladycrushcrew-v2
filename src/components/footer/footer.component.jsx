import React from 'react'
import logo from '../../assets/LCCLogoCircleSticker.png'
import instagram from '../../assets/instagram.png'
import './footer.styles.css'

function Footer() {
  return (
    <footer className='footer-container'>
      <div className='footer-lcc'>
        <img src={logo} className='footer-logo' alt='Lady Crush Crew Logo' />
      </div>
      <div className='footer-info'>
        <p>info at ladycrushcrew.com</p>
        <p className='pixel-perfect'>
          <a href="https://www.flaticon.com/free-icons/instagram" title="instagram icons" target='_blank' rel='noreferrer'>IG icon by Pixel perfect</a>
        </p>
      </div>
      <div className='footer-instagram'>
        <a href='https://www.instagram.com/ladycrushcrew/' target='_blank' rel='noreferrer'>
          <img src={instagram}  className='footer-instagram-img' alt='Instagram logo'/>
        </a>
      </div>
    </footer>
  )
}

export default Footer