// src/components/CompanyDescription.js
import React from 'react';
import '../styles/CompanyDescription.css';

const CompanyDescription = () => {
  return (
    <div className="company-description">
      <p>At Appwiz Solutions, our hard work and dedication 
have marked our footprint as a top startup company. 
With the right mix of skilled professionals, we form a great team 
delivering excellence in IT services 
across Software Development, Web & Mobile Application Development, and the Internet of Things. As one of the top emerging companies, 
we take pride in our exceptional team—a perfect blend of creativity, expertise, and passion. Get in touch with us
and let us handle all the heavy lifting from there. Our team of experts is dedicated to transforming your vision into reality</p>
    
      <div className="steps">

        {['Discover', 'Design', 'Develop', 'Deploy'].map((step) => (
          <div className="step" key={step}>

            <img src={`images/${step.toLowerCase()}.svg`} alt={step} />

            <span>{step}</span>

          </div>
        ))}
      </div>

    </div>

  );
};

export default CompanyDescription;