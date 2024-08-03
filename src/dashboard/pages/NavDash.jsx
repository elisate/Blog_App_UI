import React from "react";
import { IoMenu } from "react-icons/io5";
import '../styl/nav.scss';
function NavDash() {
  return (
    <div className="navcontainer">
      <div>
        <IoMenu className="iconn"/>
      </div>
      <div className="content">
        <img src="profile.png" className="img" />
        <span>Admin</span>
      </div>
    </div>
  );
}

export default NavDash;
