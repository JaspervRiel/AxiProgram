import React from "react";
import './Products.css';
import {useState} from "react"
import Navbar from "./Components/Navbar";
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
                    <td> <a onClick={()=>{toComponentB()}}>
                        Component B</a>
                    </td>
                </tr>
            })}

        </table>
        

    </div>
    
    )
}

export default Products;