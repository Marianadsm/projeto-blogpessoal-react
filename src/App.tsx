import React from 'react';
import Home from './pages/home/Home';
import './App.css';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario'

function App() {
  return (
    <BrowserRouter>{/*Antigo Router*/}
    <Navbar />
      <div style={{ minHeight: '100vh' }} /*espaço entre footer e navbar*/>
        <Routes> {/*Antigo Switch*/}
          <Route path="/" element={<Login />} 
          />
          <Route path="/login" element={<Login />} 
          />
          <Route path="/home" element={<Home />}
           />
          <Route path="/cadastro" element={<CadastroUsuario />} 
          />
           
          </Routes>
        </div>
      <Footer />
  </BrowserRouter >
  );
}

export default App;
