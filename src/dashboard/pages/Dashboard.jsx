import React from 'react';
import '../styl/dashboard.scss';
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { MdDeleteForever } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";

function Dashboard() {

  const[blog,setBlog]=useState([]);

 useEffect(() => {
   const getprogram = async () => {
     try {
       const response = await axios.get("http://localhost:3000/posts");
       console.log(response.data);
       setBlog(response.data);
     } catch (err) {
       console.log(err);
     }
   };
   getprogram();
 }, []);

  return (
    <div className="contentHolder">
      <div className="textA">
        <div className="blogHeader">All Blogs</div>
        <div className="txtB">
          <span>{blog.length}</span> <span>Blogs</span>
        </div>
      </div>
      <div className="addtext">
        <Link to="/addblog">
          <button className="addblog">Add Blog</button>
        </Link>
      </div>
      <div className="blog-table-container">
        <table className="blog-table">
          <thead>
            <tr>
              <th>Images</th>
              <th>Blog Title</th>
              <th>Blog Content</th>
              <th>Authorname</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {blog.map((item, index) => (
              <tr key={index}>
                <td>
                  <img src={item.image} className="blog-image" />
                </td>
                <td>{item.title}</td>
                <td>{item.content}</td>
                <td>
                  <td>{item.authorname}</td>
                </td>

                <td>
                  <FiEdit3 className="edit" />
                  <MdDeleteForever className="delete" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard