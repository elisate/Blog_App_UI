import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import ReactPaginate from "react-paginate";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styl/dashboard.scss";
import '../styl/pagination.scss';

function Dashboard() {
  const [blog, setBlog] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const blogsPerPage = 3;

  useEffect(() => {
    const getprogram = async () => {
      try {
        const response = await axios.get("http://localhost:3000/posts");
        setBlog(response.data);
        setPageCount(Math.ceil(response.data.length / blogsPerPage));
      } catch (err) {
        console.log(err);
      }
    };
    getprogram();
  }, []);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const deleteBlog = async (id) => {
    const userToken = JSON.parse(localStorage.getItem("userToken"));
    let token = userToken?.access_token;

    try {
      await axios.delete(`http://localhost:3000/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBlog(blog.filter((item) => item.id !== id));
      toast.success("Blog deleted successfully!");
    } catch (err) {
      console.log(err);
      toast.error("Failed to delete the blog!");
    }
  };

  const offset = currentPage * blogsPerPage;
  const currentBlogs = blog.slice(offset, offset + blogsPerPage);

  return (
    <div className="contentHolder">
      <ToastContainer />
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
            {currentBlogs.map((item, index) => (
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
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default Dashboard;
