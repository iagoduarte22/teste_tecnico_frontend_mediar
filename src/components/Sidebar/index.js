import React from 'react';

import { FaUser,FaHome, FaFacebook, FaApple,FaPowerOff } from 'react-icons/fa'
import {DiAndroid} from 'react-icons/di'

// Assets
import Logo from '../../images/logo.png'

// Styles
import './style.scss'

function Sidebar({ open }) {
  return (
    <aside className={`sidebar ${open ? 'active' : ''}`}>
      <img className='sidebar__logo' src={Logo} alt='Mediar' />
      <div className='user'>
        <div className='user__avatar'>
          <FaUser color='#ffffff' size={35} />
        </div>
        <div className='user__info'>
          <p>Welcome</p>
          <p>Demo</p>
        </div>
      </div>
      <div className = 'menu'>
        <div className = 'menu__nome'>
          <p>DISTRIBUTION MANAGEMENT</p>
          <hr/>
        </div>
        <div className = 'menu__icon'>
          <FaHome color='#ffffff' size={15}/>
        </div> 
        <div className='menu__info'> 
          <ul>Management Distribution</ul>
          <li>Dashboards</li>
          <li>Glossary</li>
          
        </div>

      </div>
      <footer className='footer'>
      <button><FaFacebook /></button>
      <button><FaApple/></button>
      <button><DiAndroid/></button>
      <button><FaPowerOff/></button>
      </footer>
    </aside>
  )
}

export default Sidebar;