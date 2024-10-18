import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-left">
          <img 
            src="https://www.polyhedra.network/assets/static/logo-with-text.fe10e011.svg" 
            alt="Polyhedra Logo" 
            className="footer-logo"
          />
        </div>
        <div className="footer-right">
          <nav className="footer-nav">
            <a href="/contact">Contact Us</a>
            <a href="https://t.me/+mmG9soN2HpgyMGU5" target="_blank" rel="noopener noreferrer">Telegram</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
