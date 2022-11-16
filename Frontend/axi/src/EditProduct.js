import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Navbar from "./Components/Navbar";
import "./Components/FRMAddProduct.css";

function ComponentB() {
  const uselocation = useLocation();

  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
  const id = uselocation.state.Id;
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [stock, setStock] = useState("");
  const [productgroup, setProductGroup] = useState("");
  const [branchID, setBranchID] = useState("");

  const Update = (e) => {
    e.preventDefault();
    const product = { id, name, location, stock, productgroup, branchID };
    console.log(product);
    fetch("https://localhost:7157/api/Product", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((res) => res.text()) // or res.json()
      .then((res) => console.log(res));
  };
  return (
    // <div>{uselocation.state.Id}</div>
    <container>
      <Navbar />
      <Paper elevation={3} style={paperStyle}>
        <div className="AddProduct">
          <h1>
            <b>
              {" "}
              Verander de gegevens van het gekozen product:{" "}
              {uselocation.state.Name}
            </b>
          </h1>
        </div>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-basic"
            label="Productnaam"
            variant="standard"
            fullWidth
            defaultValue={uselocation.state.Name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Locatie"
            variant="standard"
            fullWidth
            defaultValue={uselocation.state.Location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Voorraad"
            variant="standard"
            fullWidth
            defaultValue={uselocation.state.Stock}
            onChange={(e) => setStock(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Productgroep"
            variant="standard"
            fullWidth
            defaultValue={uselocation.state.ProductGroup}
            onChange={(e) => setProductGroup(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Vestigingsnummer"
            variant="standard"
            fullWidth
            defaultValue={uselocation.state.BranchID}
            onChange={(e) => setBranchID(e.target.value)}
          />

          <Button class="AddButton" variant="contained" onClick={Update}>
            Sla gegevens op
          </Button>
        </Box>
      </Paper>
    </container>
  );
}

export default ComponentB;
