import React from 'react';
import '../styles/login.scss';
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="loginContainer">
      <form className="loginForm">
        <h1>Welcome To EApp</h1>
        <div>
          <input
            type="email"
            placeholder="Enter your Email"
            className="inptA"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter your Password"
            className="inptA"
          />
        </div>
        <div>
          <button className="loginButton">Login</button>
        </div>
        <div className="ltext">
          Don't have an account?{" "}
          <Link to="/signUp">
            <span className="designtext">Sign Up</span>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login