import Blogs from "./blogs/blogs";
// import { useState, useEffect } from "react";
import useFetch from "../../useFetch";

export default function Center_div() {
  const findBlog = "all";
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs");

  console.log(blogs);

  return (
    <div className="Center_div">
      {error && <div>{error}</div>}
      {isLoading && <div className="loader"></div>}
      {blogs && (
        <Blogs
          findBlog={findBlog}
          InfoBlogs={blogs}
          // handleDelete={handleDelete}
        />
      )}
    </div>
  );
}
