import React from 'react';
import Home from './paginas/home/Home'
import './App.css';
import { Grid } from '@material-ui/core';
import Navbar from './components/estaticos/navbar/navbar'
import Footer from './components/estaticos/footer/footer'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
