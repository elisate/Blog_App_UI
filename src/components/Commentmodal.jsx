import React, { useState } from "react";
import "../styles/modal.scss";
import axios from "axios";
import { Notify } from "notiflix";

const CommentModal = ({ handleModal, postId }) => {
  const [comment, setComment] = useState("");
  const userToken = JSON.parse(localStorage.getItem("userToken"));
  let token = userToken?.access_token;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      Notify.failure("Please log in to submit a comment.");
      return;
    }

    try {
      await axios.post(
        `http://localhost:3000/comments/${postId}`,
        { content: comment },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      Notify.success("Comment submitted successfully!");
      setComment(""); // Clear the textarea
      handleModal(); // Close the modal after submission
    } catch (error) {
      console.error("Error submitting comment:", error);
      Notify.failure("Failed to submit comment. Please try again.");
    }
  };

  return (
    <div className="Overlay">
      <div className="Modal">
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Write your comment here"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
          <div className="btt">
            <button type="submit" className="button1">
              Submit
            </button>
            <button type="button" className="button2" onClick={handleModal}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommentModal;
