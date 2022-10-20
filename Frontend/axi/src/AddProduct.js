import React from "react";
import './AddProduct.css';
import Navbar from "./Components/Navbar";
import FRMAddProduct from "./Components/FRMAddProduct";


function AddProduct(){
    return(
        <div className="AddProduct">
            <Navbar />
            <h1></h1>
            <FRMAddProduct />    
        </div>
    );
}

export default AddProduct;