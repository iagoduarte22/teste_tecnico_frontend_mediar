import React, { useState } from 'react';

// Components
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar'

// Styles
import './style.scss'

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
      </main>
    </div>
  );
}

export default Dashboard;