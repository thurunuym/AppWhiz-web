// src/App.js
import React from 'react';
import Header from './components/Header';
import Quote from './components/Quote';
import LogoBar from './components/LogoBar';
import CompanyDescription from './components/CompanyDescription';
import Team from './components/Team';
import Footer from './components/Footer';
import OurWork from './components/OurWork';


function App() {
  return (
    <>
      <Header />
      <Quote />
      <LogoBar />
      <CompanyDescription/>
      <OurWork /> 
      <Team />
      <Footer/>
    

    </>
  );
};

export default App;
