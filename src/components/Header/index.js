import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'

// Components
import Login from '../User'

// Styles
import './style.scss'

function Header({ handleClick }) {
  return (
    <header className='header'>
      <button className='header__button' onClick={handleClick}>
        <GiHamburgerMenu size={25} color='#009CD6' />
      </button>
      <Login />
    </header>
  )
}

export default Header;