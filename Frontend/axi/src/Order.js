import "./Order.css";
import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";

function Order() {
  const [orders, setOrders] = useState([]);
  const [Products, setProducts] = useState([]);
  const [Id, setID] = useState([]);
  const [OrderDate, setOrderDate] = useState([]);
  const [CompletedDate, setCompletedDate] = useState([]);
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  function Active() {
    ProductsFromOrder(0);
    fetch("https://localhost:7157/api/OrderActiveOrders")
      .then((response) => response.json())
      .then((json) => setOrders(json));
  }

  function completed() {
    ProductsFromOrder(0);
    fetch("https://localhost:7157/api/Ordercompletedorders")
      .then((response) => response.json())
      .then((json) => setOrders(json));
  }

  function ProductsFromOrder(Id) {
    fetch("https://localhost:7157/api/OrderGetOrderProducts?orderID=" + Id)
      .then((response) => response.json())
      .then((json) => setProducts(json));
  }

  const OrderUpdate = (e) => {
    e.preventDefault();
    const order = { Id, OrderDate, CompletedDate };

    fetch("https://localhost:7157/api/OrderUpdate", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    })
      .then((res) => res.text()) // or res.json()
      .then((res) => console.log(res));
  };

  return (
    <div class="container">
      <div class="left">
        <div class="content">
          <Button variant="outlined" onClick={Active}>
            Actieve Orders
          </Button>
          <Button variant="outlined" onClick={completed}>
            Oude Orders
          </Button>
        </div>

        <table bgcolor="black" class="content">
          <tr bgcolor="grey">
            <th>Id</th>
            <th>OrderDate</th>
            <th>CompletedDate</th>
          </tr>
          {orders.map((item) => {
            return (
              <tr bgcolor="lightgrey" align="center">
                <td>
                  <Button onClick={() => ProductsFromOrder(item.Id)}>
                    {JSON.stringify(item.Id)}
                  </Button>
                </td>
                <td>{JSON.stringify(item.OrderDate)}</td>
                <td>{JSON.stringify(item.CompletedDate)}</td>
              </tr>
            );
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
          {Products.map((item) => {
            return (
              <tr bgcolor="lightgrey" align="center">
                <td>{JSON.stringify(item.Name)}</td>
                <td>{JSON.stringify(item.Location)}</td>
                <td>{JSON.stringify(item.Stock)}</td>
              </tr>
            );
          })}
        </table>
        <div class="content">
          <Button
            variant="outlined"
            color="success"
            onClick={() => OrderUpdate()}
          >
            Compleet
          </Button>
          <Button variant="outlined" color="error">
            Niet Compleet
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Order;
