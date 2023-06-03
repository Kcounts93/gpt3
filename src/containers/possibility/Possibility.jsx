import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='#possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt='possibility' /> 
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Developed by OpenAI, GPT-3 offers possibilities beyond imagination. It comprehends and generates human-like text, transforming industries like content creation, customer service, education, and healthcare. With its vast knowledge base, GPT-3 writes code, composes poetry, engages in lifelike conversations, and revolutionizes various fields, proving that its potential knows no bounds.</p>
        <button type='button'>Request Early Access</button>
      </div>
    </div>
  )
}

export default Possibility;