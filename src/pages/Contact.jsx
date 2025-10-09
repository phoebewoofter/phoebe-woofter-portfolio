import React from "react";
import linkedin from '../assets/linkedin.png';
import email from '../assets/email.png';
import github from '../assets/github.png';
import './Contact.css';

export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <p>Get in touch with me via <a href="mailto:phoebewoofter@gmail.com">email</a>, <a href="https://www.linkedin.com/in/phoebe-woofter-a677b01a6/" target="_blank" rel="noopener noreferrer">LinkedIn</a>, or <a href="https://github.com/phoebewoofter" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
      <ul className="contact-info">
        <li><a href="mailto:phoebewoofter@gmail.com"><span style={{ backgroundImage: `url(${email})` }}></span></a></li>
        <li><a href="https://www.linkedin.com/in/phoebe-woofter-a677b01a6/" target="_blank" rel="noopener noreferrer"><span style={{ backgroundImage: `url(${linkedin})` }}></span></a></li>
        <li><a href="https://github.com/phoebewoofter" target="_blank" rel="noopener noreferrer"><span style={{ backgroundImage: `url(${github})` }}></span></a></li>
      </ul>
    </div>
  );
}
