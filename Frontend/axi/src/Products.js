import React from "react";
import './Products.css';
import {useState} from "react"
import Button from '@mui/material/Button';
import Navbar from "./Components/Navbar";

function Products(){
    const [producten, setProducten] = useState([])
    fetch('https://localhost:7157/api/Product').then(response => response.json())
    .then(json => setProducten(json));

    return(<div>
        <Navbar/>
        <table bgcolor="black">
            <tr bgcolor="grey">
                <th>Name</th>
                <th>Location</th>
                <th>Stock</th>
                <th>ProductGroup</th>
                <th>branchID</th>
            </tr>
            {producten.map(item => {
                return <tr bgcolor="lightgrey" align="center">
                    <td>{JSON.stringify(item.Name)}</td> 
                    <td>{JSON.stringify(item.Location)}</td> 
                    <td>{JSON.stringify(item.Stock)}</td> 
                    <td>{JSON.stringify(item.ProductGroup)}</td> 
                    <td>{JSON.stringify(item.BranchID)}</td> 
                    <td><Button href="/EditProduct?fruit=apple" 
                            id="a"
                            type="submit"
                            color="secondary"
                            variant="contained"
                            > Producten
                        </Button></td>
                        </tr>
            })}

        </table>
        

    </div>
    
    )
}

export default Products;