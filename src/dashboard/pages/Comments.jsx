import React, { useState, useEffect } from "react";
import "../styl/comment.scss";
import axios from "axios";

function Comments({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/comments/${postId}/comments`,
          
        );
        console.log(response.data);
        setComments(response.data); // Assuming response.data contains the comments array
      } catch (err) {
        console.log(err);
      }
    };

    if (postId) {
      getComments();
    }
  }, [postId]); // Add postId as a dependency

  return (
    <div className="commentContainer">
      <div className="user-table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Contents</th>
            </tr>
          </thead>
          <tbody>
            {comments.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.content}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Comments;
