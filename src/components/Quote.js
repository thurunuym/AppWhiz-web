
import React from 'react';
import '../styles/Quote.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <img src="images/background.jpg" alt="Hero" />
      <div className="hero-text">
        <h1>Code Your<br /> Vision with<br /> Creativity</h1>
        <button>Let's Talk</button>
      </div>
    </div>
  );
};

export default HeroSection;