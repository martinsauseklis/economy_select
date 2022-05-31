import React from 'react';
import Header from './components/Header/Header.js'
import { HashRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Generator from './components/Generator/Generator.js';
import './App.css'



function App(props) {
  return (
    <div className="App">
       <HashRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Generator />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </HashRouter>
        
    </div>
  );
}

export default App;
