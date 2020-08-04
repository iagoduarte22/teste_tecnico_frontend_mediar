import React from 'react';
import { FaUser } from 'react-icons/fa'
import { MdKeyboardArrowDown } from 'react-icons/md'

import './style.scss';

function User() {
  return (
    <div className='user'>
      <div className='user__avatar'>
        <FaUser color='#ffffff' size={25} />
      </div>
      <p className='user__name'>Demo</p>
      <div className='user__arrow'>
        <MdKeyboardArrowDown color='#727272' size={15} />
      </div>
    </div>
  )
}

export default User;