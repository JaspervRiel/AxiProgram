import React from 'react';
import './App.css';
import { Route, Routes , BrowserRouter } from 'react-router-dom';
import Home from './Home'


function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
