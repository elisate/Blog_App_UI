import React from "react";
import "../styl/addblog.scss";
import { useForm } from "react-hook-form";
import axios from "axios";

function AddBlogs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);

  const onsubmit = async (data) => {
    const token = localStorage.getItem("userToken");

    console.log(data);
    const { image, title, content, authorname } = data;
    try {
      const formData = new FormData();
      formData.append("image", image[0]); // Access the first file
      formData.append("title", title);
      formData.append("content", content);
      formData.append("authorname", authorname);

      const res = await axios.post("http://localhost:3000/posts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(res.data); // Optional: log response data
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="postContainer">
      <div className="headerform">Add Blog</div>
      <form className="postForm" onSubmit={handleSubmit(onsubmit)}>
        <div className="formfix">
          <div className="iputcontainer">
            <div>
              <label className="labels">Images</label>
              <br />
              <input
                type="file"
                placeholder="choose image"
                className="inptAdd"
                name="image"
                {...register("image", { required: true })}
              />
            </div>
            <div>
              <label className="labels">Blog Title</label>
              <br />
              <input
                type="text"
                placeholder="Enter the blog title"
                className="inptAdd"
                name="title"
                {...register("title", { required: true })} // Register this input
              />
            </div>
            <div>
              <label className="labels">Blog Author</label>{" "}
              {/* Corrected label */}
              <br />
              <input
                type="text"
                placeholder="Enter the blog Author"
                className="inptAdd"
                name="authorname"
                {...register("authorname", { required: true })}
              />
            </div>
          </div>
          <div>
            <label className="labels">Blog Content</label>
            <br />
            <textarea
              placeholder="Enter Blog Content"
              className="inptAddArea"
              name="content"
              {...register("content", { required: true })}
            />
          </div>
        </div>
        <div className="submit">
          <button className="addButton">Add blog</button>
        </div>
      </form>
    </div>
  );
}

export default AddBlogs;
