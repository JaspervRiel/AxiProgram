import "./Leveringen.css";
import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";

function Leveringen() {
  const [levering, setLevering] = useState([]);
  const [Id, setID] = useState([]);
  const [Name, setName] = useState([]);
  const [OrderDate, setOrderDate] = useState([]);

  function Active() {
    fetch("https://localhost:7157/​api​/BestellingActive")
      .then((response) => response.json())
      .then((json) => setLevering(json));
  }

  function completed() {
    fetch("https://localhost:7157/api/BestellingCompleted")
      .then((response) => response.json())
      .then((json) => setLevering(json));
  }

  return (
    <div>
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
  );
}
export default Leveringen;
