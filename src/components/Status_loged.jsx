import React, { useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import "../styles/status_loged.scss";
import Profile from "./Profile";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Status_loged = () => {
  const [profile, setProfile] = useState(false);

  const handleprofile = () => {
    setProfile(!profile);
  };

  let userToken = JSON.parse(localStorage.getItem("userToken"));
  let token = userToken?.access_token;
  let username = userToken?.user?.fullNames;
  let email = userToken?.user?.email;
  let role = userToken?.user?.role;

  console.log("wwww", role); // Debugging output
  console.log("nnnnnnnnn", username); // Debugging output

  function Logout() {
    localStorage.removeItem("userToken");
    window.location.href = "/";
  }

  if (role === undefined) {
    return (
      <div className="status-a">
        <Link to="/login" title="Reserve">
          <button className="quate">Login</button>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="logout-status">
        <div>
          <div className="text-status">
            <FaRegCircleUser
              className="update-profile"
              onClick={handleprofile}
            />
            <div className="email" onClick={handleprofile}>
              {username || "Guest"}{" "}
            </div>
            <RiArrowDropDownLine
              className="drop-down-status"
              onClick={handleprofile}
            />
          </div>
        </div>
        {profile && <Profile handleprofile={handleprofile} />}
      </div>
    );
  }
};

export default Status_loged;
