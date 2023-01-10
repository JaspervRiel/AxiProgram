import "./Order.css";
import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import Navbar from "./Components/Navbar";

function Order() {
  const [orders, setOrders] = useState([]);
  const [Products, setProducts] = useState([]);
  const [Id, setID] = useState([]);
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const [Status, setStatus] = useState([]);

  async function Active() {
    setStatus("Actief");
    ProductsFromOrder(0);
    fetch("https://localhost:7157/api/OrderActiveOrders")
      .then((response) => response.json())
      .then((json) => setOrders(json));
  }

  useEffect(() => {
    Active();
  }, []);

  async function completed() {
    setStatus("Compleet");
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
    const dateTime = `${current.getDate()}-${current.getMonth() + 1}-${current.getFullYear()}`
    console.log(dateTime);
    fetch("https://localhost:7157/api/OrderUpdate?id=" + Id + "&DateTime=" + dateTime, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" }
    })
    window.location.reload(false);
  };


  const OrderDelete = (product) => {
    console.log(product);
    fetch("https://localhost:7157/api/OrderDelete?id=" + Id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((res) => res.text()) // or res.json()
      .then((res) => console.log(res));
      window.location.reload(false);
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

          <h2>{Status}</h2>
          <table class="table">
            <tr class="header">
              <th>Id</th>
              <th>OrderDatum</th>
              <th>OrderVoltooid</th>
            </tr>
            {orders.map((item) => {
              return (
                <tr bgcolor="lightgrey" align="center" className="tabelLine" onClick={() => ProductsFromOrder(item.Id)}>
                  <td> {JSON.stringify(item.Id)}</td>
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
              type="submit"
              variant="outlined"
              color="success"
              onClick={() => {
                let result = window.confirm(
                  "Weet u zeker dat de order compleet is?"
                );

                let message = result
                  ? OrderUpdate()
                  : "Je klikte op annuleren.";
              }}
            >
              Compleet
            </Button>
            <Button type="submit" variant="outlined" color="error" onClick={() => {
                let result = window.confirm(
                  "Weet u zeker dat je de order wilt verwijderen?"
                );

                let message = result
                  ? OrderDelete()
                  : "Je klikte op annuleren.";
              }}>
              Niet Compleet
            </Button>
          </div>
          <h2>Geselecteerde order: {Id}</h2>
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
