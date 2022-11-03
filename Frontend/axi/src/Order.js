import './Order.css';
import React from 'react';
import {useState} from "react";

function Order() {

    const [orders, setOrders] = useState([])
    fetch('https://localhost:7157/api/Order').then(response => response.json())
    .then(json => setOrders(json));

    return (



<div class="container">

  <div class="left">
    <div class="content">
    <table bgcolor="black">
            <tr bgcolor="grey">
                <th>ID</th>
                <th>OrderDate</th>
                <th>CompletedDate</th>
            </tr>
            {orders.map(item => {
                return <tr bgcolor="lightgrey" align="center">
                    <td>{JSON.stringify(item.Id)}</td> 
                    <td>{JSON.stringify(item.OrderDate)}</td> 
                    <td>{JSON.stringify(item.CompletedDate)}</td> 
                        </tr>
                        })}
    </table>
    </div>
  </div>
  <div class="right">
    <div class="content"> sadoi sao</div>
  </div>
</div>

    )
  }
  export default Order;