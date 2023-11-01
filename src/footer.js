import React from 'react';
import './cards.css'; // Create a separate CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
        <p>Contact: +254202739893/2739894/2739896</p>
        <p>Address: Maktaba Kuu Building, Upper Hill</p>

        <p>
          Location:{' '}
          <a
            href="https://maps.app.goo.gl/4WmWDd2cZ3gpu5MFA"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Google Maps
          </a>
        </p>
      </div>
      <div className="social-icons">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://www.linkedin.com/company/kenya-national-library-service/mycompany/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/knlsmedia/#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://youtube.com/@knlsmedia8721?si=kubJnlAJltDI-3CD" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube"></i>
        </a>
        <a
          href="https://twitter.com/knlsmedia" target="_blank" rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i> 
        </a>
        <a href="https://www.knls.ac.ke/" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-globe"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
