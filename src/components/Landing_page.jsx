import React, { useState, useEffect } from "react";
import "../styles/landing.scss";
import { CgArrowLongRight } from "react-icons/cg";
import axios from "axios";
import CommentModal from "./CommentModal";

function LandingPage() {
  const [blogs, setBlogs] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null); // State to hold the selected post ID

  useEffect(() => {
    const getPrograms = async () => {
      try {
        const response = await axios.get("http://localhost:3000/posts");
        console.log(response.data); // Log the data to check its structure
        setBlogs(response.data);
        console.log("++++++++++",response.data)
      } catch (err) {
        console.log(err);
      }
    };
    getPrograms();
  }, []);

  const handleModal = (id) => {
    setSelectedPostId(id); // Set the selected post ID
    setModal(!modal); // Toggle the modal state
  };

  return (
    <div className="landingHolder">
      {modal && (
        <CommentModal handleModal={handleModal} postId={selectedPostId} />
      )}{" "}
      {/* Pass postId to CommentModal */}
      {blogs.map((e) => (
        <div key={e.id} className="contentBlogs">
          {" "}
          {/* Use e.id correctly */}
          <div>
            <img src={e.image} className="landImage" alt={e.title} />
          </div>
          <div className="btitle">{e.title}</div>
          <div className="bcontent">{e.content}</div>
          <div className="readApp" onClick={() => handleModal(e.id)}>
            {" "}
            {/* Pass post ID to handleModal */}
            <span>Comment</span>
            <CgArrowLongRight />
          </div>
        </div>
      ))}
    </div>
  );
}

export default LandingPage;
