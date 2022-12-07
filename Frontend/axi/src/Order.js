import "./Order.css";
import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import Navbar from "./Components/Navbar";

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
      setID(Id)
  }

  const OrderUpdate = (e) => {
    e.preventDefault();
    const dateTime = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`
    fetch("https://localhost:7157/api/OrderUpdate?id="+Id+"&DateTime="+dateTime)
      .then((res) => res.text()) // or res.json()
      .then((res) => console.log(res));
  };

  function OrderDelete(Id) {
    fetch("https://localhost:7157/api/OrderDelete?orderID=" + Id)
      .then((response) => response.json())
  };

  return (
    <div>
      {" "}
      <Navbar />
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

          <table class="table">
            <tr class="header">
              <th>Id</th>
              <th>OrderDatum</th>
              <th>OrderVoltooid</th>
            </tr>
            {orders.map((item) => {
              return (
                <tr bgcolor="lightgrey" align="center">
                  <td>
                    <Button onClick={() => ProductsFromOrder(item.Id)}>
                      {JSON.stringify(item.Id)}
                    </Button>
                  </td>
                  <td>{item.OrderDate}</td>
                  <td>{item.CompletedDate}</td>
                </tr>
              );
            })}
          </table>
        </div>
        <div class="right">
          <div class="content">
            <Button
              variant="outlined"
              color="success"
              onClick={() => OrderUpdate()}
            >
              Compleet
            </Button>
            <Button variant="outlined" color="error" onClick={() => OrderDelete(Id)}>
              Niet Compleet
            </Button>
          </div>
          <table class="table">
            <tr class="header">
              <th>ArtikelNaam</th>
              <th>Locatie</th>
              <th>Aantal</th>
            </tr>
            {Products.map((item) => {
              return (
                <tr bgcolor="lightgrey" align="center">
                  <td class="tb-padding">{JSON.stringify(item.Name)}</td>
                  <td>{item.Location}</td>
                  <td>{item.AmountInOrder}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}
export default Order;
