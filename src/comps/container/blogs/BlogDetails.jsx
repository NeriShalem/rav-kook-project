import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../../useFetch";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isLoading,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const [playerSrc, setPlayerSrc] = useState(null);
  const navigate = useNavigate();

  const handleDel = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="BlogDetails">
      {error && <div>{error}</div>}
      {isLoading && <div className="loader"></div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>author: {blog.author}</p>
          <div>{blog.body}</div>
          <div>{blog.url}</div>
          <button onClick={handleDel}>del</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
