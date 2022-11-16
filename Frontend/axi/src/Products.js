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
      <table class="table">
        <thead class="header">
          <tr>
            <th scope="col"> ID</th>
            <th scope="col"> Name</th>
            <th scope="col"> Location</th>
            <th scope="col"> Stock</th>
            <th scope="col"> ProductGroup</th>
            <th scope="col"> branchID</th>
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
              <td>{JSON.stringify(item.Id)}</td>
              <td>{JSON.stringify(item.Name)}</td>
              <td>{JSON.stringify(item.Location)}</td>
              <td>{JSON.stringify(item.Stock)}</td>
              <td>{JSON.stringify(item.ProductGroup)}</td>
              <td>{JSON.stringify(item.BranchID)}</td>
              <td>
                {" "}
                <Button
                  className="Button"
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
                  className="Button"
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
  );
}

export default Products;
