import { Link } from "react-router-dom";

const Blogs = ({ findBlog, InfoBlogs, handleDelete }) => {
  return (
    <div>
      <h1 className="titleBlog">הבלוג של {findBlog}</h1>

      {InfoBlogs.filter((blog) => {
        if (findBlog === "all") {
          return blog;
        }
        if (blog.author === findBlog) {
          return blog;
        }
      }).map((blog) => {
        return (
          <div className="blogPreview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h1>{blog.title}</h1>
            </Link>
            <p>{blog.author}</p>
            {/* <button onClick={() => handleDelete(blog.id)}>🗑️</button> */}
          </div>
        );
      })}
    </div>
  );
};

export default Blogs;
