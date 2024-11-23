// src/components/CompanyDescription.js
import React, { useEffect, useRef } from 'react';
import '../styles/CompanyDescription.css';

function CompanyDescription() {
    const stepsRef = useRef([]);

    const steps = [
        { id: 1, name: "Discover", description: "First we listen and strip down your idea to reveal the core of your idea's value proposition.", image: "images/discover.svg" },
        { id: 2, name: "Design", description: "We create a lean go-to-market product strategy that best supports the user's experience.", image: "images/design.svg" },
        { id: 3, name: "Develop", description: "Our creative team code your idea with precision.", image: "images/develop.svg" },
        { id: 4, name: "Deploy", description: "Real artists ship. We partner with you to launch and iterate to find true product-market fit.", image: "images/deploy.svg" }
    ];

    useEffect(() => {
        const options = {
            root: null, // Use the viewport as the container
            rootMargin: '0px',
            threshold: 0.1 // Trigger when 10% of the element is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = stepsRef.current.indexOf(entry.target);
                    if (index < 2) { // First two cards
                        entry.target.classList.add('left-enter'); // Add class for left entrance
                    } else { // Last two cards
                        entry.target.classList.add('right-enter'); // Add class for right entrance
                    }
                    observer.unobserve(entry.target); // Stop observing after it enters
                }
            });
        }, options);

        // Observe each step element
        stepsRef.current.forEach(step => {
            observer.observe(step);
        });

        return () => {
            // Cleanup observer on unmount
            stepsRef.current.forEach(step => {
                observer.unobserve(step);
            });
        };
    }, []);

    return (
        <div className="company-description">
            <p>At Appwiz Solutions, our hard work and dedication 
            have marked our footprint as a top startup company. 
            With the right mix of skilled professionals, we form a great team 
            delivering excellence in IT services 
            across Software Development, Web & Mobile Application Development, and the Internet of Things. As one of the top emerging companies, 
            we take pride in our exceptional team—a perfect blend of creativity, expertise, and passion. Get in touch with us
            and let us handle all the heavy lifting from there. Our team of experts is dedicated to transforming your vision into reality</p>
    
            <div className="steps-container">
                {steps.map((step, index) => (
                    <div className="step" key={step.id} ref={el => stepsRef.current[index] = el}>
                        <img src={step.image} alt={step.name} />
                        <h3>{step.name}</h3>
                        <p>{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CompanyDescription;