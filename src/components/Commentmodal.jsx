import React, { useState } from "react";
import "../styles/modal.scss";
import axios from "axios";

const CommentModal = ({ handleModal, postId }) => {
  const [comment, setComment] = useState("");
  const token = localStorage.getItem("userToken");
  console.log("Token being sent:", token);
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      alert("No valid token found. Please log in again.");
      return;
    }

    try {
      await axios.post(
        `http://localhost:3000/comments/${postId}`,
        { content: comment },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Comment submitted!");
      setComment(""); // Clear the textarea
      handleModal(); // Close the modal after submission
    } catch (error) {
      console.error("Error submitting comment:", error);
      alert("Failed to submit comment. Please try again.");
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
          <button type="submit">Submit</button>
        </form>
        <button onClick={handleModal}>Close</button>
      </div>
    </div>
  );
};

export default CommentModal;
