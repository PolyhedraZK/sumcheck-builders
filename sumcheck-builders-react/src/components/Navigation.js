import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalendarAlt, faHistory, faBook } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
            <FontAwesomeIcon icon={faHome} style={{ marginRight: '8px' }} /> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/upcoming" className={({ isActive }) => isActive ? "active" : ""}>
            <FontAwesomeIcon icon={faCalendarAlt} style={{ marginRight: '8px' }} /> Upcoming Talks
          </NavLink>
        </li>
        <li>
          <NavLink to="/past" className={({ isActive }) => isActive ? "active" : ""}>
            <FontAwesomeIcon icon={faHistory} style={{ marginRight: '8px' }} /> Past Talks
          </NavLink>
        </li>
        <li>
          <NavLink to="/resources" className={({ isActive }) => isActive ? "active" : ""}>
            <FontAwesomeIcon icon={faBook} style={{ marginRight: '8px' }} /> Resources
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
