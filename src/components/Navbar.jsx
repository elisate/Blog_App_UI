import React from 'react'
import '../styles/navbar.scss'
import '../styles/button.scss';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className="navbarHolder">
      <div className="navbar">
        <div>
          <h2 className="logo">
            <span className="logoa">E</span>App
          </h2>
        </div>
        <div>
          <Link to="/login">
            <button className="buttonFix">LOGIN</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar