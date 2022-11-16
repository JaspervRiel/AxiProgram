import './Order.css';
import React from 'react';
import {useState} from "react";
import { Button } from '@mui/material';

function Order() {

    const [orders, setOrders] = useState([])
    fetch('https://localhost:7157/api/Order').then(response => response.json())
    .then(json => setOrders(json));

    return (



<div class="container">

  <div class="left">
  <div class="content"><Button variant="outlined">Actieve Orders</Button><Button variant="outlined">Oude Orders</Button></div>

    <table bgcolor="black" class="content">
            <tr bgcolor="grey">
              <th>Id</th>
                <th>OrderDate</th>
                <th>CompletedDate</th>
            </tr>
             {orders.map(item => {
                return <tr bgcolor="lightgrey" align="center">
                    <td><Button>{JSON.stringify(item.Id)}</Button></td>
                    <td>{JSON.stringify(item.OrderDate)}</td> 
                    <td>{JSON.stringify(item.CompletedDate)}</td> 
                        </tr>
                        })} 
    </table>
  </div>
  <div class="right">
  <table bgcolor="black" class="content">
            <tr bgcolor="grey">
                <th>ArtikelNaam</th>
                <th>Locatie</th>
                <th>Aantal</th>
            </tr>
    </table>
    <div class="content"><Button variant="outlined" color="success">Compleet</Button>
    <Button variant="outlined" color="error">Niet Compleet</Button>
    </div>

  </div>
</div>

    )
  }
  export default Order;