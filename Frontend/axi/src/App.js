import React from 'react';
import './App.css';
import { Route, Routes , BrowserRouter } from 'react-router-dom';
import Home from './Home'
import About from './About';
import Products from './Products';


function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route  path="/About" element={<About/>} />
          <Route path='/Products' element={<Products/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
