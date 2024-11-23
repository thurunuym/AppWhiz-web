// src/components/OurWork.js
import React from 'react';
import '../styles/OurWork.css';

function OurWork(){
  const projectss = [
    { id: 1, name: 'VibrantNotify', description: 'In response to the growing demand for efficient and streamlined food order fulfilment, we present an innovative  a system where a wireless token, linked to a mobile app, is vibrated to notify the user.', image: 'images/pro1.gif' },
    { id: 2, name: 'GymKeeper', description: 'Introducing GymKeeper mobile app, designed to revolutionize your fitness journey.   This app offers seamless membership management. Track your progress, , and all from the convenience of your phone.', image: 'images/project2.jpeg' },
    { id: 3, name: 'FixitNow', description: 'FixItNow, an intuitive mobile application designed for employees to effortlessly report workplace issues directly to their company\'s PR or maintenance team. By simplifying the reporting process, FixItNow empowers employees to enhance their work environment with minimal effort.', image: 'images/project3.png' },
  ];

  return (
    <div className="our-work">

      <div className='our-work-heading'>
      <h1>Check Our Recent Projects</h1>
      </div>

      <div className='cards-container'>
      {projectss.map((project) => (

      <div className='card' key={project.id}>

          <img src={project.image} alt={project.name} />
          <h3>{project.name}</h3>
          <p>{project.description}</p>

        </div>     
      ))}
      </div>

      
    </div>
  );
};
//The map() function is called on the projectss array to iterate over each project object.
//This function transforms each object into a JSX element (a card displaying the project's details).
export default OurWork;