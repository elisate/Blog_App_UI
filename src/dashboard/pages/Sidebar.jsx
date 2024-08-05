import React from 'react'
import '../styl/Sidebar.scss';
import { FaBlog,FaUsers } from "react-icons/fa6";

import { FaRegCommentAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidbarContainer">
      <div className="startText">
        <h1>
          <span className="tdesign">E</span>App
        </h1>
      </div>
      <div className="textContainer">
        <div className="t1">
          <Link to="/dashboard">
            {" "}
            <FaBlog className="icon" />
          </Link>
          <Link to="/dashboard">
            <span className="text">Blogs</span>
          </Link>
        </div>
        <div className="t1">
          <Link to="/user">
            <FaUsers className="icon" />
          </Link>
          <Link to="/user">
            <span className="text">Users</span>
          </Link>
        </div>
        <div className="t3">
          <Link to="/comment">
            <FaRegCommentAlt className="icon" />
          </Link>
        <Link to='/comment'><span className="text">Comment</span></Link>  
        </div>
      </div>
      <div className="endbutto">
      <Link to='/landing'> <button className="logout">Logout</button></Link> 
      </div>
    </div>
  );
}

export default Sidebar