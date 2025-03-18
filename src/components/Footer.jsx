import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-links">
          <a href="https://www.linkedin.com/in/pankaj-betewad-52a1b127a/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/pankajbetewad" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:pankaj.betewad@example.com">
            <FaEnvelope />
          </a>
        </div>
        <p>&copy; 2023 Pankaj Betewad. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;