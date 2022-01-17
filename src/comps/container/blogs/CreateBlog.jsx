import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("neriel");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsLoading(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("add a new blog");
      setIsLoading(false);
      navigate("/");
    });
  };
  return (
    <div className="createBlog">
      <h2>הוספת בלוג חדש</h2>
      <form onSubmit={handleSubmit}>
        <span>כותרת הבלוג:</span>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <span>טקסט:</span>
        <textarea required onChange={(e) => setBody(e.target.value)}></textarea>
        <span>מחבר</span>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="neriel">Neriel</option>
          <option value="ortal">Ortal</option>
        </select>
        {!isLoading && <button>הוסף בלוג</button>}
        {isLoading && <button disabled>בטעינה...</button>}
      </form>
      <p>{title}</p>
      <p>{body}</p>
      <p>{author}</p>
    </div>
  );
};

export default CreateBlog;
