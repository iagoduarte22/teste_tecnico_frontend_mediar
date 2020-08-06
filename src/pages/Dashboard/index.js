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
  const [principal, setPrincipal] = useState(['Metas', 'Vendas'])
  const [month, setMonth] = useState('Jul')

  function handleClick() {
    setOpen(!open)
  }

  function handleCheck(event) {
    const inputName = event.currentTarget.name
    const copyPrincipal = principal
    if (principal.includes(inputName)) {
      const indexItem = principal.indexOf(inputName)
      copyPrincipal.splice(indexItem, 1)
      setPrincipal([...copyPrincipal])
    } else {
      setPrincipal([
        ...principal,
        inputName
      ])
    }
  }

  function handleChange(event) {
    const value = event.currentTarget.value
    setMonth(value)
  }

  return (
    <div className='dashboard'>
      <Sidebar open={open} />
      <main className='dashboard__main'>
        <Header handleClick={handleClick} />

        <div className='navbar'>
          <div className='navbar__data'>
            <div className='navbar__data--inputs'>
              <select defaultValue={month} onChange={handleChange} name='date' id='date'>
                <option value=''>Mês</option>
                <option value='Jan'>Janeiro</option>
                <option value='Fev'>Fevereiro</option>
                <option value='Mar'>Março</option>
                <option value='Abr'>Abril</option>
                <option value='Mai'>Maio</option>
                <option value='Jun'>Junho</option>
                <option value='Jul'>Julho</option>
              </select>
            </div>
            <input type='range' name='date' id='date'/>
          </div>
          <div className='navbar__filters'>
            <div className='navbar__filters--item'>
              <h3>Principal</h3>
              <div>
                <input defaultChecked={true} onClick={handleCheck} type='checkbox' name='Metas' id='metas' />
                <label htmlFor='metas'>Metas</label>
              </div>
              <div>
                <input defaultChecked={true} onClick={handleCheck} type='checkbox' name='Vendas' id='vendas' />
                <label htmlFor='vendas'>Vendas</label>
              </div>
            </div>
            <div className='navbar__filters--item'>
              <h3>Cluster</h3>
              <input type='checkbox' name='' id=''/>
              <input type='checkbox' name='' id=''/>
            </div>
            <div className='navbar__filters--item'>
              <h3>Cluster</h3>
              <input type='checkbox' name='' id=''/>
              <input type='checkbox' name='' id=''/>
            </div>
          </div>
          <div className='navbar__buttons'>
            <button ><IoIosArrowBack color="white" size="30px"/></button>
            <button><IoIosArrowForward color="white" size="30px"/></button>
            <button><FaHome color="white"size="30px"/></button>
          </div>
        </div>

        <div className='graphics'>
          <div className='graphics__card'>
            <Graphic filter={principal} month={month} />
          </div>
        </div>

      </main>
    </div>
  );
}

export default Dashboard;