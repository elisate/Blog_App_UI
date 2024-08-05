import React from "react";
import "../styles/profile.scss";
import { IoMdCloseCircle } from "react-icons/io";
import { FaUserAlt, FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { IoMdLogIn } from "react-icons/io";
import { Link } from "react-router-dom";

function Profile({ handleprofile }) {
 let userToken = JSON.parse(localStorage.getItem("userToken"));
 let token = userToken?.access_token;
 let username = userToken?.user?.fullNames;
 let email = userToken?.user?.email;
 let role = userToken?.user?.role;

 console.log("wwww", role); // Debugging output
 console.log("nnnnnnnnn", username); 
  function Logout() {
    localStorage.removeItem("userToken");
    window.location.href = "/";
  }

  return (
    <div className="modal-overlay">
      <div className="profile-container">
        <div className="prof-a">
          <div className="prof-text">
            Welcome! <b>{username}</b>
          </div>

          <IoMdCloseCircle onClick={handleprofile} className="close-profile" />
        </div>

        <div className="prof-user1">
          <div>
            <FaUserAlt className="icon-profile" />
          </div>
          <div>
            {username}<br />
            <span className="user-email">{email}</span>
          </div>
        </div>
        <div className="prof-user2">
          {" "}
          <div>
            <Link to="https://wa.me/250787239952">
              <FaWhatsapp className="icon-profile" />
            </Link>
          </div>
          <div className="texoc">
            <Link to="https://wa.me/250787239952">Click To Chat</Link>
          </div>
        </div>
        <div className="prof-user3">
          {" "}
          <div className="contacp">
            <Link to="/contact">
              <CgMail className="icon-profile" onClick={handleprofile} />
            </Link>
          </div>
          <div className="contactp1" onClick={handleprofile}>
            <Link to="/contact">Post Your Contact</Link>
          </div>
        </div>
        <div className="prof-user4">
          <div>
            <IoMdLogIn className="icon-profile" onClick={Logout} />
          </div>
          <div>
            <button type="submit" className="quateprofile" onClick={Logout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
