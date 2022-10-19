import React from "react";
import Table from './Components/Table'
import './Products.css';
import  Container from 'react-bootstrap/Container';

function Products(){
return(
    <Container>
        <div className="table">
        <Table/>
        </div>
    </Container>
)
}

export default Products;