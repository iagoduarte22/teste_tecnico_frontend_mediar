import React, { useState } from 'react';


// Components
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Graphic from '../../components/Graphic';


//Icons   
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';
import {FaHome} from 'react-icons/fa'

// Styles
import './style.scss';


function Dashboard() {
  const [open, setOpen] = useState(true)

  function handleClick() {
    setOpen(!open)
  }

  return (
    <div className='dashboard'>
      <Sidebar open={open} />
      <main className='dashboard__main'>
        <Header handleClick={handleClick} />

        <div className='navbar'>

          <div className='navbar__buttons'>
          <button ><IoIosArrowBack color="white" size="30px"/></button>
          <button><IoIosArrowForward color="white" size="30px"/></button>
          <button><FaHome color="white"size="30px"/></button>
          </div>

          <div className='navbar__filters'>


          </div>
        </div>
        <div className='graphics'>
        <Graphic/>

        </div>

      </main>
    </div>
  );
}

export default Dashboard;