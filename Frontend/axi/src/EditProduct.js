import {useLocation} from 'react-router-dom';
import React, { useEffect, useState }  from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Navbar from "./Components/Navbar";
import './Components/FRMAddProduct.css';

 function ComponentB() {
    const uselocation = useLocation();

    const paperStyle={padding: '50px 20px', width:450, margin:"20px auto"}
    const[name, setName]=useState('');
    const[location, setLocation]=useState('');
    const[stock, setStock]=useState('');
    const[productgroup, setProductGroup]=useState('')
    const[branchID, setBranchID]=useState('');

  const handleClick=(e)=>{
    e.preventDefault()
    const product={name, location, stock, productgroup, branchID}
    console.log(product)
    fetch('https://localhost:7157/api/Product',{
      method:"UPDATE",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(product)
    }).then(()=>{
      console.log("Product updated")
    })
  }
        return (
        // <div>{uselocation.state.Id}</div>
            <container>
            <Navbar />
              <Paper elevation={3} style={paperStyle}>
              <div className='AddProduct'>   
                <h1><b> Maak een nieuw product</b></h1>
              </div>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1 },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="standard-basic" label="Productnaam" variant="standard" fullWidth 
              value={name}
              onChange={(e)=>setName(e.target.value)}
              />
              <TextField id="standard-basic" label="Locatie" variant="standard" defaultValue="Default Value" fullWidth 
              value={location}
              onChange={(e)=>setLocation(e.target.value)}
              />
              <TextField id="standard-basic" label="Voorraad" variant="standard" fullWidth 
              value={stock}
              onChange={(e)=>setStock(e.target.value)}
              />
              <TextField id="standard-basic" label="Productgroep" variant="standard" fullWidth 
              value={productgroup}
              onChange={(e)=>setProductGroup(e.target.value)}
              />
              <TextField id="standard-basic" label="VestigingsID" variant="standard" defaultValue="Default Value" fullWidth 
              value={branchID}
              onChange={(e)=>setBranchID(e.target.value)}
              />

            <TextField
          id="standard-multiline-static"
          label="Mies"
          defaultValue="Default Value"
          variant="standard"
          fullWidth
            />
            <Button 
              class="AddButton" variant="contained" onClick={handleClick}>Sla gegevens op
            </Button>
            </Box>
            </Paper>
            </container>
          );
    }

export default ComponentB;