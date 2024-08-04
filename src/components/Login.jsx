import React from "react";
import "../styles/login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Notify } from "notiflix";

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);

  const onsubmit = async (data) => {
    console.log(data);
    const { email, password } = data;
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      const res = await axios.post(
        "http://localhost:3000/auth/login",
        formData
      );

      console.log(res.data);
      // Store only the access token
      localStorage.setItem("userToken", res.data.access_token);
     console.log("Stored Token:", localStorage.getItem("userToken"));
      Notify.success("Login successful!");

      if (res.data.user.role === "admin") {
        navigate("/dashboard");
      } else {
        navigate("/landing");
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 404) {
        Notify.failure("User does not exist. Please sign up.");
      } else if (error.response && error.response.status === 401) {
        Notify.failure("Invalid credentials. Please try again.");
      } else {
        Notify.failure("Login failed. Please try again.");
      }
    }
  };

  return (
    <div className="loginContainer">
      <form className="loginForm" onSubmit={handleSubmit(onsubmit)}>
        <h1>Welcome To EApp</h1>
        <div>
          <input
            type="email"
            placeholder="Enter your Email"
            className="inptA"
            name="email"
            {...register("email", { required: true })}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter your Password"
            className="inptA"
            name="password"
            {...register("password", { required: true })}
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

export default Login;
