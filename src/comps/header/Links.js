import { Link } from "react-router-dom";

export default function Links() {
  return (
    <div className="Links">
      <img
        src="https://www.yedidhemed.co.il/wp-content/uploads/2018/05/image09.jpg"
        alt="ravkook"
        className="img_header"
      ></img>
      <Link to="/" className="a_links_header">
        בית
      </Link>
      <Link to="/VOD" className="a_links_header">
        שיעורים
      </Link>
      <Link to="/CreateBlog" className="a_links_header">
        בלוג חדש
      </Link>
    </div>
  );
}
