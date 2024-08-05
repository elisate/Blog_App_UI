import React from 'react'
import '../styles/Signup.scss';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { Notify } from 'notiflix';


function SiginUp() {
  const navigate = useNavigate();
   const {
     register,
     handleSubmit,
     formState: { errors },
   } = useForm();
   console.log(errors);

   const onsubmit = async (data) => {
     console.log(data);
     const { fullNames, email, password } = data;
     try {
       const formData = new FormData();
       formData.append("fullNames", fullNames);
       formData.append("email", email);
       formData.append("password", password);

       const res = await axios.post(
         "http://localhost:3000/auth/signup",
         formData,
         {
           headers: {
             "Content-Type": "application/json",
           },
         }
       );

       if (res.status === 200) {
         Notify.success("You have signed up successfully!");
         navigate('/login')
       } else {
         Notify.failure("Sign up failed. Please try again.");
       }
     } catch (error) {
       console.log(error);
       Notify.failure("Sign up failed. Please try again.");
     }
   };
  return (
    <div className="signupContainer">
      <form className="signform" onSubmit={handleSubmit(onsubmit)}>
        <h1>Welcome to EApp </h1>
        <div>
          <input
            type="text"
            placeholder="Full Names"
            className="inptB"
            name="fullNames"
            {...register("fullNames", { required: true })}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="User Email"
            className="inptB"
            name="email"
            {...register("email", { required: true })}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter yor password"
            className="inptB"
            name='password'
            {...register("password", { required: true })}
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