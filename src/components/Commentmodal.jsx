import React, { useEffect, useState } from "react";
import "../styles/modal.scss";

const CommentModal = ({handleModal}) => {

  return (
    <div className="Overlay">
      <div className="Modal">
        <form>
          <textarea placeholder="Write your comment here"></textarea>
          <button type="submit">Submit</button>
        </form>
        <button onClick={handleModal}>Close</button>
      </div>
    </div>
  );
};

export default CommentModal;
