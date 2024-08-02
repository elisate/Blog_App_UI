import React from 'react'
import '../styles/navbar.scss'
import '../styles/button.scss';
function Navbar() {
  return (
    <div className='navbarHolder'>
      <div
      className='navbar'
      >
        <div><h2 className='logo'><span className='logoa'>E</span>App</h2></div>
      <div><button className='buttonFix'>LOGIN</button></div>
      </div>
    </div>
  );
}

export default Navbar