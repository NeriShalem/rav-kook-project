import Header from "./comps/header/Header";
import Container from "./comps/container/Container";
import Footer from "./comps/footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VOD from "./comps/container/VOD/VOD";
import BlogDetails from "./comps/container/blogs/BlogDetails";
import CreateBlog from "./comps/container/blogs/CreateBlog";
import NotFound from "./comps/container/blogs/NotFound";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route extact path="/" element={<Container />} />
        <Route extact path="/VOD" element={<VOD />} />
        <Route extact path="/Blogs/:id" element={<BlogDetails />} />
        <Route extact path="/CreateBlog" element={<CreateBlog />} />
        <Route extact path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
