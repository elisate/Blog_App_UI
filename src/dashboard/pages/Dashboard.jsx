import React from 'react';
import '../styl/dashboard.scss';
import { Link } from 'react-router-dom';

function Dashboard() {

   const blog = [
     {
       image: "/ro1.jpg",
       title: "hello umuganura",
       content: "welcome welcome dear blogs welcome welcome dear blogs",
     },
     {
       image: "/ro1.jpg",
       title: "hello umuganura",
       content: "welcome welcome dear blogs welcome welcome dear blogs",
     },
     {
       image: "/ro1.jpg",
       title: "hello umuganura",
       content: "welcome welcome dear blogs welcome welcome dear blogs",
     },
   ];
  return (
    <div className="contentHolder">
      <div className="textA">
        <div className="blogHeader">All Blogs</div>
        <div className="txtB">
          <span>3</span> <span>Blogs</span>
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
              <th>Comment</th>
            </tr>
          </thead>
          <tbody>
            {blog.map((item, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="blog-image"
                  />
                </td>
                <td>{item.title}</td>
                <td>{item.content}</td>
                <td>{item.comment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard