import { Routes, Route, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import Header from './components/Header';
import Quote from './components/Quote';
import LogoBar from './components/LogoBar';
import CompanyDescription from './components/CompanyDescription';
import OurWork from './components/OurWork';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleScrollToContact = () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Navigate to contact route
    if (window.location.pathname === '/contact') {
      handleScrollToContact();
    }
  }, []);

  return (
    <>
      <Header />

      <div id="quote">
        <Quote />
      </div>

      <div id="logobar">
        <LogoBar />
      </div>

      <div id="company">
        <CompanyDescription />
      </div>

      <div id="work">
        <OurWork />
      </div>

      <div id="team">
        <Team />
      </div>

      <div id="contact"><Contact /></div>

      <Footer />
    </>
  );
}

export default App;
