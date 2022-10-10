import React, {useState} from 'react';
import {FiAlignJustify, FiX} from 'react-icons/fi'
import logo from '../../assets/logo.svg';

import './navbar.css';
function Menu1() {
  return (
    <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">What is GPT3?</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
</>
  );
}
// BEM --> Block Element Modifier

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
          <div className='gpt3__navbar-links_logo'>
              <img src={logo} alt="logo" />
          </div>
          <div className='gpt3__navbar-links_container'>
             <Menu1 />
          </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu
         ? <FiX color ="#fff" size={27} onClick = {()=> setToggleMenu(false)}/>
         : <FiAlignJustify color ="#fff" size={27} onClick = {()=> setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
              <div className='gpt3__navbar-menu_container-links'>
              <Menu1 />
              <div className='gpt3__navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>
             
              </div>
          </div>
        )}
       
      </div>
    </div>
  )
}

export default Navbar
