import React, { useState, useEffect } from "react";
import "../styles/landing.scss";
import { CgArrowLongRight } from "react-icons/cg";
import axios from "axios";
import CommentModal from "./CommentModal";

function LandingPage() {
  const [blogs, setBlogs] = useState([]);
  const [modal,setModal]=useState(false);
  useEffect(() => {
    const getPrograms = async () => {
      try {
        const response = await axios.get("http://localhost:3000/posts");
        setBlogs(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPrograms();
  }, []);

  const handleModal=()=>{
    setModal(!modal)
  }

  return (
    <div className="landingHolder">
      {modal && <CommentModal handleModal={handleModal} />}
      {blogs.map((e) => (
        <div key={e.id} className="contentBlogs">
          <div>
            <img src={e.image} className="landImage" alt={e.title} />
          </div>
          <div className="btitle">{e.title}</div>
          <div className="bcontent">{e.content}</div>
          <div className="readApp" onClick={handleModal}>
            <span>Comment</span>
            <CgArrowLongRight />
          </div>
        </div>
      ))}
    </div>
  );
}

export default LandingPage;
