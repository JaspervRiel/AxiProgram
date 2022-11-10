import React from "react";
import './Products.css';
import {useState} from "react"
import Navbar from "./Components/Navbar";
import Button from '@mui/material/Button';
import {Link, useNavigate} from 'react-router-dom';


function Products(){
    const [producten, setProducten] = useState([])
    fetch('https://localhost:7157/api/Product').then(response => response.json())
    .then(json => setProducten(json));

    const navigate = useNavigate();

    const Delete=(product)=>{
        console.log(product)
        fetch('https://localhost:7157/api/Product',{
          method:"DELETE",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(product)
        })
        .then(res => res.text()) // or res.json()
        .then(res => console.log(res))
    }



    return(<div>
        <Navbar/>
        <table bgcolor="black">
            <tr bgcolor="grey">
                <th>ID</th>
                <th>Name</th>
                <th>Location</th>
                <th>Stock</th>
                <th>ProductGroup</th>
                <th>branchID</th>
                <th></th>
                <th></th>
            </tr>
            {producten.map(item => {
                    const toComponentB=()=>{
                        navigate('/EditProduct',{state:(item)});
                    }

                return <tr bgcolor="lightgrey" align="center">
                    <td>{JSON.stringify(item.Id)}</td> 
                    <td>{JSON.stringify(item.Name)}</td> 
                    <td>{JSON.stringify(item.Location)}</td> 
                    <td>{JSON.stringify(item.Stock)}</td> 
                    <td>{JSON.stringify(item.ProductGroup)}</td> 
                    <td>{JSON.stringify(item.BranchID)}</td> 
                    <td> <Button onClick={()=>{toComponentB()}}>
                        aanpassen</Button></td>
                    <td> <Button onClick={()=>{Delete(item)}}>
                        Verwijderen</Button></td>
                </tr>
            })}

        </table>
        

    </div>
    
    )
}

export default Products;