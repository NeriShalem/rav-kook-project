import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound">
      <h1>404</h1>
      <h2>Sorry</h2>
      <p>That page cannot be found</p>
      <Link to="/">GO HOME</Link>
    </div>
  );
};

export default NotFound;
