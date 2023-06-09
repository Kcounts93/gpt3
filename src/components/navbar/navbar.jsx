import React, { useState } from 'react'
import { FaAlignRight, FaWindowMinimize } from 'react-icons/fa'
import './navbar.css'
import  logo from '../../assets/logo.svg';

// BEM - Block Element Modifier

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">What is GPT3?</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu ] = useState(false);

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu />
        </div>  
      </div>
      <div className='gpt3__navbar-sign'>
      <a href="https://chat.openai.com/auth/login">Sign In</a>
        <button type='button'> <a href="https://auth0.openai.com/u/signup">Sign Up</a></button>
      </div>
      <div className='gpt3__navbar-menu'>
      {toggleMenu
          ? <FaWindowMinimize color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <FaAlignRight color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <Menu />
              <div className='gpt3__navbar-menu_container-links-sign'>
              <a href="https://chat.openai.com/auth/login">Sign In</a>
                <button type='button'>
                  <a href="https://auth0.openai.com/u/signup">Sign Up</a>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar;