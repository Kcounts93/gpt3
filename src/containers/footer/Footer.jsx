import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step into the future before others?</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <a href="https://auth0.openai.com/u/signup">Request Early Access</a>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt='logo'/>
          <p>Unleashing the Power of Language: GPT-3, where imagination meets intelligence.</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Products</h4>
          <a href="https://openai.com/product">Product</a>
          <a href="https://openai.com/gpt-4">GPT-4</a>
          <a href="https://openai.com/dall-e-2">DALL·E 2</a>
          <a href="https://openai.com/pricing">Pricing</a>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Research</h4>
          <a href="https://openai.com/research/overview">Overview</a>
          <a href="https://openai.com/research">Index</a>
          <a href="https://openai.com/customer-stories">Customer Stories</a>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <a href="https://openai.com/about">About</a>
          <a href="https://openai.com/careers">Careers</a>
          <a href="https://openai.com/blog">Blog</a>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>3180 18th Street San Francisco, CA 94110 All Rights Reserved </p>
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer;