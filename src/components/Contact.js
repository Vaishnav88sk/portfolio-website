import React from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out if you're interested in working together or if you have any questions.</p>
      <ul>
        <li><FaEnvelope size={16} /> <a href="mailto:vaishnavsk8804@gmail.com">vaishnavsk8804@gmail.com</a></li>
        <li><a href="https://linkedin.com/in/vaishnavkale88" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} /> 
          </a>
          <a href="https://github.com/Vaishnav88sk" target="_blank" rel="noopener noreferrer" >
            <FaGithub size={30} /> 
            </a>
            </li>
      </ul>
    </section>
  );
}

export default Contact;
