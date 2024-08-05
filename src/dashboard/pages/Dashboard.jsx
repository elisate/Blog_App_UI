import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import "../styl/dashboard.scss";

function Dashboard() {
  const [blog, setBlog] = useState([]);
   
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

  const deleteBlog = async (id) => {
     const userToken = JSON.parse(localStorage.getItem("userToken"));
     let token = userToken?.access_token;
   
    try {
      await axios.delete(`http://localhost:3000/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });
      // Update the state to remove the deleted blog from the list
      setBlog(blog.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

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
                  <img src={item.image} className="blog-image" alt="Blog" />
                </td>
                <td>{item.title}</td>
                <td>{item.content}</td>
                <td>{item.authorname}</td>
                <td>
                  <FiEdit3 className="edit" />
                  <MdDeleteForever
                    className="delete"
                    onClick={() => deleteBlog(item.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
