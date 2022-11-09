import React from 'react';
import './App.css';
import { Route, Routes , BrowserRouter } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Products from './Products';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import Orders from './Orders';
import Levering from './Levering';
import Locaties from './Locaties';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path='/Products' element={<Products/>}/>
          <Route path='/AddProduct' element={<AddProduct/>}/>
          <Route path='/EditProduct' element={<EditProduct/>}/>
          <Route path="/Orders" element={<Orders/>} />
          <Route path="/Levering" element={<Levering/>} />
          <Route path="/Locaties" element={<Locaties/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
