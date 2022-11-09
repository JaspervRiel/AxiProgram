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
                    const Delete=()=>{
                        const product = item.Id
                        console.log(product)
                        fetch('https://localhost:7157/api/Product',{
                          method:"DELETE",
                          body:(product)
                        }).then(()=>{
                          console.log("product deleted")
                        })
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
                    <td> <Button onClick={()=>{Delete()}}>
                        Verwijderen</Button></td>
                </tr>
            })}

        </table>
        

    </div>
    
    )
}

export default Products;