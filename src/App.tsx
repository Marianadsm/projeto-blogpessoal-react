import React from 'react';
import Home from './paginas/home/Home'
import './App.css';
import { Grid } from '@material-ui/core';
import Navbar from './components/estaticos/navbar/navbar'
import Footer from './components/estaticos/footer/footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './paginas/Login/Login';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes> {/*Antigo Switch*/}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
            {/* <Route path="/cadastro" element={<CadastroUsuario />} /> */}
          </Routes>
        </div>
      <Footer />
  </BrowserRouter >
  );
}

export default App;
