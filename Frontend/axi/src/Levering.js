import React from "react";
import "./Levering.css";
import Navbar from "./Components/Navbar";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";

function Levering() {
  const [levering, setLevering] = useState([]);
  const [Products, setProducts] = useState([]);
  const [Id, setID] = useState([]);
  const [Name, setName] = useState([]);
  const [OrderDate, setOrderDate] = useState([]);
  const [Bestelling, setBestelling] = useState([]);
  const [BestellingName, setBestellingName] = useState([]);

  useEffect(() => {
    Active();
  }, []);

  async function Active() {
    try {
      setBestelling("Actief");
      fetch("https://localhost:7157/api/BestellingActive")
        .then((response) => response.json())
        .then((json) => setLevering(json));
    } catch (err) {
      console.log(err);
    }
  }

  async function completed() {
    setBestelling("Compleet");
    fetch("https://localhost:7157/api/BestellingCompleted")
      .then((response) => response.json())
      .then((json) => setLevering(json));
  }

  function ProductsFromLevering(Id, Name, OrderDate) {
    setBestellingName(Name);
    setID(Id);
    setName(Name);
    setOrderDate(OrderDate);
    fetch("https://localhost:7157/api/BestellingProducts?orderID=" + Id)
      .then((response) => response.json())
      .then((json) => setProducts(json));
  }

  function LeveringUpdateComplete(e) {
    const levering = { Id, Name, OrderDate };
    console.log(levering);
    fetch("https://localhost:7157/api/BestellingComplete", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(levering),
    })
      .then((res) => res.text()) // or res.json()
      .then((res) => console.log(res))
      .then(Active());
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
          <h1>{Bestelling}</h1>
          <table class="table">
            <tr class="header">
              <th>Id</th>
              <th>Naam</th>
              <th>BestelDatum</th>
            </tr>
            {levering.map((item) => {
              return (
                <tr bgcolor="lightgrey" align="center">
                  <td>
                    <Button
                      onClick={() =>
                        ProductsFromLevering(item.Id, item.Name, item.OrderDate)
                      }
                    >
                      {item.Id}
                    </Button>
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
              onClick={() => LeveringUpdateComplete()}
            >
              Compleet
            </Button>
            <Button variant="outlined" color="error">
              Niet Compleet
            </Button>
          </div>
          <h1>Bestelling van : {BestellingName}</h1>
          <table class="table">
            <tr class="header">
              <th>ArtikelNaam</th>
              <th>Locatie</th>
              <th>Aantal</th>
            </tr>
            {Products.map((item) => {
              return (
                <tr bgcolor="lightgrey" align="center">
                  <td class="tb-padding">{item.Name}</td>
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
