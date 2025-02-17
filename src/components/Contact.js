
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_1yd5oia',   // Replace with your actual EmailJS Service ID
        'template_h47csl3',  // Replace with your actual EmailJS Template ID
        form.current,
        't3KORAOVydZi2lI39'    // Replace with your actual EmailJS Public Key
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('Message sent successfully!');
          form.current.reset(); // Clear the form after sending
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message. Please try again later.');
        }
      );
  };

  return (

    <div className='main'>

    <div className='left'>
        <h2> Contact us </h2>
    </div>


<div className='right'>
<section className="contact">
<h2>Contact Us</h2>
<form ref={form} onSubmit={sendEmail} className="contact-form">
<label>Name</label>
<input type="text" name="from_name" placeholder="Your Name" required />

<label>Email</label>
<input type="email" name="from_email" placeholder="Your Email" required />

<label>Message</label>
<textarea name="message" placeholder="Enter Your Message Here" required />

<button type="submit" className="send-button">Send</button>
</form>
</section>

</div>

</div>


  );
};

export default Contact;

