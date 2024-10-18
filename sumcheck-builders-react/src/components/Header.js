import React from 'react';
import logo from '../polyhedra-logo.png';

const Header = () => {
  return (
    <header className="header">
      {/* <img src={logo} alt="Sumcheck Builders Logo" className="logo" /> */}
      <div className="header-text">
        <h1 className="title">Sumcheck Builders Seminars</h1>
        <p className="tagline">Advancing Zero-Knowledge Proofs and Sum-Check Protocols</p>
      </div>
    </header>
  );
};

export default Header;
