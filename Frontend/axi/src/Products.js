import React from "react";
import './Products.css';
import {useState} from "react"

function Products(){
    const [producten, setProducten] = useState([])
    fetch('https://localhost:7157/api/Product').then(response => response.json())
    .then(json => setProducten(json));


    return(<div>
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
                        </tr>
            })}

        </table>
        
    </div>
    )
}

export default Products;