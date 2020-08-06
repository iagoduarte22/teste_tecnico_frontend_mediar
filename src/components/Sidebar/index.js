import React, { useState } from 'react';

import { FaUser,FaHome, FaFacebook, FaApple, FaPowerOff, FaInfoCircle } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import {DiAndroid} from 'react-icons/di'

// Assets
import Logo from '../../images/logo.png'

// Styles
import './style.scss'

function Sidebar({ open }) {
  const [management, setManagement] = useState(false)
  const [glossary, setGlossary] = useState(false)

  function handleMangagementClick() {
    setManagement(!management)
  }
  
  function handleGlossaryClick() {
    setGlossary(!glossary)
  }

  return (
    <aside className={`sidebar ${open ? 'active' : ''}`}>
      <img className='sidebar__logo' src={Logo} alt='Mediar' title='Mediar' />
      <div className='user'>
        <div className='user__avatar'>
          <FaUser color='#ffffff' size={35} />
        </div>
        <div className='user__info'>
          <p>Welcome</p>
          <p>Demo</p>
        </div>
      </div>

      <div className='sidebar__title'>
        <p>Distribution Management</p>
      </div>

      <nav className='menu'>
        <ul>
          <li onClick={handleMangagementClick} className='menu__item'>
            <div className='menu__item--content'>
              <FaHome color='#ffffff' size={15}/>
              <p>Management Distribution</p>
              <IoIosArrowDown color='#ffffff' size={12} />
            </div>
            <ul className={`submenu ${management ? 'active' : ''}`}>
              <li className='submenu__item'>
                <p>Dashboards</p>
                <IoIosArrowDown color='#ffffff' size={12} />
              </li>
            </ul>
          </li>
          <li onClick={handleGlossaryClick} className='menu__item'>
            <div className='menu__item--content'>
              <FaInfoCircle color='#ffffff' size={15}/>
              <p>Glossary</p>
              <IoIosArrowDown color='#ffffff' size={12} />
            </div>
            <ul className={`submenu ${glossary ? 'active' : ''}`}>
              <li className='submenu__item'>
                <p>Item</p>
                <IoIosArrowDown color='#ffffff' size={12} />
              </li>
              <li className='submenu__item'>
                <p>Item</p>
                <IoIosArrowDown color='#ffffff' size={12} />
              </li>
              <li className='submenu__item'>
                <p>Item</p>
                <IoIosArrowDown color='#ffffff' size={12} />
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <footer className='footer'>
        <button><FaFacebook size={15} color='#009CD6' /></button>
        <button><FaApple size={15} color='#009CD6' /></button>
        <button><DiAndroid size={15} color='#009CD6' /></button>
        <button><FaPowerOff size={15} color='#009CD6' /></button>
      </footer>
    </aside>
  )
}

export default Sidebar;