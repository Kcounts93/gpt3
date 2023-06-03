import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step into the future before others?</h1>
      </div>
      <div className='gpt__footer-btn'>
        <p>Request Early Access</p>
      </div>

      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt='logo'/>
          <p>3180 18th Street, San Francisco, CA 94110 All Rights Reserved </p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p></p>
          
        </div>
      </div>
    </div>
  )
}

export default Footer;