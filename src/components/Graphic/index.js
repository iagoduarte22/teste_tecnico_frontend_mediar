import React from 'react';


//graphic import
import {
    ComposedChart, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  } from 'recharts';

//import style  
import './style.scss';

const data = [
  {
    "name": "Jan",
    "Vendas": 2400,
    "Meta": 2400,
  },
  {
    "name": "Fev",
    "Vendas": 1398,
    "Meta": 2210,
  },
  {
    "name": "Mar",
    "Vendas": 9800,
    "Meta": 2290,
  },
  {
    "name": "Abr",
    "Vendas": 3908,
    "Meta": 2000,
  },
  {
    "name": "Mai",
    "Vendas": 4800,
    "Meta": 2181,
  },
  {
    "name": "Jun",
    "Vendas": 3800,
    "Meta": 2500,
  },
  {
    "name": "Jul",
    "Vendas": 4300,
    "Meta": 2100,
  }
]

function Graphic({ filter, month }) {
  const filteredData = data.map(obj => {
    return {
      name: obj.name,
      Vendas: filter.includes('Vendas') ? obj.Vendas : null,
      Meta: filter.includes('Metas') ? obj.Meta : null
    }
  })

  let filteredMonth = []
  for (let i = 0; i < filteredData.length; i++) {
    if (filteredData[i].name === month) {
      filteredMonth.push(filteredData[i])
      break
    }
    filteredMonth.push(filteredData[i])
  }

  console.log('filteredMonth', filteredMonth)

   return(
     <ResponsiveContainer width={600} height={350}>
        <ComposedChart data={filteredMonth}>
          <XAxis dataKey="name" color="black"/>
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#D3d3d3" />
          <Area type="monotone" dataKey="Meta" fill="#009cd6" stroke="#162633" />
          <Bar dataKey="Vendas" barSize={30} fill="#ef5145" />
        </ComposedChart>
     </ResponsiveContainer>
   )

}

Graphic.defaultProps = {
  filter: ['Metas', 'Vendas'],
  month: 'Jul'
}

export default Graphic;