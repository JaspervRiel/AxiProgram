import React from "react";
import "./Products.css";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function Products() {
  const [producten, setProducten] = useState([]);
  const [products, setProducts] = useState([]);
  const bool = new Boolean(false);

  fetch("https://localhost:7157/api/Product")
    .then((response) => response.json())
    .then((json) => setProducten(json));

  const navigate = useNavigate();

  const [productgroups, setProductGroups] = useState([]);
  fetch("https://localhost:7157/api/ProductGroup")
    .then((response) => response.json())
    .then((json) => setProductGroups(json));

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

  const GetAllProductsByProductGroup = (e) => {
    const notfullid = e.target.value;
    const id = notfullid.slice(0, 2);
    fetch("https://localhost:7157/api/Product/productgroup?ID=" + id)
      .then((response) => response.json())
      .then((json) => setProducts(json));
  };

  const BooleanTrue = () => {
    this.setState({ bool: true });
    console.log("button clicked");
  };

  return (
    <div>
      <Navbar />
      <select onChange={GetAllProductsByProductGroup}>
        {productgroups.map((item) => {
          return (
            <option onSelect={() => GetAllProductsByProductGroup(item.id)}>
              {item.Id + " " + item.ProductGroupName}
            </option>
          );
        })}
      </select>
      {/*<Button onClick={BooleanTrue}>Klik hier om alle producten in te zien</Button> */}

      <table class="table">
        <thead class="header">
          <tr>
            <th scope="col"> ID</th>
            <th scope="col"> Productnaam</th>
            <th scope="col"> Locatie</th>
            <th scope="col"> Voorraad</th>
            <th scope="col"> Productgroep</th>
            <th scope="col"> FiliaalID</th>
            <th scope="col"> </th>
            <th scope="col"> </th>
          </tr>
        </thead>

        {products.map((item) => {
          const Edit = () => {
            navigate("/EditProduct", { state: item });
          };

          return (
            <tr class="TableInhoud" align="center">
              <td>{item.Id}</td>
              <td>{item.Name}</td>
              <td>{item.Location}</td>
              <td>{item.Stock}</td>
              <td>{item.ProductGroup}</td>
              <td>{item.BranchID}</td>
              <td>
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
