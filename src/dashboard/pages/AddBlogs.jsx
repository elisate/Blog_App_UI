import React from 'react'
import '../styl/addblog.scss';
function AddBlogs() {
  return (
    <div className="postContainer">
      <div className='headerform'>Add Blog</div>
      <form className="postForm">
        <div>
          <label className="labels">Images</label>
          <br />
          <input type="file" placeholder="choose image" className="inptAdd" />
        </div>
        <div>
          <label className="labels">Blog Title</label>
          <br />
          <input
            type="text"
            placeholder="Enter the blog title"
            className="inptAdd"
          />
        </div>
        <div>
          <label className="labels">Blog Content</label>
          <br />
          <textarea placeholder="Enter Blog Content" className="inptAddArea" />
        </div>
        <div>
          <button className="addButton">Add blog</button>
        </div>
      </form>
    </div>
  );
}

export default AddBlogs