import React from 'react'
import '../styles/Signup.scss';

function SiginUp() {
  return (
    <div className="signupContainer">
      <form className="signform">
        <h1>Welcome to EApp </h1>
        <div>
          <input type="text" placeholder="Full Names" className="inptB" />
        </div>
        <div>
          <input type="email" placeholder="User Email" className="inptB" />
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter yor password"
            className="inptB"
          />
        </div>
        <div>
          <button className="Sbutton">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default SiginUp