import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">
            <i className="fas fa-home"></i> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/upcoming" activeClassName="active">
            <i className="fas fa-calendar-alt"></i> Upcoming Talks
          </NavLink>
        </li>
        <li>
          <NavLink to="/past" activeClassName="active">
            <i className="fas fa-history"></i> Past Talks
          </NavLink>
        </li>
        <li>
          <NavLink to="/resources" activeClassName="active">
            <i className="fas fa-book"></i> Resources
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
