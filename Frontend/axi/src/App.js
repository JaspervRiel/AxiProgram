import React from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import Order from "./Order";
import Levering from "./Levering";
import Locaties from "./Locaties";
import Adminpanel from "./Adminpanel";
import Gebruiker from "./Gebruiker";
import Testgebruiker from "./TestGebruiker";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/AddProduct" element={<AddProduct />} />
          <Route path="/EditProduct" element={<EditProduct />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/Levering" element={<Levering />} />
          <Route path="/Locaties" element={<Locaties />} />
          <Route path="/Adminpanel" element={<Adminpanel />} />
          <Route path="/Gebruiker" element={<Gebruiker />} />
          <Route path="/testgebruiker" element={<Testgebruiker/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
