import React, { Fragment } from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Services from './Components/Services';
import About from './Components/About';
import Prices from './Components/Prices';
import Footer from './Components/Footer';
import Ad from './Components/Ad';
import './App.css';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <Services />
      <About />
      <Prices />
      <Ad />
      <Footer />
    </Fragment>
      
  );
}

export default App;
