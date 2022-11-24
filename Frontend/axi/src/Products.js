import React from "react";
import "./Products.css";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { Edit } from "@mui/icons-material";

function Products() {
  const [producten, setProducten] = useState([]);
  fetch("https://localhost:7157/api/Product")
    .then((response) => response.json())
    .then((json) => setProducten(json));

  const navigate = useNavigate();

  const Delete = (product) => {
    console.log(product);
    fetch("https://localhost:7157/api/Product", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((res) => res.text()) // or res.json()
      .then((res) => console.log(res));
  };

  return (
    <div>
      <Navbar />
      <div class="container">
        <table class="table">
          <thead class="header">
            <tr>
              <th scope="col">Naam</th>
              <th scope="col">Locatie</th>
              <th scope="col">Vooraad</th>
              <th scope="col">ProductGroep</th>
              <th scope="col">Magazijn</th>
              <th scope="col"> </th>
              <th scope="col"> </th>
            </tr>
          </thead>
          {producten.map((item) => {
            const Edit = () => {
              navigate("/EditProduct", { state: item });
            };

            return (
              <tr class="TableInhoud" align="center">
                <td>{item.Name}</td>
                <td>{item.Location}</td>
                <td>{item.Stock}</td>
                <td>{item.ProductGroup}</td>
                <td>{item.BranchID}</td>
                <td>
                  {" "}
                  <Button
                    className="ButtonEdit"
                    onClick={() => {
                      Edit();
                    }}
                  >
                    aanpassen
                  </Button>
                </td>
                <td>
                  {" "}
                  <Button
                    className="ButtonDelete"
                    color="error"
                    onClick={() => {
                      let result = window.confirm(
                        "Are you sure you want to delete?"
                      );

                      let message = result
                        ? Delete(item)
                        : "You clicked the Cancel button";
                    }}
                  >
                    Verwijderen
                  </Button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default Products;
