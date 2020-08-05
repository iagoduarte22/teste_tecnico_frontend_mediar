import React from 'react';


//graphic import
import {
    ComposedChart, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';

//import style  
import './style.scss';



function Graphic() {
    const data = [
        {
          "name": "Jan",
          "Vendas": 2400,
          "Meta": 2400
        },
        {
          "name": "Fev",
          "Vendas": 1398,
          "Meta": 2210
        },
        {
          "name": "Mar",
          "Vendas": 9800,
          "Meta": 2290
        },
        {
          "name": "Abr",
          "Vendas": 3908,
          "Meta": 2000
        },
        {
          "name": "Mai",
          "Vendas": 4800,
          "Meta": 2181
        },
        {
          "name": "Jun",
          "Vendas": 3800,
          "Meta": 2500
        },
        {
          "name": "Jul",
          "Vendas": 4300,
          "Meta": 2100
        }
      ]

   return(
       

    <div className='grafico'>

<ComposedChart width={1130} height={350} data={data}>
  <XAxis dataKey="name" color="black"/>
  <YAxis />
  <Tooltip />
  <Legend />
  <CartesianGrid stroke="#D3d3d3" />
  <Area type="monotone" dataKey="Meta" fill="#009cd6" stroke="#162633" />
  <Bar dataKey="Vendas" barSize={70} fill="#ef5145" />
</ComposedChart>


    </div>


   )

}



export default Graphic;