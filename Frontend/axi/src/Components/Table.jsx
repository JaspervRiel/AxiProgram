import React from 'react'
import {useTable} from 'react-table'
import { COLUMNS } from './columns'
import {useState} from 'react'

export const Table = () => {
  const [producten, setProducten] = useState([])
    fetch('https://localhost:7157/api/Product').then(response => response.json())
    .then(json => setProducten(json));
    console.log(producten)
  useTable({
    
  })
  return(
    <div>
     <h1>hey</h1> 
    </div>
  )}