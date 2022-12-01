import React from "react";
import "./Levering.css";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import { Button } from "@mui/material";

function Levering() {
  const [levering, setLevering] = useState([]);
  const [Products, setProducts] = useState([]);
  const [Id, setID] = useState([]);
  const [Name, setName] = useState([]);
  const [OrderDate, setOrderDate] = useState([]);

  function Active() {
    fetch("https://localhost:7157/api/BestellingActive")
      .then((response) => response.json())
      .then((json) => setLevering(json));
  }

  function completed() {
    fetch("https://localhost:7157/api/BestellingCompleted")
      .then((response) => response.json())
      .then((json) => setLevering(json));
  }

  function ProductsFromLevering(Id) {
    fetch("https://localhost:7157/api/OrderGetOrderProducts?orderID=" + Id)
      .then((response) => response.json())
      .then((json) => setLevering(json));
  }

  function LeveringUpdate(e) {
    e.preventDefault();
    const Levering = { Id, Name, OrderDate };
    console.log(Levering);
    fetch("https://localhost:7157/api/", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Levering),
    })
      .then((res) => res.text()) // or res.json()
      .then((res) => console.log(res));
  }

  return (
    <div>
      <Navbar />
      <div class="container">
        <div class="left">
          <div class="content">
            <Button variant="outlined" onClick={Active}>
              Actieve leveringen
            </Button>
            <Button variant="outlined" onClick={completed}>
              Oude leveringen
            </Button>
          </div>

          <table class="table">
            <tr class="header">
              <th>Id</th>
              <th>Naam</th>
              <th>OrderDatum</th>
            </tr>
            {levering.map((item) => {
              return (
                <tr bgcolor="lightgrey" align="center">
                  <td>
                    <Button>{item.Id}</Button>
                  </td>
                  <td>{item.Name}</td>
                  <td>{item.OrderDate}</td>
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
              onClick={() => LeveringUpdate()}
            >
              Compleet
            </Button>
            <Button variant="outlined" color="error">
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
                  <td>{item.Stock}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}

export default Levering;
