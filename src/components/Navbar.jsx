import React from 'react'
import '../styles/navbar.scss'
import '../styles/button.scss';
import { Link } from 'react-router-dom';
import Status_loged from './Status_loged';
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
          
            
            <Status_loged/>
         
        </div>
      </div>
    </div>
  );
}

export default Navbar