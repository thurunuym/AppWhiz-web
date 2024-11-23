// src/components/LogoBar.js
import React from 'react';
import '../styles/LogoBar.css';

function LogoBar() {
  return (
    <div className="logo-bar">
      <div className="logo-container">
        <img src="images/logo2.png" alt="Logo 2" style={{transform:'translateY(-55px)'}}/>
        <img src="images/logo3.png" alt="Logo 3" style={{transform: 'translateY(-56px)'}}/>
        <img src="images/logo4.png" alt="Logo 4" style={{transform: 'translateY(-12px)', height: '170px' }} />   
        <img src="images/logo5.png" alt="Logo 5" style={{transform: 'translateY(-42px)',height: '115px'}}/>     

      </div>
      <div className="logo-container">
        <img src="images/logo2.png" alt="Logo 2" style={{transform:'translateY(-55px)'}}/>
        <img src="images/logo3.png" alt="Logo 3" style={{transform: 'translateY(-56px)'}}/>
        <img src="images/logo4.png" alt="Logo 4" style={{transform: 'translateY(-12px)', height: '170px' }} />   
        <img src="images/logo5.png" alt="Logo 5" style={{transform: 'translateY(-42px)',height: '115px'}}/>     

      </div>
    </div>
  );
};

export default LogoBar;